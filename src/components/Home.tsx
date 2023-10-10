import useContents from '../hook/useContents'
import Contents from './Contents'
import classes from './Home.module.css'

const Home = () => {
  const { contents } = useContents()
  if (!contents) return
  // console.log(contents.data)

  const contentsData = contents.data

  return (
    <div className={classes.container}>
      <h1>LearnHub</h1>
      <p>Hub for Educational Videos</p>
      <div className={classes.cardContainer}>
        {contentsData &&
          contentsData.map((item) => {
            return <Contents content={item} key={item.id} />
          })}
      </div>
    </div>
  )
}

export default Home
