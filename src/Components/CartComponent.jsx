import React from 'react';

const CartComponent = ({ cart: cartProducts }) => {

  if (cartProducts.length === 0)
    return <h2 data-testid="empty-text">The cart is empty!</h2>;

  return (
    <div data-testid="cart-container">
      <table>
        <thead>
          <tr>
            <th>Sno</th>
            <th>Name</th>
            <th>Price</th>
            <th>Units</th>
          </tr>
        </thead>
        <tbody data-testid="cart-body">
          {/* map thorugh tht cart items and display in rows */}
          {cartProducts?.map(({ id, name, stock, price }, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{name}</td>
              <td>{price}</td>
              <td>{stock}</td>


            </tr>
          ))}
          <tr>
            <td></td>
            <td></td>
            <td>Total</td>
            <td data-testid="total-price">{cartProducts?.reduce((a, b) => {
              return a + (b.price * b.stock)
            }, 0).toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default CartComponent;
