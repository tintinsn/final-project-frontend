import { FormEvent, useState } from 'react'
import useContents from '../hook/useContents'
import ReactStars from 'react-stars'

const CreateContent = () => {
  const [newUrl, setNewUrl] = useState<string>('')
  const [newComment, setNewComment] = useState<string>('')
  const [newRating, setNewRating] = useState<number>(0)
  const { disableSubmit, createContent } = useContents()

  const handleRating = (rate: number) => {
    setNewRating(rate)
    console.log(rate)
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      // console.log(typeof newUrl, newComment, newRating)
      createContent(newUrl, newComment, newRating)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-10 w-auto" src="src/assets/logo-3.png" alt="Your Company" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Create new content
        </h2>
      </div>

      {/* Username */}
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
              Video UR
            </label>
            <div className="mt-2">
              <input
                id="url"
                name="url"
                type="url"
                autoComplete="url"
                required
                className="block w-full rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={newUrl}
                onChange={(e) => setNewUrl(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
              Comment
            </label>
            <div className="mt-2">
              <textarea
                id="comment"
                name="comment"
                rows={5}
                cols={33}
                value={newComment}
                maxLength={280}
                onChange={(e) => setNewComment(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required
              >
                It was a dark and stormy night...
              </textarea>
            </div>
            <div className="w-full">
              <p>Rating: </p>
              <ReactStars count={5} onChange={handleRating} size={24} color2={'#ffd700'} />
            </div>
          </div>

          <div>
            <button
              disabled={disableSubmit}
              type="submit"
              className="flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default CreateContent

{
  /* <form onSubmit={handleSubmit}>
      <h1>Create new content</h1>
      <label>Video URL</label>
      <input type="url" value={newUrl} onChange={(e) => setNewUrl(e.target.value)} />
      <label>Comment (280 characters maximum)</label>
      <input type="text" value={newComment} maxLength={280} onChange={(e) => setNewComment(e.target.value)} />
      <div>
        <Rating disableFillHover={true} onClick={handleRating} />
      </div>
      <button type="submit" disabled={disableSubmit}>
        Create
      </button>
    </form> */
}
