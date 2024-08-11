import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
    faJava,
    faDocker,
    faPython,
    faUnity,
    faAws,
    faLaravel,
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
        desc: 'Java; Python; PHP; C++; Kotlin',
        icon: faJava,
    }, {
        title: 'System Design',
        desc: 'Docker; SQL; Kubernetes; NoSQL',
        icon: faDocker,
    }, {
        title: 'Cloud Computing',
        desc: 'AWS; GitOps; Kafka; Airflow',
        icon: faAws,
    }, {
        title: 'Web Development',
        desc: 'Spring; Laravel; React; TypeScript',
        icon: faLaravel,
    }, {
        title: 'Computer Vision',
        desc: 'Python; C++; OpenCV;',
        icon: faPython,
    }, {
        title: 'Language Models',
        desc: 'PyTorch; NumPy; NLTK',
        icon: faPython,
    }, {
        title: 'Augmented Reality',
        desc: 'C#; Unity',
        icon: faUnity,
    }, {
        title: 'Parallel Computing',
        desc: 'CUDA; C; OpenMP',
        icon: faC,
    },
]