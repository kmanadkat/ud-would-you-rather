import React from 'react'

function UserProfile(props) {
  const {avatarURL, name, questions, answers} = props;
  return (
    <div className="col-md-3 border-right">
      <div className="profile-wrapper d-flex align-items-center">
        <img src={avatarURL} height="64" className="rounded shadow-sm" alt="User Profile"/>
        <div className="profile-info ml-3">
          <h4 className="name">{name}</h4>
        </div>
      </div>
      <p className="mb-0 mt-3">Polls Answered : <span className="font-weight-bold">{answers}</span></p>
      <p>Polls Asked : <span className="font-weight-bold">{questions}</span></p>
    </div>
  );
}

export default UserProfile
