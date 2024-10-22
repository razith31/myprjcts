import React from 'react'

const MainSection = () => {
  return (
    <div className='main1  d-inline-block' style={{width:"100vw",backgroundColor:"darkgray"}}> 
    <main className=' ' style={{padding:"30px"}}>
    <div className='row container'>
      <div className="col-3">
        <img src="profilepic.jpg" alt="he" width={"300px"} height={"300px"}/>
      </div>
      <div className="col-9 ps-5" style={{padding:"10px 0 0 50px"}}>
        <div className='text-dark' style={{padding:"0 0 0 30px"}}>
          <h1>Mohamed Rasith M</h1>
          <h3 style={{margin:"-7px 0 0 0"}}>Frontend Developer</h3>
<div className='mt-2'>
  <h4>Contact:</h4>
  <div className='className='mb-5 style={{margin:"-8px 0 0 0" , padding:"5px 0 0 12px"}}>
  <p>Ph:7867066988</p>
  <p style={{margin:"-15px 0 0 0"}}>Mail:mhdrazith@gmail.com</p>
  </div>

  <h4 style={{margin:"10px 0 0 0"}}>Skills:</h4>
 <ul className='aj mt-2'>
  <li>HTML</li>
  <li>CSS</li>
  <li>React.js</li>
 </ul>
</div>
        </div>
      </div>

    </div>
    </main>
    </div>
  )
}

export default MainSection