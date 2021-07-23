import PropTypes from 'prop-types';

import '@/app/tailwind.css';
import Layout from '@/layouts/default';
import { SectionRefsProvider } from '@/layouts/default/contexts/SectionRefsContext';

function CustomApp({ Component, pageProps }) {
  return (
    <SectionRefsProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SectionRefsProvider>
  );
}

CustomApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.objectOf(PropTypes.any),
};

CustomApp.defaultProps = {
  pageProps: {},
};

export default CustomApp;
