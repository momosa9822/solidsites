import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import Hero171 from './hero171'

const Features211 = (props) => {
  return (
    <>
      <div
        className={`features211-layout349 thq-section-padding ${props.rootClassName} `}
      >
        <Hero171
          heading1={
            <Fragment>
              <span className="features211-text10">
                we build websites that drive real results
              </span>
            </Fragment>
          }
          content12={
            <Fragment>
              <span className="features211-text11">
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="features211-text13">
                  we don&apos;t just make good looking sites , we build tools
                  that convert viewers into paying customers
                </span>
              </span>
            </Fragment>
          }
          rootClassName="hero171root-class-name1"
        ></Hero171>
        <div className="features211-container1">
          <div className="features211-container2 thq-card thq-flex-column">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="features211-icon1"
            >
              <path
                d="m1.75 9.75l2.5 2.5m3.5-4l2.5-2.5m-4.5 4l2.5 2.5l6-6.5"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <h2 className="features211-text14 thq-heading-2">
              {props.feature2Title ?? (
                <Fragment>
                  <span className="features211-text20">
                    help you appear on google and get visibility
                  </span>
                </Fragment>
              )}
            </h2>
          </div>
          <div className="features211-container3 thq-card thq-flex-column">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="features211-icon3"
            >
              <path
                d="m1.75 9.75l2.5 2.5m3.5-4l2.5-2.5m-4.5 4l2.5 2.5l6-6.5"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <h2 className="features211-text15 thq-heading-2">
              {props.feature3Title ?? (
                <Fragment>
                  <span className="features211-text19">
                    build trust with your customers instantly 
                  </span>
                </Fragment>
              )}
            </h2>
          </div>
          <div className="features211-container4 thq-card thq-flex-column">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="features211-icon5"
            >
              <path
                d="m1.75 9.75l2.5 2.5m3.5-4l2.5-2.5m-4.5 4l2.5 2.5l6-6.5"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <h2 className="features211-text16 thq-heading-2">
              {props.feature4Title ?? (
                <Fragment>
                  <span className="features211-text21">
                    <span>
                      turn
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="features211-text23">
                      browsers
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>into buyers </span>
                  </span>
                </Fragment>
              )}
            </h2>
          </div>
          <div className="features211-container5 thq-card thq-flex-column">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="features211-icon7"
            >
              <path
                d="m1.75 9.75l2.5 2.5m3.5-4l2.5-2.5m-4.5 4l2.5 2.5l6-6.5"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <h2 className="features211-text17 thq-heading-2">
              {props.feature1Title ?? (
                <Fragment>
                  <span className="features211-text18">
                    craft a website that fits your brand 
                  </span>
                </Fragment>
              )}
            </h2>
          </div>
        </div>
        <div className="features211-container6">
          <img
            alt={props.imageAlt1}
            src={props.imageSrc1}
            className="features211-image"
          />
        </div>
      </div>
      <style jsx>
        {`
          .features211-layout349 {
            display: flex;
            overflow: visible;
            position: relative;
            align-items: center;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
          }
          .features211-text10 {
            display: inline-block;
            text-transform: capitalize;
          }
          .features211-text11 {
            display: inline-block;
            line-height: 2;
          }
          .features211-text13 {
            font-size: 40px;
            line-height: 1;
            text-transform: capitalize;
          }
          .features211-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            padding-left: 12px;
            justify-content: flex-end;
          }
          .features211-container2 {
            color: var(--dl-color-theme-neutral-light);
            width: 100%;
            height: 100%;
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #ffffff;
          }
          .features211-icon1 {
            color: #7400af;
            width: 100%;
            height: 100%;
          }
          .features211-text14 {
            width: 100%;
            height: 100%;
          }
          .features211-container3 {
            color: var(--dl-color-theme-neutral-light);
            width: 100%;
            height: 100%;
            display: flex;
            align-self: flex-start;
            align-items: center;
            padding-left: 0px;
            flex-direction: column;
            justify-content: center;
            background-color: #ffffff;
          }
          .features211-icon3 {
            color: #ea00ff;
            width: 100%;
            height: 100%;
          }
          .features211-text15 {
            width: 100%;
            height: 100%;
            padding-left: var(--dl-layout-space-twounits);
            padding-right: var(--dl-layout-space-twounits);
          }
          .features211-container4 {
            color: var(--dl-color-theme-neutral-light);
            width: 100%;
            height: 100%;
            display: flex;
            align-self: flex-start;
            align-items: center;
            padding-top: 0px;
            padding-left: 0px;
            padding-right: 0px;
            flex-direction: column;
            padding-bottom: 0px;
            justify-content: center;
            background-color: #ffffff;
          }
          .features211-icon5 {
            color: #6f00bc;
            width: 100%;
            height: 100%;
            padding-bottom: 0px;
          }
          .features211-text16 {
            color: #6f02b3;
            width: 100%;
            height: 100%;
            padding-bottom: 120px;
          }
          .features211-container5 {
            color: var(--dl-color-theme-neutral-light);
            width: 100%;
            height: 100%;
            display: flex;
            padding: var(--dl-layout-space-oneandhalfunits);
            align-self: flex-start;
            align-items: center;
            justify-content: center;
            background-color: #ffffff;
          }
          .features211-icon7 {
            color: #ea00ff;
            width: 100%;
            height: 100%;
            padding-top: var(--dl-layout-space-twounits);
          }
          .features211-text17 {
            width: 100%;
            height: 100%;
          }
          .features211-container6 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
          }
          .features211-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            padding-top: 20px;
          }
          .features211-text18 {
            color: rgb(255, 0, 255);
            display: inline-block;
            line-height: 2;
            text-transform: capitalize;
          }
          .features211-text19 {
            color: rgb(255, 0, 237);
            display: inline-block;
            font-size: 33px;
            line-height: 2;
            text-transform: capitalize;
          }
          .features211-text20 {
            color: #7600b5;
            display: inline-block;
            line-height: 1.7;
            text-transform: capitalize;
          }
          .features211-text21 {
            display: inline-block;
            text-transform: capitalize;
          }
          .features211-text23 {
            line-height: 2;
          }

          @media (max-width: 991px) {
            .features211-container1 {
              width: 991px;
              padding-left: 0px;
            }
          }
          @media (max-width: 767px) {
            .features211-container1 {
              width: 767px;
              padding-left: 0px;
            }
            .features211-container2 {
              width: 100%;
            }
            .features211-container3 {
              width: 100%;
            }
            .features211-container4 {
              width: 100%;
            }
            .features211-container5 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .features211-layout349 {
              width: 100%;
              height: 100%;
            }
            .features211-container1 {
              width: auto;
              height: 925px;
              display: grid;
              grid-row-end: 2;
              grid-row-start: 1;
              grid-column-end: 2;
              grid-column-start: 1;
              grid-template-rows: 1fr 1fr;
              grid-template-columns: 1fr 1fr;
            }
            .features211-container2 {
              width: 100%;
              height: 100%;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: 0px;
            }
            .features211-icon1 {
              width: 100%;
              height: 100%;
            }
            .features211-text14 {
              width: 100%;
              height: 100%;
              padding-left: 0px;
              padding-right: 0px;
            }
            .features211-container3 {
              width: 100%;
              height: 100%;
              padding: 0px;
            }
            .features211-icon3 {
              width: 100%;
              height: 100%;
            }
            .features211-text15 {
              width: 100%;
              height: 100%;
              padding-right: 0px;
            }
            .features211-container4 {
              width: 100%;
              height: 100%;
              padding-bottom: 0px;
            }
            .features211-icon5 {
              width: 100%;
              height: 100%;
            }
            .features211-text16 {
              width: 100%;
              height: 100%;
              padding-bottom: 0px;
            }
            .features211-container5 {
              width: 100%;
              height: 100%;
              display: flex;
              align-self: flex-start;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: 0px;
            }
            .features211-icon7 {
              width: 100%;
              height: 100%;
            }
            .features211-text17 {
              width: 100%;
              height: 100%;
              padding-left: 0px;
              padding-right: 0px;
            }
            .features211-container6 {
              height: auto;
              padding-top: 0px;
            }
            .features211-image {
              width: 100%;
              height: 100%;
              padding-top: 0px;
            }
            .features211-text18 {
              color: rgb(255, 0, 255);
              line-height: 2;
              text-transform: capitalize;
            }
            .features211root-class-name {
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

Features211.defaultProps = {
  imageSrc1: '/b261ab32-83ce-4368-8015-ee94118245dc-removebg-preview-1500h.png',
  imageAlt1: 'image',
  feature1Title: undefined,
  rootClassName: '',
  feature3Title: undefined,
  feature2Title: undefined,
  feature4Title: undefined,
}

Features211.propTypes = {
  imageSrc1: PropTypes.string,
  imageAlt1: PropTypes.string,
  feature1Title: PropTypes.element,
  rootClassName: PropTypes.string,
  feature3Title: PropTypes.element,
  feature2Title: PropTypes.element,
  feature4Title: PropTypes.element,
}

export default Features211
