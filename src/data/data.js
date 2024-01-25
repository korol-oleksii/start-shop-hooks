import headerLogo from "../assets/img/logo.png";
import imgCat1 from "../assets/img/technics.jpg";
import imgCatNew1 from '../assets/img/technics-2.jpg';
import imgCat2 from "../assets/img/sports.jpg";
import imgCatNew2 from "../assets/img/sports-2.jpg";
import imgCat3 from "../assets/img/travel-products.jpg";
import imgCatNew3 from "../assets/img/travel-products-2.jpg";
import imgCat4 from "../assets/img/active-travel.jpg";
import imgCatNew4 from "../assets/img/active-travel-2.jpg";
import imgCat5 from "../assets/img/photo-frame.jpg";
import imgCatNew5 from "../assets/img/photo-frame-2.jpg";
import imgCat6 from "../assets/img/technics-photo-camera.jpg";
import imgCatNew6 from '../assets/img/technics-photo-camera-2.jpg';
import imgCat7 from "../assets/img/sports-tennis.jpg";
import imgCatNew7 from '../assets/img/sports-tennis-2.jpg';
import imgCat8 from "../assets/img/travel-products-neck.jpg";
import imgCatNew8 from '../assets/img/travel-products-neck-2.jpg';
import imgCat9 from "../assets/img/asortment-selfie.jpg";
import imgCatNew9 from '../assets/img/asortment-selfie-2.jpg';

let dataPage = {
    header: {
        logo: headerLogo,
        navLinks: [
            {id:1, linkUrl: '/index', linkName: 'Home'},
            {id:2, linkUrl: '/products', linkName: 'Products'},
            {id:3, linkUrl: '/delivery', linkName: 'Delivery'},
            {id:4, linkUrl: '/about', linkName: 'About'},
            {id:5, linkUrl: '/contacts', linkName: 'Contacts'},
        ]
    },
    products: {
        nav: {
            asideLinks: [
                {id:1, linkUrl: '#1', linkName: 'Technics'},
                {id:2, linkUrl: '#2', linkName: 'Sports products'},
                {id:3, linkUrl: '#3', linkName: 'Travel products'},
                {id:4, linkUrl: '#4', linkName: 'Products for active travel'},
                {id:5, linkUrl: '#5', linkName: 'Various assortment'},
            ]
        },
        cards: [
            {
                id: 1,
                img: imgCat1,
                img2: imgCatNew1,
                title: 'GoPro camera 10 Black',
                category: 'Technics',
                desc: 'GoPro camera from categories Technics',
                price: '75.85'
            },
            {
                id: 2,
                img: imgCat2,
                img2: imgCatNew2,
                title: 'Sneakers',
                category: 'Sports products',
                desc: 'Sneakers from categories Sports products',
                price: '89.99'
            },
            {
                id: 3,
                img: imgCat3,
                img2: imgCatNew3,
                title: 'Travel cases',
                category: 'Travel products',
                desc: 'Travel cases from categories Travel products',
                price: '21.15'
            },
            {
                id: 4,
                img: imgCat4,
                img2: imgCatNew4,
                title: 'Skis and snowboards',
                category: 'Products for active travel',
                desc: 'Skis and snowboards from categories Products for active travel',
                price: '120.00'
            },
            {
                id: 5,
                img: imgCat5,
                img2: imgCatNew5,
                title: 'Photo frames',
                category: 'Various assortment',
                desc: 'Photo frames from categories Various assortment',
                price: '5.20'
            },

            {
                id: 6,
                img: imgCat6,
                img2: imgCatNew6,
                title: 'Photo camera Nikon',
                category: 'Technics',
                desc: 'Photo camera Nikon from categories Technics',
                price: '85.00'
            },
            {
                id: 7,
                img: imgCat7,
                img2: imgCatNew7,
                title: 'Tennis rocket',
                category: 'Sports products',
                desc: 'Tennis from categories Sports products',
                price: '55.99'
            },
            {
                id: 8,
                img: imgCat8,
                img2: imgCatNew8,
                title: 'Neck pillow',
                category: 'Travel products',
                desc: 'Neck pillow from categories Travel products',
                price: '9.99'
            },
            {
                id: 9,
                img: imgCat9,
                img2: imgCatNew9,
                title: 'Selfie stick',
                category: 'Various assortment',
                desc: 'Photo frames from categories Various assortment',
                price: '25.00'
            }
        ]
    },
    footer: {
        copy: 'Shop React Hooks'
    }
}

export default dataPage;