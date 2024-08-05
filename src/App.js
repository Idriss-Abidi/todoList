import React, {Component} from 'react';
import TodoItems from './components/todoItems/todoItems';
import AddItem from './components/addItem/addItem';
class App extends Component {
  state = {
    items : [
      {id:1, name:'driss', age:22},{id:2, name:'idriss', age:22},{id:3, name:'dris', age:22}
    ]
  }
  deleteItem =(id)=>{
    // let items=this.state.items;
    // let i=items.findIndex(item => item.id===id);
    // items.splice(i,1);
    let items=this.state.items.filter(item=>{
      return item.id !== id;
    })
    this.setState({items:items});
  }
  AddItem =(item)=>{
    if(item.name==='') return false;
    if(item.age==='') return false;
    item.id=Math.random();
    let items=this.state.items;
    items.push(item);
    this.setState({items:items});
  }
  render(){
  return (
    <div className="App container">
       TODO List: 
       <TodoItems items={this.state.items} deleteItem={this.deleteItem} />
       <AddItem AddItem={this.AddItem} />
    </div>
  );
  }
}

export default App;
