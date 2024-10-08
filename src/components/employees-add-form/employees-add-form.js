import { Component } from 'react';

import './employees-add-form.css';


class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: 0
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render() {
        const {name, salary} = this.state
        return (
            <div className="app-add-form">
                <h3>Add new Employee</h3>
                <form 
                    className="add-form d-flex">
                    <input 
                        type="text" 
                        className="form-control new-post-label" 
                        placeholder="Name of employee"
                        name="name"
                        value={name}
                        onChange={this.onValueChange}/>
                    
                    <input 
                        type="number" 
                        className="form-control new-post-label" 
                        placeholder="Salary in USD"
                        name="salary"
                        value={salary}
                        onChange={this.onValueChange}/>
                    <button className="btn btn-outline-light">Add</button> 
                </form>
            </div>
        )
    }
} 

export default EmployeesAddForm;