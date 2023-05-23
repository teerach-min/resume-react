
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
                        As an individual who specializes in both <span className='text-sky-500'>front-end and back-end</span> programming,
                        I have accumulated extensive knowledge and hands-on involvement in the field of development within a span of 5 years.
                        Throughout this period, my expertise has allowed me to develop <span className='text-sky-500'>warehouse management systems</span> as required by clients,
                        improve and maintain websites tailored for <span className='text-sky-500'>real estate</span> purposes while also designing and implementing specialized internal company websites.
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
                            I have worked on and improved <span className='text-sky-500'>warehouse management systems</span> to support easy operation within warehouses.
                            I addressed and resolved issues to reduce work duration.
                            The system includes processes such as receiving goods into the warehouse,
                            picking and packing, and managing inventory in storage.
                            </p>
                            <p className='text-slate-500 mb-5'>
                            I am skilled in working with <span className='text-sky-500'>Proxy APIs</span>. The purpose of this system is to enable third-party entities to retrieve specific company information, subject to authorization conditions.
                            Each request necessitates the use of a JWT token for verification purposes.
                            </p>
                        </div>
                        <div className="mb-10">
                            <p className='text-lg'>Livinginsider Company Limited (2020-2021)</p>
                            <p className='text-slate-500 mb-5'>
                            Developed a real estate marketplace platform for individuals interested in selling properties, with a focus on user-friendly frontend interface.
                            The platform includes profile systems where users can view ratings and review profiles of other members. Additionally,
                            it incorporates a property sales system catering to multiple brands selling <span className='text-sky-500'>real estate</span> in Thailand.
                            </p>
                            <p className='text-slate-500 mb-5'>
                            Collaborated with Livinginsider company and MSIG <span className='text-sky-500'>insurance</span> company to develop an insurance website.
                            Our company served as the frontend interface for customers to purchase insurance and submit claims for damaged properties within the insurance coverage.
                            MSIG would then handle customer communication for claim processing.
                            </p>
                            <p className='text-slate-500 mb-5'>
                            Improved and updated a <span className='text-sky-500'>Line bot</span> system using the <span className='text-sky-500'>Go lang</span> based on user feedback.
                            Actively participated in enhancing and optimizing the functionality of the Line bot based on user suggestions and usage experiences.
                            </p>
                        </div>
                        <div className="mb-10">
                            <p className='text-lg'>Databar Company Limited (2018 - 2020)</p>
                            <p className='text-slate-500 mb-5'>
                            Developed a system for handling <span className='text-sky-500'>internal product repairs</span> within an organization,
                            starting from creating documentation for receiving goods at the receiving point to the repair process itself.
                            The system also includes generating repair quotations and monitoring the performance of employees involved in the repair process.
                            </p>
                            <p className='text-slate-500 mb-5'>
                            Developed a <span className='text-sky-500'>product borrowing</span> and returning system from the warehouse,
                            allowing sales representatives to provide Demo products to interested companies for trial purposes.
                            The system provides details of the borrowed products and specifies the return deadline.
                            </p>
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
