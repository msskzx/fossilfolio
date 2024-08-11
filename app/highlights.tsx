import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faPhp,
    faPython,
    faReact,
} from '@fortawesome/free-brands-svg-icons'

interface Highlight {
    title: string;
    desc: string;
    url: string;
    icon: IconDefinition;
}

export const highlights: Highlight[] = [
    {
      title: 'Webex Integration - Infineon Technologies AG',
      desc: 'At Infineon, I developed several microservices and set up a containerized and cloud-based infrastructure to regularly notify 60,000 employees. Additionally, I created an ETL pipeline to load data into a database, utilizing a scheduler and message broker to manage tasks efficiently. This setup ensured optimized batch processing, minimized database queries, and incorporated robust retry mechanisms.',
      url: 'https://www.infineon.com/',
      icon: faPython,
    }, {
      title: 'The Porsche Circle - Metzler Vater GmbH',
      desc: 'For the Porsche Circle project, I led the migration from DynamoDB to RDS, reducing setup overhead and simplifying onboarding for new team members. I introduced a code registration module to streamline the user invitation process and added admin panel functionalities to improve content management. Additionally, I managed project maintenance and release management.',
      url: 'https://www.theporschecircle.com/',
      icon: faPhp,
    }, {
      title: 'Alldevice - Birkle IT AG',
      desc: 'For Alldevice project, I introduced a calendar module for task management with varying granularity, enabling users to make better maintenance plans. I also optimized existing code to reduce response time, managed requirements engineering directly with the client, and oversaw project maintenance to ensure continuous feature integration.',
      url: 'https://www.alldevicesoft.com/',
      icon: faPhp,
    }, {
      title: 'Image Segmentation - AI in Medicine Lab',
      desc: 'At the AI in Medicine Lab, I developed a three-stage pipeline for cardiac magnetic resonance image segmentation and assessed the fairness of various models across sex and ethnic groups to address bias. My experimentation included multi-modal and multi-task settings, balancing train and test sets, slice selection, and distribution alignment.',
      url: 'https://github.com/msskzx/unimatch',
      icon: faPython,
    }, {
      title: 'Novel View Synthesis',
      desc: 'Neural Radiance Fields (NeRF) offer high-quality novel view synthesis but are too computationally intensive for real-time use. KiloNeRF speeds up processing by dividing the scene into a voxel grid with a tiny MLP per voxel, but still requires time-consuming NeRF model training and isn\'t fast enough for real-time execution. This project seeks to enhance KiloNeRF by accelerating both inference and training, and incorporating semantic class as an additional output.',
      url: 'https://github.com/msskzx/kilonerf',
      icon: faPython,
    }, {
      title: 'Fossilfolio',
      desc: 'At home, I leveraged the art of React, Next.js and TypeScript to build this portfolio, so you can enjoy your eyes. Look at this purple! Anyway, the project leverages states, effects, and functional components to enhance code reuse and maintainability. It also features an automatic dark/light mode switch based on device settings, for which I exclusively used SVGs to ensure a smooth theme transition. Finally, I deployed the app on Vercel.',
      url: 'https://github.com/msskzx/fossilfolio',
      icon: faReact,
    }
  ]