import React from 'react'
import AnswerItem from "../shared/answer-item";
import iconLight from "../../images/icon_light.svg";
import iconDesktop from "../../images/icon_desktop.svg";
import iconShare from "../../images/icon_share.svg";
import iconChat from "../../images/icon_chat.svg";

const LastSection = () => {
  return (
    <div className='w-full min-h-screen bg-hero bg-center bg-no-repeat bg-cover flex flex-col justify-center items-center px-4 py-14'>
      <h4 className='font-roboto font-thin text-6xl text-white text-center'>Haw our app works?</h4>
      <p className='font-roboto font-bold text-4xl text-white text-center pt-2'>We make this APP!</p>
      <div className="flex flex-col lg:flex-row gap-12 mt-20 lg:mx-10">
        <AnswerItem icon={iconChat} title="Lorem ipsum" description="Cras vel eleifend nisl, ac efficitur purus. Vestibulum vestibulum aliquam lectusmattis ac." />
        <AnswerItem icon={iconShare} title="Aenean eget" description="Donec sagittis accumsan diam, eu efficitur nunc lobortis eget. Pellentesque posuere." />
        <AnswerItem icon={iconLight} title="Nulla felis quam" description="Nulla felis quam, malesuada quis tincidunt vitae, iaculis id massa. Mauris pellentesque." />
        <AnswerItem icon={iconDesktop} title="Mauris" description="Pellentesque posuere nisl a posuere mattis. Quisque nuet congue at, variuse." />
      </div>
      <button className="w-max h-16 px-8 mt-14 z-10 uppercase text-center bg-main-yellow text-black-text rounded font-roboto font-bold text-lg">DOWNLOAD NOW</button>

    </div>
  )
}

export default LastSection