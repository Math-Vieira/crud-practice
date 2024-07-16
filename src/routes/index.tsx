import { Home } from '@/pages/Home';
import { NotFound } from '@/pages/NotFound';
import { GlobalProvider } from '@/providers';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const AppRoutes = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
};
