const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

const initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {

	switch(action.type){

		case UPDATE_NEW_MESSAGE_BODY:
			state.newMessageBody = action.body;
			return state;

		case SEND_MESSAGE:
			const message = {
				id: 5,
				message: state.newMessageBody
			};

			state.messages.push(message);
			state.newMessageBody = '';
			return state

		default:
			return state;
	}

};

export const sendMessageActionCreator = () => ( { type: SEND_MESSAGE } );
export const updateNewMessageBodyActionCreator = (body) => ( { type: UPDATE_NEW_MESSAGE_BODY, body } );

export default dialogsReducer;