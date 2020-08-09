import React from 'react';
import styled from 'styled-components';

import { Section, Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

import FaqItem from '@common/FaqItem';

const FAQS = [
  {
    title: 'RETROspective',
    content: () => (
      <>
        An online e-commerce shop where clients can purchase retro video games made in the 90’s.
      </>
    ),
    image:'josh.png',
    link: 'https://github.com/ShopperSquad/GraceShopper',
    url: 'https://retrospective1972.herokuapp.com/'
  },
  {
    title: 'BIBO',
    content: () => (
      <>
       A starter meditation app where users can easily integrate it in their daily routines.
      </>
    ),
    image: 'lisa.jpg',
    link: 'https://github.com/kporcioncula04/meditation_bibo'
  },
  {
    title: 'Scribby',
    content: () => (
      <>
     Scribby is an interactive web canvas integrated with a code editor app that makes collaboration, diagraming, and writing out code convenient and easy.
      </>
    ),
    link: 'https://github.com/Capstone-GH/capstone-wb',
    url: 'https://scribby-dev.herokuapp.com/'
  },
];

const Faq = () => (
  <Section id="faq">
    <Container>
      <h1 style={{ marginBottom: 40 }}>Projects</h1>
      <div>
        {FAQS.map(({ title, content,link,url }) => (
          <FaqItem title={title} key={title}>
            {content()}
            <br/>
            <StyledExternalLink href={link}>
                  Github&nbsp;&#x2794;
            </StyledExternalLink>
            <br />
            <StyledExternalLink href={url}>
                  Site &nbsp;&#x2794;
            </StyledExternalLink>
          </FaqItem>

        ))}
      </div>
    </Container>
  </Section>
);


const StyledExternalLink = styled(ExternalLink)`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.color.black.regular};
  }
`;

export default Faq;

