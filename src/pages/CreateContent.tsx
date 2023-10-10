const CreateContent = () => {
  return (
    <div>
      <h1>Create new content</h1>
      <form>
        <label>Video URL</label>
        <input type="url" />
        <label>Comment (280 characters maximum)</label>
        <input type="text" />
        <span>Rating</span>
        <span>⭐️⭐️⭐️⭐️⭐️</span>
        <button>Create</button>
      </form>
    </div>
  )
}
export default CreateContent
