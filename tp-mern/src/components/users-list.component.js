import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Exercise = props => (
  <tr>
    <td>{props.user.username}</td>
    <td>{props.user.gender}</td>
    <td>{props.user.dob}</td>
    <td>{props.user.email}</td>
    <td>{props.user.news}</td>
    <td>{props.user.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.user._id}>edit</Link> | <a href="#" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a>
    </td>
  </tr>
)

export default class UserList extends Component {
  constructor(props) {
    super(props);

    this.deleteuser = this.deleteuser.bind(this)

    this.state = {user: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users/')
      .then(response => {
        this.setState({ user: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteUser(id) {
    axios.delete('http://localhost:5000/users/'+id).then(response => { console.log(response.data)});

    this.setState({
      user: this.state.user.filter(el => el._id !== id)
    })
  }

 userList() {
    return this.state.user.map(currentexercise => {return <User user={currentuser} deleteUser={this.deleteUser ,key={currentuser._id}/>; }}
  render(); {
    return (
      <div>
        <h3>USER</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Gender</th>
              <th>dob</th>
              <th>news</th>
              <th>email</th>
              <th>photo</th>
            </tr>
          </thead>
          <tbody>
            { this.user() }
          </tbody>
        </table>
      </div>
    )
  }
