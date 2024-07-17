import { getCustomers } from '@/services/customer/getCustomers.service.ts';
import { useQuery } from '@tanstack/react-query';

export const queryKey = ['getCustomers'];

export const useGetCustomers = () => {
  return useQuery({
    queryKey,
    queryFn: async () => {
      return await getCustomers();
    }
  });
};
