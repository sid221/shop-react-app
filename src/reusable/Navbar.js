import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";

// Common Navbar for all pages
const Navbar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const { cartItemCount } = useSelector((state) => state.shop);
  const isAuth = !!localStorage.token || !!token ? true : false;
  // console.log(cartItemCount);
  const handleLogout = () => {
    dispatch({ type: "USER_LOGOUT" });
    history.push("/");
  };
  return (
    <div className="nav-container">
      <nav>
        <Link to="/">
          <img src="/static/images/shop-logo.png" alt="Shopping" />
        </Link>
        {isAuth ? (
          <div>
            <Link to="/shop">Shop</Link>
            <Link to="/cart" className="nav-cart-icon">
              <img src="/static/icons/cart.svg" alt="Cart" />
              {cartItemCount > 0 && <span>{cartItemCount}</span>}
            </Link>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
