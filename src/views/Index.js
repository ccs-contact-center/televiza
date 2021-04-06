import React, { Component } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import ReactFitText from "react-fittext";
import {
  Container,
  Row,
  Col,
} from "reactstrap";
import "../index.css";
import logo from "../assets/img/brand/logo.png";
import { BarChart1, BarChart2, BarChart3, BarChart4, BarChart5, BarChart6, BarChart7, BarChart8, BarChart9 } from "./Components/Graphics"
import {
  Tabla1,
  Tabla2,
  Tabla3,
  Tabla4,
  Tabla5,
  Tabla6,
  Tabla7,
  Tabla8,
  Tabla9,
  Tabla10,
} from "./Components/Tablas";


class Index extends Component {
  render() {
    return (
      <div id="slideshare_root">
        <div id="bg"></div>
        <div id="bgnoise"></div>

        <ReactFullpage
          licenseKey={"FF3E03E0-2607429E-8207D2C5-8D8301B1"}
          scrollingSpeed={500} /* Options here */

          verticalCentered={false}
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <div className="section">
                  <div
                    style={{
                      padding: "3%",
                      textAlign: "center",
                      width: "50vw"
                    }}
                  >
                    <img
                      src={logo}
                      onClick={() =>
                        document.getElementById("root").requestFullscreen
                          ? document.getElementById("root").requestFullscreen()
                          : null
                      }
                      width={400}
                      alt="logo"
                      className="img-fluid"
                      style={{
                        filter: "drop-shadow(2px 4px 6px rgba(0,0,0,0.5))"
                      }}
                    />


                    <ReactFitText>

                      <h1 className="transparent">RESULTADOS</h1>
                    </ReactFitText>
                    <ReactFitText>
                      <h1 className="transparent">MENSUAL</h1>
                    </ReactFitText>
                    <ReactFitText>
                      <h1 className="transparent">ENERO</h1>
                    </ReactFitText>
                  </div>
                </div>

                <div className="section">
                  <Container>
                    <Row>
                      <Col xs="12">
                        <h2 className="border border-bottom border-danger"><span>FEBRERO</span> <span>KPI´S</span></h2>
                      </Col>
                      <Col xs="6">
                        <Tabla1 />
                      </Col>
                      <Col xs="6">
                        <Tabla2 />
                      </Col>
                    </Row>
                  </Container>
                </div>


                <div className="section">
                  <Container>
                    <Row>
                      <Col xs="12">
                        <h2 className="border border-bottom border-danger"><span>Resumen Atención</span></h2>
                        <Tabla3 />
                      </Col>
                    </Row>
                  </Container>
                </div>

                <div className="section">
                  <Container>
                    <Row>

                      <Col xs="12">
                        <h2 className="border border-bottom border-danger"><span>Resumen Atención</span></h2>

                        <BarChart1 />
                      </Col>
                      <Col xs="12">
                        <ul className="text-justify">
                          <li>En ausencia de think y sin tiempos de respuesta reales, los clientes re- llamaban cada semana.</li>
                          <li>Disminuyeron las ventas al no tener definido el proceso para captura de ordenes nuevas pertenecientes a clientes existentes.</li>
                          <li>AHT bajo debido a no poder atender a clientes existentes.</li>
                        </ul>
                      </Col>
                    </Row>
                  </Container>
                </div>

                <div className="section">
                  <Container>
                    <Row>
                      <Col xs="12">
                        <h2 className="border border-bottom border-danger"><span>Resumen Ventas nuevas</span></h2>
                      </Col>
                      <Col xs="12">
                        <Tabla4 />
                      </Col>
                    </Row>
                  </Container>
                </div>

                <div className="section">
                  <Container>
                    <Row>
                      <Col xs="12">
                        <h2 className="border border-bottom border-danger"><span>Resumen Ventas nuevas</span></h2>
                        <BarChart2 />
                      </Col>
                      <Col xs="12">
                        <ul class="text-justify">
                          <li>Incremento de llamadas por promos nuevas. </li>
                          <li>Incremento de ventas por spots y mailing.</li>
                          <li>Disminución de AHT por cobertura sobre staff en desbordes</li>
                        </ul>
                      </Col>
                    </Row>
                  </Container>
                </div>

                <div className="section">
                  <Container>
                    <Row>
                      <Col xs="12">
                        <h2 className="border border-bottom border-danger"><span>Generales</span></h2>
                      </Col>
                      <Col xs="6">
                        <BarChart3 />
                      </Col>
                      <Col xs="6">
                        <BarChart4 />
                      </Col>
                      <Col xs="12">
                        <p>ATC: las llamadas se incrementaron ya que al mencionar que no hay sistema, los usuarios llamaban en repetidas ocasiones.
                        Clientes Nuevos: incremento de llamadas por promos y menciones y/o spots</p>
                      </Col>
                    </Row>
                  </Container>
                </div>

                <div className="section">
                  <Container>
                    <Row>
                      <Col xs="12">
                        <h2 className="border border-bottom border-danger"><span>Tipificación</span></h2>
                      </Col>
                      <Col xs="6">
                        <Tabla5 />
                      </Col>
                      <Col xs="6">
                        <Tabla6 />
                      </Col>
                    </Row>
                  </Container>
                </div>

                <div className="section">
                  <Container>
                    <Row>
                      <Col xs="12">
                        <h2 className="border border-bottom border-danger"><span>Tipificación</span></h2>
                      </Col>
                      <Col xs="6"><BarChart5 /></Col>
                      <Col xs="6"><BarChart6 /></Col>
                    </Row>
                  </Container>
                </div>

                <div className="section">
                  <Container>
                    <Row>
                      <Col xs="12">
                        <h2 className="border border-bottom border-danger"><span>Capacitación</span></h2>
                      </Col>
                      <Col xs="12">
                        <BarChart7 />
                      </Col>
                    </Row>
                  </Container>
                </div>

                <div className="section">
                  <Container>
                    <Row>
                      <Col xs="12">
                        <h2 className="border border-bottom border-danger"><span>Capacitación</span></h2>
                      </Col>
                      <Col xs="12">
                        <Tabla7 />

                      </Col>
                    </Row>
                  </Container>
                </div>

                <div className="section">
                  <Container>
                    <Row>
                      <Col xs="12">
                        <h2 className="border border-bottom border-danger"><span>Calidad</span></h2>
                      </Col>
                      <Col xs="6"><BarChart8 /></Col>
                      <Col xs="6"><BarChart9 /></Col>
                    </Row>
                  </Container>
                </div>

                <div className="section">
                  <Container>
                    <Row>
                      <Col xs="12">
                        <h2 className="border border-bottom border-danger"><span>Calidad</span></h2>
                      </Col>
                      <Col xs="12">
                        <Tabla8 />

                        <p className="text-left"><b>Con un promedio ABC de:</b></p>
                        <ul>
                          <li>93.02%</li>
                        </ul>
                        <p className="text-left"><b>Clasificando en nivel:</b></p>
                        <ul>
                          <li>B</li>
                        </ul>
                      </Col>
                    </Row>
                  </Container>
                </div>

                <div className="section">
                  <Container>
                    <Row>
                      <Col xs="12">
                        <h2 className="border border-bottom border-danger"><span>Calidad</span></h2>
                      </Col>
                      <Col xs="6">
                        <Tabla9 />

                      </Col>
                      <Col xs="6">
                        <Tabla10 />

                      </Col>
                    </Row>
                  </Container>
                </div>
                <div className="section">
                  <Container>
                    <Row>
                      <Col xs="12">
                        <h2>
                          <b>Gracias</b> <br />
                          <a href="www.ccscontactcenter.com">www.ccscontactcenter.com</a><br />
                    CDMX<br />
                    Amores 321 1° piso<br />
                    Col. Del Valle<br />
                    C.P. 03100 <br />
                    Tel. +52 (55) 5091.9160
                    <br />
                        </h2>
                      </Col>
                    </Row>
                  </Container>
                </div>
               
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </div>
    );
  }
}

export default Index;
