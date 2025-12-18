import React from 'react'
import HeroBanner from '../components/HeroBanner'
import CategoryCards from '../components/CategoryCards'
import NewArrivals from '../components/NewArrivals'

const Home = () => {
  return (
    <div>
      <HeroBanner/> 
      <CategoryCards/>
      <NewArrivals/>
    </div>
  )
}

export default Home
