import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faGithub,
  faLinkedin,
  faHackerrank,
} from '@fortawesome/free-brands-svg-icons'

import {
  faChartSimple,
  faCode,
} from '@fortawesome/free-solid-svg-icons';

export default interface MiLink {
  title: string;
  url: string;
  icon: IconDefinition;
  desc: string;
}

export const links: { [key: string]: MiLink } = {
  linkedin:
  {
    title: 'Linkedin',
    url: 'https://linkedin.com/in/msskzx',
    icon: faLinkedin,
    desc: 'Same things i said here but more blue.',
  },
  github: {
    title: 'GitHub',
    url: 'https://github.com/msskzx',
    icon: faGithub,
    desc: 'Explore through all my public projects.',
  },
  hackerrank: {
    title: 'HackerRank',
    url: 'https://hackerrank.com/profile/msskzx',
    icon: faHackerrank,
    desc: 'Enjoy the sight of ordinary certificates.',
  },
  leetcode: {
    title: 'LeetCode',
    url: 'https://leetcode.com/msskzx',
    icon: faCode,
    desc: 'Nothing to see here but in O(1).',
  }
};


export const otherLinks: { [key: string]: MiLink } = {
  codeforces:
  {
    title: 'Codeforces',
    url: 'https://codeforces.com/profile/mssk',
    icon: faChartSimple,
    desc: 'Same things i said here but more blue.',
  },
  problemSolvn: {
    title: 'GitHub',
    url: 'https://github.com/msskzx/problem-solvn',
    icon: faGithub,
    desc: 'Solved coding problems on various coding platforms.',
  }
};
