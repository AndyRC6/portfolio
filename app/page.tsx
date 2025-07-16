'use client'
import Header from "@/components/Header";
import { CheckIcon } from '@heroicons/react/20/solid'

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

const steps = [
  {
    name: '[Your company name]',
    time: 'TBD', description: [],
    href: '', status: 'upcoming'
  },
  {
    name: 'Estate Guru',
    time: 'June 2022 - PRESENT',
    description: [
      "Developed online tools for the purpose of providing estate planning services and generating legal documents for clients all over the United States.",
      "Full stack web development using Node.js, Sequelize ORM, React.js, and Typescript.",
      "Assisted in large scale project to convert legacy code base to more modern tech stack in order to eliminate tech debt and allow dev teams to code faster and more efficiently than ever.",
      "Worked in temporary capacity as SCRUM master in addition to fulfilling dev duties while organization underwent team restructuring.",
      "Worked closely with product teams and internal field experts in order to ensure software was compliant with applicable state and federal laws regarding estate planning and other legal ops."
    ],
    href: 'https://www.estateguru.com',
    status: 'current',
  },
  {
    name: 'PSI/GMetrix',
    time: 'August 2019 - June 2022',
    description: [
      "Lead a small team of developers in the creation of a large-scale mobile app from the ground up in React Native.",
      "Performed code reviews, assisted Jr. level developers overcome learning challenges, Managed Workflow and deadlines, and created application architecture.",
      "Implemented SCRUM elements into development workflow."
    ],
    href: 'https://www.gmetrix.com',
    status: 'complete'
  },
  {
    name: 'Gmetrix',
    time: 'January 2014 - August 2019',
    description: [
      "Helped implement new features into the company's online testing application software.",
      "Assisted in the designing and implementation of many aesthetic upgrades to our company's front-end site.",
      "Created developer tools that allowed for large amounts of data to be imported into the back end system - allowing us to quickly release new, quality content to our customers.",
      "Full-Stack Web Developer working on large scale projects for customers all over the world.",
      "Became proficient in a wide array of technologies/libraries such as: ASP.NET Webforms, ASP.NET MVC, React.js, SQL, JQuery, Javascript, and C#."
    ],
    href: 'https://www.gmetrix.com',
    status: 'complete'
  }
]

const statuses = { expert: 'text-green-400 bg-green-400/10', proficient: 'text-yellow-200 bg-yellow-200/10', inProgress: 'text-orange-400 bg-orange-400/10' }

const skills = [
  {
    name: 'React',
    level: 'expert',
    years: '10',
    comment: `My bread and butter. Over the past decade React has made up the majority of my development time.`
  },
  {
    name: 'Javascript',
    level: 'expert',
    years: '10+',
    comment: ``
  },
  {
    name: 'Typescript',
    level: 'expert',
    years: '5+',
    comment: ``
  },
  {
    name: 'HTML',
    level: 'expert',
    years: '10+',
    comment: ``
  },
  {
    name: 'CSS',
    level: 'expert',
    years: '10+',
    comment: ``
  },
  {
    name: 'JQuery',
    level: 'expert',
    years: '7+',
    comment: ``
  },
  {
    name: 'Git',
    level: 'expert',
    years: '8+',
    comment: ``
  },
  {
    name: 'Node js',
    level: 'expert',
    years: '8+',
    comment: ``
  },
  {
    name: 'NextJS',
    level: 'expert',
    years: '3',
    comment: `NextJS is a fantastic framework for React development.`
  },
  {
    name: 'Deployment Pipelines',
    level: 'proficient',
    years: '8+',
    comment: ``
  },
  {
    name: 'MongoDB',
    level: 'proficient',
    years: '2',
    comment: ``
  },
  {
    name: '.NET MVC',
    level: 'proficient',
    years: '2',
    comment: ``
  },
  {
    name: '.NET Core',
    level: 'proficient',
    years: '2',
    comment: ``
  },
  {
    name: 'Webforms',
    level: 'proficient',
    years: '5+',
    comment: ``
  },
  {
    name: 'C#',
    level: 'proficient',
    years: '5+',
    comment: ``
  },
  {
    name: 'Tailwind',
    level: 'proficient',
    years: '3',
    comment: ``
  },
  {
    name: 'SQL',
    level: 'proficient',
    years: '8+',
    comment: ``
  }, 
  {
    name: 'React Native',
    level: 'proficient',
    years: '5',
    comment: ``
  },
  {
    name: 'SCRUM Management',
    level: 'proficient',
    years: '3+',
    comment: `Experience as SCRUM master at Estate Guru`
  },
  {
    name: 'Java',
    level: 'inProgress',
    years: '1',
    comment: ``
  }
]

export default function Home() {
  return (
    <>
      <Header />

      {/* ABOUT */}
      <div className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-4">

              <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pt-64 pb-9 shadow-2xl">
                <img
                  alt=""
                  src="/images/andrew.jpg"
                  className="absolute inset-0 size-full rounded-3xl object-contain brightness-125 saturate-0"
                />
                <div className="absolute inset-0 bg-gray-900 mix-blend-multiply" />
                <div
                  aria-hidden="true"
                  className="absolute top-1/2 left-1/2 -ml-16 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl"
                >
                  <div
                    style={{
                      clipPath:
                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-40"
                  />
                </div>
                <figure className="relative isolate">
                  <svg
                    fill="none"
                    viewBox="0 0 162 128"
                    aria-hidden="true"
                    className="absolute -top-4 -left-2 -z-10 h-32 stroke-white/20"
                  >
                    <path
                      d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                      id="0ef284b8-28c2-426e-9442-8655d393522e"
                    />
                    <use x={86} href="#0ef284b8-28c2-426e-9442-8655d393522e" />
                  </svg>
                  {/* <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/logos/workcation-logo-white.svg"
                  className="h-12 w-auto"
                /> */}
                  <blockquote className="mt-6 text-xl/8 font-semibold text-white">
                    <p>
                      "I'm a really great dev, and a hard worker."
                    </p>
                  </blockquote>
                  <figcaption className="mt-6 text-sm/6 text-gray-300">
                    <strong className="font-semibold text-white">Andrew Reyes-Cairo,</strong> Senior Dev
                  </figcaption>
                </figure>
              </div>

              <div className="grid grid-cols-2 gap-1.5 my-4">
                <div className="col-span-1">
                  <img
                    alt=""
                    src="/images/outdoor1.jpg"
                    className="rounded-3xl object-cover"
                  />
                </div>
                <div className="col-span-1 gap-2">
                  <img
                    alt=""
                    src="/images/outdoor2.jpg"
                    className=" rounded-3xl object-contain"
                  />
                </div>
              </div>

              <div className="bg-gray-900 py-4 cursor-pointer">
                <div className=" max-w-7xl ">
                  <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
                    <div
                      onClick={() => window.open('https://www.linkedin.com/in/andrew-reyes-cairo-1075a7121/', '_blank')}
                      className="bg-white/5 hover:bg-gray-800 p-8 sm:p-10 flex justify-center items-center"
                    >
                      <img
                        alt="Linkedin"
                        src="/images/LI-Logo.png"
                        width={158}
                        height={48}
                        className="max-h-12 w-full object-contain"
                      />
                    </div>
                    <div
                      onClick={() => window.open('https://github.com/AndyRC6', '_blank')}
                      className="bg-white/5 hover:bg-gray-800 p-6 sm:p-10 flex justify-center items-center">
                      <img
                        alt="Github"
                        src="/images/GitHub_Logo_White.png"
                        width={158}
                        height={48}
                        className="max-h-12 w-full object-contain"
                      />
                    </div>
                    <div
                      onClick={() => window.open('/resume.pdf', '_blank')}
                      className="bg-white/5 hover:bg-gray-800 p-6 sm:p-10 flex-col justify-center items-center"
                    >
                      <img
                        alt="resume"
                        src="/images/icons8-pdf-90.png"
                        width={158}
                        height={48}
                        className="max-h-12 w-full object-contain"
                      />
                      <p className="font-bold text-lg text-center">Resume</p>

                    </div>
                  </div>
                </div>
              </div>


            </div>
            <div>
              <div className="text-base/7 text-gray-500 lg:max-w-lg">
                <h2 className="text-base/7 font-semibold text-indigo-400" id="about">About</h2>
                <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
                  Nice to meet you
                </h1>
                <h3 className="text-lg/8 font-semibold tracking-tight text-white mt-5">Andrew Reyes-Cairo</h3>
                <p className="text-base/7 text-gray-300">Senior Full-Stack Developer • Husband • Father</p>
                <div className="max-w-xl">
                  <p className="mt-6">
                    Hi. I'm Andrew. My passion in life is to create things that
                    other people love to use, solving problems, and personal growth by way of learning and discovery.
                    When I'm not zooming kids around the living room like a superhero, you can usually find me coding.
                  </p>
                  <p className="mt-4">
                    For the past decade I have dedicated my professional career (and much of my free time) to the art of code. I started back
                    in 2014 as a college student working full time as a tech support agent at a small start up. In between support calls much of my thoughts were
                    devoted to pondering the quintessential dilemma of every young adult. What do I become?
                  </p>
                  <p className="mt-4">
                    The answer came swiftly as I got to know the dev team at our company. They were super stars. I watched them as they
                    built the foundations of our company's product from the ground up. I saw just how valuable their knowledge and skills were and admired
                    their capacity to adapt and learn every time a new problem was presented.
                  </p>
                  <p className="mt-4">
                    From that moment on, I stopped wondering what I should become and started working toward my goal of becoming a developer.
                    My time in-between calls became crucial moments of learning and practice. I consumed books, courses, videos, and took advantage
                    of every conversation with those experienced devs to learn and grow.
                  </p>
                  <p className="mt-4">
                    I was offered a position as a Junior Dev that same year. In this new capacity my knowledge and skills were taken to new heights. And although I was
                    learning more than I every thought I could, I decided to enroll at the University of Utah's coding program in order to further hone
                    my skills while I was working full time. Since then, I've been hitting the grind stone. Helping small start ups turn into huge, profitable companies.
                  </p>
                  <p className="mt-4">
                    I've now reached a point in my career where I can say with confidence that I am an experienced, professional engineer.
                    My experience speaks for itself. If you'd like to continue learning about me, my work, and my experience - just keep scrolling!
                  </p>
                </div>
              </div>
              <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-gray-900/10 pt-10 sm:grid-cols-4">
                {/* {stats.map((stat, statIdx) => (
                <div key={statIdx}>
                  <dt className="text-sm/6 font-semibold text-gray-600">{stat.label}</dt>
                  <dd className="mt-2 text-3xl/10 font-bold tracking-tight text-gray-900">{stat.value}</dd>
                </div>
              ))} */}
              </dl>
              {/* <div className="mt-10 flex">
              <a href="#" className="text-base/7 font-semibold text-indigo-600 hover:text-indigo-500">
                Learn more about our company <span aria-hidden="true">&rarr;</span>
              </a>
            </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* SKILLS */}
      <div className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="bg-gray-900 py-10">
            <h2 className="text-base/7 font-semibold text-indigo-400" id="skills">Skills</h2>
            <p className="mt-2 max-w-lg text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
              All proficiencies
            </p>
            <table className="mt-6 w-full text-left whitespace-nowrap">
              <colgroup>
                <col className="w-full sm:w-4/12" />
                <col className="lg:w-4/12" />
                <col className="lg:w-2/12" />
                <col className="lg:w-1/12" />
                <col className="lg:w-1/12" />
              </colgroup>
              <thead className="border-b border-white/10 text-sm/6 text-white">
                <tr>
                  <th scope="col" className="py-2 pr-8 pl-4 font-semibold sm:pl-6 lg:pl-8">
                    Skill
                  </th>
                  <th scope="col" className="hidden py-2 pr-8 pl-0 font-semibold sm:table-cell">
                    Level
                  </th>
                  <th scope="col" className="py-2 pr-4 pl-0 text-right font-semibold sm:pr-8 sm:text-left lg:pr-20">
                    Years
                  </th>
                  <th scope="col" className="hidden py-2 pr-8 pl-0 font-semibold md:table-cell lg:pr-20">
                    Comments
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {skills.map((item) => (
                  <tr key={item.name}>
                    <td className="py-4 pr-8 pl-4 sm:pl-6 lg:pl-8">
                      <div className="flex items-center gap-x-4">
                        <div className="truncate text-sm/6 font-medium text-white">{item.name}</div>
                      </div>
                    </td>
                    
                    <td className="py-4 pr-4 pl-0 text-sm/6 sm:pr-8 lg:pr-20">
                      <div className="flex items-center justify-end gap-x-2 sm:justify-start">
                        {/* <time dateTime={item.dateTime} className="text-gray-400 sm:hidden">
                          {item.date}
                        </time> */}
                        <div className={classNames(statuses[item.level], 'flex-none rounded-full p-1')}>
                          <div className="size-1.5 rounded-full bg-current" />
                        </div>
                        <div className="hidden text-white sm:block">{item.level === 'inProgress' ? 'learning in progress' : item.level}</div>
                      </div>
                    </td>
                    <td className="hidden py-4 pr-8 pl-0 text-sm/6 text-gray-400 md:table-cell lg:pr-20">{item.years}</td>
                    {/* <td className="hidden py-4 pr-4 pl-0 text-right text-sm/6 text-gray-400 sm:table-cell sm:pr-6 lg:pr-8">
                      <time dateTime={item.dateTime}>{item.date}</time>
                    </td> */}
                    <td className="hidden w-full sm:table-cell">
                      <div className="flex gap-x-3">
                        <div className="font-mono text-sm/6 text-gray-400">
                          <p className="text-wrap">{item.comment}</p>
                        </div>
                        {/* <div className="rounded-md bg-gray-700/40 px-2 py-1 text-xs font-medium text-gray-400 ring-1 ring-white/10 ring-inset">
                          {item.comment}
                        </div> */}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>




      {/* EXPERIENCE */}
      <div className="bg-gray-900 py-24 sm:py-32">
        <div className="ml-24 max-w-4xl px-6 lg:px-8">
          <h2 className="text-base/7 font-semibold text-indigo-400" id="experience">Experience</h2>
          <p className="mt-2 max-w-lg text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
            Work history
          </p>

          <nav aria-label="Progress" className="mt-8" >
            <ol role="list" className="overflow-hidden">
              {steps.map((step, stepIdx) => (
                <li key={step.name} className={classNames(stepIdx !== steps.length - 1 ? 'pb-10' : '', 'relative')}>
                  {step.status === 'complete' ? (
                    <>
                      {stepIdx !== steps.length - 1 ? (
                        <div aria-hidden="true" className="absolute top-4 left-4 mt-0.5 -ml-px h-full w-0.5 bg-indigo-600" />
                      ) : null}
                      <a href={step.href} target="_blank" className="group relative flex items-start">
                        <span className="flex h-9 items-center">
                          <span className="relative z-10 flex size-8 items-center justify-center rounded-full bg-indigo-600 group-hover:bg-indigo-800">
                            <CheckIcon aria-hidden="true" className="size-5 text-white" />
                          </span>
                        </span>
                        <span className="ml-4 flex min-w-0 flex-col">
                          <span className="text-sm font-medium">{step.name}</span>
                          <span className="text-sm font-medium">{step.time}</span>
                          <span className="text-sm text-gray-500">
                            <ul className="list-disc pl-4">
                              {
                                step.description.map((item, index) => {
                                  return (<li key={`${step.name}_${index}`}>{item}</li>)
                                })
                              }
                            </ul>
                          </span>
                        </span>
                      </a>
                    </>
                  ) : step.status === 'current' ? (
                    <>
                      {stepIdx !== steps.length - 1 ? (
                        <div aria-hidden="true" className="absolute top-4 left-4 mt-0.5 -ml-px h-full w-0.5 bg-gray-300" />
                      ) : null}
                      <a href={step.href} target="_blank" aria-current="step" className="group relative flex items-start">
                        <span aria-hidden="true" className="flex h-9 items-center">
                          <span className="relative z-10 flex size-8 items-center justify-center rounded-full border-2 border-indigo-600 bg-white">
                            <span className="size-2.5 rounded-full bg-indigo-600" />
                          </span>
                        </span>
                        <span className="ml-4 flex min-w-0 flex-col">
                          <span className="text-sm font-medium text-indigo-600">{step.name}</span>
                          <span className="text-sm font-medium">{step.time}</span>
                          <span className="text-sm text-gray-500">
                            <ul className="list-disc pl-4">
                              {
                                step.description.map((item, index) => {
                                  return (<li key={`${step.name}_${index}`}>{item}</li>)
                                })
                              }
                            </ul>
                          </span>
                        </span>
                      </a>
                    </>
                  ) : (
                    <>
                      {stepIdx !== steps.length - 1 ? (
                        <div aria-hidden="true" className="absolute top-4 left-4 mt-0.5 -ml-px h-full w-0.5 bg-gray-300" />
                      ) : null}
                      <a href={step.href} className="group relative flex items-start">
                        <span aria-hidden="true" className="flex h-9 items-center">
                          <span className="relative z-10 flex size-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white group-hover:border-gray-400">
                            <span className="size-2.5 rounded-full bg-transparent group-hover:bg-gray-300" />
                          </span>
                        </span>
                        <span className="ml-4 flex min-w-0 flex-col">
                          <span className="text-sm font-medium text-white">{step.name}</span>
                          <span className="text-sm font-medium">{step.time}</span>
                          <span className="text-sm text-gray-500 pl-4">
                            <ul className="list-disc">
                              {
                                step.description.map((item, index) => {
                                  return (<li key={`${step.name}_${index}`}>{item}</li>)
                                })
                              }
                            </ul>
                          </span>
                        </span>
                      </a>
                    </>
                  )}
                </li>
              ))}
            </ol>
          </nav>

        </div>
      </div>


      {/* PORTFOLIO */}
      <div className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-base/7 font-semibold text-indigo-400" id="portfolio">Portfolio</h2>
          <p className="mt-2 max-w-lg text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
            Demos and projects
          </p>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
            <div className="flex p-px lg:col-span-4">
              <div className="w-full overflow-hidden rounded-lg bg-gray-800 outline outline-white/15 max-lg:rounded-t-4xl lg:rounded-tl-4xl">
                <img
                  alt=""
                  src="/images/ghosttown_screenshot.png"
                  className="h-80 w-full object-cover object-left"
                />
                <div className="p-10">
                  <h3 className="text-sm/4 font-semibold text-gray-400">Web App</h3>
                  <p className="mt-2 text-lg font-medium tracking-tight text-white">Ghost Town</p>
                  <p className="mt-2 text-sm/6 text-gray-400">
                    Ghost Town is a passion project. A social web application that features a world map that allows users to mark locations and share
                    spooky experiences they've had with people all over the world. Create your own account, log in, and start sharing!
                  </p>

                  <p className="mt-2 text-lg font-medium tracking-tight text-white">Tech Stack</p>
                  <p className="mt-2 text-sm/6 text-gray-400">
                    This application was built using NextJS, React, Typescript, Prisma ORM, MySql, tailwind, and the Google Maps API.
                  </p>

                  <p className="mt-2 text-sm/6 text-gray-400">
                    This project also demonstrates knowledge of modern authentication standards (password encryption, salting/hashing, secure authentication, web tokens, session handling, etc),
                    as well as implementing SSO functionality with providers such as Google and Facebook.
                  </p>

                  <button
                    type="button"
                    onClick={() => window.open('https://www.ghosttown.global', '_blank')}
                    className="rounded-sm bg-indigo-500 px-2 py-1 mt-2 cursor-pointer text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  >
                    Visit
                  </button>
                </div>
              </div>
            </div>
            <div className="flex p-px lg:col-span-2">
              <div className="w-full overflow-hidden rounded-lg bg-gray-800 outline outline-white/15 lg:rounded-tr-4xl">
                <img
                  alt=""
                  src="/images/hangman_rpg.png"
                  className="h-80 object-cover w-full"
                />
                <div className="p-10">
                  <h3 className="text-sm/4 font-semibold text-gray-400">Demo/Game</h3>
                  <p className="mt-2 text-lg font-medium tracking-tight text-white">Hangman RPG</p>
                  <p className="mt-2 text-sm/6 text-gray-400">
                    This small Demo is an exercise in core knowledge of fundamentals using raw HTML, Javascript, and CSS. Play Hangman with a fun
                    twist while you slay monsters! And yes, it has hats.
                  </p>

                  <p className="mt-2 text-lg font-medium tracking-tight text-white">Tech Stack</p>
                  <p className="mt-2 text-sm/6 text-gray-400">
                    This website was built using raw HTML, Javascript, and CSS. It also utilizes a free-to-use API which returns a list of random english words to use while you play the game.
                  </p>

                  <button
                    type="button"
                    onClick={() => window.open('https://andyrc6.github.io/Hangman-Game/index.html', '_blank')}
                    className="rounded-sm bg-indigo-500 px-2 py-1 mt-2 cursor-pointer text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  >
                    Visit
                  </button>
                </div>
              </div>
            </div>
            <div className="flex p-px lg:col-span-2">
              <div className="w-full overflow-hidden rounded-lg bg-gray-800 outline outline-white/15 lg:rounded-bl-4xl">
                <img
                  alt=""
                  src="/images/pf_screenshot.png"
                  className="h-80 object-cover object-left"
                />
                <div className="p-10">
                  <h3 className="text-sm/4 font-semibold text-gray-400">Website</h3>
                  <p className="mt-2 text-lg font-medium tracking-tight text-white">My Portfolio</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-400">
                    That's right! I built the website you're looking at right now. Feel free to take a look around.
                  </p>

                  <p className="mt-2 text-lg font-medium tracking-tight text-white">Tech Stack</p>

                  <p className="mt-2 text-sm/6 text-gray-400">
                    This website was made using NextJS, React, Typescript, and Tailwind.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex p-px lg:col-span-4">
              <div className="w-full overflow-hidden rounded-lg bg-gray-800 outline outline-white/15 max-lg:rounded-b-4xl lg:rounded-br-4xl">
                <video controls="controls" width="800" height="300" name="ghosttown_app" className={'h-80 w-full'}>
                  <source src="/videos/ghosttown_app.mov" />
                </video>

                <div className="p-10">
                  <h3 className="text-sm/4 font-semibold text-gray-400">Mobile app video demo</h3>
                  <p className="mt-2 text-lg font-medium tracking-tight text-white">Ghost Town MOBILE</p>
                  <p className="mt-2 text-sm/6 text-gray-400">
                    This app is still a work in progress and will (hopefully) be released soon.
                    Ghost Town MOBILE is the mobile app version of the Ghost Town web application. Offering all the same functionality
                    as the website, along with some exclusive native goodies that can only be found in the app.
                  </p>

                  <p className="mt-2 text-sm/6 text-gray-400">
                    Featured in the video above, I was able to implement an impressive camera feature that showcases the implementation of AI
                    tensorflow models to track an individual's body movements in real time. Using frame processors, worklet scripts, and animation frameworks such as
                    reanimated, react-native-svg, and a lot of elbow grease, I was able to generate a moving image over the camera frame which maps out each joint
                    of the human body.


                  </p>

                  <p className="mt-2 text-lg font-medium tracking-tight text-white">Tech Stack</p>

                  <p className="mt-2 text-sm/6 text-gray-400">
                    This application was built using React Native. This project in particular offers quite a bit of functionality, and as such many different
                    frameworks, libraries, and APIs were used such as React Native, Expo, Typescript, React Native Tailwind (Nativewind), Google Maps,
                    Reanimated, Skia, Webviews, and much more.
                  </p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>

  );
}
