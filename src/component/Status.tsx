import React from "react";

type StatusProps = {
  status: "loading" | "success" | "error";
};

const Status = (props: StatusProps) => {
  let message;
  if (props.status === "loading") {
    message = "Loading...";
  } else if (props.status === "success") {
    message = "Data Fetched Successfully";
  } else if (props.status === "error") {
    message = "Error Fetching Data";
  }
  return (
    <div>
      <h2>status-{message}</h2>
      <h2>Data Fetched Successfully</h2>
      <h2>Error Fetching Data</h2>
    </div>
  );
};

export default Status;
