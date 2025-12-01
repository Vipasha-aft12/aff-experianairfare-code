"use client";
import React from 'react'
import Link from "next/link";
import Image from "next/image";
import './popup.css';



const Popup = () => {
    return (
        <section className='popup cent fd-col'>
            <div className='container popup-content'>
                <div className='row popup-content-row'>
                    <div className='col-12 popup-content-col cent fd-col'>
                        <Image
                            src="/images/pop-up/logo.webp"
                            className='img-fluid popup-logo'
                            width={343}
                            height={148}
                            alt="popup logo" />
                        <p><strong>Get Expert Advice and Save 30%</strong></p>
                        <p>Talk to our travel specialists today and unlock exclusive discounts on your next trip.</p>
                        <h4>24/7 Instant Expert Support</h4>
                        <ul className='popup-ul btwn fd-row'>
                            <li>Ticket Booking</li>
                            <li>Customer Support</li>
                            <li>Manage Booking</li>
                            <li>Cancellation Service</li>
                        </ul>
                        <Image
                            src="/images/pop-up/image.webp"
                            className='img-fluid popup-image mb-3'
                            width={494}
                            height={462}
                            alt="popup image" />
                    </div>
                </div>
            </div>

            <div class="sticky-bottom sticky-btm cent fd-row w-100">
                <Image
                    src="/images/sticky-btm/call-icon.webp"
                    className='img-fluid stky-btm'
                    width={43}
                    height={45}
                    alt="sticky bottom image" />
                <div className="sticky-btm-content cent fd-col">
                    <p>Call us anytime at:</p>
                    <a href="tel:+1-000-000-0000">+1-000-000-0000</a>
                </div>
            </div>
        </section>
    )
}

export default Popup