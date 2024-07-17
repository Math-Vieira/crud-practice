import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CustomerModal } from './index';
import { renderHelper } from '@/__test__/render-helper';

describe('CRUD - Tests', () => {
  it('should <CustomerModal />', async () => {
    renderHelper(<CustomerModal title="Customer modal title" />);
    const customerModalTitle = screen.getByText('Customer modal title');

    expect(customerModalTitle).toBeDefined();
  });

  it('should show a error name if no name is provided', async () => {
    renderHelper(<CustomerModal title="Customer modal title" />);
    const confirmButton = screen.getByText('Confirmar');

    userEvent.click(confirmButton);

    const nameErrorMessage = await screen.findByText('Nome inválido');
    expect(nameErrorMessage).toBeDefined();
  });

  it('should show a error email if no email is provided', async () => {
    renderHelper(<CustomerModal title="Customer modal title" />);
    const confirmButton = screen.getByText('Confirmar');

    userEvent.click(confirmButton);

    const emailErrorMessage = await screen.findByText('E-mail inválido');
    expect(emailErrorMessage).toBeDefined();
  });

  it('should show a error message if no city provided', async () => {
    renderHelper(<CustomerModal title="Customer modal title" />);
    const confirmButton = screen.getByText('Confirmar');

    userEvent.click(confirmButton);

    const cityErrorMessage = await screen.findByText('Digite o nome da cidade');
    expect(cityErrorMessage).toBeDefined();
  });

  it('should show a error message if no city is provided', async () => {
    renderHelper(<CustomerModal title="Customer modal title" />);
    const confirmButton = screen.getByText('Confirmar');

    userEvent.click(confirmButton);

    const cityErrorMessage = await screen.findByText('Digite o nome da rua');
    expect(cityErrorMessage).toBeDefined();
  });

  it('should show a error message if no number is provided', async () => {
    renderHelper(<CustomerModal title="Customer modal title" />);
    const confirmButton = screen.getByText('Confirmar');

    userEvent.click(confirmButton);

    const numberErrorMessage = await screen.findByText(
      'Digite um número válido'
    );
    expect(numberErrorMessage).toBeDefined();
  });

  it('should show a error message user types not number characters in number field', async () => {
    renderHelper(
      <CustomerModal
        title="Customer modal title"
        initialValues={{
          name: 'Test',
          email: 'teste@gmail.com',
          city: 'Test City',
          street: 'Test Street',
          number: 'aggfgwqqwccgere',
          id: '1314asas1'
        }}
      />
    );
    const confirmButton = screen.getByText('Confirmar');

    userEvent.click(confirmButton);

    const numberErrorMessage = await screen.findByText(
      'O número deve conter apenas caracteres numéricos'
    );

    expect(numberErrorMessage).toBeDefined();
  });
});
