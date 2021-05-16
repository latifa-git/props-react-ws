import React from "react";


const Profile = ({ myelementProps, children }) => {
  const handleClick = (name) => {
    alert(`the name of the profile ${name}`)
}
  return (
    <div>
      <h1> Name:{myelementProps.fullName}</h1>

      {children}
      <h6>
        hello my name is {myelementProps.fullName} i am a{" "}
        {myelementProps.profession} in ISIM gabes , I am so glad to study
        embedded systems or for short {myelementProps.bio}
      </h6>
      <button onClick={() => handleClick(myelementProps.fullName)}> button</button>
    </div>
  );
};

export default Profile;
