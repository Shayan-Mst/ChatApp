import React from 'react'
import {Link} from 'react-router-dom'

const Intro = () => {
  return (
    <div className='text-center intro fade-in'>
      <div className='grid place-items-center'>

      <svg width="180" height="180"   version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 600 600"  xmlSpace="preserve">
<g id="background">
	<rect fill='#ffffff' width="600" height="600"/>
</g>
<g id="objects">
	<g>
		<ellipse fill='#DBDBDB' cx="300" cy="514.997" rx="151" ry="18"/>
		<g>
			<circle fill="#E5E5E5" cx="300" cy="430.777" r="45.226"/>
			<path fill="#D1D1D1" d="M345.226,430.777c0,24.982-20.244,45.226-45.226,45.226c-20.45,0-37.724-13.568-43.319-32.199
				c8.209,8.347,19.624,13.519,32.258,13.519c24.982,0,45.226-20.244,45.226-45.226c0-4.532-0.669-8.898-1.907-13.027
				C340.271,407.23,345.226,418.429,345.226,430.777z"/>
			<path fill="#F2BE2A" d="M496.143,391.991v16.272c0,8.632-7,15.632-15.632,15.632H119.489c-8.632,0-15.632-7-15.632-15.632
				v-16.272c0-6.282,3.766-11.965,9.556-14.404c10.51-4.444,19.182-11.808,25.228-20.922c6.047-9.114,9.458-19.978,9.458-31.383
				v-78.477c0-75.527,55.451-139.394,127.645-151.271c-0.216-1.288-0.324-2.605-0.324-3.952c0-13.578,11.002-24.579,24.579-24.579
				s24.579,11.002,24.579,24.579c0,1.327-0.108,2.625-0.315,3.893c32.228,5.171,61.065,20.48,83.147,42.562
				c27.49,27.489,44.489,65.469,44.489,107.412v79.834c0,22.819,13.666,43.427,34.686,52.305c2.9,1.219,5.28,3.245,6.951,5.761
				C495.199,385.856,496.143,388.855,496.143,391.991z"/>
			<path fill="#E2AD27" d="M496.143,391.991v16.272c0,8.632-7,15.632-15.632,15.632H127.817l138.254-17.156
				c80.915-10.038,139.512-82.331,132.247-163.541c-5.437-60.78-32.867-106.694-91.681-145.716
				c7.158-20.047-7.57-26.536-16.114-28.591c2.91-1.209,6.115-1.888,9.478-1.888c13.578,0,24.579,11.002,24.579,24.579
				c0,1.327-0.108,2.625-0.315,3.893c32.228,5.171,61.065,20.48,83.147,42.562c27.49,27.489,44.489,65.469,44.489,107.412v79.834
				c0,22.819,13.666,43.427,34.686,52.305c2.9,1.219,5.28,3.245,6.951,5.761C495.199,385.856,496.143,388.855,496.143,391.991z"/>
			<path fill="#FFD671" d="M265.766,117.574c-20.956,5.049-80.098,26.983-97.992,115.641
				c-0.404,2.001,1.122,3.877,3.164,3.877h1.02c1.188,0,2.28-0.65,2.841-1.698c6.17-11.526,43.804-78.233,95.145-91.53
				c3.024-0.783,5.048-3.622,4.817-6.737l-1.017-13.733C273.449,119.407,269.654,116.637,265.766,117.574z"/>
		</g>
	</g>
</g>
</svg>

      </div>
      <div className='my-4'>

<p className='font-bold text-5xl'>Welcome to </p>
<p className='font-bold text-5xl'>ChatNest &</p>
<p className='my-4 opacity-70'>Connect with friends,family and colleagues easily</p>
      </div>

      <div className='mt-12'>

	   <Link to='/dashboard'>	<button className='btn-one'>Start</button> </Link>

      </div>
	  <div className='flex justify-evenly  my-4 '>

<Link to='/register' className='hover:opacity-80 opacity-50 '>New user? <span className='underline'>Register </span></Link>
<Link to='/sign' className='hover:opacity-80 underline opacity-50'>Sign</Link>
	  </div>
    </div>
  )
}

export default Intro