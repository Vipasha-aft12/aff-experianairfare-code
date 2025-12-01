import React from 'react'
import Link from "next/link";
import Image from "next/image";
import './destinationlisting.css';


const DestinationListing = () => {
  return (
        <section className='destination-listing'>
            <div className='container-fluid destilp-banner-container'>
                <div className='row destilp-banner-row'>
                  <div className='col-12 destilp-banner-col p-0'>
                      <Image 
                        src="/images/desti-lp/desti-lp-banner.webp" 
                        className='img-fluid desti-lp-banner'  
                        width={1900}
                        height={500}  
                        alt="Destination Landingpage banner" />
                  </div>
                </div>
            </div>

            <div className='container desti-lp-container start fd-col mt-3'>
              <div className='row desti-lp-breadcrub-row w-100'>
                <div className='col-12 desti-lp-breadcrub-col start'>
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item">
                          <Link href="#">Home</Link>
                        </li>
                        <li className="breadcrumb-item">
                          <Link href="#">Destination</Link>
                        </li>
                      </ol>
                  </nav>
                </div>
              </div>

              <div className='row desti-lp-destinations-row start common-gap'>
                <div className='col-12 desti-lp-destinations-heading cent fd-col'>
                  <h1>Our Trending Destinations - From Hidden Gems to Iconic Hotspots</h1>
                  <p>From Breathtaking landscapes to vibrant cultures, our handpicked destinations promise unforgettable experiences. Whrther you seek adventure, relaxation, or discovery, the world is waiting for you to explore.</p>
                </div>
                <div className='col-12 desti-lp-destinations-col start fd-row'>
                  <Link href='/destinationdetail' className='destilp-box-link'>
                    <div className='desti-lp-destinations-box start fd-col'>
                      <Image 
                        src="/images/desti-lp/italy.webp" 
                        className='img-fluid desti-lp-img'  
                        width={251}
                        height={250}  
                        alt="Destination image" />
                        <p className='destilp-name'>Italy</p>
                        <p className='destilp-detail'>From Breathtaking landscapes to vibrant cultures, our handpicked destinations promise unforgettable experiences.</p>
                    </div>
                  </Link>
                  <Link href='/destinationdetail' className='destilp-box-link'>
                    <div className='desti-lp-destinations-box start fd-col'>
                      <Image 
                        src="/images/desti-lp/italy.webp" 
                        className='img-fluid desti-lp-img'  
                        width={251}
                        height={250}  
                        alt="Destination image" />
                        <p className='destilp-name'>Italy</p>
                        <p className='destilp-detail'>From Breathtaking landscapes to vibrant cultures, our handpicked destinations promise unforgettable experiences.</p>
                    </div>
                  </Link>
                  <Link href='/destinationdetail' className='destilp-box-link'>
                    <div className='desti-lp-destinations-box start fd-col'>
                      <Image 
                        src="/images/desti-lp/italy.webp" 
                        className='img-fluid desti-lp-img'  
                        width={251}
                        height={250}  
                        alt="Destination image" />
                        <p className='destilp-name'>Italy</p>
                        <p className='destilp-detail'>From Breathtaking landscapes to vibrant cultures, our handpicked destinations promise unforgettable experiences.</p>
                    </div>
                  </Link>
                  <Link href='/destinationdetail' className='destilp-box-link'>
                    <div className='desti-lp-destinations-box start fd-col'>
                      <Image 
                        src="/images/desti-lp/italy.webp" 
                        className='img-fluid desti-lp-img'  
                        width={251}
                        height={250}  
                        alt="Destination image" />
                        <p className='destilp-name'>Italy</p>
                        <p className='destilp-detail'>From Breathtaking landscapes to vibrant cultures, our handpicked destinations promise unforgettable experiences.</p>
                    </div>
                  </Link>
                  <Link href='/destinationdetail' className='destilp-box-link'>
                    <div className='desti-lp-destinations-box start fd-col'>
                      <Image 
                        src="/images/desti-lp/italy.webp" 
                        className='img-fluid desti-lp-img'  
                        width={251}
                        height={250}  
                        alt="Destination image" />
                        <p className='destilp-name'>Italy</p>
                        <p className='destilp-detail'>From Breathtaking landscapes to vibrant cultures, our handpicked destinations promise unforgettable experiences.</p>
                    </div>
                  </Link>
                </div>
              </div>

              <div className='row desti-lp-destinations-row start common-gap'>
                <div className='col-12 desti-lp-destinations-heading cent fd-col'>
                  <h2>Our Domestic Destinations - From Hidden Gems to Iconic Hotspots</h2>
                  <p>From Breathtaking landscapes to vibrant cultures, our handpicked destinations promise unforgettable experiences. Whrther you seek adventure, relaxation, or discovery, the world is waiting for you to explore.</p>
                </div>
                <div className='col-12 desti-lp-destinations-col start fd-row'>
                  <Link href='/destinationdetail' className='destilp-box-link'>
                    <div className='desti-lp-destinations-box start fd-col'>
                      <Image 
                        src="/images/desti-lp/italy.webp" 
                        className='img-fluid desti-lp-img'  
                        width={251}
                        height={250}  
                        alt="Destination image" />
                        <p className='destilp-name'>Italy</p>
                        <p className='destilp-detail'>From Breathtaking landscapes to vibrant cultures, our handpicked destinations promise unforgettable experiences.</p>
                    </div>
                  </Link>
                  <Link href='/destinationdetail' className='destilp-box-link'>
                    <div className='desti-lp-destinations-box start fd-col'>
                      <Image 
                        src="/images/desti-lp/italy.webp" 
                        className='img-fluid desti-lp-img'  
                        width={251}
                        height={250}  
                        alt="Destination image" />
                        <p className='destilp-name'>Italy</p>
                        <p className='destilp-detail'>From Breathtaking landscapes to vibrant cultures, our handpicked destinations promise unforgettable experiences.</p>
                    </div>
                  </Link>
                  <Link href='/destinationdetail' className='destilp-box-link'>
                    <div className='desti-lp-destinations-box start fd-col'>
                      <Image 
                        src="/images/desti-lp/italy.webp" 
                        className='img-fluid desti-lp-img'  
                        width={251}
                        height={250}  
                        alt="Destination image" />
                        <p className='destilp-name'>Italy</p>
                        <p className='destilp-detail'>From Breathtaking landscapes to vibrant cultures, our handpicked destinations promise unforgettable experiences.</p>
                    </div>
                  </Link>
                  <Link href='/destinationdetail' className='destilp-box-link'>
                    <div className='desti-lp-destinations-box start fd-col'>
                      <Image 
                        src="/images/desti-lp/italy.webp" 
                        className='img-fluid desti-lp-img'  
                        width={251}
                        height={250}  
                        alt="Destination image" />
                        <p className='destilp-name'>Italy</p>
                        <p className='destilp-detail'>From Breathtaking landscapes to vibrant cultures, our handpicked destinations promise unforgettable experiences.</p>
                    </div>
                  </Link>
                  <Link href='/destinationdetail' className='destilp-box-link'>
                    <div className='desti-lp-destinations-box start fd-col'>
                      <Image 
                        src="/images/desti-lp/italy.webp" 
                        className='img-fluid desti-lp-img'  
                        width={251}
                        height={250}  
                        alt="Destination image" />
                        <p className='destilp-name'>Italy</p>
                        <p className='destilp-detail'>From Breathtaking landscapes to vibrant cultures, our handpicked destinations promise unforgettable experiences.</p>
                    </div>
                  </Link>
                  <Link href='/destinationdetail' className='destilp-box-link'>
                    <div className='desti-lp-destinations-box start fd-col'>
                      <Image 
                        src="/images/desti-lp/italy.webp" 
                        className='img-fluid desti-lp-img'  
                        width={251}
                        height={250}  
                        alt="Destination image" />
                        <p className='destilp-name'>Italy</p>
                        <p className='destilp-detail'>From Breathtaking landscapes to vibrant cultures, our handpicked destinations promise unforgettable experiences.</p>
                    </div>
                  </Link>
                  <Link href='/destinationdetail' className='destilp-box-link'>
                    <div className='desti-lp-destinations-box start fd-col'>
                      <Image 
                        src="/images/desti-lp/italy.webp" 
                        className='img-fluid desti-lp-img'  
                        width={251}
                        height={250}  
                        alt="Destination image" />
                        <p className='destilp-name'>Italy</p>
                        <p className='destilp-detail'>From Breathtaking landscapes to vibrant cultures, our handpicked destinations promise unforgettable experiences.</p>
                    </div>
                  </Link>
                  <Link href='/destinationdetail' className='destilp-box-link'>
                    <div className='desti-lp-destinations-box start fd-col'>
                      <Image 
                        src="/images/desti-lp/italy.webp" 
                        className='img-fluid desti-lp-img'  
                        width={251}
                        height={250}  
                        alt="Destination image" />
                        <p className='destilp-name'>Italy</p>
                        <p className='destilp-detail'>From Breathtaking landscapes to vibrant cultures, our handpicked destinations promise unforgettable experiences.</p>
                    </div>
                  </Link>
                  <Link href='/destinationdetail' className='destilp-box-link'>
                    <div className='desti-lp-destinations-box start fd-col'>
                      <Image 
                        src="/images/desti-lp/italy.webp" 
                        className='img-fluid desti-lp-img'  
                        width={251}
                        height={250}  
                        alt="Destination image" />
                        <p className='destilp-name'>Italy</p>
                        <p className='destilp-detail'>From Breathtaking landscapes to vibrant cultures, our handpicked destinations promise unforgettable experiences.</p>
                    </div>
                  </Link>
                  
                </div>
              </div>
              

              <div className='row desti-lp-destinations-row start common-gap'>
                <div className='col-12 desti-lp-destinations-heading cent fd-col'>
                  <h2>Our International Destinations - From Hidden Gems to Iconic Hotspots</h2>
                  <p>From Breathtaking landscapes to vibrant cultures, our handpicked destinations promise unforgettable experiences. Whrther you seek adventure, relaxation, or discovery, the world is waiting for you to explore.</p>
                </div>
                <div className='col-12 desti-lp-destinations-col start fd-row'>
                  <Link href='/destinationdetail' className='destilp-box-link'>
                    <div className='desti-lp-destinations-box start fd-col'>
                      <Image 
                        src="/images/desti-lp/italy.webp" 
                        className='img-fluid desti-lp-img'  
                        width={251}
                        height={250}  
                        alt="Destination image" />
                        <p className='destilp-name'>Italy</p>
                        <p className='destilp-detail'>From Breathtaking landscapes to vibrant cultures, our handpicked destinations promise unforgettable experiences.</p>
                    </div>
                  </Link>
                  <Link href='/destinationdetail' className='destilp-box-link'>
                    <div className='desti-lp-destinations-box start fd-col'>
                      <Image 
                        src="/images/desti-lp/italy.webp" 
                        className='img-fluid desti-lp-img'  
                        width={251}
                        height={250}  
                        alt="Destination image" />
                        <p className='destilp-name'>Italy</p>
                        <p className='destilp-detail'>From Breathtaking landscapes to vibrant cultures, our handpicked destinations promise unforgettable experiences.</p>
                    </div>
                  </Link>
                  <Link href='/destinationdetail' className='destilp-box-link'>
                    <div className='desti-lp-destinations-box start fd-col'>
                      <Image 
                        src="/images/desti-lp/italy.webp" 
                        className='img-fluid desti-lp-img'  
                        width={251}
                        height={250}  
                        alt="Destination image" />
                        <p className='destilp-name'>Italy</p>
                        <p className='destilp-detail'>From Breathtaking landscapes to vibrant cultures, our handpicked destinations promise unforgettable experiences.</p>
                    </div>
                  </Link>
                  <Link href='/destinationdetail' className='destilp-box-link'>
                    <div className='desti-lp-destinations-box start fd-col'>
                      <Image 
                        src="/images/desti-lp/italy.webp" 
                        className='img-fluid desti-lp-img'  
                        width={251}
                        height={250}  
                        alt="Destination image" />
                        <p className='destilp-name'>Italy</p>
                        <p className='destilp-detail'>From Breathtaking landscapes to vibrant cultures, our handpicked destinations promise unforgettable experiences.</p>
                    </div>
                  </Link>
                  <Link href='/destinationdetail' className='destilp-box-link'>
                    <div className='desti-lp-destinations-box start fd-col'>
                      <Image 
                        src="/images/desti-lp/italy.webp" 
                        className='img-fluid desti-lp-img'  
                        width={251}
                        height={250}  
                        alt="Destination image" />
                        <p className='destilp-name'>Italy</p>
                        <p className='destilp-detail'>From Breathtaking landscapes to vibrant cultures, our handpicked destinations promise unforgettable experiences.</p>
                    </div>
                  </Link>
                  <Link href='/destinationdetail' className='destilp-box-link'>
                    <div className='desti-lp-destinations-box start fd-col'>
                      <Image 
                        src="/images/desti-lp/italy.webp" 
                        className='img-fluid desti-lp-img'  
                        width={251}
                        height={250}  
                        alt="Destination image" />
                        <p className='destilp-name'>Italy</p>
                        <p className='destilp-detail'>From Breathtaking landscapes to vibrant cultures, our handpicked destinations promise unforgettable experiences.</p>
                    </div>
                  </Link>
                  <Link href='/destinationdetail' className='destilp-box-link'>
                    <div className='desti-lp-destinations-box start fd-col'>
                      <Image 
                        src="/images/desti-lp/italy.webp" 
                        className='img-fluid desti-lp-img'  
                        width={251}
                        height={250}  
                        alt="Destination image" />
                        <p className='destilp-name'>Italy</p>
                        <p className='destilp-detail'>From Breathtaking landscapes to vibrant cultures, our handpicked destinations promise unforgettable experiences.</p>
                    </div>
                  </Link>
                  <Link href='/destinationdetail' className='destilp-box-link'>
                    <div className='desti-lp-destinations-box start fd-col'>
                      <Image 
                        src="/images/desti-lp/italy.webp" 
                        className='img-fluid desti-lp-img'  
                        width={251}
                        height={250}  
                        alt="Destination image" />
                        <p className='destilp-name'>Italy</p>
                        <p className='destilp-detail'>From Breathtaking landscapes to vibrant cultures, our handpicked destinations promise unforgettable experiences.</p>
                    </div>
                  </Link>
                  <Link href='/destinationdetail' className='destilp-box-link'>
                    <div className='desti-lp-destinations-box start fd-col'>
                      <Image 
                        src="/images/desti-lp/italy.webp" 
                        className='img-fluid desti-lp-img'  
                        width={251}
                        height={250}  
                        alt="Destination image" />
                        <p className='destilp-name'>Italy</p>
                        <p className='destilp-detail'>From Breathtaking landscapes to vibrant cultures, our handpicked destinations promise unforgettable experiences.</p>
                    </div>
                  </Link>
                  <Link href='/destinationdetail' className='destilp-box-link'>
                    <div className='desti-lp-destinations-box start fd-col'>
                      <Image 
                        src="/images/desti-lp/italy.webp" 
                        className='img-fluid desti-lp-img'  
                        width={251}
                        height={250}  
                        alt="Destination image" />
                        <p className='destilp-name'>Italy</p>
                        <p className='destilp-detail'>From Breathtaking landscapes to vibrant cultures, our handpicked destinations promise unforgettable experiences.</p>
                    </div>
                  </Link>
                  <Link href='/destinationdetail' className='destilp-box-link'>
                    <div className='desti-lp-destinations-box start fd-col'>
                      <Image 
                        src="/images/desti-lp/italy.webp" 
                        className='img-fluid desti-lp-img'  
                        width={251}
                        height={250}  
                        alt="Destination image" />
                        <p className='destilp-name'>Italy</p>
                        <p className='destilp-detail'>From Breathtaking landscapes to vibrant cultures, our handpicked destinations promise unforgettable experiences.</p>
                    </div>
                  </Link>

                </div>
              </div>

            </div>
        </section>
  )
}

export default DestinationListing