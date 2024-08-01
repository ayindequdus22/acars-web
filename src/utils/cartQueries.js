
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';


export const useGetCartHook = () => {
  return useQuery({
    queryKey: ['getCart'],
    queryFn: async () => {
      const response = await Axios.get(`/${API_URL}/items`);
      return response.data;
    }
  });
}
export const UseAddToCartFunction = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["addToCart"],
    mutationFn: async ({ productId, quantity }) => {
      const response = await Axios.post(`/${API_URL}/add`, { productId, quantity });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries("cart");
    }
  })
}
export const useUpdateItemQtyQuery = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["updateCart"],
    mutationFn: async ({ productId, update }) => {
      const response = await Axios.post(`/${API_URL}/update`, { productId, update });
      return response.data;
    }, onSuccess: () => {
      queryClient.invalidateQueries("cart");
    }
  })
}
export const useCreateCart = () => {
  return useQuery({
    queryKey: ['createCart'],
    queryFn: async () => {
      const response = await Axios.get(`/${API_URL}/`);
      return response;
    }
  });
}
export const UseRemoveItemCartFunction = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["removeItem"],
    mutationFn: async ({ productId }) => {
      const response = await Axios.post(`/${API_URL}/remove`, { productId });
      return response.data;
    }, onSuccess: () => {
      queryClient.invalidateQueries("cart");
    }
  })
}
const Cleared = () => {
  return <p>Cart has been clear</p>
}
export const useClearCart = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["removeItem"],
    mutationFn: async () => {
      const response = await Axios.post(`/${API_URL}/clear`);
      return response.data;
    }, onSuccess: () => {
      queryClient.invalidateQueries("cart");
      toast(<Cleared />, { containerId: 'A' })
    }
  })
}
