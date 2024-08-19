
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { Axios } from './axios';
const API_URL = "cart"
export const useGetCartHook = () => {
  return useQuery({
    queryKey: ['getCart'],
    queryFn: async () => {
      const response = await Axios.get(`/${API_URL}/items`);
      return response.data;
    },
    onError: (error) => {
      toast.error(`Failed to fetch cart: ${error.message}`, { containerId: 'A' });
    }
  });
}

export const useAddToCartFunction = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["addToCart"],
    mutationFn: async ({ productId, quantity }) => {
      const response = await Axios.post(`/${API_URL}/add`, { productId, quantity });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries("getCart");
    },
    onError: (error) => {
      toast.error(`Failed to add item to cart: ${error.message}`, { containerId: 'A' });
    }
  });
}

export const useUpdateItemQtyQuery = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["updateCart"],
    mutationFn: async ({ productId, update }) => {
      const response = await Axios.post(`/${API_URL}/update`, { productId, update });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries("getCart");
    },
    onError: (error) => {
      toast.error(`Failed to update item quantity: ${error.message}`, { containerId: 'A' });
    }
  });
}

export const useCreateCart = () => {
  return useQuery({
    queryKey: ['createCart'],
    queryFn: async () => {
      const response = await Axios.get(`/${API_URL}/`);
      return response.data;
    },
    onError: (error) => {
      toast.error(`Failed to create cart: ${error.message}`, { containerId: 'A' });
    }
  });
}

export const useRemoveItemCartFunction = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["removeItem"],
    mutationFn: async ({ productId }) => {
      const response = await Axios.post(`/${API_URL}/remove`, { productId });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries("getCart");
    },
    onError: (error) => {
      toast.error(`Failed to remove item from cart: ${error.message}`, { containerId: 'A' });
    }
  });
}

const Cleared = () => {
  return <p>Cart has been cleared</p>;
}

export const useClearCart = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["clearCart"],
    mutationFn: async () => {
      const response = await Axios.post(`/${API_URL}/clear`);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries("getCart");
      toast(<Cleared />, { containerId: 'A' });
    },
    onError: (error) => {
      toast.error(`Failed to clear cart: ${error.message}`, { containerId: 'A' });
    }
  });
}