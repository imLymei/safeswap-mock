import { IconType } from 'react-icons';
import { FaCogs } from 'react-icons/fa';
import {
  FaArrowRightArrowLeft,
  FaBagShopping,
  FaBug,
  FaCarOn,
  FaCashRegister,
  FaChartLine,
  FaCreditCard,
  FaFileInvoiceDollar,
  FaHandHoldingDollar,
  FaMoneyBill,
  FaMoneyBillTransfer,
  FaMoneyBillTrendUp,
  FaMoneyCheckDollar,
  FaToggleOff,
  FaToggleOn,
} from 'react-icons/fa6';
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
      { name: 'Transações', icon: FaArrowRightArrowLeft, href: '/' },
      {
        name: 'Pagamentos',
        icon: FaMoneyBill,
        navbarItems: [
          { name: 'Últimos Pagamentos', icon: FaMoneyBillTransfer, href: '/' },
          {
            name: 'Relatório de Pagamentos',
            icon: FaMoneyBillTrendUp,
            href: '/',
          },
        ],
      },
      { name: 'Relatório de Falhas', icon: FaBug, href: '/' },
      {
        name: 'Funcionalidades',
        icon: FaCogs,
        navbarItems: [
          {
            name: 'Desligar Funcionalidade',
            icon: FaToggleOff,
            href: '/',
          },
          { name: 'Ativar Funcionalidade', icon: FaToggleOn, href: '/' },
          {
            name: 'Status de Funcionalidades',
            icon: FaChartLine,
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
        icon: FaHandHoldingDollar,
        href: '/',
      },
      { name: 'Minhas Compras', icon: FaCarOn, href: '/' },
      { name: 'Minhas Vendas', icon: FaFileInvoiceDollar, href: '/' },
    ],
  },
  {
    name: 'Pagamentos',
    navbarItems: [
      {
        name: 'Meus Pagamentos',
        icon: FaMoneyCheckDollar,
        href: '/',
      },
      { name: 'Realizar Pagamento', icon: FaCreditCard, href: '/' },
    ],
  },
];
