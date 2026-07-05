import { profile } from '../data'

export default function Contact() {
  return (
    <footer id="contact" className="border-t border-border-grey">
      <div className="w-full px-24 sm:px-48 lg:px-64 py-96">
        <div className="flex items-baseline gap-16 mb-48">
          <span className="font-mono text-label-sm text-muted-text">05</span>
          <h2 className="text-display-lg">Contact</h2>
        </div>
        <a
          href={`mailto:${profile.email}`}
          className="block text-[clamp(2rem,6vw,72px)] leading-[1.05] tracking-[-0.02em] mb-48 hover:text-muted-text transition-colors"
        >
          {profile.email}
        </a>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-24 border-t border-border-grey pt-32">
          <p className="font-mono text-body-base text-muted-text">{profile.phone}</p>
          <div className="flex gap-24 font-mono text-label-lg uppercase">
            <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="hover:text-muted-text transition-colors">GitHub</a>
            <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-muted-text transition-colors">LinkedIn</a>
            <a href={profile.links.leetcode} target="_blank" rel="noopener noreferrer" className="hover:text-muted-text transition-colors">LeetCode</a>
          </div>
        </div>
        <p className="text-caption-xs text-muted-text mt-64">
          © {new Date().getFullYear()} {profile.name}. Built with React & Tailwind.
        </p>
      </div>
    </footer>
  )
}
