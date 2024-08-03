import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin,
  faReact,
  faHackerrank,
  faDocker,
  faPython,
} from '@fortawesome/free-brands-svg-icons'
import {
  faCode,
} from '@fortawesome/free-solid-svg-icons';

const meh = {
  name: 'Muhammad Khattab',
  role: 'Software Engineer',
  intro: 'Since 2014, I have been learning and working on software projects across most of computer science domains and recently I have been passionate about computer vision.',
  years: '10+ Years',
  projects: '50+ Projects',
  problems: '500+ Problems',
  url: '/',
  imageUrl: '/meh.jpg',
}

const topics = [
  {
    name: 'Web Development',
    role: 'React; TypeScript',
    icon: faReact,
    url: '/',
    imageUrl: '/react.png',
  }, {
    name: 'Computer Vision',
    role: 'Python; C++',
    icon: faPython,
    url: '/',
    imageUrl: '/react.png',
  }, {
    name: 'Cloud Technologies',
    role: 'Docker; Kubernetes',
    icon: faDocker,
    url: '/',
    imageUrl: '/react.png',
  }, {
    name: 'Language Models',
    role: 'Python',
    icon: faPython,
    url: '/',
    imageUrl: '/react.png',
  },
]

const highlights = [
  {
    name: 'Image Segmentation',
    desc: 'At AI in Medicine Lab, I devised a three-stage pipeline to for cardiac magnetic resonance image segmentation and evaluated fairness of different models across sex and ethnic groups to mitigate bias. I experimented with a number of approaches like multi-modal and multi-task settings, slice selection, and distribution alignment.',
    url: 'https://github.com/msskzx/unimatch',
    icon: faPython,
    imageUrl: '/react.png',
  }, {
    name: 'Webex Integration',
    desc: 'At infineon, I implemented a number of microservices and a containerized setup along with the cloud setup no regularly notify 60,000 employees. Furthermore, I implemented an ETL pipeline using Apache Airflow, ensuring efficient batch processing and minimal database queries, and a scalable task queue with robust retry mechanisms.',
    url: '/',
    icon: faPython,
    imageUrl: '/react.png',
  }, {
    name: 'Fossilfolio',
    desc: 'At home, I leveraged the science of React, Next.js and TypeScript to build this portfolio, so you can enjoy your eyes. Look at this purple!',
    url: '/',
    icon: faReact,
    imageUrl: '/react.png',
  }
]

const myLinks = {
  github: 'https://github.com/msskzx',
  linkedin: 'https://linkedin.com/in/msskzx/',
  leetcode: 'https://leetcode.com/msskzx/',
  hackerrank: 'https://hackerrank.com/profile/msskzx',
  codeforces: 'https://codeforces.com/profile/mssk',
  problems: 'https://github.com/msskzx/problem-solvn',
}

const links = [
  {
    name: 'Linkedin',
    url: 'https://linkedin.com/in/msskzx',
    icon: faLinkedin,
    desc: 'Same things i said here but more blue.',
  }, {
    name: 'GitHub',
    url: 'https://github.com/msskzx',
    icon: faGithub,
    desc: 'Explore through all my public projects.',
  }, {
    name: 'HackerRank',
    url: 'https://hackerrank.com/profile/msskzx',
    icon: faHackerrank,
    desc: 'Enjoy the sight of ordinary certificates.',
  }, {
    name: 'LeetCode',
    url: 'https://leetcode.com/msskzx',
    icon: faCode,
    desc: 'Nothing to see here but in O(1).',
  },
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="flex items-center gap-x-6">
          <div className="relative h-16 w-16 rounded-full overflow-hidden">
            <Image
              src={meh.imageUrl}
              alt={meh.imageUrl}
              fill
              priority
            />
          </div>
          <div>
            <h3 className="text-base font-semibold leading-7 tracking-tight opacity-70">{meh.name}</h3>
            <p className="text-sm font-semibold leading-6 text-indigo-600">{meh.role}</p>
          </div>
        </div>
      </div>
      <div className="lg:rounded-xl py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 sm:grid-cols-1 xl:grid-cols-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Portfolio
            </h2>
            <p className="mt-6 text-lg leading-8 opacity-70">
              {meh.intro}
            </p>
          </div>
          <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 sm:gap-y-16 xl:col-span-3">
            <div className="shadow-lg rounded-lg full-rounded overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 tracking-tight opacity-70">{meh.years}</h2>
                <p className="tracking-tight opacity-50 mb-3">of Software Development</p>
                <div className="size-7">
                  <a
                    href={myLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-colors"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
              </div>
            </div>
            <div className="shadow-lg rounded-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl tracking-tight font-semibold mb-2 opacity-70">{meh.projects}</h2>
                <p className="tracking-tight opacity-50 mb-3">in Diverse Teams</p>
                <div className="size-7">
                  <a
                    href={myLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-colors"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
              </div>
            </div>
            <div className="shadow-lg rounded-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl tracking-tight font-semibold mb-2 opacity-70">500+ Problems</h2>
                <p className=" tracking-tight opacity-50 mb-3">on Coding Platforms</p>
                <div className="grid sm:grid-cols-5 lg:col-span-3">
                  <div className="size-7">
                    <a
                      href={myLinks.problems}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-80 transition-colors"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </div>
                  <div className="size-7">
                    <a
                      href={myLinks.hackerrank}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-80 transition-colors"
                    >
                      <FontAwesomeIcon icon={faHackerrank} />
                    </a>
                  </div>
                  <div className="size-7">
                    <a
                      href={myLinks.leetcode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-80 transition-colors"
                    >
                      <FontAwesomeIcon icon={faCode} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex">
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 lg:grid-cols-4 xl:col-span-4">
          {topics.map((topic) => (
            <li key={topic.name}>
              <a href={topic.url}
                className="block h-full w-full group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer">
                <div className="flex items-center gap-x-6">
                  <div className="relative rounded-full">
                    <div className="size-12">
                      <FontAwesomeIcon icon={topic.icon} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight opacity-70">{topic.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{topic.role}</p>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="lg:rounded-xl py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Recent Projects
            </h2>
            <p className="mt-6 text-lg leading-8 opacity-70">
              These are three recent projects other projects are listed in the CV or GitHub.
            </p>

          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-1 sm:gap-y-16 xl:col-span-2">
            {highlights.map((project) => (
              <li key={project.name}>
                <a href={project.url}
                  className="block h-full w-full group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                  target="_blank"
                  rel="noopener noreferrer">
                  <div className="flex flex-col gap-y-4">
                    <div className="flex items-center gap-x-6">
                      <div className="relative rounded-full overflow-hidden">
                        <div className="size-12">
                          <FontAwesomeIcon icon={project.icon} />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-base font-semibold leading-7 tracking-tight opacity-70">{project.name}</h3>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold leading-6 text-indigo-600">{project.desc}</p>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl sm:grid-cols-2 lg:grid-cols-4 lg:text-left">

        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex gap-x-4">
              <div className="size-5">
                <FontAwesomeIcon icon={link.icon} />
              </div>
              <h2 className="mb-3 text-xl font-semibold">
                {link.name + " "}
              </h2>
              <p className="transition-transform group-hover:translate-x-1 motion-reduce:transform-none text-xl">
                -&gt;
              </p>
            </div>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              {link.desc}
            </p>
          </a>
        ))}

      </div>
    </main>
  );
}
