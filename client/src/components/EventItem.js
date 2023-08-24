import React from "react";

const EventItem = ({ passinway, readers, owners }) => {
  let readerName, lastname, firstname, middlename;

  const reader = readers.find((reader) => reader.RD_ID == passinway.EV_OBJID);
  if (reader) {
    readerName = reader.RD_NAME;
  }

  const owner = owners.find((owner) => owner.OW_ID == passinway.EV_OW_ID);
  if (owner) {
    lastname = owner.OW_LASTNAME;
    firstname = owner.OW_FIRSTNAME;
    middlename = owner.OW_MIDDLENAME;
  }

  return (
    <tr>
      <td>{passinway.EV_DATE}</td>
      <td>{readerName}</td>
      <td>{owner.OW_IDENT2}</td>
      <td>{lastname}</td>
      <td>{firstname}</td>
      <td>{middlename}</td>
    </tr>
  );
};

export default EventItem;
