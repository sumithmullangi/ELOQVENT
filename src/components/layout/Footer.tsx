import { useState } from 'react'
import { brand, footerGroups, footnotes } from '../../content/product'
import { cn } from '../../lib/cn'

export function Footer() {
  const [open, setOpen] = useState<string | null>(null)

  return (
    <footer className="border-t border-black/10 bg-[#f5f5f7] text-[#1d1d1f]">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <ol className="space-y-3 text-[12px] leading-5 text-[#6e6e73]">
          {footnotes.map((note, i) => (
            <li key={note}>
              <span className="mr-1">{i + 1}.</span>
              {note}
            </li>
          ))}
        </ol>
        <div className="mt-8 grid gap-2 border-t border-black/10 pt-8 md:grid-cols-3 lg:grid-cols-6 md:gap-6">
          {footerGroups.map((group) => {
            const expanded = open === group.title
            return (
              <div key={group.title} className="border-b border-black/10 md:border-none">
                <button
                  type="button"
                  className="flex w-full items-center justify-between py-3 text-left text-[12px] font-semibold md:cursor-default md:py-0"
                  onClick={() => setOpen(expanded ? null : group.title)}
                >
                  {group.title}
                  <span className="text-lg md:hidden">{expanded ? '−' : '+'}</span>
                </button>
                <ul className={cn('space-y-2 pb-3 text-[12px] text-[#424245] md:mt-3 md:block md:pb-0', expanded ? 'block' : 'hidden')}>
                  {group.links.map((link) => (
                    <li key={link}>
                      <a href="#shop" className="hover:underline">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
        <p className="mt-10 text-[12px] text-[#6e6e73]">
          More ways to shop: find an {brand.name} studio or call a specialist. This page is an original
          design-system recreation for the Eloqvent project — not affiliated with any phone maker.
        </p>
        <p className="mt-3 text-[12px] text-[#6e6e73]">
          Copyright © {new Date().getFullYear()} {brand.name} Studio. Placeholder content.
        </p>
      </div>
    </footer>
  )
}
