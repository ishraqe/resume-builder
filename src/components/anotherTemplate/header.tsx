import ThemeContext from "@/themecontext";
import PropTypes from "prop-types";
import React, { useState, useContext } from "react";

const Header = ({ siteTitle }) => {
  const [theme, setTheme] = useContext(ThemeContext);

  const teal = "bg-teal-500";
  const orange = "bg-orange-500";
  const red = "bg-red-500";
  const indigo = "bg-indigo-500";
  const green = "bg-green-500";

  const changeTheme = (e) => {
    const { currentTarget } = e;
    const theme = currentTarget.getAttribute("data-theme");
    setTheme(theme);
  };

  const themeList = ["indigo", "orange", "teal", "red", "green"];

  return (
    <ThemeContext.Consumer>
      {([k]) => {
        return (
          <nav
            className={`flex items-center justify-between flex-wrap bg-${k}-500 p-6 mb-2 b`}
          >
            <div className="text-sm px-4 py-2 leading-none bg-white rounded-full ml-auto">
              {themeList.map((t, k) => (
                <button
                  key={k}
                  data-theme={t}
                  className={`theme-button focus:outline-none bg-${t}-500 ${
                    theme === t ? " is-active" : ""
                  }`}
                  onClick={changeTheme}
                ></button>
              ))}
            </div>
          </nav>
        );
      }}
    </ThemeContext.Consumer>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
