import { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/css/AdminPage.css';

// Komponent HOC, który przekazuje navigate
function withRouter(Component) {
    return (props) => <Component {...props} navigate={useNavigate()} />;
}

const permission = true;

class AdminPanel extends Component {

    state = {
        username: 'admin',
        password: 'admin',
        permission: false,
    };


    checkPermission = () => {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username !== '' && password !== '') {
            if (username === 'admin' && password === 'admin') {
                this.setState({ permission: true });
                this.props.navigate('/login'); // Przekierowanie do strony logowania po udzieleniu uprawnień
                alert("You have access to the admin panel");
            } else if (permission !== true) {
                console.log('Permission not granted');
                alert("You don't have access to the admin panel");
            } else if (username !== this.state.username || password !== this.state.password){
            console.log('Permission not granted');
            alert("You don't have access to the admin panel - login or password incorrect");
        }

        } else if (username === '' || password === '') {
            console.log('Please fill in all fields');
            alert("Please fill in all fields");
        } 
    //     if (this.state.username === 'admin' && this.state.password === 'admin' && permission === true) {
    //         this.props.navigate('/login'); // Użycie przekazanego propsa
    //     } else if (permission !== true) {
    //         console.log('Permission not granted');
    //         alert("You don't have access to the admin panel");
    //     } else if (this.state.username !== 'admin' || this.state.password !== 'admin') {
    //         console.log('Invalid credentials');
    //         alert("Invalid credentials");
    //     } else {
    //         console.log('Permission not granted');
    //         alert("You don't have access to the admin panel");
    //     }
    };
    
    render () {
        return (
            <div className="admin-panel">
                <div className="admin-panel__content">
                    <h1>Admin Panel</h1>
                    <div className="form">
                        <div className="login-input">
                            <label name="username" htmlFor="username">Username: </label>
                            <input type="text" id="username" />
                        </div>
                        <div className="pass-input">
                            <input type="password" id="password" />
                            <label name="password" htmlFor="password"> :Password</label>
                        </div>
                    </div>
                    <button className='btn btn-dark' type='submit' onClick={this.checkPermission}>Login</button>
                </div>
            </div>
        );
    };
}

export default withRouter(AdminPanel);