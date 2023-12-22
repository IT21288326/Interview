import React from 'react';
import './global.css'

export default function Footer(){

    return(
        <div>
            <footer class=" text-white text-left text-lg-start" style={{backgroundColor:"#6B3CC9"}}>
  <div class="container p-4">
    <div class="row">

      <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
        <div class="col-lg-8 col-md-12 mb-4 mb-md-0">
        <img class="col-lg-8" src='/img/logo1.png'/>
        {/* <img style={{height:'35px'}} src='/img/logo1.png'/> */}
        <p>
        Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.
        </p>
        </div>
        
      </div>
      <div class="col-lg-3 col-md-4 mb-4 mb-md-0">
        <h6 class=" mb-3">Our Technologies</h6>

        <ul class="list-unstyled mb-0">
          <li>
            <a href="#!" class="text-white">ReactJS</a>
          </li><div class="mb-1"></div>
          <li>
            <a href="#!" class="text-white">Gatsby</a>
          </li><div class="mb-1"></div>
          <li>
            <a href="#!" class="text-white">NextJS</a>
          </li><div class="mb-1"></div>
          <li>
            <a href="#!" class="text-white">NodeJS</a>
          </li><div class="mb-1"></div>
          <li>
            <a href="#!" class="text-white">GraphQL</a>
          </li><div class="mb-1"></div>
          <li>
            <a href="#!" class="text-white">Laravel</a>
          </li>
        </ul>
      </div>
      <div class="col-lg-3 col-md-4 mb-4 mb-md-0">
        <h6 class=" mb-3">Our Services</h6>

        <ul class="list-unstyled ">
          <li>
            <a href="#!" class="text-white">Social media Marketing</a>
          </li>
          <div class="mb-1"></div>
          <li>
            <a href="#!" class="text-white">Web & Mobile App Development</a>
          </li>
          <div class="mb-1"></div>
          <li>
            <a href="#!" class="text-white">Data & Analytics</a>
          </li>
          <div class="mb-1"></div>
          <li>
            <a href="#!" class="text-white">Google Marketing solutions</a>
          </li>
          <div class="mb-1"></div>
          <li>
            <a href="#!" class="text-white">Search Engine Optimization</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <hr class="col-lg-5" style={{borderColor:'white'}}></hr>
  <div class="text-center pb-4"  >
  Privacy Policy   |   Terms & Conditions
    </div>
</footer>

        </div>
    )
}