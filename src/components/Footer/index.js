import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube
} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {
  DeveloperName,
  FooterContainer,
  FooterLink,
  FooterLinkItems,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterWrap,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights
} from './FooterElements';


const Footer = () => {

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Rólunk</FooterLinkTitle>
              <FooterLink to="/signin">Hogyan működik?</FooterLink>
              <FooterLink to="/signin">Fejlesztés</FooterLink>
              <FooterLink to="/signin">Befektetők</FooterLink>
              <FooterLink to="/signin">Szolgáltatási feltételek</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Kapcsolat</FooterLinkTitle>
              <FooterLink to="/signin">Elérhetőség</FooterLink>
              <FooterLink to="/signin">Támogatóink</FooterLink>
              <FooterLink to="/signin">Élő üzenőfal</FooterLink>
              <FooterLink to="/signin">Támogatás</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Videók</FooterLinkTitle>
              <FooterLink to="/signin">Bemutatkozó videó</FooterLink>
              <FooterLink to="/signin">Követők</FooterLink>
              <FooterLink to="/signin">A cégről</FooterLink>
              <FooterLink to="/signin">Közreműködők</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Közösségi média</FooterLinkTitle>
              <FooterLink to="/signin">Instagram</FooterLink>
              <FooterLink to="/signin">Facebook</FooterLink>
              <FooterLink to="/signin">Youtube</FooterLink>
              <FooterLink to="/signin">Twitter</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              Egyenleg
            </SocialLogo>
            <WebsiteRights>
              Egyenleg © {year + "." + month + "." + day} - {' '}
              <DeveloperName href="//www.linkedin.com/in/sdgmarton" >
                S.Marton 
              </DeveloperName>
              {', '}Frontend Developer
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="//www.facebook.com/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="//www.instagram.com/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="//www.youtube.com/" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href="//www.twitter.com/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="//www.linkedin.com/in/sdgmarton" target="_blank" aria-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
};

var day = new Date().getDate();
var month = new Date().getMonth()+1;
var year = new Date().getFullYear();


export default Footer;
