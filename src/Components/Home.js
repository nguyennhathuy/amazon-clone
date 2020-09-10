import React from 'react'
import '../Style/Home.css';
import Product from './Product';


function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img className='home__image' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt=''/>
                <div className='home__row'>
                    <Product id='1' title='Hello' price='399.00' rating={5} image='https://product.hstatic.net/1000340570/product/creed-aventus-100ml_b6ecd86717b548ac9157ccc7c00e2aa6_master.jpg' />
                    <Product id='2' title='Hello' price='399.00' rating={5} image='https://product.hstatic.net/1000340570/product/creed-aventus-100ml_b6ecd86717b548ac9157ccc7c00e2aa6_master.jpg' />

                </div>
                <div className='home__row'>
                    <Product id='3' title='Hello' price='399.00' rating={5} image='https://product.hstatic.net/1000340570/product/creed-aventus-100ml_b6ecd86717b548ac9157ccc7c00e2aa6_master.jpg' />

                    <Product id='4' title='Hello' price='399.00' rating={5} image='https://product.hstatic.net/1000340570/product/creed-aventus-100ml_b6ecd86717b548ac9157ccc7c00e2aa6_master.jpg' />

                    <Product id='5' title='Hello' price='399.00' rating={5} image='https://product.hstatic.net/1000340570/product/creed-aventus-100ml_b6ecd86717b548ac9157ccc7c00e2aa6_master.jpg' />

                </div>
                <div className='home__row'>
                    <Product id='6' title='Hello' price='399.00' rating={5} image='https://product.hstatic.net/1000340570/product/creed-aventus-100ml_b6ecd86717b548ac9157ccc7c00e2aa6_master.jpg' />

                </div>
            </div>
        </div>
    )
}

export default Home
