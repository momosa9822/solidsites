import React, { Fragment } from 'react'
import Link from 'next/link'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Hero17 = (props) => {
  return (
    <>
      <div className="hero17-header78">
        <div className="hero17-column thq-section-max-width thq-section-padding">
          <div className="hero17-content1">
            <h1 className="hero17-text1 thq-heading-1">
              {props.heading1 ?? (
                <Fragment>
                  <span className="hero17-text6">
                    Professional Website Development for Service-Based
                    Businesses
                  </span>
                </Fragment>
              )}
            </h1>
            <p className="hero17-text2 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="hero17-text5">
                    We specialize in creating custom websites for service-based
                    businesses such as HVAC, air conditioning, plumbing, and
                    more. Our team of experts will work closely with you to
                    design a website that showcases your services and helps you
                    attract more customers.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
          <div className="hero17-actions">
            <Link href="/contact">
              <a className="hero17-link1 thq-button-filled">
                <span className="thq-body-small">
                  {props.action1 ?? (
                    <Fragment>
                      <span className="hero17-text8">
                        Get a Free Consultation
                      </span>
                    </Fragment>
                  )}
                </span>
              </a>
            </Link>
            <Link href="/pricing">
              <a className="hero17-link2 thq-button-outline">
                <span className="thq-body-small">
                  {props.action2 ?? (
                    <Fragment>
                      <span className="hero17-text7">View Our Portfolio</span>
                    </Fragment>
                  )}
                </span>
              </a>
            </Link>
          </div>
        </div>
        <div className="hero17-content2">
          <div className="hero17-row-container1 thq-animated-group-container-horizontal thq-mask-image-horizontal">
            <div className="thq-animated-group-horizontal">
              <img
                alt={props.image1Alt}
                src={props.image1Src}
                className="hero17-placeholder-image10 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image2Alt}
                src={props.image2Src}
                className="hero17-placeholder-image11 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image3Alt}
                src={props.image3Src}
                className="hero17-placeholder-image12 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image4Alt}
                src={props.image4Src}
                className="hero17-placeholder-image13 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image5Alt}
                src={props.image5Src}
                className="hero17-placeholder-image14 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image6Alt}
                src={props.image6Src}
                className="hero17-placeholder-image15 thq-img-ratio-1-1 thq-img-scale"
              />
            </div>
            <div className="thq-animated-group-horizontal">
              <img
                alt={props.image1Alt}
                src={props.image1Src}
                className="hero17-placeholder-image16 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image2Alt}
                src={props.image2Src}
                className="hero17-placeholder-image17 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image3Alt}
                src={props.image3Src}
                className="hero17-placeholder-image18 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image4Alt}
                src={props.image4Src}
                className="hero17-placeholder-image19 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image5Alt}
                src={props.image5Src}
                className="hero17-placeholder-image20 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt="Hero Image"
                src="https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
                className="hero17-placeholder-image21 thq-img-ratio-1-1 thq-img-scale"
              />
            </div>
          </div>
          <div className="hero17-row-container2 thq-animated-group-container-horizontal thq-mask-image-horizontal">
            <div className="thq-animated-group-horizontal-reverse">
              <img
                alt={props.image7Alt}
                src={props.image7Src}
                className="hero17-placeholder-image22 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image8Alt}
                src={props.image8Src}
                className="hero17-placeholder-image23 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image9Alt}
                src={props.image9Src}
                className="hero17-placeholder-image24 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image10Alt}
                src={props.image10Src}
                className="hero17-placeholder-image25 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image11Alt}
                src={props.image11Src}
                className="hero17-placeholder-image26 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image12Alt}
                src={props.image12Src}
                className="hero17-placeholder-image27 thq-img-ratio-1-1 thq-img-scale"
              />
            </div>
            <div className="thq-animated-group-horizontal-reverse">
              <img
                alt={props.image7Alt}
                src={props.image7Src}
                className="hero17-placeholder-image28 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image8Alt}
                src={props.image8Src}
                className="hero17-placeholder-image29 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image9Alt}
                src={props.image9Src}
                className="hero17-placeholder-image30 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image10Alt}
                src={props.image10Src}
                className="hero17-placeholder-image31 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image11Alt}
                src={props.image11Src}
                className="hero17-placeholder-image32 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt="Hero Image"
                src="https://images.unsplash.com/photo-1568214379698-8aeb8c6c6ac8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxncmFmaWN8ZW58MHx8fHwxNzE1Nzk0OTk5fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
                className="hero17-placeholder-image33 thq-img-ratio-1-1 thq-img-scale"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="hero17-container2">
            <Script
              html={`<style>
  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 16px));
    }
  }

  @keyframes scroll-y {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - 16px));
    }
  }
</style>
`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .hero17-header78 {
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
          .hero17-column {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-unit);
          }
          .hero17-content1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .hero17-text1 {
            text-align: center;
          }
          .hero17-text2 {
            text-align: center;
          }
          .hero17-actions {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-unit);
          }
          .hero17-link1 {
            text-decoration: none;
          }
          .hero17-link2 {
            text-decoration: none;
          }
          .hero17-content2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .hero17-row-container1 {
            width: 100%;
          }
          .hero17-placeholder-image10 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image11 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image12 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image13 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image14 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image15 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image16 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image17 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image18 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image19 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image20 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image21 {
            width: 400px;
            height: 400px;
          }
          .hero17-row-container2 {
            width: 100%;
          }
          .hero17-placeholder-image22 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image23 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image24 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image25 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image26 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image27 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image28 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image29 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image30 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image31 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image32 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image33 {
            width: 400px;
            height: 400px;
          }
          .hero17-container2 {
            display: contents;
          }
          .hero17-text5 {
            display: inline-block;
          }
          .hero17-text6 {
            display: inline-block;
          }
          .hero17-text7 {
            display: inline-block;
          }
          .hero17-text8 {
            display: inline-block;
          }
          @media (max-width: 767px) {
            .hero17-content2 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .hero17-actions {
              width: 100%;
              flex-direction: column;
            }
            .hero17-link1 {
              width: 100%;
            }
            .hero17-link2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Hero17.defaultProps = {
  image12Src:
    'https://images.unsplash.com/photo-1545280405-f06710f1779d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MDc5MjkxNnw&ixlib=rb-4.1.0&q=80&w=1080',
  image6Src:
    'https://images.unsplash.com/photo-1612836639523-2ed74bc0209e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MDc5MjkxMnw&ixlib=rb-4.1.0&q=80&w=1080',
  image10Src:
    'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MDc5MjkyN3w&ixlib=rb-4.1.0&q=80&w=1080',
  image3Alt: 'Hero Image',
  image4Src:
    'https://images.unsplash.com/photo-1611599281058-94426d0618a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MDc5MjkyN3w&ixlib=rb-4.1.0&q=80&w=1080',
  image1Alt: 'Website Development for Service-Based Businesses',
  image5Src:
    'https://images.unsplash.com/photo-1661526351071-0c2b939b695f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MDc5MjkyNnw&ixlib=rb-4.1.0&q=80&w=1080',
  content1: undefined,
  image8Alt: 'Hero Image',
  image9Alt: 'Hero Image',
  image5Alt: 'Hero Image',
  image6Alt: 'Hero Image',
  image4Alt: 'Hero Image',
  heading1: undefined,
  image7Alt: 'Hero Image',
  image3Src:
    'https://images.unsplash.com/photo-1554863798-d89af6030d7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MDc5Mjg3OXw&ixlib=rb-4.1.0&q=80&w=1080',
  action2: undefined,
  image2Alt: 'Hero Image',
  action1: undefined,
  image11Src:
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MDc5Mjg5NHw&ixlib=rb-4.1.0&q=80&w=1080',
  image9Src:
    'https://images.unsplash.com/photo-1484627147104-f5197bcd6651?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MDc5MjkyNXw&ixlib=rb-4.1.0&q=80&w=1080',
  image11Alt: 'Hero Image',
  image2Src:
    'https://images.unsplash.com/photo-1618522284999-3430d5f5f2da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MDc5Mjg4Mnw&ixlib=rb-4.1.0&q=80&w=1080',
  image10Alt: 'Hero Image',
  image12Alt: 'Hero Image',
  image7Src:
    'https://images.unsplash.com/photo-1720180244195-d58268d7e7f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MDc5Mjg5Nnw&ixlib=rb-4.1.0&q=80&w=1080',
  image1Src:
    'https://images.unsplash.com/photo-1629732902845-70eebe524b05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MDc5MjkyOHw&ixlib=rb-4.1.0&q=80&w=1080',
  image8Src:
    'https://images.unsplash.com/photo-1700892296271-2d975c2c0a6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MDc5MjkyNnw&ixlib=rb-4.1.0&q=80&w=1080',
}

Hero17.propTypes = {
  image12Src: PropTypes.string,
  image6Src: PropTypes.string,
  image10Src: PropTypes.string,
  image3Alt: PropTypes.string,
  image4Src: PropTypes.string,
  image1Alt: PropTypes.string,
  image5Src: PropTypes.string,
  content1: PropTypes.element,
  image8Alt: PropTypes.string,
  image9Alt: PropTypes.string,
  image5Alt: PropTypes.string,
  image6Alt: PropTypes.string,
  image4Alt: PropTypes.string,
  heading1: PropTypes.element,
  image7Alt: PropTypes.string,
  image3Src: PropTypes.string,
  action2: PropTypes.element,
  image2Alt: PropTypes.string,
  action1: PropTypes.element,
  image11Src: PropTypes.string,
  image9Src: PropTypes.string,
  image11Alt: PropTypes.string,
  image2Src: PropTypes.string,
  image10Alt: PropTypes.string,
  image12Alt: PropTypes.string,
  image7Src: PropTypes.string,
  image1Src: PropTypes.string,
  image8Src: PropTypes.string,
}

export default Hero17
