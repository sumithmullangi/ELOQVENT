import logoImg from '../../assets/logo.png'
import { brand, product } from '../../content/product'

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white/70">
      <div className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logoImg}
                alt={brand.fullName || brand.name}
                className="h-8 w-auto object-contain brightness-110"
              />
            </div>
            <p className="mt-3 max-w-md text-sm text-neutral-400">
              {product.maxName} — Where Ideas Find Their Voice & Problems Find Their Solutions.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-neutral-300">
            <a href="#hero" className="transition-colors hover:text-white">
              Home
            </a>
            <a href="#tracks" className="transition-colors hover:text-white">
              About
            </a>
            <a href="#camera" className="transition-colors hover:text-white">
              Elocution
            </a>
            <a href="#aperture" className="transition-colors hover:text-white">
              Root Riddles
            </a>
            <a href="#gains" className="transition-colors hover:text-white">
              Takeaways
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>
            Copyright © {new Date().getFullYear()} {product.maxName}. Organized by {brand.fullName || brand.name}.
          </p>
          <p>
            Tech • Talk • Triumph
          </p>
        </div>
      </div>
    </footer>
  )
}
