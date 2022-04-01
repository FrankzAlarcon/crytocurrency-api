import styled from '@emotion/styled';
import { mainFont } from '../../data/globalVariables';

export const Container = styled.div`
  color: #FFF;
  font-family: ${mainFont};
  
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;  
  margin-top: 30px;
  @media(min-width: 768px){
      flex-direction: row;
  }
`;
export const Img = styled.img`
  display: block;
  width: 120px;
`;

export const Text = styled.p`
  font-size: 18px;
  span {
    font-weight: 700;
  }
`;

export const Price = styled.p`
  font-size: 30px;
  span {
    font-weight: 700;
  }
`;
