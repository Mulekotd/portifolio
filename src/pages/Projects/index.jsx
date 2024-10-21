import { Container, Row, Col } from "react-bootstrap";
import { DataCard } from "/src/components/DataCard";
import { container } from "./styles";

import { sites } from "/src/utils";

export default function Projects() {
  return (
    <Container
      as="main"
      id="canvas_container"
      className="p-4"
      style={container}
    >
      <Row className="g-4">
        {sites.map((site) => (
          <Col key={crypto.randomUUID()} lg={4} md={6} sm={12}>
            <DataCard
              alt={site.alt}
              url={site.url}
              src={site.src}
              title={site.title}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
