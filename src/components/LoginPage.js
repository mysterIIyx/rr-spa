import {Component} from 'react';
import '../styles/css/LoginPage.css'

const handleLogout = () =>{
    localStorage.removeItem('token');
    window.location.href = '/admin';
    return false;
};
class LoginPage extends Component {
    render(){
    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};
}

export default LoginPage;