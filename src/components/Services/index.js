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
        <ServicesH1>Egyéb előnyeink</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1}/>
            <ServicesH2>Csökkentse a kiadásait</ServicesH2>
            <ServicesP>Nálunk megszabadul az átutalási költségektől és ezzel növeljük a bankszámláján maradt vagyonát.</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2}/>
            <ServicesH2>Virtuális szolgáltatás</ServicesH2>
            <ServicesP>Tranzakciót hajthat végre a világ bármely pontjára és a világ bármely pontjáról internethozzáféréssel.</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3}/>
            <ServicesH2>Prémium lehetőség</ServicesH2>
            <ServicesP>Szerezze meg különleges tagsági kártyánkat, mellyel minden átutaláskor 5%-ot visszakap a bankszámlájára.</ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  )
};

export default Services;
