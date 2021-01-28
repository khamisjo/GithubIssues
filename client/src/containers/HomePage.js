import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import PaginationFactory from "react-bootstrap-table2-paginator";

const HomePage = (props, { navigation }) => {
  // for navigation
  let history = useHistory();

  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(false);

  const tableColumns = [
    { dataField: "id", text: "Issue ID" },
    { dataField: "title", text: "Issue Title" },
    { dataField: "state", text: "Issue State" },
  ];

  //Fetch data from API
  useEffect(() => {
    try {
      setLoading(true);
      axios
        .get(`https://api.github.com/repos/walmartlabs/thorax/issues`)
        .then((res) => {
          setIssues(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);
  const rowEvents = {
    onClick: (e, row) => {
      history.push("/details", {
        issueInfo: row,
      });
    },
  };
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="pageContainer">
      <div className="elementsContainer">
        <BootstrapTable
          keyField="id"
          data={issues}
          columns={tableColumns}
          pagination={PaginationFactory()}
          rowEvents={rowEvents}
        />
      </div>
    </div>
  );
};
export default HomePage;
