import React from 'react'
import Link from "next/link";
import Image from "next/image";
import './destinationdetail.css';

const DestinationDetail = () => {
  return (
    <section className='destination-detailpage'>
      <div className='container-fluid dcf_banner cent'>{/*  destination banner starts */}
        <div className='row dcf_banner-row'>
          <div className='col-12 dcf_banner-col cent'>
            <h1>Destination Detail</h1>
          </div>
        </div>
      </div>{/*  destination banner ends */}
     
     <div className='container desti_detail-container start fd-col'>
        <div className='row destid-intro-row destid-cmn-cnt'>
          <div className='col-12 destid-intro-col'>
            <h2>London: Where History Meets Mordern Life, Stories, and Unfordettable Experiences</h2>
            <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.</p>
          </div>
        </div>

        <div className='row destid-places-to-visit-row start destid-cmn-cnt common-gap'>
          <div className='col-12 destid-places-to-visit-col'>
            <h3>Places to visit in London</h3>
            <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.</p>
          </div>
          <div className='col-lg-2 col-sm-4 col-6 destid-ptv-col cent fd-col'>
            <Image 
              src="/images/desti-d/hawaii.webp" 
              className='img-fluid destid-ptv-img'  
              width={210}
              height={255}  
              alt="Places to visit"/>
              <p>Buckingham Palace</p>
          </div>
           <div className='col-lg-2 col-sm-4 col-6 destid-ptv-col cent fd-col'>
            <Image 
              src="/images/desti-d/london.webp" 
              className='img-fluid destid-ptv-img'  
              width={210}
              height={255}  
              alt="Places to visit"/>
              <p>London Eye</p>
          </div>
           <div className='col-lg-2 col-sm-4 col-6 destid-ptv-col cent fd-col'>
            <Image 
              src="/images/desti-d/greece.webp" 
              className='img-fluid destid-ptv-img'  
              width={210}
              height={255}  
              alt="Places to visit"/>
              <p>Oxford Street</p>
          </div>
           <div className='col-lg-2 col-sm-4 col-6 destid-ptv-col cent fd-col'>
            <Image 
              src="/images/desti-d/newyork.webp" 
              className='img-fluid destid-ptv-img'  
              width={210}
              height={255}  
              alt="Places to visit"/>
              <p>British Museum</p>
          </div>
           <div className='col-lg-2 col-sm-4 col-6 destid-ptv-col cent fd-col destid-second-hide'>
            <Image 
              src="/images/desti-d/hawaii.webp" 
              className='img-fluid destid-ptv-img'  
              width={210}
              height={255}  
              alt="Places to visit"/>
              <p>National Gallery</p>
          </div>
           <div className='col-lg-2 col-sm-4 col-6 destid-ptv-col cent fd-col destid-second-hide'>
            <Image 
              src="/images/desti-d/london.webp" 
              className='img-fluid destid-ptv-img'  
              width={210}
              height={255}  
              alt="Places to visit"/>
              <p>Convent Garden</p>
          </div>
          <div className='col-12 destid-ptv-detail destid-cmn-cnt'>
            <ol>
              <li>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.</li>

              <li>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.</li>

              <li>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.</li>
            </ol>
          </div>
        </div>

        <div className='row destid-activity-todo-row start common-gap'>
          <div className='col-12 destid-activity-todo-heading'>
            <h3>Activities to do in London</h3>
          </div>
          <div className='col-12 destid-activity-todo-col btwn fd-row common-gap'>
            <div className='destid-activity-todo-box start fd-col'>
              <Image 
              src="/images/desti-d/hawaii.webp" 
              className='img-fluid destid-act-img'  
              width={210}
              height={255}  
              alt="Places to visit"/>
              <p><strong>Take a Thames River Cruise</strong></p>
              <p>The wise man therefore always holds in these matters to this principle of selection</p>
            </div>
            <div className='destid-activity-todo-box start fd-col'>
              <Image 
              src="/images/desti-d/hawaii.webp" 
              className='img-fluid destid-act-img'  
              width={210}
              height={255}  
              alt="Places to visit"/>
              <p><strong>Take a Thames River Cruise</strong></p>
              <p>The wise man therefore always holds in these matters to this principle of selection</p>
            </div>
            <div className='destid-activity-todo-box start fd-col'>
              <Image 
              src="/images/desti-d/hawaii.webp" 
              className='img-fluid destid-act-img'  
              width={210}
              height={255}  
              alt="Places to visit"/>
              <p><strong>Take a Thames River Cruise</strong></p>
              <p>The wise man therefore always holds in these matters to this principle of selection</p>
            </div>
            <div className='destid-activity-todo-box start fd-col'>
              <Image 
              src="/images/desti-d/hawaii.webp" 
              className='img-fluid destid-act-img'  
              width={210}
              height={255}  
              alt="Places to visit"/>
              <p><strong>Take a Thames River Cruise</strong></p>
              <p>The wise man therefore always holds in these matters to this principle of selection</p>
            </div>
            <div className='destid-activity-todo-box start fd-col desti-d-first-hide'>
              <Image 
              src="/images/desti-d/hawaii.webp" 
              className='img-fluid destid-act-img'  
              width={210}
              height={255}  
              alt="Places to visit"/>
              <p><strong>Take a Thames River Cruise</strong></p>
              <p>The wise man therefore always holds in these matters to this principle of selection</p>
            </div>
          </div>
        </div>

        <div className='row destid-best-hotel-row start common-gap'>
          <div className='col-12 destid-best-hotel-heading'>
            <h3>Best Hotels Loved by Travelers in London</h3>
          </div>
          <div className='col-12 destid-best-hotel-col btwn fd-row common-gap'>
            <div className='destid-best-hotel-box cent fd-col'>
              <div className='destid-best-hotel-image'>
                 <Image 
                    src="/images/desti-d/hawaii.webp" 
                    className='img-fluid destid-hotel-img'  
                    width={210}
                    height={255}  
                    alt="destnation Hotel"/>
                <p className='desti-d-hotel-deal'>Best Deal</p>
              </div>
              <div className='destid-best-hotel-content start fd-col w-100'>
                <p><strong>The Ritz Londom</strong></p>
                <p className='hotel-country'>United Kingdom</p>
                <div className='destid-hotel-rating start fd-row w-100'>
                  <p>4.9 star</p>
                </div>
                <div className='destid-hotelrate'>
                  <p>from</p>
                  <p><s>$399</s> $299</p>
                </div>
                <button className='btn destid-best-hotel-btn cent w-100'>Check Availability</button>
              </div>
            </div>
            <div className='destid-best-hotel-box cent fd-col'>
              <div className='destid-best-hotel-image'>
                 <Image 
                    src="/images/desti-d/hawaii.webp" 
                    className='img-fluid destid-hotel-img'  
                    width={210}
                    height={255}  
                    alt="destnation Hotel"/>
                <p className='desti-d-hotel-deal'>Best Deal</p>
              </div>
              <div className='destid-best-hotel-content start fd-col w-100'>
                <p><strong>The Ritz Londom</strong></p>
                <p className='hotel-country'>United Kingdom</p>
                <div className='destid-hotel-rating start fd-row w-100'>
                  <p>4.9 star</p>
                </div>
                <div className='destid-hotelrate'>
                  <p>from</p>
                  <p><s>$399</s> $299</p>
                </div>
                <button className='btn destid-best-hotel-btn cent w-100'>Check Availability</button>
              </div>
            </div>
            <div className='destid-best-hotel-box cent fd-col'>
              <div className='destid-best-hotel-image'>
                 <Image 
                    src="/images/desti-d/hawaii.webp" 
                    className='img-fluid destid-hotel-img'  
                    width={210}
                    height={255}  
                    alt="destnation Hotel"/>
                <p className='desti-d-hotel-deal'>Best Deal</p>
              </div>
              <div className='destid-best-hotel-content start fd-col w-100'>
                <p><strong>The Ritz Londom</strong></p>
                <p className='hotel-country'>United Kingdom</p>
                <div className='destid-hotel-rating start fd-row w-100'>
                  <p>4.9 star</p>
                </div>
                <div className='destid-hotelrate'>
                  <p>from</p>
                  <p><s>$399</s> $299</p>
                </div>
                <button className='btn destid-best-hotel-btn cent w-100'>Check Availability</button>
              </div>
            </div>
            <div className='destid-best-hotel-box cent fd-col'>
              <div className='destid-best-hotel-image'>
                 <Image 
                    src="/images/desti-d/hawaii.webp" 
                    className='img-fluid destid-hotel-img'  
                    width={210}
                    height={255}  
                    alt="destnation Hotel"/>
                <p className='desti-d-hotel-deal'>Best Deal</p>
              </div>
              <div className='destid-best-hotel-content start fd-col w-100'>
                <p><strong>The Ritz Londom</strong></p>
                <p className='hotel-country'>United Kingdom</p>
                <div className='destid-hotel-rating start fd-row w-100'>
                  <p>4.9 star</p>
                </div>
                <div className='destid-hotelrate'>
                  <p>from</p>
                  <p><s>$399</s> $299</p>
                </div>
                <button className='btn destid-best-hotel-btn cent w-100'>Check Availability</button>
              </div>
            </div>
            <div className='destid-best-hotel-box cent fd-col desti-d-first-hide'>
              <div className='destid-best-hotel-image'>
                 <Image 
                    src="/images/desti-d/hawaii.webp" 
                    className='img-fluid destid-hotel-img'  
                    width={210}
                    height={255}  
                    alt="destnation Hotel"/>
                <p className='desti-d-hotel-deal'>Best Deal</p>
              </div>
              <div className='destid-best-hotel-content start fd-col w-100'>
                <p><strong>The Ritz Londom</strong></p>
                <p className='hotel-country'>United Kingdom</p>
                <div className='destid-hotel-rating start fd-row w-100'>
                  <p>4.9 star</p>
                </div>
                <div className='destid-hotelrate'>
                  <p>from</p>
                  <p><s>$399</s> $299</p>
                </div>
                <button className='btn destid-best-hotel-btn cent w-100'>Check Availability</button>
              </div>
            </div>
          </div>
        </div>

        <div className='row destid-best-price-row start common-gap'>
          <div className='col-12 destid-best-price-heading'>
            <h3>Fly to London at the Best Price</h3>
          </div>
          <div className='col-md-6 destid-best-price-col'>
            <div className='destid-best-price-box start fd-col'>
              <div className='destid-bpb-heading start fd-row'>
                <h4>New Delhi, IN (DEL)</h4>
              </div>
              <p>wed, 19/11 -Tue. 09/12</p>
              <p>Multiple Airlines- Roundtrip, Economy</p>
              <button className='btn destid-bp-btn cent'>View Detail</button>
            </div>
          </div>
          <div className='col-md-6 destid-best-price-col'>
            <div className='destid-best-price-box start fd-col'>
              <div className='destid-bpb-heading start fd-row'>
                <h4>New Delhi, IN (DEL)</h4>
              </div>
              <p>wed, 19/11 -Tue. 09/12</p>
              <p>Multiple Airlines- Roundtrip, Economy</p>
              <button className='btn destid-bp-btn cent'>View Detail</button>
            </div>
          </div>
          <div className='col-md-6 destid-best-price-col'>
            <div className='destid-best-price-box start fd-col'>
              <div className='destid-bpb-heading start fd-row'>
                <h4>New Delhi, IN (DEL)</h4>
              </div>
              <p>wed, 19/11 -Tue. 09/12</p>
              <p>Multiple Airlines- Roundtrip, Economy</p>
              <button className='btn destid-bp-btn cent'>View Detail</button>
            </div>
          </div>
          <div className='col-md-6 destid-best-price-col'>
            <div className='destid-best-price-box start fd-col'>
              <div className='destid-bpb-heading start fd-row'>
                <h4>New Delhi, IN (DEL)</h4>
              </div>
              <p>wed, 19/11 -Tue. 09/12</p>
              <p>Multiple Airlines- Roundtrip, Economy</p>
              <button className='btn destid-bp-btn cent'>View Detail</button>
            </div>
          </div>
        </div>

        <div className='row destid-bestplace-to-eat-row destid-cmn-cnt'>
          <div className='col-12 destid-bestplace-to-eat-heading'>
            <h3>London's Iconic Eats</h3>
          </div>
          <div className='col-12 destid-bestplace-to-eat-col'>
              <ol>
                <li>The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.</li>
                <li>The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.</li>
                <li>The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.</li>
                <li>The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.</li>
                <li>The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.</li>
                <li>The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.</li>
                <li>The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.</li>
                <li>The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.</li>
                <li>The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.</li>
              </ol>
          </div>
        </div>

        <div className="row homepage-blog start common-gap"> {/* blog starts */}
          <div className="col-12 homepage_blog-heading">
              <h3>Enjoy Fresh Travel Blogs</h3>
          </div>
          <div className="col-lg-3 col-sm-6 homepage_blog-col">
                    <div className="homepage_blog-box start fd-col">
                      <Image 
                          src="/images/home/blog.webp" 
                          className='img-fluid blog-img'  
                          width={310}
                          height={204}  
                          alt="blog image" />
                      <div className="homepage_blog-content start fd-col">
                        <div className="hp_blog-date">
                          <p>Published: Aug 19,2025</p>
                        </div>
                        <h4>Exploring Norway: From Scenic Fjords to Artic Adventures</h4>
                        <p>By Sonia Garg</p>
                      </div>
                    </div>
          </div>
          <div className="col-lg-3 col-sm-6 homepage_blog-col">
                    <div className="homepage_blog-box start fd-col">
                      <Image 
                          src="/images/home/blog.webp" 
                          className='img-fluid blog-img'  
                          width={310}
                          height={204}  
                          alt="blog image" />
                      <div className="homepage_blog-content start fd-col">
                        <div className="hp_blog-date">
                          <p>Published: Aug 19,2025</p>
                        </div>
                        <h4>Exploring Norway: From Scenic Fjords to Artic Adventures</h4>
                        <p>By Sonia Garg</p>
                      </div>
                    </div>
          </div>
          <div className="col-lg-3 col-6 homepage_blog-col resp-third-hide">
                    <div className="homepage_blog-box start fd-col">
                      <Image 
                          src="/images/home/blog.webp" 
                          className='img-fluid blog-img'  
                          width={310}
                          height={204}  
                          alt="blog image" />
                      <div className="homepage_blog-content start fd-col">
                        <div className="hp_blog-date">
                          <p>Published: Aug 19,2025</p>
                        </div>
                        <h4>Exploring Norway: From Scenic Fjords to Artic Adventures</h4>
                        <p>By Sonia Garg</p>
                      </div>
                    </div>
          </div>
          <div className="col-lg-3 col-6 homepage_blog-col resp-third-hide">
                    <div className="homepage_blog-box start fd-col">
                      <Image 
                          src="/images/home/blog.webp" 
                          className='img-fluid blog-img'  
                          width={310}
                          height={204}  
                          alt="blog image" />
                      <div className="homepage_blog-content start fd-col">
                        <div className="hp_blog-date">
                          <p>Published: Aug 19,2025</p>
                        </div>
                        <h4>Exploring Norway: From Scenic Fjords to Artic Adventures</h4>
                        <p>By Sonia Garg</p>
                      </div>
                    </div>
          </div>
        </div> {/* blog ends */}

        <div className="row homepage_faq-row start common-gap w-100"> {/* faq starts */}
          <div className="col-12 homepage_faq-heading">
            <h3>Most-Read London Guides</h3>
          </div>
          <div className="col-12 homepage_faq-col">
            <div className="accordion accordion-flush" id="accordionFlushExample">
              <div class="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    How do I book cheap flights?
                  </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                   Use ExperianAirfare’s search to instantly compare and book cheap flight tickets. Your next affordable adventure starts here.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                   Do you offer international and domestic flights?
                  </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                      Yes, we provide great flight deals on all top international and domestic routes. Book your flight now!
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    Can I change or cancel my flight?
                  </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                      Yes, manage your booking online by just calling us. Policies vary by airline, and our support team is here to help.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingfour">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefour" aria-expanded="false" aria-controls="flush-collapsefour">
                    How can I find the best flight deals?
                  </button>
                </h2>
                <div id="flush-collapsefour" className="accordion-collapse collapse" aria-labelledby="flush-headingfour" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                      Call us now and book in advance to get exclusive deals on online flight tickets to various destinations.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingfive">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefive" aria-expanded="false" aria-controls="flush-collapsefive">
                    Is my payment information secure?
                  </button>
                </h2>
                <div id="flush-collapsefive" className="accordion-collapse collapse" aria-labelledby="flush-headingfive" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                      Absolutely. We use advanced encryption to ensure your flight booking is always safe and secure with us.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> {/* faq ends */}
     </div>
    </section>
  )
}

export default DestinationDetail