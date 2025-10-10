// React import not needed with new JSX transform

type Experience = {
  company: string
  position: string
  period: string
  description: string
  achievements?: string[]
}

const experiences: Experience[] = [
  {
    company: 'TechCorp Solutions',
    position: 'Senior Frontend Developer',
    period: '2022-Present',
    description: 'Leading frontend development for enterprise applications.',
    achievements: ['Improved performance by 40%', 'Mentored 5 junior developers', 'Led design system implementation']
  },
  {
    company: 'StartupXYZ',
    position: 'Full Stack Developer',
    period: '2020-2022',
    description: 'Built scalable web applications from scratch.',
    achievements: ['Reduced load times by 60%', 'Implemented CI/CD pipeline', 'Grew user base by 200%']
  }
]

export function Experience() {
  return (
    <section id="experience" className="section experience" aria-label="Experience">
      <div className="container">
        <div className="panel panel--alt panel--inset">
          <h2>Experience</h2>
          <div className="grid">
            {experiences.map((exp) => (
              <div key={exp.company} className="card">
                <h3>{exp.company}</h3>
                <p className="position">{exp.position}</p>
                <p className="period">{exp.period}</p>
                <p className="description">{exp.description}</p>
                {exp.achievements && (
                  <ul className="achievements">
                    {exp.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

