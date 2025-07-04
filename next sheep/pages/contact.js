import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Navbar8 from '../components/navbar8'
import ContactForm91 from '../components/contact-form91'
import FAQ14 from '../components/faq14'
import Contact11 from '../components/contact11'
import Footer4 from '../components/footer4'

const Contact = (props) => {
  return (
    <>
      <div className="contact-container">
        <Head>
          <title>Contact - Quick Strong Sheep</title>
          <meta property="og:title" content="Contact - Quick Strong Sheep" />
        </Head>
        <Navbar8
          link1={
            <Fragment>
              <span className="contact-text10">Home</span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="contact-text11">Pricing</span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="contact-text12">About</span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="contact-text13">Contact</span>
            </Fragment>
          }
          page1={
            <Fragment>
              <span className="contact-text14">Home</span>
            </Fragment>
          }
          page2={
            <Fragment>
              <span className="contact-text15">Services</span>
            </Fragment>
          }
          page3={
            <Fragment>
              <span className="contact-text16">About Us</span>
            </Fragment>
          }
          page4={
            <Fragment>
              <span className="contact-text17">Contact</span>
            </Fragment>
          }
          action1={
            <Fragment>
              <span className="contact-text18">Pricing</span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="contact-text19">Get a qoute</span>
            </Fragment>
          }
          link1Url="/"
          link1Url1="/pricing"
          rootClassName="navbar8root-class-name1"
          page1Description={
            <Fragment>
              <span className="contact-text20">
                Welcome to our website development agency!
              </span>
            </Fragment>
          }
          page2Description={
            <Fragment>
              <span className="contact-text21">
                Explore our services for service-based businesses.
              </span>
            </Fragment>
          }
          page3Description={
            <Fragment>
              <span className="contact-text22">
                Learn more about our agency and team.
              </span>
            </Fragment>
          }
          page4Description={
            <Fragment>
              <span className="contact-text23">
                Get in touch with us for your website needs.
              </span>
            </Fragment>
          }
        ></Navbar8>
        <ContactForm91
          action={
            <Fragment>
              <span className="contact-text24">submit</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="contact-text25">
                Have a question or need a quote? Reach out to us!
              </span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="contact-text26">
                Fill out the form below to get in touch with us.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="contact-text27">Contact Us</span>
            </Fragment>
          }
          rootClassName="contact-form91root-class-name"
        ></ContactForm91>
        <FAQ14
          text={
            <Fragment>
              <span className="contact-text28">
                We offer complete website solutions for small service-based
                businesses. This includes custom web design, responsive mobile
                development, SEO setup, and conversion-boosting layouts. Whether
                you need a simple one-pager or a full multi-section business
                site, we’ve got you covered.
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="contact-text29">
                Most websites take 1 to 2 weeks, depending on your needs. Simple
                landing pages can be done in a few days, while larger, custom
                sites may take a bit longer , but we always keep you updated and
                deliver on time.
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="contact-text30">
                {' '}
                No , the demo is free , after you are satisfied we only require
                a 50% deposit to secure your booking. The remaining amount is
                paid on final delivery before going live.
              </span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="contact-text31">
                <span>
                  We don’t directly host websites, but we’ll set up and connect
                  you with reliable, low-cost hosting platforms like Hostinger,
                  Netlify, or local South African providers. We handle the tech
                  , you don’t have to lift a finger.
                </span>
                <br></br>
                <br></br>
              </span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="contact-text35">
                Just send us a message via the contact form or email, and we’ll
                get back to you within a few hours. We’ll chat about your needs,
                budget, and ideas , then give you a custom plan and quote. No
                stress, no pressure, just real results.
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="contact-text36">
                Some commonly asked questions 
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="contact-text37">FAQs</span>
            </Fragment>
          }
          heading2={
            <Fragment>
              <span className="contact-text38">Still have a question?</span>
            </Fragment>
          }
          faq1Question={
            <Fragment>
              <span className="contact-text39">
                What services do you offer?
              </span>
            </Fragment>
          }
          faq2Question={
            <Fragment>
              <span className="contact-text40">
                How long does it take to build a custom website?
              </span>
            </Fragment>
          }
          faq3Question={
            <Fragment>
              <span className="contact-text41">
                {' '}
                Do I need to pay the full amount upfront?
              </span>
            </Fragment>
          }
          faq4Question={
            <Fragment>
              <span className="contact-text42">
                Do you provide hosting services for websites?
              </span>
            </Fragment>
          }
          faq5Question={
            <Fragment>
              <span className="contact-text43">
                How do I get started with your website development services?
              </span>
            </Fragment>
          }
        ></FAQ14>
        <Contact11
          email={
            <Fragment>
              <span className="contact-text44">
                buildwithsolidsites@gmail.com
              </span>
            </Fragment>
          }
          phone1={
            <Fragment>
              <span className="contact-text45">+(27)64 859 4861</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="contact-text46">
                Have a project in mind or need more information? Reach out to
                us!
              </span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="contact-text47">
                Our team is ready to assist you with any inquiries or requests.
              </span>
            </Fragment>
          }
          content3={
            <Fragment>
              <span className="contact-text48">
                Feel free to contact us via email, phone, or whatsapp.
              </span>
            </Fragment>
          }
          content5={
            <Fragment>
              <span className="contact-text49">+(27)64 859 4861</span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="contact-text50">Get in Touch</span>
            </Fragment>
          }
        ></Contact11>
        <Footer4
          text={
            <Fragment>
              <span className="contact-text51">
                All rights reserved. We provide high-quality, responsive website
                design and development services tailored to help small
                businesses, professionals, and service providers establish a
                strong online presence. Our solutions are designed with
                performance, simplicity, and long-term reliability in mind. Use
                of this website constitutes acceptance of our standard terms and
                conditions. For more information, please refer to our [Terms of
                Service] and [Privacy Policy].
              </span>
            </Fragment>
          }
          link1={
            <Fragment>
              <span className="contact-text52">Home</span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="contact-text53">Services</span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="contact-text54">About Us</span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="contact-text55">Contact Us</span>
            </Fragment>
          }
          termsLink={
            <Fragment>
              <span className="contact-text56">Terms and Conditions</span>
            </Fragment>
          }
          cookiesLink={
            <Fragment>
              <span className="contact-text57">Cookies Policy</span>
            </Fragment>
          }
          privacyLink={
            <Fragment>
              <span className="contact-text58">Privacy Policy</span>
            </Fragment>
          }
          rootClassName="footer4root-class-name"
        ></Footer4>
      </div>
      <style jsx>
        {`
          .contact-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .contact-text10 {
            display: inline-block;
          }
          .contact-text11 {
            display: inline-block;
          }
          .contact-text12 {
            display: inline-block;
          }
          .contact-text13 {
            display: inline-block;
          }
          .contact-text14 {
            display: inline-block;
          }
          .contact-text15 {
            display: inline-block;
          }
          .contact-text16 {
            display: inline-block;
          }
          .contact-text17 {
            display: inline-block;
          }
          .contact-text18 {
            display: inline-block;
          }
          .contact-text19 {
            display: inline-block;
            text-transform: capitalize;
          }
          .contact-text20 {
            display: inline-block;
          }
          .contact-text21 {
            display: inline-block;
          }
          .contact-text22 {
            display: inline-block;
          }
          .contact-text23 {
            display: inline-block;
          }
          .contact-text24 {
            display: inline-block;
            text-transform: capitalize;
          }
          .contact-text25 {
            display: inline-block;
          }
          .contact-text26 {
            display: inline-block;
          }
          .contact-text27 {
            display: inline-block;
          }
          .contact-text28 {
            display: inline-block;
          }
          .contact-text29 {
            display: inline-block;
          }
          .contact-text30 {
            display: inline-block;
          }
          .contact-text31 {
            display: inline-block;
          }
          .contact-text35 {
            display: inline-block;
          }
          .contact-text36 {
            display: inline-block;
            text-transform: capitalize;
          }
          .contact-text37 {
            display: inline-block;
          }
          .contact-text38 {
            display: inline-block;
          }
          .contact-text39 {
            display: inline-block;
          }
          .contact-text40 {
            display: inline-block;
          }
          .contact-text41 {
            display: inline-block;
          }
          .contact-text42 {
            display: inline-block;
          }
          .contact-text43 {
            display: inline-block;
          }
          .contact-text44 {
            display: inline-block;
          }
          .contact-text45 {
            display: inline-block;
          }
          .contact-text46 {
            display: inline-block;
          }
          .contact-text47 {
            display: inline-block;
          }
          .contact-text48 {
            display: inline-block;
            text-transform: capitalize;
          }
          .contact-text49 {
            display: inline-block;
          }
          .contact-text50 {
            display: inline-block;
          }
          .contact-text51 {
            display: inline-block;
          }
          .contact-text52 {
            display: inline-block;
          }
          .contact-text53 {
            display: inline-block;
          }
          .contact-text54 {
            display: inline-block;
          }
          .contact-text55 {
            display: inline-block;
          }
          .contact-text56 {
            display: inline-block;
          }
          .contact-text57 {
            display: inline-block;
          }
          .contact-text58 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default Contact
