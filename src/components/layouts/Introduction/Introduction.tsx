import React, { FunctionComponent } from "react";
import { Paragraph } from "../../atoms/Paragraph/Paragraph";
import { Title } from "../../atoms/Title/Title";

export const Introduction: FunctionComponent = () => (
  <>
    <Title>Introduction</Title>
    <Paragraph>
      I&apos;m a senior frontend engineer with over thirteen years of hands-on
      experience. I&apos;ve successfully worked in multidisciplinary teams
      containing multiple nationalities. Operating as a one-man army also
      isn&apos;t a problem for me.
    </Paragraph>
    <Paragraph>
      Because of my extensive experience working at digital agencies I&apos;ve
      developed a strong eye for detail and design. I work fast and precisely
      and my code is clean and to the point. Currently my expertise is
      React/Next.js in combination with TypeScript but I&apos;m open to
      exploring new technologies.
    </Paragraph>
    <Paragraph>
      Besides my TypeScript experience I&apos;m also experienced with a lot of
      different styling solutions, including: CSS, Sass, Styled Components,
      vanilla-extract, Stitches and Tailwind CSS. I can also work with testing
      libraries like Vitest, Jest and Cypress.
    </Paragraph>
    <Paragraph>
      I&apos;m a native Dutch speaker but I also have a strong command of the
      English language.
    </Paragraph>
  </>
);
