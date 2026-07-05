export const profile = {
  name: 'Shiva Gupta',
  role: 'Full Stack Developer / AI Systems Engineer',
  phone: '+91 7877993048',
  email: 'shivafy02@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/shiva-gupta02/',
    github: 'https://github.com/shivaonkruger',
    leetcode: 'https://leetcode.com/u/shivafy02/',
  },
  education: {
    school: 'Manipal University Jaipur',
    degree: 'B.Tech, Computer Science and Engineering',
    detail: '7.7 CGPA',
    period: '2023 — 2027',
  },
}

export const experience = [
  {
    company: 'Reliqus Consulting',
    location: 'New Delhi, India',
    roles: [
      {
        title: 'Full Stack Intern',
        period: 'June 2025 — August 2025',
        bullets: [
          'Designed and implemented a production-ready software architecture for designmumbai.com, as a junior developer optimizing responsive UI layouts using Redux and implementing CI/CD pipelines to streamline development and deployment workflows.',
          'Optimized application performance, minimized database load, and enhanced overall reliability through architectural integration of a Redis-based distributed lock system to reduce frequent database calls.',
        ],
      },
      {
        title: 'Frontend Design Intern',
        period: 'June 2024 — August 2024',
        bullets: [
          'Developed a responsive, high-performance e-commerce platform from Figma UI/UX prototypes, ensuring high-fidelity visual execution, structural SEO, and smooth animations using Bootstrap, JavaScript, and supporting libraries.',
          'Leveraged strict Git/GitHub version control workflows for agile team collaboration, resolved merge conflicts, and implemented cross-browser performance optimization best practices to reduce page load times.',
        ],
      },
    ],
  },
]

export const projects = [
  {
    name: 'Brainly',
    stack: ['ReactJS', 'MongoDB', 'TypeScript', 'Langchain', 'Docker', 'AWS (EC2)', 'CI/CD', 'Vercel'],
    github: '#',
    bullets: [
      { label: 'Smart Search Engine for Notes', detail: 'Built a platform that lets users search and retrieve digital notes based on semantic meaning rather than exact keywords, using Langchain and MongoDB vector indexing.' },
      { label: 'Automated Launch & Update Process', detail: 'Set up a system that automatically builds, tests, and deploys the app on every change, eliminating downtime, using AWS EC2 and GitHub Actions.' },
      { label: 'Secure Multi-User Sharing', detail: 'Designed a "share brain" feature allowing users to share workspaces in read mode without compromising data integrity, using JWT and permission-controlled access.' },
    ],
  },
  {
    name: 'Legal Intelligence Agent',
    stack: ['LangGraph', 'Langsmith', 'BeautifulSoup4', 'Bautasaurus', 'Multi-stage Docker', 'Cloud Run'],
    github: '#',
    bullets: [
      { label: 'Self-Diagnostic Multi-Agent Orchestration', detail: 'Built smart legal document analysis that automatically detects its own errors during research, diagnoses failures, retries a different approach, and gracefully aborts when no solution exists — using LangGraph and BeautifulSoup4.' },
      { label: 'Centralized ToolExecutor Architecture', detail: 'Stripped complex error-handling out of core AI logic into a single centralized manager that runs all 6 legal tools and handles bugs behind the scenes, avoiding redundant per-agent architecture.' },
      { label: 'Live Tracking Dashboard', detail: 'Built a Streamlit visual workspace showing real-time node execution sequence, decisions, tool attempts, failure diagnosis, and self-correction as it happens.' },
      { label: 'Latency Monitoring', detail: 'Monitored latency at every node response using the Langsmith SDK, reducing response time by 3s by using a scraping library instead of a browser search API.' },
      { label: 'Cost-Efficient Deployment', detail: 'Launched the agent via containerized deployment on Google Cloud Run, so credits are only consumed while running.' },
    ],
  },
  {
    name: 'CompIntel',
    stack: ['LangGraph', 'BeautifulSoup4', 'httpx', 'Docker'],
    github: '#',
    bullets: [
      { label: 'Automated Multi-Agent Research Team', detail: 'Created a system of specialized AI agents that automatically pull live market data, financials, and competitor info for any company by orchestrating workflows with LangGraph, Tavily, and Alpha Vantage.' },
      { label: 'Reliable, Bug-Free Execution', detail: 'Prevented the system from stalling in endless loops or crashing on bad data by locking down decision-making with Pydantic enums and OpenAI structured outputs.' },
      { label: 'Live Execution Dashboard', detail: 'Built a highly visual, real-time Streamlit UI that lets users watch the AI agents work, think, and route data live, fully containerized with Docker for easy setup.' },
    ],
  },
  {
    name: 'Prompt Compressor for LLMs',
    stack: ['PyTorch', 'HuggingFace Transformers', 'DistilBERT', 'Streamlit'],
    github: '#',
    bullets: [
      { label: 'Learned Prompt Compression Pipeline', detail: 'Built a pipeline to reduce LLM token usage by fine-tuning a DistilBERT-based token scoring model on 500 SQuAD 2.0 passages, scoring tokens using a "surprisal" method.' },
      { label: '70% Token Reduction', detail: 'Reduced token count by up to 70% while outperforming GPT-2 perplexity baselines under aggressive compression, accelerating LLM inference and lowering API costs.' },
    ],
  },
]

export const achievements = [
  {
    title: 'Startup Weekend Jaipur',
    role: 'Technical Lead',
    link: '#',
    detail: 'Served on the Executive Committee as Technical Lead, designing and developing the official event website — a production-ready platform for registrations and engagement.',
  },
]
