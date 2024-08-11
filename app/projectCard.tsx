import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ProjectCardProps {
    title: string;
    desc: string;
    icon: IconDefinition;
    url: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, desc, icon, url }) => {
    return (
        <a href={url}
                  className="block h-full w-full group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                  target="_blank"
                  rel="noopener noreferrer">
                  <div className="flex flex-col gap-y-4">
                    <div className="flex items-center gap-x-6">
                      <div className="relative rounded-full overflow-hidden">
                        <div className="text-4xl">
                          <FontAwesomeIcon icon={icon} />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-base font-semibold leading-7 tracking-tight opacity-70">{title}</h3>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold leading-6 text-indigo-600">{desc}</p>
                    </div>
                  </div>
                </a>
    );
}

export default ProjectCard;
