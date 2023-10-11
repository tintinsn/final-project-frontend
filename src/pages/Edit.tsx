import { FormEvent, useState } from 'react'
import useContent from '../hook/useContent'
import { useParams } from 'react-router-dom'
import ReactStars from 'react-stars'

const Edit = () => {
  const [newRating, setNewRating] = useState<number>(0)
  const [newComment, setNewComment] = useState<string>('')
  const { id } = useParams()
  const { isLoading, updateContent, disableSubmit } = useContent(id || '1')
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
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Edit Content</h2>
        </div>

        {/* Username */}
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
              Comment (280 characters maximum)
            </label>
            <div className="mt-2">
              <textarea
                id="comment"
                name="comment"
                rows={5}
                cols={33}
                maxLength={280}
                onChange={(e) => setNewComment(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required
              ></textarea>
            </div>
            <div className="w-full">
              <p>Rating: </p>
              <ReactStars count={5} onChange={handleRating} size={24} color2={'#ffd700'} />
            </div>

            <div>
              <button
                disabled={disableSubmit}
                type="submit"
                className="flex inline justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
              >
                Edit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Edit

// {
//   /* <form onSubmit={handleSubmit}>
//         <h1>Edit Content</h1>
//         <label>Comment (280 characters maximum)</label>
//         <input type="text" onChange={(e) => setNewComment(e.target.value)} />
//         <span>Rating</span>
//         <div>
//           <Rating disableFillHover={true} onClick={handleRating} />
//         </div>
//         <button>edit</button>
//       </form> */
// }
