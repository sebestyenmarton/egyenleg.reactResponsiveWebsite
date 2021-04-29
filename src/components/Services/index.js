import React from 'react';
import Icon1 from '../../images/svg-2.svg';
import Icon2 from '../../images/svg-4.svg';
import Icon3 from '../../images/svg-5.svg';
import {
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper
} from './ServicesElements';
const Services = () => {
  return (
    <>
      <ServicesContainer id="discover">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1}/>
            <ServicesH2>Reduce expenses</ServicesH2>
            <ServicesP>We help your fees and increase your overall revenue.</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2}/>
            <ServicesH2>Wirtual offices</ServicesH2>
            <ServicesP>You can acces our platform online anywhere in the world.</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3}/>
            <ServicesH2>Premium Benefits</ServicesH2>
            <ServicesP>Unlock our special membership card that return 5% cash back.</ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  )
};

export default Services;
