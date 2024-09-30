import React from "react";

const About=()=>{
    return(
        <>
  <div className="relative flex flex-col md:flex-row h-screen items-center justify-center bg-[#85a4c0]">
    {/* Text Section */}
    <div className="w-full md:w-1/2 p-10 md:p-20">
      <h1 className="text-4xl font-bold text-white text-center mb-10">ABOUT US</h1>
      <p className="text-white text-center leading-relaxed md:text-left md:p-0">
        At HostelEase, we strive to make finding the perfect hostel as easy as possible. Whether you're a student looking for long-term accommodation or a traveler seeking a short stay, we provide a wide range of options to suit your needs. Our platform is designed to help you discover comfortable, affordable, and well-reviewed hostels in your desired area.
        <br /><br />
        We believe that everyone deserves a place they can call home, even when they're far from it. Our mission is to simplify the booking process, ensuring you can focus on what really matters. With trusted reviews, secure payments, and seamless browsing, HostelEase is here to make your search stress-free and enjoyable.
      </p>
    </div>

    {/* Image Section */}
    <div className="w-full md:w-1/2 p-5 md:p-20">
      <img className="rounded-lg shadow-lg object-cover w-full h-full" src="./images/img.jpg" alt="HostelEase" />
    </div>
  </div>
</>

    );
}
export default About;
