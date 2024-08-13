import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        art_learn: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "learn_yourself" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        glasses: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "04" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1400) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

      }
    `}
    render={data => (
      <Section id="about">
        <Container>
          <Grid>
            <div>
              <h2>About Me</h2>
              <p>
              Hi! I'm Karolina Porcioncula, a software engineer specializing in frontend development. I have a passion for the visual aspect of coding and love bringing designs to life through clean, efficient, and user-friendly interfaces. My journey began in retail banking, but after deep self-reflection, I decided to pivot into tech. Completing a 17-week immersive coding bootcamp at Grace Hopper in FSA of Code was one of the best decisions I've ever made. I thrive on learning new technologies and enjoy the creative process of building something from the ground up.              </p>
              <br/>
              <p>

              When I'm not in front of a computer, you can find me doing Pilates, practicing yoga, spending time with my Manchester Terrier, or watching Formula 1.

</p>
            </div>
            <HeadImage>
              <Img fluid={data.glasses.childImageSharp.fluid} />
            </HeadImage>
          </Grid>
          <Grid inverse>
            <ImageSize>
              <Img fluid={data.art_learn.childImageSharp.fluid} />
            </ImageSize>
            <div>
              <h2>Tech Stack</h2>
              <p>
            
Frontend Development & Design: JavaScript, HTML, CSS, React, Vue, jQuery, Bootstrap, MaterialUI, Web Components, Figma, Wordpress, Google Tag Manager, Google Analytics, Ajax, Chart.js, Typescript

              </p>
              <br/>
              <p>
              Backend Development & Tools: Node.js, PHP, Express, SQL, REST APIs, AWS, Git, GitHub, Webpack, Lerna JS, Storybook, Playwright, Java, Socket.io, React Native, Jira
              </p>

            </div>
          </Grid>
        </Container>
      </Section>
    )}
  />
);


const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: 24px 0;

  ${props =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
      props.inverse &&
      `
        ${ImageSize} {
          order: 2;
        }
    `}
  }
`;

const ImageSize = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
`;

const HeadImage = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
  border: transparent;
  border-radius:10px;
`;

export default About;
