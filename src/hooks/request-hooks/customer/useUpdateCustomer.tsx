import {
  updateCustomer,
  Payload
} from '@/services/customer/updateCustomer.service.ts';
import { useMutation } from '@tanstack/react-query';

export const useUpdateCustomer = (userId = '') => {
  return useMutation({
    mutationFn: async (payload: Payload) => {
      return await updateCustomer(userId, payload);
    },
    throwOnError: false
  });
};
