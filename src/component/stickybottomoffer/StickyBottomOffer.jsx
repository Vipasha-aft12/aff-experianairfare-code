'use client';
import Image from "next/image";
import React, { useState, useRef, useEffect } from 'react';


export default function StickyBottomOffer() {
    const [visible, setVisible] = useState(true);

    if (!visible) return null;

    return (
        <section className='sticky-bottom-offer'>
            <div className='container sticky-bottom-offer-container pe-0'>
                <div className='row sticky-bottom-offer-row w-100'>
                    <div className='col-12 sticky-bottom-offer-col pe-0'>
                        <div className="sticky-bottom-offer-box btwn fd-row">
                            <div className="banner-content start fd-col">
                                <div className='banner-content-top start fd-col'>
                                    <div className='banner-content-top-heading start fd-row'>
                                        <Image
                                            src='/images/offer-bottom/flight.webp'
                                            className='img-fluid'
                                            width={80}
                                            height={80}
                                            alt="sticky bottom offer" />
                                        <p><strong>Grab the Best Deal</strong></p>
                                    </div>
                                    <p>Book now to enjoy savings of up to<span> $100 </span> on your travel booking.</p>
                                </div>
                                <div className='banner-content-bottom start fd-row'>
                                    <a href="tel:+1-000-000-0000" className='banner-content-bottom-one cent fd-row'>
                                        <Image
                                            src='/images/offer-bottom/call-now.webp'
                                            className='img-fluid'
                                            width={80}
                                            height={80}
                                            alt="sticky bottom call" />
                                        Call Now: +1-000-000-0000
                                    </a>
                                    <button className='btn banner-content-bottom-two'>Apply Code</button>
                                </div>

                            </div>
                            <button
                                className="close-btn"
                                onClick={() => setVisible(false)}
                                aria-label="Close banner"
                            >
                                ✕
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
