import styled from 'styled-components';

import { ReactComponent as ShoppingIconSVG } from 'assets/images/shopping-bag.svg';

/* -------------------------------------------------------------------------- */

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  top: -3px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ShoppingIcon = styled(ShoppingIconSVG)`
  width: 24px;
  height: 24px;
`;

export const ItemCounContainer = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;
