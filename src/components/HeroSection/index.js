import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElements';
import {
  ArrowForward,
  ArrowRight,
  HeroBg,
  HeroBtnWrapper,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  VideoBg
} from './HeroElements';


const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);  
  }
  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Virtuális Banki Szolgáltatások</HeroH1>
        <HeroP>
          Hívj meg 10 valós személyt a virtuális BANKING-ra egy nap alatt és 100 EUR-t utalunk az egyenlegedre.
        </HeroP>
        <HeroBtnWrapper>
          <Button to="signup" 
            onMouseEnter={onHover} 
            onMouseLeave={onHover}
            primary='true'
            dark='true'
            smooth={true} 
            duration={500} 
            spy={true} 
            exact='true' 
            offset={-80}
          >
              Nekikezdek { hover ? <ArrowForward/> : <ArrowRight/> }
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
