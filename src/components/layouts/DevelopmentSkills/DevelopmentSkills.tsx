import React, { FunctionComponent } from 'react'
import List from '../../atoms/List/List'
import ListItem from '../../atoms/ListItem/ListItem'
import Paragraph from '../../atoms/Paragraph/Paragraph'
import Title from '../../atoms/Title/Title'

const currentTools = [
  'HTML5',
  'CSS3/SASS/React CSS Modules',
  'TypeScript/JavaScript ES6',
  'NPM/Yarn',
  'React',
  'Redux',
  'Gatsby',
  'Node.js/Express',
  'Apollo GraphQL',
  'Storybook',
  'Styled Components',
  'GSAP',
  'Webpack',
  'Rollup',
  'Babel',
  'Git',
  'ESLint',
  'Stylelint',
  'Prettier',
  'CircleCI',
]

const previousTools = [
  'PixiJS',
  'Backbone.js',
  'jQuery',
  'PHP',
  'MySQL',
  'Twig',
  'Smarty',
  'Twitter Bootstrap',
  'Zurb Foundation',
  'Gulp',
  'Grunt',
]

const DevelopmentSkills: FunctionComponent = () => (
  <>
    <Title>Development skills</Title>
    <List>
      {currentTools.map((tool) => (
        <ListItem key={tool}>{tool}</ListItem>
      ))}
    </List>
    <Paragraph>{"Tools I've worked with in the past:"}</Paragraph>
    <List>
      {previousTools.map((tool) => (
        <ListItem key={tool}>{tool}</ListItem>
      ))}
    </List>
    <Paragraph>My preferred editor of choice is Visual Studio Code.</Paragraph>
  </>
)

export default DevelopmentSkills
