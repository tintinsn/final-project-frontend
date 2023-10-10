import { FormEvent, useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import useContent from '../hook/useContent'
import { useParams } from 'react-router-dom'

const Edit = () => {
  const [newRating, setNewRating] = useState<number>(0)
  const [newComment, setNewComment] = useState<string>('')
  const { id } = useParams()
  const { isLoading, updateContent } = useContent(id || '1')
  // const navigate = useNavigate()
  console.log(id)

  if (isLoading) return <h1>Loading...</h1>
  const handleRating = (rate: number) => {
    setNewRating(rate)
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      // console.log(typeof newUrl, newComment, newRating)
      updateContent(newComment, newRating)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Edit Content</h1>
        <label>Comment (280 characters maximum)</label>
        <input type="text" onChange={(e) => setNewComment(e.target.value)} />
        <span>Rating</span>
        <div>
          <Rating disableFillHover={true} onClick={handleRating} />
        </div>
        <button>edit</button>
      </form>
    </div>
  )
}

export default Edit
