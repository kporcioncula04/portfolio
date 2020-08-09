import React from 'react';

import { Section, Container } from '@components/global';

import FaqItem from '@common/FaqItem';
// import ExternalLink from '@common/ExternalLink';

const FAQS = [
  {
    title: 'RETROspective',
    content: () => (
      <>
        An online e-commerce shop where clients can purchase retro video games made in the 90’s.
      </>
    ),
    image:'josh.png'
  },
  {
    title: 'BIBO',
    content: () => (
      <>
       A starter meditation app where users can easily integrate it in their daily routines.
      </>
    ),
    image: 'lisa.jpg'
  },
  {
    title: 'Scribby',
    content: () => (
      <>
     Scribby is an interactive web canvas integrated with a code editor app that makes collaboration, diagraming, and writing out code convenient and easy.
      </>
    ),
  },
];

const Faq = () => (
  <Section id="faq">
    <Container>
      <h1 style={{ marginBottom: 40 }}>Projects</h1>
      <div>
        {FAQS.map(({ title, content }) => (
          <FaqItem title={title} key={title}>
            {content()}
          </FaqItem>
        ))}
      </div>
    </Container>
  </Section>
);

export default Faq;
