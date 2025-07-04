import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import Hero171 from './hero171'

const Features21 = (props) => {
  return (
    <>
      <div
        className={`features21-layout349 thq-section-padding ${props.rootClassName} `}
      >
        <Hero171
          heading1={
            <Fragment>
              <span className="features21-text10">
                You&apos;re losing sales every day without a website
              </span>
            </Fragment>
          }
          content12={
            <Fragment>
              <span className="features21-text11">
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="features21-text13">
                  The Real Cost of Not Having a Website
                </span>
              </span>
            </Fragment>
          }
          rootClassName="hero171root-class-name2"
        ></Hero171>
        <div className="features21-max-width thq-section-max-width thq-grid-auto-300">
          <div className="features21-container1 thq-card thq-flex-column">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="features21-icon10"
            >
              <g
                fill="none"
                color="currentColor"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M14 2.222q-.97-.198-2-.2c-5.523 0-10 4.472-10 9.989S6.477 22 12 22s10-4.472 10-9.989q-.002-1.027-.2-1.998"></path>
                <path d="M12 9.014c-1.105 0-2 .671-2 1.499c0 .827.895 1.498 2 1.498s2 .67 2 1.498s-.895 1.499-2 1.499m0-5.994c.87 0 1.612.417 1.886 1m-1.886-1v-.999m0 6.993c-.87 0-1.612-.417-1.886-1m1.886 1v.999M21.995 2L17.82 6.174m-.824-3.653l.118 3.088c0 .728.435 1.182 1.228 1.239l3.124.147"></path>
              </g>
            </svg>
            <h2 className="features21-text14 thq-heading-2">
              {props.feature1Title ?? (
                <Fragment>
                  <span className="features21-text23">
                    70% of people searching for a service provider ignore
                    businesses with no website.
                  </span>
                </Fragment>
              )}
            </h2>
          </div>
          <div className="features21-container2 thq-card thq-flex-column">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="features21-icon14"
            >
              <g
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M20 20H4V4"></path>
                <path d="M4 16.5L12 9l3 3l4.5-4.5"></path>
              </g>
            </svg>
            <h2 className="features21-text15 thq-heading-2">
              {props.feature2Title ?? (
                <Fragment>
                  <span className="features21-text20">
                    75% of people judge a company’s trust worthiness based on
                    its website design.
                  </span>
                </Fragment>
              )}
            </h2>
          </div>
          <div className="features21-container3 thq-card thq-flex-column">
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              className="features21-icon18"
            >
              <path
                d="M28 27.126c3.194 0 5.941-2.852 5.941-6.566c0-3.669-2.762-6.387-5.941-6.387s-5.942 2.778-5.942 6.417c0 3.684 2.748 6.536 5.942 6.536m-17.097.341c2.763 0 5.17-2.495 5.17-5.718c0-3.194-2.422-5.556-5.17-5.556c-2.763 0-5.199 2.421-5.184 5.585c0 3.194 2.406 5.69 5.184 5.69m34.194 0c2.778 0 5.184-2.495 5.184-5.689c0-3.164-2.421-5.585-5.184-5.585c-2.748 0-5.17 2.362-5.17 5.555c0 3.224 2.407 5.72 5.17 5.72M2.614 40.881h11.29c-1.545-2.243.341-6.759 3.535-9.225c-1.65-1.099-3.773-1.916-6.55-1.916C4.188 29.74 0 34.686 0 38.801c0 1.337.743 2.08 2.614 2.08m50.772 0c1.886 0 2.614-.743 2.614-2.08c0-4.115-4.189-9.061-10.888-9.061c-2.778 0-4.902.817-6.55 1.916c3.193 2.466 5.08 6.982 3.535 9.225Zm-34.73 0h18.672c2.332 0 3.164-.669 3.164-1.976c0-3.832-4.798-9.12-12.507-9.12c-7.694 0-12.492 5.288-12.492 9.12c0 1.307.832 1.976 3.164 1.976"
                fill="currentColor"
              ></path>
            </svg>
            <h2 className="thq-heading-2 features21-text16">
              {props.feature3Title ?? (
                <Fragment>
                  <span className="features21-text22">
                    Service businesses with a website get 2–3x more bookings
                    from local Google searches.
                  </span>
                </Fragment>
              )}
            </h2>
          </div>
          <div className="features21-container4 thq-card thq-flex-column">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="features21-icon20"
            >
              <g fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M3.2 14.222V4a2 2 0 0 1 2-2h13.6a2 2 0 0 1 2 2v10.222m-17.6 0h17.6m-17.6 0l-1.48 5.234A2 2 0 0 0 3.644 22h16.712a2 2 0 0 0 1.924-2.544l-1.48-5.234"></path>
                <path
                  d="M11 19h2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </svg>
            <h2 className="thq-heading-2 features21-text17">
              {props.feature4Title ?? (
                <Fragment>
                  <span className="features21-text21">
                    Customers spend 50% more with service providers who look
                    professional online.
                  </span>
                </Fragment>
              )}
            </h2>
          </div>
        </div>
        <div className="features21-container5">
          <Hero171
            heading1={
              <Fragment>
                <span className="features21-text18">
                  it&apos;s not optional anymore
                </span>
              </Fragment>
            }
            content12={
              <Fragment>
                <span className="features21-text19">
                  and that&apos;s where we come in
                </span>
              </Fragment>
            }
            rootClassName="hero171root-class-name"
          ></Hero171>
        </div>
      </div>
      <style jsx>
        {`
          .features21-layout349 {
            height: 100%;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
          }
          .features21-text10 {
            display: inline-block;
          }
          .features21-text11 {
            display: inline-block;
            line-height: 2;
          }
          .features21-text13 {
            font-size: 45px;
          }
          .features21-max-width {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: 0px;
            padding-left: 0px;
          }
          .features21-container1 {
            color: var(--dl-color-theme-neutral-light);
            width: 100%;
            height: 100%;
            display: flex;
            align-self: flex-start;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: 0px;
            padding-right: 0px;
            flex-direction: column;
            padding-bottom: 0px;
            justify-content: center;
            background-color: #ffffff;
          }
          .features21-icon10 {
            color: #ff00d1;
            width: 100%;
            height: 100%;
          }
          .features21-text14 {
            width: 100%;
            height: 100%;
          }
          .features21-container2 {
            color: var(--dl-color-theme-neutral-light);
            height: 705px;
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
          .features21-icon14 {
            color: #8400e5;
            width: 100%;
            height: 100%;
          }
          .features21-text15 {
            width: 100%;
            height: 100%;
          }
          .features21-container3 {
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
          .features21-icon18 {
            color: #fd00ff;
            width: 100%;
            height: 100%;
          }
          .features21-container4 {
            color: var(--dl-color-theme-neutral-light);
            height: 600px;
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
          .features21-icon20 {
            color: #ce00ff;
            width: 100%;
            height: 100%;
          }
          .features21-container5 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .features21-text18 {
            display: inline-block;
            text-transform: capitalize;
          }
          .features21-text19 {
            display: inline-block;
            font-size: 45px;
            line-height: 2;
            text-transform: capitalize;
          }
          .features21-text20 {
            color: #a700ff;
            display: inline-block;
            line-height: 2;
          }
          .features21-text21 {
            color: #a401ff;
            display: inline-block;
          }
          .features21-text22 {
            color: #ff00ed;
            display: inline-block;
          }
          .features21-text23 {
            color: #ff00ff;
            display: inline-block;
          }

          @media (max-width: 991px) {
            .features21-max-width {
              display: flex;
              flex-direction: row;
              justify-content: center;
            }
            .features21-container1 {
              width: 100%;
              height: 100%;
            }
            .features21-container2 {
              width: 100%;
              height: 100%;
            }
            .features21-text15 {
              height: 100%;
            }
            .features21-container3 {
              width: 100%;
              height: 100%;
            }
            .features21-text16 {
              width: 100%;
              height: 100%;
            }
            .features21-container4 {
              width: 100%;
              height: 100%;
            }
          }
          @media (max-width: 767px) {
            .features21-max-width {
              width: 100%;
              height: 100%;
            }
            .features21-container1 {
              width: 100%;
              height: 100%;
            }
            .features21-icon10 {
              width: 100%;
              height: 100%;
            }
            .features21-text14 {
              width: 100%;
              height: 100%;
              overflow: scroll;
            }
            .features21-container2 {
              width: 100%;
              height: 100%;
              align-self: flex-end;
            }
            .features21-icon14 {
              width: 100%;
              height: 100%;
            }
            .features21-text15 {
              height: 100%;
              overflow: scroll;
            }
            .features21-container3 {
              width: 100%;
              height: 100%;
            }
            .features21-icon18 {
              width: 100%;
              height: 100%;
            }
            .features21-text16 {
              width: 100%;
              height: 100%;
              overflow: scroll;
            }
            .features21-container4 {
              width: 100%;
              height: 100%;
            }
            .features21-text17 {
              width: 100%;
              height: 100%;
              overflow: scroll;
              align-self: center;
              min-height: auto;
              aspect-ratio: auto;
            }
            .features21-container5 {
              width: 100%;
              height: 100%;
            }
          }
          @media (max-width: 479px) {
            .features21-layout349 {
              width: 100%;
              height: 100%;
              padding-bottom: 0px;
            }
            .features21-max-width {
              width: 100%;
              height: 100%;
              display: grid;
              align-self: flex-start;
              place-items: center;
              margin-bottom: var(--dl-layout-space-halfunit);
              grid-template-rows: 1fr 1fr;
              grid-template-columns: 1fr 1fr;
            }
            .features21-container1 {
              width: 100%;
              height: 100%;
            }
            .features21-icon10 {
              padding-bottom: 0px;
            }
            .features21-text14 {
              overflow: visible;
            }
            .features21-container2 {
              width: 100%;
              height: 100%;
              padding-top: 0px;
            }
            .features21-icon14 {
              width: 100%;
              height: 100%;
              overflow: visible;
            }
            .features21-text15 {
              overflow: visible;
            }
            .features21-container3 {
              height: 100%;
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .features21-icon18 {
              width: 100%;
              height: 100%;
            }
            .features21-text16 {
              overflow: visible;
            }
            .features21-container4 {
              width: 100%;
              height: 100%;
            }
            .features21-text17 {
              overflow: visible;
            }
            .features21-container5 {
              width: 100%;
              height: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Features21.defaultProps = {
  feature2Title: undefined,
  feature4Title: undefined,
  feature3Title: undefined,
  rootClassName: '',
  feature1Title: undefined,
}

Features21.propTypes = {
  feature2Title: PropTypes.element,
  feature4Title: PropTypes.element,
  feature3Title: PropTypes.element,
  rootClassName: PropTypes.string,
  feature1Title: PropTypes.element,
}

export default Features21
