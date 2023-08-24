import { useState } from "react";
import React from "react";
import { Container, Button, Modal } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  fetchEvents,
  fetchReaders,
  fetchOwners,
  fetchSubdivisions,
  fetchWorksites,
  fetchJobdegrees,
} from "../http/passInWayAPI";
import { Context } from "../index";
import { useTranslation } from "react-i18next";


const SideBar = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [tabNum, setTabNum] = useState("");
  const { passinway } = React.useContext(Context);
  const [showModalError, setShowModalError] = useState(false);
  const { t, i18n } = useTranslation();

  const openModalError = () => {
    setShowModalError(true);
  };

  const closeModalError = () => {
    setShowModalError(false);
  };

  const handleShow = async () => {
    const selectedStartDate = startDate
      ? startDate.toLocaleDateString("ru-RU")
      : "";
    const selectedEndDate = endDate ? endDate.toLocaleDateString("ru-RU") : "";
  
    await fetchOwners().then((data) => passinway.setOwners(data));
  
    const owner = passinway.owners.find((owner) => owner.OW_IDENT2 === tabNum);
  
    if (!owner) {
      await openModalError();
      return;
    }
  
    await fetchEvents(selectedStartDate, selectedEndDate, owner.OW_ID).then(
      (data) => passinway.setEvents(data)
    );
    await fetchReaders().then((data) => passinway.setReaders(data));
    await fetchSubdivisions().then((data) => passinway.setSubdivisions(data));
    await fetchWorksites().then((data) => passinway.setWorksites(data));
    await fetchJobdegrees().then((data) => passinway.setJobdegrees(data));
  };

  return (
    <Container className="mt-4">
      <div>{t("chooseperiod")}</div>
      <DatePicker
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        dateFormat={"yyyy/MM/dd"}
        onChange={(update) => {
          setDateRange(update);
        }}
        onKeyDown={(e) => {
          e.preventDefault();
        }}
      />
      <div className="mt-2">{t("inputTimeSheet")}</div>
      <input
        pattern="[0-9]*"
        value={tabNum}
        onChange={(e) =>
          setTabNum((v) => (e.target.validity.valid ? e.target.value : v))
        }
      />
      <br />
      <Button className="mt-3" variant="outline-success" onClick={handleShow}>
        {t("show")}
      </Button>

      <Modal show={showModalError} onHide={closeModalError}>
        <Modal.Header closeButton>
          <Modal.Title>{t("error")}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center font-weight-bold">
          {t("checkInputData")}
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default SideBar;
