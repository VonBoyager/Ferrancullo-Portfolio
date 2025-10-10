// React import not needed with new JSX transform

type Project = {
  title: string
  description: string
  technologies: string[]
  link?: string
  github?: string
  image?: string
}

const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with React, Node.js, and PostgreSQL.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Docker'],
    link: 'https://demo-ecommerce.com',
    github: 'https://github.com/username/ecommerce'
  },
  {
    title: 'Task Management App',
    description: 'Collaborative project management tool with real-time updates.',
    technologies: ['Vue.js', 'Socket.io', 'MongoDB', 'Express'],
    link: 'https://taskapp-demo.com',
    github: 'https://github.com/username/taskapp'
  },
  {
    title: 'Design System',
    description: 'Comprehensive design system with React components and documentation.',
    technologies: ['React', 'TypeScript', 'Storybook', 'Figma'],
    link: 'https://design-system-demo.com',
    github: 'https://github.com/username/design-system'
  }
]

export function Portfolio() {
  return (
    <section id="portfolio" className="section portfolio" aria-label="Portfolio">
      <div className="container">
        <div className="panel panel--alt panel--inset">
          <h2>Portfolio</h2>
          <div className="grid">
            {projects.map((project) => (
              <div key={project.title} className="card">
                <h3>{project.title}</h3>
                <p className="description">{project.description}</p>
                <div className="technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.link && (
                    <a href={project.link} className="btn primary" target="_blank" rel="noreferrer">
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} className="btn ghost" target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

