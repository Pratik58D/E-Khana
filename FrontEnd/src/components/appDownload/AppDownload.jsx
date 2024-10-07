import React from 'react'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download m-auto mt-24 text-4xl text-center font-medium' id='app-download'>
        <p className='capitalize'>for better Experience Download <br /> Ekhana App</p>

    <div className='app-download-platforms flex justify-center gap-10 mt-10'>
        <img src={assets.play_store} alt="" className='w-[max(30vw,120px)] max-w-44 transition duration-300 cursor-pointer hover:scale-105' />
        <img src= {assets.app_store} alt="" className='w-[max(30vw,120px)] max-w-44 transition duration-300 cursor-pointer hover:scale-105' />
    </div>
</div>
  )
}

export default AppDownload