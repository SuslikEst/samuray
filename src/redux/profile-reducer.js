import { profileApi } from '../api/api';

const ADD_POST = 'ADD-POST';
const CHANGE_POST = 'CHANGE-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

const initialState = {
	profile: null,
	posts:[
		{
			id: 1,
			message: 'Title 1',
			likesCount: 2
		},
		{
			id: 2,
			message: 'Title 2',
			likesCount: 1
		},
		{
			id: 3,
			message: 'Title 3',
			likesCount: 5
		},
		{
			id: 4,
			message: 'Title 4',
			likesCount: 3
		}
	],
	newPostText: 'Enter text...'
};

const profileReducer = (state = initialState, action) => {

	switch (action.type) {

		case SET_USER_PROFILE:

			return {
				...state,
				profile: action.profile
			}

		case ADD_POST:

			const post = {
				id: 5,
				message: state.newPostText,
				likesCount: 2
			};

			return {
				...state,
				newPostText: '',
				posts: [ ...state.posts, post ]
			};

		case CHANGE_POST:

			return {
				...state,
				newPostText: action.text
			}
		
		default:{
			return state;
		}

	}

};

export const setUserProfile = (profile) => ({
	type: SET_USER_PROFILE,
	profile
});

export const addPostActionCreator = () => ( { type: ADD_POST } );
export const changePostActionCreator = (text) => ({
  type: CHANGE_POST,
  text
});


export const getUserProfile = (userId) => {
	return (dispatch) => {
		profileApi.getUserProfile(userId)
			.then(res => {
				dispatch(setUserProfile(res));
			});
	};
};

export default profileReducer;