import React, { useEffect, useState } from "react";
import "./index.css";
import avatar1 from "./images/avatar1.png";
import avatar2 from "./images/avatar2.png";
import avatar3 from "./images/avatar3.png";
import avatar4 from "./images/avatar4.png";
import avatar5 from "./images/avatar5.png";
import avatar6 from "./images/avatar6.png";
import avatar7 from "./images/avatar7.png";
import avatar8 from "./images/avatar8.png";

const images = [
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
  avatar7,
  avatar8,
];

const EmployForm = ({ onFormSubmit, editEmpInfo }) => {
  const [empinfo, setempinfo] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    role: "",
    phoneNumber: "",
    address: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
  });

  useEffect(() => {
    setempinfo(editEmpInfo);
  }, [editEmpInfo]);

  const onfieldChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setempinfo((currState) => {
      return {
        ...currState,
        [fieldName]: fieldValue,
      };
    });

    console.log(e.target);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    console.log("child", empinfo);
    if (editEmpInfo === -1) {
      onFormSubmit({
        ...empinfo,
        picture: images[Math.floor(Math.random() * images.length)],
      });
    } else {
      onFormSubmit({ ...editEmpInfo, ...empinfo });
    }

    setempinfo({
      firstName: "",
      lastName: "",
      companyName: "",
      role: "",
      phoneNumber: "",
      address: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>
          <p> Employee List</p>
          <input
            placeholder="First Name"
            type="text"
            name="firstName"
            value={empinfo.firstName}
            onChange={(e) => {
              onfieldChange(e);
            }}
          ></input>
          <input
            placeholder="Last Name"
            type="text"
            name="lastName"
            value={empinfo.lastName}
            onChange={(e) => {
              onfieldChange(e);
            }}
          ></input>
          <input
            placeholder="Company Name"
            type="text"
            name="companyName"
            value={empinfo.companyName}
            onChange={(e) => {
              onfieldChange(e);
            }}
          ></input>
          <input
            placeholder="Role"
            type="text"
            name="role"
            value={empinfo.role}
            onChange={(e) => {
              onfieldChange(e);
            }}
          ></input>
          <input
            placeholder="Address"
            type="text"
            name="address"
            value={empinfo.address}
            onChange={(e) => {
              onfieldChange(e);
            }}
          ></input>
          <input
            placeholder="Phone number"
            type="text"
            name="phoneNumber"
            value={empinfo.phoneNumber}
            onChange={(e) => {
              onfieldChange(e);
            }}
          ></input>
          <input
            placeholder="Address1"
            type="text"
            name="address1"
            value={empinfo.address1}
            onChange={(e) => {
              onfieldChange(e);
            }}
          ></input>
          <input
            placeholder="Address2"
            type="text"
            name="address2"
            value={empinfo.address2}
            onChange={(e) => {
              onfieldChange(e);
            }}
          ></input>
          <input
            placeholder="city"
            type="text"
            name="city"
            value={empinfo.city}
            onChange={(e) => {
              onfieldChange(e);
            }}
          ></input>
          <input
            placeholder="state"
            type="text"
            name="state"
            value={empinfo.state}
            onChange={(e) => {
              onfieldChange(e);
            }}
          ></input>
          <input
          required= {true}
            placeholder="zip code"
            type="text"
            name="zip"
            value={empinfo.zip}
            onChange={(e) => {
              onfieldChange(e);
            }}
          ></input>

          <button type="submit"> submit</button>
        </label>
      </form>
    </div>
  );
};

export default EmployForm;
