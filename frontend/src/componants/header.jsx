import React from 'react';

export default function Header(){

    return(
        <div>
             <nav class="navbar navbar-expand-lg navbar-light " style={{backgroundColor:"#6B3CC9"}}>
             
  <img class="navbar-brand" src='/img/logo1.png'/>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="mr-auto  ">
    </ul>
    <form class="form-inline my-2 my-lg-6">
      {/* <input class="form-control mr-sm-2" type="search" placeholder="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
      <ul class="navbar-nav  mt-2 mt-lg-2">
      <li class="nav-item active">
                        <a class="nav-link text-white" aria-current="page" href="#">SERVICES</a>
                    </li><li><a class="nav-link"></a></li>
                    <li class="nav-item ">
                        <a class="nav-link text-white" href="#">ABOUT US</a>
                    </li>
                    <li><a class="nav-link"></a></li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#">CONTACT US</a>
                    </li><li><a class="nav-link"></a></li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#">CAREERS</a>
                    </li><li><a class="nav-link"></a></li><li><a class="nav-link"></a></li>
    </ul>
    </form>
  </div>
</nav>
        </div>
    )
}