"use client";
import Image from "next/image";
import { useEffect } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; 
import * as bootstrap from "bootstrap"; 
import './AutoModal.css';

export default function AutoModal() {
    useEffect(() => {
        const element = document.getElementById("autoModal");

        if (element) {
            const modal = new bootstrap.Modal(element); 
            modal.show();
        }
    }, []);

    return (
        <div
            className="modal fade"
            id="autoModal"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="autoModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">

                    <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div className="modal-body popup-content-col cent fd-col">
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

                    <div className="modal-footer w-100 cent">
                        <div className="mfo-call w-100 cent fd-row">
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
                    </div>

                </div>
            </div>
        </div>
    );
}
