import React from 'react'
import Link from "next/link";
import Image from "next/image";



const FlightBaggage = () => {
  return (
    <section className='cust-faq-page'>
        <div className='container cust-faq-page-container py-md-5 py-3'>
            <div className='row cust-faq-page-row start common-gap'>
                <div className='col-12 cust-faq-page-backlink start'>
                    <Link href='/customersupport' className='cent'><Image 
                            src="/images/cust_support/flight-support/backarrow.webp" 
                            className='img-fluid arrow-img'  
                            width={29}
                            height={29}  
                            alt="arrow" /> Back to Flight Support Categories</Link>
                </div>
                <div className='col-12 cust-faq-page-info-col'>
                    <div className='cust-faq-page-info-box start fd-row w-100'>
                        <Image 
                            src="/images/cust_support/flight-support/baggage-faq.webp" 
                            className='img-fluid baggage-img'  
                            width={50}
                            height={50}  
                            alt="baggage" />
                        <div className='cust-faq-page-info-content start fd-col'>
                            <p><strong>Baggage</strong></p>
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>

                    </div>
                </div>
                <div className='col-md-3 cust-faqfilter start fd-col'>
                    <div className='cust-filter-box start fd-col w-100 common-gap'>
                        <div className='cust_faq-found start fd-row'>
                         <Image 
                            src="/images/cust_support/flight-support/filter.webp" 
                            className='img-fluid filter-img'  
                            width={30}
                            height={30}  
                            alt="filter" />
                        <div className='custfil-content start fd-col'>
                            <p><strong>Filter Your Result</strong></p>
                            <p>Customize your search to quickly find filter-specific answer.</p>
                        </div>
                        </div>

                        <div className='cust-filter-type start fd-col'>
                            <p><strong>Baggage Issue Type</strong></p>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                    All Issue
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"  />
                                <label className="form-check-label" for="flexCheckChecked">
                                    Weight Limits
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                    Excess Baggage Fees
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"  />
                                <label className="form-check-label" for="flexCheckChecked">
                                    Lost/Damaged Baggage 
                                </label>
                            </div>
                        </div>

                        <div className='cust-filter-type start fd-col'>
                            <p><strong>Baggage Category</strong></p>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                    All Issue
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"  />
                                <label className="form-check-label" for="flexCheckChecked">
                                    Weight Limits
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                    Excess Baggage Fees
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"  />
                                <label className="form-check-label" for="flexCheckChecked">
                                    Lost/Damaged Baggage 
                                </label>
                            </div>
                        </div>

                        <div className='cust-filter-type start fd-col'>
                            <p><strong>Trip Type</strong></p>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                    All Issue
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                                <label className="form-check-label" for="flexCheckChecked">
                                    Domestic
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                    International
                                </label>
                            </div>
                        </div>
                        <div className='cust-filter-type start fd-col'>
                            <p><strong>Priority Level</strong></p>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                    All Issue
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                                <label className="form-check-label" for="flexCheckChecked">
                                    Urgent
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                    Normal
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-9 cust-faqcol start fd-col'>
                    <div className='cust-faqcol-box start fd-col w-100 common-gap'>
                        <div className='cust_faq-found start fd-row'>
                            <Image 
                                src="/images/cust_support/flight-support/filter.webp" 
                                className='img-fluid filter-img'  
                                width={30}
                                height={30}  
                                alt="filter" />
                            <div className='custfil-content start fd-col'>
                                <p><strong>Frequently Asked Question</strong></p>
                                <p>Baggage</p>
                                <div className='faq-found-number cent mt-3'>
                                    <p>9 Question found</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion start fd-col w-100 faq-acc" id="accordionExample">
                            <div class="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    FAQ 1
                                </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    FAQ 2
                                </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    FAQ 3
                                </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingfour">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
                                    FAQ 4
                                </button>
                                </h2>
                                <div id="collapsefour" className="accordion-collapse collapse" aria-labelledby="headingfour" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingfive">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive">
                                    FAQ 5
                                </button>
                                </h2>
                                <div id="collapsefive" className="accordion-collapse collapse" aria-labelledby="headingfive" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingsix">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsesix" aria-expanded="false" aria-controls="collapsesix">
                                    FAQ 6
                                </button>
                                </h2>
                                <div id="collapsesix" className="accordion-collapse collapse" aria-labelledby="headingsix" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingseven">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseseven" aria-expanded="false" aria-controls="collapseseven">
                                    FAQ 7
                                </button>
                                </h2>
                                <div id="collapseseven" className="accordion-collapse collapse" aria-labelledby="headingseven" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

         <div className='container cust_query-section-container'>
                        <div className='row cust_query-section-row'>
                            <div className='col-12 cust_query-section-col'>
                                <div className='row cust_query-section-box start common-gap'>
                                    <div className='col-12 cust_query-section-box-heading'>
                                        <h3><Image 
                                                src="/images/cust_support/flight-support/chat.webp" 
                                                className='img-fluid chat-img'  
                                                width={40}
                                                height={40}  
                                                alt="Customer care image" /> For Other Query</h3>
                                        <p>Can't find your answer? Ask us directly and get a response within 24 hours.</p>
                                    </div>
                                    <div className='col-sm-6 cust_query-section-box-form start fd-col'>
                                        <label>Your Email Address</label>
                                        <input type='text' placeholder='xyz@example.com' className='start' />
                                    </div>
                                    <div className='col-sm-6 cust_query-section-box-form start fd-col'>
                                        <label>Your Question</label>
                                        <textarea type='text' placeholder='Describe your question' className='start'></textarea>
                                    </div>
                                    <div className='col-12 cust_query-section-box-button start fd-col'>
                                        <button className='btn cust_query-section-box-btn w-100 cent'>Submit Your Question</button>
                                    </div>
                                    <div className='col-sm-6 cust_query-section-box-contact'>
                                        <div className='cust_query-section-box-contact-box w-100 cent fd-row'>
                                            <Image 
                                                    src="/images/cust_support/flight-support/call.webp" 
                                                    className='img-fluid call-img'  
                                                    width={35}
                                                    height={35}  
                                                    alt="Call" />
                                            <div className='cust_query-section-box-contact-content cent fd-col'>                                       
                                                <p>Call Support</p>
                                                <a href='tel:+1-000-000-0000'>
                                                    +1-000-000-0000
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                     <div className='col-sm-6 cust_query-section-box-contact'>
                                        <div className='cust_query-section-box-contact-box w-100 cent fd-row'>
                                            <Image 
                                                    src="/images/cust_support/flight-support/email.webp" 
                                                    className='img-fluid email-img'  
                                                    width={35}
                                                    height={35}  
                                                    alt="email" />
                                            <div className='cust_query-section-box-contact-content cent fd-col'>
                                                <p>Email Us</p>
                                                <a href='mailto:support@travel.com'>
                                                    support@travel.com
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
         </div>

         <div className='container cq_mfilter-container mt-4'>
            <div className='row cq_mfilter-row w-100'>
                <div className='col-12 cq_mfilter-col cent'>
                    <div className='cq_mfilter-box cent fd-row'>
                        <div className='cq_mfilter-sub-box cq_filter'>
                            <p className='cent fd-row'>
                                <Image 
                                    src="/images/cust_support/flight-support/black-filter.webp" 
                                    className='img-fluid cqblack-img'  
                                    width={40}
                                    height={40}  
                                    alt="Customer care image" />
                                <Image 
                                    src="/images/cust_support/flight-support/Whte-filter.webp" 
                                    className='img-fluid cqwhite-img'  
                                    width={48}
                                    height={48}  
                                    alt="Customer care image" />
                                <span>Filter</span>
                            </p>
                            <div className='cust-filter-box start fd-row w-100 common-gap'>
                                <div className='cust_faq-found start fd-row w-100'>
                                <Image 
                                    src="/images/cust_support/flight-support/filter.webp" 
                                    className='img-fluid filter-img'  
                                    width={30}
                                    height={30}  
                                    alt="filter" />
                                <div className='custfil-content start fd-col'>
                                    <p><strong>Filter Your Result</strong></p>
                                    <p>Customize your search to quickly find filter-specific answer.</p>
                                </div>
                                </div>

                                <div className='cust-filter-type start fd-col'>
                                    <p><strong>Baggage Issue Type</strong></p>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            All Issue
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"  />
                                        <label className="form-check-label" for="flexCheckChecked">
                                            Weight Limits
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            Excess Baggage Fees
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"  />
                                        <label className="form-check-label" for="flexCheckChecked">
                                            Lost/Damaged Baggage 
                                        </label>
                                    </div>
                                </div>

                                <div className='cust-filter-type start fd-col'>
                                    <p><strong>Baggage Category</strong></p>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            All Issue
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"  />
                                        <label className="form-check-label" for="flexCheckChecked">
                                            Weight Limits
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            Excess Baggage Fees
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"  />
                                        <label className="form-check-label" for="flexCheckChecked">
                                            Lost/Damaged Baggage 
                                        </label>
                                    </div>
                                </div>

                                <div className='cust-filter-type start fd-col'>
                                    <p><strong>Trip Type</strong></p>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            All Issue
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                                        <label className="form-check-label" for="flexCheckChecked">
                                            Domestic
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            International
                                        </label>
                                    </div>
                                </div>
                                <div className='cust-filter-type start fd-col'>
                                    <p><strong>Priority Level</strong></p>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            All Issue
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                                        <label className="form-check-label" for="flexCheckChecked">
                                            Urgent
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            Normal
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='cq_mfilter-sub-box cq_call'>
                            <a href="tel: +1-000-000-0000" className='cent fd-row'>
                                <Image 
                                    src="/images/cust_support/flight-support/Call-black-icon.webp" 
                                    className='img-fluid cqblack-img'  
                                    width={40}
                                    height={40}  
                                    alt="Customer care image" />
                                <Image 
                                    src="/images/cust_support/flight-support/call-white-icon.webp" 
                                    className='img-fluid cqwhite-img'  
                                    width={48}
                                    height={48}  
                                    alt="Customer care image" />
                               <span>Call</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
         </div>
    </section>
  )
}

export default FlightBaggage