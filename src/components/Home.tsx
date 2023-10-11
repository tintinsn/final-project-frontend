import { useNavigate } from 'react-router-dom'
import useContents from '../hook/useContents'
import { useAuth } from '../providers/AuthProvider'
import Contents from './Contents'

const Home = () => {
  const { isLoggedIn } = useAuth()
  const { contents, isLoading } = useContents()
  const navigate = useNavigate()
  if (isLoading) return <h1>LOADING...</h1>
  if (!contents) return

  const handleClick = () => {
    navigate('/new')
  }

  const contentData = contents.data
  if (isLoading) return <h1>LOADING...</h1>
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
      <div className="p-6">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-indigo-950">
          LearnHub{' '}
          <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
            Pro
          </span>
        </h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          Unlock the doors of knowledge at LearnHub, where curiosity and learning converge to illuminate your path to
          success.
          {/* Unlock the doors of knowledge at LearnHub, */}
        </p>
      </div>
      <div>
        <button>Create new content</button>
        {contentData &&
          contentData.map((item) => {
            return <Contents content={item} key={item.id} />
          })}
      </div>
    </div>
  )
}

export default Home
