import {
  Button,
  Card,
  Container,
  Image,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { HiBadgeCheck } from "react-icons/hi";
import {
  profile,
  profileImage,
  title,
  container,
  content,
  skillsContainer,
  image,
  devContainer,
  devContent,
  button,
} from "./styles";

import {
  getAge,
  greetingMessage,
  profilePicture,
  etc,
  etc1,
  etc2,
  vitec,
  vitec1,
  vitec2,
} from "/src/utils";
import { useMediaQuery } from "react-responsive";
import SkillsCard from "./components/SkillsCard";

export default function Home() {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 576px)" });

  return (
    <Container
      as="main"
      className="d-flex flex-column gap-5 p-4"
      id="canvas_container"
    >
      <section className="d-flex flex-column gap-4">
        <div className="container bd-highlight d-flex flex-column flex-md-row align-items-center gap-4">
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ ...profile, height: isSmallScreen ? "180px" : "160px" }}
          >
            <Image alt="perfil" src={profilePicture} style={profileImage} />
          </div>
          <Card className="d-flex flex-column p-4" style={content}>
            <h2 style={title}>Sobre Mim</h2>
            <p>
              {greetingMessage()}, eu me chamo João Pedro Silverio Gama tenho{" "}
              {getAge()} anos e possuo experiência em Desenvolvimento Web
              Full-Stack.
            </p>
            <h2 style={title}>Resumo</h2>
            <p className="mb-0">
              Natural de São Gonçalo sempre fui interessado na área de TI. Para
              alcança os meus objetivos, em 2020 ingressei no Instituto Federal
              do Rio de Janeiro - Campus Niterói, onde finalizei o curso Técnico
              em Informática no começo do ano de 2023.
            </p>
          </Card>
        </div>
        <div
          className="container d-flex flex-row gap-4"
          style={skillsContainer}
        >
          <SkillsCard
            title="Soft Skills"
            skills={[
              { name: "Sei lidar com mudanças repentinas de rotina" },
              { name: "Vontade de aprender mais" },
              { name: "Trabalho bem em equipe" },
              { name: "Boa comunicação" },
            ]}
          />
          <SkillsCard
            title="Hard Skills"
            skills={[
              { name: "NoSQL", subSkills: ["Firebase"] },
              {
                name: "SQL",
                subSkills: ["PostgreSQL", "MySQL"],
              },
              { name: "React.js", subSkills: ["Material UI", "Bootstrap"] },
              { name: "Node.js", subSkills: ["Express", "Axios"] },
              { name: "Docker", subSkills: ["Docker-Compose"] },
            ]}
          />
        </div>
      </section>
      <Card style={devContainer} className="container d-flex flex-column p-4">
        <Card className="d-flex flex-column" style={container}>
          <p style={title}>Desenvolvimento</p>
          <div className="d-flex flex-row align-items-start gap-2">
            <h5>Semana de Educação, Tecnologia, Ciência e Cultura</h5>
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip id="tooltip">Baixar Certificação</Tooltip>}
            >
              <Button href={etc} download style={button}>
                <HiBadgeCheck color="green" size={18} />
              </Button>
            </OverlayTrigger>
          </div>
          <p className="m-0">
            Dentro do IFRJ, participei de eventos que moldaram de diversas
            maneiras meu caráter sendo um desses a semana ETC onde desempenhei o
            papel de palestrante e monitor de uma sala temática, aberta ao
            público externo, de jogos desenvolvidos no âmbito da instituição.
          </p>
          <div
            className="container d-flex flex-start justify-content-between my-4 p-0"
            style={devContent}
          >
            <Image alt="etc1" src={etc1} style={image} />
            <Image alt="etc2" src={etc2} style={image} />
          </div>
        </Card>
        <Card className="d-flex flex-column" style={container}>
          <div className="d-flex flex-row align-items-start gap-2">
            <h5>#Mostra IFRJ</h5>
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip id="tooltip">Baixar Certificação</Tooltip>}
            >
              <Button href={vitec} download style={button}>
                <HiBadgeCheck color="green" size={18} />
              </Button>
            </OverlayTrigger>
          </div>
          <p className="m-0">
            Além do acontecimento citado anteriormente, participei também da
            apresentação do projeto de extensão Vitrines Tecnológicas, cujo
            atuei durante 2022. Essa é uma plataforma web contendo um portfólio
            de produtos e serviços panteados resultantes de projetos de pesquisa
            e inovação. Essa Vitrine visa promover a visibilidade perante o
            público interno e externo da instituição, bem como obter parcerias e
            financiamentos.
          </p>
          <div
            className="container d-flex flex-start justify-content-between mt-4 p-0"
            style={devContent}
          >
            <Image alt="vitec1" src={vitec1} style={image} />
            <Image alt="vitec2" src={vitec2} style={image} />
          </div>
        </Card>
      </Card>
    </Container>
  );
}
