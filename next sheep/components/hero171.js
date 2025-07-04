import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Hero171 = (props) => {
  return (
    <>
      <div className={`hero171-header78 ${props.rootClassName} `}>
        <div className="hero171-column thq-section-max-width thq-section-padding">
          <div className="hero171-content">
            <h1 className="hero171-text1 thq-heading-1">
              {props.heading1 ?? (
                <Fragment>
                  <span className="hero171-text3">
                    Custom Website Development Agency
                  </span>
                </Fragment>
              )}
            </h1>
            <p className="hero171-text2 thq-body-large">
              {props.content12 ?? (
                <Fragment>
                  <span className="hero171-text4">
                    We specialize in creating custom websites for service-based
                    businesses to help them improve their online presence and
                    attract more customers.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .hero171-header78 {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .hero171-column {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-unit);
          }
          .hero171-content {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .hero171-text1 {
            text-align: center;
          }
          .hero171-text2 {
            text-align: center;
          }
          .hero171-text3 {
            display: inline-block;
          }
          .hero171-text4 {
            display: inline-block;
          }
          .hero171root-class-name {
            height: 100%;
          }
          .hero171root-class-name1 {
            height: 100%;
          }
          .hero171root-class-name2 {
            height: 100%;
          }
          @media (max-width: 767px) {
            .hero171root-class-name2 {
              height: 100%;
            }
          }
          @media (max-width: 479px) {
            .hero171root-class-name {
              width: 100%;
              height: 100%;
              overflow: visible;
            }
            .hero171root-class-name1 {
              width: auto;
            }
          }
        `}
      </style>
    </>
  )
}

Hero171.defaultProps = {
  heading1: undefined,
  rootClassName: '',
  content12: undefined,
}

Hero171.propTypes = {
  heading1: PropTypes.element,
  rootClassName: PropTypes.string,
  content12: PropTypes.element,
}

export default Hero171
