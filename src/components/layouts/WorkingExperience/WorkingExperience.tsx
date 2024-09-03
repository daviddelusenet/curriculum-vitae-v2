import React, { FunctionComponent } from "react";
import { ExternalLink } from "../../atoms/ExternalLink/ExternalLink";
import { Paragraph } from "../../atoms/Paragraph/Paragraph";
import { Subtitle } from "../../atoms/Subtitle/Subtitle";
import { Title } from "../../atoms/Title/Title";

export const WorkingExperience: FunctionComponent = () => (
  <>
    <Title>Working experience</Title>
    <Subtitle date="September 2024 - present">
      frontend engineer at
      <ExternalLink hasLeadingSpace href="//www.bird.com/">
        Bird
      </ExternalLink>
    </Subtitle>
    <Paragraph>
      Bird helps marketing, service, and engineering teams create personalized
      interactions that drive customer growth.
    </Paragraph>
    <Subtitle date="May 2023 - August 2024">
      senior frontend developer at
      <ExternalLink hasLeadingSpace href="//www.deptagency.com/">
        DEPT®
      </ExternalLink>
    </Subtitle>
    <Paragraph>
      DEPT® is pioneering tech/marketing to help their clients stay ahead. As a
      full-service digital agency, their team of 4,000+ digital specialists
      across 30+ locations on five continents delivers pioneering work on a
      global scale with a boutique culture.
    </Paragraph>
    <Subtitle date="December 2022 - May 2023">
      team lead frontend developer at
      <ExternalLink hasLeadingSpace href="//touchtribe.nl/">
        Touchtribe
      </ExternalLink>
    </Subtitle>
    <Subtitle date="July 2022 - December 2022">
      lead frontend developer at
      <ExternalLink hasLeadingSpace href="//touchtribe.nl/">
        Touchtribe
      </ExternalLink>
    </Subtitle>
    <Paragraph>
      Touchtribe builds digital platforms that help businesses and brands grow.
      They achieve this by using cloud native and headless software which they
      shape into modern composable architectures.
    </Paragraph>
    <Subtitle date="July 2020 - July 2022">
      senior frontend developer at
      <ExternalLink hasLeadingSpace href="//codedazur.com/">
        code d&apos;azur
      </ExternalLink>
    </Subtitle>
    <Paragraph>
      code d&apos;azur is a digital brand and experience company with offices in
      Amsterdam, Barcelona, Dubai and Austin, Texas. code d&apos;azur
      specializes itself in consulting and transformation, platforms, products
      and services, plus content and campaigns that help their clients stand out
      from the crowd and fit into their customers&apos; lives.
    </Paragraph>
    <Subtitle date="August 2019 - July 2020">
      frontend developer consultant at
      <ExternalLink hasLeadingSpace href="//cygnigroup.com/nl/">
        Cygni NL
      </ExternalLink>
    </Subtitle>
    <Paragraph>
      Cygni is an IT consultancy that strives to be the premier provider of
      innovative digital solutions. Cygni's team of consultants bring a wealth
      of expertise to the table, including fullstack, frontend, mobile
      development, UX design, and project management. They are committed to
      helping their customers create high-quality, cost-effective solutions that
      meet their needs.
    </Paragraph>
    <Subtitle date="January 2018 - August 2019">
      frontend developer at
      <ExternalLink hasLeadingSpace href="//random.studio/">
        Random Studio
      </ExternalLink>
    </Subtitle>
    <Paragraph>
      Random is an experience design studio and Certified B Corporation® based
      in Amsterdam and Paris, bridging the physical and digital in unexpected
      ways.
    </Paragraph>
    <Subtitle date="February 2016 - January 2018">
      (intern) frontend developer at
      <ExternalLink hasLeadingSpace href="//momkai.com">
        Momkai
      </ExternalLink>
    </Subtitle>
    <Paragraph>
      With memberful design, Momkai finds creative solutions that build lasting
      connections. They bring people together - through brand strategy,
      award-winning holistic design, and clear communication - to create
      meaningful change. Break through the noise and inspire action. Because
      together, we redefine shared success.
    </Paragraph>
    <Subtitle date="March 2012 - January 2016">
      (internship) frontend developer at
      <ExternalLink hasLeadingSpace href="//atabix.com">
        Atabix Solutions
      </ExternalLink>
    </Subtitle>
    <Paragraph>
      Atabix delivers high-touch SaaS solutions for the government market. As a
      knowledge partner and supplier of SaaS solutions, they understand the
      changing government market like no other.
    </Paragraph>
  </>
);
