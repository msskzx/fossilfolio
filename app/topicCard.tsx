import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface TopicCardProps {
    title: string;
    desc: string;
    icon: IconDefinition;
}

const TopicCard: React.FC<TopicCardProps> = ({ title, desc, icon }) => {
    return (
        <div
            className="block h-full w-full group rounded-lg px-5 py-4"
            rel="noopener noreferrer">
            <div className="flex items-center gap-x-6">
                <div className="relative rounded-full">
                    <div className="text-4xl">
                        <FontAwesomeIcon icon={icon} />
                    </div>
                </div>
                <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight opacity-70">{title}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{desc}</p>
                </div>
            </div>
        </div>
    );
}

export default TopicCard;
