import Section from './Section'
import { currentlyInto } from '../data'

export default function CurrentlyInto() {
  return (
    <Section id="currently-into" index="06" title="[Currently Into]">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-24">
        {currentlyInto.map((item, i) => {
          const content = (
            <>
              <span className="font-mono text-label-sm text-muted-text">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="text-subheading mt-24">
                {item.topic}
                {item.link && <span className="ml-8">↗</span>}
              </p>
            </>
          )

          const className =
            'bg-[#f7f6f3] border border-border-grey rounded-md p-32 flex flex-col justify-between min-h-[180px]' +
            (item.link ? ' hover:border-foreground-black transition-colors' : '')

          return item.link ? (
            <a
              key={item.topic}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={className}
            >
              {content}
            </a>
          ) : (
            <div key={item.topic} className={className}>
              {content}
            </div>
          )
        })}
      </div>
    </Section>
  )
}
