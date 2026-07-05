import { useEffect, useRef, useState } from 'react'
import * as pdfjsLib from 'pdfjs-dist'
import workerSrc from 'pdfjs-dist/build/pdf.worker.min.mjs?url'

pdfjsLib.GlobalWorkerOptions.workerSrc = workerSrc

export default function PdfViewer({ src }: { src: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    const container = containerRef.current
    if (!container) return

    async function render() {
      try {
        const doc = await pdfjsLib.getDocument(src).promise
        if (cancelled || !container) return
        const width = container.clientWidth

        for (let i = 1; i <= doc.numPages; i++) {
          const page = await doc.getPage(i)
          if (cancelled) return

          const unscaled = page.getViewport({ scale: 1 })
          const scale = (width / unscaled.width) * (window.devicePixelRatio || 1)
          const viewport = page.getViewport({ scale })

          const canvas = document.createElement('canvas')
          canvas.width = viewport.width
          canvas.height = viewport.height
          canvas.style.width = '100%'
          canvas.style.height = '100%'
          canvas.style.display = 'block'

          const wrapper = document.createElement('div')
          wrapper.style.aspectRatio = `${unscaled.width} / ${unscaled.height}`
          wrapper.style.scrollSnapAlign = 'start'
          wrapper.style.flexShrink = '0'
          wrapper.appendChild(canvas)
          container.appendChild(wrapper)

          const ctx = canvas.getContext('2d')
          if (!ctx) continue
          await page.render({ canvasContext: ctx, viewport }).promise
        }
      } catch (err) {
        if (!cancelled) setError(String(err))
      }
    }

    render()
    return () => {
      cancelled = true
      if (container) container.innerHTML = ''
    }
  }, [src])

  if (error) {
    return (
      <div className="flex items-center justify-center h-full text-body-base text-muted-text">
        Couldn't load the PDF.
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      className="h-full w-full overflow-y-auto flex flex-col gap-8 [scroll-snap-type:y_mandatory] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    />
  )
}
