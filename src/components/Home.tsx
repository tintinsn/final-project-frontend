import useContents from '../hook/useContents'
import Contents from './Contents'
import classes from './Home.module.css'

const Home = () => {
  const { contents, isLoading } = useContents()
  if (isLoading) return <h1>LOADING...</h1>
  if (!contents) return

  const contentData = contents.data
  if (isLoading) return <h1>LOADING...</h1>
  return (
    <div className={classes.container}>
      <h1>LearnHub</h1>
      <p>Hub for Educational Videos</p>
      <button>Create New Content</button>
      <div className={classes.cardContainer}>
        {contentData &&
          contentData.map((item) => {
            return <Contents content={item} key={item.id} />
          })}
      </div>
    </div>
  )
}

export default Home
