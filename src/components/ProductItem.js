// ProductItem.js
import { NavLink, useParams } from "react-router-dom";
// Importujemy tablicę produktów z pliku Product.js
import { products } from './Product';

const ProductItem = () => {
    // Używamy useParams, aby pobrać id z adresu URL
    const { id } = useParams();

    // Szukamy danych produktu w zaimportowanej tablicy
    // W twoim przypadku products to tablica stringów, więc musimy znaleźć pasujący element.
    const product = products.find(p => p === id);

    if (!product) {
        return <h1>Produkt o podanym ID nie istnieje.</h1>;
    }

    return (
        <div>
            <h1>Strona produktu</h1>
            <h3>Wyświetlam produkt: {product}</h3>
            <NavLink to="/product">Powrót do listy</NavLink>
        </div>
    );
};

export default ProductItem;