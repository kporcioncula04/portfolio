import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Container } from '@components/global';

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        rounded: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "rounded" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <HeaderWrapper>
        <Container>
          <Grid>
            <HeadImage>
              <Img fluid={data.rounded.childImageSharp.fluid} />
            </HeadImage>
            <Text>
              <h1>
                hi, i'm karolina
                <br />
                <p>software engineer. fullstack developer.</p>
                <p>yoginī. matcha lover. oatkeeper </p>
                <br />
              </h1>
              <br />
            </Text>
          </Grid>
        </Container>
      </HeaderWrapper>
    )}
  />
);

const HeadImage = styled.figure`
  margin: 0;
  max-width: 300px;
  width: 100%;
  border: transparent;
  border-radius:10px;
  margin-left: 200px;
  margin-bottom: 75px;

  > div {
    width: 100%;
    margin-bottom: -4.5%;
    @media (max-width: ${props => props.theme.screen.md}) {
      width: 100%;
    }
`;

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.color.primary};
  padding-top: 96px;

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 60px;

    > ${HeadImage} {
      order: 2;
    }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 5px;

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 80px;

    > ${HeadImage} {
      order: 2;
    }
  }
`;

const Text = styled.div`
  justify-self: left;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: start;
  }
`;

export default Header;
