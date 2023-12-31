import { useState, useEffect, ChangeEvent } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import Select from "react-select";
import SignUpAndLogin from "./SignUpAndLogin";
import GooglePng from "./google.png";
import LinkedinPic from "./linkedPic.png";

function SignUp() {
  const [confirmPassword, setConfirmPassword] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [occupation, setOccupation] = useState("");
  const [user, setUser] = useState<any>();
  const [profile, setProfile] = useState([]);
  const navigate = useNavigate();

  function handleFName(event: ChangeEvent<HTMLInputElement>) {
    setFName(event.target.value);
  }
  function handleLName(event: ChangeEvent<HTMLInputElement>) {
    setLName(event.target.value);
  }
  function handleEmail(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }
  function handlePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }
  function handleOccupation(event: ChangeEvent<HTMLInputElement>) {
    setOccupation(event.target.value);
  }
  const handleSendClick = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: 200,
        firstName: fName,
        lastName: lName,
        occupation: occupation,
        email: email,
        password: password,
      }),
    };

    console.log(requestOptions);
    // setLoading(true); // start progress spinner
    fetch("http://nubeero-deployment-server.uksouth.cloudapp.azure.com:9909/api/user/signUp", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(data.id);

        if (data.id !== null) {
          localStorage.setItem("userId", data.id); // Save the id to localStorage

          // const redirectUrl = `/resourcedetails`;

          navigate("/feeds");

          // window.location.href = redirectUrl; // Redirect to "/resourcedetails" page
          // setLinkTo(redirectUrl);
          console.log("this should go to the next page");
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const loginGoog = useGoogleLogin({
    onSuccess: (codeResponse: any) => {
      setUser(codeResponse);
      console.log(codeResponse);
    },
    onError: (error) => console.log("Login Failed:", error),
  });
  useEffect(() => {
    if (user) {
      axios
        .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: "application/json",
          },
        })
        .then((res) => {
          setProfile(res.data);
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  // const options = [
  //   { value: "writer", label: "Writer" },
  //   { value: "reader", label: "Reader" },
  // ];
  // const optionValues = options.map((option) => option.value);
  // const receivingVariable: string[] = optionValues;

  return (
    <>
      <SignUpAndLogin />
      {/* small screen */}
      <div className=" 10inch:hidden 3xxl:block   ">
        <div className="border-b-[5px]  ml-[80px]  w-[75%]  border-b-[#cebebe]">{/* hi */}</div>
        <div className="w-[70%] h-[170vh]  mt-[-5px]">
          <div className=" w-[55%]  ml-[80px] border-[2.5px] rounded-lg  border-[#543EE0]  ">{/* hi */}</div>
          <div className="w-[100%] mt-[15%] ml-[80px]">
            <h1 className="text-[32px] text-center text-[#111111] font-[600] ">Register as a Writer/Reader</h1>

            <div>
              <form className="mt-[5%]" action="">
                <div className=" flex justify-between w-[108%] items-center">
                  <div className="w-[50%]">
                    <label className=" font-[400] text-[16px] text-[#3B3B3B] " htmlFor="email">
                      First name
                    </label>
                    <br />

                    <input
                      onChange={handleFName}
                      value={fName}
                      className=" md:w-[230px] mt-[12px] pl-[15px] outline-none text-[16px] placeholder:text-[#212529] text-[#212529] rounded-[8px] h-[56px] border-[1px] border-[#CED4DA] "
                      type="name"
                      placeholder="John"
                    />
                    <br />
                  </div>
                  <div className="w-[50%]">
                    <label className=" font-[400] text-[16px] text-[#3B3B3B] " htmlFor="email">
                      Last name
                    </label>
                    <br />

                    <input
                      onChange={handleLName}
                      value={lName}
                      className=" md:w-[230px] mt-[12px] pl-[15px] outline-none text-[16px] placeholder:text-[#212529] text-[#212529] rounded-[8px] h-[56px] border-[1px] border-[#CED4DA] "
                      type="name"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <br />
                <label className=" font-[400] text-[16px] text-[#3B3B3B] " htmlFor="email">
                  You are joining as?
                </label>
                <br />
                <input onChange={handleOccupation} value={occupation} placeholder="e.g Reader" type="text" className="w-[106%] mt-[12px]  outline-none text-[16px] placeholder:text-[#212529] text-[#212529] rounded-[8px" />
                <br />
                <label className=" font-[400] text-[16px] text-[#3B3B3B] " htmlFor="email">
                  Email address
                </label>
                <br />

                <input
                  onChange={handleEmail}
                  value={email}
                  className="w-[106%] mt-[12px] mb-[24px] pl-[15px] outline-none text-[16px] placeholder:text-[#212529] text-[#212529] rounded-[8px] h-[56px] border-[1px] border-[#CED4DA] "
                  type="email"
                  placeholder="Johndoe@gmail.com"
                />
                <br />

                <label className=" font-[400] text-[16px] text-[#3B3B3B] " htmlFor="email">
                  Password
                </label>
                <br />
                <div className="w-[106%] flex mt-[12px] justify-between items-center  pr-[15px] rounded-[8px] h-[56px] border-[1px] border-[#CED4DA]">
                  <input className=" pl-[15px]  outline-none w-[95%] h-[45px] text-[16px] placeholder:text-[#212529] text-[#212529] " type={showPassword === true ? "text" : "password"} placeholder="********" />
                  <button onClick={() => setShowPassword((open) => !open)} type="button">
                    {showPassword === true ? (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="2" stroke="#212529" stroke-width="1.5" />
                        <path d="M21 12C21 12 16.9706 17 12 17C7.02944 17 3 12 3 12C3 12 7.02944 7 12 7C16.9706 7 21 12 21 12Z" stroke="#212529" stroke-width="1.5" />
                      </svg>
                    ) : (
                      <svg width="20" height="11" viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M19.375 8.40625C19.2893 8.4551 19.1948 8.48658 19.097 8.49888C18.9991 8.51118 18.8998 8.50406 18.8047 8.47794C18.7097 8.45182 18.6207 8.4072 18.5428 8.34664C18.465 8.28608 18.3999 8.21076 18.3512 8.125L16.57 5.0125C15.5344 5.7127 14.392 6.24018 13.1875 6.57438L13.7378 9.87625C13.754 9.97346 13.7509 10.0729 13.7287 10.1689C13.7065 10.2649 13.6656 10.3556 13.6083 10.4358C13.551 10.516 13.4784 10.5841 13.3948 10.6363C13.3112 10.6884 13.2181 10.7235 13.1209 10.7397C13.0809 10.7462 13.0405 10.7497 13 10.75C12.8225 10.7497 12.6509 10.6866 12.5157 10.5717C12.3804 10.4569 12.2903 10.2978 12.2612 10.1228L11.7203 6.88094C10.5795 7.03969 9.42227 7.03969 8.28151 6.88094L7.74058 10.1228C7.71147 10.2982 7.62103 10.4575 7.48538 10.5723C7.34974 10.6872 7.1777 10.7502 6.99995 10.75C6.9585 10.7498 6.91712 10.7464 6.8762 10.7397C6.77898 10.7235 6.6859 10.6884 6.60227 10.6363C6.51864 10.5841 6.44611 10.516 6.38882 10.4358C6.33153 10.3556 6.29061 10.2649 6.26839 10.1689C6.24617 10.0729 6.24309 9.97346 6.25933 9.87625L6.81245 6.57438C5.60835 6.23912 4.46664 5.71069 3.43183 5.00969L1.6562 8.125C1.55675 8.2983 1.39252 8.425 1.19965 8.47722C1.00678 8.52943 0.801067 8.5029 0.627765 8.40344C0.454462 8.30398 0.327767 8.13976 0.27555 7.94689C0.223333 7.75402 0.249871 7.5483 0.349327 7.375L2.22433 4.09375C1.56573 3.52476 0.960125 2.89719 0.414952 2.21875C0.346964 2.14284 0.295158 2.05387 0.262698 1.95727C0.230238 1.86067 0.217804 1.75847 0.226156 1.65691C0.234507 1.55535 0.263469 1.45655 0.311273 1.36655C0.359077 1.27655 0.42472 1.19724 0.504196 1.13346C0.583672 1.06967 0.675313 1.02275 0.773525 0.995564C0.871737 0.968374 0.97446 0.961484 1.07542 0.975315C1.17639 0.989146 1.27347 1.02341 1.36075 1.07601C1.44804 1.12861 1.52368 1.19844 1.58308 1.28125C3.13933 3.20688 5.86183 5.5 9.99995 5.5C14.1381 5.5 16.8606 3.20406 18.4168 1.28125C18.4755 1.19675 18.551 1.12523 18.6386 1.07115C18.7261 1.01707 18.8238 0.98158 18.9257 0.966893C19.0275 0.952205 19.1313 0.958632 19.2306 0.985775C19.3298 1.01292 19.4224 1.06019 19.5026 1.12466C19.5828 1.18913 19.6489 1.26942 19.6968 1.36052C19.7446 1.45162 19.7732 1.5516 19.7807 1.65422C19.7883 1.75684 19.7746 1.85992 19.7406 1.95704C19.7066 2.05416 19.653 2.14324 19.5831 2.21875C19.0379 2.89719 18.4323 3.52476 17.7737 4.09375L19.6487 7.375C19.699 7.46054 19.7319 7.55521 19.7454 7.65353C19.7588 7.75186 19.7527 7.85188 19.7272 7.9478C19.7017 8.04372 19.6575 8.13364 19.597 8.21233C19.5366 8.29103 19.4611 8.35694 19.375 8.40625Z"
                          fill="#212529"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                <br />

                <label className=" font-[400] text-[16px] text-[#3B3B3B] " htmlFor="email">
                  Confirm Password
                </label>
                <br />
                <div className="w-[106%] flex mt-[12px] justify-between items-center  pr-[15px] rounded-[8px] h-[56px] border-[1px] border-[#CED4DA]">
                  <input
                    onChange={handlePassword}
                    value={password}
                    className=" pl-[15px]  outline-none w-[95%] h-[45px] text-[16px] placeholder:text-[#212529] text-[#212529] "
                    type={confirmPassword === true ? "text" : "password"}
                    placeholder="********"
                  />
                  <button onClick={() => setConfirmPassword((open) => !open)} type="button">
                    {confirmPassword === true ? (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="2" stroke="#212529" stroke-width="1.5" />
                        <path d="M21 12C21 12 16.9706 17 12 17C7.02944 17 3 12 3 12C3 12 7.02944 7 12 7C16.9706 7 21 12 21 12Z" stroke="#212529" stroke-width="1.5" />
                      </svg>
                    ) : (
                      <svg width="20" height="11" viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M19.375 8.40625C19.2893 8.4551 19.1948 8.48658 19.097 8.49888C18.9991 8.51118 18.8998 8.50406 18.8047 8.47794C18.7097 8.45182 18.6207 8.4072 18.5428 8.34664C18.465 8.28608 18.3999 8.21076 18.3512 8.125L16.57 5.0125C15.5344 5.7127 14.392 6.24018 13.1875 6.57438L13.7378 9.87625C13.754 9.97346 13.7509 10.0729 13.7287 10.1689C13.7065 10.2649 13.6656 10.3556 13.6083 10.4358C13.551 10.516 13.4784 10.5841 13.3948 10.6363C13.3112 10.6884 13.2181 10.7235 13.1209 10.7397C13.0809 10.7462 13.0405 10.7497 13 10.75C12.8225 10.7497 12.6509 10.6866 12.5157 10.5717C12.3804 10.4569 12.2903 10.2978 12.2612 10.1228L11.7203 6.88094C10.5795 7.03969 9.42227 7.03969 8.28151 6.88094L7.74058 10.1228C7.71147 10.2982 7.62103 10.4575 7.48538 10.5723C7.34974 10.6872 7.1777 10.7502 6.99995 10.75C6.9585 10.7498 6.91712 10.7464 6.8762 10.7397C6.77898 10.7235 6.6859 10.6884 6.60227 10.6363C6.51864 10.5841 6.44611 10.516 6.38882 10.4358C6.33153 10.3556 6.29061 10.2649 6.26839 10.1689C6.24617 10.0729 6.24309 9.97346 6.25933 9.87625L6.81245 6.57438C5.60835 6.23912 4.46664 5.71069 3.43183 5.00969L1.6562 8.125C1.55675 8.2983 1.39252 8.425 1.19965 8.47722C1.00678 8.52943 0.801067 8.5029 0.627765 8.40344C0.454462 8.30398 0.327767 8.13976 0.27555 7.94689C0.223333 7.75402 0.249871 7.5483 0.349327 7.375L2.22433 4.09375C1.56573 3.52476 0.960125 2.89719 0.414952 2.21875C0.346964 2.14284 0.295158 2.05387 0.262698 1.95727C0.230238 1.86067 0.217804 1.75847 0.226156 1.65691C0.234507 1.55535 0.263469 1.45655 0.311273 1.36655C0.359077 1.27655 0.42472 1.19724 0.504196 1.13346C0.583672 1.06967 0.675313 1.02275 0.773525 0.995564C0.871737 0.968374 0.97446 0.961484 1.07542 0.975315C1.17639 0.989146 1.27347 1.02341 1.36075 1.07601C1.44804 1.12861 1.52368 1.19844 1.58308 1.28125C3.13933 3.20688 5.86183 5.5 9.99995 5.5C14.1381 5.5 16.8606 3.20406 18.4168 1.28125C18.4755 1.19675 18.551 1.12523 18.6386 1.07115C18.7261 1.01707 18.8238 0.98158 18.9257 0.966893C19.0275 0.952205 19.1313 0.958632 19.2306 0.985775C19.3298 1.01292 19.4224 1.06019 19.5026 1.12466C19.5828 1.18913 19.6489 1.26942 19.6968 1.36052C19.7446 1.45162 19.7732 1.5516 19.7807 1.65422C19.7883 1.75684 19.7746 1.85992 19.7406 1.95704C19.7066 2.05416 19.653 2.14324 19.5831 2.21875C19.0379 2.89719 18.4323 3.52476 17.7737 4.09375L19.6487 7.375C19.699 7.46054 19.7319 7.55521 19.7454 7.65353C19.7588 7.75186 19.7527 7.85188 19.7272 7.9478C19.7017 8.04372 19.6575 8.13364 19.597 8.21233C19.5366 8.29103 19.4611 8.35694 19.375 8.40625Z"
                          fill="#212529"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                <br />
                <br />
                <Link onClick={handleSendClick} className=" " to="">
                  <div className=" text-[#fff] text-[18px] font-[600] pt-[12px] bg-[#543EE0] rounded-[8px] w-[106%] h-[56px] text-center ">Create account</div>
                </Link>
                <br />

                <button className="w-[106%] mb-[20px]  mt-[12px] flex justify-center pt-[13px]   rounded-[8px] h-[56px] border-[1px] border-[#CED4DA]" onClick={() => loginGoog()}>
                  <div className=" w-[40%] flex justify-between ">
                    <img src={GooglePng} alt="google" /> Sign up with google{" "}
                  </div>
                </button>
                {profile && <div></div>}
                <button className="w-[106%]  mt-[12px] flex justify-center pt-[13px]   rounded-[8px] h-[56px] border-[1px] border-[#CED4DA]">
                  <div className=" w-[40%] flex justify-between ">
                    <img src={LinkedinPic} alt="linkedin" />
                    Sign up with Linkedin{" "}
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* large screen */}
      <div className=" 3xxl:hidden 10inch:block ml-[50%]   ">
        <div className="border-b-[5px]  ml-[80px]  w-[75%]  border-b-[#cebebe]">{/* hi */}</div>
        <div className="w-[70%] h-[170vh]  mt-[-5px]">
          <div className=" w-[55%]  ml-[80px] border-[2.5px] rounded-lg  border-[#543EE0]  ">{/* hi */}</div>
          <div className="w-[100%] mt-[15%] ml-[80px]">
            <h1 className="text-[32px] text-center text-[#111111] font-[600] ">Register as a Writer/Reader</h1>

            <div>
              <form className="mt-[5%]" action="">
                <div className=" flex justify-between w-[108%] items-center">
                  <div className="w-[50%]">
                    <label className=" font-[400] text-[16px] text-[#3B3B3B] " htmlFor="email">
                      First name
                    </label>
                    <br />

                    <input
                      onChange={handleFName}
                      value={fName}
                      className="w-[230px] mt-[12px] pl-[15px] outline-none text-[16px] placeholder:text-[#212529] text-[#212529] rounded-[8px] h-[56px] border-[1px] border-[#CED4DA] "
                      type="name"
                      placeholder="John"
                    />
                    <br />
                  </div>
                  <div className="w-[50%]">
                    <label className=" font-[400] text-[16px] text-[#3B3B3B] " htmlFor="email">
                      Last name
                    </label>
                    <br />

                    <input
                      onChange={handleLName}
                      value={lName}
                      className="w-[230px] mt-[12px] pl-[15px] outline-none text-[16px] placeholder:text-[#212529] text-[#212529] rounded-[8px] h-[56px] border-[1px] border-[#CED4DA] "
                      type="name"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <br />
                <label className=" font-[400] text-[16px] text-[#3B3B3B] " htmlFor="email">
                  You are joining as?
                </label>
                <br />
                {/* <Select onChange={handleOccupation}
                  value={occupation}
                  styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      borderColor: state.isFocused ? "#CED4DA" : "#CED4DA",
                      height: "56px",
                      text: "16px",
                      borderRadius: "8px",
                    }),
                  }}
                  className="w-[106%] mt-[12px]  outline-none text-[16px] placeholder:text-[#212529] text-[#212529] rounded-[8px]    "
                  options={optionValues}
                /> */}
                <input
                  onChange={handleOccupation}
                  value={occupation}
                  className="w-[106%] mt-[12px] mb-[24px] pl-[15px] outline-none text-[16px] placeholder:text-[#212529] text-[#212529] rounded-[8px] h-[56px] border-[1px] border-[#CED4DA] "
                  type="text"
                  placeholder="e.g Reader"
                />
                <br />
                <label className=" font-[400] text-[16px] text-[#3B3B3B] " htmlFor="email">
                  Email address
                </label>
                <br />

                <input
                  onChange={handleEmail}
                  value={email}
                  className="w-[106%] mt-[12px] mb-[24px] pl-[15px] outline-none text-[16px] placeholder:text-[#212529] text-[#212529] rounded-[8px] h-[56px] border-[1px] border-[#CED4DA] "
                  type="email"
                  placeholder="Johndoe@gmail.com"
                />
                <br />

                <label className=" font-[400] text-[16px] text-[#3B3B3B] " htmlFor="email">
                  Password
                </label>
                <br />
                <div className="w-[106%] flex mt-[12px] justify-between items-center  pr-[15px] rounded-[8px] h-[56px] border-[1px] border-[#CED4DA]">
                  <input className=" pl-[15px]  outline-none w-[95%] h-[45px] text-[16px] placeholder:text-[#212529] text-[#212529] " type={showPassword === true ? "text" : "password"} placeholder="********" />
                  <button onClick={() => setShowPassword((open) => !open)} type="button">
                    {showPassword === true ? (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="2" stroke="#212529" stroke-width="1.5" />
                        <path d="M21 12C21 12 16.9706 17 12 17C7.02944 17 3 12 3 12C3 12 7.02944 7 12 7C16.9706 7 21 12 21 12Z" stroke="#212529" stroke-width="1.5" />
                      </svg>
                    ) : (
                      <svg width="20" height="11" viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M19.375 8.40625C19.2893 8.4551 19.1948 8.48658 19.097 8.49888C18.9991 8.51118 18.8998 8.50406 18.8047 8.47794C18.7097 8.45182 18.6207 8.4072 18.5428 8.34664C18.465 8.28608 18.3999 8.21076 18.3512 8.125L16.57 5.0125C15.5344 5.7127 14.392 6.24018 13.1875 6.57438L13.7378 9.87625C13.754 9.97346 13.7509 10.0729 13.7287 10.1689C13.7065 10.2649 13.6656 10.3556 13.6083 10.4358C13.551 10.516 13.4784 10.5841 13.3948 10.6363C13.3112 10.6884 13.2181 10.7235 13.1209 10.7397C13.0809 10.7462 13.0405 10.7497 13 10.75C12.8225 10.7497 12.6509 10.6866 12.5157 10.5717C12.3804 10.4569 12.2903 10.2978 12.2612 10.1228L11.7203 6.88094C10.5795 7.03969 9.42227 7.03969 8.28151 6.88094L7.74058 10.1228C7.71147 10.2982 7.62103 10.4575 7.48538 10.5723C7.34974 10.6872 7.1777 10.7502 6.99995 10.75C6.9585 10.7498 6.91712 10.7464 6.8762 10.7397C6.77898 10.7235 6.6859 10.6884 6.60227 10.6363C6.51864 10.5841 6.44611 10.516 6.38882 10.4358C6.33153 10.3556 6.29061 10.2649 6.26839 10.1689C6.24617 10.0729 6.24309 9.97346 6.25933 9.87625L6.81245 6.57438C5.60835 6.23912 4.46664 5.71069 3.43183 5.00969L1.6562 8.125C1.55675 8.2983 1.39252 8.425 1.19965 8.47722C1.00678 8.52943 0.801067 8.5029 0.627765 8.40344C0.454462 8.30398 0.327767 8.13976 0.27555 7.94689C0.223333 7.75402 0.249871 7.5483 0.349327 7.375L2.22433 4.09375C1.56573 3.52476 0.960125 2.89719 0.414952 2.21875C0.346964 2.14284 0.295158 2.05387 0.262698 1.95727C0.230238 1.86067 0.217804 1.75847 0.226156 1.65691C0.234507 1.55535 0.263469 1.45655 0.311273 1.36655C0.359077 1.27655 0.42472 1.19724 0.504196 1.13346C0.583672 1.06967 0.675313 1.02275 0.773525 0.995564C0.871737 0.968374 0.97446 0.961484 1.07542 0.975315C1.17639 0.989146 1.27347 1.02341 1.36075 1.07601C1.44804 1.12861 1.52368 1.19844 1.58308 1.28125C3.13933 3.20688 5.86183 5.5 9.99995 5.5C14.1381 5.5 16.8606 3.20406 18.4168 1.28125C18.4755 1.19675 18.551 1.12523 18.6386 1.07115C18.7261 1.01707 18.8238 0.98158 18.9257 0.966893C19.0275 0.952205 19.1313 0.958632 19.2306 0.985775C19.3298 1.01292 19.4224 1.06019 19.5026 1.12466C19.5828 1.18913 19.6489 1.26942 19.6968 1.36052C19.7446 1.45162 19.7732 1.5516 19.7807 1.65422C19.7883 1.75684 19.7746 1.85992 19.7406 1.95704C19.7066 2.05416 19.653 2.14324 19.5831 2.21875C19.0379 2.89719 18.4323 3.52476 17.7737 4.09375L19.6487 7.375C19.699 7.46054 19.7319 7.55521 19.7454 7.65353C19.7588 7.75186 19.7527 7.85188 19.7272 7.9478C19.7017 8.04372 19.6575 8.13364 19.597 8.21233C19.5366 8.29103 19.4611 8.35694 19.375 8.40625Z"
                          fill="#212529"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                <br />

                <label className=" font-[400] text-[16px] text-[#3B3B3B] " htmlFor="email">
                  Confirm Password
                </label>
                <br />
                <div className="w-[106%] flex mt-[12px] justify-between items-center  pr-[15px] rounded-[8px] h-[56px] border-[1px] border-[#CED4DA]">
                  <input
                    onChange={handlePassword}
                    value={password}
                    className=" pl-[15px]  outline-none w-[95%] h-[45px] text-[16px] placeholder:text-[#212529] text-[#212529] "
                    type={confirmPassword === true ? "text" : "password"}
                    placeholder="********"
                  />
                  <button onClick={() => setConfirmPassword((open) => !open)} type="button">
                    {confirmPassword === true ? (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="2" stroke="#212529" stroke-width="1.5" />
                        <path d="M21 12C21 12 16.9706 17 12 17C7.02944 17 3 12 3 12C3 12 7.02944 7 12 7C16.9706 7 21 12 21 12Z" stroke="#212529" stroke-width="1.5" />
                      </svg>
                    ) : (
                      <svg width="20" height="11" viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M19.375 8.40625C19.2893 8.4551 19.1948 8.48658 19.097 8.49888C18.9991 8.51118 18.8998 8.50406 18.8047 8.47794C18.7097 8.45182 18.6207 8.4072 18.5428 8.34664C18.465 8.28608 18.3999 8.21076 18.3512 8.125L16.57 5.0125C15.5344 5.7127 14.392 6.24018 13.1875 6.57438L13.7378 9.87625C13.754 9.97346 13.7509 10.0729 13.7287 10.1689C13.7065 10.2649 13.6656 10.3556 13.6083 10.4358C13.551 10.516 13.4784 10.5841 13.3948 10.6363C13.3112 10.6884 13.2181 10.7235 13.1209 10.7397C13.0809 10.7462 13.0405 10.7497 13 10.75C12.8225 10.7497 12.6509 10.6866 12.5157 10.5717C12.3804 10.4569 12.2903 10.2978 12.2612 10.1228L11.7203 6.88094C10.5795 7.03969 9.42227 7.03969 8.28151 6.88094L7.74058 10.1228C7.71147 10.2982 7.62103 10.4575 7.48538 10.5723C7.34974 10.6872 7.1777 10.7502 6.99995 10.75C6.9585 10.7498 6.91712 10.7464 6.8762 10.7397C6.77898 10.7235 6.6859 10.6884 6.60227 10.6363C6.51864 10.5841 6.44611 10.516 6.38882 10.4358C6.33153 10.3556 6.29061 10.2649 6.26839 10.1689C6.24617 10.0729 6.24309 9.97346 6.25933 9.87625L6.81245 6.57438C5.60835 6.23912 4.46664 5.71069 3.43183 5.00969L1.6562 8.125C1.55675 8.2983 1.39252 8.425 1.19965 8.47722C1.00678 8.52943 0.801067 8.5029 0.627765 8.40344C0.454462 8.30398 0.327767 8.13976 0.27555 7.94689C0.223333 7.75402 0.249871 7.5483 0.349327 7.375L2.22433 4.09375C1.56573 3.52476 0.960125 2.89719 0.414952 2.21875C0.346964 2.14284 0.295158 2.05387 0.262698 1.95727C0.230238 1.86067 0.217804 1.75847 0.226156 1.65691C0.234507 1.55535 0.263469 1.45655 0.311273 1.36655C0.359077 1.27655 0.42472 1.19724 0.504196 1.13346C0.583672 1.06967 0.675313 1.02275 0.773525 0.995564C0.871737 0.968374 0.97446 0.961484 1.07542 0.975315C1.17639 0.989146 1.27347 1.02341 1.36075 1.07601C1.44804 1.12861 1.52368 1.19844 1.58308 1.28125C3.13933 3.20688 5.86183 5.5 9.99995 5.5C14.1381 5.5 16.8606 3.20406 18.4168 1.28125C18.4755 1.19675 18.551 1.12523 18.6386 1.07115C18.7261 1.01707 18.8238 0.98158 18.9257 0.966893C19.0275 0.952205 19.1313 0.958632 19.2306 0.985775C19.3298 1.01292 19.4224 1.06019 19.5026 1.12466C19.5828 1.18913 19.6489 1.26942 19.6968 1.36052C19.7446 1.45162 19.7732 1.5516 19.7807 1.65422C19.7883 1.75684 19.7746 1.85992 19.7406 1.95704C19.7066 2.05416 19.653 2.14324 19.5831 2.21875C19.0379 2.89719 18.4323 3.52476 17.7737 4.09375L19.6487 7.375C19.699 7.46054 19.7319 7.55521 19.7454 7.65353C19.7588 7.75186 19.7527 7.85188 19.7272 7.9478C19.7017 8.04372 19.6575 8.13364 19.597 8.21233C19.5366 8.29103 19.4611 8.35694 19.375 8.40625Z"
                          fill="#212529"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                <br />
                <br />
                <Link onClick={handleSendClick} className=" " to="">
                  <div className=" text-[#fff] text-[18px] font-[600] pt-[12px] bg-[#543EE0] rounded-[8px] w-[106%] h-[56px] text-center ">Create account</div>
                </Link>
                <br />

                <button className="w-[106%] mb-[20px]  mt-[12px] flex justify-center pt-[13px]   rounded-[8px] h-[56px] border-[1px] border-[#CED4DA]" onClick={() => loginGoog()}>
                  <div className=" w-[40%] flex justify-between ">
                    <img src={GooglePng} alt="google" /> Sign up with google{" "}
                  </div>
                </button>
                {profile && <div></div>}
                <button className="w-[106%]  mt-[12px] flex justify-center pt-[13px]   rounded-[8px] h-[56px] border-[1px] border-[#CED4DA]">
                  <div className=" w-[40%] flex justify-between ">
                    <img src={LinkedinPic} alt="linkedin" />
                    Sign up with Linkedin{" "}
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
