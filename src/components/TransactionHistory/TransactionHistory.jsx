import PropTypes from 'prop-types';
import {
  TableWrap,
  TableHead,
  TableTr,
  TableTh,
  TableTd,
  TableBody,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  console.log(items.length);
  return (
    <TableWrap>
      <TableHead>
        <TableTr>
          <TableTh>Type</TableTh>
          <TableTh>Amount</TableTh>
          <TableTh>Currency</TableTh>
        </TableTr>
      </TableHead>
      {items.map(({ id, type, amount, currency }) => (
        <TableBody key={id}>
          <TableTr>
            <TableTd>{type}</TableTd>
            <TableTd>{amount}</TableTd>
            <TableTd>{currency}</TableTd>
          </TableTr>
        </TableBody>
      ))}
    </TableWrap>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
