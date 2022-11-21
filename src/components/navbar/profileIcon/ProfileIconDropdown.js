// configs
import { dropdownItems, unAuthDropdownItems } from '@/configs/profileIcons.config';
// hooks
import useUser from '@/hooks/useUser';
// components
import Icon from '@/components/Icon';
import Link from '@/components/Link';

function ProfileIconDropdown() {
   const { isAuthenticated } = useUser();

   return (
      <section className="max-h-[400px] overflow-x-hidden rounded-md  bg-white text-text shadow-lg ring-1 ring-black ring-opacity-5">
         <ul className="flex min-w-[200px] flex-col items-start gap-1 overflow-y-auto overflow-x-hidden py-3 px-2">
            {(isAuthenticated ? dropdownItems : unAuthDropdownItems).map((item) =>
               item.href ? (
                  <Link href={item.href} key={item.id} className="">
                     <a className="flex items-center w-full px-2 py-2 whitespace-nowrap hover:bg-primary/10" href="">
                        <Icon className="w-5 h-5 mr-2" icon={item.icon} />
                        <span className="font-normal">{item.label}</span>
                     </a>
                  </Link>
               ) : (
                  <button
                     onClick={item.action}
                     key={item.id}
                     className="flex items-center w-full px-2 py-2 whitespace-nowrap hover:bg-primary/10"
                  >
                     <Icon className="w-5 h-5 mr-2" icon={item.icon} />
                     <span className="font-normal">{item.label}</span>
                  </button>
               ),
            )}
         </ul>
      </section>
   );
}

export default ProfileIconDropdown;
