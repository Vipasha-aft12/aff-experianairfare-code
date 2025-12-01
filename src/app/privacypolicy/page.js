import React from 'react'
import Link from "next/link";
import Image from "next/image";


const PrivacyPolicy = () => {
  return (
    <section className='policypages'>
        <div className='container policypages-banner-container'>
            <div className='row policypages-banner-row'>
                <div className='col-md-6 policypages-banner-colone cent fd-col'>
                    <h1>Privacy Policy</h1>
                    <p>We protect your data and use it only to improve your travel experience.</p>
                </div>
                <div className='col-md-6 policypages-banner-coltwo cent'>
                    <Image 
                        src="/images/common/privacy-policy.png" 
                        className='img-fluid common-img'  
                        width={622}
                        height={423}  
                        alt="Policy Page Banner Image"/>
                </div>
            </div>
        </div>

        <div className='container policypages-content-container'>
            <div className='row policypages-content-row start'>
                <div className='col-12 policypages-heading'>
                    <h2>Privacy Policy</h2>
                </div>
                <div className='col-12 policypages-content'>
                    <p>It is with safety and trust that Experianairfare.com values the personal information of yours. Thus, this privacy policy outlines our collection, usage, and the protection of the personal information about you to assure you have a secure experience.</p>
                    <h4>Information we collect</h4>
                    <p>-Personal details such as your name, email address, phone number, and preferential information during the registration and booking process.</p>
                    <p>-Travel information such as destinations, dates, and preferences.</p>
                    <p>-Information gathered from cookies and other tracking technologies to make our website more useful to you and enhance your experience when using our website.</p>
                    <p>-Communications, including feedback or enquiries, to improve our customer service.</p>
                    <h4>How We Use Your Informatio</h4>
                    <p>-To process your bookings and ensure that your travel is planned effectively.</p>
                    <p>-To give you customer support so that your journey is smooth and hassle-free.</p>
                    <p>-Pass on updates, offers, or newsletters to you if you have consented to receive such communications.</p>
                    <p>-We use your feedback and preferences for improving our website, services, and user interface.</p>
                    <p>-To meet any legal obligation, and for protection of our users' security.</p>
                    <h4>How We Keep Your Information Safe</h4>
                    <p>We follow the industrial standard of safety measures like encryption, secure servers, and access controls that avoid unauthorized access, misuse, or disclosure of your information. We regularly review our security practice to ensure the safety of your information.</p>
                    <h4>Your Rights</h4>
                    <p>You may obtain, correct or remove your personal details at any point in time. You have a right to opt out from the marketing communication that we may send to you and you can make the changes through preference updates or via support mail. You are entitled to know the kind of information we hold about you and what we do with it.</p>
                    <p>To view our complete Privacy Policy or to get more information you can visit our complete Privacy Policy page or contact our support team.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default PrivacyPolicy