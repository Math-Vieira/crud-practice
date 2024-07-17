import { deleteCustomer } from '@/services/customer/deleteCustomer.service.ts';
import { useMutation } from '@tanstack/react-query';

export const useDeleteCustomer = () => {
  return useMutation({
    mutationFn: async (customerId: string) => {
      return await deleteCustomer(customerId);
    },
    throwOnError: false
  });
};
