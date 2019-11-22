import React from 'react';
import './App.css';
import ListItems from './ListItems';
import DeleteAllTodos from './DeleteAllTodos';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      items: [],
      currentItem:{   // Şuan ki girdiğimiz Todo
        text:'',
        key:''        // Key tanımlamamızda ki amaç; Örneğin 2 tane aynı isimle todo girdik
      }               // eğer "delete fonksiyonun" içine key yerine text gönderirsek  2 aynı isimle todoyu aynı anda siliyor. 
    }                 // Bu yüzden key gönderiyoruz.


    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.HepsiniSil = this.HepsiniSil.bind(this);
  }
  
  handleInput(e){
    this.setState({
      currentItem:{           
        text: e.target.value,
        key: Date.now()    // Date sınıfından inputun hangi zamanda girildiğini belirtir.
      }
    })
  }

  // Todo ekler.
  addItem(e){
    e.preventDefault();        // Sayfanın refresh olmasını engelliyor.
    const newItem = this.state.currentItem;   
    if(newItem.text !== "")      // Girdiğiniz text boş değilse,
    {
      const newItems = [...this.state.items, newItem];      // [text,key] değerleri
      this.setState({
        items: newItems,
        currentItem:{
          text:'',
          key:''
        }
      })
    } 
  }
  
  // Sadece seçilen Todo yu siler.
  deleteItem(key){
    const sil = this.state.items.filter(item =>    // filter() metotu sağlanan işlev tarafından uygulanan 
      item.key !== key);                           // testi geçen tüm öğelerle birlikte yeni bir dizi oluşturur.
      this.setState({
      items: sil                                             
      })
  }

  // Bütün Todo ları siler.
  HepsiniSil(){
    this.setState({
      items:[]
    })
  }

  render(){
  return (
    <div className="App">
      <header>
        <form id="todoForm" onSubmit={this.addItem}>    
          <input type="text" placeholder="Todo Girin"     // input alanına bir input girilirse handleInput fonksiyonu devreye girecek.
          value={this.state.currentItem.text} onChange={this.handleInput}/>  
          <button type="submit">Ekle</button>  
        </form>
      </header>
      <ListItems></ListItems>
      <ListItems items={this.state.items} 
                deleteItem={this.deleteItem}/>
               

      <DeleteAllTodos HepsiniSil = {this.HepsiniSil}/>
      
    </div>
  );
}
}
export default App;
