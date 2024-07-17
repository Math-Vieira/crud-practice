import {
  createCustomer,
  Payload
} from '@/services/customer/createCustomer.service.ts';
import { useMutation } from '@tanstack/react-query';

export const useCreateCustomer = () => {
  return useMutation({
    mutationFn: async (payload: Payload) => {
      return await createCustomer(payload);
    },
    throwOnError: false
  });
};
