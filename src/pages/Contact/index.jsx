import { Card, Container } from "react-bootstrap";
import { AiFillInstagram } from "react-icons/ai";
import { BsLinkedin, BsGithub } from "react-icons/bs";

import { card, container, link, title } from "./styles";

export default function Contact() {
  return (
    <Container
      as="main"
      id="canvas_container"
      className="p-4"
      style={container}
    >
      <Card style={card}>
        <p style={title}>Redes Sociais</p>
        <div className="d-flex justify-content-center gap-3">
          <a
            href="https://www.instagram.com/mulekotd/"
            className="d-flex align-items-center gap-1"
            style={link}
            aria-label="Siga-me no Instagram"
          >
            <AiFillInstagram /> Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/mulekotd/"
            className="d-flex align-items-center gap-1"
            style={link}
            aria-label="Conecte-se comigo no LinkedIn"
          >
            <BsLinkedin /> LinkedIn
          </a>
          <a
            href="https://github.com/Mulekotd"
            className="d-flex align-items-center gap-1"
            style={link}
            aria-label="Veja meu GitHub"
          >
            <BsGithub /> GitHub
          </a>
        </div>
        <p className="mt-3" style={title}>
          Telefone
        </p>
        <span>
          <em>Celular:</em> (21) 97138-9552
        </span>
        <span>
          <em>Fixo:</em> (21) 3254-3592
        </span>
      </Card>
    </Container>
  );
}
