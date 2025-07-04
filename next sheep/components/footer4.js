import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Footer4 = (props) => {
  return (
    <>
      <footer
        className={`footer4-footer7 thq-section-padding ${props.rootClassName} `}
      >
        <div className="footer4-max-width thq-section-max-width">
          <div className="footer4-content">
            <div className="footer4-logo1">
              <img
                alt={props.logoAlt}
                src={props.logoSrc}
                className="footer4-logo2"
              />
            </div>
            <div className="footer4-links">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-body-small"
              >
                {props.link1 ?? (
                  <Fragment>
                    <span className="footer4-text20">Home</span>
                  </Fragment>
                )}
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-body-small"
              >
                {props.link2 ?? (
                  <Fragment>
                    <span className="footer4-text18">Services</span>
                  </Fragment>
                )}
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-body-small"
              >
                {props.link3 ?? (
                  <Fragment>
                    <span className="footer4-text21">About Us</span>
                  </Fragment>
                )}
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-body-small"
              >
                {props.link4 ?? (
                  <Fragment>
                    <span className="footer4-text17">Contact Us</span>
                  </Fragment>
                )}
              </a>
            </div>
          </div>
          <div className="footer4-credits">
            <div className="thq-divider-horizontal"></div>
            <div className="footer4-row1">
              <div className="footer4-container1">
                <span className="thq-body-small">© 2024 solidsites</span>
              </div>
              <div className="footer4-footer-links1">
                <span className="footer4-text11 thq-body-small">
                  {props.privacyLink ?? (
                    <Fragment>
                      <span className="footer4-text19">Privacy Policy</span>
                    </Fragment>
                  )}
                </span>
                <span className="thq-body-small">
                  {props.termsLink ?? (
                    <Fragment>
                      <span className="footer4-text15">
                        Terms and Conditions
                      </span>
                    </Fragment>
                  )}
                </span>
                <span className="thq-body-small">
                  {props.cookiesLink ?? (
                    <Fragment>
                      <span className="footer4-text16">Cookies Policy</span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="footer4-row2">
              <div className="footer4-container2">
                <span className="thq-body-small">
                  {props.text ?? (
                    <Fragment>
                      <span className="footer4-text22">
                        All rights reserved. We provide high-quality, responsive
                        website design and development services tailored to help
                        small businesses, professionals, and service providers
                        establish a strong online presence. Our solutions are
                        designed with performance, simplicity, and long-term
                        reliability in mind. Use of this website constitutes
                        acceptance of our standard terms and conditions. For
                        more information, please refer to our [Terms of Service]
                        and [Privacy Policy].
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="footer4-footer-links2"></div>
            </div>
            <div className="footer4-row3">
              <div className="footer4-container3"></div>
              <div className="footer4-footer-links3"></div>
            </div>
          </div>
        </div>
      </footer>
      <style jsx>
        {`
          .footer4-footer7 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .footer4-max-width {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .footer4-content {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .footer4-logo1 {
            gap: 24px;
            display: flex;
            overflow: hidden;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .footer4-logo2 {
            width: 244px;
            height: 68px;
          }
          .footer4-links {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-items: flex-start;
          }
          .footer4-credits {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .footer4-row1 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .footer4-container1 {
            display: flex;
            align-items: flex-start;
          }
          .footer4-footer-links1 {
            gap: 24px;
            display: flex;
            align-items: flex-start;
          }
          .footer4-text11 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
          }
          .footer4-row2 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .footer4-container2 {
            display: flex;
            align-items: flex-start;
          }
          .footer4-footer-links2 {
            gap: 24px;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
          }
          .footer4-row3 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .footer4-container3 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
          }
          .footer4-footer-links3 {
            gap: 24px;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
          }
          .footer4-text15 {
            display: inline-block;
          }
          .footer4-text16 {
            display: inline-block;
          }
          .footer4-text17 {
            display: inline-block;
          }
          .footer4-text18 {
            display: inline-block;
          }
          .footer4-text19 {
            display: inline-block;
          }
          .footer4-text20 {
            display: inline-block;
          }
          .footer4-text21 {
            display: inline-block;
          }
          .footer4-text22 {
            display: inline-block;
          }

          @media (max-width: 767px) {
            .footer4-row1 {
              gap: var(--dl-layout-space-oneandhalfunits);
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .footer4-row2 {
              gap: var(--dl-layout-space-oneandhalfunits);
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .footer4-row3 {
              gap: var(--dl-layout-space-oneandhalfunits);
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .footer4-max-width {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .footer4-links {
              flex-direction: column;
            }
            .footer4-footer-links1 {
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .footer4-footer-links2 {
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .footer4-footer-links3 {
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
          }
        `}
      </style>
    </>
  )
}

Footer4.defaultProps = {
  termsLink: undefined,
  cookiesLink: undefined,
  logoSrc: '/mmmhfhm-200h.png',
  link4: undefined,
  link2: undefined,
  privacyLink: undefined,
  logoAlt: 'Website Development Agency Logo',
  link1: undefined,
  rootClassName: '',
  link3: undefined,
  text: undefined,
}

Footer4.propTypes = {
  termsLink: PropTypes.element,
  cookiesLink: PropTypes.element,
  logoSrc: PropTypes.string,
  link4: PropTypes.element,
  link2: PropTypes.element,
  privacyLink: PropTypes.element,
  logoAlt: PropTypes.string,
  link1: PropTypes.element,
  rootClassName: PropTypes.string,
  link3: PropTypes.element,
  text: PropTypes.element,
}

export default Footer4
