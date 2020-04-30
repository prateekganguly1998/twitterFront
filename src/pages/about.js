  
import React from "react";
import Title from "../components/Title";
import './about.scss'
import { useEffect } from "react";
import gsap from 'gsap'
import Footer from "../components/Footer";

import StickyFooter from 'react-sticky-footer'

const About = () => {
  useEffect(()=>
  {
    gsap.from('.inner', 0.8, {
      delay: 0.8,
      ease: "power3.in-out",
      y: 64,
      stagger: {
        amount: 1.7
      }
    });
  
  });
  return (
   <div className="container1">
     <div className="page">
     <div className="row">
     <div className='inner'>
      <Title lineContent='PHASE I : How we got' lineContent2='the tweet data' />
      <p className='other'>
        Twitter' development API was used to get the data for trending tweets
         which made our random (TW-RAND) dataset. We used "twit" as the third party NPM package for this phase
      </p>
    </div>
     </div>
     <div className="row" style={{backgroundColor:"#fada12"}}>
     <div className='inner'>
       <Title lineContent='PHASE II : How we got' lineContent2='the terror tweets' />
      <p className='other'>
       We used the research work of various individuals and universities to 
       get the idea of popular terrorist hashtags which included DAESH and The_Islamic_State
       as the most used ones. Later we used the twitter's API to get some tweets and the 
       rest came from KAGGLE's "HOW ISIS USES TWITTER" dataset.
      </p>
    </div>
     </div>
     <div className="row" style={{backgroundColor:"#fada12"}}>
     <div className='inner'>
       <Title lineContent='PHASE III : How we ' lineContent2='trained our ML model' />
      <p className='other'>
        A character his cache I succeed employed entire been it find the more
        and may the to his their five and towards in lay rippedup, what and so
        endure before for her been decades the few to than would was concept.
      </p>
    </div>
     </div>
     <StickyFooter
    bottomThreshold={50}>
      
   <Footer/> 
</StickyFooter>
   </div>
   
   
   </div>
  );
};

export default About