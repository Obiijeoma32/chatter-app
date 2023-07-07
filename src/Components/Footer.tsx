import { Link } from "react-router-dom";

function Footer() {
  const date = new Date().getFullYear();
  //   console.log(date);
  return (
    <>
      {/* small screens */}
      <div className=" 10inch:hidden 3xxl:block w-[100%] h-[892px] bg-[#FFEDCC] pt-[53px] bg-opacity-50 ">
        <div className=" w-[90%] ml-[5%] grid justify-between items-center">
          <Link onClick={() => window.scrollTo(0, 0)} className="mb-[30px]" to="/home">
            <div>
              <h1 className=" text-[48px] text-[#543EE0] font-[600] ">CHATTER</h1>
            </div>
          </Link>
          <div className=" mb-[30px] grid">
            <h1 className="text-[24px] mb-[24px] text-[#111111] font-[500]">Explore</h1>
            <h3 className="text-[18px] mb-[18px] text-[#111111] font-[400]">community</h3>
            <h3 className="text-[18px] mb-[18px] text-[#111111] font-[400]">Trending blogs</h3>
            <h3 className="text-[18px] mb-[18px] text-[#111111] font-[400]">Chatter for teams</h3>
          </div>
          <div className="mb-[30px] grid">
            <h1 className="text-[24px] mb-[24px] text-[#111111] font-[500]">Support</h1>
            <h3 className="text-[18px] mb-[18px] text-[#111111] font-[400]">Support docs</h3>
            <h3 className="text-[18px] mb-[18px] text-[#111111] font-[400]">Join slack</h3>
            <h3 className="text-[18px] mb-[18px] text-[#111111] font-[400]">Contact</h3>
          </div>
          <div className=" grid">
            <h1 className="text-[24px] mb-[24px] text-[#111111] font-[500]">Official blog</h1>
            <h3 className="text-[18px] mb-[18px] text-[#111111] font-[400]">Official blog</h3>
            <h3 className="text-[18px] mb-[18px] text-[#111111] font-[400]">Engineering blog</h3>
          </div>
        </div>
        <div className="w-[100%] mt-[90px] text-center">
          <h3> copyright&copy;{date}</h3>
        </div>
      </div>
      {/* big screens */}
      <div className=" 3xxl:hidden 10inch:block w-[100%] h-[472px] bg-[#FFEDCC] pt-[93px] bg-opacity-50 ">
        <div className=" w-[90%] ml-[5%] flex justify-between items-center">
          <Link onClick={() => window.scrollTo(0, 0)} className="" to="/home">
            <div>
              <h1 className=" text-[48px] text-[#543EE0] font-[600] ">CHATTER</h1>
            </div>
          </Link>
          <div className=" grid">
            <h1 className="text-[24px] mb-[24px] text-[#111111] font-[500]">Explore</h1>
            <h3 className="text-[18px] mb-[18px] text-[#111111] font-[400]">community</h3>
            <h3 className="text-[18px] mb-[18px] text-[#111111] font-[400]">Trending blogs</h3>
            <h3 className="text-[18px] mb-[18px] text-[#111111] font-[400]">Chatter for teams</h3>
          </div>
          <div className=" grid">
            <h1 className="text-[24px] mb-[24px] text-[#111111] font-[500]">Support</h1>
            <h3 className="text-[18px] mb-[18px] text-[#111111] font-[400]">Support docs</h3>
            <h3 className="text-[18px] mb-[18px] text-[#111111] font-[400]">Join slack</h3>
            <h3 className="text-[18px] mb-[18px] text-[#111111] font-[400]">Contact</h3>
          </div>
          <div className=" grid">
            <h1 className="text-[24px] mb-[24px] text-[#111111] font-[500]">Official blog</h1>
            <h3 className="text-[18px] mb-[18px] text-[#111111] font-[400]">Official blog</h3>
            <h3 className="text-[18px] mb-[18px] text-[#111111] font-[400]">Engineering blog</h3>
          </div>
        </div>
        <div className="w-[100%] mt-[90px] text-center">
          <h3> copyright&copy;{date}</h3>
        </div>
      </div>
    </>
  );
}

export default Footer;
