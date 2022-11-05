import Link from '@/components/Link';
// configs
import { floatingToolbarConfig } from '@/configs/floatingToolbar.config';
// icons
import Icon from '@/components/Icon'
// icon bundles


function FloatingToolbar() {
   return (
      <aside className="fixed hidden md:block  shadow-lg top-1/2 left-10 z-navbar -translate-y-1/2 rounded-full bg-paper px-2 py-4 text-text">
         <div className="flex flex-col items-center gap-5">
            {floatingToolbarConfig.map((floating) => (
               <Link key={floating.id} href={floating.href}>
                  {({ isMatch }) => (
                     <a className={`rounded-full p-2 ${isMatch && 'bg-primary/10'}`}>
                        <Icon  className="h-7 w-7" icon={floating.icon} />
                     </a>
                  )}
               </Link>
            ))}
         </div>
      </aside>
   );
}

export default FloatingToolbar;
