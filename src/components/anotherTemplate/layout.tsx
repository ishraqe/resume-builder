import PropTypes from "prop-types";

import "./layout.css";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`
        }}
      >
        <main>{children}</main>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
