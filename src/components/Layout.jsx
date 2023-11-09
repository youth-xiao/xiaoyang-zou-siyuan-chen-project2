import Navbar from './NavBar';
import '../style/Layout.css'; // Create this CSS file for any layout specific styles
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
    return (
      <>
        <Navbar />
        <div className="content">{children}</div>
      </>
    );
  };

Layout.propTypes = {
    children: PropTypes.node.isRequired, // `node` covers anything that can be rendered: numbers, strings, elements or an array containing these types
  };

export default Layout;
