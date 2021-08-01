import React,{Component} from 'react'
// import ReactDOM  from 'react-dom'
import './form.css'

class Usermodel extends Component {
constructor(props) {
        super(props)
        this.state={
            username :'',
            email : '',
            phonenumber : '',
            Age :'',
            Gender : '',
            dob : ''
        }
    }
    handleUsernameChange = (event) => {
        this.setState({
            username : event.target.value
        })
    }
    emailChange = (event) => {
        this.setState({
            email : event.target.value
        })
    }
    phonechange = (event) => {
        this.setState({
            phonenumber : event.target.value
        })
    }
    agechange = (event) => {
        this.setState({
            Age : event.target.value
        })
    }
    genderchange = (event) => {
        this.setState({
            Gender : event.target.value
        })
    }
    dobchange = (event) => {
        this.setState({
           dob: event.target.value
        })
    }
    submitchange = (event) => {
        alert(`User-name: ${this.state.username}\n
         E-mail: ${this.state.email}\n
         Phone-number: ${this.state.phonenumber}\n 
         Age: ${this.state.Age}\n
         Gender: ${this.state.Gender}\n
         DoB: ${this.state.dob}`)
            
        event.preventDefault()
    }


    render() {
            return (
                <form onSubmit= {this.submitchange} >
                    <div className='center'>
                        <label>Username</label>
                        <input type = 'text' value ={this.state.username} onChange ={this.handleUsernameChange} required></input>
                    </div>
                    <div className = 'center'><label>E-mail</label>
                        <input type = 'email' value ={this.state.email} onChange ={this.emailChange} required ></input>
                    </div>
                    <div className = 'center'><label>Phone Number</label>
                        <input type = 'tel' pattern ="[0-9]{10}"value ={this.state.phonenumber} onChange ={this.phonechange} required ></input>
                    </div>
                    <div className = 'center'><label>Age</label>
                        <input type = 'number' value ={this.state.Age} onChange ={this.agechange} required ></input>
                    </div>
                    <div className = 'center'><label>Gender</label>
                    <select><option value={this.state.Gender} onChange ={this.genderchange}>Male</option>
                    <option value={this.state.Gender} onChange ={this.genderchange}>Female</option>
                    <option value={this.state.Gender} onChange ={this.genderchange}>Others</option>
                    </select>
                    </div>
                    <div className = 'center'><label>Date of Birth</label>
                        <input type = 'date' value ={this.state.dob} onChange ={this.dobchange} required  ></input>
                    </div>
                    <div className= 'center'> <input type="submit" /> </div>
                </form>
            )
        }
    
}
export default Usermodel;