import React, { Component } from 'react'
import Avatar1 from '../../imgs/1.png'
import Avatar2 from '../../imgs/2.png'
import Avatar3 from '../../imgs/3.png'
import Avatar4 from '../../imgs/4.png'
import Alert from './Alert'

class RegisterForm extends Component {
  state = {
    profile: {username: '', name: '', avatar: ''},
    availableAvatars: [],
    alert: {status: 'invisible', message: 'alert', type: 'danger'}
  }

  componentDidMount(){
    const allAvatars = [Avatar1, Avatar2, Avatar3, Avatar4]
    this.setState({availableAvatars: allAvatars})
  }

  showAlert = (message) => {
    this.setState({
      alert: {...this.state.alert,status: 'visible',message}
    });
    setTimeout(()=> {
      this.setState({
        alert: {...this.state.alert,status: 'invisible',message}
      });
    }, 5000)
  }

  handleChange = (e) => {
    this.setState({
      profile:{
        ...this.state.profile,
        [e.target.id]: e.target.value
      }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.profile.avatar === ''){
      this.showAlert("Please choose avatart first!")
    }else{
      console.log(this.state)
      // TODO : Dispatch Auth User
    }
  }
  render() {
    const {username, name} = this.state.profile;
    const {status, type, message} = this.state.alert;

    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Join Would You Rather !!</h2>
        <p className="text-muted lead mt-3">
          Just fill your details &amp; let us help you in creating polls easily! Don't forget to help your friends too.
        </p>
        <Alert status={status} type={type} message={message} />
        <div className="my-4">
          <label htmlFor="username" className="form-label text-secondary">Username</label>
          <input 
            type="text"
            className="form-control mt-1 w-75 text-dark" 
            id="username" 
            placeholder="Enter unique username"
            onChange={this.handleChange}
            value={username}
            required />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="form-label text-secondary">Full Name</label>
          <input 
            type="text"
            className="form-control mt-1 w-75 text-dark" 
            id="name" 
            placeholder="Enter your name"
            onChange={this.handleChange}
            value={name}
            required />
        </div>
        <div className="mb-4">
          <span className="form-label d-block mb-3">Choose Avatar</span>
          {this.state.availableAvatars.map((avatar, index) => (
            <label key={index}>
              <input type="radio" id="avatar" name="avatar" onChange={this.handleChange} value={avatar} />
              <img className="rounded mr-4 p-1" width="68" src={avatar} alt={`avatar${index}`} />
            </label>
          ))}
        </div>
        <button type="submit" className="btn btn-dark px-4 my-3">Register</button>
      </form>
    )
  }
}

export default RegisterForm