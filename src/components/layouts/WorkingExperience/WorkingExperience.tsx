import React, { FunctionComponent } from 'react'
import { ExternalLink } from '../../atoms/ExternalLink/ExternalLink'
import { Paragraph } from '../../atoms/Paragraph/Paragraph'
import { Subtitle } from '../../atoms/Subtitle/Subtitle'
import { Title } from '../../atoms/Title/Title'

export const WorkingExperience: FunctionComponent = () => (
  <>
    <Title>Working experience</Title>
    <Subtitle date="July 2020 - present">
      senior front-end developer at
      <ExternalLink hasLeadingSpace href="https://codedazur.com/">
        code d&apos;azur
      </ExternalLink>
    </Subtitle>
    <Paragraph>
      Code d&apos;azur is a digital brand and experience company with offices in
      Amsterdam, Barcelona, Dubai and Austin, Texas. Code d&apos;azur
      specializes itself in consulting and transformation, platforms, products
      and services, plus content and campaigns that help our clients stand out
      from the crowd and fit into their customers&apos; lives.
    </Paragraph>
    <Paragraph>
      At code d&apos;azur I already worked on multiple projects: our new
      portfolio website,
      <ExternalLink
        hasLeadingSpace
        hasTrailingSpace
        href="https://knit.kvadrat.dk/"
      >
        Knit! Kvadrat
      </ExternalLink>
      ,
      <ExternalLink
        hasLeadingSpace
        hasTrailingSpace
        href="https://polestar.com/"
      >
        Polestar
      </ExternalLink>
      and Philips. The Philips project was the first project where I used Vue 3.
      Always nice to learn new things!
    </Paragraph>
    <Paragraph>
      Currently I&apos;m working for another cool client, Lotus cars. We&apos;re
      developing the part of their website which is about their newest full
      electric car, the
      <ExternalLink hasLeadingSpace href="https://lotuscars.com/eletre">
        Eletre
      </ExternalLink>
      . I&apos;m the lead developer on this project and it&apos;s going well so
      far!
    </Paragraph>
    <Subtitle date="August 2019 - July 2020">
      front-end developer consultant at
      <ExternalLink hasLeadingSpace href="https://cygnigroup.com/nl/">
        Cygni NL
      </ExternalLink>
    </Subtitle>
    <Paragraph>
      Cygni NL is a consultant company based in Amsterdam and is the sister
      company of Cygni Sweden. Cygni decided to expand to the Dutch market due
      to its success in Sweden. Cygni NL was founded at the start of 2019 and
      I&apos;m actually the first developer they hired.
    </Paragraph>
    <Paragraph>
      I only did one assignment as a consultant: I helped
      <ExternalLink
        hasLeadingSpace
        hasTrailingSpace
        href="http://www.dexels.com/"
      >
        Dexels
      </ExternalLink>
      with the rebuild of their Club application with web technologies. I was
      the tech lead on this project and our team was using TypeScript, React,
      Redux and Styled Components.
    </Paragraph>
    <Paragraph>
      Before we started with the rebuild of the Club application we first
      developed a React UI kit which we published as a
      <ExternalLink
        hasLeadingSpace
        href="https://www.npmjs.com/package/dexels-ui-kit"
      >
        NPM package
      </ExternalLink>
      .
    </Paragraph>
    <Paragraph>
      When I was not on an assignment or had any spare time I was working on an
      internal project for Cygni called Scorekeeper. This is an application
      where employees can keep track of the results of the countless matches
      they play versus each other.
    </Paragraph>
    <Paragraph>
      One of the goals of this project was to learn a few new things. This meant
      I primarily tried using technologies I was not (super) comfortable with at
      the time. For the front-end I used TypeScript, React (hooks), Styled
      Components and Apollo GraphQL among others.
    </Paragraph>
    <Paragraph>
      The back-end is a Node.js (Express) server which exposes a GraphQL API to
      the front-end. This API uses Sequelize to communicate with a Postgres
      database.
    </Paragraph>
    <Subtitle date="January 2018 - August 2019">
      front-end developer at
      <ExternalLink hasLeadingSpace href="https://random.studio/">
        Random Studio
      </ExternalLink>
    </Subtitle>
    <Paragraph>
      Random is an independent strategy and design studio which blurs the
      boundaries between art, design and technology. Random prides itself on
      being one of the best companies in the world when it comes to developing
      innovative B2B and B2C experiences.
    </Paragraph>
    <Paragraph>
      I&apos;ve worked on a lot of cool projects during my time at Random and
      really made the next step as a front-end developer. I became more
      proficient with React and Redux and started working with CSS-in-JS
      libraries like Styled Components.
    </Paragraph>
    <Paragraph>
      The first project I did at Random was the rebuild of the Video Wall PVH
      uses in their
      <ExternalLink
        hasLeadingSpace
        href="https://www.youtube.com/watch?v=X3fPWN-nt4o"
      >
        Digital Showroom
      </ExternalLink>
      . The Video Wall was originally built in C and was therefore difficult to
      maintain. I rebuilt the Video Wall with web technologies like React and
      Styled Components. I also built a Node server using Express to communicate
      between the Video Wall and the Touch Table.
    </Paragraph>
    <Paragraph>
      One of my most treasured projects to date is the webshop I&apos;ve built
      for one of my favorite designers: Raf Simons. This was a relatively
      straight forward project, I used React and Styled Components for the
      front-end and Shopify for the back-end. The front-end uses the Shopify
      JavaScript SDK to communicate with the back-end, thus creating a fully
      custom shopping experience.
    </Paragraph>
    <Paragraph>
      The last year of my time at Random I spent on their biggest project, the
      <ExternalLink
        hasLeadingSpace
        hasTrailingSpace
        href="https://fashionunited.com/news/retail/the-store-of-the-future-inside-tommy-hilfiger-s-amsterdam-store/2018120730514"
      >
        Store of the Future
      </ExternalLink>
      they&apos;re developing for PVH. I was the lead developer on multiple
      sub-projects of that project. For example, I&apos;ve rebuilt the entire
      product detail page and catalog browser. This project is built with React,
      CSS Modules and Redux. I also did a lot of architectural work on this
      project and have even developed an entire design-system including a
      component library with React and Storybook.
    </Paragraph>
    <Subtitle date="February 2016 - January 2018">
      (intern) front-end developer at
      <ExternalLink hasLeadingSpace href="https://momkai.com">
        Momkai
      </ExternalLink>
    </Subtitle>
    <Paragraph>
      I began working at Momkai at the start of my graduation internship. During
      this internship, I mainly focused on improving my JavaScript skills and
      writing cleaner code. After my internship ended, I started working full
      time at Momkai.
    </Paragraph>
    <Paragraph>
      VanMoof was the first client I worked for while at Momkai: I built them a
      bike configurator. When you use this configurator, you can do simple
      configuration changes to your selected bike. This configurator is built
      using Backbone.js and vanilla JavaScript and the styling is done with
      SCSS. I also worked on several other components of the
      <ExternalLink hasLeadingSpace href="https://vanmoof.com">
        VanMoof website
      </ExternalLink>
      .
    </Paragraph>
    <Paragraph>
      My favorite project I worked on at Momkai is the Master Digital Design
      project. This project contains a lot of SVG animations and really pushes
      the limits of responsive design. I didn’t use any library or framework for
      this project, everything is just pure vanilla JavaScript.
    </Paragraph>
    <Paragraph>
      The last project I worked on before I left Momkai is their
      <ExternalLink hasLeadingSpace href="https://momkai.com">
        portfolio website
      </ExternalLink>
      . I did a lot of work on this project with React and GSAP. Since the
      website went live it has won multiple acclaimed design awards.
    </Paragraph>
    <Paragraph>
      Besides the projects described above I also did some work for various
      other client like the KNVB, Het Scheepvaartmuseum, IKEA and Bugaboo.
    </Paragraph>
    <Subtitle date="March 2012 - January 2016">
      (internship) front-end developer at
      <ExternalLink hasLeadingSpace href="https://atabix.com">
        Atabix Solutions
      </ExternalLink>
    </Subtitle>
    <Paragraph>
      I started this job as an intern as well. After my internship ended, both
      parties were so excited about the collaboration so far that Atabix offered
      me a job. I had a lot of fun working there for four years and worked on
      numerous projects for clients like Oger, AFC and Cosmic Cowboys.
    </Paragraph>
    <Subtitle date="2008 - 2010">
      technical support at the University of Applied Sciences Amsterdam
    </Subtitle>
    <Paragraph>
      My job here was to help students and teachers with any technical
      difficulties they faced. This could vary from setting up new computers to
      helping out with Photoshop or Final Cut Pro.
    </Paragraph>
  </>
)
