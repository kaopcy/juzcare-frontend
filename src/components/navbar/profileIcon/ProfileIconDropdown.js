// configs
import { dropdownItems, unAuthDropdownItems } from '@/configs/profileIcons.config';
// hooks
import useUser from '@/hooks/useUser';
// components
import Icon from '@/components/Icon';
import Link from '@/components/Link';

function ProfileIconDropdown() {
   const user = useUser();

   return (
      <section className="max-h-[400px] overflow-x-hidden rounded-md  bg-white text-text shadow-lg ring-1 ring-black ring-opacity-5">
         <ul className="flex flex-col items-start overflow-y-auto overflow-x-hidden py-3 px-2">
            {(user ? dropdownItems : unAuthDropdownItems).map((item) =>
               item.href ? (
                  <Link href={item.href} key={item.id} className="">
                     <a className="flex w-full items-center whitespace-nowrap px-2 py-2 hover:bg-primary/10" href="">
                        <Icon className="mr-2 h-5 w-5" icon={item.icon} />
                        <span className="font-normal">{item.label}</span>
                     </a>
                  </Link>
               ) : (
                  <button
                     onClick={item.action}
                     key={item.id}
                     className="flex w-full items-center whitespace-nowrap px-2 py-2 hover:bg-primary/10"
                  >
                     <Icon className="mr-2 h-5 w-5" icon={item.icon} />
                     <span className="font-normal">{item.label}</span>
                  </button>
               ),
            )}
         </ul>
      </section>
   );
}

export default ProfileIconDropdown;
