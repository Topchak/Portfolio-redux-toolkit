import {useSelector} from 'react-redux';
import {cartVisibility} from '../../store/ui_slice';
import {cartItems} from '../../store/cart_slice';

import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const visibility = useSelector(cartVisibility);
  const cartItemsByStore = useSelector(cartItems);

  return (
    <Card
      className={`${classes.cart} ${visibility ? classes.block : classes.none} `}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {
          cartItemsByStore.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              title={item.title}
              quantity={item.quantity}
              total={item.totalPrice}
              price={item.price}
            />
          ))
        }
      </ul>
    </Card>
  );
};

export default Cart;
