import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({children}) {
  return (
    <>
     <section className="container m-auto">
        <Header />
        <section className="min-h-screen">{children}</section>
        <Footer />
      </section>
     
    </>
  );
}

export default Layout;
