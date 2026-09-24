import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { exploreLinks, product } from '../../content/product'
import { Button } from '../ui/Button'

export function ProductNav() {
  const [open, setOpen] = useState(false)
  const [visible, setVisible] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<number | null>(null)

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    setOpen(true)
  }

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current)
    }
    timeoutRef.current = window.setTimeout(() => {
      setOpen(false)
    }, 150)
  }

  useEffect(() => {
    const handleScroll = () => {
      // Show only when scrolled past Hero section
      const shouldShow = window.scrollY > 280
      setVisible(shouldShow)
    }

    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)
    handleScroll()

    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current)
      }
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
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
              <div
                className="relative"
                ref={menuRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Button
                  variant="ghost"
                  className="h-8 gap-1 px-3 text-[13px]"
                  onClick={() => setOpen((v) => !v)}
                >
                  Explore
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                  />
                </Button>
                <AnimatePresence>
                  {open && (
                    <motion.div
                      initial={{ opacity: 0, y: -6, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -6, scale: 0.96 }}
                      transition={{ duration: 0.18, ease: 'easeOut' }}
                      className="absolute right-0 top-[calc(100%+8px)] w-52 overflow-hidden rounded-2xl border border-white/10 bg-[#1d1d1f]/95 py-2 shadow-2xl backdrop-blur-xl"
                    >
                      {exploreLinks.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className="block px-4 py-2.5 text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                        >
                          {link.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <Button href="#tracks" className="h-8 px-4 text-[13px]">
                Register
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

