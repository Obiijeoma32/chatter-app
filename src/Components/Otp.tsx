import React from "react";
import { Link } from "react-router-dom";

function Otp() {
  return (
    <>
      <div className=" w-[100%]  flex justify-between">
        <div className=" w-[50%] fixed h-screen bg-no-repeat object-cover bg-center bg-cover bg-[url('./Components/registerbg.png')]">
          <div className=" w-[100%] h-screen  bg-[#000] bg-opacity-40 ">
            <div className=" w-[80%] text-center pt-[40%] ml-[5%]">
              <Link onClick={() => window.scrollTo(0, 0)} className="" to="/home">
                <div>
                  <h1 className=" text-[48px] text-[#fff] font-[600] ">CHATTER</h1>
                </div>
              </Link>
              <p className=" text-[24px] text-[#fff] font-[500] ">Unleash the Power of Words, Connect with Like-minded Readers and Writers</p>
            </div>
          </div>
        </div>
        <div className=" w-[50%] ml-[52%] mt-[20px] ">
          <Link to="/signup">
            <div className=" w-[65px] text-[14px] text-[#55524F] flex justify-between items-center ">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15 27.5C21.9037 27.5 27.5 21.9037 27.5 15C27.5 8.09625 21.9037 2.5 15 2.5C8.09625 2.5 2.5 8.09625 2.5 15C2.5 21.9037 8.09625 27.5 15 27.5Z"
                  stroke="#495057"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path d="M16.5748 19.4125L12.1748 15L16.5748 10.5875" stroke="#495057" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              Back
            </div>
          </Link>
          <div className="text-center mt-[20%]">
            <h1 className="text-[32px]  text-[#111111] font-[600] ">Enter confirmation code</h1>
            <p className="text-[#626262] mt-[12px] text-[16px]">We emailed you a code. Please input the code here for account verification</p>
            <form className="w-[80%] items-center ml-[10%] mt-[45px] flex justify-between " action="">
              <input type="number" className=" pl-[20px] border-[1px] outline-none border-[#CED4DA] w-[106px] h-[80px]  rounded-[8px] " />
              <input type="number" className=" pl-[20px] border-[1px] outline-none border-[#CED4DA] w-[106px] h-[80px]  rounded-[8px] " />
              <input type="number" className=" pl-[20px] border-[1px] outline-none border-[#CED4DA] w-[106px] h-[80px]  rounded-[8px] " />
              <input type="number" className=" pl-[20px] border-[1px] outline-none border-[#CED4DA] w-[106px] h-[80px]  rounded-[8px] " />
            </form>
            <Link onClick={() => window.scrollTo(0, 0)} className=" " to="">
              <div className=" text-[#fff] text-[18px] font-[600] ml-[10%] mt-[40px] pt-[12px] bg-[#543EE0] rounded-[8px] w-[80%] h-[56px] text-center ">Create account</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Otp;
