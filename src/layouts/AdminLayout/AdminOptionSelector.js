import Link from '@/components/Link';
import { optionRoutes } from '@/configs/adminOption.config';
import useUser from '@/hooks/useUser';
// stores
import { useDispatch } from '@/redux/store';
// utils
import { classname } from '@/utils/getClassName';

function AdminOptionSelector() {
   const dispatch = useDispatch();
   const { user } = useUser();
   return (
      <nav className="flex w-full items-end gap-x-4 border-b-2 ">
         {optionRoutes.map((option) => (
            <Link key={option.id} href={option.href}>
               {({ isMatch }) => (
                  <a
                     className={classname(
                        'mb-2 flex items-end gap-x-3 px-4 focus:outline-none',
                        isMatch && 'text-primary underline',
                     )}
                  >
                     <h4 className={classname('font-medium', isMatch && 'text-primary')}>{option.title}</h4>
                  </a>
               )}
            </Link>
         ))}
      </nav>

      // <div className="flex  h-[80vh] w-[350px] flex-col items-center rounded-lg border px-12 py-12 shadow-md">
      //    <div className="relative">
      //       <UserProfileIcon className="h-36 w-36" />
      //       <button className="absolute right-0 bottom-1  ">
      //          <Icon className="h-8 w-8 " icon="material-symbols:change-circle-rounded" />
      //       </button>
      //    </div>
      //    <h3 className="mt-2 mb-10">{user?.username}</h3>
      //    <button onClick={()=> dispatch(signOut())} className="mb-3 mt-auto flex w-full items-center gap-x-3">
      //       <Icon className="h-6 w-6 text-error" icon="clarity:sign-out-solid" />
      //       <h4 className="font-medium text-error">ออกจากระบบ</h4>
      //    </button>
      // </div>
   );
}

export default AdminOptionSelector;
