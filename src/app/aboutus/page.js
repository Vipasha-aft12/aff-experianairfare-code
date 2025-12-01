import React from 'react'
import Link from "next/link";
import Image from "next/image";


const AboutUs = () => {
  return (
    <section className='policypages'>
        <div className='container policypages-banner-container'>
            <div className='row policypages-banner-row'>
                <div className='col-md-6 policypages-banner-colone cent fd-col'>
                    <h1>About Us</h1>
                    <p>We offer comfortable travel solutions with 24/7 support making your journey seamless and stress-free.</p>
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
                    <h2>About Us</h2>
                </div>
                <div className='col-12 policypages-content'>
                    <p>Welcome to Experianairfare.com, established based on the provision of an outstanding travel experience. Experianairfare.com emphasizes customized itineraries, cheap airfare, and trouble free travel planning. To be the global leader in sustainable and personalized travel, creating a world where every journey brings joy, understanding, and positive impact. We are the experts of this sector gaining trust from many years.</p>
                    <p><strong>Why Choose Us?</strong></p>
                    <p><strong>Unmatched expertise- </strong>The travel experts shall have knowledge as well as a profound understanding of the places so you get the very best plan.</p>
                    <p><strong>Value for your money-</strong> We shall ensure that you obtain the best deal on flights, accommodations, or packages so you get excellent value to money.</p>
                    <p><strong>Personal touch-</strong> We dig into your very detailed needs and tastes and tailor all elements of your trip according to your needs and tastes.</p>
                    <p><strong>Reliable Support-</strong> From booking to return, our customer support is available 24/7. All stages of your journey will be made smooth.</p>
                    <p><strong>Focus on Sustainability</strong>- We support responsible tourism. We will adopt only eco-friendly implementations if local inputs are available. Respect for local cultures will be strictly maintained.</p>
                </div>
            </div>
            <div className='row abtus-row cent'>
                <div className='col-sm-6 abtus-colone cent'>
                    <Image 
                        src="/images/common/vision.png" 
                        className='img-fluid common-img'  
                        width={613}
                        height={409}  
                        alt="Policy Page Banner Image"/>
                </div>
                <div className='col-sm-6 abtus-coltwo cent fd-col'>
                    <h3>Our Vision</h3>
                    <p>Our dream is to lead this world, taking the most personal and sustainable ways of travel; bringing a happiness mark, positive impacts, understanding, and more to our globe. We really feel that it has to do with the travel revolution, quality innovation, and responsibility with our tourism and get people to avail the cheaper deals without compromising with the luxury.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutUs