import { useParams } from 'react-router-dom'
import useContent from '../hook/useContent'
import ReactPlayer from 'react-player'
import { useAuth } from '../providers/AuthProvider'
import { Link } from 'react-router-dom'

const ContentDetail = () => {
  // const navigate = useNavigate()
  const { isLoggedIn } = useAuth()
  const { id } = useParams()
  const { content, error, isLoading } = useContent(id || '1')

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
          {isLoggedIn && (
            <Link to={`/edit/${content.id}`}>
              <button>Edit</button>
            </Link>
          )}
        </>
      )}
    </div>
  )
}
export default ContentDetail
