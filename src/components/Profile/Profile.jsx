import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({ posts, addPost, newPostText, changePost }) => {

	return (
	  <div>
        <ProfileInfo />
        <MyPosts posts={ posts } changePost={ changePost } addPost={ addPost } newPostText={ newPostText } />
      </div>
	);

};

export default Profile;