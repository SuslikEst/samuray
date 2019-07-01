import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';

let store = {

	_state: {

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
			],
			newMessageBody: 'Enter'
		},

		sidebar: {

		}

	},

	_callSubscriber() {
		console.log('State is changed!');
	},

	getState(){
		return this._state;
	},

	subscribe(observer){
		this._callSubscriber = observer;
	},

	dispatch(action){

		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.sidebar = sidebarReducer(this._state.sidebar, action);
		this._callSubscriber(this._state);

	}

};

export default store;

window.store = store;