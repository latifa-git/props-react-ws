import React from 'react';
import ReactDOM from 'react-dom';

class Profile extends React.Component {
  render() {
    return <h2>I am a {this.props.fullName}!</h2>
  }
}

const myelement = <Profile fullName ="latifa"  bio="mpse"  profession="studiant" />;

const childd = props => <img src="/malina.jpg" alt="malina" {...props.children} />;

   class handleName extends React.Component {
    trunName() {
      alert("latifa");
    }
    render() {
      return (
        <button onClick={this.turnName}>return name</button>
      );
    }
  }
  