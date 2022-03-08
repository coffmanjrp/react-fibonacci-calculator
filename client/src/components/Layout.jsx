import { Header } from './';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="flex justify-center container mx-auto py-10 text-center">
        {children}
      </div>
    </div>
  );
};

export default Layout;
