import { Link } from 'react-router-dom'
import { ContentDTO } from '../types/dto'

interface IContentProps {
  content: ContentDTO
}

const Contents = ({ content }: IContentProps) => {
  const handleClick = (id: number) => {
    console.log(`clicked ${id}`)
  }
  const star = (num: number) => {
    let result = ''
    for (let i = 0; i < num; i++) {
      result += '⭐️'
    }
    return result
  }

  return (
    <div>
      <div onClick={() => handleClick(content.id)}>
        <Link to={`/content/${content.id}`}>
          <img src={content.thumbnailUrl} alt="" />
          <h2>{content.videoTitle}</h2>
          <p>{content.comment}</p>
          <div>
            <p>{content.postedBy.name}</p>
            <span>{star(content.rating)}</span>
          </div>
        </Link>
      </div>
    </div>
  )
}
export default Contents
