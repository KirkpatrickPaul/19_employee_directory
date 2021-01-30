import React, { Component } from 'react';
import Header from './components/Header';
import Card from './components/Card';
import Container from './components/Container';
import Footer from './components/Footer';
import getEmployees from './utils/getEmployees.js';
import './App.css';

let color = '';

class App extends Component {
  state = {
    allEmployees: [],
    filterEmployees: [],
    search: ''
  };

  componentDidMount() {
    this.loadEmployees();
  }

  loadEmployees = async () => {
    const employees = await getEmployees();
    employees.data.results.forEach((employee, idx) => {
      const fullName =
        employee.name.first[0].toUpperCase() +
        employee.name.first.substring(1) +
        ' ' +
        employee.name.last[0].toUpperCase() +
        employee.name.last.substring(1);

      const newEmail = employee.email.replace('example.com', 'threefold.com');

      employee.name = fullName;
      employee.email = newEmail;
      employee.key = idx;
    });
    this.setState({
      allEmployees: employees.data.results,
      filterEmployees: employees.data.results
    });
  };

  alternateColor = () => {
    color === 'green' ? (color = 'brown') : (color = 'green');
  };

  handleSearchInput = (event) => {
    const { value } = event.target;
    const filterEmployees = this.state.allEmployees.filter((emp) =>
      emp.name.toLowerCase().includes(value)
    );
    this.setState({ search: value, filterEmployees });
  };

  render() {
    return (
      <div className='app'>
        <Header />
        <h1>Employee Directory</h1>
        <input
          value={this.state.search}
          name='search'
          onChange={this.handleSearchInput}
          type='search'
          placeholder='Search for a name...'
        />
        <Container>
          {this.state.filterEmployees.map((emp) => {
            this.alternateColor();
            return (
              <Card
                key={emp.key}
                color={color}
                image={emp.picture.medium}
                name={emp.name}
                email={emp.email}
                phone={emp.phone}
              />
            );
          })}
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
