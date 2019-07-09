import { usersApi } from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROCESS = 'TOGGLE_IS_FOLLOWING_PROCESS';

const initialState = {
	users: [],
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false,
	followingInProcess: false
};

const usersReducer = (state = initialState, action) => {

	switch (action.type) {
		case TOGGLE_IS_FOLLOWING_PROCESS:
			return {
				...state,
				followingInProcess: action.isFollowing
			};
		case TOGGLE_IS_FETCHING:
			return {
				...state,
				isFetching: action.isFetching
			};
		case FOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if(u.id === action.userId){
						return { ...u,  followed: true };
					}
					return u;
				})
			};
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if(u.id === action.userId){
						return { ...u,  followed: false };
					}
					return u;
				})
			};
		case SET_USERS:
			return {
				...state,
				users: action.users
			};
		case SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.currentPage
			};
		case SET_TOTAL_USERS_COUNT:
			return {
				...state,
				totalUsersCount: action.total
			};
		default:
			return state;
	}

};
export const toggleIsFollowingIsProcess = (isFollowing) => ( { type: TOGGLE_IS_FOLLOWING_PROCESS, isFollowing } );
export const toggleIsFetching = (isFetching) => ( { type: TOGGLE_IS_FETCHING, isFetching } );
export const acceptFollow = (userId) => ( { type: FOLLOW, userId } );
export const acceptUnfollow = (userId) => ( { type: UNFOLLOW, userId } );
export const setUsers = (users) => ( { type: SET_USERS, users } );
export const setCurrentPage = (currentPage) => ( { type: SET_CURRENT_PAGE, currentPage } );
export const setTotalUsersCount = (total) => ( { type: SET_TOTAL_USERS_COUNT, total } );

// Async
export const getUsers = (currentPage, pageSize) => {

	// Thunk func
	return (dispatch) => {
		dispatch(toggleIsFetching(true));
		usersApi.getUsers(currentPage, pageSize)
			.then(res => {
				dispatch(toggleIsFetching(false));
				dispatch(setUsers(res.items));
				dispatch(setTotalUsersCount(res.totalCount));
			});
		}

};

export const follow = (id) => {

	return (dispatch) => {
		dispatch(toggleIsFollowingIsProcess(true));
		usersApi.follow(id)
			.then(res => {
				if(res.data.resultCode === 0){
					dispatch(toggleIsFollowingIsProcess(false));
					dispatch(acceptFollow(id));
				}
			});
		}

};

export const unfollow = (id) => {

	return (dispatch) => {
		dispatch(toggleIsFollowingIsProcess(true));
		usersApi.unfollow(id)
			.then(res => {
				if(res.data.resultCode === 0){
					dispatch(toggleIsFollowingIsProcess(false));
					dispatch(acceptUnfollow(id));
				}
			});
		}

};
export default usersReducer;