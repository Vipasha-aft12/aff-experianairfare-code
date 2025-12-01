import React from 'react'
import Link from "next/link";
import Image from "next/image";
import './Header.css';

const Header = () => {
  return (
   <section className="header">
        <section className="header-top">
            <div className="container header-top-container">
                <div className="row header-top-row">
                    <div className="col-12 header-top-col btwn fd-row">
                        <Image 
                            src="/images/header/logo.webp" 
                            className='img-fluid header-logo'  
                            width={280}
                            height={160}  
                            alt="logo" />
                        <div className='ht-components start fd-row'>
                            <div className='ht-component-box cent fd-row'>
                                <Image 
                                    src="/images/header/support.webp"
                                    className='img-fluid support'   
                                    width={25}
                                    height={25}  
                                    alt="support" />
                                <Link href='/customersupport'>Customer Service</Link>
                            </div>
                            <div className='ht-component-box cent fd-row'>
                                <Image 
                                    src="/images/header/call.webp" 
                                    className='img-fluid call'  
                                    width={25}
                                    height={25}  
                                    alt="call" />
                                <a href="tel:+1-000-000-0000">Book Now</a>
                            </div>
                        </div>
                        <div className='header-mobile-call cent fd-row'>
                            <Image 
                                src="/images/header/mobile-call.webp" 
                                className='img-fluid mobile-call'  
                                width={28}
                                height={28}  
                                alt="mobile call" />
                            <div className='header-mob-call-content cent fd-col'>
                                <p>Call Now</p>
                                <a href='tel:+1-000-000-0000'>
                                    +1-000-000-0000
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className='header-bottom'>
            <div className='container header-bottom-container'>
                <div className='row header-bottom-row'>
                    <div className='col-12 header-bottom-col cent fd-row'>
                        <Link href='#'>Flights</Link>
                        <Link href='#'>Packages</Link>
                        <Link href='#'>Hotels</Link>
                        <Link href='#'>Car Rental</Link>
                        <Link href='#'>Deals</Link>
                        <Link href='/destinationlisting'>Destinations</Link>
                        <Link href='#'>Blog</Link>
                    </div>
                </div>
            </div>
        </section>
    </section>
  )
}

export default Header
