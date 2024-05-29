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
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">Welcome to <span className="font-semibold">World in the Clouds</span>🌤️
    <br/>
    Home of Discovery
    </h1>
  ),
  2: (
    <InfoBox
      text="Discover the world of Clouds and Coins, the secret lies within the phoenix"
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <InfoBox
      text="Led multiple projects to success. Curious about the impact?"
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
