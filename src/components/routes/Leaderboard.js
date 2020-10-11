import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';

class Leaderboard extends React.Component{
  render() {
    if(this.props.loaded !== true){
      return <p className="text-center">Loading...</p>
    }
    if(this.props.authedUser === null){
      return <Redirect to={{pathname:"/login", state: {redirect:"/leaderboard"}}} />;
    }
    const {users, authedUser} = this.props;
    return (
      <section className="py-5">
        <div className="container mt-4">
          <h3>Leaderboard</h3>
          <div className="d-flex justify-content-center mt-4">
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th className="py-3" scope="col">Rank</th>
                  <th className="py-3" scope="col">Picture</th>
                  <th className="py-3" scope="col">Name</th>
                  <th className="py-3" scope="col">Questions Asked</th>
                  <th className="py-3" scope="col">Questions Answered</th>
                  <th className="py-3" scope="col">Score</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u, index) => (
                  <tr key={u.id} className={`${u.id === authedUser ? 'bg-dark text-light' : 'text-dark'}`}>
                    <th className="py-3" scope="row">{index + 1}</th>
                    <td className="py-3">
                      <img src={u.avatarURL} height={36} alt={u.name} />
                    </td>
                    <td className="py-3">{u.name}</td>
                    <td className="py-3">{u.questions.length}</td>
                    <td className="py-3">{Object.keys(u.answers).length}</td>
                    <td className="py-3">{Object.keys(u.answers).length + u.questions.length}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = ({users, authedUser}) => {
  return {
    loaded: true,
    users: Object.values(users).sort((u1, u2) =>{
      return (Object.keys(u2.answers).length + u2.questions.length) - (Object.keys(u1.answers).length + u1.questions.length) }),
    authedUser
  }
}

export default connect(mapStateToProps)(Leaderboard);