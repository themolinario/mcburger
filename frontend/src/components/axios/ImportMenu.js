import React from 'react';
import axios from 'axios';

export default class ImportMenu extends React.Component {
  state = {
    title: '',

  }

  handleChange = event => {
    this.setState({ title: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const product = {
      title: this.state.title
    };

    axios.post(`http://localhost/api/v1/admin/products/search`, { product })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}