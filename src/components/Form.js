import React from 'react';

class Form extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry",
    submittedData: []
  }

  handleFirstNameChange = event => {
    this.setState({
      firstName: event.target.value
    })
  }

  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    // let formData = {firstName: this.state.firstName, lastName: this.state.lastName}
    // this.setState({submittedData: [...this.state.submittedData,formData]})
    const firstName = event.target[0].value
    const lastName = event.target[1].value

    this.sendFormDataSomeWhere({firstName,lastName})
  }

  listOfSubmissions = () => {
    return this.state.submittedData.map(data => {
      return <div><span>{data.firstName}</span> <span>{data.lastName}</span></div>
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input type="text" name="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} />
          <input type="text" name="lastName" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />
          <button type="submit">Submit</button>
        </form>
        {this.listOfSubmissions()}
      </div>
    )
  }
}

export default Form;