import React, { Component } from 'react';
import Card from './components/Card';
import Container from './components/Container';
import Footer from './components/Footer';
import getEmployees from './utils/getEmployees.js';

class App extends Component {
  state = {
    employees: [],
    color: ''
  };

  compnentDidMount() {
    this.loadEmployees();
  }

  loadEmployees = async () => {
    getEmployees().then((newEmployees) => {
      const employees = newEmployees.map((employee) => {
        const fullName =
          employee.name.first[0].toUpperCase() +
          employee.name.first.substring(1) +
          ' ' +
          employee.name.last[0].toUpperCase() +
          employee.name.last.substring(1);

        const newEmail = employee.email.replace('example.com', 'threefold.com');

        employee.name = fullName;
        employee.email = newEmail;
        return employee;
      });
      this.setState({ employees });
    });
  };

  alternateColor = () => {
    this.state.color === 'green'
      ? this.setState({ color: 'brown' })
      : this.setState({ color: 'green' });
  };

  render() {
    return (
      <div className='app'>
        <h1>Employee Directory</h1>
        <Container>
          {this.state.employees.map((emp) => {
            this.alternateColor();
            return (
              <Card
                id={emp.id.value}
                color={this.state.color}
                image={emp.picture.thumbnail}
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
