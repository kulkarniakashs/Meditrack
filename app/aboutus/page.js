import React from 'react'
import Image from 'next/image'
import Navbar from '@/Components/Navbar'
import Footer from '@/Components/Footer'
function page() {
  return (
  <>
  <Navbar/>
    <div className='main bg-blue-50'>
    <div className='banner flex h-max-[50vh] justify-around items-center flex-col-reverse sm:flex-row  py-8'>
      <div className='sm:text-3xl text-2xl font-serif font-bold sm:max-w-[45vw] max-w-[70vw] sm:min-w-[45vw]'>
      Optimize Your Supply Chain: Seamless Medicine Tracking & Ordering.
      </div>
      <div className='max-w-[80vw] sm:max-w-[45vw] ele'>
        <Image src="/image.png" width={500} height={700} alt="Picture of the author" layout='responsive'/>
      </div>
    </div>

    <div className='banner flex sm:h-max-[50vh] justify-around sm:flex-row items-center flex-col  py-5'>
      <div className='max-w-[80vw] sm:max-w-[45vw] ele'>
      <Image src="/hospitalReception.png" width={500} height={700} alt="Picture of the author" />
      </div>
      <div className='text-4xl sm:max-w-[45vw] max-w-[80vw]'>
          <ul className='ulNum'>
            <li className='text-xl'><b>Automated Inventory Tracking:</b> Easily monitor and manage medicine stock levels.
            </li>
            <li className='text-xl'> <b>Streamlined Ordering Process: </b>Simplify procurement with seamless order placement and tracking.</li>
          </ul>     
      </div>
    </div>

    <div className='banner flex sm:h-max-[50vh] justify-around items-center flex-col-reverse  py-5 sm:flex-row'>
      <div className='text-4xl sm:max-w-[45vw] max-w-[80vw]'>
          <ul className='ulNum'>
            <li className='text-xl'><b>Direct Access to Hospitals:</b> Connect with hospitals directly, increasing sales opportunities.</li>
            <li className='text-xl'><b>Inventory Synchronization:</b> Keep your inventory updated, ensuring accurate availability for hospital orders.</li>
          </ul>   
      </div>
      <div className='max-w-[80vw] sm:max-w-[45vw] ele' >
        <Image src="/vendor.png" width={500} height={700} alt="Picture of the author" />
      </div>
    </div>
  </div>
  <Footer/>
  </>
  )
}

export default page
