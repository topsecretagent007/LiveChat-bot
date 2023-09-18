import '../App.css';
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import { FiMoreVertical, FiSmile, FiChevronRight } from "react-icons/fi"
import { BsDot } from "react-icons/bs";

import UserIMG from "../assets/user1.jpg";
import BotIMG from "../assets/bot.jpg";


export default function App() {
  const menuDropdown = useRef(null);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [faqState, setFaqState] = useState(false);
  const [changeStyle, setChangeStyle] = useState(false);
  const [changeModal, setChangeModal] = useState(false);
  const [currentDropDown1, setCurrentDropDown1] = useState(false);
  const [currentDropDown2, setCurrentDropDown2] = useState(false);
  const [currentDropDown3, setCurrentDropDown3] = useState(false);
  const [currentDropDown4, setCurrentDropDown4] = useState(false);
  const [currentDropDown5, setCurrentDropDown5] = useState(false);
  const [currentDropDown6, setCurrentDropDown6] = useState(false);
  const [currentDropDown7, setCurrentDropDown7] = useState(false);
  const [currentDropDown8, setCurrentDropDown8] = useState(false);
  const [openedFaqId, setOpenedFaqId] = useState(9)

  const dropDownText = async (e) => {
    setOpenedFaqId(e)
    console.log(e)
    switch (e) {
      case 0:
        await setCurrentDropDown1(!currentDropDown1);
        await setCurrentDropDown2(false);
        await setCurrentDropDown3(false);
        await setCurrentDropDown4(false);
        await setCurrentDropDown5(false);
        await setCurrentDropDown6(false);
        await setCurrentDropDown7(false);
        await setCurrentDropDown8(false);
        break;
      case 1:
        await setCurrentDropDown1(false);
        await setCurrentDropDown2(!currentDropDown2);
        await setCurrentDropDown3(false);
        await setCurrentDropDown4(false);
        await setCurrentDropDown5(false);
        await setCurrentDropDown6(false);
        await setCurrentDropDown7(false);
        await setCurrentDropDown8(false);
        break;
      case 2:
        await setCurrentDropDown1(false);
        await setCurrentDropDown2(false);
        await setCurrentDropDown3(!currentDropDown3);
        await setCurrentDropDown4(false);
        await setCurrentDropDown5(false);
        await setCurrentDropDown6(false);
        await setCurrentDropDown7(false);
        await setCurrentDropDown8(false);
        break;
      case 3:
        await setCurrentDropDown1(false);
        await setCurrentDropDown2(false);
        await setCurrentDropDown3(false);
        await setCurrentDropDown4(!currentDropDown4);
        await setCurrentDropDown5(false);
        await setCurrentDropDown6(false);
        await setCurrentDropDown7(false);
        await setCurrentDropDown8(false);
        break;
      case 4:
        await setCurrentDropDown1(false);
        await setCurrentDropDown2(false);
        await setCurrentDropDown3(false);
        await setCurrentDropDown4(false);
        await setCurrentDropDown5(!currentDropDown5);
        await setCurrentDropDown6(false);
        await setCurrentDropDown7(false);
        await setCurrentDropDown8(false);
        break;
      case 5:
        await setCurrentDropDown1(false);
        await setCurrentDropDown2(false);
        await setCurrentDropDown3(false);
        await setCurrentDropDown4(false);
        await setCurrentDropDown5(false);
        await setCurrentDropDown6(!currentDropDown6);
        await setCurrentDropDown7(false);
        await setCurrentDropDown8(false);
        break;
      case 6:
        await setCurrentDropDown1(false);
        await setCurrentDropDown2(false);
        await setCurrentDropDown3(false);
        await setCurrentDropDown4(false);
        await setCurrentDropDown5(false);
        await setCurrentDropDown6(false);
        await setCurrentDropDown7(!currentDropDown7);
        await setCurrentDropDown8(false);
        break;
      case 7:
        await setCurrentDropDown1(false);
        await setCurrentDropDown2(false);
        await setCurrentDropDown3(false);
        await setCurrentDropDown4(false);
        await setCurrentDropDown5(false);
        await setCurrentDropDown6(false);
        await setCurrentDropDown7(false);
        await setCurrentDropDown8(!currentDropDown8);
        break;
      default:
        break;
    }
  }

  const faqsData = [
    {
      total: "How to connect to your costumer support team?",
      description: "Simply look for the live chat widget in the right bottom side of the website and start a chat in order to connect with one of our agents.",
    },
    {
      total: "Do you offer customized solutions for business?",
      description: "Yes, we understand that every business is unique. We offer customized solutions tailored to your specific business needs."
    },
    {
      total: "What kind of services do you offer?",
      description: "We offer various services starting from: 24/7 live chat services, email support services, virtual assistance, phone support services and many more."
    },
    {
      total: "How does 24/7 live chat support work?",
      description: "Our 24/7 live chat aupport is staffed by a dedicated team of agents who are available around the clock to engage with your customers."
    },
    {
      total: "Can I add the widget chat in multiple websites?",
      description: "Yes, that would be possible if you have website subdomains in the same industry and they require 24/7 live chat assistance."
    },
    {
      total: "Is the chat widget fully customizable?",
      description: "Yes it is! When onboarding process starts you will be able to customize colors, follow up messages, avatars and more."
    },
    {
      total: "How to embed the chat widget?",
      description: "Our team will provide a snippet of code then you will be able to insert that in your website through many different plugins (We suggest WPCode)."
    },
    {
      total: "How long does it take to embed the widget?",
      description: "The process does not consume time, it is a small work that will require about 5 minutes depending from the platform that your website is built."
    },
  ]

  useEffect(() => {
    function handleScroll() {
      const currentScrollPos = window.pageYOffset;
      setPrevScrollPos(currentScrollPos);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuDropdown.current && !menuDropdown.current.contains(event.target)) {
        setChangeModal(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuDropdown]);

  useEffect(() => {
    console.log("change style")
  }, [changeStyle])

  return (
    <div className="App">
      <div className='flex flex-col w-full h-full min-h-screen bg-white justify-center'>
        <div className='w-[375px] h-[735px] rounded-xl justify-center bg-[#f7f7f7] mx-auto'>
          <div className='flex flex-col jsut w-full h-[202px] rounded-xl p-5 bg-gradient-to-br from-[#13CEBC] to-[#5362F5dd] gap-2'>
            <div className='flex w-full justify-between items-center'>
              <div className='text-start'>
                <svg width="40" height="37" viewBox="0 0 40 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M29.272 25.3585C29.7318 25.6604 30.0383 26.2642 30.0383 26.8679V27.7736C30.0383 30.3396 27.8927 32.4528 25.2874 32.4528H13.8355C12.8263 32.4528 11.8575 32.8498 11.1384 33.558L8.45191 36.204C7.0202 37.6141 4.5977 36.5998 4.5977 34.5903C4.5977 33.3903 3.61622 32.451 2.54625 31.9077C1.01624 31.1309 0 29.6062 0 27.7736V16.7547C0 14.1887 2.14559 12.0755 4.75096 12.0755C6.18986 12.0755 7.35632 13.2419 7.35632 14.6808V15.3962C7.35632 19.6226 10.8812 23.0943 15.1724 23.0943H22.6716C25.0623 23.0943 27.3848 23.891 29.272 25.3585ZM35.249 0H14.7126C12.1073 0 9.96169 2.11321 9.96169 4.67924V15.6981C9.96169 18.2642 12.1073 20.3774 14.7126 20.3774H26.2636C27.2155 20.3774 28.1354 20.7206 28.8548 21.344L31.8949 23.979C33.2673 25.1684 35.4023 24.1936 35.4023 22.3775C35.4023 21.2546 36.3155 20.3729 37.3305 19.8927C38.9289 19.1364 40 17.5796 40 15.6981V4.67924C40 2.11321 37.8544 0 35.249 0Z" fill="white" />
                </svg>
              </div>
              <div className='text-white font-extrabold w-full text-start text-4xl px-4'>
                Live Chat
              </div>
              <div onClick={() => setChangeModal(true)} className='justify-end text-2xl text-white cursor-pointer'>
                <FiMoreVertical />
                {
                  changeModal &&
                  <div ref={menuDropdown} className="md:rounded-xl absolute ">
                    <div onClick={() => setChangeStyle(!changeStyle)} className='relative -ml-44 mt-2 flex gap-3 bg-white rounded-xl px-5 py-4 text-black items-center text-end  cursor-pointer'>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_7_269)">
                          <path d="M15.0182 5.37941H13.2919H10.5422H9.91184L10.6201 6.08764V4.36135V1.61165V0.981321C10.6201 0.611263 10.2943 0.255386 9.91184 0.273095C9.52763 0.290801 9.20361 0.584715 9.20361 0.981321V2.70761V5.45731V6.08764C9.20361 6.47006 9.52763 6.79586 9.91184 6.79586H11.6381H14.3878H15.0182C15.3882 6.79586 15.7441 6.4701 15.7264 6.08764C15.7087 5.70343 15.4148 5.37941 15.0182 5.37941Z" fill="#25506B" />
                          <path d="M14.7939 0.206481C14.6151 0.385306 14.4363 0.564139 14.2574 0.742952C13.829 1.17142 13.4005 1.59991 12.9702 2.03016C12.4515 2.54892 11.9327 3.06771 11.4139 3.58648L10.0736 4.92678C9.85584 5.14456 9.63454 5.3588 9.42028 5.58013C9.41673 5.58367 9.41496 5.58544 9.41142 5.58898C9.14938 5.85103 9.1299 6.33263 9.41142 6.59112C9.69471 6.85139 10.1338 6.87086 10.4136 6.59112C10.5924 6.41229 10.7712 6.23346 10.95 6.05465C11.3785 5.62618 11.807 5.19768 12.2372 4.76744C12.756 4.24868 13.2748 3.72988 13.7936 3.21112C14.2397 2.76495 14.6859 2.31877 15.1339 1.87082C15.3516 1.65304 15.5729 1.43879 15.7872 1.21747C15.7907 1.21393 15.7925 1.21216 15.7961 1.20862C16.0581 0.946571 16.0776 0.464971 15.7961 0.206481C15.5128 -0.0537938 15.0737 -0.073268 14.7939 0.206481Z" fill="#25506B" />
                          <path d="M0.981321 10.6206H2.70761H5.45731H6.08764L5.37941 9.91233V11.6386V14.3883V15.0186C5.37941 15.3887 5.70518 15.7446 6.08764 15.7269C6.47184 15.7092 6.79586 15.4153 6.79586 15.0186V13.2924V10.5427V9.91233C6.79586 9.5299 6.47184 9.2041 6.08764 9.2041H4.36135H1.61165H0.981321C0.611263 9.2041 0.255386 9.52987 0.273095 9.91233C0.290801 10.2965 0.584715 10.6206 0.981321 10.6206Z" fill="#25506B" />
                          <path d="M1.20604 15.7942C1.38486 15.6154 1.5637 15.4366 1.74251 15.2578C2.17097 14.8293 2.59947 14.4008 3.02972 13.9706C3.54848 13.4518 4.06727 12.933 4.58603 12.4142L5.92633 11.0739C6.14411 10.8562 6.36542 10.6419 6.57968 10.4206C6.58322 10.4171 6.585 10.4153 6.58854 10.4117C6.85058 10.1497 6.87006 9.6681 6.58854 9.40961C6.30525 9.14933 5.86616 9.12986 5.5864 9.40961C5.40758 9.58843 5.22874 9.76726 5.04993 9.94608C4.62147 10.3745 4.19297 10.803 3.76272 11.2333C3.24396 11.752 2.72517 12.2708 2.20641 12.7896C1.76023 13.2358 1.31406 13.6819 0.866104 14.1299C0.648323 14.3477 0.42702 14.5619 0.212755 14.7833C0.209214 14.7868 0.207443 14.7886 0.203902 14.7921C-0.0581431 15.0541 -0.0776173 15.5357 0.203902 15.7942C0.487192 16.0545 0.926276 16.074 1.20604 15.7942Z" fill="#25506B" />
                          <path d="M5.37844 0.981321V2.70761V5.45731V6.08764L6.08666 5.37941H4.36037H1.61067H0.980345C0.610287 5.37941 0.254409 5.70518 0.272119 6.08764C0.289825 6.47184 0.583738 6.79586 0.980345 6.79586H2.70663H5.45633H6.08666C6.46909 6.79586 6.79489 6.47184 6.79489 6.08764V4.36135V1.61165V0.981321C6.79489 0.611263 6.46912 0.255386 6.08666 0.273095C5.70245 0.290801 5.37844 0.584715 5.37844 0.981321Z" fill="#25506B" />
                          <path d="M0.205992 1.20604C0.384818 1.38486 0.56365 1.5637 0.742463 1.74251C1.17093 2.17097 1.59943 2.59947 2.02967 3.02972C2.54843 3.54848 3.06723 4.06727 3.58599 4.58603L4.92629 5.92633C5.14407 6.14412 5.35832 6.36542 5.57964 6.57968C5.58318 6.58322 5.58495 6.58499 5.58849 6.58854C5.85054 6.85058 6.33214 6.87006 6.59063 6.58854C6.8509 6.30525 6.87038 5.86616 6.59063 5.5864C6.4118 5.40757 6.23297 5.22874 6.05416 5.04993C5.62569 4.62147 5.1972 4.19297 4.76695 3.76272C4.24819 3.24396 3.72939 2.72517 3.21063 2.20641C2.76446 1.76023 2.31828 1.31406 1.87033 0.866104C1.65255 0.648323 1.4383 0.42702 1.21698 0.212755C1.21344 0.209214 1.21167 0.207443 1.20813 0.203902C0.946083 -0.0581431 0.464483 -0.0776173 0.205992 0.203902C-0.0542819 0.487192 -0.0737561 0.926276 0.205992 1.20604Z" fill="#25506B" />
                          <path d="M10.6201 15.0177V13.2914V10.5417V9.91136L9.91184 10.6196H11.6381H14.3878H15.0182C15.3882 10.6196 15.7441 10.2938 15.7264 9.91136C15.7087 9.52715 15.4148 9.20312 15.0182 9.20312H13.2919H10.5422H9.91184C9.52941 9.20312 9.20361 9.52715 9.20361 9.91136V11.6376V14.3873V15.0177C9.20361 15.3877 9.52938 15.7436 9.91184 15.7259C10.296 15.7082 10.6201 15.4143 10.6201 15.0177Z" fill="#25506B" />
                          <path d="M15.794 14.7934C15.6152 14.6146 15.4363 14.4358 15.2575 14.257C14.8291 13.8285 14.4006 13.4 13.9703 12.9698C13.4516 12.451 12.9328 11.9322 12.414 11.4134L11.0737 10.0731C10.8559 9.85535 10.6417 9.63405 10.4203 9.41979C10.4168 9.41625 10.415 9.41447 10.4115 9.41093C10.1495 9.14889 9.66785 9.12941 9.40936 9.41093C9.14909 9.69422 9.12961 10.1333 9.40936 10.4131C9.58819 10.5919 9.76702 10.7707 9.94583 10.9495C10.3743 11.378 10.8028 11.8065 11.233 12.2367C11.7518 12.7555 12.2706 13.2743 12.7894 13.7931C13.2355 14.2392 13.6817 14.6854 14.1297 15.1334C14.3474 15.3511 14.5617 15.5724 14.783 15.7867C14.7865 15.7903 14.7883 15.792 14.7919 15.7956C15.0539 16.0576 15.5355 16.0771 15.794 15.7956C16.0543 15.5123 16.0737 15.0732 15.794 14.7934Z" fill="#25506B" />
                        </g>
                        <defs>
                          <clipPath id="clip0_7_269">
                            <rect width="16" height="16" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span className='text-start text-base'>
                        Switch to Classic
                      </span>
                    </div>
                  </div>
                }
              </div>
            </div>

            <div className='text-lg text-start  text-white'>
              Got questions? We're here, and we'd love to chat with you.
            </div>
          </div>
          {
            !faqState ?
              <div className='relative z-[2] -top-16 flex flex-col bg-white w-[345px] h-[500px] p-2 mx-auto rounded-xl'>
                <div className='w-full justify-center '>
                  <div className='flex flex-row justify-center gap-1 items-center'>
                    <BsDot style={{ color: "#00DF6F" }} />
                    <div className='text-black text-lg font-semibold'>
                      AppointHelp
                    </div>
                  </div>
                  <div className='text-black text-lg '>
                    Connected to an agent
                  </div>
                </div>
                <div className='relative -left-2 w-[340px] h-[380px] px-4 py-8 flex flex-col overflow-y-scroll'>
                  <div className='flex w-full items-center justify-end gap-2'>
                    <div className='flex flex-col gap-1'>
                      <div className='px-6 py-3 text-white text-base bg-[#6976F6] rounded-t-xl rounded-bl-xl'>
                        Hello there!
                      </div>
                      <div className='text-black text-[10px] text-end'>
                        12: 30 AM
                      </div>
                    </div>
                    <img src={UserIMG} alt='UserIMG' className='rounded-full w-14 h-14' />
                  </div>
                  <div className='flex w-full items-center gap-2 justify-start'>
                    <img src={BotIMG} alt='BotIMG' className='w-14 h-14 rounded-full' />
                    <div className='flex flex-col gap-1'>
                      <div className='px-6 py-3 text-white text-base rounded-t-xl rounded-br-xl bg-[#D9D9D9]'>
                        Tony Stark...
                      </div>
                      <div className='text-black text-[10px] text-start'>
                        12: 30 AM
                      </div>
                    </div>
                  </div>
                  <div className='flex w-full items-center justify-end gap-2'>
                    <div className='flex flex-col gap-1'>
                      <div className='px-6 py-3 text-white text-base bg-[#6976F6] rounded-t-xl rounded-bl-xl'>
                        Hello there!
                      </div>
                      <div className='text-black text-[10px] text-end'>
                        12: 30 AM
                      </div>
                    </div>
                    <img src={UserIMG} alt='UserIMG' className='rounded-full w-14 h-14' />
                  </div>
                  <div className='flex w-full items-center gap-2 justify-start'>
                    <img src={BotIMG} alt='BotIMG' className='w-14 h-14 rounded-full' />
                    <div className='flex flex-col gap-1'>
                      <div className='px-6 py-3 text-white text-base rounded-t-xl rounded-br-xl bg-[#D9D9D9]'>
                        Tony Stark...
                      </div>
                      <div className='text-black text-[10px] text-start'>
                        12: 30 AM
                      </div>
                    </div>
                  </div>
                  <div className='flex w-full items-center justify-end gap-2'>
                    <div className='flex flex-col gap-1'>
                      <div className='px-6 py-3 text-white text-base bg-[#6976F6] rounded-t-xl rounded-bl-xl'>
                        Hello there!
                      </div>
                      <div className='text-black text-[10px] text-end'>
                        12: 30 AM
                      </div>
                    </div>
                    <img src={UserIMG} alt='UserIMG' className='rounded-full w-14 h-14' />
                  </div>
                  <div className='flex w-full items-center gap-2 justify-start'>
                    <img src={BotIMG} alt='BotIMG' className='w-14 h-14 rounded-full' />
                    <div className='flex flex-col gap-1'>
                      <div className='px-6 py-3 text-white text-base rounded-t-xl rounded-br-xl bg-[#D9D9D9]'>
                        Tony Stark...
                      </div>
                      <div className='text-black text-[10px] text-start'>
                        12: 30 AM
                      </div>
                    </div>
                  </div>
                  <div className='flex w-full items-center justify-end gap-2'>
                    <div className='flex flex-col gap-1'>
                      <div className='px-6 py-3 text-white text-base bg-[#6976F6] rounded-t-xl rounded-bl-xl'>
                        Hello there!
                      </div>
                      <div className='text-black text-[10px] text-end'>
                        12: 30 AM
                      </div>
                    </div>
                    <img src={UserIMG} alt='UserIMG' className='rounded-full w-14 h-14' />
                  </div>
                  <div className='flex w-full items-center gap-2 justify-start'>
                    <img src={BotIMG} alt='BotIMG' className='w-14 h-14 rounded-full' />
                    <div className='flex flex-col gap-1'>
                      <div className='px-6 py-3 text-white text-base rounded-t-xl rounded-br-xl bg-[#D9D9D9]'>
                        Tony Stark...
                      </div>
                      <div className='text-black text-[10px] text-start'>
                        12: 30 AM
                      </div>
                    </div>
                  </div>
                </div>
                <div className='w-full flex'>
                  <div className='w-4/5 border-[0.5px] border-black border-r-white rounded-l-xl px-3 py-2 bg-white justify-between flex'>
                    <input className='outline-none' placeholder="Type something..." />
                    <FiSmile className='text-3xl cursor-pointer' />
                  </div>
                  <div className='flex w-1/5 bg-[#6976F6] p-2 rounded-r-xl items-center justify-center cursor-pointer '>
                    <FiChevronRight style={{ color: "white", fontSize: "32px" }} />
                  </div>
                </div>
              </div>
              :
              <div className='relative z-[2] -top-16 flex flex-col bg-white w-[345px] h-[500px] p-2 mx-auto rounded-xl'>
                <div className='relative -left-2 w-[340px] h-[500px] px-4 pb-4 flex flex-col overflow-y-scroll'>
                  <div className="relative w-full mx-auto text-black">

                    {
                      faqsData.map((item, index) => {
                        return (
                          <div key={index}>
                            <div onClick={(e) => dropDownText(index)} className={`${index === openedFaqId ? "rounded-t-xl border-b-white" : "rounded-xl"} mt-5 cursor-pointer border-[#0334E4] border-[0.5px] p-2 text-start backdrop-filter flex items-center justify-between font-semibold text-base`}>
                              {item.total}
                            </div>
                            <div className={`${index === openedFaqId ? "py-2 border-[#0334E4] border-t-white border-[0.5px] p-2 rounded-b-lg" : ""} px-1 text-start text-black backdrop-filter duration-300 `}>
                              <span className={`${index === openedFaqId ? " h-full flex" : "hidden"}`}>
                                {item.description}
                              </span>
                            </div>
                          </div>
                        )
                      })
                    }

                  </div>
                </div>
              </div>
          }

          <div className='relative z-[2] -top-12 w-full flex flex-col gap-2'>
            <div className='justify-between flex w-1/2 mx-auto px-1'>
              <div onClick={() => setFaqState(false)} className='bg-[#e7e7e7] rounded-xl text-black px-5 py-2 hover:bg-[#9d9d9d] cursor-pointer'>
                CHAT
              </div>
              <div onClick={() => setFaqState(true)} className='bg-[#e7e7e7] rounded-xl text-black px-5 py-2 hover:bg-[#9d9d9d] cursor-pointer'>
                FAQS
              </div>
            </div>
            <div className='w-1/2 text-black text-base flex gap-2 px-1 mx-auto'>
              Powered by
              <span className='font-semibold  cursor-pointer'>
                <Link
                  className="text-black underline decoration-sky-500/30 break-words"
                  to="https://appointhelp.com/"
                  target="_blank"
                >
                  HelpEngine
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

