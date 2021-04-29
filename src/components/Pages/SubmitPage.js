import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

function SubmitPage({ value }) {
  return (
    <div className="container">
      <h2>Thank you for submitting your message!</h2>
      <p>
        Name: {value.lastname} {value.firstname}
      </p>
      <p>Email: {value.email}</p>
      <p>Your message:</p>
      <div id="sent-message">{value.message}</div>
      <Link to="/">
        <AiOutlineArrowLeft
          style={{
            color: "black",
            fontSize: "30px",
            padding: "9px",
            border: "1px solid gray",
            borderRadius: "50%",
            marginTop: "150px",
          }}
        />
      </Link>
    </div>
  );
}

export default SubmitPage;
