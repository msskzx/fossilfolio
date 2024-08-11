import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AnimatedCard from './animatedCard';
import { links, otherLinks } from './links'
import { topics } from './topics'
import { highlights } from './highlights'
import { meh } from './meh'
import TopicCard from "./topicCard";
import ProjectCard from "./projectCard";

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

            <AnimatedCard targetNumber={meh.years.val} title={meh.years.title} desc={meh.years.desc} links={[links.linkedin]} />

            <AnimatedCard targetNumber={meh.projects.val} title={meh.projects.title} desc={meh.projects.desc} links={[links.github]} />

            <AnimatedCard targetNumber={meh.problems.val} title={meh.problems.title} desc={meh.problems.desc} links={[links.leetcode, otherLinks.codeforces, links.hackerrank]} />

          </div>
        </div>
      </div>

      <div className="z-10 w-full items-center justify-between font-mono text-sm g:flex lg:flex">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8">
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-1 sm:gap-y-16 md:grid-cols-2 lg:grid-cols-4 xl:col-span-4">
            {topics.map((topic) => (
              <li key={topic.title}>
                <TopicCard title={topic.title} desc={topic.desc} icon={topic.icon} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="lg:rounded-xl py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 sm:grid-cols-1 xl:grid-cols-4 mb-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Recent Projects
            </h2>
          </div>
        </div>

        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-1 md:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {highlights.map((highlight) => (
            <li key={highlight.title}>
              <ProjectCard title={highlight.title} desc={highlight.desc} icon={highlight.icon} url={highlight.url} />
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl sm:grid-cols-2 lg:grid-cols-4 lg:text-left">

        {Object.values(links).map((link) => (
          <a
            key={link.name}
            href={link.url}
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex gap-x-4">
              <div className="text-2xl">
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
