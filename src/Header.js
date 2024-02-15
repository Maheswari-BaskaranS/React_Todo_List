import React from "react";

function Header({title}) { //here instead of title we can give props and can use props.title only title we need so we use destructing method using js
/*   const headerStyle = {
    backgroundColor: "blue",
    color: "white",
  }; */
  return (
   // <header style={headerStyle}>
   <header>
      <h1>{title}</h1>
    </header>
  );
}
Header.defaultProps = {
  title: "To do List"//if the props did'nt passby from app.js this default value will be displayed
}

export default Header;
