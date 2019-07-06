import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';

import Users from './Users';
import Preloader from '../Common/Preloader.jsx';

import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching } from '../../redux/users-reducer';

class UsersContainer extends React.Component {

	componentDidMount(){
		this.props.toggleIsFetching(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${ this.props.currentPage }&count=${ this.props.pageSize }`)
			.then(res => {
				this.props.toggleIsFetching(false);
				this.props.setUsers(res.data.items);
				this.props.setTotalUsersCount(res.data.totalCount);
			});
	}

	handlerSetCurrenPage = (currentPage) => {
		this.props.toggleIsFetching(true);
		this.props.setCurrentPage(currentPage);

		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${ currentPage }&count=${ this.props.pageSize }`)
			.then(res => {
				this.props.toggleIsFetching(false);
				this.props.setUsers(res.data.items);
		});
		
	}

	render = () => {
		return <>

			{
				this.props.isFetching 
				? <Preloader/>

				: <Users 
					currentPage={ this.props.currentPage }
					users={ this.props.users }
					unfollow={ this.props.unfollow }
					follow={ this.props.follow }
					totalUsersCount={ this.props.totalUsersCount }
					pageSize={ this.props.pageSize }
					handlerSetCurrenPage={ this.handlerSetCurrenPage }
				/>
			}
		</>
	}

}

const mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching
	};
};

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		follow: (userId) => {
// 			dispatch(followAC(userId));
// 		},
// 		unfollow: (userId) => {
// 			dispatch(unfollowAC(userId));
// 		},
// 		setUsers: (users) => {
// 			dispatch(setUsersAC(users));
// 		},
// 		setCurrentPage: (currentPage) => {
// 			dispatch(setCurrentPageAC(currentPage));
// 		},
// 		setTotalUsersCount: (total) => {
// 			dispatch(setTotalUsersCountAC(total));
// 		},
// 		toggleIsFetching: (isFetching) => {
// 			dispatch(toggleIsFetchingAC(isFetching));
// 		}
// 	};
// };

export default connect(mapStateToProps, {
	follow,
	unfollow,
	setUsers,
	setCurrentPage,
	setTotalUsersCount,
	toggleIsFetching
})(UsersContainer);