import { useDispatch, useSelector } from 'react-redux';
import { totalQuantity } from '../../store/cart_slice';
import{uiActions} from '../../store/ui_slice'
import classes from './CartButton.module.css';

const CartButton = () => {
  const dispatch = useDispatch();
  const quantity = useSelector(totalQuantity);
  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <button onClick={toggleCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;
