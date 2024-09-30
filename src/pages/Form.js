import React from "react";

const Form = () => {
  return (
    <div className="bg-[#f7fafc] w-auto">
    <form className="max-w-2xl mx-auto bg-[#85a4c0] p-8 border-4  rounded-lg shadow-lg">
  <h1 className="text-4xl font-bold leading-7 text-white text-center pt-6">Booking Form</h1>
  <p className="text-lg leading-6 text-white text-center pt-3">Fill The Form Carefully</p>

                                {/* Personal Information Section */}
                <fieldset className="mt-8 mb-8 border border-gray-500 p-6 rounded-lg ">
                <legend className="text-2xl font-semibold text-white mb-4">Personal Information</legend>

                                        {/* Name Field */}
   
    <div className="mb-6">
      <label htmlFor="Name" className="block text-lg font-medium leading-6 text-white">Name</label>
      <input type="text" name="Name" id="Name" placeholder="Full Name" autoComplete="name"
        className="block w-96 p-3 mt-1 bg-[#edf7fc] text-gray-700 border-gray-500 rounded-md focus:ring-indigo-500" required />
    </div>

                               {/* Father's Name Field */}
     <div className="mb-6">
      <label htmlFor="FatherName" className="block text-lg font-medium leading-6 text-white">Father's Name</label>
      <input type="text" name="FatherName" id="FatherName" placeholder="Father's Full Name" autoComplete="father-name"
        className="block w-96 p-3 mt-1 bg-[#edf7fc] text-gray-700 border-gray-500 rounded-md focus:ring-indigo-500" required />
    </div>

                                        {/* CNIC Field */}
    <div className="mb-6">
      <label htmlFor="cnic" className="block text-lg font-medium leading-6 text-white">CNIC/B-Form#</label>
      <input type="text" name="cnic" id="cnic" placeholder="15708-0557744-7" autoComplete="cnic"
        className="block w-96 p-3 mt-1 bg-[#edf7fc] text-gray-700 border-gray-500 rounded-md focus:ring-indigo-500" required />
    </div>

                                  {/* Phone Number Field */}
    <div className="mb-6">
      <label htmlFor="PhoneNumber" className="block text-lg font-medium leading-6 text-white">Phone Number</label>
      <input type="tel" name="PhoneNumber" id="PhoneNumber" placeholder="03110033665" autoComplete="phone-number"
        className="block w-96 p-3 mt-1 bg-[#edf7fc] text-gray-700 border-gray-500 rounded-md focus:ring-indigo-500" required />
    </div>

                                   {/* Email Field */}
    <div className="mb-6">
      <label htmlFor="Email" className="block text-lg font-medium leading-6 text-white">Email</label>
      <input type="email" name="Email" id="Email" placeholder="KIU123@gmail.com" autoComplete="email"
        className="block w-96 p-3 mt-1 bg-[#edf7fc] text-gray-700 border-gray-500 rounded-md focus:ring-indigo-500" required />
    </div>
  </fieldset>

                             {/* Hostel Information Section */}
  <fieldset className="mb-8 border border-gray-500 p-6 rounded-lg">
    <legend className="text-2xl font-semibold text-white mb-4">Hostel Information</legend>
 
                              {/* Hostel Name Dropdown */}
    <div className="mb-6">
      <label htmlFor="hostel-name" className="block text-lg font-medium text-white">Hostel Name</label>
      <select id="hostel-name" name="hostelName"
        className="block w-96 p-3 mt-1 bg-[#edf7fc] text-gray-700 border-gray-500 rounded-md focus:ring-indigo-500" required>
        <option value="">Select a hostel</option>
        <option value="hostel-1">Hostel 1</option>
        <option value="hostel-2">Hostel 2</option>
        <option value="hostel-3">Hostel 3</option>
        <option value="hostel-4">Hostel 4</option>
      </select>
    </div>

                            {/* Room Type Dropdown */}
    <div className="mb-6">
      <label htmlFor="room-type" className="block text-lg font-medium text-white">Room Type</label>
      <select id="room-type" name="roomType"
        className="block w-96 p-3 mt-1 bg-[#edf7fc] text-gray-700 border-gray-500 rounded-md focus:ring-indigo-500" required>
        <option value="">Select a room type</option>
        <option value="single-bed">Single Bed</option>
        <option value="double-bed">Double Bed</option>
        <option value="triple-bed">Triple Bed</option>
      </select>
    </div>
  </fieldset>

                          {/* Submit Button */}
  <div className="text-center">
    <button type="submit" className="bg-blue-600 text-white font-bold py-2 px-8 rounded-md hover:bg-blue-700 transition duration-300">
      Submit Booking
    </button>
  </div>
</form>
</div>
  );
};

export default Form;
