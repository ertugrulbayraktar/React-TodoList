import React from 'react'

class DeleteAllTodos extends React.Component{
    render(){
        return(
            <div className="hepsini-sil">
                <button onClick={() => {
                this.props.HepsiniSil();
            }}>Hepsini SİL</button> 
            </div>
        )
    }
        
   
}

export default DeleteAllTodos;