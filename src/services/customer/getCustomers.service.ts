// import { queryClient } from '@/providers/query-client';
import toast from 'react-hot-toast';
import { api } from '../';

type customer = {
  id: string;
  name: string;
  email: string;
  city: string;
  street: string;
  number: string;
};

type Response = customer[];

export const getCustomers = async (
  path?: string
): Promise<Response | undefined> => {
  try {
    const { data } = await api.get(`/customer${path ? '/' + path : ''}`);
    toast.success('Clientes listados com sucesso');

    return data;
  } catch (error: any) {
    toast.error('Houve um erro na busca de Clientes');
  }
};
