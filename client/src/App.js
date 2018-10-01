import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="site-wrapper">
        <div className="site-wrapper-inner">
        <div className="cover-container">

            <header class="masthead clearfix">
            <div class="inner">
                <h3 class="masthead-brand">SPIN</h3>
                <nav class="nav nav-masthead">
                <a class="nav-link active" href="#">Home</a>
                <a class="nav-link" href="#">Features</a>
                <a class="nav-link" href="#">Contact</a>
                </nav>
            </div>
            </header>


            <main role="main" className="inner cover">
            <h1 className="cover-heading">SPIN</h1>
            <p className="lead">SPIN is a simple realtime chat widget powered by Pusher.</p>
            <p className="lead">
                <a href="#" class="btn btn-lg btn-secondary">GO for a SPIN?</a>
            </p>
            </main>

            <footer className="mastfoot">
            </footer>

            </div>
        </div>
      </div>


        <div className="chatbubble">
        <div className="unexpanded">
            <div className="title">Chat with Support</div>
        </div>
 </div>

        <div class="expanded chat-window">
        <div class="login-screen container">
            <form id="loginScreenForm">
                <div class="form-group">
                <input type="text" class="form-control" id="fullname" placeholder="Name_" required />
                </div>
                <div class="form-group">
                <input type="email" class="form-control" id="email" placeholder="Email Address_" required />
                </div>
                <button type="submit" class="btn btn-block btn-primary">Start Chat</button>
            </form>
          </div>
        </div>

 </div>
    );
  }
}

export default App;
