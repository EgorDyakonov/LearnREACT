import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import {setAuthUserData} from './../../redux/authReducer';
import { headerAPI } from '../../api/api';

class HeaderContainer extends React.Component {

    componentDidMount() {
        headerAPI.getUsers().then(response => {
                if(response.resultCode === 0) {
                    let {email, id, login} = response.data;
                    this.props.setAuthUserData({email, id, login});
                }
            });
    }
    render() {
        return (
            <Header  {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);