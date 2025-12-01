import React from 'react'
import Link from "next/link";
import Image from "next/image";


const TermsCondition = () => {
  return (
    <section className='policypages'>
        <div className='container policypages-banner-container'>
            <div className='row policypages-banner-row'>
                <div className='col-md-6 policypages-banner-colone cent fd-col'>
                    <h1>Terms and Condition</h1>
                    <p>By booking, you agree to our Terms and conditions for a smooth experience.</p>
                </div>
                <div className='col-md-6 policypages-banner-coltwo cent'>
                    <Image 
                        src="/images/common/term-condition.png" 
                        className='img-fluid common-img'  
                        width={476}
                        height={458}  
                        alt="Policy Page Banner Image"/>
                </div>
            </div>
        </div>

        <div className='container policypages-content-container'>
            <div className='row policypages-content-row start'>
                <div className='col-12 policypages-heading'>
                    <h2>Terms and Condition</h2>
                </div>
                <div className='col-12 policypages-content'>
                    <h3>Introduction</h3>
                    <p>You agree with the terms and conditions while you use Experianairfare.com and its services. This shall be governed by the following Terms and Conditions. The use or access to the website accredits your acceptance to abide by these terms.</p>
                    <h4>Booking Policy </h4>
                    <p>All bookings will be accepted subject to availability. Full personal details must be provided at the time of booking.</p>
                    <h4>Payment Terms</h4>
                    <p>Full payment at confirmation time. We shall honor major credit cards and all other online forms of payment.</p>
                    <h4>User Conduct</h4>
                    <p>Users are strictly not allowed to perform any fraudulent acts or do anything illegal while transacting with our services.</p>
                    <h4>Limitation of Liability</h4>
                    <p>Experianairfare.com is not liable from causality due to delay, cancellation, or even disruption caused due to any third party.</p>
                    <h4>Terms Revision</h4>
                    <p>We may update the terms at any given time. This update may or may not be informed or intimated earlier. So do review our terms and conditions while booking. </p>
                    <h4>Intellectual Property</h4>
                    <p>All text and images, video, and logos on this website are copyrighted by us. They shall not be reproduced or re-distributed in violation of the criminal codes of other laws, without prior permission.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TermsCondition