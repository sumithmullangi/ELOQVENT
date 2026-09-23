import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useEffect, useState } from 'react'
import { exploreLinks, product } from '../../content/product'
import { Button } from '../ui/Button'

export function ProductNav() {
  const [open, setOpen] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show only when scrolled past Hero section
      const shouldShow = window.scrollY > 280
      setVisible(shouldShow)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -24, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none fixed top-14 left-0 right-0 z-40 px-3 py-2 md:px-6"
        >
          <div className="pointer-events-auto mx-auto flex max-w-5xl items-center justify-between rounded-full border border-white/10 bg-[#161617]/85 px-4 py-2 shadow-[0_10px_40px_rgba(0,0,0,0.55)] backdrop-blur-xl md:px-5">
            <a href="#hero" className="text-[17px] font-semibold tracking-tight text-white md:text-[19px]">
              {product.shortName}
            </a>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Button variant="ghost" className="h-8 gap-1 px-3 text-[13px]" onClick={() => setOpen((v) => !v)}>
                  Explore
                  <ChevronDown size={14} />
                </Button>
                {open ? (
                  <div className="absolute right-0 top-[calc(100%+8px)] w-52 overflow-hidden rounded-2xl border border-white/10 bg-[#1d1d1f] py-2 shadow-2xl">
                    {exploreLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="block px-4 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
              <Button href="#shop" className="h-8 px-4 text-[13px]">
                Register
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

