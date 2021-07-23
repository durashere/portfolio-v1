import PropTypes from 'prop-types';

import Header from '@/layouts/default/components/Header';
import Footer from '@/layouts/default/components/Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-center bg-cover bg-home sm:bg-home-sm">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
