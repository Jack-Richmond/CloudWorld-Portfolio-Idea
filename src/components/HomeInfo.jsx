import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';


const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-semibold sm:text-l text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain"/>
    </Link>
  </div>
)

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">Hi, I'm <span className="font-semibold">Jack</span> 👋
    <br/>
    A Full Stack Web Developer from London.
    </h1>
  ),
  2: (
    <InfoBox
      text=" Developing lots of different applications has allowed me to pick up many skills along the way."
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <InfoBox
      text="I have completed multiple group and personal projects driving performance and reliability."
      link="/projects"
      btnText="Visit my portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Need a project done or looking for a dev? im just a few keystrokes away..."
      link="/contact"
      btnText="Let's talk"
    />
  ),
}


const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo
