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
    search: '',
    nameSort: 0,
    emailSort: 0,
    phoneSort: 0
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

  handleSort = (event) => {
    const name = event.currentTarget.getAttribute('name');
    let sort = this.state[name + 'Sort'];
    sort === 0 ? (sort = 1) : sort === 1 ? (sort = -1) : (sort = 0);
    let sorted;
    sorted = this.state.filterEmployees.sort((emp1, emp2) => {
      if (emp1[name] < emp2[name]) {
        return sort * -1;
      }
      if (emp1[name] > emp2[name]) {
        return sort * 1;
      }
      return 0;
    });
    console.log('sorted :>> ', sorted);
    this.setState({
      nameSort: 0,
      emailSort: 0,
      phoneSort: 0,
      filterEmployees: sorted,
      [name + 'Sort']: sort
    });
  };

  render() {
    return (
      <div className='app'>
        <Header />
        <h1>Employee Directory</h1>
        <Container
          searchValue={this.state.search}
          handleSearchInput={this.handleSearchInput}
          nameSort={this.state.nameSort}
          emailSort={this.state.emailSort}
          phoneSort={this.state.phoneSort}
          handleSort={this.handleSort}
        >
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
