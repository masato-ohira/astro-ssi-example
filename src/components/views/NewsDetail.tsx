import { css } from '@emotion/react'
import { MyContainer } from '../ui/MyContainer'
import dayjs from 'dayjs'
import styled from '@emotion/styled'

export type NewsType = {
  id: string
  date: string
  title: string
  content: string
}

export const NewsDetail = ({ news }: { news: NewsType }) => {
  const StyledDetail = styled.div`
    .news-title {
      margin-bottom: 30px;
    }

    .news-img {
      margin-bottom: 30px;
      img {
        width: 100%;
        height: auto;
        display: block;
      }
    }

    .news-content {
      line-height: 1.7;
    }
  `

  return (
    <MyContainer
      styles={css`
        padding: 40px 0;
      `}
    >
      <StyledDetail>
        <div className='news-title'>
          <h1>{news.title}</h1>
          <p>{dayjs(news.date).format('YYYY/MM/DD')}</p>
        </div>
        <div className='news-img'>
          <img src={`/static/img/spots/mv-${news.id}.jpg`} alt='' />
        </div>
        <div className='news-content'>{news.content}</div>
      </StyledDetail>
    </MyContainer>
  )
}
