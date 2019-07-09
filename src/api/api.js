import * as axios from 'axios';

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
    "API-KEY": "70cfe2b7-5ab9-4624-919d-ab26e4b6a066"
  }
});


export const usersApi = {
	getUsers(currentPage = 1, pageSize = 10){
		return instance.get(`users?page=${ currentPage }&count=${ pageSize }`)
			.then(res => res.data);
	},

	follow(id){
		return instance.post(`follow/${ id }`)
			.then(res => res.data);
	},

	unfollow(id){
		return instance.delete(`follow/${ id }`)
			.then(res => res.data);
	}
}


export const authApi = {
	getUserData(){
		return instance.get(`auth/me`)
			.then(res => res.data);
	}
}

export const profileApi = {

	getUserProfile(userId){
		return instance.get(`profile/${ userId }`)
			.then(res => res.data);
	}
	
}