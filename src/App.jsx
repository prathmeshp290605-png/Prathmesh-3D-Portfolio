
import {
  ArrowDown,
  ArrowUpRight,
  Mail,
  Menu,
  X,
  Code2,
  Cpu,
  BrainCircuit,
  Database,
  Globe,
  Terminal,
  ExternalLink,
  Sparkles,
} from "lucide-react";


import Scene from "./Scene.jsx";
import { useState, useEffect } from "react";
const projects = [
  {
    number: "01",
    title: "Event Hub",
    category: "FULL-STACK WEB APP",
    description:
      "An event and hall booking platform concept with user and host workflows, hall details, availability, and event information.",
    stack: ["React", "JavaScript", "CSS"],
    link: "https://github.com/prathmeshp290605-png/Event-Hub",
    accent: "cyan",
  },
  {
    number: "02",
    title: "AI Resume Analyzer",
    category: "AI / CAREER TECH",
    description:
      "A project focused on helping candidates review resume content and connect their skills with job requirements.",
    stack: ["Python", "AI", "Web"],
    link: "https://github.com/prathmeshp290605-png/AI-Resume-Analyzer",
    accent: "green",
  },
  {
    number: "03",
    title: "Body Sync Anatomy",
    category: "COMPUTER VISION",
    description:
      "CNN-based brain tumor image classification workflow with model explainability and a Streamlit interface.",
    stack: ["Python", "CNN", "Streamlit"],
    link: "https://github.com/prathmeshp290605-png/Body_Sync_Anatomy_Tumor_CNN",
    accent: "blue",
  },
  {
    number: "04",
    title: "Face Recognition Attendance",
    category: "MACHINE LEARNING",
    description:
      "A Python and OpenCV project exploring face recognition for an attendance workflow.",
    stack: ["Python", "OpenCV", "CV"],
    link: "https://github.com/prathmeshp290605-png/Face-Recognition-Attendance-System",
    accent: "cyan",
  },
];

const skills = [
  {
    icon: Code2,
    title: "Programming",
    items: "C · C++ · Java · Python",
  },
  {
    icon: Globe,
    title: "Web Development",
    items: "HTML · CSS · JavaScript · React",
  },
  {
    icon: Database,
    title: "Backend & Data",
    items: "Node.js · Express · MongoDB · SQL",
  },
  {
    icon: BrainCircuit,
    title: "AI / Machine Learning",
    items: "CNN · OpenCV · Model workflows",
  },
  {
    icon: Cpu,
    title: "Core CS",
    items: "DSA · OOP · DBMS · Operating Systems",
  },
  {
    icon: Terminal,
    title: "Tools",
    items: "Git · GitHub · VS Code",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [typed, setTyped] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);

  const roles = [
    "Full Stack Developer",
    "AI/ML Project Builder",
    "Computer Science Student",
  ];

  useEffect(() => {
    let i = 0;
    const target = roles[roleIndex];

    setTyped("");

    const interval = setInterval(() => {
      i++;
      setTyped(target.slice(0, i));

      if (i >= target.length) {
        clearInterval(interval);

        setTimeout(() => {
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 1700);
      }
    }, 65);

    return () => clearInterval(interval);
  }, [roleIndex]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="noise" />

      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">
            P<span>.</span>
          </span>
          <span>
            PRATHMESH<span className="brand-light">/DEV</span>
          </span>
        </a>

        <button
          className="mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={closeMenu}
            >
              {item}
            </a>
          ))}

          <a
            className="nav-cta"
            href="https://github.com/prathmeshp290605-png"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="status-pill">
              <span className="status-dot" />
              OPEN TO INTERNSHIP OPPORTUNITIES
            </div>

            <p className="eyebrow">HELLO WORLD, I'M</p>

            <h1>
              Prathmesh
              <br />
              <span className="gradient-text">Patil.</span>
            </h1>

            <div className="role-line">
              <span className="prompt">&gt;_</span> {typed}
              <span className="cursor">|</span>
            </div>

            <p className="hero-description">
              I build digital experiences and practical projects at the
              intersection of software development, AI, and problem solving.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore projects <ArrowUpRight size={17} />
              </a>

              <a className="button button-ghost" href="#contact">
                Let's connect <Mail size={16} />
              </a>
            </div>

            <div className="hero-socials">
              <a
                href="https://github.com/prathmeshp290605-png"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
               <span style={{ fontSize: "18px" }}>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
               <span style={{ fontSize: "18px" }}>LinkedIn</span>
              </a>

              <a
                href="mailto:prathmeshp290605@gmail.com"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>

              <span className="social-divider" />
              <span className="location-label">
                Kolhapur, Maharashtra, India
              </span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-grid" />
            <div className="orbit-label orbit-top">
              <span /> SYSTEM ONLINE
            </div>

            <Scene />

            <div className="visual-card card-top">
              <span className="card-icon">
                <Code2 size={16} />
              </span>
              <span>
                <small>BUILD MODE</small>
                <strong>Always learning</strong>
              </span>
            </div>

            <div className="visual-card card-bottom">
              <span className="pulse-bars">
                <i />
                <i />
                <i />
                <i />
              </span>
              <span>
                <small>CORE STATUS</small>
                <strong>Curious · Creative · Consistent</strong>
              </span>
            </div>

            <div className="visual-coordinate">
              18.52° N
              <br />
              73.85° E
            </div>
          </div>

          <a className="scroll-cue" href="#about">
            <span className="scroll-line" />
            SCROLL TO EXPLORE <ArrowDown size={13} />
          </a>

          <div className="hero-index">
            PORTFOLIO — 2026 <span>01 / 04</span>
          </div>
        </section>

        <section className="about section-wrap section-pad" id="about">
          <div className="section-heading">
            <p className="eyebrow">01 / ABOUT ME</p>
            <h2>
              Curiosity into <span className="gradient-text">creation.</span>
            </h2>
          </div>

          <div className="about-grid">
            <div className="about-main">
              <p className="large-copy">
                I'm a Computer Science Engineering student who enjoys turning
                ideas into working software.
              </p>

              <p className="muted-copy">
                From web applications to computer vision experiments, I like
                understanding how things work and building projects that help
                me learn by doing. Right now, I'm strengthening my development
                fundamentals, exploring AI/ML, and preparing for internship
                opportunities.
              </p>

              <div className="terminal-box">
                <div className="terminal-bar">
                  <span />
                  <span />
                  <span />
                  <small>prathmesh@portfolio:~</small>
                </div>

                <div className="terminal-body">
                  <p>
                    <span className="terminal-green">const</span> developer = {"{"}
                  </p>
                  <p>
                    &nbsp;&nbsp;focus:{" "}
                    <span className="terminal-cyan">
                      'build useful things'
                    </span>
                    ,
                  </p>
                  <p>
                    &nbsp;&nbsp;mindset:{" "}
                    <span className="terminal-cyan">
                      'learn by shipping'
                    </span>
                    ,
                  </p>
                  <p>
                    &nbsp;&nbsp;status:{" "}
                    <span className="terminal-green">
                      'open to opportunities'
                    </span>
                  </p>
                  <p>{"}"};</p>
                  <p className="terminal-comment">
                    // one commit at a time_
                  </p>
                </div>
              </div>
            </div>

            <div className="about-stats">
              <div className="stat-card">
                <strong>
                  01<span>+</span>
                </strong>
                <span>Curiosity-first mindset</span>
              </div>

              <div className="stat-card">
                <strong>
                  AI<span>/</span>ML
                </strong>
                <span>Exploring intelligent systems</span>
              </div>

              <div className="stat-card">
                <strong>∞</strong>
                <span>Things left to learn</span>
              </div>

              <div className="stat-note">
                <Sparkles size={17} />
                <span>Focused on progress, not perfection.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="skills section-wrap section-pad" id="skills">
          <div className="section-heading">
            <p className="eyebrow">02 / TECH STACK</p>
            <h2>
              Tools of the <span className="gradient-text">trade.</span>
            </h2>
            <p className="section-subtitle">
              Technologies I use, study, and experiment with.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map(({ icon: Icon, title, items }, index) => (
              <article
                className="skill-card"
                key={title}
                style={{ "--delay": `${index * 80}ms` }}
              >
                <div className="skill-icon">
                  <Icon size={21} />
                </div>
                <h3>{title}</h3>
                <p>{items}</p>
                <span className="skill-corner">0{index + 1}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="projects section-wrap section-pad" id="projects">
          <div className="projects-heading">
            <div className="section-heading">
              <p className="eyebrow">03 / SELECTED WORK</p>
              <h2>
                Things I've <span className="gradient-text">built.</span>
              </h2>
            </div>

            <a
              className="text-link"
              href="https://github.com/prathmeshp290605-png?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              All repositories <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article
                className={`project-card ${project.accent}`}
                key={project.number}
              >
                <div className="project-top">
                  <span className="project-number">
                    {project.number} / PROJECT
                  </span>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.title} repository`}
                  >
                    <ExternalLink size={17} />
                  </a>
                </div>

                <div className="project-art">
                  <div className="art-ring ring-a" />
                  <div className="art-ring ring-b" />
                  <div className="art-core">
                    <Code2 size={30} />
                  </div>
                  <span className="art-tag">{project.category}</span>
                </div>

                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="tag-row">
                  {project.stack.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <a
                  className="project-link"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  View on GitHub <ArrowUpRight size={15} />
                </a>
              </article>
            ))}
          </div>

          <p className="project-disclaimer">
            Project summaries are editable starter copy. Update descriptions
            and repository URLs to match your current work.
          </p>
        </section>

        <section className="contact section-wrap section-pad" id="contact">
          <div className="contact-panel">
            <div className="contact-glow" />

            <div className="contact-content">
              <p className="eyebrow">04 / GET IN TOUCH</p>

              <h2>
                Have an idea?
                <br />
                <span className="gradient-text">Let's build it.</span>
              </h2>

              <p className="muted-copy">
                I'm interested in internships, collaborative projects, and
                opportunities to learn from real-world engineering teams.
              </p>

              <div className="hero-actions">
                <a
                  className="button button-primary"
                  href="mailto:prathmeshp290605@gmail.com"
                >
                  Send me an email <Mail size={16} />
                </a>

                <a
                  className="button button-ghost"
                  href="https://github.com/prathmeshp290605-png"
                  target="_blank"
                  rel="noreferrer"
                >
                  Follow on GitHub <span style={{ fontSize: "18px" }}>GitHub</span>
                </a>
              </div>
            </div>

            <div className="contact-decoration">
              <div className="deco-square sq1" />
              <div className="deco-square sq2" />
              <div className="deco-cross">+</div>
              <span>
                CONNECT
                <br />
                _READY
              </span>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand" href="#home">
          <span className="brand-mark">
            P<span>.</span>
          </span>
          <span>
            PRATHMESH<span className="brand-light">/DEV</span>
          </span>
        </a>

        <span>
          Designed with curiosity <span className="footer-heart">♥</span> and
          code.
        </span>

        <a href="#home" className="back-top">
          BACK TO TOP ↑
        </a>

        <small>© 2026 Prathmesh Patil</small>
      </footer>
    </div>
  );
}

export default App;
