import React, { useState } from 'react'
import Header from '../../components/header/Header'
import Exploremenu from '../../components/exploreMenu/Exploremenu'
import FoodDisplay from '../../components/foodDispplay/FoodDisplay';
import AppDownload from '../../components/appDownload/AppDownload';

const Home = () => {
  const [category ,setCateogry] = useState("All");

  return (
    <div>
        <Header />
        <Exploremenu category={category} setCateogry= {setCateogry}/>
        <FoodDisplay  category = {category}  />
        <AppDownload />

      
    </div>
  )
}

export default Home
