
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
<a href="#experience">Experience</a>
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
        {/* <section id="home" className="hero">
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
        </section> */}


<section id="home" className="hero">
  <div className="hero-content">
    <p className="hello">HELLO, I'M</p>

    <h1>
      Stanely <span>Jones.</span>
    </h1>

   <h3>
  Full Stack Developer | Technical Support Engineer
</h3>

    <p className="intro">
  Building practical web applications and exploring AI-powered
  solutions. I bring professional experience in enterprise
  application support, along with hands-on training in Python,
  SQL, AI/ML, and cloud technologies.
</p>

    <div className="hero-buttons">
      <a href="#projects" className="primary-btn">
        Explore My Projects →
      </a>

      <a href="#contact" className="secondary-btn">
        Contact Me
      </a>

      <a
        href="https://github.com/StanelyJ48"
        target="_blank"
        rel="noopener noreferrer"
        className="secondary-btn"
      >
        GitHub ↗
      </a>


<a
  href="https://www.linkedin.com/in/stanely-jones-nandepu-79972116b/"
  target="_blank"
  rel="noopener noreferrer"
  className="secondary-btn"
>
  LinkedIn ↗
</a>


<a
  href="/Stanely_Jones_Resume.pdf"
  download="Stanely_Jones_Resume.pdf"
  className="primary-btn"
>
  Download Resume ↓
</a>


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

<div className="project">
  <h3>WattWise – Electricity Bill Estimator</h3>
  <p>
    A web-based application that estimates electricity bills
    based on meter readings and tariff calculations.
  </p>
  <span>HTML</span> <span>CSS</span> <span>JavaScript</span>

  <div className="project-links">
    <a
      href="https://stanelyj48.github.io/Power-Bill-Estimator/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Live Demo →
    </a>

    <a
      href="https://github.com/StanelyJ48/power-bill-estimator"
      target="_blank"
      rel="noopener noreferrer"
    >
      GitHub →
    </a>
  </div>
</div>

          </article>
        </section>


{/* <section id="experience" className="experience card">
  <h2>Professional Experience</h2>

  <div className="experience-item">
    <h3>Technical Support Engineer</h3>
    <h4>ServiceNow | Hyderabad</h4>
    <p className="experience-date">
      December 2024 – February 2026
    </p>

    <ul>
      <li>
        Troubleshot UI/UX issues and portal-level problems
        across ServiceNow applications.
      </li>
      <li>
        Investigated instance-level issues and worked towards
        effective resolutions.
      </li>
      <li>
        Collaborated with customers and internal teams to
        communicate findings and resolutions.
      </li>
      <li>
        Used ServiceNow UI Builder and shared technical
        knowledge to support issue resolution.
      </li>
    </ul>
  </div>
</section> */}


<section id="experience" className="experience card">
  <h2>Professional Experience</h2>

  <div className="experience-item">
    <h3>Technical Support Engineer</h3>
    <h4>ServiceNow | Hyderabad</h4>
    <p className="experience-date">
      December 2024 – February 2026
    </p>
    <ul>
      <li>
        Troubleshot UI/UX issues, portal defects, and
        instance-level problems across ServiceNow applications.
      </li>
      <li>
        Investigated UI Builder and Workspace issues across
        different platform versions and patches.
      </li>
      <li>
        Analyzed logs and SQL-related data issues to support
        complex technical investigations.
      </li>
      <li>
        Collaborated with internal engineering teams to resolve
        customer issues and provided live troubleshooting support.
      </li>
      <li>
        Created knowledge articles and shared technical findings
        with the support team.
      </li>
    </ul>
  </div>

  <div className="experience-item">
    <h3>Analyst</h3>
    <h4>Kantar | Hyderabad</h4>
    <p className="experience-date">
      July 2021 – July 2024
    </p>
    <ul>
      <li>
        Supported a Progressive Web Application featuring
        interactive dashboards and complex data visualizations.
      </li>
      <li>
        Maintained an international survey platform used across
        50+ countries.
      </li>
      <li>
        Investigated production issues and implemented
        application customizations based on user feedback.
      </li>
      <li>
        Performed UAT across desktop and mobile platforms
        before production releases.
      </li>
      <li>
        Used HTML, CSS, and JavaScript to support frontend
        enhancements and application improvements.
      </li>
    </ul>
  </div>

  <div className="experience-item">
    <h3>Software Engineer Intern</h3>
    <h4>NeoGeoInfo Technologies | Hyderabad</h4>
    <p className="experience-date">
      August 2020 – February 2021
    </p>
    <ul>
      <li>
        Contributed to frontend and backend development
        of web applications.
      </li>
      <li>
        Improved UI components and user interactions
        across desktop and mobile versions.
      </li>
      <li>
        Worked on backend integrations and data flow
        between application components.
      </li>
      <li>
        Resolved production issues and maintained
        application functionality.
      </li>
    </ul>
  </div>

  <div className="experience-item">
    <h3>Forward Deployed Engineering Program</h3>
    <h4>Futurense Technologies</h4>
    <p className="experience-date">
      May 2026 – October 2026
    </p>
    <ul>
      <li>
        Completed hands-on training in Python, SQL,
        AI/ML, and cloud fundamentals.
      </li>
      <li>
        Applied technical concepts through practical
        exercises and capstone project development.
      </li>
    </ul>
  </div>
</section>

        {/* <section id="contact" className="contact card">
          <h2>Let's Connect</h2>
          <p>Interested in opportunities, collaborations, or technology?</p>
          <a className="primary-btn" href="mailto:your-email@example.com">
            Send Me an Email →
          </a>
        </section> */}


<section id="contact" className="contact card">
  <h2>Let's Connect</h2>
  <p>
    I'm open to opportunities, collaborations, and
    conversations about technology and development.
  </p>

  <div className="contact-links">
    <a href="mailto:stanelyjones123@gmail.com">
      stanelyjones123@gmail.com
    </a>
    <a
      href="https://www.linkedin.com/in/stanely-jones-nandepu-79972116b/"
      target="_blank"
      rel="noopener noreferrer"
    >
      LinkedIn ↗
    </a>

    <a
      href="https://github.com/StanelyJ48"
      target="_blank"
      rel="noopener noreferrer"
    >
      GitHub ↗
    </a>

    <a
      href="https://www.instagram.com/stans0010"
      target="_blank"
      rel="noopener noreferrer"
    >
      Instagram ↗
    </a>
  </div>
</section>

      </main>

      <footer>
        © 2026 Stanely Jones. Built with React.
      </footer>
    </div>
  )
}

export default App
