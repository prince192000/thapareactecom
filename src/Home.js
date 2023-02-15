import React from 'react'
import HeroSection from './Components/HeroSection';
import Trusted from './Components/Trusted';
import Services from './Components/Services';
import FeatureProduct from './Components/FeatureProduct';


 const Home = () => {

  const data = {
    name : 'Prince Store',
  }
  return (
    <>
    <HeroSection myData={data}/>
    <FeatureProduct/>
    <Services/>
    <Trusted/>
    
    </>
  )
};


export default Home;