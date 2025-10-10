import { useState, useEffect, useRef } from 'react'

interface Command {
  name: string
  description: string
  execute: (args: string[]) => string
}

export function Terminal() {
  const [history, setHistory] = useState<Array<{ type: 'command' | 'output', content: string }>>([
    { type: 'output', content: 'Welcome to Ced\'s Portfolio Terminal' },
    { type: 'output', content: 'Type "help" for available commands' },
    { type: 'output', content: '' }
  ])
  const [currentInput, setCurrentInput] = useState('')
  const [currentPath, setCurrentPath] = useState('~/portfolio')
  const inputRef = useRef<HTMLInputElement>(null)

  const commands: Record<string, Command> = {
    help: {
      name: 'help',
      description: 'Show available commands',
      execute: () => `Available commands:
  help          - Show this help message
  about         - About Ced
  education     - Educational background
  experience    - Work experience
  skills        - Technical skills
  projects      - Portfolio projects
  contact       - Contact information
  clear         - Clear terminal
  ls            - List sections
  cat <section> - View section content
  whoami        - Show current user
  pwd           - Show current directory
  date          - Show current date
  echo <text>   - Echo text
  neofetch      - System information
  matrix        - Enter the matrix
  hack          - Hack the mainframe
  fortune       - Get a random fortune
  exit          - Exit terminal`
    },
    about: {
      name: 'about',
      description: 'About Ced',
      execute: () => `Ced - Full Stack Developer & Digital Artist
Passionate about creating innovative solutions and pushing the boundaries of web technology.
Specializing in React, Node.js, and experimental web design.`
    },
    education: {
      name: 'education',
      description: 'Educational background',
      execute: () => `Bachelor of Science in Computer Science
University of Technology, 2020-2024
- GPA: 3.8/4.0
- Relevant Coursework: Data Structures, Algorithms, Web Development
- Activities: Programming Club President, Hackathon Winner`
    },
    experience: {
      name: 'experience',
      description: 'Work experience',
      execute: () => `Senior Frontend Developer - TechCorp (2023-Present)
- Led development of React-based applications
- Implemented modern UI/UX patterns
- Mentored junior developers

Full Stack Developer - StartupXYZ (2022-2023)
- Built end-to-end web applications
- Worked with React, Node.js, PostgreSQL
- Deployed applications to AWS`
    },
    skills: {
      name: 'skills',
      description: 'Technical skills',
      execute: () => `Languages: JavaScript, TypeScript, Python, Java, C++
Frameworks: React, Node.js, Express, Next.js
Databases: PostgreSQL, MongoDB, Redis
Tools: Git, Docker, AWS, Vercel
Design: Figma, Adobe Creative Suite, CSS/SCSS`
    },
    projects: {
      name: 'projects',
      description: 'Portfolio projects',
      execute: () => `Featured Projects:
1. E-Commerce Platform (React, Node.js, PostgreSQL)
2. Real-time Chat Application (Socket.io, Express)
3. Data Visualization Dashboard (D3.js, React)
4. Mobile App (React Native, Firebase)
5. This Portfolio Terminal (React, TypeScript)`
    },
    contact: {
      name: 'contact',
      description: 'Contact information',
      execute: () => `Email: ced@example.com
LinkedIn: linkedin.com/in/ced
GitHub: github.com/ced
Twitter: @ced_dev
Phone: +1 (555) 123-4567`
    },
    clear: {
      name: 'clear',
      description: 'Clear terminal',
      execute: () => {
        setHistory([])
        return ''
      }
    },
    ls: {
      name: 'ls',
      description: 'List sections',
      execute: () => `about.txt
education.txt
experience.txt
skills.txt
projects.txt
contact.txt
README.md`
    },
    cat: {
      name: 'cat',
      description: 'View section content',
      execute: (args) => {
        const file = args[0]
        if (!file) return 'Usage: cat <filename>'
        
        const content: Record<string, string> = {
          'about.txt': commands.about.execute(),
          'education.txt': commands.education.execute(),
          'experience.txt': commands.experience.execute(),
          'skills.txt': commands.skills.execute(),
          'projects.txt': commands.projects.execute(),
          'contact.txt': commands.contact.execute(),
          'README.md': '# Portfolio Terminal\n\nWelcome to Ced\'s interactive portfolio terminal!'
        }
        
        return content[file] || `File not found: ${file}`
      }
    },
    whoami: {
      name: 'whoami',
      description: 'Show current user',
      execute: () => 'ced'
    },
    pwd: {
      name: 'pwd',
      description: 'Show current directory',
      execute: () => currentPath
    },
    date: {
      name: 'date',
      description: 'Show current date',
      execute: () => new Date().toString()
    },
    echo: {
      name: 'echo',
      description: 'Echo text',
      execute: (args) => args.join(' ')
    },
    neofetch: {
      name: 'neofetch',
      description: 'System information',
      execute: () => `       ███████╗███████╗███╗   ██╗
       ██╔════╝██╔════╝████╗  ██║
       █████╗  █████╗  ██╔██╗ ██║
       ██╔══╝  ██╔══╝  ██║╚██╗██║
       ██║     ███████╗██║ ╚████║
       ╚═╝     ╚══════╝╚═╝  ╚═══╝

OS: Portfolio Terminal v1.0
Host: ced-portfolio
Kernel: React 18.2.0
Shell: bash 5.1.0
Terminal: xterm-256color
CPU: Intel i7-12700K
Memory: 32GB DDR4
GPU: RTX 3080
Uptime: ${Math.floor(Math.random() * 100)} days`
    },
    matrix: {
      name: 'matrix',
      description: 'Enter the matrix',
      execute: () => {
        // This would trigger a matrix rain effect
        return 'Wake up, Neo... The Matrix has you...'
      }
    },
    hack: {
      name: 'hack',
      description: 'Hack the mainframe',
      execute: () => {
        const hackText = [
          'Initializing hack sequence...',
          'Bypassing firewall...',
          'Accessing mainframe...',
          'Cracking encryption...',
          'Extracting data...',
          'HACK COMPLETE!',
          'You are now the supreme hacker!'
        ]
        return hackText.join('\n')
      }
    },
    fortune: {
      name: 'fortune',
      description: 'Get a random fortune',
      execute: () => {
        const fortunes = [
          'The best way to predict the future is to code it.',
          'There are only 10 types of people: those who understand binary and those who don\'t.',
          'Real programmers count from 0.',
          'It\'s not a bug, it\'s an undocumented feature.',
          'Code is like humor. When you have to explain it, it\'s bad.',
          'First, solve the problem. Then, write the code.',
          'Experience is the name everyone gives to their mistakes.'
        ]
        return fortunes[Math.floor(Math.random() * fortunes.length)]
      }
    }
  }

  const executeCommand = (input: string) => {
    const [command, ...args] = input.trim().split(' ')
    
    if (command === 'exit') {
      window.close()
      return
    }

    if (commands[command]) {
      const result = commands[command].execute(args)
      if (result) {
        setHistory(prev => [...prev, { type: 'output', content: result }])
      }
    } else {
      setHistory(prev => [...prev, { type: 'output', content: `Command not found: ${command}. Type "help" for available commands.` }])
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      setHistory(prev => [...prev, { type: 'command', content: `ced@portfolio:~$ ${currentInput}` }])
      executeCommand(currentInput)
      setCurrentInput('')
    }
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [history])

  return (
    <div className="terminal">
      <div className="terminal-header">
        <div className="terminal-buttons">
          <span className="terminal-button close"></span>
          <span className="terminal-button minimize"></span>
          <span className="terminal-button maximize"></span>
        </div>
        <div className="terminal-title">ced@portfolio:~/portfolio</div>
      </div>
      
      <div className="terminal-body">
        {history.map((entry, index) => (
          <div key={index} className={`terminal-line ${entry.type}`}>
            {entry.type === 'command' ? (
              <span className="terminal-prompt">{entry.content}</span>
            ) : (
              <pre className="terminal-output">{entry.content}</pre>
            )}
          </div>
        ))}
        
        <div className="terminal-input-line">
          <span className="terminal-prompt">ced@portfolio:~$ </span>
          <input
            ref={inputRef}
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            onKeyPress={handleKeyPress}
            className="terminal-input"
            autoFocus
          />
          <span className="terminal-cursor">█</span>
        </div>
      </div>
    </div>
  )
}
