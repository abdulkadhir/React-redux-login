import React, { Component } from 'react';
import { Table, Thead, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
const data = require('../data.json');

class Employee extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

   datatable = () => {
  let tableAction = [];
    for (let i = 0; i < data.user.length; i++) {
      tableAction.push(
        <Tr>
          <Td style={{ border: "solid 1px white" }}>{data.user[i].id}</Td>
          <Td style={{ border: "solid 1px white", textAlign: "center" }}><b>{data.user[i].name}</b></Td>
          <Td style={{ border: "solid 1px white"}}> <b>{data.user[i].age}</b></Td>
          <Td style={{ border: "solid 1px white" }}>{data.user[i].gender}</Td>
          <Td style={{ border: "solid 1px white", textAlign: "center" }}><b>{data.user[i].email}</b></Td>
          <Td style={{ border: "solid 1px white"}}> <b>{data.user[i].phoneNo}</b></Td>
        </Tr>
      )
    }
    return tableAction;
   }

  render() {  
    return (
 <Table style={tableCss}>
          <Thead>
            <Tr>
              <Th style={{ border: "solid 1px white" }}>#</Th>
              <Th style={{ border: "solid 1px white" }}>NAME</Th>
              <Th style={{ border: "solid 1px white" }}>AGE</Th>
              <Th style={{ border: "solid 1px white" }}>GENDER</Th>
              <Th style={{ border: "solid 1px white" }}>EMAIL</Th>
              <Th style={{ border: "solid 1px white" }}>MOBILE</Th>
            </Tr>
          </Thead>
          {this.datatable()}
        </Table>
    )
  }

}
const tableCss = {
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  backgroundSize: 'cover',
  height: '-webkit-fill-available',
  /* Center and scale the image nicely */
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  background: '#FEE7B2',
};
export default Employee;


