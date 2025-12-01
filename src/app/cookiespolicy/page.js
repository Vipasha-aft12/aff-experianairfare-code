import React from 'react'
import Link from "next/link";
import Image from "next/image";


const CookiesPolicy = () => {
  return (
    <section className='policypages'>
        <div className='container policypages-banner-container'>
            <div className='row policypages-banner-row'>
                <div className='col-md-6 policypages-banner-colone cent fd-col'>
                    <h1>Cookies Policy</h1>
                    <p>We use Cookies to improve your experience.By continuing, you accept our policy.</p>
                </div>
                <div className='col-md-6 policypages-banner-coltwo cent'>
                    <Image 
                        src="/images/common/cookie-policy.png" 
                        className='img-fluid common-img'  
                        width={613}
                        height={393}  
                        alt="Policy Page Banner Image"/>
                </div>
            </div>
        </div>

        <div className='container policypages-content-container'>
            <div className='row policypages-content-row start'>
                <div className='col-12 policypages-heading'>
                    <h2>Cookies Policy</h2>
                </div>
                <div className='col-12 policypages-content'>
                    <h3>What Are Cookies?</h3>
                    <p>Cookies are small text files placed on your computer so that a website can work better and make your surfing experience much smoother. We will be able to determine your preferences and tailor the content to suit your needs.</p>
                    <h4>How We Use Cookies</h4>
                    <p>-To remember your preferences like language settings and login details to make it smoother for you while browsing.</p>
                    <p>-To allow analysis of how well our websites work and which features are most useful so that future changes can be targeted at points of improvement.</p>
                    <p>-To bring relevant content, recommendations, or targeted advertisements based on your browsing history and interests.</p>
                    <p>-To better safeguard against malicious activities.</p>
                    <h4>Types of Cookies We Use</h4>
                    <p> </p>
                    <p><strong>Essential Cookies-</strong> These are cookies that our website uses for proper functioning such as navigating pages and accessing secure areas.</p>
                    <p> </p>
                    <p><strong>Performance Cookies</strong>- These cookies help measure the performance of the website, understand the actions taken by users, and thus enhance our services.</p>
                    <p> </p>
                    <p><strong>Functional Cookies- </strong>These cookies let us remember your preferences and improve your experience with our site.</p>
                    <p> </p>
                    <p><strong>Marketing Cookies-</strong> These cookies allow us to serve appropriate advertisements to our audience and report on the effectiveness of our advertising campaigns.</p>
                    <p> </p>
                    <p><strong>Third-Party Cookies</strong>: We may employ cookies from third-party service providers that assist in functionality and analytics. Third-party cookies are covered by the privacy policy of third-party providers. For further information on our use of cookies, please refer to our full page on Cookies Policy, or contact us for assistance.</p>
                    <p>Cookies can be set to accept or disabled totally by the cookie settings of your browser. Please note that disabling some types may hamper your ability to enjoy our websites and prevent certain features from being accessed.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CookiesPolicy