import { useGetCustomers } from '@/hooks/request-hooks/customer/useGetCustomers';
import { CustomerListItem } from '../CustomerListItem';
import * as S from './styles';
import { NoData } from '../NoData';

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

      {data && !data.length && <NoData />}
      {data && !data.length && (
        <S.NotFoundText>Nenhum cliente encontrado</S.NotFoundText>
      )}
    </S.Wrapper>
  );
};
