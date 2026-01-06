import { Header } from './Header';
import { Footer } from './Footer';
import { Outlet, useNavigation } from 'react-router';

export const AppLayout = () => {
  const navigationStatus = useNavigation();
  const isLoading = navigationStatus.state === 'loading';
  return (
    <>
      <Header />
      {isLoading && <div>Loading...</div>}
      <Outlet />
      <Footer />
    </>
  );
};
