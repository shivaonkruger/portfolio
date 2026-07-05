import Section from './Section'
import PdfViewer from './PdfViewer'

export default function Publications() {
  return (
    <Section id="publications" index="03" title="Publications">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-48 items-stretch">
        <div className="border border-border-grey rounded-md overflow-hidden h-[75vh]">
          <PdfViewer src="/gen%20ai%20paper.pdf" />
        </div>
        <div className="flex items-center justify-center min-h-[300px] md:h-[75vh] border border-border-grey rounded-md">
          <p className="text-[clamp(2.5rem,6vw,80px)] leading-[1.05] tracking-[-0.02em] text-center px-24">
            Publications
            <br />
            in process
          </p>
        </div>
      </div>
    </Section>
  )
}
