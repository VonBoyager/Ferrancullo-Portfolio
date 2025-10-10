import React from 'react'

type Skill = {
  category: string
  skills: string[]
}

const skillCategories: Skill[] = [
  {
    category: 'Frontend',
    skills: ['React', 'TypeScript', 'Next.js', 'Vue.js', 'HTML/CSS', 'Tailwind CSS']
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'GraphQL', 'REST APIs']
  },
  {
    category: 'Tools & Design',
    skills: ['Figma', 'Git', 'Docker', 'AWS', 'Framer Motion', 'Webpack']
  }
]

export function Skills() {
  return (
    <section id="skills" className="section skills" aria-label="Skills">
      <div className="container">
        <div className="panel panel--inset">
          <h2>Skills</h2>
          <div className="grid">
            {skillCategories.map((category) => (
              <div key={category.category} className="card">
                <h3>{category.category}</h3>
                <div className="skills-list">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

