import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter, Redirect } from 'react-router-dom';
import Profile from './Profile';

import { AuthRedirect } from '../../hoc/AuthRedirect';

import { getUserProfile } from '../../redux/profile-reducer';

class ProfileContainer extends React.Component{

	componentDidMount(){

		let userId = this.props.match.params.userId;
		if(!userId){
			userId = 2;
		}
		this.props.getUserProfile(userId);

	}

	render(){
		return <Profile { ...this.props }/>;
	}

};

const mapStateToProps = (state) => ({
	profile: state.profilePage.profile
});

export default compose(
	withRouter, 
	AuthRedirect,
	connect(mapStateToProps, { getUserProfile })
)(ProfileContainer);