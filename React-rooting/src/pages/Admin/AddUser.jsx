function AddUser() {
    return (
      <div>
        <h1>Add User</h1>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Add User</button>
        </form>
      </div>
    );
  }
  
  export default AddUser;
  
  