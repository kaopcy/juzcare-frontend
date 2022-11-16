import { useSelector } from 'react-redux';

const useUser = () => {
   const user = useSelector((state) => state.user);
   return {
      user: user.user,
      isAuthenticated: !!user?.user?._id && user.isAuthenticated,
      isInitialized: user.isInitialized
   };
};

export default useUser;
