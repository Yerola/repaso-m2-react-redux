import { useDispatch } from "react-redux"
import { useLocation } from 'react-router-dom';
import { addProductToCart, removeProductFromCart } from '../../redux/actions';

export const Product = ({ product }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const handleClick = () => {
    if (location.pathname === '/') {
      dispatch(addProductToCart(product.id));
    } else {
      dispatch(removeProductFromCart(product.id))
    }
  }

  return (
    <article className="product">
      <img src={product.image} alt={product.title} width="100" />
      <h2>{product.title}</h2>
      <p>${product.price}</p>
      <button onClick={handleClick}>
        {
          location.pathname === '/'
            ? 'Agregar al carrito'
            : 'Quitar del carrito'
        }
      </button>
    </article>
  )
}