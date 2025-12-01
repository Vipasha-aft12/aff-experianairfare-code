"use client"
import AutoModal from "@/component/automodal/AutoModal";
import Image from "next/image";

export default function Home() {
  return (
    <section className="homepage">
      <AutoModal />
      <section className="hp_banner">
              <div className="container homepage-banner-container cent"> {/* homepage banner starts */}
        <div className="row homepage-banner-row start common-gap">
          <div className="col-12 homepage-banner-heading cent">
            <h1>Travel Far, Pay Less: Discover the Best Deals</h1>
          </div>

          <div className="col-12 search-engine cent fd-col se-desktop">
            <nav className="se-nav cent w-100">
              <div class="nav nav-tabs se-main-nav cent fd-row" id="nav-tab" role="tablist">
                <button class="nav-link active se-main-nav-btn cent" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Flights</button>
                <button class="nav-link se-main-nav-btn cent" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Hotel</button>
                <button class="nav-link se-main-nav-btn cent" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Cars</button>
                <button class="nav-link se-main-nav-btn cent" id="nav-disabled-tab" data-bs-toggle="tab" data-bs-target="#nav-disabled" type="button" role="tab" aria-controls="nav-disabled" aria-selected="false">Cruise</button>
                <button class="nav-link se-main-nav-btn cent" id="nav-pkg-tab" data-bs-toggle="tab" data-bs-target="#nav-pkg" type="button" role="tab" aria-controls="nav-pkg" aria-selected="false">Packages</button>
              </div>
            </nav>
            <div class="tab-content se-main-tc w-100" id="nav-tabContent">
              <div class="tab-pane fade show active se-main-tp w-100" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
                <ul class="nav nav-tabs start fd-row mb-2" id="myTab" role="tablist">
                  <li>Flight Type :</li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                        <label class="form-check-label" for="exampleRadios1">
                          One-Way
                        </label>
                      </div>
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">
                        <div class="form-check">
                          <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                          <label class="form-check-label" for="exampleRadios2">
                            Round Trip
                          </label>
                        </div>
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">
                      <div class="form-check">
                          <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" />
                          <label class="form-check-label" for="exampleRadios3">
                           Multi-City
                          </label>
                        </div></button>
                  </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                  <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                      <div className="row se-row start flight-row">
                        <div class="col-lg-3 col-6 se-col start fd-col">
                          <label>From</label>
                          <div className="se-input-box start fd-row">
                            <Image 
                              src="/images/search-engine/search.webp" 
                              className='img-fluid se-img'  
                              width={14}
                              height={14}  
                              alt="search engine icons" />
                            <input type="text" placeholder="London" />
                          </div>
                        </div>
                        <div class="col-lg-3 col-6 se-col start fd-col">
                          <label>To</label>
                          <div className="se-input-box start fd-row">
                            <Image 
                              src="/images/search-engine/calender.webp" 
                              className='img-fluid se-img'  
                              width={14}
                              height={14}  
                              alt="search engine icons" />
                            <input type="text" placeholder="dd/mm/yyyy" />
                          </div>
                        </div>
                        <div class="col-lg-2 col-6 se-col start fd-col">
                          <label>Departure</label>
                          <div className="se-input-box start fd-row">
                            <Image 
                              src="/images/search-engine/calender.webp" 
                              className='img-fluid se-img'  
                              width={14}
                              height={14}  
                              alt="search engine icons" />
                            <input type="text" placeholder="dd/mm/yyyy" />
                          </div>
                        </div>
                        <div class="col-lg-2 col-6 se-col start fd-col passenger-col">
                          <label>Passengers</label>
                          <div className="se-input-box start fd-row">
                            <Image 
                              src="/images/search-engine/traveler.webp" 
                              className='img-fluid se-img'  
                              width={14}
                              height={14}  
                              alt="search engine icons" />
                            <input type="text" placeholder="2 Person" />
                          </div>
                          <div className="passenger-box start fd-col">
                            <div className="passenger-select start fd-col w-100">
                              <p className="pass-para w-100"><strong>Select Travellers</strong></p>
                              <div className="pass-type w-100 btwn fd-row">
                                <div className="trav-type start fd-col">
                                  <p><strong>Adult</strong></p>
                                  <p>(on the day of travel)</p>
                                </div>
                                <div className="add-sub-trav cent fd-row">
                                  <div className="sub-trav cent">
                                    <p>-</p>
                                  </div>
                                  <div className="trav-num cent">
                                    <p>1</p>
                                  </div>
                                  <div className="add-trav cent">
                                    <p>+</p>
                                  </div>
                                </div>
                              </div>
                               <div className="pass-type w-100 btwn fd-row">
                                <div className="trav-type start fd-col">
                                  <p><strong>Child</strong></p>
                                  <p>(2-12 YRS)</p>
                                </div>
                                <div className="add-sub-trav cent fd-row">
                                  <div className="sub-trav cent">
                                    <p>-</p>
                                  </div>
                                  <div className="trav-num cent">
                                    <p>1</p>
                                  </div>
                                  <div className="add-trav cent">
                                    <p>+</p>
                                  </div>
                                </div>
                              </div>
                               <div className="pass-type w-100 btwn fd-row">
                                <div className="trav-type start fd-col">
                                  <p><strong>Infant</strong></p>
                                  <p>(Below 2 YRS)</p>
                                </div>
                                <div className="add-sub-trav cent fd-row">
                                  <div className="sub-trav cent">
                                    <p>-</p>
                                  </div>
                                  <div className="trav-num cent">
                                    <p>1</p>
                                  </div>
                                  <div className="add-trav cent">
                                    <p>+</p>
                                  </div>
                                </div>
                              </div>
                              <p className="pass-disclaimer">Plan a group booking if you are more than 9 passengers</p>
                            </div>
                            <div className="passenger-class btwn fd-row w-100">
                              <p className="pass-para w-100"><strong>Choose Traveller Class</strong></p>
                              <button className="btn passenger-btn cent">Economy</button>
                              <button className="btn passenger-btn cent">Premium</button>
                              <button className="btn passenger-btn cent">Business</button>
                              <button className="btn passenger-btn cent">First Class</button>
                              <button className="btn passenger-done-btn w-100 cent">Done</button>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-2 se-col-button cent">
                          <button className="btn se-btn cent w-100">Search Flight</button>
                        </div>
                      </div>
                  </div>
                  <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                    <div className="row se-row start flight-row">
                        <div class="col-lg-2 col-6 se-col start fd-col">
                          <label>From</label>
                          <div className="se-input-box start fd-row">
                            <Image 
                              src="/images/search-engine/search.webp" 
                              className='img-fluid se-img'  
                              width={14}
                              height={14}  
                              alt="search engine icons" />
                            <input type="text" placeholder="London" />
                          </div>
                        </div>
                        <div class="col-lg-2 col-6 se-col start fd-col">
                          <label>To</label>
                          <div className="se-input-box start fd-row">
                            <Image 
                              src="/images/search-engine/calender.webp" 
                              className='img-fluid se-img'  
                              width={14}
                              height={14}  
                              alt="search engine icons" />
                            <input type="text" placeholder="dd/mm/yyyy" />
                          </div>
                        </div>
                        <div class="col-lg-2 col-6 se-col start fd-col">
                          <label>Departure</label>
                          <div className="se-input-box start fd-row">
                            <Image 
                              src="/images/search-engine/calender.webp" 
                              className='img-fluid se-img'  
                              width={14}
                              height={14}  
                              alt="search engine icons" />
                            <input type="text" placeholder="dd/mm/yyyy" />
                          </div>
                        </div>
                        <div class="col-lg-2 col-6 se-col start fd-col">
                          <label>Return</label>
                          <div className="se-input-box start fd-row">
                            <Image 
                              src="/images/search-engine/calender.webp" 
                              className='img-fluid se-img'  
                              width={14}
                              height={14}  
                              alt="search engine icons" />
                            <input type="text" placeholder="dd/mm/yyyy" />
                          </div>
                        </div>
                        <div class="col-lg-2 col-6 se-col start fd-col passenger-col">
                          <label>Passengers</label>
                          <div className="se-input-box start fd-row">
                            <Image 
                              src="/images/search-engine/traveler.webp" 
                              className='img-fluid se-img'  
                              width={14}
                              height={14}  
                              alt="search engine icons" />
                            <input type="text" placeholder="2 Person" />
                          </div>
                          <div className="passenger-box start fd-col">
                            <div className="passenger-select start fd-col w-100">
                              <p className="pass-para w-100"><strong>Select Travellers</strong></p>
                              <div className="pass-type w-100 btwn fd-row">
                                <div className="trav-type start fd-col">
                                  <p><strong>Adult</strong></p>
                                  <p>(on the day of travel)</p>
                                </div>
                                <div className="add-sub-trav cent fd-row">
                                  <div className="sub-trav cent">
                                    <p>-</p>
                                  </div>
                                  <div className="trav-num cent">
                                    <p>1</p>
                                  </div>
                                  <div className="add-trav cent">
                                    <p>+</p>
                                  </div>
                                </div>
                              </div>
                               <div className="pass-type w-100 btwn fd-row">
                                <div className="trav-type start fd-col">
                                  <p><strong>Child</strong></p>
                                  <p>(2-12 YRS)</p>
                                </div>
                                <div className="add-sub-trav cent fd-row">
                                  <div className="sub-trav cent">
                                    <p>-</p>
                                  </div>
                                  <div className="trav-num cent">
                                    <p>1</p>
                                  </div>
                                  <div className="add-trav cent">
                                    <p>+</p>
                                  </div>
                                </div>
                              </div>
                               <div className="pass-type w-100 btwn fd-row">
                                <div className="trav-type start fd-col">
                                  <p><strong>Infant</strong></p>
                                  <p>(Below 2 YRS)</p>
                                </div>
                                <div className="add-sub-trav cent fd-row">
                                  <div className="sub-trav cent">
                                    <p>-</p>
                                  </div>
                                  <div className="trav-num cent">
                                    <p>1</p>
                                  </div>
                                  <div className="add-trav cent">
                                    <p>+</p>
                                  </div>
                                </div>
                              </div>
                              <p className="pass-disclaimer">Plan a group booking if you are more than 9 passengers</p>
                            </div>
                            <div className="passenger-class btwn fd-row w-100">
                              <p className="pass-para w-100"><strong>Choose Traveller Class</strong></p>
                              <button className="btn passenger-btn cent">Economy</button>
                              <button className="btn passenger-btn cent">Premium</button>
                              <button className="btn passenger-btn cent">Business</button>
                              <button className="btn passenger-btn cent">First Class</button>
                              <button className="btn passenger-done-btn w-100 cent">Done</button>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-2 col-6 se-col-button cent">
                          <button className="btn se-btn cent w-100">Search Flight</button>
                        </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
                       <div className="row se-row start flight-row">
                        <div class="col-md-3 col-6 se-col start fd-col">
                          <label>From</label>
                          <div className="se-input-box start fd-row">
                            <Image 
                              src="/images/search-engine/search.webp" 
                              className='img-fluid se-img'  
                              width={14}
                              height={14}  
                              alt="search engine icons" />
                            <input type="text" placeholder="London" />
                          </div>
                        </div>
                        <div class="col-md-3 col-6 se-col start fd-col">
                          <label>To</label>
                          <div className="se-input-box start fd-row">
                            <Image 
                              src="/images/search-engine/calender.webp" 
                              className='img-fluid se-img'  
                              width={14}
                              height={14}  
                              alt="search engine icons" />
                            <input type="text" placeholder="dd/mm/yyyy" />
                          </div>
                        </div>
                        <div class="col-md-3 col-6 se-col start fd-col">
                          <label>Departure</label>
                          <div className="se-input-box start fd-row">
                            <Image 
                              src="/images/search-engine/calender.webp" 
                              className='img-fluid se-img'  
                              width={14}
                              height={14}  
                              alt="search engine icons" />
                            <input type="text" placeholder="dd/mm/yyyy" />
                          </div>
                        </div>
                        <div class="col-md-3 col-6 se-col start fd-col passenger-col">
                          <label>Passengers</label>
                          <div className="se-input-box start fd-row">
                            <Image 
                              src="/images/search-engine/traveler.webp" 
                              className='img-fluid se-img'  
                              width={14}
                              height={14}  
                              alt="search engine icons" />
                            <input type="text" placeholder="2 Person" />
                          </div>
                           <div className="passenger-box start fd-col">
                            <div className="passenger-select start fd-col w-100">
                              <p className="pass-para w-100"><strong>Select Travellers</strong></p>
                              <div className="pass-type w-100 btwn fd-row">
                                <div className="trav-type start fd-col">
                                  <p><strong>Adult</strong></p>
                                  <p>(on the day of travel)</p>
                                </div>
                                <div className="add-sub-trav cent fd-row">
                                  <div className="sub-trav cent">
                                    <p>-</p>
                                  </div>
                                  <div className="trav-num cent">
                                    <p>1</p>
                                  </div>
                                  <div className="add-trav cent">
                                    <p>+</p>
                                  </div>
                                </div>
                              </div>
                               <div className="pass-type w-100 btwn fd-row">
                                <div className="trav-type start fd-col">
                                  <p><strong>Child</strong></p>
                                  <p>(2-12 YRS)</p>
                                </div>
                                <div className="add-sub-trav cent fd-row">
                                  <div className="sub-trav cent">
                                    <p>-</p>
                                  </div>
                                  <div className="trav-num cent">
                                    <p>1</p>
                                  </div>
                                  <div className="add-trav cent">
                                    <p>+</p>
                                  </div>
                                </div>
                              </div>
                               <div className="pass-type w-100 btwn fd-row">
                                <div className="trav-type start fd-col">
                                  <p><strong>Infant</strong></p>
                                  <p>(Below 2 YRS)</p>
                                </div>
                                <div className="add-sub-trav cent fd-row">
                                  <div className="sub-trav cent">
                                    <p>-</p>
                                  </div>
                                  <div className="trav-num cent">
                                    <p>1</p>
                                  </div>
                                  <div className="add-trav cent">
                                    <p>+</p>
                                  </div>
                                </div>
                              </div>
                              <p className="pass-disclaimer">Plan a group booking if you are more than 9 passengers</p>
                            </div>
                            <div className="passenger-class btwn fd-row w-100">
                              <p className="pass-para w-100"><strong>Choose Traveller Class</strong></p>
                              <button className="btn passenger-btn cent">Economy</button>
                              <button className="btn passenger-btn cent">Premium</button>
                              <button className="btn passenger-btn cent">Business</button>
                              <button className="btn passenger-btn cent">First Class</button>
                              <button className="btn passenger-done-btn w-100 cent">Done</button>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 se-add-trav-button start">
                          <button className="btn se-add-trav-btn cent">+ Add Another City</button>
                        </div>
                        <div class="col-md-4 col-4 se-col start fd-col">
                          <label>From</label>
                          <div className="se-input-box start fd-row">
                            <Image 
                              src="/images/search-engine/search.webp" 
                              className='img-fluid se-img'  
                              width={14}
                              height={14}  
                              alt="search engine icons" />
                            <input type="text" placeholder="London" />
                          </div>
                        </div>
                        <div class="col-md-4 col-4 se-col start fd-col">
                          <label>To</label>
                          <div className="se-input-box start fd-row">
                            <Image 
                              src="/images/search-engine/calender.webp" 
                              className='img-fluid se-img'  
                              width={14}
                              height={14}  
                              alt="search engine icons" />
                            <input type="text" placeholder="dd/mm/yyyy" />
                          </div>
                        </div>
                        <div class="col-md-4 col-4 se-col start fd-col">
                          <label>Departure</label>
                          <div className="se-input-box start fd-row">
                            <Image 
                              src="/images/search-engine/calender.webp" 
                              className='img-fluid se-img'  
                              width={14}
                              height={14}  
                              alt="search engine icons" />
                            <input type="text" placeholder="dd/mm/yyyy" />
                          </div>
                        </div>
                        <div className="col-12 se-add-trav-button start">
                          <button className="btn se-add-trav-btn cent">+ Add Another City</button>
                        </div>
                        <div class="col-md-4 col-4 se-col start fd-col">
                          <label>From</label>
                          <div className="se-input-box start fd-row">
                            <Image 
                              src="/images/search-engine/search.webp" 
                              className='img-fluid se-img'  
                              width={14}
                              height={14}  
                              alt="search engine icons" />
                            <input type="text" placeholder="London" />
                          </div>
                        </div>
                        <div class="col-md-4 col-4 se-col start fd-col">
                          <label>To</label>
                          <div className="se-input-box start fd-row">
                            <Image 
                              src="/images/search-engine/calender.webp" 
                              className='img-fluid se-img'  
                              width={14}
                              height={14}  
                              alt="search engine icons" />
                            <input type="text" placeholder="dd/mm/yyyy" />
                          </div>
                        </div>
                        <div class="col-md-4 col-4 se-col start fd-col">
                          <label>Departure</label>
                          <div className="se-input-box start fd-row">
                            <Image 
                              src="/images/search-engine/calender.webp" 
                              className='img-fluid se-img'  
                              width={14}
                              height={14}  
                              alt="search engine icons" />
                            <input type="text" placeholder="dd/mm/yyyy" />
                          </div>
                        </div>
                        <div className="col-12 se-add-trav-button start">
                          <button className="btn se-add-trav-btn cent">+ Add Another City</button>
                        </div>
                        <div class="col-md-3 col-4 se-col start fd-col">
                          <label>From</label>
                          <div className="se-input-box start fd-row">
                            <Image 
                              src="/images/search-engine/search.webp" 
                              className='img-fluid se-img'  
                              width={14}
                              height={14}  
                              alt="search engine icons" />
                            <input type="text" placeholder="London" />
                          </div>
                        </div>
                        <div class="col-md-3 col-4 se-col start fd-col">
                          <label>To</label>
                          <div className="se-input-box start fd-row">
                            <Image 
                              src="/images/search-engine/calender.webp" 
                              className='img-fluid se-img'  
                              width={14}
                              height={14}  
                              alt="search engine icons" />
                            <input type="text" placeholder="dd/mm/yyyy" />
                          </div>
                        </div>
                        <div class="col-md-3 col-4 se-col start fd-col">
                          <label>Departure</label>
                          <div className="se-input-box start fd-row">
                            <Image 
                              src="/images/search-engine/calender.webp" 
                              className='img-fluid se-img'  
                              width={14}
                              height={14}  
                              alt="search engine icons" />
                            <input type="text" placeholder="dd/mm/yyyy" />
                          </div>
                        </div>
                        <div class="col-md-3 se-col-button cent">
                          <button className="btn se-btn cent w-100">Search Flight</button>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade se-main-tp w-100" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
                <div className="row se-row start hotel-row">
                    <div class="col-lg-3 col-6 se-col start fd-col">
                      <label>Destinations</label>
                      <div className="se-input-box start fd-row">
                        <Image 
                          src="/images/search-engine/search.webp" 
                          className='img-fluid se-img'  
                          width={14}
                          height={14}  
                          alt="search engine icons" />
                        <input type="text" placeholder="London" />
                      </div>
                    </div>
                    <div class="col-lg-3 col-6 se-col start fd-col">
                      <label>Check-In</label>
                      <div className="se-input-box start fd-row">
                        <Image 
                          src="/images/search-engine/calender.webp" 
                          className='img-fluid se-img'  
                          width={14}
                          height={14}  
                          alt="search engine icons" />
                        <input type="text" placeholder="Wed 14/12/2025" />
                      </div>
                    </div>
                    <div class="col-lg-2 col-6 se-col start fd-col">
                      <label>Check-Out</label>
                      <div className="se-input-box start fd-row">
                        <Image 
                          src="/images/search-engine/calender.webp" 
                          className='img-fluid se-img'  
                          width={14}
                          height={14}  
                          alt="search engine icons" />
                        <input type="text" placeholder="Wed 14/12/2025" />
                      </div>
                    </div>
                    <div class="col-lg-2 col-6 se-col start fd-col">
                      <label>Guests & Rooms</label>
                      <div className="se-input-box start fd-row">
                        <Image 
                          src="/images/search-engine/traveler.webp" 
                          className='img-fluid se-img'  
                          width={14}
                          height={14}  
                          alt="search engine icons" />
                        <input type="text" placeholder="2 Person, 1 Room" />
                      </div>
                    </div>
                    <div class="col-lg-2 se-col-button cent">
                      <button className="btn se-btn cent w-100">Search Hotel</button>
                    </div>
                </div>
              </div>
              <div class="tab-pane fade se-main-tp w-100" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">
                <div className="row se-row start car-row">
                    <div class="col-lg-3 col-6 se-col start fd-col">
                      <label>Pick-up-Location</label>
                      <div className="se-input-box start fd-row">
                        <Image 
                          src="/images/search-engine/search.webp" 
                          className='img-fluid se-img'  
                          width={14}
                          height={14}  
                          alt="search engine icons" />
                        <input type="text" placeholder="London" />
                      </div>
                    </div>
                    <div class="col-lg-3 col-6 se-col start fd-col">
                      <label>Drop-off-Location</label>
                      <div className="se-input-box start fd-row">
                        <Image 
                          src="/images/search-engine/search.webp" 
                          className='img-fluid se-img'  
                          width={14}
                          height={14}  
                          alt="search engine icons" />
                        <input type="text" placeholder="London" />
                      </div>
                    </div>
                    <div class="col-lg-2 col-6 se-col start fd-col">
                      <label>Pick-up Date</label>
                      <div className="se-input-box start fd-row">
                        <Image 
                          src="/images/search-engine/calender.webp" 
                          className='img-fluid se-img'  
                          width={14}
                          height={14}  
                          alt="search engine icons" />
                        <input type="text" placeholder="Wed 14/12/2025" />
                      </div>
                    </div>
                    <div class="col-lg-2 col-6 se-col start fd-col">
                      <label>Drop-off Date</label>
                      <div className="se-input-box start fd-row">
                        <Image 
                          src="/images/search-engine/calender.webp" 
                          className='img-fluid se-img'  
                          width={14}
                          height={14}  
                          alt="search engine icons" />
                        <input type="text" placeholder="Wed 14/12/2025" />
                      </div>
                    </div>
                    <div class="col-lg-2 se-col-button cent">
                      <button className="btn se-btn cent w-100">Search Car</button>
                    </div>
                </div>
              </div>
              <div class="tab-pane fade se-main-tp w-100" id="nav-disabled" role="tabpanel" aria-labelledby="nav-disabled-tab" tabindex="0">
                <div className="row se-row start cruise-row">
                  <div class="col-lg-4 col-6 se-col start fd-col">
                      <label>Cruise Region</label>
                      <div className="se-input-box start fd-row">
                        <select class="form-select" aria-label="Default select example">
                          <option selected>Europe & Mediterranean</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                  </div>
                    <div class="col-lg-4 col-6 se-col start fd-col">
                      <label>Detarture Port</label>
                      <div className="se-input-box start fd-row">
                        <Image 
                          src="/images/search-engine/cruise.webp" 
                          className='img-fluid se-img'  
                          width={14}
                          height={14}  
                          alt="search engine icons" />
                        <input type="text" placeholder="Southampton, UK" />
                      </div>
                    </div>
                    <div class="col-lg-4 col-6 se-col start fd-col">
                      <label>Cruise Line</label>
                      <div className="se-input-box start fd-row">
                        <select class="form-select" aria-label="Default select example">
                          <option selected>Any Cruise Line</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-lg-3 col-6 se-col start fd-col">
                      <label>Departure Date</label>
                      <div className="se-input-box start fd-row">
                        <Image 
                          src="/images/search-engine/calender.webp" 
                          className='img-fluid se-img'  
                          width={14}
                          height={14}  
                          alt="search engine icons" />
                        <input type="text" placeholder="dd/mm/yyyy" />
                      </div>
                    </div>
                    <div class="col-lg-3 col-6 se-col start fd-col">
                      <label>Duration</label>
                      <div className="se-input-box start fd-row">
                        <select class="form-select" aria-label="Default select example">
                          <option selected>7-9 Nights</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-lg-2 col-6 se-col start fd-col">
                      <label>Cabin Type</label>
                      <div className="se-input-box start fd-row">
                        <select class="form-select" aria-label="Default select example">
                          <option selected>Any Cabin</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-lg-2 col-6 se-col start fd-col passenger-col">
                      <label>Passengers</label>
                      <div className="se-input-box start fd-row">
                        <Image 
                          src="/images/search-engine/traveler.webp" 
                          className='img-fluid se-img'  
                          width={14}
                          height={14}  
                          alt="search engine icons" />
                        <input type="text" placeholder="3 Persons" />
                      </div>
                      <div className="passenger-box start fd-col">
                            <div className="passenger-select start fd-col w-100">
                              <p className="pass-para w-100"><strong>Select Travellers</strong></p>
                              <div className="pass-type w-100 btwn fd-row">
                                <div className="trav-type start fd-col">
                                  <p><strong>Adult</strong></p>
                                  <p>(on the day of travel)</p>
                                </div>
                                <div className="add-sub-trav cent fd-row">
                                  <div className="sub-trav cent">
                                    <p>-</p>
                                  </div>
                                  <div className="trav-num cent">
                                    <p>1</p>
                                  </div>
                                  <div className="add-trav cent">
                                    <p>+</p>
                                  </div>
                                </div>
                              </div>
                               <div className="pass-type w-100 btwn fd-row">
                                <div className="trav-type start fd-col">
                                  <p><strong>Child</strong></p>
                                  <p>(2-12 YRS)</p>
                                </div>
                                <div className="add-sub-trav cent fd-row">
                                  <div className="sub-trav cent">
                                    <p>-</p>
                                  </div>
                                  <div className="trav-num cent">
                                    <p>1</p>
                                  </div>
                                  <div className="add-trav cent">
                                    <p>+</p>
                                  </div>
                                </div>
                              </div>
                               <div className="pass-type w-100 btwn fd-row">
                                <div className="trav-type start fd-col">
                                  <p><strong>Infant</strong></p>
                                  <p>(Below 2 YRS)</p>
                                </div>
                                <div className="add-sub-trav cent fd-row">
                                  <div className="sub-trav cent">
                                    <p>-</p>
                                  </div>
                                  <div className="trav-num cent">
                                    <p>1</p>
                                  </div>
                                  <div className="add-trav cent">
                                    <p>+</p>
                                  </div>
                                </div>
                              </div>
                              <p className="pass-disclaimer">Plan a group booking if you are more than 9 passengers</p>
                            </div>
                            <div className="passenger-class btwn fd-row w-100">
                              <p className="pass-para w-100"><strong>Choose Traveller Class</strong></p>
                              <button className="btn passenger-btn cent">Economy</button>
                              <button className="btn passenger-btn cent">Premium</button>
                              <button className="btn passenger-btn cent">Business</button>
                              <button className="btn passenger-btn cent">First Class</button>
                              <button className="btn passenger-done-btn w-100 cent">Done</button>
                            </div>
                      </div>
                    </div>
                    <div class="col-lg-2 col-6 se-col-button cent">
                      <button className="btn se-btn cent w-100">Search Cruise</button>
                    </div>
                  </div>
              </div>
              <div class="tab-pane fade se-main-tp w-100" id="nav-pkg" role="tabpanel" aria-labelledby="nav-pkg-tab" tabindex="0">
                  <div className="row se-row start pkg-row">
                    <div class="col-lg-3 col-6 se-col start fd-col">
                      <label>Destination</label>
                      <div className="se-input-box start fd-row">
                        <Image 
                          src="/images/search-engine/search.webp" 
                          className='img-fluid se-img'  
                          width={14}
                          height={14}  
                          alt="search engine icons" />
                        <input type="text" placeholder="London" />
                      </div>
                    </div>
                    <div class="col-lg-3 col-6 se-col start fd-col">
                      <label>Destination</label>
                      <div className="se-input-box start fd-row">
                        <Image 
                          src="/images/search-engine/calender.webp" 
                          className='img-fluid se-img'  
                          width={14}
                          height={14}  
                          alt="search engine icons" />
                        <input type="text" placeholder="Wed 14/12/2025" />
                      </div>
                    </div>
                    <div class="col-lg-2 col-6 se-col start fd-col">
                      <label>Duration(nights)</label>
                      <div className="se-input-box start fd-row">
                        <Image 
                          src="/images/search-engine/calender.webp" 
                          className='img-fluid se-img'  
                          width={14}
                          height={14}  
                          alt="search engine icons" />
                        <input type="text" placeholder="4" />
                      </div>
                    </div>
                    <div class="col-lg-2 col-6 se-col start fd-col passenger-col">
                      <label>Travelers</label>
                      <div className="se-input-box start fd-row">
                        <Image 
                          src="/images/search-engine/traveler.webp" 
                          className='img-fluid se-img'  
                          width={14}
                          height={14}  
                          alt="search engine icons" />
                        <input type="text" placeholder="3 Persons" />
                      </div>
                      <div className="passenger-box start fd-col">
                            <div className="passenger-select start fd-col w-100">
                              <p className="pass-para w-100"><strong>Select Travellers</strong></p>
                              <div className="pass-type w-100 btwn fd-row">
                                <div className="trav-type start fd-col">
                                  <p><strong>Adult</strong></p>
                                  <p>(on the day of travel)</p>
                                </div>
                                <div className="add-sub-trav cent fd-row">
                                  <div className="sub-trav cent">
                                    <p>-</p>
                                  </div>
                                  <div className="trav-num cent">
                                    <p>1</p>
                                  </div>
                                  <div className="add-trav cent">
                                    <p>+</p>
                                  </div>
                                </div>
                              </div>
                               <div className="pass-type w-100 btwn fd-row">
                                <div className="trav-type start fd-col">
                                  <p><strong>Child</strong></p>
                                  <p>(2-12 YRS)</p>
                                </div>
                                <div className="add-sub-trav cent fd-row">
                                  <div className="sub-trav cent">
                                    <p>-</p>
                                  </div>
                                  <div className="trav-num cent">
                                    <p>1</p>
                                  </div>
                                  <div className="add-trav cent">
                                    <p>+</p>
                                  </div>
                                </div>
                              </div>
                               <div className="pass-type w-100 btwn fd-row">
                                <div className="trav-type start fd-col">
                                  <p><strong>Infant</strong></p>
                                  <p>(Below 2 YRS)</p>
                                </div>
                                <div className="add-sub-trav cent fd-row">
                                  <div className="sub-trav cent">
                                    <p>-</p>
                                  </div>
                                  <div className="trav-num cent">
                                    <p>1</p>
                                  </div>
                                  <div className="add-trav cent">
                                    <p>+</p>
                                  </div>
                                </div>
                              </div>
                              <p className="pass-disclaimer">Plan a group booking if you are more than 9 passengers</p>
                            </div>
                            <div className="passenger-class btwn fd-row w-100">
                              <p className="pass-para w-100"><strong>Choose Traveller Class</strong></p>
                              <button className="btn passenger-btn cent">Economy</button>
                              <button className="btn passenger-btn cent">Premium</button>
                              <button className="btn passenger-btn cent">Business</button>
                              <button className="btn passenger-btn cent">First Class</button>
                              <button className="btn passenger-done-btn w-100 cent">Done</button>
                            </div>
                      </div>
                    </div>
                    <div class="col-lg-2 se-col-button cent">
                      <button className="btn se-btn cent w-100">Search Package</button>
                    </div>
                  </div>
              </div>
            </div>
          </div>


          <div className="col-12 mobile-search-engine-col cent fd-col">
            <nav className="mob-se-nav w-100">
              <div class="nav nav-tabs mob-se-navtab btwn fd-row w-100" id="nav-tab" role="tablist">
                <button class="nav-link active mob-nav-btn cent fd-col" id="nav-flight-tab" data-bs-toggle="tab" data-bs-target="#nav-flight" type="button" role="tab" aria-controls="nav-flight" aria-selected="true">
                  <Image 
                  src="/images/mobile-se/flight.webp" 
                  className='img-fluid mse-tab-grey-img'  
                  width={56}
                  height={57}  
                  alt="mobile tab image" />
                  <Image 
                  src="/images/mobile-se/flight-blue.webp" 
                  className='img-fluid mse-tab-blue-img'  
                  width={56}
                  height={57}  
                  alt="mobile tab image" />
                  <p>Flights</p>
                  </button>
                <button class="nav-link mob-nav-btn cent fd-col" id="nav-hotel-tab" data-bs-toggle="tab" data-bs-target="#nav-hotel" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                  <Image 
                  src="/images/mobile-se/hotel.webp" 
                  className='img-fluid mse-tab-grey-img'  
                  width={56}
                  height={57}  
                  alt="mobile tab image" />
                  <Image 
                  src="/images/mobile-se/hotel-blue.webp" 
                  className='img-fluid mse-tab-blue-img'  
                  width={56}
                  height={57}  
                  alt="mobile tab image" />
                  <p>Hotel</p>
                </button>
                <button class="nav-link mob-nav-btn cent fd-col" id="nav-car-tab" data-bs-toggle="tab" data-bs-target="#nav-car" type="button" role="tab" aria-controls="nav-car" aria-selected="false">
                  <Image 
                  src="/images/mobile-se/car.webp" 
                  className='img-fluid mse-tab-grey-img'  
                  width={56}
                  height={57}  
                  alt="mobile tab image" />
                  <Image 
                  src="/images/mobile-se/car-blue.webp" 
                  className='img-fluid mse-tab-blue-img'  
                  width={56}
                  height={57}  
                  alt="mobile tab image" />
                  <p>Car</p>
                </button>
                <button class="nav-link mob-nav-btn cent fd-col" id="nav-cruise-tab" data-bs-toggle="tab" data-bs-target="#nav-cruise" type="button" role="tab" aria-controls="nav-cruise" aria-selected="false">
                  <Image 
                  src="/images/mobile-se/cruise.webp" 
                  className='img-fluid mse-tab-grey-img'  
                  width={56}
                  height={57}  
                  alt="mobile tab image" />
                  <Image 
                  src="/images/mobile-se/cruise-blue.webp" 
                  className='img-fluid mse-tab-blue-img'  
                  width={56}
                  height={57}  
                  alt="mobile tab image" />
                  <p>Cruise</p>
                </button>
                <button class="nav-link mob-nav-btn cent fd-col" id="nav-holiday-tab" data-bs-toggle="tab" data-bs-target="#nav-holiday" type="button" role="tab" aria-controls="nav-holiday" aria-selected="false">
                  <Image 
                  src="/images/mobile-se/package.webp" 
                  className='img-fluid mse-tab-grey-img'  
                  width={56}
                  height={57}  
                  alt="mobile tab image" />
                  <Image 
                  src="/images/mobile-se/package-blue.webp" 
                  className='img-fluid mse-tab-blue-img'  
                  width={56}
                  height={57}  
                  alt="mobile tab image" />
                  <p>Holiday</p>
                </button>
              </div>
            </nav>
            <div class="tab-content mse-tc w-100" id="nav-tabContent">
              <div class="tab-pane fade show active mse-tp w-100" id="nav-flight" role="tabpanel" aria-labelledby="nav-flight-tab" tabindex="0">
                <ul class="nav nav-tabs start fd-row mb-2" id="myTab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="subflight-tab" data-bs-toggle="tab" data-bs-target="#subflight-tab-pane" type="button" role="tab" aria-controls="subflight-tab-pane" aria-selected="true">
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                        <label class="form-check-label" for="exampleRadios1">
                          One-Way
                        </label>
                      </div>
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="subflightone-tab" data-bs-toggle="tab" data-bs-target="#subflightone-tab-pane" type="button" role="tab" aria-controls="subflightone-tab-pane" aria-selected="false">
                        <div class="form-check">
                          <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                          <label class="form-check-label" for="exampleRadios2">
                            Round Trip
                          </label>
                        </div>
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="subflighttwo-tab" data-bs-toggle="tab" data-bs-target="#subflighttwo-tab-pane" type="button" role="tab" aria-controls="subflighttwo-tab-pane" aria-selected="false">
                      <div class="form-check">
                          <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" />
                          <label class="form-check-label" for="exampleRadios3">
                           Multi-City
                          </label>
                        </div></button>
                  </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                  <div class="tab-pane fade show active" id="subflight-tab-pane" role="tabpanel" aria-labelledby="subflight-tab" tabindex="0">
                      <div className="row se-row start flight-row">
                        <div class="col-lg-3 col-sm-6 se-col start fd-col">
                          <label>From Airport</label>
                          <div className="se-input-box start fd-row">
                            <Image 
                              src="/images/mobile-se/seat.webp" 
                              className='img-fluid se-img'  
                              width={14}
                              height={14}  
                              alt="search engine icons" />
                            <input type="text" placeholder="Enter departure city or airport" />
                          </div>
                        </div>
                        <div class="col-lg-3 col-sm-6 se-col start fd-col">
                          <label>To Airport</label>
                          <div className="se-input-box start fd-row">
                            <Image 
                              src="/images/mobile-se/seat.webp" 
                              className='img-fluid se-img'  
                              width={14}
                              height={14}  
                              alt="search engine icons" />
                            <input type="text" placeholder="Enter destination city or airport" />
                          </div>
                        </div>
                        <div class="col-lg-2 col-6 se-col start fd-col">
                          <label>Departure Date</label>
                          <div className="se-input-box start fd-row">
                            <Image 
                              src="/images/mobile-se/calender.webp" 
                              className='img-fluid se-img'  
                              width={14}
                              height={14}  
                              alt="search engine icons" />
                            <input type="text" placeholder="dd/mm/yyyy" />
                          </div>
                        </div>
                        <div class="col-lg-2 col-6 se-col start fd-col return-date">
                          <label>Return Date</label>
                          <div className="se-input-box start fd-row">
                            <Image 
                              src="/images/mobile-se/calender-grey.webp" 
                              className='img-fluid se-img'  
                              width={14}
                              height={14}  
                              alt="search engine icons" />
                            <input type="text" placeholder="dd/mm/yyyy" disabled />
                          </div>
                        </div>
                        <div class="col-lg-2 col-sm-6 se-col start fd-col passenger-col">
                          <label>Passengers</label>
                          <div className="se-input-box start fd-row">
                            <Image 
                              src="/images/mobile-se/profile.webp" 
                              className='img-fluid se-img'  
                              width={14}
                              height={14}  
                              alt="search engine icons" />
                            <input type="text" placeholder="2 Person" />
                          </div>
                          <div className="passenger-box start fd-col">
                            <div className="passenger-select start fd-col w-100">
                              <p className="pass-para w-100"><strong>Select Travellers</strong></p>
                              <div className="pass-type w-100 btwn fd-row">
                                <div className="trav-type start fd-col">
                                  <p><strong>Adult</strong></p>
                                  <p>(on the day of travel)</p>
                                </div>
                                <div className="add-sub-trav cent fd-row">
                                  <div className="sub-trav cent">
                                    <p>-</p>
                                  </div>
                                  <div className="trav-num cent">
                                    <p>1</p>
                                  </div>
                                  <div className="add-trav cent">
                                    <p>+</p>
                                  </div>
                                </div>
                              </div>
                               <div className="pass-type w-100 btwn fd-row">
                                <div className="trav-type start fd-col">
                                  <p><strong>Child</strong></p>
                                  <p>(2-12 YRS)</p>
                                </div>
                                <div className="add-sub-trav cent fd-row">
                                  <div className="sub-trav cent">
                                    <p>-</p>
                                  </div>
                                  <div className="trav-num cent">
                                    <p>1</p>
                                  </div>
                                  <div className="add-trav cent">
                                    <p>+</p>
                                  </div>
                                </div>
                              </div>
                               <div className="pass-type w-100 btwn fd-row">
                                <div className="trav-type start fd-col">
                                  <p><strong>Infant</strong></p>
                                  <p>(Below 2 YRS)</p>
                                </div>
                                <div className="add-sub-trav cent fd-row">
                                  <div className="sub-trav cent">
                                    <p>-</p>
                                  </div>
                                  <div className="trav-num cent">
                                    <p>1</p>
                                  </div>
                                  <div className="add-trav cent">
                                    <p>+</p>
                                  </div>
                                </div>
                              </div>
                              <p className="pass-disclaimer">Plan a group booking if you are more than 9 passengers</p>
                            </div>
                            <div className="passenger-class btwn fd-row w-100">
                              <p className="pass-para w-100"><strong>Choose Traveller Class</strong></p>
                              <button className="btn passenger-btn cent">Economy</button>
                              <button className="btn passenger-btn cent">Premium</button>
                              <button className="btn passenger-btn cent">Business</button>
                              <button className="btn passenger-btn cent">First Class</button>
                              <button className="btn passenger-done-btn w-100 cent">Done</button>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-2 se-col-button cent">
                          <button className="btn se-btn cent w-100">Search Flight</button>
                        </div>
                      </div>
                  </div>
                  <div class="tab-pane fade" id="subflightone-tab-pane" role="tabpanel" aria-labelledby="subflightone-tab" tabindex="0">
                    <div className="row se-row start flight-row">
                        <div class="col-lg-2 col-sm-6 se-col start fd-col">
                          <label>From Airport</label>
                          <div className="se-input-box start fd-row">
                            <Image 
                              src="/images/mobile-se/seat.webp" 
                              className='img-fluid se-img'  
                              width={14}
                              height={14}  
                              alt="search engine icons" />
                            <input type="text" placeholder="Enter departure city or airport" />
                          </div>
                        </div>
                        <div class="col-lg-2 col-sm-6 se-col start fd-col">
                          <label>To Airport</label>
                          <div className="se-input-box start fd-row">
                            <Image 
                              src="/images/mobile-se/seat.webp" 
                              className='img-fluid se-img'  
                              width={14}
                              height={14}  
                              alt="search engine icons" />
                            <input type="text" placeholder="Enter destination city or airport" />
                          </div>
                        </div>
                        <div class="col-lg-2 col-6 se-col start fd-col">
                          <label>Departure Date</label>
                          <div className="se-input-box start fd-row">
                            <Image 
                              src="/images/mobile-se/calender.webp" 
                              className='img-fluid se-img'  
                              width={14}
                              height={14}  
                              alt="search engine icons" />
                            <input type="text" placeholder="dd/mm/yyyy" />
                          </div>
                        </div>
                        <div class="col-lg-2 col-6 se-col start fd-col">
                          <label>Return Date</label>
                          <div className="se-input-box start fd-row">
                            <Image 
                              src="/images/mobile-se/calender.webp" 
                              className='img-fluid se-img'  
                              width={14}
                              height={14}  
                              alt="search engine icons" />
                            <input type="text" placeholder="dd/mm/yyyy" />
                          </div>
                        </div>
                        <div class="col-lg-2 col-sm-6 se-col start fd-col passenger-col">
                          <label>Passengers</label>
                          <div className="se-input-box start fd-row">
                            <Image 
                              src="/images/mobile-se/profile.webp" 
                              className='img-fluid se-img'  
                              width={14}
                              height={14}  
                              alt="search engine icons" />
                            <input type="text" placeholder="2 Person" />
                          </div>
                          <div className="passenger-box start fd-col">
                            <div className="passenger-select start fd-col w-100">
                              <p className="pass-para w-100"><strong>Select Travellers</strong></p>
                              <div className="pass-type w-100 btwn fd-row">
                                <div className="trav-type start fd-col">
                                  <p><strong>Adult</strong></p>
                                  <p>(on the day of travel)</p>
                                </div>
                                <div className="add-sub-trav cent fd-row">
                                  <div className="sub-trav cent">
                                    <p>-</p>
                                  </div>
                                  <div className="trav-num cent">
                                    <p>1</p>
                                  </div>
                                  <div className="add-trav cent">
                                    <p>+</p>
                                  </div>
                                </div>
                              </div>
                               <div className="pass-type w-100 btwn fd-row">
                                <div className="trav-type start fd-col">
                                  <p><strong>Child</strong></p>
                                  <p>(2-12 YRS)</p>
                                </div>
                                <div className="add-sub-trav cent fd-row">
                                  <div className="sub-trav cent">
                                    <p>-</p>
                                  </div>
                                  <div className="trav-num cent">
                                    <p>1</p>
                                  </div>
                                  <div className="add-trav cent">
                                    <p>+</p>
                                  </div>
                                </div>
                              </div>
                               <div className="pass-type w-100 btwn fd-row">
                                <div className="trav-type start fd-col">
                                  <p><strong>Infant</strong></p>
                                  <p>(Below 2 YRS)</p>
                                </div>
                                <div className="add-sub-trav cent fd-row">
                                  <div className="sub-trav cent">
                                    <p>-</p>
                                  </div>
                                  <div className="trav-num cent">
                                    <p>1</p>
                                  </div>
                                  <div className="add-trav cent">
                                    <p>+</p>
                                  </div>
                                </div>
                              </div>
                              <p className="pass-disclaimer">Plan a group booking if you are more than 9 passengers</p>
                            </div>
                            <div className="passenger-class btwn fd-row w-100">
                              <p className="pass-para w-100"><strong>Choose Traveller Class</strong></p>
                              <button className="btn passenger-btn cent">Economy</button>
                              <button className="btn passenger-btn cent">Premium</button>
                              <button className="btn passenger-btn cent">Business</button>
                              <button className="btn passenger-btn cent">First Class</button>
                              <button className="btn passenger-done-btn w-100 cent">Done</button>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-2 col-sm-6 se-col-button cent">
                          <button className="btn se-btn cent w-100">Search Flight</button>
                        </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="subflighttwo-tab-pane" role="tabpanel" aria-labelledby="subflighttwo-tab" tabindex="0">
                       <div className="row se-row start flight-row">
                        <div class="col-md-3 col-sm-6 se-col start fd-col">
                          <label>From Airport</label>
                          <div className="se-input-box start fd-row">
                            <Image 
                              src="/images/mobile-se/seat.webp" 
                              className='img-fluid se-img'  
                              width={14}
                              height={14}  
                              alt="search engine icons" />
                            <input type="text" placeholder="Enter departure city or airport" />
                          </div>
                        </div>
                        <div class="col-md-3 col-sm-6 se-col start fd-col">
                          <label>To Airport</label>
                          <div className="se-input-box start fd-row">
                            <Image 
                              src="/images/mobile-se/calender.webp" 
                              className='img-fluid se-img'  
                              width={14}
                              height={14}  
                              alt="search engine icons" />
                            <input type="text" placeholder="Enter destination city or airport" />
                          </div>
                        </div>
                        <div class="col-md-3 col-sm-6 se-col start fd-col">
                          <label>Departure Date</label>
                          <div className="se-input-box start fd-row">
                            <Image 
                              src="/images/mobile-se/calender.webp" 
                              className='img-fluid se-img'  
                              width={14}
                              height={14}  
                              alt="search engine icons" />
                            <input type="text" placeholder="dd/mm/yyyy" />
                          </div>
                        </div>
                        <div class="col-md-3 col-sm-6 se-col start fd-col passenger-col">
                          <label>Add Travelers</label>
                          <div className="se-input-box start fd-row">
                            <Image 
                              src="/images/mobile-se/profile.webp" 
                              className='img-fluid se-img'  
                              width={14}
                              height={14}  
                              alt="search engine icons" />
                            <input type="text" placeholder="Economy-Adults: 1, Children:0" />
                          </div>
                           <div className="passenger-box start fd-col">
                            <div className="passenger-select start fd-col w-100">
                              <p className="pass-para w-100"><strong>Select Travellers</strong></p>
                              <div className="pass-type w-100 btwn fd-row">
                                <div className="trav-type start fd-col">
                                  <p><strong>Adult</strong></p>
                                  <p>(on the day of travel)</p>
                                </div>
                                <div className="add-sub-trav cent fd-row">
                                  <div className="sub-trav cent">
                                    <p>-</p>
                                  </div>
                                  <div className="trav-num cent">
                                    <p>1</p>
                                  </div>
                                  <div className="add-trav cent">
                                    <p>+</p>
                                  </div>
                                </div>
                              </div>
                               <div className="pass-type w-100 btwn fd-row">
                                <div className="trav-type start fd-col">
                                  <p><strong>Child</strong></p>
                                  <p>(2-12 YRS)</p>
                                </div>
                                <div className="add-sub-trav cent fd-row">
                                  <div className="sub-trav cent">
                                    <p>-</p>
                                  </div>
                                  <div className="trav-num cent">
                                    <p>1</p>
                                  </div>
                                  <div className="add-trav cent">
                                    <p>+</p>
                                  </div>
                                </div>
                              </div>
                               <div className="pass-type w-100 btwn fd-row">
                                <div className="trav-type start fd-col">
                                  <p><strong>Infant</strong></p>
                                  <p>(Below 2 YRS)</p>
                                </div>
                                <div className="add-sub-trav cent fd-row">
                                  <div className="sub-trav cent">
                                    <p>-</p>
                                  </div>
                                  <div className="trav-num cent">
                                    <p>1</p>
                                  </div>
                                  <div className="add-trav cent">
                                    <p>+</p>
                                  </div>
                                </div>
                              </div>
                              <p className="pass-disclaimer">Plan a group booking if you are more than 9 passengers</p>
                            </div>
                            <div className="passenger-class btwn fd-row w-100">
                              <p className="pass-para w-100"><strong>Choose Traveller Class</strong></p>
                              <button className="btn passenger-btn cent">Economy</button>
                              <button className="btn passenger-btn cent">Premium</button>
                              <button className="btn passenger-btn cent">Business</button>
                              <button className="btn passenger-btn cent">First Class</button>
                              <button className="btn passenger-done-btn w-100 cent">Done</button>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 se-add-trav-button start">
                          <button className="btn se-add-trav-btn cent">+ Add Flight</button>
                        </div>
                        <div class="col-md-4 col-sm-4 col-6 se-col start fd-col">
                          <label>From Airport</label>
                          <div className="se-input-box start fd-row">
                            <Image 
                              src="/images/mobile-se/seat.webp" 
                              className='img-fluid se-img'  
                              width={14}
                              height={14}  
                              alt="search engine icons" />
                            <input type="text" placeholder="London" />
                          </div>
                        </div>
                        <div class="col-md-4 col-sm-4 col-6 se-col start fd-col">
                          <label>To Airport</label>
                          <div className="se-input-box start fd-row">
                            <Image 
                              src="/images/mobile-se/seat.webp" 
                              className='img-fluid se-img'  
                              width={14}
                              height={14}  
                              alt="search engine icons" />
                            <input type="text" placeholder="New York" />
                          </div>
                        </div>
                        <div class="col-md-4 col-sm-4 se-col start fd-col">
                          <label>Departure Date</label>
                          <div className="se-input-box start fd-row">
                            <Image 
                              src="/images/mobile-se/calender.webp" 
                              className='img-fluid se-img'  
                              width={14}
                              height={14}  
                              alt="search engine icons" />
                            <input type="text" placeholder="dd/mm/yyyy" />
                          </div>
                        </div>
                        <div className="col-12 se-add-trav-button start">
                          <button className="btn se-add-trav-btn cent">+ Add Flight</button>
                        </div>
                        <div class="col-md-3 se-col-button cent">
                          <button className="btn se-btn cent w-100">Search Flight</button>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade mse-tp w-100" id="nav-hotel" role="tabpanel" aria-labelledby="nav-hotel-tab" tabindex="0">
                <div className="row mb-search-engine-row start m-car-se">
                  <div class="col-12 se-col start fd-col">
                    <label>Destination</label>
                    <div className="se-input-box start fd-row m_pkg-row">
                      <Image 
                        src="/images/mobile-se/location.webp" 
                        className='img-fluid mb_se-img'  
                        width={52}
                        height={52}  
                        alt="search engine icons" />
                      <input type="text" placeholder="Enter Destination" />
                    </div>
                  </div>
                  <div class="col-6 se-col start fd-col">
                    <label>Check-In</label>
                    <div className="se-input-box start fd-row m_pkg-row">
                      <Image 
                        src="/images/mobile-se/calender.webp" 
                        className='img-fluid mb_se-img'  
                        width={52}
                        height={52}  
                        alt="search engine icons" />
                      <input type="text" placeholder="MM/DD/YYYY" />
                    </div>
                  </div>
                  <div class="col-6 se-col start fd-col">
                    <label>Check-Out</label>
                    <div className="se-input-box start fd-row m_pkg-row">
                      <Image 
                        src="/images/mobile-se/calender.webp" 
                        className='img-fluid mb_se-img'  
                        width={52}
                        height={52}  
                        alt="search engine icons" />
                      <input type="text" placeholder="MM/DD/YYYY" />
                    </div>
                  </div>
                  <div class="col-12 se-col start fd-col">
                    <label>Guest & Rooms</label>
                    <div className="se-input-box start fd-row m_pkg-row">
                      <Image 
                        src="/images/mobile-se/profile.webp" 
                        className='img-fluid mb_se-img'  
                        width={52}
                        height={52}  
                        alt="search engine icons" />
                      <input type="text" placeholder="Enter Guest and Rooms" />
                    </div>
                  </div>
                  <div class="col-12 se-col-button cent">
                    <button className="btn se-btn cent w-100">Search Hotel</button>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade mse-tp w-100" id="nav-car" role="tabpanel" aria-labelledby="nav-car-tab" tabindex="0">
                <div className="row mb-search-engine-row start m-car-se">
                  <div class="col-6 se-col start fd-col">
                    <label>Pick-up Location</label>
                    <div className="se-input-box start fd-row m_pkg-row">
                      <Image 
                        src="/images/mobile-se/location.webp" 
                        className='img-fluid mb_se-img'  
                        width={52}
                        height={52}  
                        alt="search engine icons" />
                      <input type="text" placeholder="London" />
                    </div>
                  </div>
                  <div class="col-6 se-col start fd-col">
                    <label>Drop-off Location</label>
                    <div className="se-input-box start fd-row m_pkg-row">
                      <Image 
                        src="/images/mobile-se/location.webp" 
                        className='img-fluid mb_se-img'  
                        width={52}
                        height={52}  
                        alt="search engine icons" />
                      <input type="text" placeholder="London" />
                    </div>
                  </div>
                  <div class="col-6 se-col start fd-col">
                    <label>Pick-up Date</label>
                    <div className="se-input-box start fd-row m_pkg-row">
                      <Image 
                        src="/images/mobile-se/calender.webp" 
                        className='img-fluid mb_se-img'  
                        width={52}
                        height={52}  
                        alt="search engine icons" />
                      <input type="text" placeholder="MM/DD/YYYY" />
                    </div>
                  </div>
                  <div class="col-6 se-col start fd-col">
                    <label>Drop-off Date</label>
                    <div className="se-input-box start fd-row m_pkg-row">
                      <Image 
                        src="/images/mobile-se/calender.webp" 
                        className='img-fluid mb_se-img'  
                        width={52}
                        height={52}  
                        alt="search engine icons" />
                      <input type="text" placeholder="MM/DD/YYYY" />
                    </div>
                  </div>
                  <div class="col-12 se-col-button cent">
                    <button className="btn se-btn cent w-100">Search Car</button>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade mse-tp w-100" id="nav-cruise" role="tabpanel" aria-labelledby="nav-cruise-tab" tabindex="0">
                <div className="row mb-search-engine-row start m-cruise-se">
                  <div class="col-12 se-col start fd-col">
                    <label>Cruise Region</label>
                    <div className="se-input-box start fd-row m_pkg-row">
                      <Image 
                        src="/images/mobile-se/location.webp" 
                        className='img-fluid mb_se-img'  
                        width={52}
                        height={52}  
                        alt="search engine icons" />
                      <select class="form-select" aria-label="Default select example">
                          <option selected>Europe & Mediterranean</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                    </div>
                  </div>
                  <div class="col-6 se-col start fd-col">
                    <label>Departure Port</label>
                    <div className="se-input-box start fd-row m_pkg-row">
                      <Image 
                        src="/images/mobile-se/port.webp" 
                        className='img-fluid mb_se-img'  
                        width={52}
                        height={52}  
                        alt="search engine icons" />
                      <input type="text" placeholder="New York, USA" />
                    </div>
                  </div>
                  <div class="col-6 se-col start fd-col">
                    <label>Cruise Line</label>
                    <div className="se-input-box start fd-row m_pkg-row">
                      <Image 
                        src="/images/mobile-se/ship.webp" 
                        className='img-fluid mb_se-img'  
                        width={52}
                        height={52}  
                        alt="search engine icons" />
                      <select class="form-select" aria-label="Default select example">
                          <option selected>Any Cruise</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                    </div>
                  </div>
                  <div class="col-6 se-col start fd-col">
                    <label>Departure Date</label>
                    <div className="se-input-box start fd-row m_pkg-row">
                      <Image 
                        src="/images/mobile-se/calender.webp" 
                        className='img-fluid mb_se-img'  
                        width={52}
                        height={52}  
                        alt="search engine icons" />
                      <input type="text" placeholder="DD/MM/YYYY" />
                    </div>
                  </div>
                  <div class="col-6 se-col start fd-col">
                    <label>Duration</label>
                    <div className="se-input-box start fd-row m_pkg-row">
                      <Image 
                        src="/images/mobile-se/time.webp" 
                        className='img-fluid mb_se-img'  
                        width={52}
                        height={52}  
                        alt="search engine icons" />
                      <select class="form-select" aria-label="Default select example">
                          <option selected>7-9 nights</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                    </div>
                  </div>
                  <div class="col-sm-6 se-col start fd-col">
                    <label>Cabin Type</label>
                    <div className="se-input-box start fd-row m_pkg-row">
                      <Image 
                        src="/images/mobile-se/cabin.webp" 
                        className='img-fluid mb_se-img'  
                        width={52}
                        height={52}  
                        alt="search engine icons" />
                      <select class="form-select" aria-label="Default select example">
                          <option selected>Any Cabin</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                    </div>
                  </div>
                  <div class="col-sm-6 se-col start fd-col passenger-col">
                    <label>Passenger Count</label>
                    <div className="se-input-box start fd-row m_pkg-row">
                      <Image 
                        src="/images/mobile-se/profile.webp" 
                        className='img-fluid mb_se-img'  
                        width={52}
                        height={52}  
                        alt="search engine icons" />
                      <input type="text" placeholder="1 Traveller" />
                    </div>
                     <div className="passenger-box start fd-col">
                            <div className="passenger-select start fd-col w-100">
                              <p className="pass-para w-100"><strong>Select Travellers</strong></p>
                              <div className="pass-type w-100 btwn fd-row">
                                <div className="trav-type start fd-col">
                                  <p><strong>Adult</strong></p>
                                  <p>(on the day of travel)</p>
                                </div>
                                <div className="add-sub-trav cent fd-row">
                                  <div className="sub-trav cent">
                                    <p>-</p>
                                  </div>
                                  <div className="trav-num cent">
                                    <p>1</p>
                                  </div>
                                  <div className="add-trav cent">
                                    <p>+</p>
                                  </div>
                                </div>
                              </div>
                               <div className="pass-type w-100 btwn fd-row">
                                <div className="trav-type start fd-col">
                                  <p><strong>Child</strong></p>
                                  <p>(2-12 YRS)</p>
                                </div>
                                <div className="add-sub-trav cent fd-row">
                                  <div className="sub-trav cent">
                                    <p>-</p>
                                  </div>
                                  <div className="trav-num cent">
                                    <p>1</p>
                                  </div>
                                  <div className="add-trav cent">
                                    <p>+</p>
                                  </div>
                                </div>
                              </div>
                               <div className="pass-type w-100 btwn fd-row">
                                <div className="trav-type start fd-col">
                                  <p><strong>Infant</strong></p>
                                  <p>(Below 2 YRS)</p>
                                </div>
                                <div className="add-sub-trav cent fd-row">
                                  <div className="sub-trav cent">
                                    <p>-</p>
                                  </div>
                                  <div className="trav-num cent">
                                    <p>1</p>
                                  </div>
                                  <div className="add-trav cent">
                                    <p>+</p>
                                  </div>
                                </div>
                              </div>
                              <p className="pass-disclaimer">Plan a group booking if you are more than 9 passengers</p>
                            </div>
                            <div className="passenger-class btwn fd-row w-100">
                              <p className="pass-para w-100"><strong>Choose Traveller Class</strong></p>
                              <button className="btn passenger-btn cent">Economy</button>
                              <button className="btn passenger-btn cent">Premium</button>
                              <button className="btn passenger-btn cent">Business</button>
                              <button className="btn passenger-btn cent">First Class</button>
                              <button className="btn passenger-done-btn w-100 cent">Done</button>
                            </div>
                      </div>
                  </div>
                  <div class="col-12 se-col-button cent">
                    <button className="btn se-btn cent w-100">Submit Query</button>
                  </div>
                  <div className="col-12 se-cruise-info start fd-row">
                    <Image 
                        src="/images/mobile-se/cruise-call-one.webp" 
                        className='img-fluid mb_se-img'  
                        width={28}
                        height={28}  
                        alt="search engine icons" />
                    <div className="se-cruise-info-content start fd-col">
                      <p><span>Need Help? Call Expert</span></p>
                      <p>Get 24/7 expert help to find the perfect cruise for your style and budget.</p>
                      <div className="se-cruise-info-content-button start fd-row">
                        <button className="btn se-cruise-info-content-btn cent fd-row">
                          <Image 
                            src="/images/mobile-se/cruise-call-one.webp" 
                            className='img-fluid mb_se-btn-img'  
                            width={28}
                            height={28}  
                            alt="search engine icons" />
                          <a href="tel:+1-000-000-0000">+1-000-000-0000</a>                        
                          </button>
                        <p>Available 24/7</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade mse-tp w-100" id="nav-holiday" role="tabpanel" aria-labelledby="nav-holiday-tab" tabindex="0">
                <div className="row mb-search-engine-row start m-pkg-se">
                  <div class="col-12 se-col start fd-col">
                    <label>Destination</label>
                    <div className="se-input-box start fd-row m_pkg-row">
                      <Image 
                        src="/images/mobile-se/location.webp" 
                        className='img-fluid mb_se-img'  
                        width={52}
                        height={52}  
                        alt="search engine icons" />
                      <input type="text" placeholder="London" />
                    </div>
                  </div>
                  <div class="col-6 se-col start fd-col">
                    <label>Departure Date</label>
                    <div className="se-input-box start fd-row m_pkg-row">
                      <Image 
                        src="/images/mobile-se/calender.webp" 
                        className='img-fluid mb_se-img'  
                        width={52}
                        height={52}  
                        alt="search engine icons" />
                      <input type="text" placeholder="MM/DD/YYYY" />
                    </div>
                  </div>
                  <div class="col-6 se-col start fd-col">
                    <label>Duration (nights)</label>
                    <div className="se-input-box start fd-row m_pkg-row">
                      <Image 
                        src="/images/mobile-se/calender.webp" 
                        className='img-fluid mb_se-img'  
                        width={52}
                        height={52}  
                        alt="search engine icons" />
                      <input type="text" placeholder="MM/DD/YYYY" />
                    </div>
                  </div>
                  <div class="col-12 se-col start fd-col passenger-col">
                    <label>Traveller</label>
                    <div className="se-input-box start fd-row m_pkg-row">
                      <Image 
                        src="/images/mobile-se/profile.webp" 
                        className='img-fluid mb_se-img'  
                        width={52}
                        height={52}  
                        alt="search engine icons" />
                      <input type="text" placeholder="1 Traveller" />
                    </div>
                     <div className="passenger-box start fd-col">
                            <div className="passenger-select start fd-col w-100">
                              <p className="pass-para w-100"><strong>Select Travellers</strong></p>
                              <div className="pass-type w-100 btwn fd-row">
                                <div className="trav-type start fd-col">
                                  <p><strong>Adult</strong></p>
                                  <p>(on the day of travel)</p>
                                </div>
                                <div className="add-sub-trav cent fd-row">
                                  <div className="sub-trav cent">
                                    <p>-</p>
                                  </div>
                                  <div className="trav-num cent">
                                    <p>1</p>
                                  </div>
                                  <div className="add-trav cent">
                                    <p>+</p>
                                  </div>
                                </div>
                              </div>
                               <div className="pass-type w-100 btwn fd-row">
                                <div className="trav-type start fd-col">
                                  <p><strong>Child</strong></p>
                                  <p>(2-12 YRS)</p>
                                </div>
                                <div className="add-sub-trav cent fd-row">
                                  <div className="sub-trav cent">
                                    <p>-</p>
                                  </div>
                                  <div className="trav-num cent">
                                    <p>1</p>
                                  </div>
                                  <div className="add-trav cent">
                                    <p>+</p>
                                  </div>
                                </div>
                              </div>
                               <div className="pass-type w-100 btwn fd-row">
                                <div className="trav-type start fd-col">
                                  <p><strong>Infant</strong></p>
                                  <p>(Below 2 YRS)</p>
                                </div>
                                <div className="add-sub-trav cent fd-row">
                                  <div className="sub-trav cent">
                                    <p>-</p>
                                  </div>
                                  <div className="trav-num cent">
                                    <p>1</p>
                                  </div>
                                  <div className="add-trav cent">
                                    <p>+</p>
                                  </div>
                                </div>
                              </div>
                              <p className="pass-disclaimer">Plan a group booking if you are more than 9 passengers</p>
                            </div>
                            <div className="passenger-class btwn fd-row w-100">
                              <p className="pass-para w-100"><strong>Choose Traveller Class</strong></p>
                              <button className="btn passenger-btn cent">Economy</button>
                              <button className="btn passenger-btn cent">Premium</button>
                              <button className="btn passenger-btn cent">Business</button>
                              <button className="btn passenger-btn cent">First Class</button>
                              <button className="btn passenger-done-btn w-100 cent">Done</button>
                            </div>
                      </div>
                  </div>
                  <div class="col-12 se-col start fd-col lead-passenger">
                    <label className="w-100">Name of Lead Passenger</label>
                    <div className="se-input-box start fd-row m_pkg-row">
                      <input type="text" placeholder="First Name" />
                    </div>
                    <div className="se-input-box start fd-row m_pkg-row">
                      <input type="text" placeholder="Last Name" />
                    </div>
                  </div>
                  <div class="col-12 se-col start fd-col">
                    <label>Email Address</label>
                    <div className="se-input-box start fd-row m_pkg-row">
                      <Image 
                        src="/images/mobile-se/pkg-email.webp" 
                        className='img-fluid mb_se-img'  
                        width={26}
                        height={26}  
                        alt="search engine icons" />
                      <input type="text" placeholder="xyz@abc.com" />
                    </div>
                  </div>
                  <div class="col-12 se-col start fd-col">
                    <label>Phone Number</label>
                    <div className="se-input-box start fd-row m_pkg-row">
                      <Image 
                        src="/images/mobile-se/pkg-call.webp" 
                        className='img-fluid mb_se-img'  
                        width={52}
                        height={52}  
                        alt="search engine icons" />
                      <input type="text" placeholder="Phone" />
                    </div>
                  </div>
                  <div class="col-12 se-col-button cent">
                    <button className="btn se-btn cent w-100">Submit Query</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> {/* homepage banner ends */}
      </section>

      <div className="container homepage_c start fd-col"> 
        <div className="row homepage_exclusive-savings start common-gap"> {/* deals starts */}
            <div className="col-12 homepage_exclusive-savings-heading">
              <h2>Travel Smart, Save Big  </h2>
            </div>
            <div className="col-12 homepage_exclusive-savings-boxes btwn fd-row">
              <div className="hp_exc-saving-box cent fd-col">
                <Image 
                  src="/images/home/image-1.webp" 
                  className='img-fluid deal-img'  
                  width={226}
                  height={267}  
                  alt="Deal image" />
                <div className="hp_exc-saving-heading cent">
                  <p><strong>Flights Deals</strong></p>
                </div>
                <div className="hp_exc-saving-info start fd-col">
                    <p>Unlock 20% off on your next flight booking today only.</p>
                    <button className="btn hp_exc-saving-btn cent">View Deals</button>
                </div>
              </div>
              <div className="hp_exc-saving-box cent fd-col">
                <Image 
                  src="/images/home/image-2.webp" 
                  className='img-fluid deal-img'  
                  width={226}
                  height={267}  
                  alt="Deal image" />
                <div className="hp_exc-saving-heading cent">
                  <p><strong>Holiday Deals</strong></p>
                </div>
                <div className="hp_exc-saving-info start fd-col">
                    <p>Unlock 20% off on your next holiday package booking today only.</p>
                    <button className="btn hp_exc-saving-btn cent">View Deals</button>
                </div>
              </div>
              <div className="hp_exc-saving-box cent fd-col">
                <Image 
                  src="/images/home/image-3.webp" 
                  className='img-fluid deal-img'  
                  width={226}
                  height={267}  
                  alt="Deal image" />
                <div className="hp_exc-saving-heading cent">
                  <p><strong>Hotel Deals</strong></p>
                </div>
                <div className="hp_exc-saving-info start fd-col">
                    <p>Unlock 20% off on your next hotel stay reservation today only.</p>
                    <button className="btn hp_exc-saving-btn cent">View Deals</button>
                </div>
              </div>
              <div className="hp_exc-saving-box cent fd-col">
                <Image 
                  src="/images/home/image-4.webp" 
                  className='img-fluid deal-img'  
                  width={226}
                  height={267}  
                  alt="Deal image" />
                <div className="hp_exc-saving-heading cent">
                  <p><strong>Car Rental Deals</strong></p>
                </div>
                <div className="hp_exc-saving-info start fd-col">
                    <p>Unlock 20% off on your next car rental booking today only.</p>
                    <button className="btn hp_exc-saving-btn cent">View Deals</button>
                </div>
              </div>
              <div className="hp_exc-saving-box cent fd-col resp-first-hide">
                <Image 
                  src="/images/home/image-5.webp" 
                  className='img-fluid deal-img'  
                  width={226}
                  height={267}  
                  alt="Deal image" />
                <div className="hp_exc-saving-heading cent">
                  <p><strong>Destination Deals</strong></p>
                </div>
                <div className="hp_exc-saving-info start fd-col">
                    <p>Unlock 20% off on your next destination adventure booking today only.</p>
                    <button className="btn hp_exc-saving-btn cent">View Deals</button>
                </div>
              </div>
            </div>
        </div> {/* deals ends */}

        <div className="row homepage_destinations start common-gap"> {/* destination starts */}
          <div className="col-12 homepage_destinations-heading">
              <h2>Explore the World’s Most Iconic Destinations</h2>
          </div>
          <div className="col-12 homepage_destinations-boxes btwn fd-row">
            <div className="homepage_desti-box start fd-col">
              <Image 
                  src="/images/home/place-1.webp" 
                  className='img-fluid destination-img'  
                  width={226}
                  height={267}  
                  alt="Destination image" />
              <div className="home-destiname cent fd-col">
                <p><strong>New York</strong></p>
              </div>
            </div>
             <div className="homepage_desti-box start fd-col">
              <Image 
                  src="/images/home/place-2.webp" 
                  className='img-fluid destination-img'  
                  width={226}
                  height={267}  
                  alt="Destination image" />
              <div className="home-destiname cent fd-col">
                <p><strong>London</strong></p>
              </div>
            </div>
             <div className="homepage_desti-box start fd-col">
              <Image 
                  src="/images/home/place-3.webp" 
                  className='img-fluid destination-img'  
                  width={226}
                  height={267}  
                  alt="Destination image" />
              <div className="home-destiname cent fd-col">
                <p><strong>Thailand</strong></p>
              </div>
            </div>
             <div className="homepage_desti-box start fd-col">
              <Image 
                  src="/images/home/place-4.webp" 
                  className='img-fluid destination-img'  
                  width={226}
                  height={267}  
                  alt="Destination image" />
              <div className="home-destiname cent fd-col">
                <p><strong>Dubai</strong></p>
              </div>
            </div>
             <div className="homepage_desti-box start fd-col resp-first-hide">
              <Image 
                  src="/images/home/place-5.webp" 
                  className='img-fluid destination-img'  
                  width={226}
                  height={267}  
                  alt="Destination image" />
              <div className="home-destiname cent fd-col">
                <p><strong>Maldives</strong></p>
              </div>
            </div>
          </div>
        </div> {/* destination ends */}

        <div className="row homepage-midbanner"> {/* midbanner starts */}
          <div className="col-sm-3 col-4 homepage-midbanner-firstimage cent">
               <Image 
                  src="/images/home/girl-image.webp" 
                  className='img-fluid midbanner-img-one'  
                  width={204}
                  height={192}  
                  alt="midbanner image" />
          </div>
          <div className="col-lg-6 col-sm-9 col-8 homepage-midbanner-content start fd-col">
            <h4>Book cheap flight tickets with our top online travel agency. Secure international and domestic flights easily. Book your flight now! </h4>
            <a href="tel:+1-000-000-0000">Call us at <strong>+1-000-000-0000</strong> -we're here to help.</a>
          </div>
          <div className="col-3 homepage-midbanner-secondimage cent resp-first-hide">
            <Image 
                  src="/images/home/baggage.webp" 
                  className='img-fluid midbanner-img'  
                  width={153}
                  height={186}  
                  alt="midbanner image" />
          </div>
        </div> {/* midbanner ends */}

        <div className="row homepage_card start common-gap"> {/* cards starts */}
          <div className="col-12 homepage_card-heading">
            <h3>What's Next</h3>
          </div>
          <div className="col-lg-6 homepage_card-col">
            <div className="homepage_card-box start fd-col">
              <Image 
                  src="/images/home/cruise.webp" 
                  className='img-fluid card-img'  
                  width={640}
                  height={231}  
                  alt="card image" />
              <div className="homepage_card-content cent fd-col">
                <p>Get ready to experience our luxury cruise services with exclusive offers and unforgettable journeys.</p>
                <p><span>Coming Soon</span></p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 homepage_card-col">
            <div className="homepage_card-box start fd-col">
              <Image 
                  src="/images/home/car-rental.webp" 
                  className='img-fluid card-img'  
                  width={640}
                  height={231}  
                  alt="card image" />
              <div className="homepage_card-content cent fd-col">
                <p>Get ready for the premium car rental services coming your way soon, making travel convenient and affordable like never before.</p>
                <p><span>Coming Soon</span></p>
              </div>
            </div>
          </div>
        </div> {/* cards ends */}

        <div className="row homepage_flight-route start common-gap"> {/* flight route starts */}
          <div className="col-12 homepage_flight-route-heading">
            <h3>Popular Flight Routes</h3>
          </div>
          <div className="col-md-4 col-6 homepage_flight-route-col">
            <div className="homepage_flight-route-box start fd-col">
              <p><strong>Flight to Maldives</strong></p>
              <p>DEL-MV</p>
            </div>
          </div>
          <div className="col-md-4 col-6 homepage_flight-route-col">
            <div className="homepage_flight-route-box start fd-col">
              <p><strong>Flight to Maldives</strong></p>
              <p>DEL-MV</p>
            </div>
          </div>
          <div className="col-md-4 col-6 homepage_flight-route-col">
            <div className="homepage_flight-route-box start fd-col">
              <p><strong>Flight to Maldives</strong></p>
              <p>DEL-MV</p>
            </div>
          </div>
          <div className="col-md-4 col-6 homepage_flight-route-col">
            <div className="homepage_flight-route-box start fd-col">
              <p><strong>Flight to Maldives</strong></p>
              <p>DEL-MV</p>
            </div>
          </div>
          <div className="col-md-4 col-6 homepage_flight-route-col resp-second-hide">
            <div className="homepage_flight-route-box start fd-col">
              <p><strong>Flight to Maldives</strong></p>
              <p>DEL-MV</p>
            </div>
          </div>
          <div className="col-md-4 col-6 homepage_flight-route-col resp-second-hide">
            <div className="homepage_flight-route-box start fd-col">
              <p><strong>Flight to Maldives</strong></p>
              <p>DEL-MV</p>
            </div>
          </div>
          <div className="col-md-4 col-6 homepage_flight-route-col resp-second-hide">
            <div className="homepage_flight-route-box start fd-col">
              <p><strong>Flight to Maldives</strong></p>
              <p>DEL-MV</p>
            </div>
          </div>
          <div className="col-md-4 col-6 homepage_flight-route-col resp-second-hide">
            <div className="homepage_flight-route-box start fd-col">
              <p><strong>Flight to Maldives</strong></p>
              <p>DEL-MV</p>
            </div>
          </div>
          <div className="col-md-4 col-6 homepage_flight-route-col resp-second-hide">
            <div className="homepage_flight-route-box start fd-col">
              <p><strong>Flight to Maldives</strong></p>
              <p>DEL-MV</p>
            </div>
          </div>
        </div> {/* flight route ends */}

        <div className="row homepage_bestselling-holiday start common-gap"> {/* packages starts */}
          <div className="col-12 homepage_bestselling-holiday-heading">
            <h3>Best Selling International Holiday Packages</h3>
          </div>
          <div className="col-12 homepage_bestselling-holiday-col btwn fd-row">
            <div className="homepage_bestselling-holiday-box cent fd-col">
              <Image 
                  src="/images/home/pacakage-1.webp" 
                  className='img-fluid package-img'  
                  width={361}
                  height={431}  
                  alt="package image" />
              <div className="homepage_bestselling-holiday-content cent fd-col">
                <p className="package-name mb-2">Maldives Packages</p>
                <p className="package-price mb-1">$1999</p>
                <button className="btn homepage_bestselling-holiday-btn cent">Book</button>
              </div>
            </div>
            <div className="homepage_bestselling-holiday-box cent fd-col">
              <Image 
                  src="/images/home/pacakage-2.webp" 
                  className='img-fluid package-img'  
                  width={361}
                  height={431}  
                  alt="package image" />
              <div className="homepage_bestselling-holiday-content cent fd-col">
                <p className="package-name mb-2">Dubai Packages</p>
                <p className="package-price mb-1">$1999</p>
                <button className="btn homepage_bestselling-holiday-btn cent">Book</button>
              </div>
            </div>
            <div className="homepage_bestselling-holiday-box cent fd-col">
              <Image 
                  src="/images/home/pacakage-3.webp" 
                  className='img-fluid package-img'  
                  width={361}
                  height={431}  
                  alt="package image" />
              <div className="homepage_bestselling-holiday-content cent fd-col">
                <p className="package-name mb-2">London Packages</p>
                <p className="package-price mb-1">$1999</p>
                <button className="btn homepage_bestselling-holiday-btn cent">Book</button>
              </div>
            </div>
            <div className="homepage_bestselling-holiday-box cent fd-col">
              <Image 
                  src="/images/home/pacakage-4.webp" 
                  className='img-fluid package-img'  
                  width={361}
                  height={431}  
                  alt="package image" />
              <div className="homepage_bestselling-holiday-content cent fd-col">
                <p className="package-name mb-2">Thailand Packages</p>
                <p className="package-price mb-1">$1999</p>
                <button className="btn homepage_bestselling-holiday-btn cent">Book</button>
              </div>
            </div>
          </div>
        </div> {/* packages end */}

        <div className="row homepage_hotel start common-gap"> {/* hotels starts */}
          <div className="col-12 homepage_hotel-heading">
            <h3>Handpicked Hotels Just for You</h3>
          </div>
          <div className="col-lg-3 col-6 homepage_hotel-col">
            <div className="homepage_hotel-box start fd-col">
              <div className="homepage_hotel-image start fd-col">
                <div className="homepage_hotel-discount cent">
                  <p>Up to 20% off</p>
                </div>
                <Image 
                  src="/images/home/hotel-1.webp" 
                  className='img-fluid hotel-img'  
                  width={313}
                  height={271}  
                  alt="hotel image" />
                <div className="homepage_hotel-name start">
                  <p>The Crown Plaza</p>
                </div>
              </div>
              <div className="homepage_hotel-content start fd-col">
                <p>United Kingdom, London</p>
                <div className="homepage_hotel-rating start fd-row">
                  <p>4.8 Star</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-6 homepage_hotel-col">
            <div className="homepage_hotel-box start fd-col">
              <div className="homepage_hotel-image start fd-col">
                <div className="homepage_hotel-discount cent">
                  <p>Up to 20% off</p>
                </div>
                <Image 
                  src="/images/home/hotel-2.webp" 
                  className='img-fluid hotel-img'  
                  width={313}
                  height={271}  
                  alt="hotel image" />
                <div className="homepage_hotel-name start">
                  <p>The Crown Plaza</p>
                </div>
              </div>
              <div className="homepage_hotel-content start fd-col">
                <p>United Kingdom, London</p>
                <div className="homepage_hotel-rating start fd-row">
                  <p>4.8 Star</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-6 homepage_hotel-col">
            <div className="homepage_hotel-box start fd-col">
              <div className="homepage_hotel-image start fd-col">
                <div className="homepage_hotel-discount cent">
                  <p>Up to 20% off</p>
                </div>
                <Image 
                  src="/images/home/hotel-3.webp" 
                  className='img-fluid hotel-img'  
                  width={313}
                  height={271}  
                  alt="hotel image" />
                <div className="homepage_hotel-name start">
                  <p>The Crown Plaza</p>
                </div>
              </div>
              <div className="homepage_hotel-content start fd-col">
                <p>United Kingdom, London</p>
                <div className="homepage_hotel-rating start fd-row">
                  <p>4.8 Star</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-6 homepage_hotel-col">
            <div className="homepage_hotel-box start fd-col">
              <div className="homepage_hotel-image start fd-col">
                <div className="homepage_hotel-discount cent">
                  <p>Up to 20% off</p>
                </div>
                <Image 
                  src="/images/home/hotel-4.webp" 
                  className='img-fluid hotel-img'  
                  width={313}
                  height={271}  
                  alt="hotel image" />
                <div className="homepage_hotel-name start">
                  <p>The Crown Plaza</p>
                </div>
              </div>
              <div className="homepage_hotel-content start fd-col">
                <p>United Kingdom, London</p>
                <div className="homepage_hotel-rating start fd-row">
                  <p>4.8 Star</p>
                </div>
              </div>
            </div>
          </div>
        </div> {/* hotels ends */}

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

        <div className="row homepage_content-row"> {/* homepage content starts */}
          <div className="col-12 homepage_content-col">
              <h4>Your Adventure, Your Way</h4>
              <p>Travel is more than just moving from one place to another—it’s about creating memories, discovering new cultures, and experiencing life in its purest form. Whether you’re planning a short getaway, a luxury escape, or a family holiday, the right journey can transform into a story worth telling for years to come. </p>
              <h4>Find Your Perfect Getaway</h4>
              <p>From breathtaking beaches to vibrant cities and serene mountain escapes, the world is filled with destinations waiting to be explored. Imagine walking through the historic streets of London, enjoying the natural beauty of Asia, or soaking up the sun on a tropical island of Maldives. Whether you're searching top international routes or convenient top domestic routes, there's always a perfect place for you. With endless possibilities, choosing your next journey becomes an exciting adventure.</p>
              <h4>Comfortable Stays for Every Style</h4>
              <p>Finding the right place to stay is just as important as choosing where to go. From luxurious 5-star resorts offering world-class amenities to cozy boutique hotels with a personal touch, the options are endless. Our handpicked hotels ensure that every moment of your stay is filled with comfort, convenience, and style. For families, spacious resorts with kid-friendly activities make vacations stress-free, while couples can indulge in romantic escapes.</p>
              <h4>Seamless Travel, From Start to Finish</h4>
              <p>The best journeys are those without stress. As a leading online travel agency, we believe that everything you need should be just a click away. Our seamless flight booking process makes it easy to find cheap flights for both international flights and domestic flights. You can book cheap flights online effortlessly, find amazing flight deals, and secure your online flight tickets in minutes. Book your flight now and let us handle the details, so your journey is smooth from start to finish.</p>
          </div>
        </div> {/* homepage content ends */}

        <div className="row homepage_faq-row start common-gap w-100"> {/* faq starts */}
          <div className="col-12 homepage_faq-heading">
            <h3>FAQs</h3>
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

        <div className="row homepage_review"> {/* review starts */}
          <div className="col-12 homepage_review-col btwn fd-row common-gap">
            <div className="homepage_review-box start fd-col">
              <div className="homepage_review-name-date btwn fd-row">
                <div className="homepage_review-name">
                  <p><strong>Lannie</strong></p>
                  <p>United Kingdom</p>
                </div>
                <p className="homepage_review-date">4 days ago</p>
              </div>
              <div className="homepage_review-stars start fd-row">
                  <Image 
                  src="/images/home/star.webp" 
                  className='img-fluid star-img'  
                  width={30}
                  height={30}  
                  alt="star image" />
                   <Image 
                  src="/images/home/star.webp" 
                  className='img-fluid star-img'  
                  width={30}
                  height={30}  
                  alt="star image" />
                   <Image 
                  src="/images/home/star.webp" 
                  className='img-fluid star-img'  
                  width={30}
                  height={30}  
                  alt="star image" />
                   <Image 
                  src="/images/home/star.webp" 
                  className='img-fluid star-img'  
                  width={30}
                  height={30}  
                  alt="star image" />
                   <Image 
                  src="/images/home/star.webp" 
                  className='img-fluid star-img'  
                  width={30}
                  height={30}  
                  alt="star image" />
              </div>
              <div className="homepage_review-content">
                <p><strong>It is a long established fact that a reader will be </strong></p>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
              </div>
            </div>
            <div className="homepage_review-box start fd-col resp-third-hide">
              <div className="homepage_review-name-date btwn fd-row">
                <div className="homepage_review-name">
                  <p><strong>Lannie</strong></p>
                  <p>United Kingdom</p>
                </div>
                <p className="homepage_review-date">4 days ago</p>
              </div>
              <div className="homepage_review-stars start fd-row">
                  <Image 
                  src="/images/home/star.webp" 
                  className='img-fluid star-img'  
                  width={30}
                  height={30}  
                  alt="star image" />
                   <Image 
                  src="/images/home/star.webp" 
                  className='img-fluid star-img'  
                  width={30}
                  height={30}  
                  alt="star image" />
                   <Image 
                  src="/images/home/star.webp" 
                  className='img-fluid star-img'  
                  width={30}
                  height={30}  
                  alt="star image" />
                   <Image 
                  src="/images/home/star.webp" 
                  className='img-fluid star-img'  
                  width={30}
                  height={30}  
                  alt="star image" />
                   <Image 
                  src="/images/home/star.webp" 
                  className='img-fluid star-img'  
                  width={30}
                  height={30}  
                  alt="star image" />
              </div>
              <div className="homepage_review-content">
                <p><strong>It is a long established fact that a reader will be </strong></p>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
              </div>
            </div>
            <div className="homepage_review-box start fd-col resp-second-hide">
              <div className="homepage_review-name-date btwn fd-row">
                <div className="homepage_review-name">
                  <p><strong>Lannie</strong></p>
                  <p>United Kingdom</p>
                </div>
                <p className="homepage_review-date">4 days ago</p>
              </div>
              <div className="homepage_review-stars start fd-row">
                  <Image 
                  src="/images/home/star.webp" 
                  className='img-fluid star-img'  
                  width={30}
                  height={30}  
                  alt="star image" />
                   <Image 
                  src="/images/home/star.webp" 
                  className='img-fluid star-img'  
                  width={30}
                  height={30}  
                  alt="star image" />
                   <Image 
                  src="/images/home/star.webp" 
                  className='img-fluid star-img'  
                  width={30}
                  height={30}  
                  alt="star image" />
                   <Image 
                  src="/images/home/star.webp" 
                  className='img-fluid star-img'  
                  width={30}
                  height={30}  
                  alt="star image" />
                   <Image 
                  src="/images/home/star.webp" 
                  className='img-fluid star-img'  
                  width={30}
                  height={30}  
                  alt="star image" />
              </div>
              <div className="homepage_review-content">
                <p><strong>It is a long established fact that a reader will be </strong></p>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
              </div>
            </div>
            <div className="homepage_review-box start fd-col resp-second-hide">
              <div className="homepage_review-name-date btwn fd-row">
                <div className="homepage_review-name">
                  <p><strong>Lannie</strong></p>
                  <p>United Kingdom</p>
                </div>
                <p className="homepage_review-date">4 days ago</p>
              </div>
              <div className="homepage_review-stars start fd-row">
                  <Image 
                  src="/images/home/star.webp" 
                  className='img-fluid star-img'  
                  width={30}
                  height={30}  
                  alt="star image" />
                   <Image 
                  src="/images/home/star.webp" 
                  className='img-fluid star-img'  
                  width={30}
                  height={30}  
                  alt="star image" />
                   <Image 
                  src="/images/home/star.webp" 
                  className='img-fluid star-img'  
                  width={30}
                  height={30}  
                  alt="star image" />
                   <Image 
                  src="/images/home/star.webp" 
                  className='img-fluid star-img'  
                  width={30}
                  height={30}  
                  alt="star image" />
                   <Image 
                  src="/images/home/star.webp" 
                  className='img-fluid star-img'  
                  width={30}
                  height={30}  
                  alt="star image" />
              </div>
              <div className="homepage_review-content">
                <p><strong>It is a long established fact that a reader will be </strong></p>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
              </div>
            </div>
          </div>
        </div> {/* review ends */}
      </div>

    </section>
  );
}
