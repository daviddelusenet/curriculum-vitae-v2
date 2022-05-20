import React, { FunctionComponent } from 'react'
import List from '../../atoms/List/List'
import ListItem from '../../atoms/ListItem/ListItem'
import Paragraph from '../../atoms/Paragraph/Paragraph'
import Title from '../../atoms/Title/Title'

const currentTools = [
  'TypeScript/JavaScript',
  'React/Styled Components',
  'Vue 3',
  'GSAP/Framer Motion',
  'Next.js/Apollo GraphQL',
  'Storybook/Jest',
  'ESLint/Stylelint/Prettier',
  'Webpack/Rollup',
  'Node/NPM',
  'GitHub Actions/Bitbucket Pipelines/CircleCI',
]

const previousTools = [
  'Gatsby',
  'Express',
  'Redux',
  'Sass/(React) CSS Modules',
  'PixiJS',
  'Backbone.js',
  'Twig/Smarty',
  'Twitter Bootstrap/Zurb Foundation',
  'Gulp/Grunt',
]

const DevelopmentSkills: FunctionComponent = () => (
  <>
    <Title>Development skills</Title>
    <Paragraph>What I&apos;m working with:</Paragraph>
    <List>
      {currentTools.map((tool) => (
        <ListItem key={tool}>{tool}</ListItem>
      ))}
    </List>
    <Paragraph>What I was working with:</Paragraph>
    <List>
      {previousTools.map((tool) => (
        <ListItem key={tool}>{tool}</ListItem>
      ))}
    </List>
  </>
)

export default DevelopmentSkills
