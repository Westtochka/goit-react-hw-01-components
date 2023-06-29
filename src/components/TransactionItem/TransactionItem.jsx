import css from './TransactionItem.module.css'
export const TransactionItem=({type, amount, currency, id})=>{
 return (<tr key={id} className={css.string} >
            <td className={css.type}>{type}</td>
            <td className={css.type}>{amount}</td>
            <td className={css.type}>{currency}</td>
          </tr>)}
          
