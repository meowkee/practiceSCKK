import { observer } from "mobx-react-lite";
import React from "react";
import { Context } from "../index";
import { Table } from "react-bootstrap"; 
import { useTranslation } from "react-i18next";

const InfoTable = observer(() => {
  const { passinway } = React.useContext(Context);
  const { t, i18n } = useTranslation();
  const owner = passinway.owners.find((owner) => owner.OW_ID == passinway.events[0].EV_OW_ID);
  const jobdegree = passinway.jobdegrees.find((jobdegree) => jobdegree.JD_ID == owner.OW_JD_ID);
  const worksite = passinway.worksites.find((worksite) => worksite.WS_ID == owner.OW_WS_ID);
  const subdivision = passinway.subdivisions.find((subdivision) => subdivision.SDV_ID == owner.OW_SDV_ID);

  return (
    <Table>
      <tbody>
        <tr>
          <th>{t("countactions")}</th>
          <td>{passinway.events.length}</td>
        </tr>
        <tr>
          <th>{t("jobdegree")}</th>
          <td>{jobdegree.JD_FULLNAME}</td>
        </tr>
        <tr>
          <th>{t("worksite")}</th>
          <td>{worksite.WS_FULLNAME}</td>
        </tr>
        {subdivision !== undefined && (
          <tr>
            <th>{t("subdivision")}</th>
            <td>{subdivision.SDV_NAME}</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
});

export default InfoTable;
