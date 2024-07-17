import { http, HttpResponse } from 'msw';

type customer = {
  id: string;
  name: string;
  email: string;
  city: string;
  street: string;
  number: string;
};

const customers: customer[] = [];

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

  // http.delete('/api/customer/:id', ({ params }) => {
  //   const customerId = params.id;
  //   customers = customers.filter((e) => e.id !== customerId);

  //   return HttpResponse.json({ success: true });
  // }),

  http.post('/api/customer', ({ request }) => {
    const data = request.formData();
    console.log('vinicin brabo');
    console.log(data);

    return HttpResponse.json({ success: true });
  })
];
