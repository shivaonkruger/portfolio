import { useEffect, useState } from 'react'
import { profile } from '../data'

const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
const NAME = '[Shiva.Gupta]'

function randomChar() {
  return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]
}

function useScrambleReveal(text: string, tickMs = 45, ticksPerChar = 3) {
  const [display, setDisplay] = useState(() =>
    text.replace(/[a-zA-Z]/g, randomChar),
  )

  useEffect(() => {
    let frame = 0
    const id = setInterval(() => {
      frame += 1
      const revealedCount = Math.floor(frame / ticksPerChar)
      setDisplay(
        text
          .split('')
          .map((char, i) => {
            if (!/[a-zA-Z]/.test(char)) return char
            return i < revealedCount ? char : randomChar()
          })
          .join(''),
      )
      if (revealedCount >= text.length) {
        clearInterval(id)
        setDisplay(text)
      }
    }, tickMs)

    return () => clearInterval(id)
  }, [text, tickMs, ticksPerChar])

  return display
}

export default function Hero() {
  const name = useScrambleReveal(NAME)

  return (
    <section id="top" className="w-full px-24 sm:px-48 lg:px-64 pt-128 pb-96">
      <p className="text-label-lg uppercase text-muted-text mb-24">{profile.role}</p>
      <h1 className="font-medium leading-[0.92] tracking-[-0.03em] text-[clamp(3rem,11vw,331px)] font-mono">
        {name}
      </h1>
      <div className="mt-48 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-24 border-t border-border-grey pt-32">
        <p className="text-body-lg text-muted-text max-w-[560px]">
          Building AI-native products and full-stack systems — from
          self-correcting multi-agent orchestration to production
          e-commerce platforms.
        </p>
        <div className="flex gap-24 font-mono text-label-lg uppercase">
          <a href={profile.links.github} className="hover:text-muted-text transition-colors">GitHub</a>
          <a href={profile.links.linkedin} className="hover:text-muted-text transition-colors">LinkedIn</a>
          <a href={profile.links.leetcode} className="hover:text-muted-text transition-colors">LeetCode</a>
        </div>
      </div>
    </section>
  )
}
