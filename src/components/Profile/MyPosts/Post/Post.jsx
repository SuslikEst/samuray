import React from 'react';
import classes from './Post.module.css';

const Post = ({ message, likesCount }) => {
	return (
    <div className={classes.item}>
      <img 
        src="https://images.curiator.com/image/upload/f_auto,q_auto/t_x/art/uf71a7vs4rxbbptvslfa.jpg"
        alt="img"
      />
      <p>{ message }</p>
      <span>Like { likesCount }</span>
    </div>
	);
};

export default Post;