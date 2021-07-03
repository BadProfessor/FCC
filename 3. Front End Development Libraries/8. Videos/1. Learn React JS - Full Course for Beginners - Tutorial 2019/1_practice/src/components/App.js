import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      age: '',
      gender: '',
      destination: '',
      isVegan: false,
      isKosher: false,
      isLactoreFree: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === 'checkbox'
      ? this.setState({
          [name]: checked,
        })
      : this.setState({
          [name]: value,
        });
  }

  render() {
    return (
      <main>
        <form>
          <input
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
            placeholder="First Name"
          />
          <br />
          <input
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
            placeholder="Last Name"
          />
          <br />
          <input
            name="age"
            value={this.state.age}
            onChange={this.handleChange}
            placeholder="Age"
          />
          <br />
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={this.state.gender === 'male'}
              onChange={this.handleChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={this.state.gender === 'female'}
              onChange={this.handleChange}
            />
            Female
          </label>
          <br />
          <select
            value={this.state.destination}
            name="destination"
            onChange={this.handleChange}
          >
            <option value="">Destination</option>
            <option value="germany">Germany</option>
            <option value="norway">Norway</option>
            <option value="north pole">North Pole</option>
            <option value="south pole">South Pole</option>
          </select>
          <br />

          <label>
            <input
              type="checkbox"
              name="isVegan"
              onChange={this.handleChange}
              checked={this.state.isVegan}
            />
            Vegan?
          </label>

          <label>
            <input
              type="checkbox"
              name="isKosher"
              onChange={this.handleChange}
              checked={this.state.isKosher}
            />
            Kosher?
          </label>

          <label>
            <input
              type="checkbox"
              name="isLactoreFree"
              onChange={this.handleChange}
              checked={this.state.isLactoreFree}
            />
            Lactore Free?
          </label>
          <br />
          <button>Submit</button>
        </form>
        <hr />
        <h2>Entered information:</h2>
        <p>
          Your name: {this.state.firstName} {this.state.lastName}
        </p>
        <p>Your age: {this.state.age}</p>
        <p>Your gender: {this.state.gender}</p>
        <p>Your destination: {this.state.destination}</p>
        <div>
          <p>Your dietary restrictions:</p>
          <p>Vegan: {this.state.isVegan ? 'Yes' : 'No'}</p>
          <p>Kosher: {this.state.isKosher ? 'Yes' : 'No'}</p>
          <p>Lactore Free: {this.state.isLactoreFree ? 'Yes' : 'No'}</p>
        </div>
      </main>
    );
  }
}

export default App;
