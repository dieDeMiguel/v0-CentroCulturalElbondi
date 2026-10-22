const FORM_ID = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID

export type FormspreeResult = { ok: true } | { ok: false; error: string }

export const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())

export async function submitToFormspree(fields: Record<string, string>): Promise<FormspreeResult> {
  if (!FORM_ID) {
    return { ok: false, error: 'El formulario no esta configurado todavia.' }
  }

  try {
    const response = await fetch(`https://formspree.io/f/${FORM_ID}`, {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(fields),
    })

    if (response.ok) return { ok: true }

    const data = await response.json().catch(() => null)
    const message = data?.errors?.map((err: { message: string }) => err.message).join(', ')
    return { ok: false, error: message || 'No pudimos enviar tus datos. Intenta de nuevo.' }
  } catch {
    return { ok: false, error: 'No pudimos enviar tus datos. Revisa tu conexion e intenta de nuevo.' }
  }
}
