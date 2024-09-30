import React from "react";

const Signup=()=>{
    return(

        <>
        <div className="bg-[#f7fafc] w-auto">
        <form className="max-w-2xl mx-auto mt-10 p-8 bg-[#85a4c0]  rounded-lg shadow-lg">
                          {/* Title */}
  <h2 className="text-3xl font-bold text-center text-white mb-8">Registration Form</h2>
  <fieldset className="mt-8 mb-8 border border-gray-500 p-6 rounded-lg">
         <legend className="text-2xl font-semibold text-white mb-4">Signup</legend>

                        {/* Full Name */}
  <div className="mb-4">
    <label htmlFor="fullName" className="block  font-medium text-white">Full Name</label>
    <input type="text"id="fullName"name="fullName"
      className="block w-96 p-3 mt-1 bg-[#f7fafc]  text-gray-700 border-gray-500 rounded-md focus:ring-indigo-500 focus:border-indigo-500 "
      placeholder="Enter Full Name" required />
  </div>
                         {/* Father  Name */}
  <div className="mb-4">
    <label htmlFor="fullName" className="block text-lg font-medium text-white">Father Name</label>
    <input type="text" id="fullName"name="fullName" className="block w-96 p-3 mt-1 bg-[#f7fafc] text-gray-700 border-gray-500 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
      placeholder="Enter Father  Name"required />
  </div>
                            {/* Gender */}
  <div className="mb-4">
    <label htmlFor="gender" className="block text-lg font-medium text-white">Gender</label>
    <select id="gender"name="gender"className="block w-96 p-3 mt-1 bg-[#f7fafc] text-gray-700 border-gray-500 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"required >
      <option value="" className="text-gray-400">Select Gender</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Other</option>
    </select>
  </div>

                                  {/* Email */}
  <div className="mb-4">
    <label htmlFor="email" className="block text-lg font-medium text-white">Email</label>
    <input type="email" id="email" name="email" className="block w-96 p-3 mt-1 bg-[#f7fafc] text-gray-700 border-gray-500 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg" placeholder="Enter Email"
    required />
  </div>

                                   {/* Phone Number */}
  <div className="mb-4">
    <label htmlFor="phone" className="block text-lg font-medium text-white">Phone Number</label>
    <input type="tel" id="phone" name="phone"
 className="block w-96 p-3 mt-1 bg-[#f7fafc] text-gray-700 border-gray-500 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"placeholder="Enter Phone Number"required />
  </div>

                                     {/* Password */}
  <div className="mb-4">
    <label htmlFor="password" className="block text-lg font-medium text-white">Password</label>
    <input type="password" id="password"  name="password"
      className="block w-96 p-3 mt-1 bg-[#f7fafc] text-gray-700 border-gray-500 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg" placeholder="Enter Password"required />
  </div>

                                   {/* Confirm Password */}
  <div className="mb-4">
    <label htmlFor="confirmPassword" className="block text-lg font-medium text-white">Confirm Password</label>
    <input type="password" id="confirmPassword" name="confirmPassword"
      className="block w-96 p-3 mt-1 bg-[#f7fafc] text-gray-700 border-gray-500 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg" placeholder="Confirm Password" required />
  </div>
  </fieldset>

  {/* Submit Button */}
  <div className="text-center">
    <button
      type="submit"
      className="bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-500 transition duration-200"
    >
      Register
    </button>
  </div>
</form>
</div>
        </>
    );
}
export default Signup;
