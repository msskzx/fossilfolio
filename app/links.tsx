import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
    faGithub,
    faLinkedin,
    faHackerrank,
} from '@fortawesome/free-brands-svg-icons'

import {
    faCode,
} from '@fortawesome/free-solid-svg-icons';

interface Link {
    name: string;
    url: string;
    icon: IconDefinition;
    desc: string;
}

export const links: { [key: string]: Link } = {
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
