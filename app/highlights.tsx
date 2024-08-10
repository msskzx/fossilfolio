import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faPhp,
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
      name: 'Webex Integration - Infineon Technologies AG',
      desc: 'At Infineon, I developed several microservices and set up a containerized and cloud-based infrastructure to regularly notify 60,000 employees. Additionally, I created an ETL pipeline to load data into a database, utilizing a scheduler and message broker to manage tasks efficiently. This setup ensured optimized batch processing, minimized database queries, and incorporated robust retry mechanisms.',
      url: 'https://www.infineon.com/',
      icon: faPython,
    }, {
      name: 'The Porsche Circle - Metzler Vater GmbH',
      desc: 'I managed the data migration from DynamoDB to RDS, significantly reduced setup overhead. I also introduced a code registration module and admin panel functionalities to enhance content management. Additionally, I oversaw project maintenance and release management.',
      url: 'https://www.theporschecircle.com/',
      icon: faPhp,
    }, {
      name: 'Alldevice - Birkle IT AG',
      desc: 'I introduced features like a calendar module for task management with varying granularity levels, ensuring modularity and scalability. This streamlined integration, improved maintainability, and enhanced flexibility for future updates. I also optimized existing code to reduce response time, managed requirements engineering directly with the client, and maintained the project, ensuring continuous feature integration.',
      url: 'https://www.alldevicesoft.com/',
      icon: faPhp,
    }, {
      name: 'Image Segmentation - AI in Medicine Lab',
      desc: 'At the AI in Medicine Lab, I developed a three-stage pipeline for cardiac magnetic resonance image segmentation and assessed the fairness of various models across sex and ethnic groups to address bias. My experimentation included multi-modal and multi-task settings, balancing train and test sets, slice selection, and distribution alignment.',
      url: 'https://github.com/msskzx/unimatch',
      icon: faPython,
    }, {
      name: 'Fossilfolio',
      desc: 'At home, I leveraged the science of React, Next.js and TypeScript to build this portfolio, so you can enjoy your eyes. Look at this purple!',
      url: 'https://github.com/msskzx/fossilfolio',
      icon: faReact,
    }
  ]