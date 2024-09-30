 import React from "react";

 const Hostelreg=()=>{
    return(
     <>
        <div className="flex justify-center items-center   pt-8 bg-[#f7fafc] w-auto ">
      <form className="bg-[#85a4c0] shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 w-full max-w-2xl border border-gray-300">
        <h2 className="text-4xl font-bold mb-6 text-center text-white">Hostel Registration</h2>
        <fieldset className="mt-8 mb-8 border border-gray-500 p-6 rounded-lg">
        <legend className="text-2xl font-semibold text-white mb-4">Login</legend>
        {/* Personal Information */}
        <div className="mb-4">
          <label className="block text-white text-lg font-bold mb-2" htmlFor="ownerName">
            Owner Name
          </label>
          <input
            id="ownerName"
            type="text"
            placeholder="Enter Owner Name"
            className="w-full px-4 py-3 border rounded-lg bg-transparent bg-[#f7fafc] text-gray-700 bg-focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-white text-lg font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter Email Address"
            className="w-full px-4 py-3 border rounded-lg bg-transparent text-white bg-[#f7fafc] focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-white text-lg font-bold mb-2" htmlFor="phoneNumber">
            Phone Number
          </label>
          <input
            id="phoneNumber"
            type="text"
            placeholder="Enter Phone Number"
            className="w-full px-4 py-3 border rounded-lg bg-transparent text-white bg-[#f7fafc] focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Hostel Information */}
        <div className="mb-4">
          <label className="block text-white text-lg font-bold mb-2" htmlFor="hostelName">
            Hostel Name
          </label>
          <input
            id="hostelName"
            type="text"
            placeholder="Enter Hostel Name"
            className="w-full px-4 py-3 border rounded-lg bg-transparent text-white bg-[#f7fafc] focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-white text-lg font-bold mb-2" htmlFor="location">
            Hostel Location
          </label>
          <input
            id="location"
            type="text"
            placeholder="Enter Hostel Location"
            className="w-full px-4 py-3 border rounded-lg bg-transparent text-white bg-[#f7fafc] focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-white text-lg font-bold mb-2" htmlFor="numberOfRooms">
            Number of Rooms
          </label>
          <input
            id="numberOfRooms"
            type="number"
            placeholder="Enter Number of Rooms"
            className="w-full px-4 py-3 border rounded-lg bg-transparent text-white bg-[#f7fafc] focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-white text-lg font-bold mb-2" htmlFor="roomType">
            Room Types
          </label>
          <select
            id="roomType"
            className="w-full px-4 py-3 border rounded-lg bg-transparent text-gary-700 bg-[#f7fafc] focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          >
            <option className="bg-[#f7fafc]" value="">Select Room Type</option>
            <option className="bg-[#f7fafc]" value="single-bed">Single Bed</option>
            <option className="bg-[#f7fafc]" value="double-bed">Double Bed</option>
            <option className="bg-[#f7fafc]" value="triple-bed">Triple Bed</option>
          </select>
        </div>

        {/* Rent Section */}
        <div className="mb-4">
          <label className="block text-white text-lg font-bold mb-2" htmlFor="rent">
            Rent (per month)
          </label>
          <input
            id="rent"
            type="number"
            placeholder="Enter Rent Amount"
            className="w-full px-4 py-3 border rounded-lg bg-transparent text-white bg-[#f7fafc] focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Hostel Description */}
        <div className="mb-4">
          <label className="block text-white text-lg font-bold mb-2" htmlFor="description">
            Hostel Description
          </label>
          <textarea
            id="description"
            placeholder="Enter Hostel Description"
            className="w-full px-4 py-3 border rounded-lg bg-transparent text-gray-700 bg-[#f7fafc] focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Hostel Photos */}
        <div className="mb-4">
          <label className="block text-white text-lg font-bold mb-2" htmlFor="photos">
            Upload Photos
          </label>
          <input
            id="photos"
            type="file"
            multiple
            className="w-full px-4 py-3 border rounded-lg bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Facilities */}
        <div className="mb-4">
          <label className="block text-white text-lg font-bold mb-2">
            Hostel Facilities
          </label>
          <div className="flex items-center mb-2">
            <input type="checkbox" id="wifi" name="wifi" className="mr-2" />
            <label htmlFor="wifi" className="text-white">Wi-Fi</label>
          </div>
          <div className="flex items-center mb-2">
            <input type="checkbox" id="laundry" name="laundry" className="mr-2" />
            <label htmlFor="laundry" className="text-white">Laundry</label>
          </div>
          <div className="flex items-center mb-2">
            <input type="checkbox" id="meals" name="meals" className="mr-2" />
            <label htmlFor="meals" className="text-white">Meals</label>
          </div>
        </div>
        </fieldset>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Register Hostel
          </button>
        </div>
      </form>
    </div>
     </>

    )
 }
 export default Hostelreg;