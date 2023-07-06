import type { StyledProps } from '@/components/components.types'
import styled from '@emotion/styled'
import { NewsBox } from './NewsBox'
import { MyContainer } from '@/components/ui/MyContainer'
import { css } from '@emotion/react'
import newsJson from '@/json/news.json'

export const NewsList = (props: StyledProps) => {
  const StyledList = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;

    ${props.styles ? props.styles : ''};
  `

  return (
    <MyContainer
      styles={css`
        padding: 60px 0;
      `}
    >
      <StyledList>
        {newsJson.map((i) => {
          return <NewsBox key={i.id} news={i} />
        })}
      </StyledList>
    </MyContainer>
  )
}
