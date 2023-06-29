import PropTypes from 'prop-types'
import { TransactionItem } from 'components/TransactionItem/TransactionItem';
import css from './TransactionHistory.module.css';
export const TransactionHistory = ({items}) => {
    return (
    <table className={css.transactionhistory}>
        <thead>
          <tr>
            <th >TYPE</th>
            <th>AMOUNT</th>
            <th>CURRENCY</th>
          </tr>
        </thead>
      
        <tbody>
          {items.map(item=>
            <TransactionItem  
            type={item.type}
          amount={item.amount}
          currency={item.currency}
          id={item.id}
          key={item.id}/>
          )
}        
</tbody>
      </table>)
        
    }

    
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  }