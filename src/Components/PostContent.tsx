import { Link, useNavigate } from "react-router-dom";
import SideBar from "./SideBar";
import profile from "./feedprofile.png";
import { ChangeEvent, useEffect, useState } from "react";

function PostContent() {
  const [post, setPost] = useState(false);
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("");
  const [fullName, setFullName] = useState("");
  const navigate = useNavigate();
  const [information, setInformation] = useState({});
  const [occupation, setOccupation] = useState("");
  const userId = localStorage.getItem("userId"); // Retrieve the id from localStorage
  console.log(userId);
  function handleTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }
  function handleMessage(event: ChangeEvent<HTMLInputElement>) {
    setMessage(event.target.value);
    setPost(true);
  }
  useEffect(() => {
    fetch(`http://nubeero-deployment-server.uksouth.cloudapp.azure.com:9909/api/user/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        //  console.log(data);
        setInformation(data);
        setOccupation(data.occupation);
        setFullName(data.firstName + " " + data.lastName);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [userId]);

  console.log(fullName);
  console.log(information);
  console.log(occupation);
  const handleSendPost = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        postId: 200,
        image: "demoData",
        message: message,
        date: new Date().toLocaleTimeString(),
        likeCounter: 1,
        commentCount: "demoData",
        title: title,
        fullName: fullName,
        occupation: occupation,
      }),
    };

    console.log(requestOptions);
    // setLoading(true); // start progress spinner
    fetch("http://nubeero-deployment-server.uksouth.cloudapp.azure.com:9909/api/user/createPost", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(data.id);

        if (data.postId !== null) {
          // localStorage.setItem("userId", data.id); // Save the id to localStorage

          // const redirectUrl = `/resourcedetails`;

          navigate("/feeds");

          // window.location.href = redirectUrl; // Redirect to "/resourcedetails" page
          // setLinkTo(redirectUrl);
          console.log("this should go to the next page");
        }
      });

    // .catch((err) => {
    //   console.log(err.message);

    // });
  };
  return (
    <>
      <SideBar />
      <div className="ml-[20.9%]">
        <div className=" border-[1px]  w-[100%] h-[66px] border-b-[#D0D0D0] ">
          <div className=" flex justify-evenly items-center   mt-[9px]">
            <div className=" w-[459px] pl-[10px] h-[48px] items-center justify-between flex border-[#D0D0D0] border-[1px] rounded-[8px] ">
              <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.031 15.46L20.314 19.742L18.899 21.157L14.617 16.874C13.0237 18.1512 11.042 18.8459 9 18.843C4.032 18.843 0 14.811 0 9.84302C0 4.87502 4.032 0.843018 9 0.843018C13.968 0.843018 18 4.87502 18 9.84302C18.0029 11.885 17.3082 13.8668 16.031 15.46ZM14.025 14.718C15.2941 13.4129 16.0029 11.6634 16 9.84302C16 5.97602 12.867 2.84302 9 2.84302C5.133 2.84302 2 5.97602 2 9.84302C2 13.71 5.133 16.843 9 16.843C10.8204 16.8459 12.5699 16.1371 13.875 14.868L14.025 14.718Z"
                  fill="black"
                />
              </svg>
              <input className=" w-[410px] text-[#626262] text-[18px] placeholder:text-[16px]  outline-none border-none h-[37px]" type="text" placeholder="Search chatter" />
            </div>
            <div className="flex w-[80px] justify-between items-center">
              <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.99961 1C8.99961 0.734784 8.89426 0.48043 8.70672 0.292893C8.51919 0.105357 8.26483 0 7.99961 0C7.7344 0 7.48004 0.105357 7.29251 0.292893C7.10497 0.48043 6.99961 0.734784 6.99961 1V1.75H6.44261C5.37065 1.74993 4.33894 2.15839 3.55754 2.89224C2.77613 3.62608 2.30377 4.63014 2.23661 5.7L2.01561 9.234C1.93134 10.5814 1.47891 11.8799 0.707615 12.988C0.548248 13.2171 0.450872 13.4835 0.424957 13.7613C0.399043 14.0392 0.445471 14.319 0.559727 14.5736C0.673983 14.8281 0.852178 15.0488 1.07698 15.2142C1.30179 15.3795 1.56555 15.4838 1.84261 15.517L5.24961 15.925V17C5.24961 17.7293 5.53935 18.4288 6.05507 18.9445C6.5708 19.4603 7.27027 19.75 7.99961 19.75C8.72896 19.75 9.42843 19.4603 9.94416 18.9445C10.4599 18.4288 10.7496 17.7293 10.7496 17V15.925L14.1566 15.516C14.4335 15.4827 14.6971 15.3784 14.9218 15.2131C15.1464 15.0478 15.3245 14.8273 15.4388 14.5729C15.553 14.3184 15.5995 14.0388 15.5737 13.7611C15.5479 13.4834 15.4507 13.2171 15.2916 12.988C14.5203 11.88 14.0678 10.5815 13.9836 9.234L13.7626 5.701C13.6957 4.63096 13.2234 3.62665 12.442 2.8926C11.6606 2.15855 10.6287 1.74995 9.55661 1.75H8.99961V1ZM6.44261 3.25C5.75219 3.24992 5.08769 3.51297 4.58439 3.98561C4.0811 4.45825 3.77686 5.10493 3.73361 5.794L3.51361 9.328C3.41196 10.949 2.86753 12.511 1.93961 13.844C1.92808 13.8606 1.92103 13.8798 1.91915 13.8999C1.91727 13.92 1.92062 13.9403 1.92887 13.9587C1.93712 13.9771 1.95 13.9931 1.96625 14.005C1.9825 14.017 2.00158 14.0246 2.02161 14.027L5.75861 14.476C7.24761 14.654 8.75161 14.654 10.2406 14.476L13.9776 14.027C13.9977 14.0246 14.0167 14.017 14.033 14.005C14.0492 13.9931 14.0621 13.9771 14.0704 13.9587C14.0786 13.9403 14.082 13.92 14.0801 13.8999C14.0782 13.8798 14.0711 13.8606 14.0596 13.844C13.1321 12.5109 12.588 10.9489 12.4866 9.328L12.2656 5.794C12.2224 5.10493 11.9181 4.45825 11.4148 3.98561C10.9115 3.51297 10.247 3.24992 9.55661 3.25H6.44261ZM7.99961 18.25C7.30961 18.25 6.74961 17.69 6.74961 17V16.25H9.24961V17C9.24961 17.69 8.68961 18.25 7.99961 18.25Z"
                  fill="black"
                />
              </svg>
              <img className=" rounded-[50%]" src={profile} alt="user" />
            </div>
          </div>
        </div>
        <div>
          <div className="w-[80%] mt-[5%] flex justify-end">
            <Link onClick={handleSendPost} to="">
              <div
                className={
                  post
                    ? "bg-[#543EE0] text-[#fff] text-[18px] font-[600] pt-[12px]  rounded-[8px] w-[145px] h-[56px] text-center"
                    : "bg-[#543EE0] bg-opacity-50 text-[#fff] text-[18px] font-[600] pt-[12px]  rounded-[8px] w-[145px] h-[56px] text-center"
                }
              >
                Publish
              </div>
            </Link>
          </div>
          <div>
            <div>
              <div className="ml-[76px] mt-[41px] flex justify-between items-center w-[65%]">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="30" cy="30" r="29.5" fill="white" stroke="#D0D0D0" />
                  <path d="M41.0525 31.6214H31.5788V41.3511H28.4209V31.6214H18.9473V28.3782H28.4209V18.6484H31.5788V28.3782H41.0525V31.6214Z" fill="#626262" />
                </svg>
                <div>
                  <input onChange={handleTitle} value={title} className="text-[48px] outline-none pl-[5px] placeholder:text-[48px] border-none placeholder:text-[#D0D0D0] text-[#D0D0D0] font-[600] " placeholder="Title" type="text" />
                  <br />
                  <input onChange={handleMessage} value={message} className="text-[32px] outline-none pl-[5px] placeholder:text-[32px] border-none placeholder:text-[#D0D0D0] mt-[10px] text-[#D0D0D0]" placeholder="Write a post............." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostContent;
