import { queryClient } from '@/providers/query-client';
import toast from 'react-hot-toast';
import { api } from '../';
import { queryKey as listCustomers } from '@/hooks/request-hooks/customer/useGetCustomers';

export type Payload = {
  name: string;
  email: string;
  city: string;
  street: string;
  number: string;
};

export type Response = {
  success: boolean;
};

export const updateCustomer = async (
  userId: string,
  payload: Payload
): Promise<Response | undefined> => {
  try {
    const { data } = await api.put(`/customer/${userId}`, payload);
    toast.success('Cliente atualizado com sucesso');
    queryClient.invalidateQueries({
      queryKey: listCustomers
    });

    return data;
  } catch (error: any) {
    toast.error('Erro ao atualizar cliente');
  }
};
