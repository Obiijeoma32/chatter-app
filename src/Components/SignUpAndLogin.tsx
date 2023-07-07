import { Link, NavLink } from "react-router-dom";

function SignUpAndLogin({ children }: any) {
  const menuItem = [
    {
      path: "/signup",
      name: "REGISTER",
    },
    {
      path: "/login",
      name: "LOGIN",
    },
  ];
  return (
    <>
      <div className=" w-[100%]  flex justify-between">
        <div className=" 3xxl:hidden 10inch:block w-[50%] fixed h-screen bg-no-repeat object-cover bg-center bg-cover bg-[url('./Components/registerbg.png')]">
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
        <div className=" w-[50%] 3xxl:hidden 10inch:block ml-[50%]  ">
          <div className=" flex justify-between text-[16px] font-[600] ml-[80px] mt-[40px] w-[75%]  ">
            {menuItem.map((item, index) => (
              <NavLink
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                to={item.path}
                key={index}
                className={({ isActive }) => (isActive ? " h-[40px]   cursor-pointer  text-[16px] text-[#543EE0]" : "  h-[40px] cursor-pointer text-[16px] text-[#111111]")}
              >
                <div className="  ">
                  <h2>{item.name}</h2>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
        <div className=" w-[50%] 3xxl:block 10inch:hidden ">
          <div className=" flex justify-between text-[16px] font-[600] ml-[80px] mt-[40px] w-[75%]  ">
            {menuItem.map((item, index) => (
              <NavLink
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                to={item.path}
                key={index}
                className={({ isActive }) => (isActive ? " h-[40px]   cursor-pointer  text-[16px] text-[#543EE0]" : "  h-[40px] cursor-pointer text-[16px] text-[#111111]")}
              >
                <div className="  ">
                  <h2>{item.name}</h2>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
      <main>{children}</main>
    </>
  );
}

export default SignUpAndLogin;
