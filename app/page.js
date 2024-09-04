import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function page() {
  return (
    <>
    <nav id= "navbar" className='flex justify-between items-center bg-green-300 gap-6 px-8 py-5 m-0 sticky top-0 z-10' >
      <div>
        <Link href="/">
        <div className='flex items-center gap-3 text-3xl font-medium font-serif'>
        <Image src="/newLogo.png" height={50} width={50} alt="Logo"/>
        <div className='hidden sm:inline-block roboto-condensed '>MediTrack</div>
        </div>
        </Link>
      </div>
      <ul className='flex justify-between items-end gap-6 kanit-semibold'>
       <li> <Link href="/">Home</Link></li>
       <li> <Link href="/aboutus" >About</Link></li>
       <li> <Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
    <div className='border'></div>
    <div className='main bg-blue-50'>
    <div className='banner flex h-max-[50vh] justify-around items-center flex-col-reverse sm:flex-row  py-8'>
      <div className='sm:text-3xl text-2xl font-serif font-bold sm:max-w-[45vw] max-w-[70vw] sm:min-w-[45vw]'>
      Optimize Your Supply Chain: Seamless Medicine Tracking & Ordering.
      </div>
      <div className='max-w-[80vw] sm:max-w-[45vw] ele'>
        <Image src="/image.png" width={500} height={700} alt="Picture of the author"/>
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
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-lg my-3 text-2xl mx-auto">Hospital Registration</button>
      </div>
    </div>

    <div className='banner flex sm:h-max-[50vh] justify-around items-center flex-col-reverse  py-5 sm:flex-row '>
      <div className='text-4xl sm:max-w-[45vw] max-w-[80vw]'>
          <ul className='ulNum'>
            <li className='text-xl'><b>Direct Access to Hospitals:</b> Connect with hospitals directly, increasing sales opportunities.</li>
            <li className='text-xl'><b>Inventory Synchronization:</b> Keep your inventory updated, ensuring accurate availability for hospital orders.</li>
          </ul> 
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-lg my-3 text-2xl">Vendor Registration</button>  
      </div>
      <div className='max-w-[80vw] sm:max-w-[45vw] ele' >
        <Image src="/vendor.png" width={500} height={700} alt="Picture of the author" />
      </div>
    </div>
  </div>

<div className='products flex flex-col sm:flex-row py-5 sm:max-h-[45vh] bg-green-200 justify-around items-center w-full gap-2 sm:gap-5 '>
    <div className='block1 max-h-[45vh] sm:max-w-[30vw] bg-green-200  p-4 flex flex-row sm:flex-col gap-5 items-center rounded-full flex-1 h-full w-full'>
      <Image src="/medicine-bottle.png" height={100} width={100} alt='medicine picture'/>
      <div className='text-xl font-medium'>Precision Tracking, Secure Supply</div>
    </div>

    <div className='block1 max-h-[45vh] sm:max-w-[30vw] bg-green-200 p-4 flex flex-row sm:flex-col gap-5 items-center rounded-full flex-1 h-full w-full'>
      <Image src="/tablet.png" height={100} width={100} alt='medicine picture'/>
      <div className='text-xl font-medium'>Efficiency in Every Dose, Delivered Right</div>
    </div>
    
    <div className='block1 max-h-[45vh] sm:max-w-[30vw] bg-green-200 p-4 flex flex-row sm:flex-col gap-5 items-center rounded-full flex-1 h-full w-full'>
      <Image src="/material-management.png" height={100} width={100} alt='medicine picture'/>
      <div className='text-xl font-medium'>Streamlined Orders, Optimized Inventory</div>
    </div>
</div>

  <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between flex-row">
          
          {/* About Section */}
          <div className="w-2/3 sm:w-1/2 md:w-1/4 mb-6">
            <h5 className="font-bold text-lg mb-2">About Us</h5>
            <p className="text-sm">
            A comprehensive solution for hospitals and vendors to manage medicine inventories, streamline orders, and ensure efficient supply chain management.
            </p>
          </div>

          {/* Services Section */}
          <div className="w-1/3 sm:w-1/2 md:w-1/4 mb-6">
            <h5 className="font-bold text-lg mb-2">Quick Access</h5>
            <ul>
              <li className="mb-2">
                <Link href="/services/web-development" className="text-sm hover:underline">Dashboard</Link>
              </li>
              <li className="mb-2">
                <Link href="/services/app-development" className="text-sm hover:underline">Hospital</Link>
              </li>
              <li className="mb-2">
                <Link href="/services/digital-marketing" className="text-sm hover:underline">Vendor</Link>
              </li>
              <li className="mb-2">
                <Link href="/services/seo" className="text-sm hover:underline">Orders</Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="w-1/2 sm:w-1/2 md:w-1/4 mb-6">
            <h5 className="font-bold text-lg mb-2">Contact Us</h5>
            <ul>
              <li className="mb-2 text-sm">Email: contact@meditrack.com</li>
              <li className="mb-2 text-sm">Phone: +123 456 7890</li>
              <li className="mb-2 text-sm">Address: 123 Main St, Pune, India</li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="w-1/3 sm:w-1/2 md:w-1/4 mb-6">
            <h5 className="font-bold text-lg mb-2">Follow Us</h5>
            <ul className="flex flex-col sm:flex-row">
              <li className="mr-4">
                <Link href="https://facebook.com" className="text-sm hover:underline">Facebook</Link>
              </li>
              <li className="mr-4">
                <Link href="https://twitter.com" className="text-sm hover:underline">Twitter</Link>
              </li>
              <li className="mr-4">
                <Link href="https://linkedin.com" className="text-sm hover:underline">LinkedIn</Link>
              </li>
              <li>
                <Link href="https://instagram.com" className="text-sm hover:underline">Instagram</Link>
              </li>
            </ul>
          </div>
          
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2024 MediTrack. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </>
  )
}
export default page