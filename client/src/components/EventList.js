import React from "react";
import { observer } from "mobx-react-lite";
import { Table } from "react-bootstrap";
import { Context } from "../index";
import EventItem from "./EventItem";
import { useTranslation } from "react-i18next";

const EventList = observer(() => {
  const { passinway } = React.useContext(Context);  
  
  const { t, i18n } = useTranslation();

  return (
    <Table bordered hover className="table-auto-width mt-4">
      <thead>
        <tr>
          <th>{t("date")}</th>
          <th>{t("action")}</th>
          <th>{t("timesheetnumber")}</th>
          <th>{t("surname")}</th>
          <th>{t("firstname")}</th>
          <th>{t("middlename")}</th>
        </tr>
      </thead>
      <tbody>
        {passinway.events.map((event) => (
          <EventItem key={event.EV_ID} passinway={event} readers={passinway.readers} owners={passinway.owners}/>
        ))}
      </tbody>
    </Table>
  );
});

export default EventList;
