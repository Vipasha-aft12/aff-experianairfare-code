import React from 'react'
import Link from "next/link";
import Image from "next/image";
import './error.css';



const ErrorPage = () => {
  return (
    <section className='error-page'>
        <div className='container error-page-container py-5'>
            <div className='row error-page-row'>
                <div className='col-12 error-page-col cent fd-col'>
                    <Image 
                        src="/images/error-page/404.webp" 
                        className='img-fluid arrow-img'  
                        width={579}
                        height={358}  
                        alt="error image" />
                    <h4>Uh OH. That page doesn't exist.</h4>
                    <p>Ooops! It looks like this page dosen't exist anymore or the link is incorrect.<br />
                    Return to the <Link href='/'>homepage</Link> to find what you're looking for.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ErrorPage