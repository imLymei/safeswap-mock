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
      { name: 'Transações', icon: IoNavigateCircle, href: '/' },
      {
        name: 'Pagamentos',
        icon: IoNavigateCircle,
        navbarItems: [
          { name: 'Últimos Pagamentos', icon: IoNavigateCircle, href: '/' },
          {
            name: 'Relatório de Pagamentos',
            icon: IoNavigateCircle,
            href: '/',
          },
        ],
      },
      { name: 'Relatório de Falhas', icon: IoNavigateCircle, href: '/' },
      {
        name: 'Funcionalidades',
        icon: IoNavigateCircle,
        navbarItems: [
          {
            name: 'Desligar Funcionalidade',
            icon: IoNavigateCircle,
            href: '/',
          },
          { name: 'Ativar Funcionalidade', icon: IoNavigateCircle, href: '/' },
          {
            name: 'Status de Funcionalidades',
            icon: IoNavigateCircle,
            href: '/',
          },
        ],
      },
    ],
  },
  {
    name: 'Transações',
    navbarItems: [
      {
        name: 'Nova Transações',
        icon: IoNavigateCircle,
        href: '/',
      },
      { name: 'Minhas Compras', icon: IoNavigateCircle, href: '/' },
      { name: 'Minhas Vendas', icon: IoNavigateCircle, href: '/' },
    ],
  },
  {
    name: 'Pagamentos',
    navbarItems: [
      {
        name: 'Meus Pagamentos',
        icon: IoNavigateCircle,
        href: '/',
      },
      { name: 'Realizar Pagamento', icon: IoNavigateCircle, href: '/' },
    ],
  },
];
