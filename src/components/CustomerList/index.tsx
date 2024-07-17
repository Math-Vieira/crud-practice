import { useGetCustomers } from '@/hooks/request-hooks/customer/useGetCustomers';
import { CustomerListItem } from '../CustomerListItem';
import * as S from './styles';

export const CustomerList = () => {
  const { data } = useGetCustomers();

  return (
    <S.Wrapper>
      {data &&
        data.map((customer) => {
          return (
            <CustomerListItem
              key={customer.id}
              name={customer.name}
              id={customer.id}
            />
          );
        })}
    </S.Wrapper>
  );
};
