import { NavbarSection } from '@/lib/constants';
import SideBarItem from './SideBarItem';
import SideBarFolder from './SideBarFolder';

export default function SideBarSection({ name, navbarItems }: NavbarSection) {
  return (
    <div className='flex w-full flex-col gap-4 text-sm'>
      <p className='text-base font-bold'>{name}</p>
      {navbarItems.map((item, itemIndex) => {
        const key = `section-${name}-item-${item.name}-${itemIndex}`;

        if (item.href)
          return (
            <SideBarItem
              name={item.name}
              icon={item.icon}
              href={item.href}
              key={key}
            />
          );

        return (
          <SideBarFolder
            key={key}
            name={item.name}
            icon={item.icon}
            navbarItems={item.navbarItems!}
          />
        );
      })}
    </div>
  );
}
