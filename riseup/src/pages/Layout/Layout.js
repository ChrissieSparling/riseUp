import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import {Outlet} from 'react-router-dom'

const Layout = () => {



    return (
        <div className='app'>
            <Header/>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Layout;