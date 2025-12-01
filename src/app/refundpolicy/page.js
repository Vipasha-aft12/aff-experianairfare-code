import React from 'react'
import Link from "next/link";
import Image from "next/image";


const RefundPolicy = () => {
  return (
    <section className='policypages'>
        <div className='container-fluid policypages-banner-container'>
            <div className='row policypages-banner-row'>
                <div className='col-md-6 policypages-banner-colone cent fd-col'>
                    <h1>Refund Policy</h1>
                    <p>Refunds depend on booking type and applicable terms.</p>
                </div>
                <div className='col-md-6 policypages-banner-coltwo cent'>
                    <Image 
                        src="/images/common/refund-policy.png" 
                        className='img-fluid common-img'  
                        width={646}
                        height={430}  
                        alt="Policy Page Banner Image"/>
                </div>
            </div>
        </div>

        <div className='container policypages-content-container'>
            <div className='row policypages-content-row start'>
                <div className='col-12 policypages-heading'>
                    <h2>Refund Policy</h2>
                </div>
                <div className='col-12 policypages-content'>
                    <h4>Eligibility for Refunds</h4>
                    <p>The fare rules and the conditions of cancellation, as per the booking, refund.</p>
                    <p>Deductions at the time of generation of a booking will decide the fees as well as give refunds in case of cancellations initiated by the customers. Service failure also generates a refund. Examples of service failure include an airline disruption and an overbooking of passengers.</p>
                    <h4>Processing Time</h4>
                    <p>Refund approximately takes 7-14 working days after a request is done. However, delay is possible on refunding through payment systems or policies set in by providers like airlines and hotels.</p>
                    <h4>Reversal of Payments</h4>
                    <p>All payments will return back to the actual payment method that was in place during one's reservation.</p>
                    <h4>Partial Cancellations</h4>
                    <p>If the booking was partially cancelled, just refund the unused part at the discretion of the provider's rules. Only if it contains or uses different services.</p>
                    <h4>Non - Refundable Bookings</h4>
                    <p>Unless otherwise stated, no refunds for any non-refundable bookings or services. Customer to read the terms of booking before confirmation.</p>
                    <h4>Refund Help</h4>
                    <p>Our customer care team is there to help with refund requests and updates on the status of your refund.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default RefundPolicy