import { createContext } from 'react';
import { Axios } from './axios'; 
import { useQuery } from '@tanstack/react-query';

  const UserContentProvider =  ({children}) => {
    const { data, isLoading, error, } = useQuery({
    queryKey: ['authUser'],
    queryFn: async () => {
      try {
        const response = await Axios.get('/auth/myprofile');
        return response.data?.user; 
      } catch (error) {
        // console.error('Error fetching user data:');
      }
    },
    retry: false,
  });
  return (
<userContext.Provider value={{data,isLoading,error }}>
    {children}
</userContext.Provider>
  )
}
export const userContext = createContext();
export default UserContentProvider;