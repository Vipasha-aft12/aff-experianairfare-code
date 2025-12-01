import Image from "next/image";
import React, { useState, useRef, useEffect } from 'react';

import './Footer.css'

const Footer = () => {

  const [showCookie, setShowCookie] = useState(true);
  const footerBottomRef = useRef(null);


  useEffect(() => {
    if (footerBottomRef.current) {
      footerBottomRef.current.style.paddingBottom = showCookie ? "150px" : "0px";
    }
  }, [showCookie]);

  return (
    <section className="footer mt-lg-5 mt-3">
      <section className="footer-top">
        <div className="container footer-top-container">
          <div className="row footer-top-row start">
            <div className="col-lg-3 footer-about start fd-col">
              <Image 
                src="/images/header/logo.webp" 
                className='img-fluid logo'  
                width={343}
                height={150}  
                alt="logo" />
                <p>ExperianAirfare provides flight search and fare comparison services to find you the best prices. Prices and availability may vary and are subject to change without notice. We do not handle bookings directly and are not responsible for any changes, delays, or cancellations made by airlines or third-party providers. Please review airline policies carefully when booking your flights to stay informed. </p>
            </div>
            <div className="col-lg-2 col-sm-4 col-6 footer-link start fd-col">
              <h5>Quick Links</h5>
              <a href="">Home</a>
              <a href="/aboutus">About Us</a>
              <a href="/contactus">Contact Us</a>
              <a href="/privacypolicy">Privacy Policy</a>
              <a href="/cookiespolicy">Cookies Policy</a>
              <a href="/refundpolicy">Refund Policy</a>
              <a href="/cancellationpolicy">Cancellation Policy</a>
              <a href="/termsandcondition">Terms and Conditions</a>
              <a href="/advertiserdisclosure">Advertiser Disclosure</a>
              
            </div>
            <div className="col-lg-2 col-sm-4 col-6 footer-link start fd-col">
              <h5>Top Airlines</h5>
              <a href="">Air Canada</a>
              <a href="">Alaska Airlines</a>
              <a href="">Lufthansa</a>
              <a href="">Qatar Airlines</a>
              <a href="">United Airlines</a>
            </div>
            <div className="col-lg-2 col-4 footer-hide footer-link start fd-col">
              <h5>Top Destination</h5>
              <a href="">London</a>
              <a href="">Paris</a>
              <a href="">Chicago</a>
              <a href="">Miami</a>
              <a href="">New York</a>
            </div>
            <div className="col-lg-3 footer-contact start fd-col">
                <h5>Contact Us</h5>
                <p><strong>Address: </strong> 3799/7, Laxman Vihar, Phase 1, Gurgoan, Haryana, India, 122006</p>
                <a href="tel:+1-000-000-0000">
                  <strong>Toll Free Customer Care: </strong><br />
                  +1-000-000-0000
                </a>
                <a href="mailto: support@experianairfare.com">
                  <strong>Email: </strong><br />
                  support@experianairfare.com
                </a>
                <div className="footer-social-media start fd-row">
                  <Image 
                    src="/images/footer/twitter.webp" 
                    className='img-fluid twitter'  
                    width={121}
                    height={120}  
                    alt="twitter" />
                    <Image 
                    src="/images/footer/instagram.webp" 
                    className='img-fluid instagram'  
                    width={121}
                    height={120}  
                    alt="instagram" />
                    <Image 
                    src="/images/footer/facebook.webp" 
                    className='img-fluid facebook'  
                    width={121}
                    height={120}  
                    alt="facebook" />
                    <Image 
                    src="/images/footer/linkedin.webp" 
                    className='img-fluid linkedin'  
                    width={121}
                    height={120}  
                    alt="linkedin" />
                </div>
            </div>
          </div>
        </div>
      </section>
      <section className="footer-bottom" ref={footerBottomRef}>
        <div className="container footer-bottom-container">
          <div className="row footer-bottom-row start">
            <div className="col-12 footer-bottom-col-disclaimer">
              <p><strong>Disclaimer: </strong> All information is for general guidance and subject to change. Experian Airfare is not responsible for third-party services or content. Travel involves risks; we recommend securing travel insurance as we are not liable for any losses or disruptions. </p>
            </div>
            <div className="col-12 footer-bottom-image cent fd-row">
              <Image 
                    src="/images/footer/visa.webp" 
                    className='img-fluid visa'  
                    width={149}
                    height={50}  
                    alt="visa" />
              <Image 
                    src="/images/footer/paypal.webp" 
                    className='img-fluid paypal'  
                    width={199}
                    height={50}  
                    alt="paypal" />
              <Image 
                    src="/images/footer/mastercard.webp" 
                    className='img-fluid mastercard'  
                    width={95}
                    height={50}  
                    alt="mastercard" />
              <Image 
                    src="/images/footer/clia.webp" 
                    className='img-fluid clia'  
                    width={87}
                    height={50}  
                    alt="clia" />
              <Image 
                    src="/images/footer/americanexpress.webp" 
                    className='img-fluid americanexpress'  
                    width={143}
                    height={50}  
                    alt="americanexpress" />
              <Image 
                    src="/images/footer/amedus-new.webp" 
                    className='img-fluid amadeus'  
                    width={229}
                    height={42}  
                    alt="amadeus" />
            </div>
            <div className="col-12 footer-bottom-last cent">
              <p>&copy; 2024 Travelpodium All Rights Reserved</p>
            </div>
          </div>
        </div>
      </section>
    
      {showCookie && (
        <div className="footer-cookie fixed-bottom">
          <div className="container footer-cookie-container">
            <div className="row footer-cookie-row">
              <div className="col-12 footer-cookie-col start fd-row">
                <Image 
                  src="/images/footer/cookies.webp" 
                  className='img-fluid cookies'  
                  width={34}
                  height={34}  
                  alt="cookies" 
                />
                <div className="footer-cookie-content">
                  <p><strong>We honor your privacy at every step.</strong></p>
                  <p>
                    We use essential cookies to enhance your London travel experience, helping us understand how you interact with our guide and how it assists you in planning every detail of your perfect trip.
                  </p>
                  <div className="footer-cookie-content-buttons start fd-row mt-3">
                    <button 
                      className="btn cookie-accept-btn"
                      onClick={() => setShowCookie(false)}
                    >
                      <Image 
                        src="/images/footer/cookie.webp" 
                        className='img-fluid cookie'  
                        width={24}
                        height={24}  
                        alt="cookies" 
                      /> Accept & Continue
                    </button>
                    <button 
                      className="btn cookie-decline-btn"
                      onClick={() => setShowCookie(false)}
                    >
                      Decline
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div class="sticky-bottom sticky-btm cent fd-row">
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

export default Footer