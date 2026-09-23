import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useEffect } from 'react'

type ModalProps = {
  open: boolean
  title: string
  body: string
  onClose: () => void
}

export function Modal({ open, title, body, onClose }: ModalProps) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-end justify-center bg-black/60 p-4 md:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 24, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg rounded-[28px] bg-[#1d1d1f] p-8 text-ink shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 id="modal-title" className="text-2xl font-semibold tracking-tight">
                {title}
              </h3>
              <button
                type="button"
                aria-label="Close"
                onClick={onClose}
                className="rounded-full bg-white/10 p-2 hover:bg-white/15"
              >
                <X size={18} />
              </button>
            </div>
            <p className="mt-4 text-[17px] leading-7 text-muted">{body}</p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
