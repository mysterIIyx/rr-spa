import Product from './Product';
import {NavLink} from "react-router-dom";

const ProductList = ({match}) => {
    return (
        <div>
            <h1>Product Page</h1>
            <Product id={match.params.id} />
            <NavLink to="/product">Back To List </NavLink>

        </div>
    );
};

export default ProductList;