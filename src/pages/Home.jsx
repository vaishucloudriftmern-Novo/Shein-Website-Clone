import React from 'react'
import TopBanner from '../component/TopBanner'

import HeroCarousel from '../component/HeroCarousel'
import BrandsSection from '../component/BrandSection'
import FeaturesSection from '../component/FeatureSection'
import NewArrivalSlider from '../component/NewArrivalSlider'
import MostWantedSection from '../component/MostWantedSection'
import LimitedOfferSection from '../component/LimitedOfferSection'
import NewsletterSection from '../component/NewsLetterSection'
import Footer from '../component/Footer'

const Home = function Home({ wishlist, toggleWishlist }) {
  return (
    <div>
      <TopBanner />     
      <HeroCarousel />
      <BrandsSection />
      <FeaturesSection />
      <NewArrivalSlider wishlist={wishlist} toggleWishlist={toggleWishlist} />
      <MostWantedSection />
      <LimitedOfferSection />
      <NewsletterSection />
      <Footer />
    </div>
  )
}

export default Home;
