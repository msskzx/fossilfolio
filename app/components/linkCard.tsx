import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface LinkCardProps {
  title: string;
  desc: string;
  icon: IconDefinition;
  url: string;
}

const LinkCard: React.FC<LinkCardProps> = ({ title, desc, icon, url }) => {
  return (
    <a
      href={url}
      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex gap-x-4">
        <div className="text-2xl">
          <FontAwesomeIcon icon={icon} />
        </div>
        <h2 className="mb-3 text-xl font-semibold">
          {title + " "}
        </h2>
        <p className="transition-transform group-hover:translate-x-1 motion-reduce:transform-none text-xl">
          -&gt;
        </p>
      </div>
      <p className="m-0 max-w-[30ch] text-sm opacity-50">
        {desc}
      </p>
    </a>
  );
}

export default LinkCard;
