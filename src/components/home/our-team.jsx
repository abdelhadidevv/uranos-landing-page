import React from 'react'
import TeamItem from '../shared/team-item'
import avatar1 from '../../images/avatar1.png'
import avatar2 from '../../images/avatar2.png'
import avatar3 from '../../images/avatar3.jpg'
import avatar4 from '../../images/avatar4.jpg'

const OurTeam = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-main-yellow pt-32 px-4 pb-24'>
      <h3 className='font-roboto font-thin text-4xl lg:text-6xl text-black-text text-center'>Meet our team</h3>
      <p className='font-roboto font-bold text-2xl lg:text-4xl text-black-text text-center'>We make this APP!</p>
      <div className="mt-20 flex flex-col lg:flex-row justify-center items-center gap-12">
        <TeamItem image={avatar2} name="Lorem ipsum" description="Cras vel eleifend nisl, ac efficitur purus. Vestibulum vestibulum aliquam lectusmattis ac."/>
        <TeamItem image={avatar1} name="Aenean eget" description="Donec sagittis accumsan diam, eu efficitur nunc lobortis eget. Pellentesque posuere."/>
        <TeamItem image={avatar3} name="Nulla felis quam" description="Nulla felis quam, malesuada quis tincidunt vitae, iaculis id massa. Mauris pellentesque."/>
        <TeamItem image={avatar4} name="Mauris" description="Pellentesque posuere nisl a posuere mattis. Quisque nuet congue at, variuse."/>
      </div>
    </div>
  )
}

export default OurTeam