import React, { useState, useEffect, useContext } from 'react';
import ExpenseContext from '../../exp-context/expense-context';
import { NavLink } from 'react-router-dom';

const Profile = () => {

  const [email, setEmail] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [isEmailVerified, setIsEmailVerified] = useState(true);
  const [imgUrl, setImgUrl] = useState('');

  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [newEmail, setNewEmail] = useState('');

  const [completeProfile, setCompleteProfile] = useState(true);

  const ctx = useContext(ExpenseContext);

  useEffect(() => {
    const fetchUserData = async () => {
      fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDQxqWAXQVnifXhqishJ95EfgRZb9DOkq0',
        {
          method: 'POST',
          body: JSON.stringify({
            idToken: ctx.token
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      ).then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return response.json().then((data) => {
            let errorMessage = 'Authentication failed!';
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            throw new Error(errorMessage);
          });
        }
      }).then((data) => {
        console.log("Data", data);

        if (!data.photoUrl || !data.displayName) {
          setCompleteProfile(false);
        }
        setImgUrl(data.photoUrl);
        setEmail(data.email);
        setDisplayName(data.displayName);
        setIsEmailVerified(data.emailVerified);

      })
        .catch((error) => {
          alert(error.message);
        });
    };

    fetchUserData();
  }, []);

  const handleEmailEdit = () => {
    setIsEditingEmail(true);
    setNewEmail(email);
  };

  const handleEmailSave = () => {

    fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDQxqWAXQVnifXhqishJ95EfgRZb9DOkq0',
      {
        method: 'POST',
        body: JSON.stringify({
          idToken: ctx.token,
          email: newEmail,
          returnSecureToken: true
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return response.json().then((data) => {
          let errorMessage = 'Authentication failed!';
          if (data && data.error && data.error.message) {
            errorMessage = data.error.message;
          }
          throw new Error(errorMessage);
        });
      }
    }).then((data) => {
      console.log("Updated Email", data.email);
      setEmail(data.email);
      setIsEditingEmail(false);
    })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleEmailChange = (e) => {
    setNewEmail(e.target.value);
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg">
        <div className="card-body">
          <div className="row">
            {completeProfile && (
              <>
                <div className="col-md-4">
                  <img src={imgUrl} alt="Profile" className="img-fluid rounded mb-3" style={{ width: '200px', height: '200px', borderRadius: '10px' }} />
                </div>
                <div className="col-md-8">
                  <h2 className="card-title">Profile Information</h2>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <strong>Email:</strong>
                      {isEditingEmail ? (
                        <div className="input-group">
                          <input
                            type="email"
                            className="form-control"
                            value={newEmail}
                            onChange={handleEmailChange}
                          />
                          <button className="btn btn-primary" onClick={handleEmailSave}>Save</button>
                        </div>
                      ) : (
                        <>
                          {email} <button className="btn btn-primary" onClick={handleEmailEdit}>Edit</button>
                          {isEmailVerified ? (
                            <span className="badge bg-success ms-2">Verified</span>
                          ) : (
                            <span className="badge bg-danger ms-2">Not Verified</span>
                          )}
                        </>
                      )}
                    </li>
                    <li className="list-group-item">
                      <strong>Display Name:</strong>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          value={displayName}
                          disabled
                        />
                      </div>
                    </li>
                  </ul>
                  <div className='text-center'>
                    To update the profile.{' '}
                    <NavLink to='/updateProfile'>Click here</NavLink>
                  </div>
                </div>
              </>)}
            {!completeProfile && (
              <>
                <ul className="list-group list-group-flush text-center">
                  <li className="list-group-item">
                    <strong>Email:</strong>
                    {isEditingEmail ? (
                      <div className="input-group input-group-sm">
                        <input
                          type="email"
                          className="form-control"
                          value={newEmail}
                          onChange={handleEmailChange}
                        />
                        <button className="btn btn-primary" onClick={handleEmailSave}>Save</button>
                      </div>
                    ) : (
                      <>
                        {email} <button className="btn btn-primary" onClick={handleEmailEdit}>Edit</button>
                        {isEmailVerified ? (
                          <span className="badge bg-success ms-2">Verified</span>
                        ) : (
                          <span className="badge bg-danger ms-2">Not Verified</span>
                        )}
                      </>
                    )}
                  </li>
                </ul>
                <div className='text-center'>
                  Your profile is incomplete.{' '}
                  <NavLink to='/updateProfile'>Complete now</NavLink>
                </div>
              </>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;