import React from "react";
import "../styles/pageStyle.css";
import dateFormat from "dateformat";
import IssueCard from "../components/Card";

const IssuePage = (props) => {
  const issueInfo = props.location.state.issueInfo;
  return (
    <div>
      <div className="pageContainer">
        <div className="elementsContainer">
          <IssueCard
            userImg={issueInfo["user"]["avatar_url"]}
            userName={issueInfo["user"]["login"]}
            title={issueInfo["title"]}
            id={issueInfo["id"]}
            state={issueInfo["state"]}
            creationTime={dateFormat(issueInfo["created_at"], "mmmm dS, yyyy")}
            updateTime={dateFormat(issueInfo["updated_at"], "mmmm dS, yyyy")}
            body={issueInfo["body"]}
          />
        </div>
      </div>
    </div>
  );
};

export default IssuePage;
