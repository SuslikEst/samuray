import { rerenderEntierTree } from '../render';

let state = {

	profilePage: {
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
	},

	dialogsPage: {
		messages: [
			{
			  id: 1,
			  message: 'Hi!'
			},
			{
			  id: 2,
			  message: 'Hi, all!'
			},
			{
			  id: 3,
			  message: 'Hi Ivan!'
			},
			{
			  id: 4,
			  message: 'Hi!'
			}
		],
		
		dialogs: [
			{
			  id: 1,
			  name: 'Sergey'
			},
			{
			  id: 2,
			  name: 'Ivan'
			},
			{
			  id: 3,
			  name: 'Viktor'
			},
			{
			  id: 4,
			  name: 'Ludmila'
			}
		]
	}

};

export const addPost = () => {
	const post = {
		id: 5,
		message: state.profilePage.newPostText,
		likesCount: 2
	}
	state.profilePage.posts.push(post);
	state.profilePage.newPostText = 'Enter text...';
	rerenderEntierTree(state);
};

export const changePost = (text) => {
	state.profilePage.newPostText = text;
	rerenderEntierTree(state);
};


export default state;