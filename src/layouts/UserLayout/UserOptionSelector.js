import Icon from '@/components/Icon';
import Link from '@/components/Link';
import UserProfileIcon from '@/components/UserProfileIcon';
import { optionRoutes } from '@/configs/userOption.config';
import useUser from '@/hooks/useUser';
// stores
import { signOut, updateAvatarSuccess } from '@/redux/slices/user';
import { useDispatch } from '@/redux/store';
// utils
import { classname } from '@/utils/getClassName';
import { useMutation } from '@apollo/client';
import { UpdateUserAvatarGQL } from '@/graphql/user.gql';
import { useSelector } from '@/redux/admin/store';
import Loader from '@/svg/Loader';

function UserOptionSelector() {
   const dispatch = useDispatch();

   const [updateAvatar, { loading }] = useMutation(UpdateUserAvatarGQL);

   const randomAvatar = async () => {
      if (loading) return;
      const { data } = await updateAvatar();
      dispatch(updateAvatarSuccess({ avatar: data.updateAvatarUser.avatar }));
   };

   const { user } = useUser();
   return (
      <div className="flex  h-[80vh] w-[350px] flex-col items-center rounded-lg border px-12 py-12 shadow-md">
         <div className="relative">
            <UserProfileIcon className="h-36 w-36" />
            <button onClick={randomAvatar} className="absolute right-0 bottom-1">
               <Icon
                  className="h-8 w-8 transition-transform hover:scale-110 "
                  icon="material-symbols:change-circle-rounded"
               />
            </button>
            {loading && (
               <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/40">
                  <Loader className="absolute z-20 h-10 w-10 " />
               </div>
            )}
         </div>
         <h3 className="mt-2 mb-10">{user?.username}</h3>
         {optionRoutes.map((option) => (
            <Link key={option.id} href={option.href}>
               {({ isMatch }) => (
                  <a className="mb-3 flex w-full items-end gap-x-3 focus:outline-none">
                     <Icon className={classname('mb-0.5 h-6 w-6', isMatch && 'text-primary')} icon={option.icon} />
                     <h4 className={classname('font-medium', isMatch && 'text-primary')}>{option.title}</h4>
                  </a>
               )}
            </Link>
         ))}
         <button onClick={() => dispatch(signOut())} className="mb-3 mt-auto flex w-full items-center gap-x-3">
            <Icon className="h-6 w-6 text-error" icon="clarity:sign-out-solid" />
            <h4 className="font-medium text-error">ออกจากระบบ</h4>
         </button>
      </div>
   );
}

export default UserOptionSelector;
