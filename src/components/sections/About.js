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
                Hi! I'm Karolina Porcioncula.
              </p>
              <br/>
              <p>
              When I'm not in front of a computer, you can find me doing yoga, cooking, and spending time with my loved ones.
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
              Proficient: HTML, CSS, JS, Node.js , Express, Sequelize, React, Redux, Bootstrap
              </p>
              <br/>
              <p>
              Competent: Mocha, Chai, Jasmin, React- Native
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
