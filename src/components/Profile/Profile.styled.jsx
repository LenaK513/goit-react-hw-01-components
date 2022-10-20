import styled from '@emotion/styled';
// import styled from '@emotion/primitives';

// export const Image = styled.Image`
//   border-radius: 50%;
// `;

export const Stats = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  justify-content: space-evenly;
  background-color: #fff;
  border: solid 1px rgb(226, 224, 224);
`;
export const Element = styled.li`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Label = styled.span`
  font-family: BlinkMacSystemFont;
  font-size: 18px;
  font-weight: 700;
  color: #ccc;
  letter-spacing: 2px;
`;
export const Quantity = styled.span`
  font-family: Segoe UI;
  font-size: 22px;
  font-weight: 900;
  color: #000;
  letter-spacing: 1px;
`;
