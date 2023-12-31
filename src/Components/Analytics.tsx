import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import SideBar from "./SideBar";
import profile from "./feedprofile.png";
import fYou from "./forYou.png";

function Analytics() {
  const [postActivity, setPostActivity] = useState(false);

  useEffect(() => {
    setPostActivity(true);
  }, []);
  function handlePostactivity() {
    setPostActivity(!postActivity);
  }
  return (
    <>
      <div>
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
          <div className="ml-[5%]">
            <div className=" mt-[30px] pb-[15px] border-b-[4px] border-b-[#7664E6] w-[79%] ">
              <h1 className=" text-[32px] text-[#111111] font-[500] ">Posts analytics</h1>
              <h3 className=" mt-[24px] text-[32px] text-[#111111] font-[500] ">
                May 2023, <span className=" text-[18px] text-[#626262]  font-[400] "> 25days so far</span>
              </h3>
            </div>
            <div className="mt-[12px]">
              <h1 className=" text-[24px] text-[#111111] font-[500] ">Posts highlights</h1>
              <h3 className=" mt-[13px] text-[32px] text-[#111111] font-[500] ">
                Top posts <span className=" text-[18px] text-[#626262]  font-[400] "> earned 2980 impressions</span>
              </h3>
            </div>
            <div className="h-[130vh] ">
              <div className="flex mt-[40px]  justify-between items-center w-[380px] ">
                <img className=" rounded-[50%] " src={fYou} alt="Grace" />
                <div>
                  <h1 className=" text-[24px] text-[#111111] font-[500] ">Grace Ikpang</h1>
                  <p className=" text-[#626262] font-[400] text-[18px] v">Product designer .May 25th, 2023</p>
                </div>
              </div>
              <div className=" mt-[8px] ">
                <h1 className=" text-[32px] font-[500] text-[#111111] ">Starting out as a Product designer</h1>
                <div className="flex mt-[8px] items-center justify-between w-[120px]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M21.75 3.77344H16.3875C15.2367 3.77344 14.1117 4.10391 13.1437 4.72734L12 5.46094L10.8563 4.72734C9.88924 4.10403 8.76299 3.77282 7.6125 3.77344H2.25C1.83516 3.77344 1.5 4.10859 1.5 4.52344V17.8359C1.5 18.2508 1.83516 18.5859 2.25 18.5859H7.6125C8.76328 18.5859 9.88828 18.9164 10.8563 19.5398L11.8969 20.2102C11.9273 20.2289 11.9625 20.2406 11.9977 20.2406C12.0328 20.2406 12.068 20.2313 12.0984 20.2102L13.1391 19.5398C14.1094 18.9164 15.2367 18.5859 16.3875 18.5859H21.75C22.1648 18.5859 22.5 18.2508 22.5 17.8359V4.52344C22.5 4.10859 22.1648 3.77344 21.75 3.77344ZM7.6125 16.8984H3.1875V5.46094H7.6125C8.44219 5.46094 9.24844 5.69766 9.94453 6.14531L11.0883 6.87891L11.25 6.98438V17.8125C10.1344 17.2125 8.8875 16.8984 7.6125 16.8984ZM20.8125 16.8984H16.3875C15.1125 16.8984 13.8656 17.2125 12.75 17.8125V6.98438L12.9117 6.87891L14.0555 6.14531C14.7516 5.69766 15.5578 5.46094 16.3875 5.46094H20.8125V16.8984ZM9.30234 8.46094H4.94766C4.85625 8.46094 4.78125 8.54063 4.78125 8.63672V9.69141C4.78125 9.7875 4.85625 9.86719 4.94766 9.86719H9.3C9.39141 9.86719 9.46641 9.7875 9.46641 9.69141V8.63672C9.46875 8.54063 9.39375 8.46094 9.30234 8.46094ZM14.5312 8.63672V9.69141C14.5312 9.7875 14.6062 9.86719 14.6977 9.86719H19.05C19.1414 9.86719 19.2164 9.7875 19.2164 9.69141V8.63672C19.2164 8.54063 19.1414 8.46094 19.05 8.46094H14.6977C14.6062 8.46094 14.5312 8.54063 14.5312 8.63672ZM9.30234 11.7422H4.94766C4.85625 11.7422 4.78125 11.8219 4.78125 11.918V12.9727C4.78125 13.0688 4.85625 13.1484 4.94766 13.1484H9.3C9.39141 13.1484 9.46641 13.0688 9.46641 12.9727V11.918C9.46875 11.8219 9.39375 11.7422 9.30234 11.7422ZM19.0523 11.7422H14.6977C14.6062 11.7422 14.5312 11.8219 14.5312 11.918V12.9727C14.5312 13.0688 14.6062 13.1484 14.6977 13.1484H19.05C19.1414 13.1484 19.2164 13.0688 19.2164 12.9727V11.918C19.2188 11.8219 19.1438 11.7422 19.0523 11.7422Z"
                      fill="black"
                    />
                  </svg>
                  <h5 className="text-[16px] text-[#626262] ">10 mins read</h5>
                </div>
                <div className="w-[75%] mt-[27px]">
                  <p className="text-[18px] text-[#626262] ">
                    Embarking on a journey as a product designer can be an exhilarating and fulfilling experience. As a profession that bridges the realms of art, technology, and problem-solving, product design offers an opportunity to shape the way
                    people interact with the world around them.
                  </p>
                  <div className=" flex justify-between mt-[14px] items-center ">
                    <div className="flex mt-[8px] items-center justify-between w-[60px]">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M13.4297 9.86719C12.8883 9.86719 12.4688 10.2867 12.4688 10.8047C12.4688 11.3227 12.8883 11.7422 13.4297 11.7422C13.9242 11.7422 14.3438 11.3227 14.3438 10.8047C14.3438 10.2867 13.9242 9.86719 13.4297 9.86719ZM6.86719 9.86719C6.32578 9.86719 5.90625 10.2867 5.90625 10.8047C5.90625 11.3227 6.32578 11.7422 6.86719 11.7422C7.36172 11.7422 7.78125 11.3227 7.78125 10.8047C7.78125 10.2867 7.36172 9.86719 6.86719 9.86719Z"
                          fill="black"
                        />
                        <path
                          d="M20.9528 8.08601C19.8255 6.53913 18.2505 5.50554 16.5231 5.03913V5.04148C16.1223 4.59617 15.67 4.18601 15.1637 3.82038C11.327 1.03132 5.94109 1.8821 3.14031 5.71882C0.883281 8.83601 0.979375 13.029 3.28094 16.0079L3.29969 19.1157C3.29969 19.1907 3.31141 19.2657 3.33484 19.336C3.45906 19.7321 3.88094 19.9501 4.27469 19.8259L7.24187 18.8907C8.02703 19.1696 8.83797 19.329 9.64422 19.3735L9.6325 19.3829C11.7208 20.904 14.4583 21.361 16.9684 20.5313L19.9473 21.5016C20.0223 21.5251 20.0997 21.5391 20.1794 21.5391C20.5942 21.5391 20.9294 21.204 20.9294 20.7891V17.6485C22.9942 14.8454 23.0481 10.9712 20.9528 8.08601ZM7.57 17.2266L7.28875 17.1094L4.96844 17.836L4.945 15.3985L4.7575 15.1876C2.77469 12.7688 2.64344 9.28367 4.49969 6.72663C6.75906 3.6282 11.0903 2.94382 14.1794 5.17976C17.2778 7.4321 17.9645 11.7563 15.7262 14.836C13.8489 17.4118 10.488 18.3634 7.57 17.2266ZM19.4059 16.8282L19.2184 17.0626L19.2419 19.5001L16.945 18.7266L16.6637 18.8438C15.3512 19.3313 13.952 19.3712 12.6559 19.0079L12.6512 19.0055C14.3833 18.4735 15.9536 17.3954 17.0856 15.8438C18.8762 13.3759 19.1669 10.2751 18.1262 7.63132L18.1403 7.6407C18.6794 8.02742 19.1739 8.51023 19.5934 9.09382C21.295 11.4282 21.1989 14.6063 19.4059 16.8282Z"
                          fill="black"
                        />
                        <path
                          d="M10.1484 9.86719C9.60703 9.86719 9.1875 10.2867 9.1875 10.8047C9.1875 11.3227 9.60703 11.7422 10.1484 11.7422C10.643 11.7422 11.0625 11.3227 11.0625 10.8047C11.0625 10.2867 10.643 9.86719 10.1484 9.86719Z"
                          fill="black"
                        />
                      </svg>

                      <h5 className="text-[16px] text-[#626262] ">200</h5>
                    </div>
                    <div className="flex mt-[8px] items-center justify-between w-[55px]">
                      <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M10 18.9999L8.55 17.6999C6.86667 16.1832 5.475 14.8749 4.375 13.7749C3.275 12.6749 2.4 11.6872 1.75 10.8119C1.1 9.93724 0.646 9.13323 0.388 8.3999C0.13 7.66657 0.000666667 6.91657 0 6.1499C0 4.58324 0.525 3.2749 1.575 2.2249C2.625 1.1749 3.93333 0.649902 5.5 0.649902C6.36667 0.649902 7.19167 0.833236 7.975 1.1999C8.75833 1.56657 9.43333 2.08324 10 2.7499C10.5667 2.08324 11.2417 1.56657 12.025 1.1999C12.8083 0.833236 13.6333 0.649902 14.5 0.649902C16.0667 0.649902 17.375 1.1749 18.425 2.2249C19.475 3.2749 20 4.58324 20 6.1499C20 6.91657 19.8707 7.66657 19.612 8.3999C19.3533 9.13323 18.8993 9.93724 18.25 10.8119C17.6 11.6872 16.725 12.6749 15.625 13.7749C14.525 14.8749 13.1333 16.1832 11.45 17.6999L10 18.9999ZM10 16.2999C11.6 14.8666 12.9167 13.6372 13.95 12.6119C14.9833 11.5866 15.8 10.6952 16.4 9.9379C17 9.17924 17.4167 8.5039 17.65 7.9119C17.8833 7.3199 18 6.73257 18 6.1499C18 5.1499 17.6667 4.31657 17 3.6499C16.3333 2.98324 15.5 2.6499 14.5 2.6499C13.7167 2.6499 12.9917 2.87057 12.325 3.3119C11.6583 3.75324 11.2 4.3159 10.95 4.9999H9.05C8.8 4.31657 8.34167 3.7539 7.675 3.3119C7.00833 2.8699 6.28333 2.64924 5.5 2.6499C4.5 2.6499 3.66667 2.98324 3 3.6499C2.33333 4.31657 2 5.1499 2 6.1499C2 6.73324 2.11667 7.3209 2.35 7.9129C2.58333 8.5049 3 9.1799 3.6 9.9379C4.2 10.6959 5.01667 11.5876 6.05 12.6129C7.08333 13.6382 8.4 14.8672 10 16.2999Z"
                          fill="black"
                        />
                      </svg>

                      <h5 className="text-[16px] text-[#626262] ">120</h5>
                    </div>
                    <div className="flex mt-[8px] items-center justify-between w-[110px]">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z" fill="black" />
                        <path d="M7 12H9V17H7V12ZM15 7H17V17H15V7ZM11 14H13V17H11V14ZM11 10H13V12H11V10Z" fill="black" />
                      </svg>

                      <h5 className="text-[16px] text-[#626262] ">2980 views</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Link onClick={handlePostactivity} className="" to="">
                  <div className="mt-[25px]  text-[#fff] text-[18px] font-[600] pt-[12px] bg-[#543EE0] rounded-[8px] w-[172px] h-[56px] text-center ">View post activity</div>
                </Link>
                {postActivity && (
                  <div className="mt-[48px] w-[79%]">
                    <div className="  pb-[15px] border-b-[4px] border-b-[#7664E6]  ">
                      <h1 className=" text-[24px] text-[#111111] font-[500] ">Posts summary</h1>
                      <h3 className=" text-[18px] text-[#626262] mt-[12px] font-[400] ">May 2023 summary</h3>
                    </div>
                    <div className="w-[50%] mt-[24px]">
                      <div className="flex justify-between items-center">
                        <div className=" text-center ">
                          <h3 className=" text-[24px] text-[#626262] mt-[12px] font-[400] ">Posts</h3>
                          <h1 className=" text-[24px] text-[#111111] font-[500] ">3</h1>
                        </div>
                        <div className=" text-center ">
                          <h3 className=" text-[24px] text-[#626262] mt-[12px] font-[400] ">Posts Impressions</h3>
                          <h1 className=" text-[24px] text-[#111111] font-[500] ">2.98k views</h1>
                        </div>
                      </div>
                      <div className="flex justify-between mt-[24px] items-center w-[90%]">
                        <div className=" text-center ">
                          <h3 className=" text-[24px] text-[#626262] mt-[12px] font-[400] ">Profile visits</h3>
                          <h1 className=" text-[24px] text-[#111111] font-[500] ">300</h1>
                        </div>
                        <div className=" text-center ">
                          <h3 className=" text-[24px] text-[#626262] mt-[12px] font-[400] ">New followers</h3>
                          <h1 className=" text-[24px] text-[#111111] font-[500] ">300</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Analytics;
