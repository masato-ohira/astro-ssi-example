import { fontSizes } from '@/styles/mixins/fonts'
import styled from '@emotion/styled'

export const MyFooter = () => {
  return (
    <StyledFooter>
      <p>&copy; example.com</p>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  background-color: #444;
  text-align: center;
  color: #fff;
  padding: 30px;
  font-size: ${fontSizes.md};

  p {
    margin: 0;
    padding: 0;
  }
`
