import React from 'react'
import './ListItems.css'

 function ListItems(props){
    const items = props.items;
    const listItems = items.map(item =>        // Todo'ları döngüye sokuyoruz.
        {    
            return(
                <div className="list" >
                    <p>
                        <input type="text"     // Burası todoları ekranda görmemizi sağlayan bölümdür.
                        id={item.key}          // Her Todo nun key i vardır. (Burada 'id' yerine herhangir bir şey yazabilirdik.)
                        value={item.text}/>     
                        
                        <button className="buton" onClick={() =>      
                        props.deleteItem(item.key)}> Sil </button>   
                    </p>   
                </div> 
            )
        }) 
    return(
        <div>
            {listItems}
        </div>
    )
    
}
export default ListItems;