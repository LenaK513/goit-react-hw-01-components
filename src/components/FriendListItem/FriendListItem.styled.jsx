import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  width: 200px;
  padding: 10px 15px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  margin: 0 auto;
  margin-bottom: 5px;
`;

export const Dot = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  margin-right: 15px;
  border-radius: 50%;
  background-color: gray;
  background-color: ${({ type }) => {
    return type ? 'green' : 'red';
  }};
`;

export const Name = styled.p`
  font-family: BlinkMacSystemFont;
  font-size: 24px;
  font-weight: 700;
  margin-left: 15px;
`;
