import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Home } from '@/pages/Home';
import { NotFound } from '@/pages/NotFound';
import { GlobalProvider } from '@/providers';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const AppRoutes = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </GlobalProvider>
  );
};
