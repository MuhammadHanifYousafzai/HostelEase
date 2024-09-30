import React from "react";

const Login=()=>{
    return(
        <>
        <div className="bg-[#f7fafc] w-auto">
         <form class="max-w-2xl mx-auto  p-4 bg-[#85a4c0] border-4 border-white rounded-lg shadow-lg">
         <h1 className="text-4xl font-bold leading-7 text-white text-center pt-6">Login Form</h1>
         <fieldset className="mt-8 mb-8 border border-gray-500 p-6 rounded-lg">
         <legend className="text-2xl font-semibold text-white mb-4">Login</legend>

                   {/* Email */}
      <div className="flex flex-col items-center justify-center">
      <input type="email" placeholder="Enter Email"
         className=" block w-96 p-6 mt-1 bg-[#f7fafc] text-gray-700 border-gray-500 rounded-md focus:ring-indigo-500 px-4 py-3  text-sm outline-none border-b-2  " required />
    
                            {/* Password */}
      <input type="password" placeholder="Enter Password"
         className="block w-96 p-6 mt-1 bg-[#f7fafc] text-gray-700 border-gray-500 rounded-md focus:ring-indigo-500    outline-none border-b-2  px-4 py-3   text-sm   border-transparent "  required />
         
      <div class="flex pt-3">
        <input type="checkbox" class="w-4" />
        <label class="text-sm ml-4 text-white ">Remember me</label>
      </div>
      </div>
      </fieldset>
      <div className="text-center">
    <button type="submit" className="bg-blue-600 text-white font-bold py-2 px-8 rounded-md hover:bg-blue-700 transition duration-300">
      Login
    </button>
  </div>  
    </form>
    </div>
        </>
    );
}
export default Login;
