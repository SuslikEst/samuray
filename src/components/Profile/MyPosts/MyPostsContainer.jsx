import React from 'react';

import MyPosts from './MyPosts';

import { addPostActionCreator, changePostActionCreator } from '../../../redux/profile-reducer';

const MyPostsContainer = (props) => {
  
  //debugger;

  let state = props.store.getState();
  
  const addPost = () => { 
    props.store.dispatch(addPostActionCreator()); 
  };

  const postChange = (text) => { 
    props.store.dispatch(changePostActionCreator(text));
  };

	return (
    <MyPosts
      changePost={ postChange }
      addPost={ addPost }
      posts={ state.profilePage.posts }
      newPostText={ state.profilePage.newPostText }
    />
  );

};

export default MyPostsContainer;