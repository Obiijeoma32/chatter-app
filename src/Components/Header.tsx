import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [hamBurgerMenu, setHamBurgerMenu] = useState<boolean>(false);

  function handleHamBurgerMenu() {
    setHamBurgerMenu(!hamBurgerMenu);
  }
  const closeDropdown = () => {
    setHamBurgerMenu(false);
  };
  const handleScroll = useCallback(() => {
    if (hamBurgerMenu) {
      closeDropdown();
    }
    return hamBurgerMenu;
  }, [hamBurgerMenu]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hamBurgerMenu, handleScroll]);

  return (
    <>
      <div className=" w-[100%] bg-[#fff] fixed top-0 left-0  h-[100px]  item-center 10inch:pr-[50px] 3xxl:pl-[30px] 1halfxl:pl-[50px] justify-between flex">
        <Link onClick={() => window.scrollTo(0, 0)} className="w-[10%] 3xxl:pt-[30px] 1halfxl:pt-[10px]" to="/home">
          <div>
            <h1 className=" 3xxl:text-[40px] 1halfxl:text-[48px] text-[#543EE0] font-[600] ">CHATTER</h1>
          </div>
        </Link>
        <div className="w-[66%] 3xxl:hidden 1halfxl:flex item-center pt-[40px] flex justify-between">
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
        <div className=" 3xxl:block 1halfxl:hidden w-[25%] pt-[45px] ">
          <svg onScroll={() => setHamBurgerMenu(false)} onClick={handleHamBurgerMenu} className=" opacity-80 ml-[50px] text-[#111111]  " width="35" height="30" viewBox="0 0 45 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.5 27.5H42.5M2.5 15H42.5M2.5 2.5H42.5" stroke="currentColor" strokeWidth="3.75" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {hamBurgerMenu && (
            <div className="grid w-[140px] ml-[-35px] mt-[10px]  bg-[#fafafa] bg-opacity-90 z-10 text-left pl-[15px] pt-[10px] rounded-[5px] h-[260px] ">
              <div className="">
                <Link className="  hover:underline " onClick={() => window.scrollTo(0, 0)} to="/home">
                  <div className=" text-[18px] m-[11px] text-[#111111] font-[600] ">Home</div>
                </Link>
                <Link className="hover:underline " onClick={() => window.scrollTo(0, 0)} to="/about">
                  <div className=" text-[18px] m-[11px] text-[#111111] font-[600] ">About Us</div>
                </Link>
                <Link className="hover:underline " onClick={() => window.scrollTo(0, 0)} to="/contact">
                  <div className=" text-[18px] m-[11px] text-[#111111] font-[600] ">Contact</div>
                </Link>
                <Link className=" hover:underline" onClick={() => window.scrollTo(0, 0)} to="/blog">
                  <div className=" text-[18px] m-[11px] text-[#111111] font-[600] ">Blogs</div>
                </Link>

                <Link onClick={() => window.scrollTo(0, 0)} className="hover:underline " to="/login">
                  <div className=" text-[#111111] text-[18px] m-[11px]  font-[600]   ">Log in</div>
                </Link>
                <Link onClick={() => window.scrollTo(0, 0)} className=" hover:underline" to="/signup">
                  <div className=" text-[#111111] text-[18px] m-[11px] font-[600]  ">Sign up</div>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
