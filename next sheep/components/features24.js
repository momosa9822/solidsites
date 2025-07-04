import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import Features7 from './features7'

const Features24 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <>
      <div
        className={`features24-container1 thq-section-padding ${props.rootClassName} `}
      >
        <div className="features24-container2">
          <div className="features24-container3">
            <Features7
              feature1Title={
                <Fragment>
                  <span className="features24-text1">
                    Custom Website Development
                  </span>
                </Fragment>
              }
              feature2Title={
                <Fragment>
                  <span className="features24-text2">
                    Responsive Web Design
                  </span>
                </Fragment>
              }
              feature3Title={
                <Fragment>
                  <span className="features24-text3">SEO Optimization</span>
                </Fragment>
              }
              rootClassName="features7root-class-name"
              feature1Slogan={
                <Fragment>
                  <span className="features24-text4">
                    Tailored solutions for your business
                  </span>
                </Fragment>
              }
              feature2Slogan={
                <Fragment>
                  <span className="features24-text5">
                    Seamless experience across all devices
                  </span>
                </Fragment>
              }
              feature3Slogan={
                <Fragment>
                  <span className="features24-text6">
                    Boost your online visibility
                  </span>
                </Fragment>
              }
              feature1Description={
                <Fragment>
                  <span className="features24-text7">
                    We create unique websites that reflect your brand identity
                    and meet your specific business needs.
                  </span>
                </Fragment>
              }
              feature2Description={
                <Fragment>
                  <span className="features24-text8">
                    Our websites are optimized for desktop, tablet, and mobile
                    devices to ensure a consistent user experience.
                  </span>
                </Fragment>
              }
              feature3Description={
                <Fragment>
                  <span className="features24-text9">
                    We implement SEO best practices to help your website rank
                    higher in search engine results and attract more organic
                    traffic.
                  </span>
                </Fragment>
              }
            ></Features7>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .features24-container1 {
            height: 100%;
            padding: 0px;
          }
          .features24-container2 {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .features24-container3 {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .features24-text1 {
            display: inline-block;
          }
          .features24-text2 {
            display: inline-block;
          }
          .features24-text3 {
            display: inline-block;
          }
          .features24-text4 {
            display: inline-block;
          }
          .features24-text5 {
            display: inline-block;
          }
          .features24-text6 {
            display: inline-block;
          }
          .features24-text7 {
            display: inline-block;
          }
          .features24-text8 {
            display: inline-block;
          }
          .features24-text9 {
            display: inline-block;
          }

          @media (max-width: 991px) {
            .features24-container1 {
              height: 100%;
              padding: 0px;
            }
            .features24-container2 {
              width: 100%;
              height: 100%;
            }
            .features24-container3 {
              width: 100%;
              height: 100%;
            }
          }
          @media (max-width: 767px) {
            .features24-container1 {
              height: 100%;
              padding: 0px;
            }
            .features24-container2 {
              width: 100%;
              height: 100%;
            }
            .features24-container3 {
              width: 100%;
              height: 100%;
            }
          }
          @media (max-width: 479px) {
            .features24-container2 {
              width: 100%;
              height: 100%;
            }
            .features24-container3 {
              width: 100%;
              height: 100%;
            }
            .features24root-class-name {
              margin-top: var(--dl-layout-space-unit);
              margin-left: var(--dl-layout-space-unit);
              margin-right: var(--dl-layout-space-unit);
              margin-bottom: var(--dl-layout-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

Features24.defaultProps = {
  rootClassName: '',
}

Features24.propTypes = {
  rootClassName: PropTypes.string,
}

export default Features24
