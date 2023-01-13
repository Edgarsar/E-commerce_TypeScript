import { Outlet } from 'react-router-dom';
import { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CardIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { signOutStart } from '../../store/user/user.action';

import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './navigation.styles';


const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutUser = () => dispatch(signOutStart());

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo className='logo' />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>
            Shop
          </NavLink>
          {
            currentUser ?
              (
                <NavLink as="span" onClick={signOutUser}>Sign Out</NavLink>
              ) :
              (
                <NavLink to='/auth'>
                  Sign In
                </NavLink>
              )
          }
          <CardIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
}


export default Navigation;