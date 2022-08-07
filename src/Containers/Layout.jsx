import { Header } from '../Components/Header';
import { NavBar } from '../Components/NavBar';
import { Footer } from '../Components/Footer';

import { Outlet } from 'react-router-dom';

const Layout = () =>{

  return (
    <>
        <Header/>
        <main className='container'>
          <Outlet/>
        </main>

        <NavBar/>

        <Footer/>
    </>
  )
}

export { Layout };