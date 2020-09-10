import React from 'react'
import '../Style/Home.css';
import Product from './Product';


function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img className='home__image' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt='' />
                <div className='home__row'>
                    <Product id='1' title='iPad Pro 11 2020 WI-FI 4G 128GB' price={899.00} rating={4} image='https://fptshop.com.vn/Uploads/Originals/2020/3/24/637206590000435844_ipad-pro-11-wf-4g-xam-1.png' />
                    <Product id='2' title='Iphone 11Pro Max 128GB' price={999.00} rating={5} image='https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/1228092004.jpeg' />
                </div>
                <div className='home__row'>
                    <Product id='3' title='Samsung Galaxy Note 20 Ultra 5G 256GB' price={799.00} rating={3} image='https://images.samsung.com/in/smartphones/galaxy-note20/buy/005-galaxynote20-mysticbronze-mo-720.jpg' />
                    <Product id='4' title='Airpods pro with wireless charging case' price={365.00} rating={4} image='https://product.hstatic.net/1000026716/product/airpods-pro-matte_white_color_a6f3150ab0a04ec39fb47011f6be6207.jpg' />
                    <Product id='5' title='Apple Watch Series 5 GPS 40mm' price={590.00} rating={3} image='https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/hong.jpg' />
                </div>
                <div className='home__row'>
                    <Product id='6' title='Macbook 16-inch 512GB Storage' price={2300.00} rating={5} image='https://images.fpt.shop/unsafe/fit-in/840x472/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2019/11/19/637097817871944153_macbook-pro-16-1.JPG' />
                </div>
            </div>
        </div>
    )
}

export default Home
