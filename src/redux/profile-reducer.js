const ADD_POST = 'ADD-POST';
const CHANGE_POST = 'CHANGE-POST';

const initialState = {
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

		case ADD_POST:
			const post = {
				id: 5,
				message: state.newPostText,
				likesCount: 2
			};

			state.posts.push(post);
			state.newPostText = 'Enter text...';
			return state;

		case CHANGE_POST:
			state.newPostText = action.text;
		return state;

		default:
			return state;

	}

};

export const addPostActionCreator = () => ( { type: ADD_POST } );
export const changePostActionCreator = (text) => ({
  type: CHANGE_POST,
  text
});

export default profileReducer;