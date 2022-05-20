import React, { FunctionComponent, ReactNode } from 'react'
import media from 'styled-media-query'
import { rem } from '../../../styles/mixins/rem'
import styled, { css } from 'styled-components'
import { underline } from '../../../styles/mixins/underline'

export enum TitleSizes {
  'small' = 'small',
  'large' = 'large',
}

export interface TitleProps {
  children: ReactNode
  hasUnderline?: boolean
  size?: TitleSizes
  tag?: 'h1' | 'h2' | 'h3'
}

export const Title: FunctionComponent<TitleProps> = ({
  children,
  hasUnderline = true,
  size = TitleSizes.small,
  tag = 'h3',
}) => (
  <StyledTitle as={tag} hasUnderline={hasUnderline} size={size}>
    {children}
  </StyledTitle>
)

interface StyledTitleProps {
  hasUnderline: boolean
  size: TitleSizes
}

const StyledTitle = styled.h3<StyledTitleProps>`
  font-family: ${({ theme }) => theme.secondaryFont};

  ${({ hasUnderline, theme }) =>
    hasUnderline &&
    underline({
      backgroundColor: theme.primaryBackgroundColor,
      color: theme.primaryTextColor,
      underlinePosition: '92%',
    })}

  ${({ size }) =>
    size === TitleSizes.small &&
    css`
      margin: 0 0 ${rem(16)};
      font-size: ${rem(28)};
      font-weight: 700;

      ${media.greaterThan('medium')`
        font-size: ${rem(40)};
      `}
    `}

    ${({ size }) =>
    size === TitleSizes.large &&
    css`
      font-size: ${rem(40)};

      ${media.greaterThan('medium')`
        font-size: ${rem(64)};
      `}
    `}
`
