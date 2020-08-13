import React from 'react';
import styled from 'styled-components';

import { Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

import GithubIcon from '@static/icons/github.svg';
import InstagramIcon from '@static/icons/instagram.svg';
import LinkedInIcon from '@static/icons/linkedin.svg'
import GmailIcon from '@static/icons/gmail.svg'
import ResumeIcon from '@static/icons/resume.svg'


const SOCIAL = [
  {
    icon: GithubIcon,
    link: 'https://github.com/kporcioncula04',
  },
  {
    icon: InstagramIcon,
    link: 'https://instagram.com/karolporcioncula',
  },
  {
    icon: LinkedInIcon,
    link: 'https://www.linkedin.com/in/karolina-p04/',
  },
  {
    icon: GmailIcon,
    link: 'mailto:kporcioncula.04@gmail.com',
  },
  {
    icon: ResumeIcon,
    link: 'https://drive.google.com/file/d/1D-XQgZ66tSQPDngwjPeqEFRmKXlqO5mC/view?usp=sharing'
  }
];

const Footer = () => (
   (
    <React.Fragment>
      <FooterWrapper>
        <StyledContainer>
          <Copyright>
            <span>
            &#xa9;Built with Gatsby
            </span>
          <br />
          <span>
          <ExternalLink href={`https://absurd.design/`}>
          Illustrations by <strong>absurd.design</strong>
          </ExternalLink>
            </span>
          </Copyright>
          <SocialIcons>
            {SOCIAL.map(({ icon, link }) => (
              <ExternalLink key={link} href={link}>
                <img src={icon} alt="link" />
              </ExternalLink>
            ))}
          </SocialIcons>
        </StyledContainer>
      </FooterWrapper>
    </React.Fragment>
  )
);

const SocialIcons = styled.div`
  display: flex;

  img {
    margin: 0 8px;
    width: 24px;
    height: 24px;
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-top: 40px;
  }
`;

const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.color.primary};
  padding: 32px 0;
`;

const Copyright = styled.div`
  font-family: ${props => props.theme.font.secondary};
  ${props => props.theme.font_size.small};
  color: ${props => props.theme.color.black.regular};

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
    text-align: center;
  }
`;

export default Footer;
