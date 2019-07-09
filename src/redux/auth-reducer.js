import { authApi } from '../api/api';

const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
	userId: null,
	email: null,
	login: null,
	isAuth: false,
	isFetching: true
};

const authReducer = (state = initialState, action) => {

	switch (action.type) {

		case SET_USER_DATA:

			return {
				...state,
				...action.data,
				isAuth: true
			}
		
		default:{
			return state;
		}

	}

};

export const setUserData = (userId, email, login) => ({
	type: SET_USER_DATA,
	data: {
		userId,
		email,
		login
	}
});

export const getUserData = () => {

	return (dispatch) => {
		authApi.getUserData()
      .then(res => {
        if (res.resultCode === 0) {
          dispatch(setUserData(res.data.id, res.data.email, res.data.login));
        }
	  });
	}

}

export default authReducer;