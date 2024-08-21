import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faJava,
  faDocker,
  faPython,
  faAws,
  faReact,
} from '@fortawesome/free-brands-svg-icons'

import {
  faCircleNodes,
  faDatabase,
  faServer,
} from '@fortawesome/free-solid-svg-icons';

interface Topic {
  title: string;
  desc: string;
  icon: IconDefinition;
}

export const topics: Topic[] = [
  {
    title: 'Main Languages',
    desc: 'Java; Python; C++',
    icon: faJava,
  }, {
    title: 'System Design',
    desc: 'Docker; Kubernetes; Kafka',
    icon: faDocker,
  }, {
    title: 'Cloud Computing',
    desc: 'AWS; ArgoCD; CI/CD',
    icon: faAws,
  }, {
    title: 'Databases',
    desc: 'SQL; NoSQL; Graphs',
    icon: faDatabase,
  }, {
    title: 'Web Development',
    desc: 'Spring; Djagno; React.js',
    icon: faReact,
  }, {
    title: 'Network Monitoring',
    desc: 'Elasticsearch; Logstash; Kibana',
    icon: faServer,
  }, {
    title: 'Data Engineering',
    desc: 'Airflow; Spark; Flink',
    icon: faCircleNodes,
  }, {
    title: 'Computer Vision',
    desc: 'Python; C++; OpenCV',
    icon: faPython,
  }, {
    title: 'Language Models',
    desc: 'PyTorch; NumPy; Pandas',
    icon: faPython,
  },
]