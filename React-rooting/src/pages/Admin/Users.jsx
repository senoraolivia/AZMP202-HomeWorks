import { Link } from 'react-router-dom';

function Users() {
  const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
  ];

  return (
    <div>
      <h1>Users</h1>
      <Link to="/admin/users/add">Add User</Link>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - <Link to={`/admin/users/edit/${user.id}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;

