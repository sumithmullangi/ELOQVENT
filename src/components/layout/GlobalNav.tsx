import { Search } from 'lucide-react'
import logoImg from '../../assets/logo.png'
import { brand } from '../../content/product'

export function GlobalNav() {
  return (
    <header className="sticky top-0 z-50 bg-black/80 text-[12px] text-white/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-12 max-w-[1024px] items-center justify-between px-4 md:px-6">
        <a
          href="#hero"
          className="flex items-center gap-2 transition-opacity hover:opacity-90"
          aria-label={brand.fullName || brand.name}
        >
          <img
            src={logoImg}
            alt={brand.fullName || brand.name}
            className="h-8 w-auto max-w-[180px] object-contain sm:max-w-[220px]"
          />
        </a>
        <div className="flex items-center gap-4">
          <button type="button" aria-label="Search" className="hover:text-white">
            <Search size={18} />
          </button>
        </div>
      </nav>
    </header>
  )
}


