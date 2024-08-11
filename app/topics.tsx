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
    title: string;
    desc: string;
    icon: IconDefinition;
}

export const topics: Topic[] = [
    {
        title: 'Design Patterns',
        desc: 'Java; Python',
        icon: faJava,
    }, {
        title: 'System Design',
        desc: 'Docker; APIs',
        icon: faLinux,
    }, {
        title: 'Cloud Technologies',
        desc: 'Kubernetes; AWS',
        icon: faDocker,
    }, {
        title: 'Web Development',
        desc: 'React; TypeScript',
        icon: faReact,
    }, {
        title: 'Computer Vision',
        desc: 'Python; C++',
        icon: faPython,
    }, {
        title: 'Augmented Reality',
        desc: 'C#; Unity',
        icon: faUnity,
    }, {
        title: 'Language Models',
        desc: 'Python; PyTorch',
        icon: faPython,
    }, {
        title: 'Parallel Computing',
        desc: 'CUDA; C',
        icon: faC,
    },
]