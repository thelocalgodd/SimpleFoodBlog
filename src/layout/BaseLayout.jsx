/* eslint-disable react/prop-types */
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./BaseLayout.css";

function BaseLayout({ children }) {
  return (
    <main>
      <Header />
      <div className="main-body">{children}</div>
      <Footer />
    </main>
  );
}

export default BaseLayout;
