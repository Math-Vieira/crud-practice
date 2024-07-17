import { http, HttpResponse } from 'msw';

type customer = {
  id: string;
  name: string;
  email: string;
  city: string;
  street: string;
  number: string;
};

let customers: customer[] = [
  {
    id: '1',
    name: 'Cliente de teste',
    email: 'teste@gmail.com',
    city: 'São Paulo',
    street: 'Rua teste',
    number: '123'
  }
];

export const handlers = [
  http.get('/api/customer', () => {
    return HttpResponse.json(customers);
  }),

  // http.put('/api/customer/:id', ({ params, request }) => {
  //   const data: customer = request.formData();
  //   const customerId = params.id;
  //   const customerIndex = customers.findIndex((e) => e.id === customerId);

  //   customers[customerIndex] = data;

  //   return HttpResponse.json({ success: true });
  // }),

  http.delete('/api/customer/:id', ({ params }) => {
    const customerId = params.id;
    customers = customers.filter((e) => e.id !== customerId);

    return HttpResponse.json({ success: true });
  }),

  http.post('/api/customer', async ({ request }) => {
    const data = await request.json();
    customers.unshift({
      ...(data as customer),
      id: Math.random().toString(36)
    });

    return HttpResponse.json({ success: true });
  })
];
