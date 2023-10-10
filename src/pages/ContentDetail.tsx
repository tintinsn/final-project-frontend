import { useParams } from 'react-router-dom'
import useContent from '../hook/useContent'
import ReactPlayer from 'react-player'

const ContentDetail = () => {
  const { id } = useParams()
  const { content, error, isLoading } = useContent(id || '1')
  //   console.log(content)

  if (isLoading) return <h1>Loading...</h1>
  if (error) return <p>{error}</p>
  const star = (num: number) => {
    let result = ''
    for (let i = 0; i < num; i++) {
      result += '⭐️'
    }
    return result
  }

  return (
    <div>
      {content && (
        <>
          <h1>{content.videoTitle}</h1>
          <h3>{content.creatorName}</h3>
          <ReactPlayer url={content.videoUrl} />
          <h3>{content.comment}</h3>
          <span>{star(content.rating)}</span>
          <p>{content.postedBy.name}</p>
          <p>{content.createdAt}</p>
          <p>{content.updatedAt}</p>
        </>
      )}
    </div>
  )
}
export default ContentDetail
