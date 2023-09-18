import '../App.css';
import React from 'react';

import { FiMoreVertical, FiSmile, FiChevronRight } from "react-icons/fi"
import { BsDot } from "react-icons/bs";

import UserIMG from "../assets/user1.jpg";
import BotIMG from "../assets/bot.jpg";


export   default function App() {
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
              <div className='justify-end text-2xl text-white cursor-pointer'>
                <FiMoreVertical />
              </div>
            </div>
            <div className='text-lg text-white'>
              Got questions? We're here, and we'd love to chat with you.
            </div>
          </div>
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
          <div className='relative z-[2] -top-12 w-full flex flex-col gap-2'>
            <div className='justify-between flex w-1/2 mx-auto px-1'>
              <div className='bg-[#e7e7e7] rounded-xl text-black px-5 py-2 hover:bg-[#9d9d9d] cursor-pointer'>
                CHAT
              </div>
              <div className='bg-[#e7e7e7] rounded-xl text-black px-5 py-2 hover:bg-[#9d9d9d] cursor-pointer'>
                FAQS
              </div>
            </div>
            <div className='w-1/2 text-black text-base flex gap-2 px-1 mx-auto'>
              Powered by <span className='font-semibold  cursor-pointer'> HelpEngine </span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

