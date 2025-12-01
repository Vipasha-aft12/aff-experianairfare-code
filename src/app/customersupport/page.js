import React from 'react'
import Link from "next/link";
import Image from "next/image";
import './customersupport.css';


const CustomerSupport = () => {
  return (
    <section className='customer-support'>
        <section className='cust-support-tab'>
            <div className='container customer-support-container'>
                <div className='row customer-support-row'>
                    <div className='col-12 customer-support-tab-col'>
                        <nav>
                            <div class="nav nav-tabs start fd-row" id="nav-tab" role="tablist">
                                <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Flight</button>
                                <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Hotel</button>
                                <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Packages</button>
                                <button class="nav-link" id="nav-disabled-tab" data-bs-toggle="tab" data-bs-target="#nav-disabled" type="button" role="tab" aria-controls="nav-disabled" aria-selected="false">Car Rentals</button>
                            </div>
                        </nav>
                    </div>
                </div>
        </div>
        </section>

        <section className='cust-support-content py-lg-5 py-3'>
            <div className='container cust-support-content-container'>
                <div className='row cust-support-content-row'>
                    <div className='col-12 cust-support-content-col p-0'>
                        <div class="tab-content" id="nav-tabContent">
                            <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
                                <div className='row cs-content-row start common-gap'>
                                    <div className='col-12 cs-content-heading'>
                                        <div className='cs-content-headingbox cent fd-col'>
                                            <h3>Flight Support</h3>
                                            <p>Get Instant help with flights, baggage, bookings and more <br />
                                            From seat selection to cancellation, we're here to make your journey smooth
                                            </p>
                                        </div>
                                    </div>
                                    <div className='col-md-4 col-6 cs-content-col'>
                                        <Link href='/fsbaggage' className='cs-content-box-link w-100'>
                                            <div className='cs-content-box cent fd-col w-100'>
                                                <Image 
                                                    src="/images/cust_support/flight-support/baggage-b.webp" 
                                                    className='img-fluid cs-content-black-img'  
                                                    width={50}
                                                    height={50}  
                                                    alt="Customer care image" />
                                                <Image 
                                                    src="/images/cust_support/flight-support/baggage-w.webp" 
                                                    className='img-fluid cs-content-white-img'  
                                                    width={50}
                                                    height={50}  
                                                    alt="Customer care image" />
                                                <p><strong>Baggage</strong></p>
                                                <p>Baggage allowance, restrictions and fees.</p>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='col-md-4 col-6 cs-content-col'>
                                        <Link href='/fsseat' className='cs-content-box-link w-100'>
                                            <div className='cs-content-box cent fd-col w-100'>
                                                <Image 
                                                    src="/images/cust_support/flight-support/seat-selection-b.webp" 
                                                    className='img-fluid cs-content-black-img'  
                                                    width={50}
                                                    height={50}  
                                                    alt="Customer care image" />
                                                <Image 
                                                    src="/images/cust_support/flight-support/seat-selection-w.webp" 
                                                    className='img-fluid cs-content-white-img'  
                                                    width={50}
                                                    height={50}  
                                                    alt="Customer care image" />
                                                <p><strong>Seat Selection</strong></p>
                                                <p>Baggage allowance, restrictions and fees.</p>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='col-md-4 col-6 cs-content-col'>
                                        <Link href='/fsprice' className='cs-content-box-link w-100'>
                                            <div className='cs-content-box cent fd-col w-100'>
                                                <Image 
                                                    src="/images/cust_support/flight-support/price-offer-b.webp" 
                                                    className='img-fluid cs-content-black-img'  
                                                    width={50}
                                                    height={50}  
                                                    alt="Customer care image" />
                                                <Image 
                                                    src="/images/cust_support/flight-support/price-offer-w.webp" 
                                                    className='img-fluid cs-content-white-img'  
                                                    width={50}
                                                    height={50}  
                                                    alt="Customer care image" />
                                                <p><strong>Pricing & Offers</strong></p>
                                                <p>Baggage allowance, restrictions and fees.</p>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='col-md-4 col-6 cs-content-col'>
                                        <Link href='/fsflightchange' className='cs-content-box-link w-100'>
                                            <div className='cs-content-box cent fd-col w-100'>
                                                <Image 
                                                    src="/images/cust_support/flight-support/flight-change-b.webp" 
                                                    className='img-fluid cs-content-black-img'  
                                                    width={50}
                                                    height={50}  
                                                    alt="Customer care image" />
                                                <Image 
                                                    src="/images/cust_support/flight-support/flight-change-w.webp" 
                                                    className='img-fluid cs-content-white-img'  
                                                    width={50}
                                                    height={50}  
                                                    alt="Customer care image" />
                                                <p><strong>Flight Changes</strong></p>
                                                <p>Baggage allowance, restrictions and fees.</p>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='col-md-4 col-6 cs-content-col'>
                                        <Link href='/fscancellation' className='cs-content-box-link w-100'>
                                            <div className='cs-content-box cent fd-col w-100'>
                                                <Image 
                                                    src="/images/cust_support/flight-support/cancellation-b.webp" 
                                                    className='img-fluid cs-content-black-img'  
                                                    width={50}
                                                    height={50}  
                                                    alt="Customer care image" />
                                                <Image 
                                                    src="/images/cust_support/flight-support/cancellation-w.webp" 
                                                    className='img-fluid cs-content-white-img'  
                                                    width={50}
                                                    height={50}  
                                                    alt="Customer care image" />
                                                <p><strong>Cancellations</strong></p>
                                                <p>Baggage allowance, restrictions and fees.</p>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='col-md-4 col-6 cs-content-col'>
                                        <Link href='/fscheckin' className='cs-content-box-link w-100'>
                                            <div className='cs-content-box cent fd-col w-100'>
                                                <Image 
                                                    src="/images/cust_support/flight-support/checkin-b.webp" 
                                                    className='img-fluid cs-content-black-img'  
                                                    width={50}
                                                    height={50}  
                                                    alt="Customer care image" />
                                                <Image 
                                                    src="/images/cust_support/flight-support/checkin-w.webp" 
                                                    className='img-fluid cs-content-white-img'  
                                                    width={50}
                                                    height={50}  
                                                    alt="Customer care image" />
                                                <p><strong>Check-in Process</strong></p>
                                                <p>Baggage allowance, restrictions and fees.</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
                                hotel
                            </div>
                            <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">
                                package
                            </div>
                            <div class="tab-pane fade" id="nav-disabled" role="tabpanel" aria-labelledby="nav-disabled-tab" tabindex="0">
                                car rental
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className='cust_query-section'>
            <div className='container cust_query-section-container'>
                <div className='row cust_query-section-row'>
                    <div className='col-12 cust_query-section-col'>
                        <div className='row cust_query-section-box start common-gap'>
                            <div className='col-12 cust_query-section-box-heading'>
                                <h3><Image 
                                        src="/images/cust_support/flight-support/chat.webp" 
                                        className='img-fluid chat-img'  
                                        width={40}
                                        height={40}  
                                        alt="Customer care image" /> For Other Query</h3>
                                <p>Can't find your answer? Ask us directly and get a response within 24 hours.</p>
                            </div>
                            <div className='col-sm-6 cust_query-section-box-form start fd-col'>
                                <label>Your Email Address</label>
                                <input type='text' placeholder='xyz@example.com' className='start' />
                            </div>
                            <div className='col-sm-6 cust_query-section-box-form start fd-col'>
                                <label>Your Question</label>
                                <textarea type='text' placeholder='Describe your question' className='start'></textarea>
                            </div>
                            <div className='col-12 cust_query-section-box-button start fd-col'>
                                <button className='btn cust_query-section-box-btn w-100 cent'>Submit Your Question</button>
                            </div>
                            <div className='col-sm-6 cust_query-section-box-contact'>
                                <div className='cust_query-section-box-contact-box w-100 cent fd-row'>
                                    <Image 
                                            src="/images/cust_support/flight-support/call.webp" 
                                            className='img-fluid call-img'  
                                            width={35}
                                            height={35}  
                                            alt="Call" />
                                    <div className='cust_query-section-box-contact-content cent fd-col'>                                       
                                        <p>Call Support</p>
                                        <a href='tel:+1-000-000-0000'>
                                            +1-000-000-0000
                                        </a>
                                    </div>
                                </div>
                            </div>
                             <div className='col-sm-6 cust_query-section-box-contact'>
                                <div className='cust_query-section-box-contact-box w-100 cent fd-row'>
                                    <Image 
                                            src="/images/cust_support/flight-support/email.webp" 
                                            className='img-fluid email-img'  
                                            width={35}
                                            height={35}  
                                            alt="email" />
                                    <div className='cust_query-section-box-contact-content cent fd-col'>
                                        <p>Email Us</p>
                                        <a href='mailto:support@travel.com'>
                                            support@travel.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>
  )
}

export default CustomerSupport