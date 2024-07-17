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

export const createCustomer = async (
  payload: Payload
): Promise<Response | undefined> => {
  try {
    const { data } = await api.post('/customer', payload);
    toast.success('Cliente criado com sucesso');
    queryClient.invalidateQueries({
      queryKey: listCustomers
    });

    return data;
  } catch (error: any) {
    toast.error('Houve um erro na criação do Cliente');
  }
};
