import { Component } from 'react';
import { connect } from 'react-redux';
import { Product } from '../../components/Product';

class Cart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <h1>Tu carrito de compras</h1>
        <section className="catalog">
          {
            this.props.cart.map((prod) => <Product key={prod.id} product={prod} />)
          }
        </section>
      </main>
    )
  }
};

export const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  }
}

export default connect(mapStateToProps)(Cart);
