import React from 'react'
import Link from "next/link";
import Image from "next/image";


const ContactUs = () => {
  return (
    <section className='policypages'>
        <div className='container policypages-banner-container'>
            <div className='row policypages-banner-row'>
                <div className='col-md-6 policypages-banner-colone cent fd-col'>
                    <h1>Contact Us</h1>
                    <p>Reach Out to us for any queries or assistance with your bookings.</p>
                </div>
                <div className='col-md-6 policypages-banner-coltwo cent'>
                    <Image 
                        src="/images/common/contact-us.png" 
                        className='img-fluid common-img'  
                        width={581}
                        height={393}  
                        alt="Contact Page Banner Image"/>
                </div>
            </div>
        </div>
        <div className='container contact-us-container'>
            <h3 className='contact_us_heading w-100 mb-4'>Contact Us Through:</h3>
            <div className='row contact-us-row start common-gap'>
                <div className='col-12 contact-us-heading cent'>
                    <p>Thank you for choosing experianairfare.com ! Let's create memorable travel experiences together!</p>
                </div>
                <div className='col-md-4 col-sm-6 contact-us-col start fd-col'>
                    <h4>Address:</h4>
                    <p>1309 Coffeen Avenue STE 1200 Sheridan Wyoming 82801</p>
                </div>
                <div className='col-md-4 col-sm-6 contact-us-col start fd-col'>
                    <h4>Email:</h4>
                    <p>On <a href="mailto:support@experianairfare.com">support@experianairfare.com</a> for queries, trip-related assistance, or any other question.</p>
                </div>
                <div className='col-md-4 col-sm-6 contact-us-col start fd-col'>
                    <h4>Phone:</h4>
                    <p>You can call us around the clock on <a href="tel:+1-866-570-0234">+1-866-570-0234</a>, We are available 24*7.</p>
                </div>
            </div>
        </div>

       
    </section>
  )
}

export default ContactUs