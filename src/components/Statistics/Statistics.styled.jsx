import styled from '@emotion/styled';

export const Title = styled.h2`
  font-family: Roboto;
  text-transform: uppercase;
  color: #6e6969;
  font-weight: 700;
`;

export const StatList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const StatItem = styled.li`
  width: 20%;
  padding: 25px;
  display: flex;
  flex-direction: column;
  background: #004ff9; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #fff94c,
    #004ff9
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #fff94c,
    #004ff9
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  color: #e6e3e3;
`;

export const Label = styled.span`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const Percentage = styled.span`
  font-size: 28px;
  font-weight: 500;
`;
