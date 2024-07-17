import { queryClient } from '@/providers/query-client';
import toast from 'react-hot-toast';
import { api } from '../';
import { queryKey as listCustomers } from '@/hooks/request-hooks/customer/useGetCustomers';
export type Response = {
  success: boolean;
};

export const deleteCustomer = async (
  customerId: string
): Promise<Response | undefined> => {
  try {
    const { data } = await api.delete(`/customer/${customerId}`);
    toast.success('Cliente deletado com sucesso');
    queryClient.invalidateQueries({
      queryKey: listCustomers
    });

    return data;
  } catch (error: any) {
    toast.error('Houve um erro na deleção do Cliente');
  }
};
