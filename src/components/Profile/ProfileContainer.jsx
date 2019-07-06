import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as axios from 'axios';

import Profile from './Profile';

import { setUserProfile } from '../../redux/profile-reducer';

class ProfileContainer extends React.Component{

	componentDidMount(){
		let userId = this.props.match.params.userId;
		if(!userId){
			userId = 2;
		}
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${ userId }`)
			.then(res => {
				this.props.setUserProfile(res.data);
		});
	}

	render(){
		return <Profile { ...this.props }/>;
	}

};

const mapStateToProps = (state) => ({
	profile: state.profilePage.profile
});

let WithUrlDataContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(WithUrlDataContainer);