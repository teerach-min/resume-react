
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
import LogoNodeJs from './assets/images/logo_nodejs.png'
import LogoExpressJs from './assets/images/logo_expressjs.png'
import LogoDjango from './assets/images/logo_django.png'
import LogoFastAPI from './assets/images/logo_fastapi.png'
import LogoLaravel from './assets/images/logo_laravel.png'
import LogoCodeigniter from './assets/images/logo_codeigniter.png'
import LogoReact from './assets/images/logo_react.png'
import LogoAngular from './assets/images/logo_angular.png'

import './App.css'

const language = [
    {
        image: LogoHTML,
        text: 'HTML',
        experience: 'Advance'
    },
    {
        image: LogoCSS,
        text: 'CSS',
        experience: 'Advance'
    },
    {
        image: LogoSASS,
        text: 'SCSS',
        experience: 'Advance'
    },
    {
        image: LogoPHP,
        text: 'PHP',
        experience: 'Advance'
    },
    {
        image: LogoPython,
        text: 'Python',
        experience: 'Advance'
    },
    {
        image: LogoJavascript,
        text: 'Java Script',
        experience: 'Advance'
    },
    {
        image: LogoGO,
        text: 'Golang',
        experience: 'Basic'
    },
]

const technology = [
    {
        image: LogoLaravel,
        text: 'Laravel',
        experience: 'Advance'
    },
    {
        image: LogoCodeigniter,
        text: 'Codeigniter',
        experience: 'Advance'
    },
    {
        image: LogoExpressJs,
        text: 'Express Js',
        experience: 'Advance'
    },
    {
        image: LogoDjango,
        text: 'Django',
        experience: 'Advance'
    },
    {
        image: LogoNodeJs,
        text: 'NodeJs',
        experience: 'Advance'
    },
    {
        image: LogoFastAPI,
        text: 'Fast API',
        experience: 'Basic'
    },
    {
        image: LogoReact,
        text: 'React',
        experience: 'basic'
    },
    {
        image: LogoAngular,
        text: 'Angular',
        experience: 'basic'
    },
]


const App: React.FC = () => {
    return (
        <div className="App">
            <div className="navbar">
                <div className="container mx-auto flex justify-end">
                    <div className="nav-menu flex flex-row">
                        <a href="#home">Home</a>
                        <a href="#about-me">About me</a>
                        <a href="#experience">Experience</a>
                        <a href="#technology">Technology</a>
                        <a href="#education">Education</a>
                    </div>
                </div>
            </div>

            <section id='home' className="background-image flex">
                <span className="content container title-header uppercase">Software engineer, Developer</span>
            </section>

            <section id='about-me' className="profile container flex justify-center items-center m-auto mt-10">
                <div className="abount-me grow">
                    <h2 className="text-center mb-10">
                        <p className="text-3xl uppercase">About me</p>
                    </h2>
                    <div className="flex justify-center pb-10">
                        <div className="my-profile basis-1/2">
                            <img src={MyProfile} alt="Teerach Mincharoen" />
                        </div>

                        <div className="basis-1/4 mx-10">
                            <p className="text-2xl mb-3">Teerach Mincharoen</p>
                            <p className='text-slate-500'>
                                <b>Date of birth</b> : 28 September 1997
                            </p>
                            <p className='text-slate-500'>
                                <b>Age</b> : 25 years old
                            </p>
                            <p className='text-slate-500'>
                                <b>Personality</b> : Fast learner, Responsible, Friendly
                            </p>
                            <p className='text-slate-500'>
                                <b>Religion</b> : Islam
                            </p>
                            <p className='text-slate-500'>
                                <b>Height / Weight</b> : 175cm / 65kgs.
                            </p>
                            <p className='text-slate-500'>
                                <b>Nationality</b> : Thai
                            </p>
                            <p className='text-slate-500'>
                                <b>Health</b> : Excellence
                            </p>
                            <p className='text-slate-500'>
                                <b>Contact</b> : Tel 086-714-0083
                            </p>
                            <p className='text-slate-500'>
                                <b>Email</b> : teerach.min@gmail.com
                            </p>
                        </div>
                    </div>

                    <div className="summary flex justify-center mt-10 h-full text-center">
                        <p className='w-5/6 text-2xl font-bold'>
                        As a <span className='text-sky-500'>Full-Stack developer</span>,
                        I possess an extensive expertise of 5 years in the field. During this span of time,
                        my projects scope covered developing customized internal management systems tailored to specifics of organizations as well as warehouse management solutions and real estate websites creation.
                        </p>
                    </div>
                </div>
            </section>

            <section id="experience" className='flex justify-center items-center'>
                <div className="experience container m-auto px-2">
                    <h2 className="text-center mb-10">
                        <p className="text-3xl uppercase">Experience</p>
                    </h2>

                    <div className="timeline">
                        <div className="mb-10">
                            <p className='text-lg'>N-Squared eCommerce (2021-2023)</p>
                            <p className='text-slate-500 pb-5'>
                            I have enhanced the <span className='text-sky-500'>warehouse management systems</span> by designing them in a way that facilitates simple operation within a warehouse environment.
                            I tackled and solved obstacles to minimize the duration of work involved.
                            The mechanism covers various methods from receiving goods, selecting and storing items, as well as upkeeping an inventory system for storage purposes.
                            </p>
                            <p className='text-slate-500 mb-5'>
                            I am skilled in working with <span className='text-sky-500'>Proxy APIs</span>. The purpose of this system is to enable third-party entities to retrieve specific company information, subject to authorization conditions.
                            Each request necessitates the use of a JWT token for verification purposes.
                            </p>
                        </div>
                        <div className="mb-10">
                            <p className='text-lg'>Livinginsider Company Limited (2020-2021)</p>
                            <p className='text-slate-500 mb-5'>
                            Created a platform for people who wish to sell properties that have an emphasis on a user-friendly frontend interface.
                            This <span className='text-sky-500'>real estate</span> marketplace includes profile systems, which enable members to evaluate ratings and critiques of other individuals.
                            Furthermore, it contains multiple property sales system that serves different brands selling real estate in Thailand.
                            </p>
                            <p className='text-slate-500 mb-5'>
                            Partnered with MSIG insurance companies to create an online <span className='text-sky-500'>insurance platform</span>.
                            Our organization assumed the role of the customer-facing portal for purchasing policies and lodging claims following property damage that lies within coverage limits.
                            Subsequently, claim processing communication would be catered by MSIG.
                            </p>
                            <p className='text-slate-500 mb-5'>
                            Improved and updated a <span className='text-sky-500'>Line bot</span> system using the <span className='text-sky-500'>Go lang</span> based on user feedback.
                            Actively participated in enhancing and optimizing the functionality of the Line bot based on user suggestions and usage experiences.
                            </p>
                        </div>
                        <div className="mb-10">
                            <p className='text-lg'>Databar Company Limited (2018 - 2020)</p>
                            <span className='text-slate-500'>
                            Developed websites for product information, covering hardware and software.
                            Built a comprehensive management system for handling Repairing Process, Delivery Order, and Quotation.
                            Developed a Mobile Device Management system for efficient device management.
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <section id="technology" className="container mx-auto flex flex-wrap justify-center items-center mt-10 mb-10">
                <div className="language basis-full lg:basis-1/2">
                    <h2 className="text-center mb-10">
                        <p className="text-1xl">Experence</p>
                        <p className="text-3xl uppercase">Language</p>
                    </h2>
                    <div className="language-item flex mb-5 justify-center flex-wrap">
                        {language.map((data, index) => {
                            return (
                                <CardIcon
                                    key={index}
                                    image={data.image}
                                    text={data.text}
                                    experience={data.experience}
                                />
                            )
                        })}
                    </div>
                </div>

                <div className="technology basis-full lg:basis-1/2">
                    <h2 className="text-center mb-10">
                        <p className="text-1xl">Experence</p>
                        <p className="text-3xl uppercase">TECHNOLOGY</p>
                    </h2>
                    <div className="flex justify-center mb-5 flex-wrap">
                        {technology.map((data, index) => {
                            return (
                                <CardIcon
                                    key={index}
                                    image={data.image}
                                    text={data.text}
                                    experience={data.experience}
                                />
                            )
                        })}
                    </div>
                </div>
            </section>

            <section id="education" className='flex justify-center items-center'>
                <div className="container m-auto w-1/4">
                    <h2 className="text-center mb-10">
                        <p className="text-3xl uppercase">Education</p>
                    </h2>
                    <div className="mb-10">
                        <p className='text-lg'>Intrachai Commercial College (2016-2018)</p>
                        <span className='text-slate-500'>High Vocational Certificate, Information Technology <span className='text-sky-500'>GPA : 3.50</span></span>
                    </div>
                    <div className="mb-10">
                        <p className='text-lg'>Intrachai Commercial College (2013-2016)</p>
                        <span className='text-slate-500'>Vocational Certificate, Business Computer <span className='text-sky-500'>GPA : 3.71</span></span>
                    </div>
                    <div className="mb-10">
                        <p className='text-lg'>Junior High School (2010-2013)</p>
                        <span className='text-slate-500'>Anwarulislam School</span>
                    </div>
                    <div className="mb-10">
                        <p className='text-lg'>Grade 1-6 (2004-2010)</p>
                        <span className='text-slate-500'>Param 9 Kanchanapisek</span>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default App
