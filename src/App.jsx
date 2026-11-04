
import { useState } from 'react'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <div className={darkMode ? 'portfolio dark' : 'portfolio light'}>
      <header className="navbar">
        <h2 className="logo">SJ <span>Stanely Jones</span></h2>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <button
          className="theme-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <p className="hello">Hello, I'm</p>
            <h1>Stanely <span>Jones</span></h1>
            <h3>Technical Support Engineer | Developer | Problem Solver</h3>

            <p className="intro">
              I enjoy building useful applications, solving technical problems,
              and exploring modern technologies.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-btn">View My Projects →</a>
              <a href="#contact" className="secondary-btn">Contact Me</a>
            </div>
          </div>

          <div className="hero-art">
            <div className="avatar">SJ</div>
            <div className="circle"></div>
          </div>
        </section>

        <section className="cards">
          <article id="about" className="card">
            <h2>About Me</h2>
            <p>
              I'm a technology enthusiast with experience in technical support
              and enterprise applications. I'm currently expanding my skills
              in programming, AI, and web development.
            </p>
            <a href="#contact">Let's connect →</a>
          </article>

          <article id="skills" className="card">
            <h2>My Skills</h2>
            <div className="skills">
              {['Python', 'JavaScript', 'React', 'HTML', 'CSS', 'SQL',
                'ServiceNow', 'Git', 'Flask'].map(skill => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>

          <article id="projects" className="card">
            <h2>Projects</h2>
            <div className="project">
              <h3>HealthTrack</h3>
              <p>A health monitoring project with risk classification.</p>
              <span>Python</span> <span>Machine Learning</span>
            </div>
            <div className="project">
              <h3>Personal Portfolio</h3>
              <p>A responsive portfolio website built using React.</p>
              <span>React</span> <span>CSS</span>
            </div>
          </article>
        </section>

        <section id="contact" className="contact card">
          <h2>Let's Connect</h2>
          <p>Interested in opportunities, collaborations, or technology?</p>
          <a className="primary-btn" href="mailto:your-email@example.com">
            Send Me an Email →
          </a>
        </section>
      </main>

      <footer>
        © 2026 Stanely Jones. Built with React.
      </footer>
    </div>
  )
}

export default App
