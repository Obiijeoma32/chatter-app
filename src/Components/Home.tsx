import Header from "./Header";
import { Link } from "react-router-dom";
import AboutUs from "./AboutUs";
import Fr from "./fr.png";
import GreatMind from "./greatMind.png";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <div>
        <Header />
        <div className="w-[100%] h-[610px] mt-[8%]  bg-[url('./Components/homebg.png')]  bg-no-repeat object-cover bg-center bg-cover ">
          <div className=" w-[100%] h-[610px]  bg-[#000] bg-opacity-40 ">
            <div className=" pt-[10%] ml-[5%] w-[70%] ">
              <h1 className=" text-[48px] text-[#ffffff] font-[600]  mb-[20px]">Welcome to Chatter: A Haven for Text-Based Content</h1>
              <p className=" w-[80%] text-[24px] text-[#ffffff] font-[500] mb-[36px]">Unleash the Power of Words, Connect with Like-minded Readers and Writers</p>
              <Link onClick={() => window.scrollTo(0, 0)} className=" " to="/signup">
                <div className=" text-[#fff] text-[18px] font-[600] pt-[12px] bg-[#543EE0] rounded-[8px] w-[157px] h-[56px] text-center ">Get Started</div>
              </Link>
            </div>
          </div>
        </div>
        <AboutUs />
        <div className=" w-[100%] h-[492px] bg-[#FFEDCC] pt-[93px] bg-opacity-50 ">
          <div className="flex items-center ml-[53px] justify-between w-[90%] ">
            <div className=" w-[40%]">
              {" "}
              <img className=" rounded-[50%] " src={Fr} alt="Frontend Engineer" />
            </div>
            <div className=" w-[70%]">
              <p className=" text-[18px]  text-[#111111] font-[400] ">
                "Chatter has become an integral part of my online experience. As a user of this incredible blogging platform, I have discovered a vibrant community of individuals who are passionate about sharing their ideas and engaging in thoughtful
                discussions.”
              </p>
              <h2 className=" text-[32px] mt-[40px] mb-[24px] text-[#111111] font-[500] ">
                {" "}
                Adebobola Muhydeen,<span className=" text-[18px]  font-[400] "> Software developer at Apple</span>{" "}
              </h2>
              <Link onClick={() => window.scrollTo(0, 0)} className=" " to="/signup">
                <div className=" text-[#fff] text-[18px] font-[600] pt-[12px] bg-[#543EE0] rounded-[8px] w-[157px] h-[56px] text-center ">Join chatter</div>
              </Link>
            </div>
          </div>
        </div>
        <div className=" w-[80%] mt-[12%] flex ml-[10%] items-center justify-between  h-[492px]">
          <div className="w-[27%]">
            {" "}
            <img src={GreatMind} alt="great minds" />
          </div>
          <div className="w-[60%]">
            <h1 className=" text-[48px] mb-[24px]  text-[#111111] font-[600] ">Write, read and connect with great minds on chatter</h1>
            <p className=" text-[18px] mb-[32px]  text-[#111111] font-[400] ">Share people your great ideas, and also read write-ups based on your interests. connect with people of same interests and goals </p>
            <Link onClick={() => window.scrollTo(0, 0)} className=" " to="/signup">
              <div className=" text-[#fff] text-[18px] font-[600] pt-[12px] bg-[#543EE0] rounded-[8px] w-[157px] h-[56px] text-center ">Get Started</div>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
