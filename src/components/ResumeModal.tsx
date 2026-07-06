import { useEffect } from 'react'
import PdfViewer from './PdfViewer'

const RESUME_SRC = '/shiva_resume_offcampus.pdf'

export default function ResumeModal({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground-black/60 backdrop-blur-sm px-16 py-32"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[720px] h-full max-h-[85vh] bg-surface-white border border-border-grey rounded-md overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-24 py-16 border-b border-border-grey">
          <p className="text-label-lg uppercase">Resume</p>
          <div className="flex items-center gap-16">
            <a
              href={RESUME_SRC}
              download
              aria-label="Download resume"
              className="text-foreground-black hover:text-muted-text transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3v12" />
                <path d="M7 10l5 5 5-5" />
                <path d="M5 21h14" />
              </svg>
            </a>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="text-foreground-black hover:text-muted-text transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18" />
                <path d="M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex-1 min-h-0">
          <PdfViewer src={RESUME_SRC} />
        </div>
      </div>
    </div>
  )
}
