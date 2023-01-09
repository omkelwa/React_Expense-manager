import { FaTrash, FaEdit } from "react-icons/fa"


function Tr ({transtion, deleteTransactions, editTranstions}){
    return(
        <>
        <tr>
                  <td className="income-transtions">{transtion.amount}</td>
                  <td>{transtion.text}</td>
                  <td onClick={(e)=>deleteTransactions(transtion.id)}><FaTrash/></td>
                  <td onClick={(e)=>editTranstions(transtion) }><FaEdit/></td>
                 
                </tr>
        
        </>
    )
}

export default Tr