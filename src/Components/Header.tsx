import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className=" w-[100%] bg-[#fff] fixed top-0 left-0  h-[100px]  item-center pr-[50px] pl-[50px] justify-between flex">
        <Link onClick={() => window.scrollTo(0, 0)} className="w-[10%] pt-[10px]" to="/home">
          <div>
            <h1 className=" text-[48px] text-[#543EE0] font-[600] ">CHATTER</h1>
          </div>
        </Link>
        <div className="w-[66%] item-center pt-[40px] flex justify-between">
          <div className=" w-[40%] justify-between flex">
            <Link onClick={() => window.scrollTo(0, 0)} to="/home">
              <div className=" text-[16px] text-[#111111] font-[600] ">Home</div>
            </Link>
            <Link onClick={() => window.scrollTo(0, 0)} to="/about">
              <div className=" text-[16px] text-[#111111] font-[600] ">About Us</div>
            </Link>
            <Link onClick={() => window.scrollTo(0, 0)} to="/contact">
              <div className=" text-[16px] text-[#111111] font-[600] ">Contact</div>
            </Link>
            <Link onClick={() => window.scrollTo(0, 0)} to="/blog">
              <div className=" text-[16px] text-[#111111] font-[600] ">Blogs</div>
            </Link>
          </div>

          <div className="w-[45%] justify-between h-[60px]  items-center flex">
            <Link onClick={() => window.scrollTo(0, 0)} className=" mb-[30px]" to="/login">
              <div className=" text-[#111111] text-[18px]  font-[600] pt-[12px]  border-[1px] border-[#543EE0] rounded-[8px] w-[157px] h-[56px] text-center ">Log in</div>
            </Link>
            <Link onClick={() => window.scrollTo(0, 0)} className=" mb-[30px]" to="/signup">
              <div className=" text-[#fff] text-[18px] font-[600] pt-[12px] bg-[#543EE0] rounded-[8px] w-[157px] h-[56px] text-center ">Sign up</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
