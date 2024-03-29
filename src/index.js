import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App';
import dataPage from "./data/data";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter basename="/start-shop-hooks">
        <App data={dataPage} />
    </BrowserRouter>
);