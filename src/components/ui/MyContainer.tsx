import styled from '@emotion/styled'
import type { StyledProps } from '@/components/components.types'

export const MyContainer = (props: StyledProps) => {
  const StyledContainer = styled.div`
    margin: 0 auto;
    padding-right: 1.5rem;
    padding-left: 1.5rem;
    max-width: 1140px;
    width: 100%;
    ${props.styles ? props.styles : ''}
  `

  return <StyledContainer>{props.children}</StyledContainer>
}
