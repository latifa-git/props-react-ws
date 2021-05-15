import React from "react";


const Profile = ({ myelementProps, children }) => {
  return (
    <div>
      <h1> Name:{myelementProps.fullName}</h1>
      
      {children}
      <h6>hello my name is {myelementProps.fullName} i am a {myelementProps.profession
     } in ISIM gabes , I am so glad to study embedded systems or for short {myelementProps.bio}
      </h6>
   
    </div>
  );

};

  


export default Profile;
