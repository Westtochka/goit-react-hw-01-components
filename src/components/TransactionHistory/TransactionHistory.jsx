// import PropTypes from 'prop-types'
import { TransactionItem } from 'components/TransactionItem/TransactionItem';
import css from './TransactionHistory.module.css';
export const TransactionHistory = ({items}) => {
    return (
    <table className={css.transactionhistory}>
        <thead>
          <tr>
            <th>TYPE</th>
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
          id={item.id}/>
          )
}        
                 </tbody>
      </table>)
        
    }