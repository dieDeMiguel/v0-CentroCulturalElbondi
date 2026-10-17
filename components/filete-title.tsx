import Image from 'next/image'
import type { ReactNode } from 'react'

export function FileteTitle({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-center gap-2 md:gap-5">
        <Image
          src="/images/filete-scroll.webp"
          alt=""
          aria-hidden="true"
          width={346}
          height={664}
          className="filete-ornament hidden h-28 w-auto shrink-0 sm:block md:h-40 lg:h-48"
        />
        {children}
        <Image
          src="/images/filete-scroll.webp"
          alt=""
          aria-hidden="true"
          width={346}
          height={664}
          className="filete-ornament hidden h-28 w-auto shrink-0 -scale-x-100 sm:block md:h-40 lg:h-48"
        />
      </div>
      <Image
        src="/images/filete-divider.webp"
        alt=""
        aria-hidden="true"
        width={900}
        height={139}
        className="filete-ornament mt-5 h-auto w-64 md:w-96"
      />
    </div>
  )
}
