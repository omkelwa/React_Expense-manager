import {FaWallet} from 'react-icons/fa'

function BalanceCards ({transtions}){

    const Balance = transtions.reduce((p, c)=>{
      return p + c.amount
    },0)

    const totalIncome = transtions.filter(item=>{
      if(item.amount > 0){
        return item
      }

      
    }).reduce((p,c)=>{
      return p + c.amount
    },0)

    const totalExpenses = transtions.filter(item=>{
      if(item.amount < 0){
        return item
      }
    }).reduce((p,c)=>{
      return p + c.amount
    },0)
    
    
    return (
        <>
        <div className="d-flex  " id="card">
                <div className="card text-center pt-1 m-5 shadow-lg bg-body rounded" id="card-one" style={{width:'18rem'}} >
                    <div className="card-body ">
                      <FaWallet style={{fontSize:"50px"}}/>
                      <h2 className="card-subtitle mb-2 text-muted">Current Balance</h2>
                      <h3 className="card-subtitle mb-2 text-center text-primary">{Balance} </h3>
                      
                    </div>
                  </div>
                <div className="d-flex flex-column justify-content-evenly" >
                      <div className="card text-center  mt-3 mb-3 shadow-lg  bg-body rounded" id="card-two" style={{width:'18rem'}}>
                        <div className="card-body">
                          <h2 className="card-subtitle mb-2  text-success">Current Income</h2>
                          <h3 className="card-subtitle mb-2 text-center ">{totalIncome}</h3>
                          
                        </div>
                      </div>
                      <div className="card shadow-lg   mb-5 bg-body rounded" id="card-three" style={{width:'18rem'}}>
                        <div className="card-body ">
                          <h2 className="card-subtitle mb-2 text-danger"> Current Expenses</h2>
                          <h3 className="card-subtitle mb-2 text-center text-warning">{totalExpenses}</h3>
                          
                        </div>
                      </div>
                </div>
            </div>
        
        </>
    )
}

export default BalanceCards