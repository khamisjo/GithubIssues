/*
    USAGE
    1- import IssueCard from "<PATH>/Card";
    2- Props:
      ##           Attribute              Description
      ## 1         userImg                URL/Path of user's GitHub profile pic
      ## 2         userName               Owner's GitHub username
      ## 3         title                  Issue title
      ## 4         id                     Issue id
      ## 5         state                  Issue state whether open or close
      ## 6         creationTime           Issue's time of created
      ## 7         updateTime             Description of the GitHub issue
      ## 8         body                   Description of the GitHub issue

    3-  Example :
       <IssueCard
            userImg={"myimage.jpg"}
            userName={"khamisjo"}
            title={"DatePicker package is deprecated"}
            id={"12345"}
            state={"Open"}
            creationTime={"July 12th, 2015"}
            updateTime={"June 16th, 2016"}
            body={"DatePicker package is deprecated and needs to be replaced for users to pick dates"}
          />
*/

import React from "react";
import Card from "react-bootstrap/Card";

export default class IssueCard extends React.Component {
  //Issue state color is green if it's open or red if closed
  stateColor = this.props.state === "open" ? "text-success" : "text-danger";
  render() {
    return (
      <div>
        <Card style={{ width: "35rem" }}>
          <Card.Title className={"text-black bg-light"}>
            {this.props.title}
          </Card.Title>
          <Card.Img
            variant="top"
            style={{ width: "8rem" }}
            src={this.props.userImg}
          />
          <Card.Body>
            <Card.Subtitle className="mb-2 text-primary">
              Username: {this.props.userName}
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 text-primary">
              Issue ID: {this.props.id}
            </Card.Subtitle>
            <Card.Subtitle className={this.stateColor}>
              {this.props.state}
            </Card.Subtitle>
          </Card.Body>
          <Card.Body>
            <Card.Text>{this.props.body}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              Created On: {this.props.creationTime}
            </small>
            <br />
            <small className="text-muted">
              Last Updated: {this.props.updateTime}
            </small>
            <br />
            <Card.Link href="/">Back to Issues</Card.Link>
          </Card.Footer>
        </Card>
      </div>
    );
  }
}
