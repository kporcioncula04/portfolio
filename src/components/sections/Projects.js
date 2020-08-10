import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

const PROJECT = [
  {
    name: 'Scribby',
    image: 'scribby.png',
    description: 'Scribby is an interactive web canvas integrated with a code editor app that makes collaboration, diagraming, and writing out code convenient and easy.',
    link: 'https://github.com/Capstone-GH/capstone-wb',
    url: 'https://scribby-dev.herokuapp.com/'
  },
  {
    name: 'RETROspective',
    image: 'retro.png',
    description: 'An online e-commerce shop where clients can purchase retro video games made in the 90’s.',
    link: 'https://github.com/ShopperSquad/GraceShopper',
    url: 'https://retrospective1972.herokuapp.com/'
  },
  {
    name: 'BIBO',
    image: 'bibo.PNG',
    description: 'A starter meditation mobile app built with React Native.',
    link: 'https://github.com/kporcioncula04/meditation_bibo'
  },
];

const Projects = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "team" } }) {
          edges {
            node {
              relativePath
              childImageSharp {
                fluid(maxWidth: 400, maxHeight: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        art_team: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "team_work" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="projects" accent="secondary">
        <Container style={{ position: 'relative' }}>
          <h1>Projects</h1>
          <TeamGrid>
            {PROJECT.map(({ name, image, description,link,url}) => {
              const img = data.allFile.edges.find(
                ({ node }) => node.relativePath === image
              ).node;
              return (
                <div key={name}>
                  <Img fluid={img.childImageSharp.fluid} alt={name}/>
                  <Title>{name}</Title>
                  <Subtitle>{description}</Subtitle>
                  <br />
                  <StyledExternalLink href={link}>
                  Github Source &nbsp;&#x2794;
                </StyledExternalLink>
                <br />
                <StyledExternalLink href={url}>
                  Live Demo &nbsp;&#x2794;
                </StyledExternalLink>
                </div>
              );
            })}
          </TeamGrid>
        </Container>
      </Section>
    )}
  />
);

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-template-rows: min-content;
  grid-gap: 50px;
  justify-content: space-between;
  margin-top: 72px;

  @media (max-width: ${props => props.theme.screen.lg}) {
    justify-content: start;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }

  @media (max-width: ${props => props.theme.screen.xs}) {
    grid-gap: 24px;
  }
`;

const Title = styled.p`
  margin-top: 16px;
  color: ${props => props.theme.color.black.regular};
`;

const Subtitle = styled.p`
  ${props => props.theme.font_size.small};
  color: ${props => props.theme.color.black.light};
`;

const StyledExternalLink = styled(ExternalLink)`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.color.black.regular};
  }
`;

export default Projects;


