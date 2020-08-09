// import React from 'react';
// import styled from 'styled-components';
// import { StaticQuery, graphql } from 'gatsby';
// import Img from 'gatsby-image';

// import { Section, Container } from '@components/global';

// const PROJECT = [
//   {
//     name: 'Scribby',
//     image: 'josh.jpg',
//     description: 'Scribby is an interactive web canvas integrated with a code editor app that makes collaboration, diagraming, and writing out code convenient and easy.',
//     link: 'https://github.com/Capstone-GH/capstone-wb'
//   },
//   {
//     name: 'RETROspective',
//     image: 'lisa.jpg',
//     description: 'An online e-commerce shop where clients can purchase retro video games made in the 90’s.',
//     link: 'https://github.com/ShopperSquad/GraceShopper'
//   },
//   {
//     name: 'BIBO',
//     image: 'ashlyn.jpg',
//     description: 'A starter meditation app where users can easily integrate it in their daily routines.',
//     link: 'https://github.com/kporcioncula04/meditation_bibo'
//   },
// ];

// const Team = () => (
//   <StaticQuery
//     query={graphql`
//       query {
//         allFile(filter: { sourceInstanceName: { eq: "team" } }) {
//           edges {
//             node {
//               relativePath
//               childImageSharp {
//                 fluid(maxWidth: 400, maxHeight: 400) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//           }
//         }
//         art_team: file(
//           sourceInstanceName: { eq: "art" }
//           name: { eq: "team_work" }
//         ) {
//           childImageSharp {
//             fluid(maxWidth: 1600) {
//               ...GatsbyImageSharpFluid_withWebp_tracedSVG
//             }
//           }
//         }
//       }
//     `}
//     render={data => (
//       <Section id="brands" accent="secondary">
//         <Container style={{ position: 'relative' }}>
//           <h1>Projects</h1>
//           <TeamGrid>
//             {PROJECT.map(({ name, image, description, link }) => {
//               const img = data.allFile.edges.find(
//                 ({ node }) => node.relativePath === image
//               ).node;
//               return (
//                 <div key={name}>
//                   <Img fluid={img.childImageSharp.fluid} alt={name} />
//                   <Title>{name}</Title>
//                   <Subtitle>{description}</Subtitle>
//                 </div>
//               );
//             })}
//           </TeamGrid>
//           <Art>
//             <Img fluid={data.art_team.childImageSharp.fluid} />
//           </Art>
//           <ArtMobile>
//             <Img fluid={data.art_team.childImageSharp.fluid} />
//           </ArtMobile>
//         </Container>
//       </Section>
//     )}
//   />
// );

// const TeamGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, 200px);
//   grid-template-rows: min-content;
//   grid-gap: 50px;
//   justify-content: space-between;
//   width: 60%;
//   margin-top: 72px;

//   @media (max-width: ${props => props.theme.screen.lg}) {
//     justify-content: start;
//   }

//   @media (max-width: ${props => props.theme.screen.md}) {
//     width: 100%;
//     grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
//   }

//   @media (max-width: ${props => props.theme.screen.xs}) {
//     grid-gap: 24px;
//   }
// `;

// const Art = styled.figure`
//   width: 800px;
//   margin: -80px 0;
//   position: absolute;
//   top: 0;
//   left: 70%;

//   @media (max-width: ${props => props.theme.screen.lg}) {
//     top: 20%;
//   }

//   @media (max-width: ${props => props.theme.screen.md}) {
//     display: none;
//   }
// `;

// const ArtMobile = styled.figure`
//   width: 100%;
//   margin: 0;
//   display: none;
//   margin-top: 64px;
//   margin-bottom: -60%;

//   @media (max-width: ${props => props.theme.screen.md}) {
//     display: block;
//   }
// `;

// const Title = styled.p`
//   margin-top: 16px;
//   color: ${props => props.theme.color.black.regular};
// `;

// const Subtitle = styled.p`
//   ${props => props.theme.font_size.small};
//   color: ${props => props.theme.color.black.light};
// `;


// export default Team;

import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
// import Img from 'gatsby-image';

import { Section, Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

import { ReactComponent as AirbnbLogo } from '@images/logos/airbnb.svg';
import { ReactComponent as AppleMusicLogo } from '@images/logos/apple-music.svg';
import { ReactComponent as CokeLogo } from '@images/logos/coca-cola.svg';
import { ReactComponent as NodeLogo } from '@images/logos/nodejs.svg';
import { ReactComponent as NikeLogo } from '@images/logos/nike.svg';
import { ReactComponent as InstagramLogo } from '@images/logos/instagram.svg';

const LOGOS = [
  {
    logo: AirbnbLogo,
    link: 'https://airbnb.io',

  },
  {
    logo: AppleMusicLogo,
    link: 'https://www.apple.com/in/music/',
  },
  {
    logo: CokeLogo,
    link: 'https://coca-cola.com',
  },
  {
    logo: NodeLogo,
    link: 'https://nodejs.org',
  },
  {
    logo: NikeLogo,
    link: 'https://nike.com',
  },
  {
    logo: InstagramLogo,
    link: 'https://instagram.com',
  },
];

const Team = () => (
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
            <LogoGrid>
              {LOGOS.map(({ logo, link }) => (
                <ExternalLink key={link} href={link}>
                  {logo()}
                </ExternalLink>
              ))}

            </LogoGrid>
          </div>
          {/* <Art>
            <Img fluid={data.art_story.childImageSharp.fluid} />
          </Art> */}
        </StyledContainer>
      </Section>
    )}
  />
);

const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 64px;
  justify-items: center;
  margin-top: 96px;

  a {
    svg {
      width: 100%;
    }
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: flex-end;
  position: relative;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-content: center;
  }
`;

// const Art = styled.figure`
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

export default Team;
