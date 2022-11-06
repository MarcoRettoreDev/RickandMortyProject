import { Header } from "../Components/Header";
import { NavBar } from "../Components/NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="container">
        <Outlet />
      </main>

      <NavBar />
    </>
  );
};

export { Layout };
