import React, { Component } from 'react';
import '../styles/css/Products.css'
import { NavLink } from 'react-router-dom';

export const products = ["car", "bike", "plane"]

class Products extends Component {
    render() {
        const renderProducts = products.map((product) => {
            return(
                <div key={product} className="product-name">
                    <NavLink to={`/product/${product}`}><h2 className='h2-product-name'>{product}<hr /></h2></NavLink>
                </div>
            )
        })
        return (
            <div className="products">
                <div className="product-card">
                    <h1>Produkty</h1>
                    {renderProducts}
                </div>
            </div>
        );
    }
}

export default Products;