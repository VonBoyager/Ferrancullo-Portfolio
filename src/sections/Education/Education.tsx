// React import not needed with new JSX transform
import './Education.css'

type Education = {
  institution: string
  degree: string
  period: string
  description?: string
}

const education: Education[] = [
  {
    institution: 'University of Technology',
    degree: 'Bachelor of Computer Science',
    period: '2018-2022',
    description: 'Focus on software engineering and human-computer interaction.'
  },
  {
    institution: 'Design Institute',
    degree: 'Certificate in UI/UX Design',
    period: '2021',
    description: 'Specialized training in user interface and experience design.'
  }
]

export function Education() {
  return (
    <section id="education" className="section education" aria-label="Education">
      <div className="container">
        <div className="panel panel--inset">
          <h2>Education</h2>
          <div className="grid">
            {education.map((edu) => (
              <div key={edu.institution} className="card">
                <h3>{edu.institution}</h3>
                <p className="degree">{edu.degree}</p>
                <p className="period">{edu.period}</p>
                {edu.description && <p className="description">{edu.description}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

