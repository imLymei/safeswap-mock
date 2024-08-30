import { ICON_SIZE, NavbarFolder, NavbarItem } from '@/lib/constants';
import Link from 'next/link';

export default function MobileSidebarItem({
  name,
  href,
  icon: Icon,
}: NavbarItem) {
  return (
    <Link href={href} className='flex flex-col items-center gap-2 text-center'>
      <Icon size={ICON_SIZE.LARGE} />
      <p>{name}</p>
    </Link>
  );
}
