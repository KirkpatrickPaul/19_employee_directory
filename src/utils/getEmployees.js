import axios from 'axios';

function getEmployees() {
  return axios.get(
    'https://randomuser.me/api/?results=100&format=json&inc=name,email,phone,picture,id'
  );
}

export default getEmployees;
