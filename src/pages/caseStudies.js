  
import React from "react";
import Title from "../components/Title";
import { useEffect } from "react";
import gsap from 'gsap'
import './casestudies.scss'
import StickyFooter from 'react-sticky-footer'
import Footer from "../components/Footer";
import Chart from '../components/Chart'
const CaseStudies = () => {
  
  useEffect(()=>
  {
    gsap.from('p', 0.8, {
      delay: 0.8,
      ease: "power3.in-out",
      y: 64,
      stagger: {
        amount: 1.7
      }
    });
  
  });
 
  return (
   <div className="container2">
     <div className="page2">
     <div className="row2">
     <div className='inner2' style={{display:"block"}}>
      <Title lineContent='Online extremism and the communities that
sustain it:' lineContent2='Detecting the ISIS supporting
community on Twitter' />
      <p className='other2'>
      The Islamic State of Iraq and ash-Sham (ISIS) continues to use social media as an essential
element of its campaign to motivate support. On Twitter, ISIS’ unique ability to leverage
unaffiliated sympathizers that simply retweet propaganda has been identified as a primary
mechanism in their success in motivating both recruitment and “lone wolf” attacks. The present work explores a large community of Twitter users whose activity supports ISIS propaganda diffusion in varying degrees. Within this ISIS supporting community, we observe a
diverse range of actor types, including fighters, propagandists, recruiters, religious scholars,
and unaffiliated sympathizers. The interaction between these users offers unique insight
into the people and narratives critical to ISIS’ sustainment. In their entirety, we refer to this
diverse set of users as an online extremist community or OEC. We present Iterative Vertex
Clustering and Classification (IVCC), a scalable analytic approach for OEC detection in
annotated heterogeneous networks, and provide an illustrative case study of an online community of over 22,000 Twitter users whose online behavior directly advocates support for
ISIS or contibutes to the group’s propaganda dissemination through retweets.
      </p>
    </div>
     </div>
     <div className="row2">
     <div className='inner2' style={{display:"block"}}>
      <Title lineContent='From Tweets to Intelligence: Understanding ' lineContent2='the Islamic Jihad Supporting Community on Twitter' />
      <p className='other2'>
      ISIS’ ability to build and maintain a large online community that disseminates 
      propaganda and garners support continues to give their message global reach. 
      Although these communities contain trained media cadre, recent literature suggests
       that large numbers of “unaffiliated sympathizers” who simply retweet or repost 
       propaganda explain ISIS’ unprecedented online success [1, 2]. Tailored methodologies
        to detect and study these online threat-group-supporting communities (OTGSC) could 
        help provide the understanding needed to craft effective counter-narratives however
         continued development of these methods will require collaboration between data scientists
          and regional experts. We illustrate the potential of this partnership using two ongoing projects 
          at the Center for Computational Analysis of Social and Organizational Systems (CASOS) at 
          Carnegie Mellon University. First we present the CASOS Jihadist Twitter Community (CJTC),
           an online community of over 15,000 Twitter users that support one or more of the Islamic extremist
            groups engaged in the ongoing conflicts in Northern Iraq and Syria. We briefly discuss the methods
             used to detect and monitor these communities and highlight forms of information that can be
              extracted from them. We then present an active social botnet that attempts to elevate the social
               influence of users supportive to Jabhat al-Nusra’s agenda. In each case we highlight the
                ability of these methods to incorporate regional expertise for better performance and recommend
                 future research.
      </p>
    </div>
     </div>
     <div className="row2">
     <div className='inner2' style={{display:"block"}}>
      <Title lineContent='The Dataset of three categorires of tweets' lineContent2='was extracted from a survey made on Islamic terrorism'/>
      <p className='other2'>
      We performed experiments using different classification techniques,
datasets, and features to evaluate the ability these techniques have to distinguish extremist from non-extremist tweets. We also examine which features
appeared to be most important in facilitating this task. Between 4000 and
7500 tweets were used in total.
Results differed depending on what datasets we used. Using TWPRO and TW-RAND led to better results than if TW-PRO and TW-CON
were used. The results for TW-PRO and TW-RAND and the features (S +
T + SB) are shown in Table 11. As can be noted AdaBoost performs very
well with 100 % accuracy on the test set.
A lot of research has been done on tweets classification where tweets
are classified into several classes as in [25] where tweets are classified as having
a negative, neutral or positive sentiment or like in [41] where tweets are
classified into categories such as News, Events, Opinions, Deals, and Private
Messages. Not as much research has focused on classification of text as being
radical/terrorist related or not.
One approach is described in [46] where radical tweets are classified in the categories Media, War terrorism, Extremism, Operations, Jihad,
Country and Al-Qaeda using security dictionaries of enriched themes where
each theme was categorized by semantically related words. In [46] they built
dictionaries by looking at tweets containing hashtags like Al-Qaeda, Jihad,
Terrorism and Extremism and by collecting relevant words for their purpose.
A document was vectorized not according to the frequency of words but on
the basis of presence of security related keywords. For example if the categories in which the messages should be classified are Jihad, Terrorism and
Country, then for each category that the message contains related words the
value will be 1 otherwise 0. The presence of one or more words relevant to
predefined categories (War-Terrorism, Extremism, Jihad etc.) was used to
deduce final category. The high results obtained, over 90% accuracy, led to
the idea that keywords might be a good approach in classifying tweets.
      </p>
    </div>
     </div>
     <div className="row2">
     <div className='inner2' style={{display:"block"}}>
      <Title lineContent='Online extremism and the communities that
sustain it:' lineContent2='Detecting the ISIS supporting
community on Twitter' />
      <p className='other2'>
      The Islamic State of Iraq and ash-Sham (ISIS) continues to use social media as an essential
element of its campaign to motivate support. On Twitter, ISIS’ unique ability to leverage
unaffiliated sympathizers that simply retweet propaganda has been identified as a primary
mechanism in their success in motivating both recruitment and “lone wolf” attacks. The present work explores a large community of Twitter users whose activity supports ISIS propaganda diffusion in varying degrees. Within this ISIS supporting community, we observe a
diverse range of actor types, including fighters, propagandists, recruiters, religious scholars,
and unaffiliated sympathizers. The interaction between these users offers unique insight
into the people and narratives critical to ISIS’ sustainment. In their entirety, we refer to this
diverse set of users as an online extremist community or OEC. We present Iterative Vertex
Clustering and Classification (IVCC), a scalable analytic approach for OEC detection in
annotated heterogeneous networks, and provide an illustrative case study of an online community of over 22,000 Twitter users whose online behavior directly advocates support for
ISIS or contibutes to the group’s propaganda dissemination through retweets.
      </p>
    </div>
     </div>
     <div className="row2">
     <div className="inner2"  style={{display:"block"}}>
         
         <p className="other2">
         ISIS-Tweets are tweets posted by a known seed of ISIS-related accounts. Legit-Tweets is a randomly sampled set of users and their tweets.Retweets and mentions of these two sets (ISIS and Legit) by the overall Twitter community are also extracted.
  
         </p > 
         </div>
         <br/>
       <Chart/>
     </div>
     <StickyFooter
    bottomThreshold={50}>
   <Footer/> 
</StickyFooter>
   </div>
   
   
   </div>
  );
};

export default CaseStudies