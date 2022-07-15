import React from "react";
import "./mainbody.css";

const Intro = () => (
  <div>
    <div class="parent">
      <img class="image1" alt="background" src="background.jpeg" />
      <img class="image2" src="face.jpeg" alt="s" />
    </div>
    <div className="d1">
      <table>
        <tr>
          <th>Name</th>
          <td>Iris</td>
        </tr>
        <tr>
          <th>Email</th>
          <td>xyz@mail.in</td>
        </tr>
        <tr>
          <th>Phone</th>
          <td>9389287783</td>
        </tr>
      </table>
    </div>
  </div>
);

const Message = () => (
  <div>
    {" "}
    <div className="formWrapper">
      <h6> Send me a Message</h6>
      <label>
        <input
          style={{ height: "40px" }}
          name="subject"
          placeholder="Subject...."
        ></input>
      </label>
      <label>
        <p> </p>
        <input
          style={{ height: "140px" }}
          name="message"
          placeholder="Message...."
        ></input>
      </label>
      <p></p>
      <button>Send</button>
    </div>
  </div>
);
const Locate = () => (
  <div>
    <div className="locate">
      <h6> Or meet me at the office </h6>
      <img src="map.png" alt="map" />
      <p>
        {" "}
        LAKE VIEW <br></br>
        1st Soin Road
        <br></br>
        Nainital{" "}
      </p>
    </div>
  </div>
);

export default function Mainbody() {
  return (
    <div className="userinfo">
      <Intro />
      <Message />
      <Locate />
    </div>
  );
}
