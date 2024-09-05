import { ICON_SIZE, NavbarItem } from '@/lib/constants';
import Link from 'next/link';

export default function SideBarItem({ name, icon: Icon, href }: NavbarItem) {
  return (
    <Link
      href={href}
      key={`section-item-${name}}`}
      className='flex items-center gap-2 rounded p-2 hover:bg-blue-500'
      title={name}
    >
      <Icon size={ICON_SIZE.SMALL} />
      <p className='line-clamp-1 flex-1'>{name}</p>
    </Link>
  );
}
