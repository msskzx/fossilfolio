import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
    faPython,
    faReact,
} from '@fortawesome/free-brands-svg-icons'

interface Highlight {
    name: string;
    desc: string;
    url: string;
    icon: IconDefinition;
}

export const highlights: Highlight[] = [
    {
      name: 'Webex Integration',
      desc: 'At infineon, I implemented a number of microservices and a containerized setup along with the cloud setup to regularly notify 60,000 employees. Furthermore, I implemented an ETL pipeline using Apache Airflow, ensuring efficient batch processing and minimal database queries, and a scalable task queue with robust retry mechanisms.',
      url: 'https://github.com/msskzx',
      icon: faPython,
    }, {
      name: 'Image Segmentation',
      desc: 'At AI in Medicine Lab, I devised a three-stage pipeline to for cardiac magnetic resonance image segmentation and evaluated fairness of different models across sex and ethnic groups to mitigate bias. I experimented with a number of approaches like multi-modal and multi-task settings, slice selection, and distribution alignment.',
      url: 'https://github.com/msskzx/unimatch',
      icon: faPython,
    }, {
      name: 'Fossilfolio',
      desc: 'At home, I leveraged the science of React, Next.js and TypeScript to build this portfolio, so you can enjoy your eyes. Look at this purple!',
      url: 'https://github.com/msskzx/fossilfolio',
      icon: faReact,
    }
  ]