const skills = [
  "React",
  "Node.js",
  "TypeScript",
  "PostgreSQL",
  "AWS",
  "Docker",
  "Kubernetes",
  "CI/CD",
];

const projects = [
  {
    title: "Enterprise SaaS Platform",
    summary:
      "Led architecture and delivery of a multi-tenant full-stack platform with role-based access, analytics, and observability.",
    stack: "React, Node.js, PostgreSQL, Redis, AWS",
  },
  {
    title: "Real-Time Collaboration Suite",
    summary:
      "Built low-latency collaboration features with presence, live updates, and robust conflict handling.",
    stack: "React, WebSocket, Go, Kafka, Docker",
  },
  {
    title: "Modern Commerce Engine",
    summary:
      "Designed checkout and fulfillment services that improved conversion and deployment velocity across teams.",
    stack: "Next.js, Node.js, GraphQL, PostgreSQL",
  },
];

export default function App() {
  return (
    <div className="page">
      <header className="hero">
        <p className="eyebrow">Senior Full-Stack Engineer</p>
        <h1>Building reliable products with strong engineering fundamentals.</h1>
        <p>
          I design and ship scalable web systems end-to-end, from UX to APIs,
          infrastructure, and production operations.
        </p>
        <div className="actions">
          <a href="mailto:gordianknot0615@gmail.com">Email</a>
          <a href="https://github.com/gordianknot0615" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </header>

      <section>
        <h2>Core Skills</h2>
        <ul className="skills">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Featured Projects</h2>
        <div className="projects">
          {projects.map((project) => (
            <article key={project.title} className="card">
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <p className="stack">{project.stack}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2>Experience Highlights</h2>
        <ul className="highlights">
          <li>10+ years building full-stack applications in production.</li>
          <li>Scaled systems from MVP to high-traffic enterprise workloads.</li>
          <li>Mentored engineers and improved team delivery standards.</li>
          <li>Owned architecture, quality, and operations across the SDLC.</li>
        </ul>
      </section>
    </div>
  );
}
