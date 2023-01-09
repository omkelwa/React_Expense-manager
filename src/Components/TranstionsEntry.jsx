import Tr from "./Tr"

function TransctionEntry ({transtions, deleteTransactions, editTranstions}){
    return(
        <>
        <div className="container" id="transtions-entry">
            {/* <ul className="list-group list-group-horizontal">
              <li className="list-group-item">S.no</li>
              <li className="list-group-item">Transction</li>
              <li className="list-group-item">Amount</li>
            </ul>
            <ul className="list-group list-group-horizontal-sm">
              <li className="list-group-item">1</li>
              <li className="list-group-item">Am</li>
              <li className="list-group-item">A third item</li>
            </ul>
            <ul className="list-group list-group-horizontal-md">
              <li className="list-group-item">2</li>
              <li className="list-group-item">A second item</li>
              <li className="list-group-item">A third item</li>
            </ul>   
            <ul className="list-group list-group-horizontal-lg">
              <li className="list-group-item">3</li>
              <li className="list-group-item">A second item</li>
              <li className="list-group-item">A third item</li>
  </ul> */}
            <table className="table table-bordered text-center shadow-lg  bg-body rounded">
              <thead className="shadow-lg  bg-dark rounded-5 text-white">
                <th>Amount</th>
                <th className="w-50">Transction</th>
                <th>Delete</th>
                <th>Modify</th>
              </thead>
              <tbody className="shadow-sm  bg-body rounded ">
                {
                  transtions.map(transtion=><Tr key={transtion.id} transtion={transtion} deleteTransactions={deleteTransactions} editTranstions={editTranstions} />)
                }
              
              </tbody>
            </table>
            {/* <ul className="list-group">
                <li className="list-group-item">
                  
                </li>
            </ul> */}
          </div>
        </>
    )
}

export default TransctionEntry