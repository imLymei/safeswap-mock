import { IconType } from 'react-icons';
import { IoNavigateCircle } from 'react-icons/io5';

export const ICON_SIZE = {
  SMALL: 30,
  MEDIUM: 45,
  LARGE: 60,
};

export type NavbarFolder = {
  icon: IconType;
  name: string;
  navbarItems: NavbarItem[];
  href?: never;
};
export type NavbarItem = {
  icon: IconType;
  name: string;
  href: string;
  navbarItems?: never;
};

export type NavbarSection = {
  name: string;
  navbarItems: (NavbarItem | NavbarFolder)[];
};

export const NAVBAR_SECTIONS: NavbarSection[] = [
  {
    name: 'Admin',
    navbarItems: [
      { name: 'Normal Item', icon: IoNavigateCircle, href: '/' },
      {
        name: 'Folder Item',
        icon: IoNavigateCircle,
        navbarItems: [
          { name: 'Normal Item', icon: IoNavigateCircle, href: '/' },
          { name: 'Normal Item', icon: IoNavigateCircle, href: '/' },
          { name: 'Normal Item', icon: IoNavigateCircle, href: '/' },
        ],
      },
    ],
  },
  {
    name: 'Transações',
    navbarItems: [
      {
        name: 'A Very Long Normal Item That Probably Will Not Fit',
        icon: IoNavigateCircle,
        href: '/',
      },
      { name: 'Normal Item', icon: IoNavigateCircle, href: '/' },
      { name: 'Normal Item', icon: IoNavigateCircle, href: '/' },
      {
        name: 'A Very Long Folder Item That Probably Will Not Fit',
        icon: IoNavigateCircle,
        navbarItems: [
          { name: 'Normal Item', icon: IoNavigateCircle, href: '/' },
          { name: 'Normal Item', icon: IoNavigateCircle, href: '/' },
          { name: 'Normal Item', icon: IoNavigateCircle, href: '/' },
        ],
      },
      {
        name: 'Folder Item',
        icon: IoNavigateCircle,
        navbarItems: [
          { name: 'Normal Item', icon: IoNavigateCircle, href: '/' },
          { name: 'Normal Item', icon: IoNavigateCircle, href: '/' },
          { name: 'Normal Item', icon: IoNavigateCircle, href: '/' },
        ],
      },
    ],
  },
];
