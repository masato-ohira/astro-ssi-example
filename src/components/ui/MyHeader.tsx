import styled from '@emotion/styled'
import { MyIcon } from '@/components/icons/MyIcon'
import { colors } from '@/styles/mixins/colors'
import { spaces } from '@/styles/mixins/sizes'
import { fontSizes } from '@/styles/mixins/fonts'

export const MyHeader = () => {
  return (
    <StyledHeader>
      <a className='header-logo' href='/'>
        <div className='header-icon'>
          <MyIcon name={'react'} />
        </div>
        <h1>DemoSite</h1>
      </a>
      <div className='header-menu'>
        <MyIcon name={'menu'} />
      </div>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.teal[700]};
  color: #fff;
  padding: ${spaces[2]} ${spaces[6]};

  .header-logo {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    column-gap: 7px;
    text-decoration: none;
    color: #fff;
  }

  .header-icon {
    font-size: ${fontSizes['4xl']};
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  .header-menu {
    font-size: ${fontSizes['3xl']};
  }
`
