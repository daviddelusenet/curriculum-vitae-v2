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
    <Subtitle>
      technologies used: React, Next.js, Tailwind CSS, PostgreSQL
    </Subtitle>
    <Paragraph>
      At Bird I greatly improved my product thinking and I also got used to
      working on a huge codebase. Initially I was part of the business
      infrastructure team, which was responsible for helping out wherever help
      was needed.
    </Paragraph>
    <Paragraph>
      After that I was part of the admin team and later on even the last
      developer remaining in this team. During this time I worked on our
      internal sales tool, used by all sales representatives at Bird. I worked
      closely with the VP of Strategy and Ops to determine which features needed
      to be built.
    </Paragraph>
    <Paragraph>
      The last team I was a part of was the HR team, working on the new HR
      product Bird is releasing.
    </Paragraph>
    <Subtitle date="May 2023 - August 2024">
      senior frontend developer at
      <ExternalLink hasLeadingSpace href="//www.deptagency.com/">
        DEPT®
      </ExternalLink>
    </Subtitle>
    <Subtitle>
      technologies used: React, Next.js, Styled Components, vanilla-extract
    </Subtitle>
    <Paragraph>
      DEPT® is one of the biggest agencies worldwide and it was a joy working
      there. I worked on multiple exciting projects, all of them built with
      React and Next.js. Even though my official role was a senior developer, in
      practice I was the lead developer on most projects I worked on.
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
    <Subtitle>technologies used: React, Next.js, Styled Components</Subtitle>
    <Paragraph>
      I started at Touchtribe as lead frontend developer and later got promoted
      to team lead. As a team lead I was guiding a team of five frontend
      developers. I had biweekly check-ins with these developers and helped them
      grow professionally.
    </Paragraph>
    <Subtitle date="July 2020 - July 2022">
      senior frontend developer at
      <ExternalLink hasLeadingSpace href="//codedazur.com/">
        code d&apos;azur
      </ExternalLink>
    </Subtitle>
    <Subtitle>
      technologies used: React, Next.js, Gatsby, Styled Components
    </Subtitle>
    <Paragraph>
      Since I was missing the camaraderie digital agencies had to offer, I
      decided to join code d&apos;azur. Here I started working fulltime with
      technologies like Gatsby and Next.js. I also worked for numerous clients,
      like Philips, Lotus Cars, Knit! Kvadrat and Polestar.
    </Paragraph>
    <Subtitle date="August 2019 - July 2020">
      frontend developer consultant at
      <ExternalLink hasLeadingSpace href="//cygnigroup.com/nl/">
        Cygni NL
      </ExternalLink>
    </Subtitle>
    <Subtitle>technologies used: React, Styled Components</Subtitle>
    <Paragraph>
      When I joined Cygni I actually was the first developer they hired in the
      Netherlands. After my hiring, we wanted to grow the team, a process which
      I was very involved in. I was part of a lot of interviews, greatly
      improving my soft skills.
    </Paragraph>
    <Paragraph>
      During my time at Cygni I did one project: I helped Sportlink build the
      software they sell to sport associations to manage their clubs/teams. We
      used React and Styled Components for this project.
    </Paragraph>
    <Subtitle date="January 2018 - August 2019">
      frontend developer at
      <ExternalLink hasLeadingSpace href="//random.studio/">
        Random Studio
      </ExternalLink>
    </Subtitle>
    <Subtitle>
      technologies used: React, PixiJS, CSS Modules, Styled Components
    </Subtitle>
    <Paragraph>
      At Random Studio I really started to get experienced with React. I did a
      lot of cool projects there, including one of my most favorite ones of all
      time, a custom webshop for Raf Simons.
    </Paragraph>
    <Subtitle date="February 2016 - January 2018">
      (intern) frontend developer at
      <ExternalLink hasLeadingSpace href="//momkai.com">
        Momkai
      </ExternalLink>
    </Subtitle>
    <Subtitle>technologies used: Backbone.js, React, CSS Modules</Subtitle>
    <Paragraph>
      I started at Momkai as an intern frontend developer as part of my
      graduation internship. After successfully finishing this internship and
      graduating, I continued working there as a frontend developer. I primarily
      worked on projects with Backbone.js and React.
    </Paragraph>
    <Subtitle date="March 2012 - January 2016">
      (internship) frontend developer at
      <ExternalLink hasLeadingSpace href="//atabix.com">
        Atabix Solutions
      </ExternalLink>
    </Subtitle>
    <Subtitle>technologies used: Twig, jQuery</Subtitle>
    <Paragraph>
      Working at Atabix was my first frontend developer job. During my time at
      Atabix I worked on websites for a lot of different clients, ranging from
      Boldking to Daarnhouwer. I primarily used Twig templates and jQuery.
    </Paragraph>
  </>
);
