import React, { Component } from 'react';
import FooterSection from '../AS components/FooterSection';
import Menu from '../YV components/Menu';
import OurStoryPage from '../YV components/OurStoryPage';
import BannerSection from './BannerSection';
import ContactUs from '../YV components/ContactUs';
import Footer from '../MK components/Footer';

export default function Homepage() {
    return (
        <>
            <BannerSection />
            <OurStoryPage />
            <Menu />
            <ContactUs />
            <Footer />
            <FooterSection />
        </>
    )
}