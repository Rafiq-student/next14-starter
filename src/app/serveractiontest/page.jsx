import { addPost } from '@/lib/action'

const serverActionTest = () => {

  return (
    <div>
      <form action={addPost}>
        <input type="text" placeholder='title' name='title' />
        <input type="text" placeholder='desc'  name='desc'/>
        <input type="text" placeholder='slug' name='slug' />
        <input type="text" placeholder='userId' name='userId' />
        <button>Create Post</button>
      </form>
    </div>
  )
}

export default serverActionTest
