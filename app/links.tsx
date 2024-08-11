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
    name: string;
    url: string;
    icon: IconDefinition;
    desc: string;
}

export const links: { [key: string]: MiLink } = {
    linkedin:
    {
        name: 'Linkedin',
        url: 'https://linkedin.com/in/msskzx',
        icon: faLinkedin,
        desc: 'Same things i said here but more blue.',
    },
    github: {
        name: 'GitHub',
        url: 'https://github.com/msskzx',
        icon: faGithub,
        desc: 'Explore through all my public projects.',
    },
    hackerrank: {
        name: 'HackerRank',
        url: 'https://hackerrank.com/profile/msskzx',
        icon: faHackerrank,
        desc: 'Enjoy the sight of ordinary certificates.',
    },
    leetcode: {
        name: 'LeetCode',
        url: 'https://leetcode.com/msskzx',
        icon: faCode,
        desc: 'Nothing to see here but in O(1).',
    }
};


export const otherLinks: { [key: string]: MiLink } = {
    codeforces:
    {
        name: 'Codeforces',
        url: 'https://codeforces.com/profile/mssk',
        icon: faChartSimple,
        desc: 'Same things i said here but more blue.',
    },
    problemSolvn: {
        name: 'GitHub',
        url: 'https://github.com/msskzx/problem-solvn',
        icon: faGithub,
        desc: 'Solved coding problems on various coding platforms.',
    }
};
