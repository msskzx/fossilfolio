import Image from "next/image";
import AnimatedCard from './components/animatedCard';
import { links, otherLinks } from './data/links'
import { topics } from './data/topics'
import { highlights } from './data/highlights'
import { meh } from './data/meh'
import TopicCard from "./components/topicCard";
import ProjectCard from "./components/projectCard";
import LinkCard from "./components/linkCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="lg:rounded-xl">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 mb-6">
          <div className="text-3xl font-bold tracking-tight sm:text-4xl opacity-90">
            {/* profile */}
            <div className="z-10 w-full font-mono text-sm flex items-start">
              <div className="flex gap-x-6 items-start">
                <div className="relative h-16 w-16 rounded-full overflow-hidden">
                  <Image
                    src={meh.imageUrl}
                    alt={meh.imageUrl}
                    fill
                    priority
                  />
                </div>
                <div className="flex flex-col justify-start">
                  <h3 className="text-base font-semibold leading-7 tracking-tight opacity-70">{meh.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">{meh.role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Intro */}
        <div className="lg:rounded-xl py-20 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 sm:grid-cols-1 xl:grid-cols-4">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl opacity-90">
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
      </div>

      {/* Topics */}
      <div className="z-10 w-full items-center justify-between font-mono text-sm g:flex lg:flex">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-12 px-6 lg:px-8">
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-1 sm:gap-y-16 md:grid-cols-2 lg:grid-cols-4 xl:col-span-4">
            {topics.map((item) => (
              <li key={item.title}>
                <TopicCard title={item.title} desc={item.desc} icon={item.icon} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Projects */}
      <div className="lg:rounded-xl py-20 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 mb-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl opacity-90">
            Projects
          </h2>
        </div>

        <div className="max-w-7xl">
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-1 md:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {highlights.map((item) => (
              <li key={item.title}>
                <ProjectCard title={item.title} desc={item.desc} icon={item.icon} url={item.url} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Links */}
      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-7xl sm:grid-cols-2 lg:grid-cols-4 lg:text-left">
        {Object.values(links).map((item) => (
          <LinkCard key={item.title} title={item.title} desc={item.desc} icon={item.icon} url={item.url} />
        ))}
      </div>
    </main>
  );
}
