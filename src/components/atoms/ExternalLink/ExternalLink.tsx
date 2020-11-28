import React, { FunctionComponent, ReactNode } from 'react'

interface ExternalLinkProps {
  children: ReactNode
  hasLeadingSpace?: boolean
  hasTrailingSpace?: boolean
  href: string
  rel?: string
  target?: string
  title?: string
}

const ExternalLink: FunctionComponent<ExternalLinkProps> = ({
  children,
  hasLeadingSpace = false,
  hasTrailingSpace = false,
  href,
  rel = 'noopener noreferrer',
  target = '_blank',
  title,
}) => (
  <>
    {hasLeadingSpace && ' '}
    <a href={href} rel={rel} target={target} title={title}>
      {children}
    </a>
    {hasTrailingSpace && ' '}
  </>
)

export default ExternalLink
