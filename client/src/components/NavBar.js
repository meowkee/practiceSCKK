import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import InfoTable from "./InfoTable";
import { useTranslation } from "react-i18next";

const NavBar = observer(() => {
  const { passinway } = React.useContext(Context);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            {passinway.events.length !== 0 && (
              <Button variant="outline-info" onClick={openModal}>
                {t("statistics")}
              </Button>
            )}
          </Nav>
          <Nav>
            <Nav.Link onClick={() => changeLanguage("ru")}>русский</Nav.Link>
            <Nav.Link onClick={() => changeLanguage("en")}>english</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>{t("statistics")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InfoTable />
        </Modal.Body>
      </Modal>
    </>
  );
});

export default NavBar;
