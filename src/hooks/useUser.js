import { useSelector } from 'react-redux'

const useUser = ()=>{
   const user = useSelector(state => state.user)
   return user.user
}

export default useUser