import React, { useState, Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Pricing1421 = (props) => {
  const [isMonthly, setIsMonthly] = useState(true)
  return (
    <>
      <div
        className={`pricing1421-pricing23 thq-section-padding ${props.rootClassName} `}
      >
        <div className="pricing1421-max-width thq-section-max-width">
          <div className="pricing1421-section-title">
            <span className="pricing1421-text100 thq-body-small">
              {props.content1 ?? (
                <Fragment>
                  <span className="pricing1421-text196">
                    Choose the perfect plan for you
                  </span>
                </Fragment>
              )}
            </span>
            <div className="pricing1421-content">
              <h2 className="pricing1421-text101 thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="pricing1421-text163">Pricing plan</span>
                  </Fragment>
                )}
              </h2>
              <p className="pricing1421-text102 thq-body-large">
                {props.content2 ?? (
                  <Fragment>
                    <span className="pricing1421-text183">
                      Whether your just starting out or ready to grow we&apos;ve
                      got the right package to fit your goals and budget 
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
          </div>
          <div className="pricing1421-tabs">
            {isMonthly === false && (
              <button
                onClick={() => setIsMonthly(true)}
                className="pricing1421-button1 thq-button-outline thq-button-animated"
              >
                <span className="thq-body-small">Monthly</span>
              </button>
            )}
            {isMonthly === false && (
              <button
                onClick={() => setIsMonthly(false)}
                className="pricing1421-button2 thq-button-filled thq-button-animated"
              >
                <span className="thq-body-small">Yearly</span>
              </button>
            )}
          </div>
          {isMonthly === true && (
            <div className="pricing1421-container1">
              <div className="pricing1421-column1 thq-card">
                <div className="pricing1421-price10">
                  <div className="pricing1421-price11">
                    <p className="pricing1421-text105 thq-body-large">
                      {props.plan1 ?? (
                        <Fragment>
                          <span className="pricing1421-text186">
                            starter site
                          </span>
                        </Fragment>
                      )}
                    </p>
                    <h3 className="pricing1421-text106 thq-heading-3">
                      {props.plan1Price ?? (
                        <Fragment>
                          <span className="pricing1421-text212">R2799</span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="thq-body-large">
                      {props.plan1Yearly ?? (
                        <Fragment>
                          <span className="pricing1421-text198">
                            R250/pm Hosting
                          </span>
                        </Fragment>
                      )}
                    </p>
                  </div>
                  <div className="pricing1421-list1">
                    <div className="pricing1421-list-item10">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan1Feature1 ?? (
                          <Fragment>
                            <span className="pricing1421-text201">
                              Standard Website Design
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing1421-list-item11">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan1Feature2 ?? (
                          <Fragment>
                            <span className="pricing1421-text169">
                              whatsapp button (instant chat)
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing1421-list-item12">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan1Feature32 ?? (
                          <Fragment>
                            <span className="pricing1421-text195">
                              1 page website
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing1421-list-item13">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan1Feature321 ?? (
                          <Fragment>
                            <span className="pricing1421-text202">
                              Perfect for one-page info sites
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <Link href="/contact">
                  <a className="pricing1421-link1 thq-button-outline thq-button-animated">
                    <span className="thq-body-small">
                      {props.plan1Action ?? (
                        <Fragment>
                          <span className="pricing1421-text220">
                            Get Started
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </a>
                </Link>
              </div>
              <div className="pricing1421-column2 thq-card">
                <label className="pricing1421-text113">
                  {props.text ?? (
                    <Fragment>
                      <span className="pricing1421-text188">most popular</span>
                    </Fragment>
                  )}
                </label>
                <div className="pricing1421-price12">
                  <div className="pricing1421-price13">
                    <p className="pricing1421-text114 thq-body-large">
                      {props.plan2 ?? (
                        <Fragment>
                          <span className="pricing1421-text174">
                            Business site
                          </span>
                        </Fragment>
                      )}
                    </p>
                    <h3 className="pricing1421-text115 thq-heading-3">
                      {props.plan2Price ?? (
                        <Fragment>
                          <span className="pricing1421-text177">R3499</span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="thq-body-large">
                      {props.plan2Yearly ?? (
                        <Fragment>
                          <span className="pricing1421-text214">
                            R250/pm Hosting
                          </span>
                        </Fragment>
                      )}
                    </p>
                  </div>
                  <div className="pricing1421-list2">
                    <div className="pricing1421-list-item14">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature1 ?? (
                          <Fragment>
                            <span className="pricing1421-text168">
                              Custom Website Design
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing1421-list-item15">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature2 ?? (
                          <Fragment>
                            <span className="pricing1421-text215">
                              Contact Form + WA button
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing1421-list-item16">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature3 ?? (
                          <Fragment>
                            <span className="pricing1421-text193">
                              mobile responsive 
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing1421-list-item17">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature4 ?? (
                          <Fragment>
                            <span className="pricing1421-text218">
                              3 page website
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing1421-list-item18">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature42 ?? (
                          <Fragment>
                            <span className="pricing1421-text207">
                              google indexing setup
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing1421-list-item19">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature421 ?? (
                          <Fragment>
                            <span className="pricing1421-text166">
                              1 content revision
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing1421-list-item20">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="pricing1421-icon30 thq-icon-small"
                      >
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature4211 ?? (
                          <Fragment>
                            <span className="pricing1421-text197">
                              Everything you need to launch your business online
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <Link href="/contact">
                  <a className="pricing1421-link2 thq-button-filled thq-button-animated">
                    <span className="thq-body-small">
                      {props.plan2Action ?? (
                        <Fragment>
                          <span className="pricing1421-text180">
                            Get Started
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </a>
                </Link>
              </div>
              <div className="pricing1421-column3 thq-card">
                <div className="pricing1421-price14">
                  <div className="pricing1421-price15">
                    <p className="pricing1421-text125 thq-body-large">
                      {props.plan3 ?? (
                        <Fragment>
                          <span className="pricing1421-text172">
                            Complete Business Website
                          </span>
                        </Fragment>
                      )}
                    </p>
                    <h3 className="pricing1421-text126 thq-heading-3">
                      {props.plan3Price ?? (
                        <Fragment>
                          <span className="pricing1421-text190">R5499</span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="thq-body-large">
                      {props.plan3Yearly ?? (
                        <Fragment>
                          <span className="pricing1421-text199">
                            R250/pm Hosting
                          </span>
                        </Fragment>
                      )}
                    </p>
                  </div>
                  <div className="pricing1421-list3">
                    <div className="pricing1421-list-item21">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature1 ?? (
                          <Fragment>
                            <span className="pricing1421-text192">
                              premuim website design
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing1421-list-item22">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature2 ?? (
                          <Fragment>
                            <span className="pricing1421-text191">
                              contact form + WA button
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing1421-list-item23">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature3 ?? (
                          <Fragment>
                            <span className="pricing1421-text165">
                              layout cutomization
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing1421-list-item24">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature4 ?? (
                          <Fragment>
                            <span className="pricing1421-text221">
                              Blog Setup
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing1421-list-item25">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature42 ?? (
                          <Fragment>
                            <span className="pricing1421-text178">
                              mobile responsive
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing1421-list-item26">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature5 ?? (
                          <Fragment>
                            <span className="pricing1421-text181">
                              5 page website 
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing1421-list-item27">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature52 ?? (
                          <Fragment>
                            <span className="pricing1421-text208">
                              google indexing setup
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing1421-list-item28">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature521 ?? (
                          <Fragment>
                            <span className="pricing1421-text170">
                              2 content revisions
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing1421-list-item29">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature5212 ?? (
                          <Fragment>
                            <span className="pricing1421-text210">
                              SEO setup 
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing1421-list-item30">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="pricing1421-icon50 thq-icon-small"
                      >
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature5211 ?? (
                          <Fragment>
                            <span className="pricing1421-text216">
                              Built for growth, SEO, and full content control.
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <Link href="/contact">
                  <a className="pricing1421-link3 thq-button-filled thq-button-animated">
                    <span className="thq-body-small">
                      {props.plan3Action ?? (
                        <Fragment>
                          <span className="pricing1421-text222">
                            Get Started
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </a>
                </Link>
              </div>
            </div>
          )}
          {isMonthly === false && (
            <div className="pricing1421-container2">
              <div className="pricing1421-column4 thq-card">
                <div className="pricing1421-price16">
                  <div className="pricing1421-price17">
                    <span className="pricing1421-text139 thq-body-large">
                      {props.plan11 ?? (
                        <Fragment>
                          <span className="pricing1421-text173">
                            Basic plan
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <h3 className="pricing1421-text140 thq-heading-3">
                      {props.plan1Price1 ?? (
                        <Fragment>
                          <span className="pricing1421-text213">$200/yr</span>
                        </Fragment>
                      )}
                    </h3>
                    <span className="thq-body-large">
                      {props.plan1Yearly1 ?? (
                        <Fragment>
                          <span className="pricing1421-text189">
                            or $20 monthly
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing1421-list4">
                    <div className="pricing1421-list-item31">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan1Feature11 ?? (
                          <Fragment>
                            <span className="pricing1421-text217">
                              Feature text goes here
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing1421-list-item32">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan1Feature21 ?? (
                          <Fragment>
                            <span className="pricing1421-text205">
                              Feature text goes here
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing1421-list-item33">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan1Feature31 ?? (
                          <Fragment>
                            <span className="pricing1421-text206">
                              Feature text goes here
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="pricing1421-button6 thq-button-outline thq-button-animated">
                  <span className="thq-body-small">
                    {props.plan1Action1 ?? (
                      <Fragment>
                        <span className="pricing1421-text185">Get started</span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
              <div className="pricing1421-column5 thq-card">
                <div className="pricing1421-price18">
                  <div className="pricing1421-price19">
                    <span className="pricing1421-text146 thq-body-large">
                      {props.plan21 ?? (
                        <Fragment>
                          <span className="pricing1421-text209">
                            Business plan
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <h3 className="pricing1421-text147 thq-heading-3">
                      {props.plan2Price1 ?? (
                        <Fragment>
                          <span className="pricing1421-text167">$299/yr</span>
                        </Fragment>
                      )}
                    </h3>
                    <span className="thq-body-large">
                      {props.plan2Yearly1 ?? (
                        <Fragment>
                          <span className="pricing1421-text194">
                            or $29 monthly
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing1421-list5">
                    <div className="pricing1421-list-item34">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature11 ?? (
                          <Fragment>
                            <span className="pricing1421-text184">
                              Feature text goes here
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing1421-list-item35">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature21 ?? (
                          <Fragment>
                            <span className="pricing1421-text176">
                              Feature text goes here
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing1421-list-item36">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature31 ?? (
                          <Fragment>
                            <span className="pricing1421-text179">
                              Feature text goes here
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing1421-list-item37">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature41 ?? (
                          <Fragment>
                            <span className="pricing1421-text182">
                              Feature text goes here
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="pricing1421-button7 thq-button-filled thq-button-animated">
                  <span className="thq-body-small">
                    {props.plan2Action1 ?? (
                      <Fragment>
                        <span className="pricing1421-text211">Get started</span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
              <div className="pricing1421-column6 thq-card">
                <div className="pricing1421-price20">
                  <div className="pricing1421-price21">
                    <span className="pricing1421-text154 thq-body-large">
                      {props.plan31 ?? (
                        <Fragment>
                          <span className="pricing1421-text164">
                            Enterprise plan
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <h3 className="pricing1421-text155 thq-heading-3">
                      {props.plan3Price1 ?? (
                        <Fragment>
                          <span className="pricing1421-text223">$499/yr</span>
                        </Fragment>
                      )}
                    </h3>
                    <span className="thq-body-large">
                      {props.plan3Yearly1 ?? (
                        <Fragment>
                          <span className="pricing1421-text187">
                            or $49 monthly
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing1421-list6">
                    <div className="pricing1421-list-item38">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature11 ?? (
                          <Fragment>
                            <span className="pricing1421-text171">
                              Feature text goes here
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing1421-list-item39">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature21 ?? (
                          <Fragment>
                            <span className="pricing1421-text204">
                              Feature text goes here
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing1421-list-item40">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature31 ?? (
                          <Fragment>
                            <span className="pricing1421-text200">
                              Feature text goes here
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing1421-list-item41">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature41 ?? (
                          <Fragment>
                            <span className="pricing1421-text203">
                              Feature text goes here
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing1421-list-item42">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature51 ?? (
                          <Fragment>
                            <span className="pricing1421-text219">
                              Feature text goes here
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="pricing1421-button8 thq-button-filled thq-button-animated">
                  <span className="thq-body-small">
                    {props.plan3Action1 ?? (
                      <Fragment>
                        <span className="pricing1421-text175">Get started</span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <style jsx>
        {`
          .pricing1421-pricing23 {
            width: 100%;
            height: 1171px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .pricing1421-max-width {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .pricing1421-section-title {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .pricing1421-text100 {
            text-align: center;
          }
          .pricing1421-content {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 800px;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing1421-text101 {
            text-align: center;
          }
          .pricing1421-text102 {
            text-align: center;
          }
          .pricing1421-tabs {
            display: flex;
            align-items: flex-start;
          }
          .pricing1421-button1 {
            gap: var(--dl-layout-space-halfunit);
            width: 120px;
            height: 60px;
            border-style: solid;
            border-top-left-radius: var(--dl-layout-radius-buttonradius);
            border-top-right-radius: 0;
            border-bottom-left-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-right-radius: 0;
          }
          .pricing1421-button2 {
            gap: var(--dl-layout-space-halfunit);
            color: var(--dl-color-theme-neutral-light);
            width: 120px;
            height: 60px;
            border-top-left-radius: 0;
            border-top-right-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: var(--dl-layout-radius-buttonradius);
          }
          .pricing1421-container1 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            height: 582px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .pricing1421-column1 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            height: 754px;
            display: flex;
            align-self: stretch;
            align-items: center;
            padding-top: 92px;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
            background-color: #ffffff;
          }
          .pricing1421-price10 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing1421-price11 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing1421-text105 {
            font-style: normal;
            font-weight: 600;
          }
          .pricing1421-text106 {
            font-size: 48px;
          }
          .pricing1421-list1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing1421-list-item10 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing1421-list-item11 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing1421-list-item12 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing1421-list-item13 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing1421-link1 {
            color: #006dff;
            width: 100%;
            border-color: #0092ff;
            text-decoration: none;
            background-color: #2882ff;
          }
          .pricing1421-column2 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            height: 746px;
            display: flex;
            align-self: stretch;
            align-items: center;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
            background-color: var(--dl-color-theme-accent1);
          }
          .pricing1421-text113 {
            width: auto;
            height: auto;
            align-self: flex-start;
            font-style: italic;
            text-align: center;
            font-weight: 700;
          }
          .pricing1421-price12 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing1421-price13 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing1421-text114 {
            font-style: normal;
            font-weight: 600;
          }
          .pricing1421-text115 {
            font-size: 48px;
          }
          .pricing1421-list2 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing1421-list-item14 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing1421-list-item15 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing1421-list-item16 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing1421-list-item17 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing1421-list-item18 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing1421-list-item19 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing1421-list-item20 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing1421-icon30 {
            width: var(--dl-layout-size-small);
          }
          .pricing1421-link2 {
            width: 100%;
            text-decoration: none;
            background-color: #2657f1;
          }
          .pricing1421-column3 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            height: 780px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            padding-top: 84px;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
            border-radius: var(--dl-layout-radius-cardradius);
            flex-direction: column;
            background-color: var(--dl-color-theme-accent2);
          }
          .pricing1421-price14 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing1421-price15 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing1421-text125 {
            font-style: normal;
            font-weight: 600;
          }
          .pricing1421-text126 {
            font-size: 48px;
          }
          .pricing1421-list3 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing1421-list-item21 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing1421-list-item22 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing1421-list-item23 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing1421-list-item24 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing1421-list-item25 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing1421-list-item26 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing1421-list-item27 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing1421-list-item28 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing1421-list-item29 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing1421-list-item30 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing1421-icon50 {
            width: var(--dl-layout-size-small);
          }
          .pricing1421-link3 {
            width: 100%;
            text-decoration: none;
            background-color: #1d68f5;
          }
          .pricing1421-container2 {
            gap: 32px;
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .pricing1421-column4 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
          }
          .pricing1421-price16 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing1421-price17 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing1421-text139 {
            font-style: normal;
            font-weight: 600;
          }
          .pricing1421-text140 {
            font-size: 48px;
          }
          .pricing1421-list4 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing1421-list-item31 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing1421-list-item32 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing1421-list-item33 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing1421-button6 {
            width: 100%;
          }
          .pricing1421-column5 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
            background-color: var(--dl-color-theme-accent1);
          }
          .pricing1421-price18 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing1421-price19 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing1421-text146 {
            font-style: normal;
            font-weight: 600;
          }
          .pricing1421-text147 {
            font-size: 48px;
          }
          .pricing1421-list5 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing1421-list-item34 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing1421-list-item35 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing1421-list-item36 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing1421-list-item37 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing1421-button7 {
            width: 100%;
          }
          .pricing1421-column6 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-items: center;
            flex-shrink: 0;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
            background-color: var(--dl-color-theme-accent2);
          }
          .pricing1421-price20 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing1421-price21 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing1421-text154 {
            font-style: normal;
            font-weight: 600;
          }
          .pricing1421-text155 {
            font-size: 48px;
          }
          .pricing1421-list6 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing1421-list-item38 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing1421-list-item39 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing1421-list-item40 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing1421-list-item41 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing1421-list-item42 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing1421-button8 {
            width: 100%;
          }
          .pricing1421-text163 {
            display: inline-block;
          }
          .pricing1421-text164 {
            display: inline-block;
          }
          .pricing1421-text165 {
            display: inline-block;
            text-transform: capitalize;
          }
          .pricing1421-text166 {
            display: inline-block;
            text-transform: capitalize;
          }
          .pricing1421-text167 {
            display: inline-block;
          }
          .pricing1421-text168 {
            display: inline-block;
          }
          .pricing1421-text169 {
            display: inline-block;
            text-transform: capitalize;
          }
          .pricing1421-text170 {
            display: inline-block;
            text-transform: capitalize;
          }
          .pricing1421-text171 {
            display: inline-block;
          }
          .pricing1421-text172 {
            display: inline-block;
          }
          .pricing1421-text173 {
            display: inline-block;
          }
          .pricing1421-text174 {
            display: inline-block;
            text-transform: capitalize;
          }
          .pricing1421-text175 {
            display: inline-block;
          }
          .pricing1421-text176 {
            display: inline-block;
          }
          .pricing1421-text177 {
            display: inline-block;
          }
          .pricing1421-text178 {
            display: inline-block;
            text-transform: capitalize;
          }
          .pricing1421-text179 {
            display: inline-block;
          }
          .pricing1421-text180 {
            display: inline-block;
          }
          .pricing1421-text181 {
            display: inline-block;
            text-transform: capitalize;
          }
          .pricing1421-text182 {
            display: inline-block;
          }
          .pricing1421-text183 {
            display: inline-block;
          }
          .pricing1421-text184 {
            display: inline-block;
          }
          .pricing1421-text185 {
            display: inline-block;
          }
          .pricing1421-text186 {
            display: inline-block;
            text-transform: capitalize;
          }
          .pricing1421-text187 {
            display: inline-block;
          }
          .pricing1421-text188 {
            color: rgb(255, 255, 255);
            display: inline-block;
            font-size: 20px;
            font-style: normal;
            font-family: 'Inter';
            font-weight: 500;
            line-height: 1.15;
            text-transform: capitalize;
            text-decoration: none;
            background-color: rgb(0, 124, 255);
          }
          .pricing1421-text189 {
            display: inline-block;
          }
          .pricing1421-text190 {
            display: inline-block;
          }
          .pricing1421-text191 {
            display: inline-block;
            text-transform: capitalize;
          }
          .pricing1421-text192 {
            display: inline-block;
            text-transform: capitalize;
          }
          .pricing1421-text193 {
            display: inline-block;
            text-transform: capitalize;
          }
          .pricing1421-text194 {
            display: inline-block;
          }
          .pricing1421-text195 {
            display: inline-block;
            text-transform: capitalize;
          }
          .pricing1421-text196 {
            display: inline-block;
          }
          .pricing1421-text197 {
            display: inline-block;
            text-transform: capitalize;
          }
          .pricing1421-text198 {
            display: inline-block;
          }
          .pricing1421-text199 {
            display: inline-block;
          }
          .pricing1421-text200 {
            display: inline-block;
          }
          .pricing1421-text201 {
            display: inline-block;
          }
          .pricing1421-text202 {
            display: inline-block;
            text-transform: capitalize;
          }
          .pricing1421-text203 {
            display: inline-block;
          }
          .pricing1421-text204 {
            display: inline-block;
          }
          .pricing1421-text205 {
            display: inline-block;
          }
          .pricing1421-text206 {
            display: inline-block;
          }
          .pricing1421-text207 {
            display: inline-block;
            text-transform: capitalize;
          }
          .pricing1421-text208 {
            display: inline-block;
            text-transform: capitalize;
          }
          .pricing1421-text209 {
            display: inline-block;
          }
          .pricing1421-text210 {
            display: inline-block;
            text-transform: capitalize;
          }
          .pricing1421-text211 {
            display: inline-block;
          }
          .pricing1421-text212 {
            display: inline-block;
          }
          .pricing1421-text213 {
            display: inline-block;
          }
          .pricing1421-text214 {
            display: inline-block;
          }
          .pricing1421-text215 {
            display: inline-block;
            text-transform: capitalize;
          }
          .pricing1421-text216 {
            display: inline-block;
          }
          .pricing1421-text217 {
            display: inline-block;
          }
          .pricing1421-text218 {
            display: inline-block;
            text-transform: capitalize;
          }
          .pricing1421-text219 {
            display: inline-block;
          }
          .pricing1421-text220 {
            color: #ffffff;
            display: inline-block;
          }
          .pricing1421-text221 {
            display: inline-block;
            text-transform: capitalize;
          }
          .pricing1421-text222 {
            display: inline-block;
          }
          .pricing1421-text223 {
            display: inline-block;
          }

          @media (max-width: 991px) {
            .pricing1421-pricing23 {
              height: 2355px;
            }
            .pricing1421-container1 {
              flex-direction: column;
            }
            .pricing1421-column3 {
              width: 100%;
            }
            .pricing1421-container2 {
              flex-direction: column;
            }
            .pricing1421-column6 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .pricing1421-pricing23 {
              height: 2327px;
              margin-bottom: 0px;
              padding-bottom: 0px;
            }
            .pricing1421-max-width {
              gap: var(--dl-layout-space-oneandhalfunits);
              height: 1791px;
              margin-top: var(--dl-layout-space-twounits);
              margin-bottom: var(--dl-layout-space-twounits);
            }
            .pricing1421-section-title {
              max-width: 100%;
            }
            .pricing1421-column1 {
              border-color: #000000;
              border-width: 3px;
            }
            .pricing1421-column2 {
              border-width: 3px;
            }
            .pricing1421-column3 {
              border-color: #000000;
              border-width: 3px;
            }
          }
        `}
      </style>
    </>
  )
}

Pricing1421.defaultProps = {
  heading1: undefined,
  plan31: undefined,
  plan3Feature3: undefined,
  plan2Feature421: undefined,
  plan2Price1: undefined,
  plan2Feature1: undefined,
  plan1Feature2: undefined,
  plan3Feature521: undefined,
  plan3Feature11: undefined,
  plan3: undefined,
  plan11: undefined,
  plan2: undefined,
  plan3Action1: undefined,
  plan2Feature21: undefined,
  plan2Price: undefined,
  plan3Feature42: undefined,
  plan2Feature31: undefined,
  plan2Action: undefined,
  plan3Feature5: undefined,
  plan2Feature41: undefined,
  content2: undefined,
  plan2Feature11: undefined,
  plan1Action1: undefined,
  plan1: undefined,
  rootClassName: '',
  plan3Yearly1: undefined,
  text: undefined,
  plan1Yearly1: undefined,
  plan3Price: undefined,
  plan3Feature2: undefined,
  plan3Feature1: undefined,
  plan2Feature3: undefined,
  plan2Yearly1: undefined,
  plan1Feature32: undefined,
  content1: undefined,
  plan2Feature4211: undefined,
  plan1Yearly: undefined,
  plan3Yearly: undefined,
  plan3Feature31: undefined,
  plan1Feature1: undefined,
  plan1Feature321: undefined,
  plan3Feature41: undefined,
  plan3Feature21: undefined,
  plan1Feature21: undefined,
  plan1Feature31: undefined,
  plan2Feature42: undefined,
  plan3Feature52: undefined,
  plan21: undefined,
  plan3Feature5212: undefined,
  plan2Action1: undefined,
  plan1Price: undefined,
  plan1Price1: undefined,
  plan2Yearly: undefined,
  plan2Feature2: undefined,
  plan3Feature5211: undefined,
  plan1Feature11: undefined,
  plan2Feature4: undefined,
  plan3Feature51: undefined,
  plan1Action: undefined,
  plan3Feature4: undefined,
  plan3Action: undefined,
  plan3Price1: undefined,
}

Pricing1421.propTypes = {
  heading1: PropTypes.element,
  plan31: PropTypes.element,
  plan3Feature3: PropTypes.element,
  plan2Feature421: PropTypes.element,
  plan2Price1: PropTypes.element,
  plan2Feature1: PropTypes.element,
  plan1Feature2: PropTypes.element,
  plan3Feature521: PropTypes.element,
  plan3Feature11: PropTypes.element,
  plan3: PropTypes.element,
  plan11: PropTypes.element,
  plan2: PropTypes.element,
  plan3Action1: PropTypes.element,
  plan2Feature21: PropTypes.element,
  plan2Price: PropTypes.element,
  plan3Feature42: PropTypes.element,
  plan2Feature31: PropTypes.element,
  plan2Action: PropTypes.element,
  plan3Feature5: PropTypes.element,
  plan2Feature41: PropTypes.element,
  content2: PropTypes.element,
  plan2Feature11: PropTypes.element,
  plan1Action1: PropTypes.element,
  plan1: PropTypes.element,
  rootClassName: PropTypes.string,
  plan3Yearly1: PropTypes.element,
  text: PropTypes.element,
  plan1Yearly1: PropTypes.element,
  plan3Price: PropTypes.element,
  plan3Feature2: PropTypes.element,
  plan3Feature1: PropTypes.element,
  plan2Feature3: PropTypes.element,
  plan2Yearly1: PropTypes.element,
  plan1Feature32: PropTypes.element,
  content1: PropTypes.element,
  plan2Feature4211: PropTypes.element,
  plan1Yearly: PropTypes.element,
  plan3Yearly: PropTypes.element,
  plan3Feature31: PropTypes.element,
  plan1Feature1: PropTypes.element,
  plan1Feature321: PropTypes.element,
  plan3Feature41: PropTypes.element,
  plan3Feature21: PropTypes.element,
  plan1Feature21: PropTypes.element,
  plan1Feature31: PropTypes.element,
  plan2Feature42: PropTypes.element,
  plan3Feature52: PropTypes.element,
  plan21: PropTypes.element,
  plan3Feature5212: PropTypes.element,
  plan2Action1: PropTypes.element,
  plan1Price: PropTypes.element,
  plan1Price1: PropTypes.element,
  plan2Yearly: PropTypes.element,
  plan2Feature2: PropTypes.element,
  plan3Feature5211: PropTypes.element,
  plan1Feature11: PropTypes.element,
  plan2Feature4: PropTypes.element,
  plan3Feature51: PropTypes.element,
  plan1Action: PropTypes.element,
  plan3Feature4: PropTypes.element,
  plan3Action: PropTypes.element,
  plan3Price1: PropTypes.element,
}

export default Pricing1421
