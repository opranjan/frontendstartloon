import React from 'react';

const style = {
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '20px',
  },
  th: {
    background: '#f2f2f2',
    padding: '10px',
    textAlign: 'center',
    borderBottom: '1px solid #ccc',
  },
  td: {
    padding: '10px',
    textAlign: 'center',
    borderBottom: '1px solid #ccc',
  },
};

const AdminHome = ({ users }) => {
  return (
    <div>
      <h2>Welcome to Admin Home</h2>
      <table style={style.table}>
        <thead>
          <tr>
            <th style={style.th}>S.No</th>
            <th style={style.th}>Name</th>
            <th style={style.th}>Email</th>
            <th style={style.th}>Count</th>
            <th style={style.th}>LoginDate</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, index) => (
            <tr key={item.id}>
              <td style={style.td}>{index + 1}</td>
              <td style={style.td}>{item.name}</td>
              <td style={style.td}>{item.email}</td>
              <td style={style.td}>{item.count}</td>
              <td style={style.td}>{item.lastLoginDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminHome;
