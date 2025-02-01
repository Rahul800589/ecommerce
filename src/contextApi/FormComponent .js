// App.js
import React, { useState, useContext } from 'react';
import { UserContext, UserProvider } from './UserContext';

const FormComponent = () => {
  const { updateUserData } = useContext(UserContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUserData(name, email);
    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

const DisplayUserData = () => {
  const { userData } = useContext(UserContext);

  return (
    <div>
      <h3>Submitted Data:</h3>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
};

// const App = () => {
//   return (
//     <UserProvider>
//       <div>
//         <h1>Context API Form</h1>
//         <FormComponent />
//         <DisplayUserData />
//       </div>
//     </UserProvider>
//   );
// };

// export default App;
