import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';
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
    link: 'https://drive.google.com/file/d/1fVPhMS3yck9Y3EtLNeZCz6dyvERFP-4X/view?usp=sharing'
  }
];

const Contact = () => (
  <StaticQuery
    query={graphql`
      query {
        art_story: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "tell_story" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="brands" accent>
        <StyledContainer>
          <div>
            <h1>Contact</h1>
            <SocialIcons>
              {SOCIAL.map(({ icon, link }) => (
                <ExternalLink key={link} href={link}>
                   <img src={icon} alt="link" />
                </ExternalLink>
              ))}

            </SocialIcons>
          </div>
          {/* <Fig>
              <Img fluid={data.art_story.childImageSharp.fluid} />
          </Fig> */}
        </StyledContainer>
      </Section>
    )}
  />
);

const SocialIcons = styled.div`
  display: flex;

  img {
    margin: 0 8px;
    width: 90px;
    height: 70px;
    margin-top: 30px;
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-top: 40px;
  }
`;

const StyledContainer = styled(Container)`
  display: grid;
  justify-content: center;
  position: relative;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-content: center;
  }
`;

const Fig = styled.figure`
  width: 600px;
  position: absolute;
  top: -12%;
  right: 50%;

  @media (max-width: ${props => props.theme.screen.lg}) {
    top: 0;
    right: 65%;
    width: 500px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    display: none;
  }
`;

export default Contact;
