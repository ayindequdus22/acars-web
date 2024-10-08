
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { Axios } from './axios';
import { ToastME } from '../components/product/Product';
const API_URL = "cart"
export const useGetCartHook = () => {
  return useQuery({
    queryKey: ['getCart'],
    queryFn: async () => {
      const response = await Axios.get(`/${API_URL}/items`);
      return response.data;
    },
    onError: (error) => {
      toast.error(<p>Failed to fetch cart: </p>,);
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
      toast.error(<p>Failed to add item to cart: </p>,);
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
      toast.error(<p>Failed to update item quantity: </p>,);
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
      toast.error(<p>Failed to create cart: </p>,);
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
      toast.error(<p>Failed to remove item from cart: </p>,);
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
      toast(<Cleared />,);
    },
    onError: (error) => {
      toast.error(<p>Failed to clear cart: </p>,);
    }
  });
}