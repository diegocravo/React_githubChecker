import './App.css';
import React from 'react';

class App extends React.Component {

  state = {
    git: [],
    username: ""
  }

  handler(e) {
    this.setState({
      username: e.target.value
    })
    console.log(this.state.username);
  }

  findUser(e) {
    e.preventDefault();
    fetch(`https://api.github.com/users/${this.state.username}`)
    .then(res => res.json())
    .then(res => {
      this.setState({
        git: res
      })
    })
    console.log(this.state.git);
  }

  render() {
    return (
      <div className=" container ">
        {/* title and input */}
        <h1 className="d-flex justify-content-center m-4">GitHub Checker</h1>
        <div className="d-flex justify-content-center m-2">
          <div class="col col-lg-4 d-flex justify-content-center">  
            <input
              class="form-control"
              name="github"
              type="text"
              placeholder="Github username"
              onChange={this.handler.bind(this)}
            >
            </input>
          </div>
        </div>
        {/* button */}
        <div className="d-flex justify-content-center m-2">
          <div class="col col-lg-4 d-flex justify-content-center">
            <button
              type="button" 
              class="btn btn-primary"
              onClick={this.findUser.bind(this)}
            >
            Find User
            </button>
          </div>
        </div>
        {/* search result for user found and not found*/}
        { this.state.git.id &&
          <div class="card card-header p-2 my-4">
            <div className="d-flex justify-content-center">
              <div className="justify-content-center">
                <img 
                  class="rounded-circle"
                  src={this.state.git.avatar_url} 
                  alt="github avatar" 
                  width="130" 
                  height="130" 
                />
              </div>
            </div>
            <div className="d-flex justify-content-left">
              <div className="justify-content-center">
                <h3><strong>Username:</strong></h3>
                <h3>{this.state.git.login}</h3>
                <h3><strong>id:</strong></h3>
                <h3>{this.state.git.id}</h3>
                <h3><strong>Bio:</strong></h3>
                <h3>{this.state.git.bio}</h3>
                <h3><strong>Company:</strong></h3>
                <h3>{this.state.git.company}</h3>
                <h3><strong>Location:</strong></h3>
                <h3>{this.state.git.location}</h3>
              </div>
            </div>
          </div>
        }
        { this.state.git.message && 
          <div class="card card-header p-2 my-4">
            <div className="d-flex justify-content-center my-4">
              <h3 className="justify-content-center">User Not Found</h3>
            </div>
          </div>
        }

      </div>
    )
  }
}

export default App;
