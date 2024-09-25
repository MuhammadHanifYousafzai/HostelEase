import React from "react";

const About=()=>{
    return(
        <>
        <div className="relative flex  h-screen bg-slate-500">
        <div className="  h-96 w-3/4 ">
            <h1 className="text-4xl font-bold text-white text-center m-20 ">ABOUT US</h1>
            <p className="text-white text-center p-5 ">At HostelEase, we strive to make finding the perfect hostel as easy as possible. Whether you're a student looking for long-term accommodation or a traveler seeking a short stay, we provide a wide range of options to suit your needs. Our platform is designed to help you discover comfortable, affordable, and well-reviewed hostels in your desired area.

We believe that everyone deserves a place they can call home, even when they're far from it. Our mission is to simplify the booking process, ensuring you can focus on what really matters. With trusted reviews, secure payments, and seamless browsing, HostelEase is here to make your search stress-free and enjoyable.

</p>
        </div>
        <div className="w-3/4 p-5 " >
            <img className="rounded-lg" src="./images/img.jpg"/>
        </div>
    <div>
        <h2></h2>
    </div>
 </div>
        </>
    );
}
export default About;
