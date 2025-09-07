import {Component} from 'react';
import SiteMap from './SiteMap';
import '../styles/css/Footer.css';


class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <p>Copyright GG &copy; 2025</p>
                <SiteMap />

            </div>
        )
    }
}

export default Footer