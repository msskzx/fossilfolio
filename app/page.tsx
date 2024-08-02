import Image from "next/image";

const topics = [
  {
    name: 'Web Development',
    role: 'React; TypeScript',
    url: '/',
    imageUrl: '/react.png',
  }, {
    name: 'Computer Vision',
    role: 'Python; C++',
    url: '/',
    imageUrl: '/react.png',
  }, {
    name: 'Cloud Technologies',
    role: 'Docker; Kubernetes',
    url: '/',
    imageUrl: '/react.png',

  }, {
    name: 'Natural Language Processing',
    role: 'Python',
    url: '/',
    imageUrl: '/react.png',
  },
]

const highlights = [
  {
    name: 'Image Segmentation',
    desc: 'At AI in Medicine Lab, I employ a three-stage pipeline to for cardiac magnetic resonance image segmentation and evaluated fairness of the model across sex and ethnic groups.',
    url: '/',
    imageUrl: '/react.png',
  }, {
    name: 'Webex Integration',
    desc: 'At infineon, I implemented a number of microservices and a containerized setup along with the cloud setup no regularly notify employees.',
    url: '/',
    imageUrl: '/react.png',
  }, {
    name: 'Fossilfolio',
    desc: 'At home, I leveraged the science of React, Next.js and TypeScript through building this portfolio, so you can enjoy your eyes. Look at this purple!',
    url: '/',
    imageUrl: '/react.png',
  }
]

const myLinks = {
  github: 'https://github.com/msskzx',
  linkedin: 'https://linkedin.com/in/msskzx/',
  leetcode: 'https://leetcode.com/msskzx/',
  hackerrank: 'https://hackerrank.com/profile/msskzx',
  codeforces: 'https://codeforces.com/profile/mssk',

}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
          <p className="fixed left-0 top-0 flex w-full justify-center pb-6 pt-8 backdrop-blur-2xl dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:p-4">
            Muhammad Khattab
          </p>
        </div>

        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="lg:rounded-xl py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Portfolio</h2>
            <p className="mt-6 text-lg leading-8 opacity-70">
              Since 2014, I have been learning and working on software projects across most of computer science domains.
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {topics.map((topic) => (
              <li key={topic.name}>
                <div className="flex items-center gap-x-6">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden">
                    <Image
                      src={topic.imageUrl}
                      alt={topic.imageUrl}
                      className="rounded-full"
                      layout="fill"
                      objectFit="cover"
                      priority
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight opacity-70">{topic.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{topic.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="lg:rounded-xl py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Most Recent Projects
            </h2>
            <p className="mt-6 text-lg leading-8 opacity-70">
              This is a list of most recent projects I am working on. Other projects are listed in the corresponding topic above or  on GitHub.
            </p>

          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-1 sm:gap-y-16 xl:col-span-2">
            {highlights.map((project) => (
              <li key={project.name}>
                <div className="flex flex-col gap-y-4">
                  <div className="flex items-center gap-x-6">
                    <div className="relative h-16 w-16 rounded-full overflow-hidden">
                      <Image
                        src={project.imageUrl}
                        alt={project.imageUrl}
                        className="rounded-full"
                        layout="fill"
                        objectFit="cover"
                        priority
                      />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold leading-7 tracking-tight opacity-70">{project.name}</h3>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{project.desc}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href={myLinks['linkedin']}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Linkedin{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Learn about my education and previous work experience.
          </p>
        </a>

        <a
          href="https://github.com/msskzx"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Github{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Explore through all my public projects.
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Hackerrank{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Enjoy the sight of ordinary certificates.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            LeetCode{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Nothing to see here.
          </p>
        </a>
      </div>
    </main>
  );
}
