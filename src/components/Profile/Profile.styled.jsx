import styled from '@emotion/styled';
// import styled from '@emotion/primitives';

// export const Image = styled.Image`
//   border-radius: 50%;
// `;

export const Image = styled.img`
  display: block;
  margin: 0 auto;
  padding: 50px;
  width: 200px;
  height: auto;
  border-radius: 50%;
`;

export const Name = styled.p`
  font-family: Segoe UI;
  font-size: 32px;
  font-weight: 700;
  color: #595858;
`;

export const Tag = styled.p`
  font-family: Segoe UI;
  font-size: 24px;
  font-weight: 400;
  color: #8a888a;
`;

export const Location = styled.p`
  font-family: Segoe UI;
  font-size: 24px;
  font-weight: 400;
  color: #8a888a;
`;

export const Stats = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  margin-top: 50px;
  justify-content: space-evenly;
  background-color: #d4d6d4;
  border: solid 1px rgb(226, 224, 224);
`;
export const Element = styled.li`
  display: flex;
  flex-direction: column;
  padding: 40px;
  &:not(:last-child) {
    border-right: solid 1px #858585;
  }
`;

export const Label = styled.span`
  font-family: BlinkMacSystemFont;
  font-size: 18px;
  font-weight: 700;
  color: #8a888a;
  letter-spacing: 2px;
`;
export const Quantity = styled.span`
  font-family: Segoe UI;
  font-size: 24px;
  font-weight: 900;
  color: #404040;
  margin-top: 5px;
  letter-spacing: 1px;
`;
