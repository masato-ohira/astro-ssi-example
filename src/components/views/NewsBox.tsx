import styled from '@emotion/styled'
import dayjs from 'dayjs'
import type { StyledProps } from '../components.types'
import { fontSizes } from '@/styles/mixins/fonts'
import { colors } from '@/styles/mixins/colors'
import type { NewsType } from './NewsDetail'

type NewsProps = StyledProps & {
  news: NewsType
}

export const NewsBox = (props: NewsProps) => {
  const StyledNews = styled.div`
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    overflow: hidden;

    a {
      padding: 1rem;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      column-gap: 16px;
      text-decoration: none;
      color: #222;
      transition-property: background-color;
      transition-duration: 0.2s;
      transition-timing-function: linear;

      &:hover {
        background-color: #eee;
      }
    }

    .news-img {
      width: 120px;
      img {
        display: block;
        width: 100%;
        height: auto;
      }
    }
    .news-content {
      flex: 1;

      dl {
        dt {
          margin-bottom: 7px;
          color: ${colors.teal['700']};
          font-size: ${fontSizes.sm};
        }

        dd {
          margin: 0;
          padding: 0;
        }
      }
    }

    ${props.styles ? props.styles : ''}
  `

  return (
    <StyledNews>
      <a href={`/news/${props.news.id}/`}>
        <div className='news-img'>
          <img src={`/static/img/spots/thum-${props.news.id}.jpg`} alt='' />
        </div>
        <div className='news-content'>
          <dl>
            <dt>{dayjs(props.news.date).format('YYYY/MM/DD')}</dt>
            <dd>{props.news.title}</dd>
          </dl>
        </div>
      </a>
    </StyledNews>
  )
}
