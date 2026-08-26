import "./App.css";

function App() {
  const skills = [
  // Programming & Embedded
  "C",
  "C++",
  "Embedded C",
  "STM32",
  "ESP32",
  "ESP8266",
  "Arduino",
  "8051",
  "LPC21xx",

  // Microcontroller & Embedded Concepts
  "GPIO",
  "Timers",
  "Interrupts",
  "ADC",
  "PWM",
  "UART",
  "SPI",
  "I2C",
  "CAN",
  "RTOS",

  // Web Development
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Bootstrap",

  // IoT & Hardware
  "IoT",
  "Sensor Interfacing",
  "PCB Design",

  // Tools
  "STM32CubeIDE",
  "Keil uVision",
  "Proteus",
  "Git",
  "GitHub",
];

  const projects = [
    {
      number: "01",
      category: "INDUSTRIAL AUTOMATION",
      title: "Industrial UPS Weight Batching System",
      description:
        "Developed an automated weight batching system utilizing load sensors for high-precision industrial UPS applications.",
      tech: ["Microcontroller", "Load Cell", "Automation"],
    },

    {
      number: "02",
      category: "IoT",
      title: "IoT Smart Irrigation System",
      description:
        "Built a WiFi-enabled smart irrigation system for automated water management using soil moisture sensing and NodeMCU.",
      tech: ["NodeMCU", "WiFi", "Sensors"],
    },

    {
      number: "03",
      category: "HEALTHCARE IoT",
      title: "IoT Health Monitoring System",
      description:
        "Designed a wireless patient monitoring system that tracks vital signs using biomedical sensors and provides monitoring through a connected dashboard.",
      tech: ["IoT", "Biomedical Sensors", "Cloud"],
    },

    {
      number: "04",
      category: "WEARABLE TECHNOLOGY",
      title: "Assistive Smart Glove",
      description:
        "Created a wearable assistive device using flex sensors to detect hand gestures for communication and rehabilitation applications.",
      tech: ["Flex Sensors", "Gesture Detection", "Embedded"],
    },

    {
      number: "05",
      category: "ROBOTICS",
      title: "Multi-Mode Robotics Platform",
      description:
        "Developed an autonomous robotics platform with Bluetooth control and multiple operational modes including line following and obstacle avoidance.",
      tech: ["Bluetooth", "Robotics", "Embedded"],
    },
    {
  number: "06",
  category: "WEB DEVELOPMENT",
  title: "Amazon Clone",
  description:
    "Developed a responsive Amazon-inspired e-commerce webpage using HTML, CSS and JavaScript, including navigation, search, hero section, product categories and interactive UI components.",
  tech: ["HTML", "CSS", "JavaScript"],
  github: "YOUR_AMAZON_GITHUB_URL",
  demo: "YOUR_AMAZON_LIVE_URL",
},
{
  number: "07",
  category: "REACT DEVELOPMENT",
  title: "Personal React Portfolio",
  description:
    "Designed and developed a responsive personal portfolio using React to showcase my Embedded Systems, IoT, Machine Learning and Web Development projects.",
  tech: ["React", "JavaScript", "CSS", "Vite"],
  github: "https://github.com/Utkarsha996/utkarsha-portfolio",
  demo: "YOUR_VERCEL_URL",
},
  ];

  return (
    <div className="portfolio">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">

        <div className="nav-container">

          <a href="#home" className="logo">
            Utkarsha<span>.</span>
          </a>

          <div className="nav-links">

            <a href="#home">Home</a>

            <a href="#about">About</a>

            <a href="#skills">Skills</a>

            <a href="#projects">Projects</a>

            <a href="#experience">Experience</a>

            <a href="#education">Education</a>

            <a href="#contact">Contact</a>

          </div>

        </div>

      </nav>


      {/* ================= HERO ================= */}

      <section className="hero" id="home">

        <div className="hero-content">

          <div className="availability">
            <span></span>
            OPEN TO OPPORTUNITIES
          </div>

          <p className="hero-tag">
            ELECTRONICS & TELECOMMUNICATION ENGINEERING
          </p>

          <h1>
            Hi, I'm
            <br />
            <span>Utkarsha.</span>
          </h1>

          <h2>
            Embedded Systems & IoT Enthusiast
          </h2>

          <p className="hero-description">
            Electronics and Telecommunication engineering student
            passionate about Embedded Systems, IoT, microcontrollers,
            sensor interfacing and practical hardware-software solutions.
          </p>

          <div className="hero-buttons">

            <a
              href="#projects"
              className="btn primary"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn secondary"
            >
              📄 View Resume
            </a>

          </div>

          <div className="hero-socials">

            <a href="mailto:utkarshatawalare5@gmail.com">
              Email
            </a>

            <span>•</span>

            <a
              href="YOUR_LINKEDIN_URL"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <span>•</span>

            <a
              href="YOUR_GITHUB_URL"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

          </div>

        </div>


        {/* HERO GRAPHIC */}

        <div className="hero-visual">

          <div className="tech-circle">

            <div className="orbit orbit-one"></div>

            <div className="orbit orbit-two"></div>

            <div className="orbit orbit-three"></div>

            <div className="chip">

              <div className="chip-top">
                STM32
              </div>

              <div className="chip-symbol">
                ⚡
              </div>

              <div className="chip-bottom">
                EMBEDDED
              </div>

            </div>

            <div className="node node-one">
              C
            </div>

            <div className="node node-two">
              IoT
            </div>

            <div className="node node-three">
              MCU
            </div>

            <div className="node node-four">
              ⚙
            </div>

          </div>

          <p className="hero-tech-text">
            HARDWARE • FIRMWARE • IoT
          </p>

        </div>

      </section>


      {/* ================= ABOUT ================= */}

      <section className="section" id="about">

        <div className="section-heading">

          <div className="section-number">
            01
          </div>

          <div>
            <p className="section-label">
              GET TO KNOW ME
            </p>

            <h2>
              About Me
            </h2>
          </div>

        </div>


        <div className="about-grid">

          <div className="about-content">

            <h3>
              Building practical solutions
              <span> with hardware & software.</span>
            </h3>

            <p>
              I am an Electronics and Telecommunication engineering
              student with a strong interest in Embedded Systems,
              IoT and hardware-software integration.
            </p>

            <p>
              My experience includes working with microcontrollers,
              sensors, communication interfaces and embedded
              programming to develop practical engineering solutions.
            </p>

            <p>
              I enjoy understanding how hardware works at the
              low level and converting engineering concepts into
              working prototypes.
            </p>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              Read my resume →
            </a>

          </div>


          <div className="about-cards">

            <div className="info-card">

              <div className="info-icon">
                🎓
              </div>

              <h4>
                B.Tech ENTC
              </h4>

              <p>
                VIIT, Pune
              </p>

            </div>


            <div className="info-card">

              <div className="info-icon">
                ⚙️
              </div>

              <h4>
                Embedded
              </h4>

              <p>
                STM32 • ESP • Arduino
              </p>

            </div>


            <div className="info-card">

              <div className="info-icon">
                🌐
              </div>

              <h4>
                IoT
              </h4>

              <p>
                Connected Systems
              </p>

            </div>


            <div className="info-card">

              <div className="info-icon">
                🔌
              </div>

              <h4>
                Hardware
              </h4>

              <p>
                Sensors • Interfaces
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= SKILLS ================= */}

      <section className="section dark-section" id="skills">

        <div className="section-heading">

          <div className="section-number">
            02
          </div>

          <div>
            <p className="section-label">
              MY TOOLKIT
            </p>

            <h2>
              Technical Skills
            </h2>
          </div>

        </div>


        <div className="skills-wrapper">

          <div className="skill-group">

            <h3>
              Programming & Embedded
            </h3>

            <div className="skills-list">

              {skills.slice(0, 10).map((skill, index) => (
                <div className="skill-tag" key={index}>
                  {skill}
                </div>
              ))}

            </div>

          </div>


          <div className="skill-group">

            <h3>
              Communication & Peripherals
            </h3>

            <div className="skills-list">

              {skills.slice(10, 18).map((skill, index) => (
                <div className="skill-tag" key={index}>
                  {skill}
                </div>
              ))}

            </div>

          </div>


          <div className="skill-group">

            <h3>
              Tools & Technologies
            </h3>

            <div className="skills-list">

              {skills.slice(18).map((skill, index) => (
                <div className="skill-tag" key={index}>
                  {skill}
                </div>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* ================= PROJECTS ================= */}

      <section className="section" id="projects">

        <div className="section-heading">

          <div className="section-number">
            03
          </div>

          <div>
            <p className="section-label">
              SELECTED WORK
            </p>

            <h2>
              Featured Projects
            </h2>
          </div>

        </div>


        <div className="projects-grid">

          {projects.map((project) => (

            <article
              className="project-card"
              key={project.number}
            >

              <div className="project-top">

                <span className="project-number">
                  {project.number}
                </span>

                <span className="project-arrow">
                  ↗
                </span>

              </div>

              <p className="project-category">
                {project.category}
              </p>

              <h3>
                {project.title}
              </h3>

              <p className="project-description">
                {project.description}
              </p>


              <div className="project-bottom">

                <div className="project-tech">

                  {project.tech.map((item, index) => (
                    <span key={index}>
                      {item}
                    </span>
                  ))}

                </div>

                <a
                  href="#contact"
                  className="project-link"
                >
                  Discuss →
                </a>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* ================= EXPERIENCE ================= */}

      <section
        className="section dark-section"
        id="experience"
      >

        <div className="section-heading">

          <div className="section-number">
            04
          </div>

          <div>
            <p className="section-label">
              PROFESSIONAL JOURNEY
            </p>

            <h2>
              Experience
            </h2>
          </div>

        </div>


        <div className="experience-card">

          <div className="experience-side">

            <span className="experience-date">
              DEC 2023
            </span>

            <span className="experience-line">
              —
            </span>

            <span className="experience-date">
              MAY 2024
            </span>

          </div>


          <div className="experience-main">

            <p className="experience-company">
              MDB Electrosoft Pvt. Ltd.
            </p>

            <h3>
              Embedded & IoT Intern
            </h3>

            <p className="experience-description">
              Completed a six-month intensive internship focused
              on Embedded Systems and IoT development.
            </p>

            <ul>

              <li>
                Programmed microcontrollers including Arduino
                and NodeMCU ESP8266.
              </li>

              <li>
                Worked on hardware-software integration through
                sensor interfacing.
              </li>

              <li>
                Worked with basic PCB design concepts.
              </li>

              <li>
                Developed Android application integrations for
                remote IoT monitoring and control.
              </li>

            </ul>

          </div>

        </div>

      </section>


      {/* ================= EDUCATION ================= */}

      <section className="section" id="education">

        <div className="section-heading">

          <div className="section-number">
            05
          </div>

          <div>
            <p className="section-label">
              ACADEMIC BACKGROUND
            </p>

            <h2>
              Education
            </h2>
          </div>

        </div>


        <div className="education-list">

          <div className="education-card">

            <div className="education-year">
              2024 — 2027
            </div>

            <div className="education-content">

              <span className="education-type">
                BACHELOR OF TECHNOLOGY
              </span>

              <h3>
                Electronics & Telecommunication
              </h3>

              <p>
                Vishwakarma Institute of Information Technology
              </p>

              <span className="education-result">
                CGPA: 8.20
              </span>

            </div>

          </div>


          <div className="education-card">

            <div className="education-year">
              2021 — 2024
            </div>

            <div className="education-content">

              <span className="education-type">
                DIPLOMA
              </span>

              <h3>
                Electronics & Telecommunication
              </h3>

              <p>
                Government Polytechnic Amravati
              </p>

              <span className="education-result">
                Percentage: 86.00%
              </span>

            </div>

          </div>


          <div className="education-card">

            <div className="education-year">
              2021
            </div>

            <div className="education-content">

              <span className="education-type">
                SECONDARY SCHOOL CERTIFICATE
              </span>

              <h3>
                SSC
              </h3>

              <p>
                Maharashtra State Board
              </p>

              <span className="education-result">
                Percentage: 89.16%
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CONTACT ================= */}

      <section
        className="section contact-section"
        id="contact"
      >

        <div className="section-heading">

          <div className="section-number">
            06
          </div>

          <div>
            <p className="section-label">
              LET'S CONNECT
            </p>

            <h2>
              Contact Me
            </h2>
          </div>

        </div>


        <div className="contact-grid">

          <div className="contact-content">

            <h3>
              Let's build something
              <span> meaningful.</span>
            </h3>

            <p>
              I am interested in opportunities related to
              Embedded Systems, IoT, Electronics and
              hardware-software integration.
            </p>


            <div className="contact-details">

              <a
                href="mailto:utkarshatawalare5@gmail.com"
                className="contact-item"
              >

                <span className="contact-icon">
                  ✉
                </span>

                <div>

                  <small>
                    EMAIL
                  </small>

                  <strong>
                    utkarshatawalare5@gmail.com
                  </strong>

                </div>

              </a>


              <div className="contact-item">

                <span className="contact-icon">
                  📍
                </span>

                <div>

                  <small>
                    LOCATION
                  </small>

                  <strong>
                    Pune, Maharashtra, India
                  </strong>

                </div>

              </div>


              <a
                href="https://www.linkedin.com/in/utkarsha-tawalare-2aa1832a7/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >

                <span className="contact-icon">
                  in
                </span>

                <div>

                  <small>
                    LINKEDIN
                  </small>

                  <strong>
                    LinkedIn Profile →
                  </strong>

                </div>

              </a>


              <a
                href="YOUR_GITHUB_URL"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >

                <span className="contact-icon">
                  GH
                </span>

                <div>

                  <small>
                    GITHUB
                  </small>

                  <strong>
                    GitHub Profile →
                  </strong>

                </div>

              </a>

            </div>

          </div>


          <div className="contact-box">

            <div className="contact-box-icon">
              ✦
            </div>

            <h3>
              Have an opportunity?
            </h3>

            <p>
              Let's connect and discuss how I can
              contribute to your team.
            </p>

            <div className="contact-actions">

              <a
                href="mailto:utkarshatawalare5@gmail.com"
                className="btn primary"
              >
                Send Email →
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn secondary"
              >
                View Resume
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer>

        <div className="footer-left">

          <strong>
            Utkarsha<span>.</span>
          </strong>

          <p>
            Embedded Systems • IoT • Electronics
          </p>

        </div>


        <div className="footer-right">

          <a href="#home">
            Back to top ↑
          </a>

          <p>
            © {new Date().getFullYear()} Utkarsha Tawalare
          </p>

        </div>

      </footer>

    </div>
  );
}

export default App;