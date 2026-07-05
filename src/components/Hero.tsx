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

function useSecondsLoop() {
  const [seconds, setSeconds] = useState(1)

  useEffect(() => {
    const id = setInterval(() => {
      setSeconds((s) => (s >= 60 ? 1 : s + 1))
    }, 1000)
    return () => clearInterval(id)
  }, [])

  return seconds
}

export default function Hero() {
  const name = useScrambleReveal(NAME)
  const seconds = useSecondsLoop()

  return (
    <section id="top" className="w-full px-24 sm:px-48 lg:px-64 pt-128 pb-96">
      <p className="text-label-lg uppercase text-muted-text mb-24">{profile.role}</p>
      <div className="flex flex-wrap items-baseline gap-24">
        <h1 className="font-medium leading-[0.92] tracking-[-0.03em] text-[clamp(3rem,11vw,331px)] font-mono">
          {name}
        </h1>
        <span className="font-mono text-muted-text leading-none text-[clamp(1.8rem,6.6vw,198.6px)]">
          {String(seconds).padStart(2, '0')}
        </span>
      </div>
      <div className="mt-48 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-24 border-t border-border-grey pt-32">
        <p className="text-body-lg text-muted-text max-w-[560px]">
          -The most creative is the the most personal.    [~Martin Scorsese]
          <br />
          -Sometimes it is the people no one can imagine anything of who do the things no one can imagine.    [~Alan Turing]
          <br />          
            -You could always be trying hard to make sense of thing but you can only connect dots looking backwards.   [~Steve Jobs]
        </p>
        <div className="flex gap-24 font-mono text-label-lg uppercase">
          <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="hover:text-muted-text transition-colors">GitHub</a>
          <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-muted-text transition-colors">LinkedIn</a>
          <a href={profile.links.leetcode} target="_blank" rel="noopener noreferrer" className="hover:text-muted-text transition-colors">LeetCode</a>
        </div>
      </div>
    </section>
  )
}
