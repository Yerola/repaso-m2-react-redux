import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProducts } from '../../redux/actions';
import { Product } from '../../components/Product';

export const Home = () => {
  const dispatch = useDispatch();
  const catalog = useSelector((state) => state.catalog)

  useEffect(() => {
    dispatch(addProducts())    
  }, []);

  return (
    <main>
      <h1>Mi catálogo de productos</h1>
      <section className="catalog">
        {catalog.map((prod) => <Product key={prod.id} product={prod} />)}
      </section>
    </main>
  )
};
