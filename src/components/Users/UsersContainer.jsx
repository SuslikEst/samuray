import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Users from './Users';
import Preloader from '../Common/Preloader.jsx';

import { 
	toggleIsFollowingIsProcess, 
	follow, 
	unfollow, 
	setCurrentPage, 
	getUsers
} from '../../redux/users-reducer';

class UsersContainer extends React.Component {

	componentDidMount(){
		this.props.getUsers(this.props.currentPage, this.props.pageSize);
	};

	handlerSetCurrenPage = (currentPage) => {
		this.props.getUsers(currentPage, this.props.pageSize);
	};

	render = () => {
		return <>

			{
				this.props.isFetching 
				? <Preloader/>

				: <Users { ...this.props } handlerSetCurrenPage={ this.handlerSetCurrenPage }/>
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
		isFetching: state.usersPage.isFetching,
		followingInProcess: state.usersPage.followingInProcess
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

export default compose(
	connect(mapStateToProps, {
		follow,
		unfollow,
		setCurrentPage,
		toggleIsFollowingIsProcess,
		getUsers
	})
)(UsersContainer);