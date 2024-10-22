import React from "react"
const Navbar = () => {

  return (
 <header className="d-flex text-light bg-dark">
  <div className="ps-3 pt-1">
    <i class="fa-sharp fa-solid fa-user-secret"></i>
  </div>
  <div className="pt-4 ms-5">
    <nav>
      <ul className="bh d-flex align-items-center justify-content-around " style={{gap:'5rem'}}> 
        <li>Home</li> 
        <li>About</li>
        <li>Contact</li>
        <li>Services</li>
        <li className="siv"> <i class="fa-duotone fa-solid fa-bars"></i></li>

      </ul>
    
    </nav>
  </div>
 </header>

    
  )
}

export default Navbar