import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Features16 = (props) => {
  return (
    <>
      <div className="features16-layout300 thq-section-padding">
        <div className="features16-max-width thq-section-max-width">
          <div className="features16-section-title">
            <div className="features16-content1">
              <h2 className="features16-text10 thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="features16-text14">Our Key Features</span>
                  </Fragment>
                )}
              </h2>
              <span className="features16-text11 thq-body-large">
                {props.content1 ?? (
                  <Fragment>
                    <span className="features16-text18">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero vitae erat. Suspendisse varius enim
                      in eros elementum tristique. Duis cursus, mi quis viverra
                      ornare, eros dolor interdum nulla.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="features16-content2">
            <div className="features16-row thq-flex-row">
              <div className="features16-feature1">
                <img
                  alt={props.feature1ImageAlt}
                  src={props.feature1ImageSrc}
                  className="thq-img-ratio-4-3"
                />
                <div className="features16-content3">
                  <h3 className="features16-feature1-title thq-heading-3">
                    {props.feature1Title ?? (
                      <Fragment>
                        <span className="features16-text17">
                          Custom Website Development
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-small">
                    {props.feature1Description ?? (
                      <Fragment>
                        <span className="features16-text12">
                          We create tailor-made websites to suit your business
                          needs and goals.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
              <div className="features16-feature2">
                <img
                  alt={props.feature2ImageAlt}
                  src={props.feature2ImageSrc}
                  className="thq-img-ratio-4-3"
                />
                <div className="features16-content4">
                  <h3 className="thq-heading-3">
                    {props.feature2Title ?? (
                      <Fragment>
                        <span className="features16-text19">
                          SEO Optimization
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-small">
                    {props.feature2Description ?? (
                      <Fragment>
                        <span className="features16-text13">
                          We optimize your website to improve search engine
                          rankings and drive organic traffic.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
              <div className="features16-feature3">
                <img
                  alt={props.feature3ImageAlt}
                  src={props.feature3ImageSrc}
                  className="thq-img-ratio-4-3"
                />
                <div className="features16-content5">
                  <h3 className="thq-heading-3">
                    {props.feature3Title ?? (
                      <Fragment>
                        <span className="features16-text15">
                          Responsive Web Design
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-small">
                    {props.feature3Description ?? (
                      <Fragment>
                        <span className="features16-text16">
                          We ensure your website looks great and functions
                          seamlessly on all devices.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .features16-layout300 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .features16-max-width {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .features16-section-title {
            gap: 16px;
            width: 100%;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .features16-content1 {
            gap: 24px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .features16-text10 {
            text-align: center;
          }
          .features16-text11 {
            text-align: center;
          }
          .features16-content2 {
            gap: 48px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .features16-row {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: center;
          }
          .features16-feature1 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .features16-content3 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .features16-feature1-title {
            text-align: center;
          }
          .features16-feature2 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .features16-content4 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .features16-feature3 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .features16-content5 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .features16-text12 {
            display: inline-block;
          }
          .features16-text13 {
            display: inline-block;
          }
          .features16-text14 {
            display: inline-block;
          }
          .features16-text15 {
            display: inline-block;
          }
          .features16-text16 {
            display: inline-block;
          }
          .features16-text17 {
            display: inline-block;
          }
          .features16-text18 {
            display: inline-block;
          }
          .features16-text19 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .features16-section-title {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .features16-max-width {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .features16-section-title {
              width: auto;
            }
            .features16-text10 {
              text-align: center;
            }
            .features16-row {
              flex-direction: column;
            }
            .features16-feature2 {
              width: auto;
            }
            .features16-feature3 {
              width: auto;
            }
          }
        `}
      </style>
    </>
  )
}

Features16.defaultProps = {
  feature1Description: undefined,
  feature2Description: undefined,
  heading1: undefined,
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1671082133022-58ef6fc47a6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTIxOTk5M3w&ixlib=rb-4.1.0&q=80&w=1080',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1642054220431-649c53b0d3de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTIxOTk5NHw&ixlib=rb-4.1.0&q=80&w=1080',
  feature1ImageAlt: 'Custom Website Development Image',
  feature2ImageAlt: 'SEO Optimization Image',
  feature3Title: undefined,
  feature3Description: undefined,
  feature3ImageAlt: 'Responsive Web Design Image',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1581552667629-95439fadbbef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTIxOTk5M3w&ixlib=rb-4.1.0&q=80&w=1080',
  feature1Title: undefined,
  content1: undefined,
  feature2Title: undefined,
}

Features16.propTypes = {
  feature1Description: PropTypes.element,
  feature2Description: PropTypes.element,
  heading1: PropTypes.element,
  feature3ImageSrc: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature3Title: PropTypes.element,
  feature3Description: PropTypes.element,
  feature3ImageAlt: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature1Title: PropTypes.element,
  content1: PropTypes.element,
  feature2Title: PropTypes.element,
}

export default Features16
