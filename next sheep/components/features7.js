import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Features7 = (props) => {
  return (
    <>
      <div
        className={`features7-layout226 thq-section-padding ${props.rootClassName} `}
      >
        <div className="features7-container1">
          <div className="features7-container2"></div>
        </div>
        <div className="features7-container3">
          <div className="features7-max-width thq-section-max-width thq-grid-auto-300">
            <div className="thq-flex-column">
              <span className="features7-over-title1 thq-body-small">
                {props.feature1Slogan ?? (
                  <Fragment>
                    <span className="features7-text2">
                      Tailored solutions for your business
                    </span>
                  </Fragment>
                )}
              </span>
              <div className="thq-flex-column features7-content1">
                <h3 className="features7-title1 thq-heading-3">
                  {props.feature1Title ?? (
                    <Fragment>
                      <span className="features7-text6">
                        Custom Website Development
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="features7-description1 thq-body-small">
                  {props.feature1Description ?? (
                    <Fragment>
                      <span className="features7-text3">
                        We create unique websites that reflect your brand
                        identity and meet your specific business needs.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="thq-flex-column">
              <span className="features7-over-title2 thq-body-small">
                {props.feature2Slogan ?? (
                  <Fragment>
                    <span className="features7-text9">
                      Seamless experience across all devices
                    </span>
                  </Fragment>
                )}
              </span>
              <div className="thq-flex-column features7-content2">
                <strong className="features7-title2 thq-heading-3">
                  {props.feature2Title ?? (
                    <Fragment>
                      <span className="features7-text1">
                        Responsive Web Design
                      </span>
                    </Fragment>
                  )}
                </strong>
                <span className="features7-description2 thq-body-small">
                  {props.feature2Description ?? (
                    <Fragment>
                      <span className="features7-text5">
                        Our websites are optimized for desktop, tablet, and
                        mobile devices to ensure a consistent user experience.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="thq-flex-column">
              <span className="features7-over-title3 thq-body-small">
                {props.feature3Slogan ?? (
                  <Fragment>
                    <span className="features7-text7">
                      Boost your online visibility
                    </span>
                  </Fragment>
                )}
              </span>
              <div className="thq-flex-column features7-content3">
                <strong className="features7-title3 thq-heading-3">
                  {props.feature3Title ?? (
                    <Fragment>
                      <span className="features7-text8">SEO Optimization</span>
                    </Fragment>
                  )}
                </strong>
                <span className="features7-description3 thq-body-small">
                  {props.feature3Description ?? (
                    <Fragment>
                      <span className="features7-text4">
                        We implement SEO best practices to help your website
                        rank higher in search engine results and attract more
                        organic traffic.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .features7-layout226 {
            width: 100%;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .features7-container1 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-layout-space-unit);
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-unit);
            justify-content: center;
          }
          .features7-container2 {
            width: 1016px;
            height: 464px;
            display: flex;
            margin-top: var(--dl-layout-space-unit);
            margin-left: var(--dl-layout-space-unit);
            margin-right: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-unit);
            background-size: cover;
            background-image: url('https://images.unsplash.com/photo-1547082299-de196ea013d6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE5fHxjb21wdXRlcnxlbnwwfHx8fDE3NTA4NDQ0MDR8MA&ixlib=rb-4.1.0&w=1100');
            background-position: center;
          }
          .features7-container3 {
            display: flex;
            margin-top: var(--dl-layout-space-unit);
            align-items: center;
            margin-left: var(--dl-layout-space-unit);
            margin-right: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-unit);
            flex-direction: row;
            justify-content: center;
          }
          .features7-max-width {
            align-self: flex-start;
          }
          .features7-over-title1 {
            font-weight: 600;
          }
          .features7-title1 {
            text-align: center;
          }
          .features7-description1 {
            text-align: center;
          }
          .features7-over-title2 {
            font-weight: 600;
          }
          .features7-title2 {
            text-align: center;
          }
          .features7-description2 {
            text-align: center;
          }
          .features7-over-title3 {
            font-weight: 600;
          }
          .features7-title3 {
            text-align: center;
          }
          .features7-description3 {
            text-align: center;
          }
          .features7-text1 {
            display: inline-block;
          }
          .features7-text2 {
            display: inline-block;
          }
          .features7-text3 {
            display: inline-block;
          }
          .features7-text4 {
            display: inline-block;
          }
          .features7-text5 {
            display: inline-block;
          }
          .features7-text6 {
            display: inline-block;
          }
          .features7-text7 {
            display: inline-block;
          }
          .features7-text8 {
            display: inline-block;
          }
          .features7-text9 {
            display: inline-block;
          }
          .features7root-class-name {
            height: 100%;
          }
          @media (max-width: 991px) {
            .features7-content1 {
              align-items: center;
            }
            .features7-content2 {
              align-items: center;
            }
            .features7-content3 {
              align-items: center;
            }
            .features7root-class-name {
              height: 100%;
              overflow: scroll;
            }
          }
          @media (max-width: 767px) {
            .features7root-class-name {
              height: 100%;
              overflow: scroll;
            }
          }
          @media (max-width: 479px) {
            .features7-container2 {
              width: 479px;
              height: 424px;
            }
            .features7root-class-name {
              height: 100%;
              overflow: scroll;
            }
          }
        `}
      </style>
    </>
  )
}

Features7.defaultProps = {
  rootClassName: '',
  feature2Title: undefined,
  feature1Slogan: undefined,
  feature1Description: undefined,
  feature3Description: undefined,
  feature2Description: undefined,
  feature1Title: undefined,
  feature3Slogan: undefined,
  feature3Title: undefined,
  feature2Slogan: undefined,
}

Features7.propTypes = {
  rootClassName: PropTypes.string,
  feature2Title: PropTypes.element,
  feature1Slogan: PropTypes.element,
  feature1Description: PropTypes.element,
  feature3Description: PropTypes.element,
  feature2Description: PropTypes.element,
  feature1Title: PropTypes.element,
  feature3Slogan: PropTypes.element,
  feature3Title: PropTypes.element,
  feature2Slogan: PropTypes.element,
}

export default Features7
