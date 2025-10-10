// React import not needed with new JSX transform

type Advocacy = {
  title: string
  organization: string
  role: string
  period: string
  description: string
  link?: string
}

const advocacyItems: Advocacy[] = [
  {
    title: 'Open Source Contributor',
    organization: 'React Community',
    role: 'Core Contributor',
    period: '2021-Present',
    description: 'Contributing to React ecosystem libraries and documentation.',
    link: 'https://github.com/reactjs'
  },
  {
    title: 'Tech Speaker',
    organization: 'Local Developer Meetups',
    role: 'Regular Speaker',
    period: '2020-Present',
    description: 'Speaking about modern web development practices and accessibility.',
    link: '#'
  },
  {
    title: 'Mentor',
    organization: 'Code for Good',
    role: 'Volunteer Mentor',
    period: '2019-Present',
    description: 'Mentoring underrepresented groups in tech through coding bootcamps.',
    link: '#'
  }
]

export function Advocacy() {
  return (
    <section id="advocacy" className="section advocacy" aria-label="Advocacy">
      <div className="container">
        <div className="panel panel--inset">
          <h2>Advocacy</h2>
          <div className="grid">
            {advocacyItems.map((item) => (
              <div key={item.title} className="card">
                <h3>{item.title}</h3>
                <p className="organization">{item.organization}</p>
                <p className="role">{item.role}</p>
                <p className="period">{item.period}</p>
                <p className="description">{item.description}</p>
                {item.link && (
                  <a href={item.link} className="btn ghost" target="_blank" rel="noreferrer">
                    Learn More
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

