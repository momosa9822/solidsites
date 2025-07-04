import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import Stats11 from './stats11'

const Component3 = (props) => {
  return (
    <>
      <div className={`component3-container ${props.rootClassName} `}>
        <Stats11
          stat1={
            <Fragment>
              <span className="component3-text1">68%</span>
            </Fragment>
          }
          stat2={
            <Fragment>
              <span className="component3-text2">76%</span>
            </Fragment>
          }
          stat3={
            <Fragment>
              <span className="component3-text3">56%</span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="component3-text4">
                Websites Deliver ROI , Here’s the Proof
              </span>
            </Fragment>
          }
          image1Src="https://images.unsplash.com/photo-1592839961631-0351c10a0b47?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDd8fHdlYnNpdGUlMjBjb3B1dGVyfGVufDB8fHx8MTc1MTA1MjI1MXww&amp;ixlib=rb-4.1.0&amp;w=1500"
          stat1Description={
            <Fragment>
              <span className="component3-text5">
                of people say they prefer interacting with businesses through a
                website over visiting in person or calling. A website gives your
                customers an easy, convenient way to contact you, ask questions,
                and request quotes.
              </span>
            </Fragment>
          }
          stat2Description={
            <Fragment>
              <span className="component3-text6">
                of people who search for local services on mobile devices visit
                or contact a business within 24 hours. A mobile-friendly website
                helps you capture these ready-to-buy customers quickly.
              </span>
            </Fragment>
          }
          stat3Description={
            <Fragment>
              <span className="component3-text7">
                {' '}
                of consumers are more likely to trust a business with a
                professional website. For service providers, this means more
                calls, bookings, and long-term clients.
              </span>
            </Fragment>
          }
        ></Stats11>
      </div>
      <style jsx>
        {`
          .component3-container {
            width: 100%;
            height: 604px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .component3-text1 {
            color: #ff00a3;
            display: inline-block;
          }
          .component3-text2 {
            display: inline-block;
          }
          .component3-text3 {
            color: #7f00ff;
            display: inline-block;
          }
          .component3-text4 {
            color: var(--dl-color-theme-neutral-dark);
            display: inline-block;
            box-shadow: rgb(255, 255, 255) 5px 5px 10px 0px;
            text-transform: capitalize;
            background-color: rgb(229, 240, 255);
          }
          .component3-text5 {
            display: inline-block;
          }
          .component3-text6 {
            display: inline-block;
            line-height: 1.7;
          }
          .component3-text7 {
            display: inline-block;
          }

          @media (max-width: 479px) {
            .component3-container {
              height: 1064px;
            }
          }
        `}
      </style>
    </>
  )
}

Component3.defaultProps = {
  rootClassName: '',
}

Component3.propTypes = {
  rootClassName: PropTypes.string,
}

export default Component3
