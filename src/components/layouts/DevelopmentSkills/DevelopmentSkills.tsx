import React, { FunctionComponent } from "react";
import { List } from "../../atoms/List/List";
import { ListItem } from "../../atoms/ListItem/ListItem";
import { Paragraph } from "../../atoms/Paragraph/Paragraph";
import { Title } from "../../atoms/Title/Title";

const currentTools = [
  "TypeScript",
  "Next.js",
  "Vanilla Extract JS/Styled Components/CSS Modules",
  "GSAP/Framer Motion",
  "Storybook",
  "Jest",
  "ESLint/Stylelint/Prettier",
  "GitHub Actions/Bitbucket Pipelines/CircleCI",
  "Contentful/Storyblok",
];

export const DevelopmentSkills: FunctionComponent = () => (
  <>
    <Title>Development skills</Title>
    <Paragraph>What I&apos;m currently working with:</Paragraph>
    <List>
      {currentTools.map((tool) => (
        <ListItem key={tool}>{tool}</ListItem>
      ))}
    </List>
  </>
);
