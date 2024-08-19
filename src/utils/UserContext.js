import { createContext } from 'react';
import { Axios } from './axios';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';

const UserContentProvider = ({ children }) => {
  const { data, isLoading, error, } = useQuery({
    queryKey: ['authUser'],
    queryFn: async () => {
      const response = await Axios.get('/auth/myprofile');
      return response.data?.user;
    },
    retry: false,  
    onError: (error) => {
      toast.error(`Failed to fetch user profile: ${error.message}`);
    },
  });
  return (
    <userContext.Provider value={{ data, isLoading, error }}>
      {children}
    </userContext.Provider>
  )
}
export const userContext = createContext();
export default UserContentProvider;