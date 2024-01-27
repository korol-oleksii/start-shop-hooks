import Header from "./Header/Header";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import './App.css';
import {createBrowserRouter, Route, RouterProvider, Routes} from "react-router-dom";
import Products from "./Products/Products";
import Delivery from "./Delivery/Delivery";
import About from "./About/About";
import Contacts from "./Contacts/Contacts";
import BestSellers from "./BestSellers/BestSellers";
import ProductInfo from "./ProductInfo/ProductInfo";

/*const router = createBrowserRouter([
    {
        path: '/',
        element: <Home dataProducts={props.data.products}/>,
    },
    {
        path: '/products',
        element: <Products dataProducts={props.data.products}/>,
    },
    {
        path: '/bestsellers',
        element: <BestSellers/>,
    },
    {
        path: '/delivery',
        element: <Delivery/>,
    },
    {
        path: '/about',
        element: <About/>,
    },
    {
        path: '/contacts',
        element: <Contacts/>,
    }
]);*/

const App = (props) => {
    return (
        <div className="App">
            <Header dataHeader={props.data.header}/>
            <main className="main">
                <div className="main__container">
                    <Routes>
                        <Route path='/' element={<Home dataProducts={props.data.products}/>}/>
                        <Route path='/products' element={<Products dataProducts={props.data.products}/>}/>
                        <Route path='/bestsellers' element={<BestSellers/>}/>
                        <Route path='/product-info/:productId' element={<ProductInfo/>}/>
                        <Route path='/delivery' element={<Delivery/>}/>
                        <Route path='/about' element={<About/>}/>
                        <Route path='/contacts' element={<Contacts/>}/>
                    </Routes>

                    {/*<RouterProvider router={router}/>*/}
                </div>
            </main>
            <Footer dataFooter={props.data.footer}/>
        </div>
    );
}

export default App;
