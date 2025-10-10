// React import not needed with new JSX transform

type Certification = {
  name: string
  issuer: string
  date: string
  credentialId?: string
  link?: string
}

const certifications: Certification[] = [
  {
    name: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2023',
    credentialId: 'AWS-SAA-123456',
    link: '#'
  },
  {
    name: 'Google UX Design Certificate',
    issuer: 'Google',
    date: '2022',
    credentialId: 'GUX-789012',
    link: '#'
  },
  {
    name: 'Certified Scrum Master',
    issuer: 'Scrum Alliance',
    date: '2021',
    credentialId: 'CSM-345678',
    link: '#'
  }
]

export function Certification() {
  return (
    <section id="certification" className="section certification" aria-label="Certification and Training">
      <div className="container">
        <div className="panel panel--alt panel--inset">
          <h2>Certification & Training</h2>
          <div className="grid">
            {certifications.map((cert) => (
              <div key={cert.name} className="card">
                <h3>{cert.name}</h3>
                <p className="issuer">{cert.issuer}</p>
                <p className="date">{cert.date}</p>
                {cert.credentialId && <p className="credential-id">ID: {cert.credentialId}</p>}
                {cert.link && (
                  <a href={cert.link} className="btn ghost" target="_blank" rel="noreferrer">
                    View Credential
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

