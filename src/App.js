import React, { Component } from 'react';
import Header from "./components/Header";
import Card from './components/Card';
import Container from './components/Container';
import Footer from './components/Footer';
import getEmployees from './utils/getEmployees.js';
import './App.css';

let color = '';

class App extends Component {
  state = {
    employees: []
  };

  componentDidMount() {
    this.loadEmployees();
  }

  loadEmployees = async () => {
    const employees = await getEmployees();
    employees.data.results.forEach((employee) => {
      const fullName =
        employee.name.first[0].toUpperCase() +
        employee.name.first.substring(1) +
        ' ' +
        employee.name.last[0].toUpperCase() +
        employee.name.last.substring(1);

      const newEmail = employee.email.replace('example.com', 'threefold.com');

      employee.name = fullName;
      employee.email = newEmail;
    });
    this.setState({ employees: employees.data.results });
  };

  alternateColor = () => {
    color === 'green' ? (color = 'brown') : (color = 'green');
  };

  render() {
    return (
      <div className='app'>
        <Header />
        <h1>Employee Directory</h1>
        <Container>
          {this.state.employees.map((emp, idx) => {
            this.alternateColor();
            return (
              <Card
                key={idx}
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
