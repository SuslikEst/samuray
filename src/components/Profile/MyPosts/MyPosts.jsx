import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = ({ posts, newPostText, changePost, addPost }) => {

  const newPostEl = React.createRef();

  const handleAddPost = () => { 
    addPost();
  };

  const handlePostChange = () => { 
    changePost(newPostEl.current.value);
  };

	return (
      <section>
        <h3 className={ classes.title }>My posts</h3>
        <div>
          <textarea ref={ newPostEl } onChange={ handlePostChange } value={ newPostText }/>
        </div>
        <div>
          <button onClick={ handleAddPost }>Add post</button>
        </div>
        <div className={ classes.posts }>
          {
            posts.map(({ id, message, likesCount })=> <Post message={ message } likesCount={ likesCount } key={ id }/>)
          }
        </div>
      </section>
	);
}

export default MyPosts;