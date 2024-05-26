
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchCartQuery, addItemToCartQuery, removeItemFromCartQuery, updateItemQuantityQuery, clearCartQuery, createCartQuery } from './cart.fn';
import { toast } from 'react-toastify';


export const useGetCartHook = () => {
  return useQuery({
    queryKey: ['getCart'],
    queryFn: fetchCartQuery
  });
}
export const UseAddToCartFunction = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["addToCart"],
    mutationFn: ({ productId, quantity }) => {
      return addItemToCartQuery({ productId, quantity })
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
    mutationFn: ({ productId, update }) => {
      return updateItemQuantityQuery({ productId, update })
    }, onSuccess: () => {
      queryClient.invalidateQueries("cart");
    }
  })
}
export const useCreateCart = () => {
  return useQuery({
    queryKey: ['createCart'],
    queryFn: createCartQuery
  });
}
export const UseRemoveItemCartFunction = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["removeItem"],
    mutationFn: (productId) => {
      return removeItemFromCartQuery({ productId })
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
    mutationFn: () => {
      return clearCartQuery()
    }, onSuccess: () => {
      queryClient.invalidateQueries("cart");
      toast(<Cleared />, { containerId: 'A' })
    }
  })
}
