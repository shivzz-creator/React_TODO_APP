import React, { Component } from 'react'

export default class Todo extends Component {

    constructor(){
        super() ;
        this.state ={
            task : [{task:'code' ,  id :1 },{task : 'sleep ' , id:2 } ,{ task: ' repeat' ,id:3}] ,
            str_val : ''
        }
    }

        handleChange = (e)=>{
            // alert(this.state.str_val) ;
            this.setState(
                {
                    str_val: e.target.value
                }
            )
        }

        onSubmit = () =>{

            this.setState(
                {
                    task:[...this.state.task ,{task:this.state.str_val , id:this.state.task.length+1}] ,
                    str_val:''
                }
            )
        }

        onDelete = (id) =>{
            let narr = this.state.task.filter(
                (ele) =>{
                    return ele.id !== id ;
                }
            )

            this.setState(
                {
                    task :[...narr]
                }
            )
        }

    render() {
        return (
            <div>
                <h1>TODO LIST</h1>
                <input type ="text" value={this.state.str_val} onChange={this.handleChange} ></input>
                <button  onClick={this.onSubmit} color='green' >Add Task</button> 
                <ul>
                    {
                        this.state.task.map(
                            (ele) =>{
                                return(
                                    <React.Fragment>
                                       <p>
                                       <li key={ele.id} > {ele.task}</li>
                                           </p> 
                                           <button onClick={()=>{
                                               this.onDelete(ele.id)
                                           }}>Remove task</button>
                                           <hr></hr>
                                    </React.Fragment>
                                    
                                ) 
                            }
                        )
                    }                  
                    
                    </ul>             
            </div>
        )
    }
}
