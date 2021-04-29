import React, { useState } from "react";
import FormField from "./components/FormField";
import MessageField from "./components/MessageField";
import SubmitPage from "./components/Pages/SubmitPage";
import SendButton from "./components/SendButton";
import SentMessageNotification from "./components/SentMessageNotification";
import { BrowserRouter as Router, Route } from "react-router-dom";

//The code is a bit messy, I was experimenting with react routes a little bit just to get more comfortable and understand it better.
//I made a second page next to the main page becase I wanted to still show the "Message sent!" notification
//Basically I wanted to send a static information of the name,email and message to another page.
//If I sent the value directly than of course it would change when the input value changes,
// so I populated an object when the user presses SEND, with the values of the inputs

function App() {
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [value, setValue] = useState({});

  const hideMessage = () => {
    setHidden(!hidden);
  };

  const checkFname = (e) => {
    setFname(e.target.value);
    setClicked(false);
  };

  const checkLname = (e) => {
    setLname(e.target.value);
    setClicked(false);
  };

  const checkEmail = (e) => {
    setEmail(e.target.value);
    setClicked(false);
  };

  const checkMessage = (e) => {
    setMessage(e.target.value);
    setClicked(false);
  };

  const onClick = () => {
    setClicked(true);
    setHidden(true);

    setValue({
      firstname: fname,
      lastname: lname,
      email: email,
      message: message,
    });
  };

  //Had to press SEND 2 times for the second page to show, that is why I put onMouseOver too.
  //The MOUSEOVER populated the object and then the SEND (onClick) fulfilled the condition for the conditional route
  //Surely there are better ways but it was hard to make the information static in the second page so this is the best I could come up with
  // -->

  const onMouseOver = () => {
    setValue({
      firstname: fname,
      lastname: lname,
      email: email,
      message: message,
    });
  };

  return (
    <Router>
      <div className="container">
        <FormField
          title="FIRST NAME"
          className={!fname && clicked ? "error" : ""}
          onChange={checkFname}
        />
        <FormField
          title="LAST NAME"
          className={!lname && clicked ? "error" : ""}
          onChange={checkLname}
        />
        <FormField
          title="EMAIL"
          className={!email && clicked ? "error" : ""}
          onChange={checkEmail}
        />
        <MessageField
          title="MESSAGE"
          className={!message && clicked ? "error" : ""}
          onChange={checkMessage}
        />
        <SendButton
          onClick={onClick}
          object={value}
          onMouseOver={onMouseOver}
        />

        {hidden && clicked && fname && lname && email && message && (
          <SentMessageNotification hideMessage={hideMessage} />
        )}
      </div>
      <Route
        path="/submitted"
        render={(props) => (
          <SubmitPage
            {...props}
            value={value}
            // fname={fname}
            // lname={lname}
            // email={email}
            // message={message}
          />
        )}
      />
    </Router>
  );
}

export default App;
