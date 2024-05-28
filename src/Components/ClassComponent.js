import React from "react";

class WelcomeStudents extends React.Component {
    render() {
        return (
        <div>
        <h2>Hi this is {this.props.name}.</h2>
        <p>I am a {this.props.sports} player.{this.props.children}</p>
        </div>
    )}
}

export default WelcomeStudents;