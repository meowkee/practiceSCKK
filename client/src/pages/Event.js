import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SideBar from "../components/SideBar";
import EventList from "../components/EventList";
import { Context } from "../index";
import { observer } from "mobx-react-lite";

const Event = observer(() => {
  const { passinway } = React.useContext(Context);

  return (
    <Container>
      <Row>
        <Col md={3}>
          <SideBar />
        </Col>
        <Col md={9}>
          <EventList />
        </Col>
      </Row>
    </Container>
  );
});

export default Event;
