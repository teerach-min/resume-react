import React from 'react'
import CardIcon from './components/CardIcon/CardIcon'

import MyProfile from './assets/images/my-image.jpg'
import LogoHTML from './assets/images/logo_html.png'
import LogoCSS from './assets/images/logo_css.png'
import LogoSASS from './assets/images/logo_sass.png'
import LogoPHP from './assets/images/logo_php.png'
import LogoPython from './assets/images/logo_python.png'
import LogoGO from './assets/images/logo_go.png'
import LogoJavascript from './assets/images/logo_javascript.png'
import LogoExpressJs from './assets/images/logo_expressjs.png'
import LogoDjango from './assets/images/logo_django.png'
import LogoFastAPI from './assets/images/logo_fastapi.png'
import LogoLaravel from './assets/images/logo_laravel.png'
import LogoCodeigniter from './assets/images/logo_codeigniter.png'
import LogoReact from './assets/images/logo_react.png'
import LogoAngular from './assets/images/logo_angular.png'
import LogoNext from './assets/images/nextjs-logo.png'
import LogoNest from './assets/images/nestjs-logo.svg'
import LogoVue from './assets/images/vuejs-logo.png'
import LogoNuxt from './assets/images/nuxt-logo.svg'
import LogoFlutter from './assets/images/flutter-logo.svg'


import './App.css'

const languages = [
    {
        image: LogoPython,
        text: 'Python',
        experience: 'Advanced'
    },
    {
        image: LogoJavascript,
        text: 'JavaScript',
        experience: 'Advanced'
    },
    {
        image: LogoHTML,
        text: 'HTML',
        experience: 'Advanced'
    },
    {
        image: LogoCSS,
        text: 'CSS',
        experience: 'Advanced'
    },
    {
        image: LogoSASS,
        text: 'SCSS/SASS',
        experience: 'Advanced'
    },
    {
        image: LogoPHP,
        text: 'PHP',
        experience: 'Advanced'
    },
    {
        image: LogoGO,
        text: 'Go',
        experience: 'Intermediate'
    }
]

const frontendTech = [
    {
        image: LogoReact,
        text: 'React JS',
        experience: 'Advanced'
    },
    {
        image: LogoNext,
        text: 'Next JS',
        experience: 'Advanced'
    },
    {
        image: LogoVue,
        text: 'Vue JS',
        experience: 'Advanced'
    },
    {
        image: LogoNuxt,
        text: 'Nuxt JS',
        experience: 'Advanced'
    },
    {
        image: LogoAngular,
        text: 'Angular JS',
        experience: 'Advanced'
    },
    {
        image: LogoFlutter,
        text: 'Flutter',
        experience: 'Advanced'
    }
]

const backendTech = [
    {
        image: LogoDjango,
        text: 'Django',
        experience: 'Advanced'
    },
    {
        image: LogoFastAPI,
        text: 'Fast API',
        experience: 'Advanced'
    },
    {
        image: LogoExpressJs,
        text: 'Express JS',
        experience: 'Advanced'
    },
    {
        image: LogoNest,
        text: 'Nest JS',
        experience: 'Advanced'
    },
    {
        image: LogoLaravel,
        text: 'Laravel',
        experience: 'Advanced'
    },
    {
        image: LogoCodeigniter,
        text: 'Codeigniter',
        experience: 'Advanced'
    }
]

const App: React.FC = () => {
    // Calculate dynamic age from birth date
    const calculateAge = (birthDate: string): number => {
        const today = new Date()
        const birth = new Date(birthDate)
        let age = today.getFullYear() - birth.getFullYear()
        const monthDiff = today.getMonth() - birth.getMonth()
        
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
            age--
        }
        
        return age
    }

    const birthDate = "1997-09-28"
    const currentAge = calculateAge(birthDate)

    // Calculate years of experience
    const calculateExperience = (startYear: number): number => {
        const currentYear = new Date().getFullYear()
        return currentYear - startYear
    }

    const yearsOfExperience = calculateExperience(2018) // Started working in 2018

    return (
        <div className="App">
            <nav className="navbar">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="logo">
                        <h2>Teerach Mincharoen</h2>
                    </div>
                    <div className="nav-menu flex flex-row">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#experience">Experience</a>
                        <a href="#skills">Skills</a>
                        <a href="#education">Education</a>
                    </div>
                </div>
            </nav>

            <section id='home' className="hero-section">
                <div className="container mx-auto flex items-center justify-center h-full">
                    <div className="hero-content text-center">
                        <h1 className="hero-title">Full Stack Developer</h1>
                        <p className="hero-subtitle">{yearsOfExperience} Years of Experience in Web & Mobile Development</p>
                        <div className="hero-contact">
                            <p>📧 teerach.min@gmail.com</p>
                            <p>📱 086 714 0083</p>
                            <p>📍 Bangkok, Thailand</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id='about' className="about-section">
                <div className="container mx-auto">
                    <h2 className="section-title">About Me</h2>
                    <div className="about-content">
                        <div className="profile-image">
                            <img src={MyProfile} alt="Teerach Mincharoen" />
                        </div>
                        <div className="profile-info">
                            <h3>Teerach Mincharoen</h3>
                            <div className="personal-details">
                                <p><strong>Age:</strong> {currentAge} years old</p>
                                <p><strong>Date of Birth:</strong> 28 September 1997</p>
                                <p><strong>Nationality:</strong> Thai</p>
                                <p><strong>Personality:</strong> Fast learner, Friendly, Ambitious, Responsible</p>
                            </div>
                            <div className="summary">
                                <p>
                                    I'm a developer with {yearsOfExperience} years of comprehensive experience in full-stack development. 
                                    I've created systems for warehouse management as needed, developed real estate websites, 
                                    and designed internal company-specific systems.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="experience" className="experience-section">
                <div className="container mx-auto">
                    <h2 className="section-title">Work Experience</h2>
                    <div className="experience-timeline">
                        <div className="experience-item">
                            <div className="experience-header">
                                <h3>Terra Digital Ventures</h3>
                                <span className="duration">2023 - Present</span>
                                <span className="position">Full Stack Developer</span>
                            </div>
                            <div className="experience-content">
                                <ul>
                                    <li>Developed 2 mobile applications using Flutter</li>
                                    <li>Developed full-stack web apps using Express.js + Nuxt.js (TypeScript) and Angular + NestJS</li>
                                    <li>Collaborated with design and backend teams to deliver responsive and user-friendly interfaces</li>
                                    <li>Integrated RESTful APIs, handled authentication, and contributed to both frontend and backend logic</li>
                                </ul>
                                <div className="tech-stack">
                                    <strong>Tech Stack:</strong> Flutter, Vue JS, Nuxt JS, Angular JS, Express JS, Nest JS
                                </div>
                            </div>
                        </div>

                        <div className="experience-item">
                            <div className="experience-header">
                                <h3>N-Squared eCommerce</h3>
                                <span className="duration">2021 - 2023</span>
                                <span className="position">Software Engineer</span>
                            </div>
                            <div className="experience-content">
                                <ul>
                                    <li>Integrated and supported warehouse management system, covering both back-end and front-end functionalities</li>
                                    <li>Implemented API proxy to enable external users to access and retrieve data from the organization</li>
                                </ul>
                                <div className="tech-stack">
                                    <strong>Tech Stack:</strong> Django, Flask API, Fast API, React, Next JS
                                </div>
                            </div>
                        </div>

                        <div className="experience-item">
                            <div className="experience-header">
                                <h3>Livinginsider Company Limited</h3>
                                <span className="duration">2020 - 2021</span>
                                <span className="position">Developer</span>
                            </div>
                            <div className="experience-content">
                                <ul>
                                    <li>Developed real estate websites with added features</li>
                                    <li>Created customer-oriented real estate websites</li>
                                    <li>Designed and developed a real estate insurance website</li>
                                </ul>
                                <div className="tech-stack">
                                    <strong>Tech Stack:</strong> Codeigniter, Laravel, Smarty PHP, React JS, Angular JS
                                </div>
                            </div>
                        </div>

                        <div className="experience-item">
                            <div className="experience-header">
                                <h3>Databar Company Limited</h3>
                                <span className="duration">2018 - 2020</span>
                                <span className="position">Developer</span>
                            </div>
                            <div className="experience-content">
                                <ul>
                                    <li>Developed websites for product information, covering hardware and software</li>
                                    <li>Built a comprehensive management system for handling Repairing Process, Delivery Order, and Quotation</li>
                                    <li>Developed a Mobile Device Management system for efficient device management</li>
                                </ul>
                                <div className="tech-stack">
                                    <strong>Tech Stack:</strong> Codeigniter, Laravel, React JS, Nginx
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="skills" className="skills-section">
                <div className="container mx-auto">
                    <h2 className="section-title">Technical Skills</h2>
                    
                    <div className="skills-grid">
                        <div className="skill-category">
                            <h3>Programming Languages</h3>
                            <div className="skill-items">
                                {languages.map((skill) => (
                                    <CardIcon
                                        key={skill.text}
                                        image={skill.image}
                                        text={skill.text}
                                        experience={skill.experience}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="skill-category">
                            <h3>Frontend Technologies</h3>
                            <div className="skill-items">
                                {frontendTech.map((skill) => (
                                    <CardIcon
                                        key={skill.text}
                                        image={skill.image}
                                        text={skill.text}
                                        experience={skill.experience}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="skill-category">
                            <h3>Backend Technologies</h3>
                            <div className="skill-items">
                                {backendTech.map((skill) => (
                                    <CardIcon
                                        key={skill.text}
                                        image={skill.image}
                                        text={skill.text}
                                        experience={skill.experience}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="skill-category">
                            <h3>Tools & Others</h3>
                            <div className="tools-list">
                                <div className="tool-item">NodeJS</div>
                                <div className="tool-item">PostgreSQL</div>
                                <div className="tool-item">MongoDB</div>
                                <div className="tool-item">Git</div>
                                <div className="tool-item">AWS</div>
                                <div className="tool-item">Docker</div>
                                <div className="tool-item">Jira</div>
                                <div className="tool-item">Kafka</div>
                                <div className="tool-item">Rabbit MQ</div>
                                <div className="tool-item">Redis</div>
                                <div className="tool-item">Azure</div>
                                <div className="tool-item">Grafana</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="education" className="education-section">
                <div className="container mx-auto">
                    <h2 className="section-title">Education</h2>
                    <div className="education-timeline">
                        <div className="education-item">
                            <h3>Intrachai Commercial College</h3>
                            <p className="degree">High Vocational Certificate, Information Technology</p>
                            <p className="education-duration">2016 - 2018</p>
                            <p className="gpa">GPA: 3.50</p>
                        </div>
                        <div className="education-item">
                            <h3>Intrachai Commercial College</h3>
                            <p className="degree">Vocational Certificate, Business Computer</p>
                            <p className="education-duration">2013 - 2016</p>
                            <p className="gpa">GPA: 3.71</p>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <div className="container mx-auto text-center">
                    <p>&copy; 2024 Teerach Mincharoen. All rights reserved.</p>
                    <div className="contact-info">
                        <p>📧 teerach.min@gmail.com | 📱 086 714 0083</p>
                        <p>📍 600/96 Rimkhlong Latphrao Rd., Bangkapi, Huai Khwang, Bangkok 10310</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default App