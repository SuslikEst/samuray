import React from 'react';
import classes from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {

  state = {
    editMode: false
  }

  handlerActivate(){
    this.setState({
      editMode: !this.state.editMode
    });
  }

  handlerDeactivate(){
    this.setState({
      editMode: !this.state.editMode
    });
  }
  render(){
    return (
      <>
        { !this.state.editMode &&
          <div>
            <span onDoubleClick={ this.handlerActivate.bind(this) } >{ this.props.status }</span>
          </div>
        }
        { this.state.editMode &&
          <div>
            <input autoFocus={ true } onBlur={ this.handlerDeactivate.bind(this) } value={ this.props.status } />
          </div>
        }
      </>
    );
  }

}

export default ProfileStatus;