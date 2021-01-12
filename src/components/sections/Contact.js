import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
// import Img from 'gatsby-image';

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
    name: 'Github'
  },
  {
    icon: InstagramIcon,
    link: 'https://instagram.com/karolporcioncula',
    name: 'Instagram'
  },
  {
    icon: LinkedInIcon,
    link: 'https://www.linkedin.com/in/karolina-p04/',
    name: 'LinkedIn'
  },
  {
    icon: GmailIcon,
    link: 'mailto:kporcioncula.04@gmail.com',
    name: 'Gmail'
  },
  {
    icon: ResumeIcon,
    link: 'https://drive.google.com/file/d/1Ur3MYDW9khmH11LkOnKV1jEB0RAvr3eH/view?usp=sharing',
    name: 'Resume'
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
      <Section id="contact" accent>
        <StyledContainer>
          <div>
            <HeadText>Contact Me</HeadText>
            <p style={{textAlign: 'center'}}>I'll be glad to answer your questions!</p>
            <SocialIcons>
              {SOCIAL.map(({ icon, link, name }) => (
                <ExternalLink key={link} href={link}>
                   <img src={icon} alt="link" />
                   <br />
                   <IconText>{name}</IconText>
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

const IconText = styled.p`
    text-align: center
`
const HeadText = styled.h1`
    text-align: center
`;

const SocialIcons = styled.div`
  display: flex;

  img {
    margin: 0 8px;
    width: 100px;
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
  margin-top: 50px

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-content: center;
  }
`;

// const Fig = styled.figure`
//   width: 600px;
//   position: absolute;
//   top: -12%;
//   right: 50%;

//   @media (max-width: ${props => props.theme.screen.lg}) {
//     top: 0;
//     right: 65%;
//     width: 500px;
//   }

//   @media (max-width: ${props => props.theme.screen.md}) {
//     display: none;
//   }
// `;

export default Contact;
