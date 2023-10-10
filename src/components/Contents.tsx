import { ContentDTO } from '../types/dto'

interface IContentProps {
  content: ContentDTO
}

const Contents = ({ content }: IContentProps) => {
  const star = (num: number) => {
    let result = ''
    for (let i = 0; i < num; i++) {
      result += '⭐️'
    }
    return result
  }

  return (
    <div>
      <div>
        <img src={content.thumbnailUrl} alt="" />
        <h2>{content.videoTitle}</h2>
        <p>{content.comment}</p>
        <div>
          <p>{content.postedBy.name}</p>
          <span>{star(content.rating)}</span>
        </div>
      </div>
    </div>
  )
}
export default Contents
