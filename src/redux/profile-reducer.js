const ADD_POST = 'ADD-POST';
const CHANGE_POST = 'CHANGE-POST';

const profileReducer = (state, action) => {

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