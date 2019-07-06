import { connect } from 'react-redux';

import MyPosts from './MyPosts';

import { addPostActionCreator, changePostActionCreator } from '../../../redux/profile-reducer';

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changePost: (text) => {
      dispatch(changePostActionCreator(text));
    },
    addPost: () => {
      dispatch(addPostActionCreator()); 
    }
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;