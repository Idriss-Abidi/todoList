import React, {Component} from 'react';
import './addItem.css'
// import TodoItems from './components/todoItems/todoItems';
class AddItem extends Component {
  state = {
    name: '',
    age: ''
  }
  handleChange = (e)=>{
    this.setState({[e.target.id]: e.target.value}) //name:value and age:value... 
  }
  handleSubmit = (e)=>{
    e.preventDefault();
    if(e.target.name.value==='') return false;
    if(e.target.age.value==='') return false;
    this.props.AddItem(this.state);
    this.setState({
        name:'',
        age:''
    }
    )
  }
  render(){
  return (
    <div className="" onSubmit={this.handleSubmit}>
       <form>
        <input type='text' placeholder='Name...' id='name' onChange={this.handleChange} value={this.state.name}/>
        <input type='number' placeholder='Age...' id='age' onChange={this.handleChange} value={this.state.age}/>
        <input type='submit' value='Add'/>
       </form>
    </div>
  );
  }
}

export default AddItem;
