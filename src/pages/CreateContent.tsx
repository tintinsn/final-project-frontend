import { FormEvent, useState } from 'react'
import useContents from '../hook/useContents'
import { useNavigate } from 'react-router-dom'

const CreateContent = () => {
  const [newUrl, setNewUrl] = useState<string>('')
  const [newComment, setNewComment] = useState<string>('')
  const [newRating, setNewRating] = useState<number>(3)
  const { disableSubmit, createContent } = useContents()
  const navigate = useNavigate()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      // console.log(typeof newUrl, newComment, newRating)
      createContent(newUrl, newComment, newRating)
      // navigate('/')
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>Create new content</h1>
      <label>Video URL</label>
      <input type="url" value={newUrl} onChange={(e) => setNewUrl(e.target.value)} />
      <label>Comment (280 characters maximum)</label>
      <input type="text" value={newComment} maxLength={280} onChange={(e) => setNewComment(e.target.value)} />
      <div>
        <span>rating</span>
        <span>{newRating}</span>
      </div>
      <button type="submit" disabled={disableSubmit}>
        Create
      </button>
    </form>
  )
}

export default CreateContent
