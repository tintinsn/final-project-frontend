import { useNavigate } from 'react-router-dom'
import useContents from '../hook/useContents'
import { useAuth } from '../providers/AuthProvider'
import Contents from './Contents'
import classes from './Home.module.css'

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
    <div className={classes.container}>
      <h1>LearnHub</h1>
      <p>Hub for Educational Videos</p>
      {isLoggedIn && <button onClick={handleClick}>Create New Content</button>}

      <div className={classes.cardContainer}>
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
