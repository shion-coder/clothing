import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { dimensionsReducer } from 'redux/dimensions/dimensions.reducer';
import { themeReducer } from 'redux/theme/theme.reducer';
import { cartReducer } from 'redux/cart/cart.reducer';
import { directoryReducer } from 'redux/directory/directory.reducer';
import { shopReducer } from 'redux/shop/shop.reducer';
import { userReducer } from 'redux/user/user.reducer';

/* -------------------------------------------------------------------------- */

const persistConfig = {
  storage,
  key: 'root',
  whitelist: ['cart'],
};

const reducer = combineReducers({
  dimensions: dimensionsReducer,
  theme: themeReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
  user: userReducer,
});

export const rootReducer = persistReducer(persistConfig, reducer);
