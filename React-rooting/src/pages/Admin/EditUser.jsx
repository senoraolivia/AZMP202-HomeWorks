import { useParams } from 'react-router-dom';

function EditUser() {
  const { id } = useParams();

  return (
    <div>
      <h1>Edit User {id}</h1>
      <form>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <button type="submit">Update User</button>
      </form>
    </div>
  );
}

export default EditUser;

