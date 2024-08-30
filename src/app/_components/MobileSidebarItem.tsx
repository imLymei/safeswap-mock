import { ICON_SIZE, NavbarFolder, NavbarItem } from '@/lib/constants';
import Link from 'next/link';

export default function MobileSidebarItem({
  name,
  href,
  icon: Icon,
}: NavbarItem) {
  return (
    <Link
      href={href}
      className='flex aspect-square flex-col items-center justify-between gap-2 rounded p-4 text-center active:bg-blue-500/20'
    >
      <Icon size={ICON_SIZE.MOBILE} />
      <p className='line-clamp-2'>{name}</p>
    </Link>
  );
}
