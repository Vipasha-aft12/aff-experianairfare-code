import React from 'react'
import Link from "next/link";
import Image from "next/image";


const CancellationPolicy = () => {
  return (
    <section className='policypages'>
        <div className='container policypages-banner-container'>
            <div className='row policypages-banner-row'>
                <div className='col-md-6 policypages-banner-colone cent fd-col'>
                    <h1>Cancellation Policy</h1>
                </div>
                <div className='col-md-6 policypages-banner-coltwo cent'>
                    <Image 
                        src="/images/common/cancel-image.webp" 
                        className='img-fluid common-img'  
                        width={862}
                        height={875}  
                        alt="Policy Page Banner Image"/>
                </div>
            </div>
        </div>

        <div className='container policypages-content-container'>
            <div className='row policypages-content-row start'>
                <div className='col-12 policypages-heading'>
                    <h2>Cancellation Policy</h2>
                </div>
                <div className='col-12 policypages-content'>
                    <h2><strong>Cancellation by Customer</strong></h2>
                    <p>-Cancellation would be dealt with as per discretion of Experianairfare.com.</p>
                    <p>-It has to be put up in writing or in your account on our website.</p>
                    <p>-Cancellation fee may be applicable depending on the type of fare, the cancellation policy of the provider and the number of days before the cancellation date takes effect.</p>
                    <p>-Refundable bookings refund to the consumer minus the applicable fee for cancellation;</p>
                    <h3><strong>Cancellation by Experianairfare.com</strong></h3>
                    <p>-We can cancel on any unavoidable account, either that due to alterations in the airway schedule, or in any emergency; we'd book the clients again otherwise, or will completely refund the money to this customer.</p>
                    <p>-At the time of our awareness when we realize that it is not avoidable and can't be reserved, we'd communicate with our clients beforehand; then we are ready for an alternative booking and will work for a full refund, if this is what our client requires its complete depend on the airlines policy as well.</p>
                    <p><strong>Non Refundable Reservations</strong></p>
                    <p>Some of the low-cost fares and promotional fares are not refundable. This will be indicated at the time of booking and is best read in the fare rules before finalizing the booking.</p>
                    <p><strong>Late Cancellations and No-Shows</strong></p>
                    <p>Any cancellation that occurs within 24 hours before departure or failure to board a flight will mean losing the value of the booking with no refund.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CancellationPolicy