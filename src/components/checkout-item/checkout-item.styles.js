import styled from 'styled-components';

/* -------------------------------------------------------------------------- */

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const TextContainer = styled.span`
  width: 23%;
`;

export const QuantityContainer = styled(TextContainer)`
  display: flex;

  span {
    margin: 0 10px;
    position: relative;
    top: 2px;
  }
`;

export const Arrow = styled.div`
  cursor: pointer;
`;

export const RemoveButtonContainer = styled.div`
  padding-left: 22px;
  cursor: pointer;
`;
