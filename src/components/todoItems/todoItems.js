// import react from 'react'
import './todoItems.css'
const TodoItems = (props)=>{
    const {items, deleteItem}=props;
    let length= items.length;
    const ListItems=length? (items.map(item=>{
        return(
            <div key={item.id}>
                <span>{item.name}</span> 
                <span>{item.age}</span>
                <span onClick={()=>deleteItem(item.id)}>&times;</span>
            </div>
        )
    })) : (<div>There is no item to show!</div>);
    return(
        <div className='ListItems'>
            <div>
                <span>Name</span>
                <span>age</span>
                <span>Action</span>
            </div>
            {ListItems}
        </div>
    )
}
export default TodoItems