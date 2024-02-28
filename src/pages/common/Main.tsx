import React, { PropsWithChildren, memo } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Main = memo(function Main(props: PropsWithChildren) {
  return (
    <>
      <Header />
      <div className="wrapper">{props.children}</div>
      <Footer />
    </>
  );
});

export default Main;
