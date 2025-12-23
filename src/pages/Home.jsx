import React from 'react'
import HeroBanner from '../components/HeroBanner'
import CategoryCards from '../components/CategoryCards'
import NewArrivals from '../components/NewArrivals'
import TrendingProducts from '../components/TrendingProducts'
import FeaturedCollections from '../components/FeaturedCollections'
import WhyShopWithUs from '../components/WhyShopWithUs'
import Testimonials from '../components/Testimonials'
import NewsletterBanner from '../components/NewsletterBanner'
import Lookbook from '../components/Lookbook'

const Home = () => {
  return (
    <div>
      <HeroBanner/> 
      <CategoryCards/>
      <NewArrivals/>
      <TrendingProducts/>
      <FeaturedCollections />
      <WhyShopWithUs />
      <Testimonials />
      <NewsletterBanner />
      <Lookbook />
    </div>
  )
}

export default Home
