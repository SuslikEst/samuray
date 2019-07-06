import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Users.module.css';

const Users = (props) => {

	const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

	let pages = [];

	for(let i = 1; i <= pagesCount; i++){
		pages.push(i);
	}

	return (
		  <div className={ classes.usersList }>
    		<div>
    			{ 
    				pages.map(page => <span
    					onClick={ () => props.handlerSetCurrenPage(page) } 
    					className={ props.currentPage === page ? classes.selectedPage : '' } 
    					key={ page }>{ page }</span>) 
    			}
    		</div>
    		{
    			props.users.map(u => <div key={ u.id } >
	    				<span>
	    					<div>
	    						<NavLink to={ `/profile/${ u.id }` } >
	    							<img 
		    							src={ u.photos.small ? u.photos.small : 'https://susicastle.com/wp-content/uploads/2014/09/chatzimarkakis.png' } 
		    							width='50' 
		    							height='50' 
		    							alt='alt'
	    							/>
	    						</NavLink>
	    					</div>
	    					<div>
	    						{ u.followed ?
	    							<button onClick={ () => { props.unfollow(u.id) } }>Nofollow</button>
	    							:
	    							<button onClick={ () => { props.follow(u.id) } } >Follow</button>
	    						}
	    					</div>
	    				</span>
	    				<span>
	    					<span>
	    						<div>
	    							{ u.name }
	    						</div>
	    					  <div>
	    							{ u.status }
	    						</div>
	    					</span>
	    					<span>
	    						<div>
	    							{ 'Россия' }
	    						</div>
	    					  <div>
	    							{ 'Санкт-Петербург' }
	    						</div>
	    					</span>
	    				</span>
    				</div>
    			)
    		}
    	</div>
	);
};


export default Users;