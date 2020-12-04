import rem from '../../../styles/mixins/rem'
import styled from 'styled-components'

export const StyledToggleDarkMode = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  position: fixed;
  bottom: ${rem(12)};
  right: ${rem(12)};
`

export const Label = styled.label`
  margin: 0 ${rem(8)} 0 0;
  font-size: ${rem(12)};
  font-weight: 300;
  cursor: pointer;
`
