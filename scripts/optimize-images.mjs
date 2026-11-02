// Recompresses oversized originals in public/ in place (same filename and format, so no
// references change). Run after adding new photos: `pnpm images:optimize` (add `--dry` to preview).
import sharp from 'sharp'
import { readdir, stat, readFile, writeFile } from 'node:fs/promises'
import { join, extname, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = fileURLToPath(new URL('../public', import.meta.url))
const MIN_BYTES = 400 * 1024
const MAX_EDGE = 2000
const dryRun = process.argv.includes('--dry')

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) yield* walk(path)
    else yield path
  }
}

const mb = (bytes) => `${(bytes / 1048576).toFixed(2)}MB`

let before = 0
let after = 0
let changed = 0

for await (const file of walk(ROOT)) {
  const ext = extname(file).toLowerCase()
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue
  const { size } = await stat(file)
  if (size < MIN_BYTES) continue

  const input = await readFile(file)
  // rotate() applies the EXIF orientation before metadata is stripped, so phone photos stay upright.
  const resized = sharp(input)
    .rotate()
    .resize({ width: MAX_EDGE, height: MAX_EDGE, fit: 'inside', withoutEnlargement: true })
  const output = await (ext === '.png'
    ? resized.png({ compressionLevel: 9, effort: 10 })
    : resized.jpeg({ quality: 82, mozjpeg: true })
  ).toBuffer()

  before += size
  if (output.length >= size * 0.95) {
    after += size
    console.log(`kept      ${mb(size)}  ${relative(ROOT, file)}`)
    continue
  }

  after += output.length
  changed++
  console.log(`${mb(size)} -> ${mb(output.length)}  ${relative(ROOT, file)}`)
  if (!dryRun) await writeFile(file, output)
}

console.log(`\n${changed} files recompressed: ${mb(before)} -> ${mb(after)}${dryRun ? ' (dry run, nothing written)' : ''}`)
