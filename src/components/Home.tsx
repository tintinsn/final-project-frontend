import classes from './Home.module.css'
const Home = () => {
  return (
    <div className={classes.container}>
      <div>
        <h1>LearnHub</h1>
        <p>Hub for Educational Videos</p>
      </div>
      <div className={classes.containerContent}>
        <div className={classes.cardContent}>
          <img src="src/assets/logo.svg" alt="" />
          <h2>Video</h2>
          <p>description</p>
          <div className={classes.author}>
            <p>author</p>
            <span>⭐️⭐️⭐️⭐️</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
