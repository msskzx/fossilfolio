import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
    faLinux,
    faJava,
    faDocker,
    faReact,
    faPython,
    faUnity,
} from '@fortawesome/free-brands-svg-icons'

import {
    faC,
} from '@fortawesome/free-solid-svg-icons';

interface Topic {
    name: string;
    tech: string;
    icon: IconDefinition;
}

export const topics: Topic[] = [
    {
        name: 'Design Patterns',
        tech: 'Java; Python',
        icon: faJava,
    }, {
        name: 'System Design',
        tech: 'Docker; APIs',
        icon: faLinux,
    }, {
        name: 'Cloud Technologies',
        tech: 'Kubernetes; AWS',
        icon: faDocker,
    }, {
        name: 'Web Development',
        tech: 'React; TypeScript',
        icon: faReact,
    }, {
        name: 'Computer Vision',
        tech: 'Python; C++',
        icon: faPython,
    }, {
        name: 'Augmented Reality',
        tech: 'C#; Unity',
        icon: faUnity,
    }, {
        name: 'Language Models',
        tech: 'Python; PyTorch',
        icon: faPython,
    }, {
        name: 'Parallel Computing',
        tech: 'CUDA; C',
        icon: faC,
    },
]