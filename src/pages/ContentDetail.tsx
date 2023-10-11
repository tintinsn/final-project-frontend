import { useParams } from 'react-router-dom'
import useContent from '../hook/useContent'
import ReactPlayer from 'react-player'
import { useAuth } from '../providers/AuthProvider'
import { Link } from 'react-router-dom'

const ContentDetail = () => {
  // const navigate = useNavigate()
  const { isLoggedIn, username } = useAuth()
  const { id } = useParams()
  const { content, error, isLoading, disableSubmit } = useContent(id || '1')

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
    <div className="flex flex-col mx-auto">
      {content && (
        <>
          <div>
            <h1 className="text-black font-semibold">{content.videoTitle}</h1>
            <h3 className="text-orange-950 font-semibold ">{content.creatorName}</h3>
          </div>
          <div>
            <ReactPlayer url={content.videoUrl} />
          </div>
          <h3>{content.comment}</h3>
          <span>{star(content.rating)}</span>
          <p>{content.postedBy.name}</p>
          <p>{content.createdAt}</p>
          {content.updatedAt !== content.createdAt && <p>{`(Updated on ${new Date(content.updatedAt)} )`}</p>}
          {!isLoggedIn ? null : username === content.postedBy.username ? (
            <Link to={`/edit/${content.id}`}>
              <button
                disabled={disableSubmit}
                type="submit"
                className="flex justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
              >
                Edit
              </button>
            </Link>
          ) : null}
          {/* {isLoggedIn && (
            <Link to={`/edit/${content.id}`}>
              <button>Edit</button>
            </Link>
          )} */}
        </>
      )}
    </div>
  )
}
export default ContentDetail
