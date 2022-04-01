import styled from '@emotion/styled';
import { opacityAnimation } from '../../data/animations';
import { mainFont } from '../../data/globalVariables';

export const Text = styled.div`
  background-color: #b7322c;
  color: #fff;
  padding: 15px;
  font-size: 22px;
  text-transform: uppercase;
  font-family: ${mainFont};
  font-weight: 700;
  text-align: center;
  ${opacityAnimation('2.5s')}
`;
