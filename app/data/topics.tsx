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
  faDatabase,
} from '@fortawesome/free-solid-svg-icons';

interface Topic {
  title: string;
  desc: string;
  icon: IconDefinition;
}

export const topics: Topic[] = [
  {
    title: 'Design Patterns',
    desc: 'Java; Python; PHP',
    icon: faJava,
  }, {
    title: 'System Design',
    desc: 'Docker; Kubernetes; SQL',
    icon: faDocker,
  }, {
    title: 'Cloud Computing',
    desc: 'AWS; GitOps; ArgoCD',
    icon: faAws,
  }, {
    title: 'Data Engineering',
    desc: 'Spark; Airflow; Pandas',
    icon: faDatabase,
  }, {
    title: 'Web Development',
    desc: 'Spring; Laravel; React',
    icon: faLaravel,
  }, {
    title: 'Computer Vision',
    desc: 'Python; C++; OpenCV;',
    icon: faPython,
  }, {
    title: 'Language Models',
    desc: 'PyTorch; NumPy',
    icon: faPython,
  }, {
    title: 'Mixed Reality',
    desc: 'C#; Unity',
    icon: faUnity,
  }, {
    title: 'Parallel Computing',
    desc: 'CUDA; C',
    icon: faC,
  },
]