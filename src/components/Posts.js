import React, {useContext} from 'react'
import { GlobalContext } from '../GlobalContext';

const Posts = () => {
  const { posts } = useContext(GlobalContext)
  let loadPosts

  if (posts && posts.length > 0) {
    loadPosts = posts && posts.map((post) => {
      const { id, title } = post;
      let num = id < 11 ? `0${ id-1 }` : id-1;
      return (
        <li key={ num }>
          <strong>ID: </strong>{ num } - <strong>Title: </strong>{title}
        </li>
      );
    });
  } else {
    loadPosts = <div>Loading...</div>
  };

  return(
    <>
      <h2>Posts</h2>
      <ul>
        {loadPosts}
      </ul>
    </>
  )
}

export default Posts