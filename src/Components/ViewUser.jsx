import { useEffect, useState } from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, styled, Button } from '@mui/material'
import { getUsers, deleteUser  } from '../Service/api';
import {Link} from 'react-router-dom'; 

const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px auto 0 auto;
`
const THead = styled(TableRow)`
  background: grey ;
  & > th {
    color: gold ;
    font-size: 20px;
  } 
`;
const TBody = styled(TableRow)`
 & > td {
   font-size: 15px;
 }
`;
const ViewUser = () => {

  const [users, setUsers] = useState([]);
     useEffect(() => {
      getViewUsers();
     }, []);

     const getViewUsers = async () => {
      let response = await getUsers();
      setUsers(response.data);
     }

     const deleteUserDetails = async (id) => {
       await deleteUser(id);
     }

  return (
    <StyledTable>
      <TableHead>
        <THead>
          <TableCell>ID</TableCell>
          <TableCell>NAME</TableCell>
          <TableCell>USERNAME</TableCell>
          <TableCell>EMAIL</TableCell>
          <TableCell>PHONE</TableCell>
          <TableCell></TableCell>
        </THead>
      </TableHead>
       <TableBody>
          {
            users.map(user => (
              <TBody>
                <TableCell>{user._id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>
                  <Button variant="contained" color="success" style={{ marginRight: 10}} component={Link} to={`/edit/${user._id}`}>Edit</Button>
                  <Button variant="contained" color="error" onClick={() => deleteUserDetails(user._id)}>Delete</Button>
                </TableCell>
              </TBody>
            ))
          }
       </TableBody>
    </StyledTable>
  )
}

export default ViewUser;