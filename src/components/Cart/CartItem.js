import { cartActions } from '../../store/cart_slice';
import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';

const CartItem = ({ title, quantity, total, price, id }) => {
  const dispatch = useDispatch();

  const addItemToCartHandler = (item) => {
    dispatch(cartActions.addItemToCart(item));
  };

  const removeItemFromCartHandler = (id) => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  if(!title && !price && !id) {
    return null
  }


  return (
    <li  className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={() => removeItemFromCartHandler(id)}>-</button>
          <button onClick={() => addItemToCartHandler({ title, price, id })}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
