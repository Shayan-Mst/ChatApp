import React from 'react'

const Home = () => {
  return (
    <div className=''>

<div className='text-center'>

    <span className='text-4xl font-semibold'>Chat<span style={{color:"#bbc625"}}>Nest</span></span>

</div>

<section className='my-8'>
<div class="search-box mx-auto">
    <input type="text" placeholder="Search..."/>
    <svg className=" icon" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" stroke="none" fill="black">
      <path d="M10.035,18.069a7.981,7.981,0,0,0,3.938-1.035l3.332,3.332a2.164,2.164,0,0,0,3.061-3.061l-3.332-3.332A8.032,8.032,0,0,0,4.354,4.354a8.034,8.034,0,0,0,5.681,13.715ZM5.768,5.768A6.033,6.033,0,1,1,4,10.035,5.989,5.989,0,0,1,5.768,5.768Z"/>
    </svg>
  </div>

</section>

    </div>
  )
}

export default Home