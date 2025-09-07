import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/css/Navigation.css'
import '../styles/css/Blog.css'

const list = [
    {name: "Home", path: "/", style: {textDecorationLine: "none"}, activeClassName: "active-home"},
    {name: "Products", path: "/product", style: {textDecorationLine: "none"}, activeClassName: "active-products"},
    {name: "Contact", path: "/contact", style: {textDecorationLine: "none"}, activeClassName: "active-contact"},
    {name: "Admin Panel", path: "/admin", style: {textDecorationLine: "none"}, activeClassName: "active-admin-panel"},
  ]

class Navigation extends Component {

  menu = list.map((item) => {
    return(
      
        <NavLink key={item.name} to={item.path} style={item.style} className={({isActive}) => isActive ? item.activeClassName : 'none-active'}><li>{item.name}</li></NavLink>
      
    )
  })

  render() {
    return (
      <>
      <nav>
        <ul>
          {/* <NavLink style={{ textDecoration: "none"}} className={({ isActive }) => isActive ? "active-home" : ""} to="/"><li>Home</li></NavLink>
          <NavLink style={{ textDecoration: "none"}} className={({ isActive }) => isActive ? "active-products"  : ""} to="/products"><li>Products</li></NavLink>
          <NavLink style={{ textDecoration: "none"}} className={({ isActive }) => isActive ? "active-contact" : ""} to="/contact"><li>Contact</li></NavLink>
          <NavLink style={{ textDecoration: "none"}} className={({ isActive }) => isActive ? "active-admin-panel" : ""} to="/admin"><li>Admin Panel</li></NavLink> */}

          {this.menu}
        </ul>
      </nav>
      </>
    );
  }
}

export default Navigation;
