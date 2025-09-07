import { Component } from 'react';
import '../styles/css/ErrorPage.css'


 class ErrorPage extends Component {

   render () {
 
  return (
    <div className="error-page">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
}
 }

export default ErrorPage;
