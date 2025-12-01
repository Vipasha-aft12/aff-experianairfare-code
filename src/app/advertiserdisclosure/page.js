import React from 'react'
import Link from "next/link";
import Image from "next/image";


const AdvertiserDisclosure = () => {
  return (
    <section className='policypages'>
        <div className='container policypages-banner-container'>
            <div className='row policypages-banner-row'>
                <div className='col-md-6 policypages-banner-colone cent fd-col'>
                    <h1>Advertiser Disclosure</h1>
                </div>
                <div className='col-md-6 policypages-banner-coltwo cent'>
                    <Image 
                        src="/images/common/about-us.png" 
                        className='img-fluid common-img'  
                        width={637}
                        height={386}  
                        alt="Policy Page Banner Image"/>
                </div>
            </div>
        </div>

        <div className='container policypages-content-container'>
            <div className='row policypages-content-row start'>
                <div className='col-12 policypages-heading'>
                    <h2>Advertiser Disclosure</h2>
                </div>
                <div className='col-12 policypages-content'>
                    <p>ExperianAirfare is an independent and unbiased travel agency with the objective of offering airfare and travel services at the lowest possible price within the customer's budget limit. We do not represent, own, or have any special relationship with, any airline company, hotel company, or other travel service provider organization. Other sites earn money by selling off half of the business partners' shares, but there is no finance in what you are seeing here on our site. We are transparent, honest, and impartial on your choice so that you get maximum advantages out of it in your own interest. </p>
                    <h4><strong>How We Work</strong></h4>
                    <p>We list and sell through other third-party vendors like web-based travel sites, touring sites, and airlines. We do get some kind of commission if the order is fulfilled by some of the aforementioned operators by using our link, but while listing and selling with us, we are impartial. We never suggest any specific tour provider or an airliner and never make unjust and deceptive suggestions.</p>
                    <p>We refresh our list every so often with new fares and availability; airfares and holiday fares are time-sensitive based on demand, flight availability, and other market conditions. The search fares may be or not necessarily equal to the fare at the confirmation point. We make sure to bring them to go through all the conditions and terms of the booking, the information, before they end up actually booking the same so that we are not leaving them in a situation of confusion. </p>
                    <h4><strong>Our Commitment to Transparency</strong></h4>
                    <p>ExperianAirfare is very concerned about the client’s integrity and trust. We do not like to make a hypothetical and real booking without surprise and extra cost. We want to protect our travelers by providing them with the right information to enable them to make easy and convenient decisions in comfort.</p>
                    <p>If in fact you do have a question about something that is part of our advertising terms, our season sales, or something else by which questions have been raised by the use of our web service, then please do get in touch. Massive thanks ever so much for your business.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AdvertiserDisclosure