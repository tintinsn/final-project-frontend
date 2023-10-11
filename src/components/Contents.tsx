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
    <div className="bg-gray-500 rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
      <div onClick={() => handleClick(content.id)}>
        <Link to={`/content/${content.id}`}>
          <img src={content.thumbnailUrl} alt="" className="w-full object-cover rounded-xl" />
          <div className="px-6 py-4 mt-auto dark:text-white">
            <h5 className="font-semi-bold text-md mb-2">{content.videoTitle}</h5>
            <p className="">{content.comment}</p>
            <div className="flex justify-between content-end">
              <p>{content.postedBy.name}</p>
              <span>{star(content.rating)}</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
export default Contents
