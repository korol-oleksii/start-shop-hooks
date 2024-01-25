import Header from "./Header/Header";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import './App.css';
import {Route, Routes} from "react-router-dom";
import Products from "./Products/Products";
import Delivery from "./Delivery/Delivery";
import About from "./About/About";
import Contacts from "./Contacts/Contacts";

const App = (props) => {
    return (
        <div className="App">
            <Header dataHeader={props.data.header}/>
            <main className="main">
                <div className="main__container">
                    <Routes>
                        <Route path='start-shop-hooks/' element={<Home dataProducts={props.data.products}/>}/>
                        <Route path='start-shop-hooks/products' element={<Products dataProducts={props.data.products}/>}/>
                        <Route path='start-shop-hooks/delivery' element={<Delivery/>}/>
                        <Route path='start-shop-hooks/about' element={<About/>}/>
                        <Route path='start-shop-hooks/contacts' element={<Contacts/>}/>
                    </Routes>
                </div>
            </main>
            <Footer dataFooter={props.data.footer}/>
        </div>
    );
}

export default App;
