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

// import Comercial from "./Areas/Comercial";
// import Implementacion from "./Areas/Implementacion";
// import RRHH from "./Areas/RRHH";
// import Capacitacion from "./Areas/Capacitacion";
// import Comunicacion from "./Areas/Comunicacion";
// import Operacion from "./Areas/Operacion";
// import TI from "./Areas/TI";
// import CommandCenter from "./Areas/CommandCenter";
// import Calidad from "./Areas/Calidad";
// import Procesos from "./Areas/Procesos";

class Index extends Component {
  render() {
    return (
      <div id="slideshare_root">
        <div id="bg"></div>
        <div id="bgnoise"></div>

        <ReactFullpage
          licenseKey={"FF3E03E0-2607429E-8207D2C5-8D8301B1"}
          scrollingSpeed={500} /* Options here */
          // anchors={[
          //   "Inicio",
          //   "Indice",
          //   "Comercial",
          //   "Implementacion",
          //   "RRHH",
          //   "Capacitacion",
          //   "Comunicacion",
          //   "Operacion",
          //   "TI",
          //   "CommandCenter",
          //   "Calidad",
          //   "Procesos"
          // ]}
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
                        <table className="table table-bordered" >
                          <thead>
                            <tr className="bg-danger">
                              <th scope="col">Niveles de Servicio</th>
                              <th scope="col">Atención a Clientes </th>
                              <th scope="col">FEBRERO</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row" className="bg-danger">SVL</th>
                              <td>95.00%</td>
                              <td>74.00%</td>
                            </tr>
                            <tr>
                              <th scope="row" className="bg-danger">ABA</th>
                              <td>&#60; 5%</td>
                              <td>5%</td>
                            </tr>
                            <tr>
                              <th scope="row" className="bg-danger">AHT</th>
                              <td>00:05:30</td>
                              <td className="text-danger"><b>00:04:04</b></td>
                            </tr>
                            <tr>
                              <th scope="row" className="bg-danger">ASA</th>
                              <td>&#60; 00:00:20</td>
                              <td>&#60; 00:00:00</td>
                            </tr>
                            <tr>
                              <th scope="row" className="bg-danger">Productividad / conversión</th>
                              <td>50% </td>
                              <td>36% </td>
                            </tr>
                          </tbody>
                        </table>
                      </Col>
                      <Col xs="6">
                        <table className="table table-bordered" >
                          <thead>
                            <tr className="bg-danger">
                              <th scope="col">Niveles de Servicio</th>
                              <th scope="col">Ventas </th>
                              <th scope="col">FEBRERO</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row" className="bg-danger">SVL</th>
                              <td>95.00%</td>
                              <td class="text-danger"><b>76.00%</b></td>
                            </tr>
                            <tr>
                              <th scope="row" className="bg-danger">ABA</th>
                              <td>&#60;5%</td>
                              <td>10%</td>
                            </tr>
                            <tr>
                              <th scope="row" className="bg-danger">AHT</th>
                              <td>00:04:30</td>
                              <td>00:04:06</td>
                            </tr>
                            <tr>
                              <th scope="row" className="bg-danger">ASA</th>
                              <td>&#60; 00:00:20</td>
                              <td>&#60; 00:00:00</td>
                            </tr>
                            <tr>
                              <th scope="row" className="bg-danger">Productividad / conversión</th>
                              <td>90% </td>
                              <td class="text-danger"><b>85.3%</b></td>
                            </tr>
                          </tbody>
                        </table>
                      </Col>
                    </Row>
                  </Container>
                </div>


                <div className="section">
                  <Container>
                    <Row>
                      <Col xs="12">
                        <h2 className="border border-bottom border-danger"><span>Resumen Atención</span></h2>
                        <table className="table table-bordered">
                          <thead>
                            <tr className="bg-danger">
                              <th scope="col">INDICADORES ATENCION</th>
                              <th scope="col">sep-20</th>
                              <th scope="col">oct-20</th>
                              <th scope="col">nov-20 </th>
                              <th scope="col">dic-20</th>
                              <th scope="col">ene-21 </th>
                              <th scope="col">feb-21</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" className="bg-danger">Llamadas Recibidas Atencion</th>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1,880</td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1,456</td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1,761</td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>3,269 </td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>2,255</td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>4,035</td>
                            </tr>
                            <tr>
                              <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" className="bg-danger">Llamadas atendidas</th>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1,853</td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1,444</td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1,739</td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>3,016</td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1,956</td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>3,841</td>
                            </tr>
                            <tr>
                              <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" className="bg-danger">Llamadas atendidas de venta</th>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>202 </td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>187</td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>146 </td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>249</td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1,051</td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>755</td>
                            </tr>
                            <tr>
                              <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" className="bg-danger">Llamada abandonadas</th>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>27</td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>12</td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>22</td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>253</td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>299</td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>194</td>
                            </tr>
                            <tr>
                              <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" className="bg-danger">Nivel de Servicio</th>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>94%</td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>91%</td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>96%</td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>87%</td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>100%</td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>74%</td>
                            </tr>
                            <tr>
                              <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" className="bg-danger">% de Abandono ATN </th>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1.4% </td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0.8% </td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1.2% </td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>8.0% </td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>13.00% </td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>5.0% </td>
                            </tr>
                            <tr>
                              <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" className="bg-danger">AHT</th>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>00:05:39</td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>00:06:21</td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>00:06:49</td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>00:06:07</td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>00:06:14</td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>00:04:04</td>
                            </tr>
                            <tr>
                              <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" className="bg-danger">Nivel de Atención </th>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>99% </td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>99% </td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>99% </td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>92% </td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>87% </td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>95% </td>
                            </tr>
                            <tr>
                              <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" className="bg-danger">Ventas</th>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>392</td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>372</td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>439</td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1382</td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>727</td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>272</td>
                            </tr>
                            <tr>
                              <th scope="row" className="bg-danger" style={{ paddingTop: "5px", paddingBottom: "5px" }}>Conversión</th>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>194% </td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>199% </td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>301% </td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>93% </td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>69% </td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>36% </td>
                            </tr>
                          </tbody>
                        </table>
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
                        <table className="table table-bordered">
                          <thead>
                            <tr className="bg-danger">
                              <th scope="col">INDICADORES VENTA NUEVA</th>
                              <th scope="col">sep-20</th>
                              <th scope="col">oct-20</th>
                              <th scope="col">nov-20 </th>
                              <th scope="col">dic-20</th>
                              <th scope="col">ene-21 </th>
                              <th scope="col">feb-21</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" className="bg-danger">Llamadas Recibidas VENTA NUEVA</th>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1,092</td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1,033</td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1,864</td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>5,156 </td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>2,947</td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>4,110</td>
                            </tr>
                            <tr>
                              <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" className="bg-danger">Llamadas atendidas</th>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1,039</td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1,025</td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1,791</td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>4,319</td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>2,407</td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>3,691</td>
                            </tr>
                            <tr>
                              <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" className="bg-danger">Llamadas con peticion de venta</th>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>344 </td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>370</td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>646 </td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1,185</td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>684</td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>807</td>
                            </tr>
                            <tr>
                              <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" className="bg-danger">Llamada abandonadas</th>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>53</td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>8</td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>73</td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>837</td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>540</td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>419</td>
                            </tr>
                            <tr>
                              <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" className="bg-danger">Nivel de Servicio</th>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>94%%</td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>96%</td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>94%</td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>78%</td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>100%</td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>76%</td>
                            </tr>
                            <tr>
                              <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" className="bg-danger">% de Abandono venta nueva </th>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>5% </td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1% </td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>4% </td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>16% </td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>18% </td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>10% </td>
                            </tr>
                            <tr>
                              <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" className="bg-danger">AHT</th>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>00:05:33</td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>00:06:06</td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>00:04:07</td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>00:04:34</td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>00:05:34</td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>00:04:06</td>
                            </tr>
                            <tr>
                              <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" className="bg-danger">Nivel de Atención </th>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>95% </td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>99% </td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>96% </td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>84% </td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>82% </td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>90% </td>
                            </tr>
                            <tr>
                              <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" className="bg-danger">Ventas</th>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>135</td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>129</td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>243</td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>620</td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>611</td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>688</td>
                            </tr>
                            <tr>
                              <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" className="bg-danger">Conversión</th>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>39% </td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>35% </td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>38% </td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>52% </td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>89% </td>
                              <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>85% </td>
                            </tr>
                          </tbody>
                        </table>
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
                        <table className="table table-bordered">
                          <thead>
                            <tr className="bg-danger">
                              <th style={{ paddingTop: "3px", paddingBottom: "3px" }} scope="col">Titulo</th>
                              <th style={{ paddingTop: "3px", paddingBottom: "3px" }} scope="col">#</th>
                              <th style={{ paddingTop: "3px", paddingBottom: "3px" }} scope="col">%</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th style={{ paddingTop: "3px", paddingBottom: "3px" }} scope="row" className=""><b>Total general</b></th>
                              <td style={{ paddingTop: "3px", paddingBottom: "3px" }}><b>3841</b></td>
                              <td style={{ paddingTop: "3px", paddingBottom: "3px" }}><b>100%</b></td>
                            </tr>
                            <tr>
                              <th style={{ paddingTop: "3px", paddingBottom: "3px" }} scope="row" className="">APLICACIÓN DE PAGO</th>
                              <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>78</td>
                              <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>1%</td>
                            </tr>
                            <tr>
                              <th style={{ paddingTop: "3px", paddingBottom: "3px" }} scope="row" className="">CAMBIO DE REVISTA</th>
                              <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>19 </td>
                              <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>0%</td>
                            </tr>
                            <tr>
                              <th style={{ paddingTop: "3px", paddingBottom: "3px" }} scope="row" >CAMBIO O CORRECCIÓN DE DATOS</th>
                              <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>19</td>
                              <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>0%</td>
                            </tr>
                            <tr>
                              <th style={{ paddingTop: "3px", paddingBottom: "3px" }} scope="row" >CANCELACIONES</th>
                              <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>176</td>
                              <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>3%</td>
                            </tr>
                            <tr>
                              <th style={{ paddingTop: "3px", paddingBottom: "3px" }} scope="row" >DEVOLUCIÓN </th>
                              <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>25</td>
                              <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>0% </td>
                            </tr>
                            <tr>
                              <th style={{ paddingTop: "3px", paddingBottom: "3px" }} scope="row" >FACTURACIÓN</th>
                              <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>35</td>
                              <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>1%</td>
                            </tr>
                            <tr>
                              <th style={{ paddingTop: "3px", paddingBottom: "3px" }} scope="row" >INFORMACIÓN </th>
                              <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>986 </td>
                              <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>23% </td>
                            </tr>
                            <tr>
                              <th style={{ paddingTop: "3px", paddingBottom: "3px" }} scope="row" >INVESTIGACIÓN CORREO</th>
                              <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>22</td>
                              <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>0%</td>
                            </tr>
                            <tr>
                              <th style={{ paddingTop: "3px", paddingBottom: "3px" }} scope="row" >NO VENTA</th>
                              <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>97 </td>
                              <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>3% </td>
                            </tr>
                            <tr>
                              <th style={{ paddingTop: "3px", paddingBottom: "3px" }} scope="row" >OTROS</th>
                              <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>689 </td>
                              <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>22% </td>
                            </tr>
                            <tr>
                              <th style={{ paddingTop: "3px", paddingBottom: "3px" }} scope="row" >REPOSICIÓN</th>
                              <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>101 </td>
                              <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>4% </td>
                            </tr>
                            <tr>
                              <th style={{ paddingTop: "3px", paddingBottom: "3px" }} scope="row" >SUSCRIPCIONES</th>
                              <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>912 </td>
                              <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>28% </td>
                            </tr>
                            <tr>
                              <th style={{ paddingTop: "3px", paddingBottom: "3px" }} scope="row" >TRANSFERENCIA INTERNA</th>
                              <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>598 </td>
                              <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>0% </td>
                            </tr>
                            <tr>
                              <th style={{ paddingTop: "3px", paddingBottom: "3px" }} scope="row" >VENTA CRUZADA</th>
                              <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>84 </td>
                              <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>0% </td>
                            </tr>
                          </tbody>
                        </table>
                      </Col>
                      <Col xs="6">
                        <table className="table table-bordered">
                          <thead>
                            <tr className="bg-danger">
                              <th style={{ paddingTop: "3px", paddingBottom: "3px" }} scope="col">Titulo</th>
                              <th style={{ paddingTop: "3px", paddingBottom: "3px" }} scope="col">#</th>
                              <th style={{ paddingTop: "3px", paddingBottom: "3px" }} scope="col">%</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th style={{ paddingTop: "3px", paddingBottom: "3px" }} scope="row" ><b>Total general</b></th>
                              <td style={{ paddingTop: "3px", paddingBottom: "3px" }}><b>2407</b></td>
                              <td style={{ paddingTop: "3px", paddingBottom: "3px" }}><b>100%</b></td>
                            </tr>
                            <tr>
                              <th style={{ paddingTop: "3px", paddingBottom: "3px" }} scope="row" >APLICACIÓN DE PAGO</th>
                              <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>53</td>
                              <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>2%</td>
                            </tr>
                            <tr>
                              <th style={{ paddingTop: "3px", paddingBottom: "3px" }} scope="row" >CAMBIO DE REVISTA</th>
                              <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>9 </td>
                              <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>0%</td>
                            </tr>
                            <tr>
                              <th style={{ paddingTop: "3px", paddingBottom: "3px" }} scope="row" >CAMBIO O CORRECCIÓN DE DATOS</th>
                              <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>28</td>
                              <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>1%</td>
                            </tr>
                            <tr>
                              <th style={{ paddingTop: "3px", paddingBottom: "3px" }} scope="row" >CANCELACIONES</th>
                              <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>358</td>
                              <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>13%</td>
                            </tr>
                            <tr>
                              <th style={{ paddingTop: "3px", paddingBottom: "3px" }} scope="row" >DEVOLUCIÓN </th>
                              <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>8</td>
                              <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>0% </td>
                            </tr>
                            <tr>
                              <th style={{ paddingTop: "3px", paddingBottom: "3px" }} scope="row" >FACTURACIÓN</th>
                              <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>17</td>
                              <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>1%</td>
                            </tr>
                            <tr>
                              <th style={{ paddingTop: "3px", paddingBottom: "3px" }} scope="row" >INFORMACIÓN </th>
                              <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>554 </td>
                              <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>28% </td>
                            </tr>
                            <tr>
                              <th style={{ paddingTop: "3px", paddingBottom: "3px" }} scope="row" >INVESTIGACIÓN CORREO</th>
                              <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>4</td>
                              <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>0%</td>
                            </tr>
                            <tr>
                              <th style={{ paddingTop: "3px", paddingBottom: "3px" }} scope="row" >NO VENTA</th>
                              <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>5 </td>
                              <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>0% </td>
                            </tr>
                            <tr>
                              <th style={{ paddingTop: "3px", paddingBottom: "3px" }} scope="row" >OTROS</th>
                              <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>476 </td>
                              <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>20% </td>
                            </tr>
                            <tr>
                              <th style={{ paddingTop: "3px", paddingBottom: "3px" }} scope="row" >REPOSICIÓN</th>
                              <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>287 </td>
                              <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>8% </td>
                            </tr>
                            <tr>
                              <th style={{ paddingTop: "3px", paddingBottom: "3px" }} scope="row" >SUSCRIPCIONES</th>
                              <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>488 </td>
                              <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>23% </td>
                            </tr>
                            <tr>
                              <th style={{ paddingTop: "3px", paddingBottom: "3px" }} scope="row" >TRANSFERENCIA INTERNA</th>
                              <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>43 </td>
                              <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>0% </td>
                            </tr>
                            <tr>
                              <th style={{ paddingTop: "3px", paddingBottom: "3px" }} scope="row" >VENTA CRUZADA</th>
                              <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>10 </td>
                              <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>0% </td>
                            </tr>
                          </tbody>
                        </table>
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
                      <Col xs="6"><BarChart5/></Col>
                      <Col xs="6"><BarChart6/></Col>
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
                      <BarChart7/>
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
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th scope="col" className="bg-danger align-middle">PROMEDIO DNC</th>
                              <th scope="col" className="align-middle text-center">97.00</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row" rowspan="4" className="bg-danger align-middle text-center">CURSOS</th>
                              <td className="align-middle text-center">Tipificación</td>
                            </tr>
                            <tr>
                              <td className="align-middle text-center">Políticas</td>
                            </tr>
                            <tr>
                              <td className="align-middle text-center">Captura</td>
                            </tr>
                            <tr>
                              <td className="align-middle text-center">Autopautaje</td>
                            </tr>
                          </tbody>
                        </table>
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
                      <Col xs="6"><BarChart8/></Col>
                      <Col xs="6"><BarChart9/></Col>
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
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th scope="col" className="bg-danger">Calidad ABC</th>
                              <th scope="col" className="bg-danger">Enero</th>
                              <th scope="col" className="bg-danger">Febrero</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row" className="bg-danger">A</th>
                              <td>25%</td>
                              <td>50%</td>
                            </tr>
                            <tr>
                              <th scope="row" className="bg-danger">B</th>
                              <td>75%</td>
                              <td>42%</td>
                            </tr>
                            <tr>
                              <th scope="row" className="bg-danger">C</th>
                              <td>0%</td>
                              <td>8%</td>
                            </tr>
                            <tr>
                              <th scope="row" className="bg-danger">Total</th>
                              <td>100%</td>
                              <td>100%</td>
                            </tr>
                          </tbody>
                        </table>
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
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th scope="col" className="bg-danger text-center">Acciones</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Dinámica de lectura/Durante la retroalimentación se proporciona una mini lectura focalizada a la venta con el fin de desarrollar el vocabulario del agente</td>
                            </tr>
                            <tr>
                              <td>Clinica –Conoce a tu cliente ,con el fin de conocer los tipos de cliente que actualmente trabajamos como poder ofertar y debatir mediante su modo.</td>
                            </tr>
                            <tr>
                              <td>Taller de servicio y trato al cliente,al brindar un servicio de excelencia despejando dudas ofertando adicional y no generar tiempos de espera creamos esa fidelidad con el cliente.</td>
                            </tr>
                          </tbody>
                        </table>
                      </Col>
                      <Col xs="6">
                        <table className="table table-bordered" >
                          <thead>
                            <tr>
                              <th scope="col" className="bg-danger text-center"></th>
                              <th scope="col" className="bg-danger text-center">Detalle</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th>Voz y Vocabulario</th>
                              <td>Agentes presenta muletillas y extranjerismos durante la interacción con el cliente.</td>
                            </tr>
                            <tr>
                              <th>Manejo de objeciones</th>
                              <td>Agente no realiza debate de objeciones para concretar la venta de una forma adecuada. </td>
                            </tr>
                            <tr>
                              <th>Ayuda Adicional/Despedida</th>
                              <td>Agente no ofrece ayuda adicional antes de finalizar la interacción con el cliente.</td>
                            </tr>
                            <tr>
                              <th>Tiempo de Espera</th>
                              <td>Agente supera los tiempos en espera, no agradece al retomar nuevamente la llamada.</td>
                            </tr>
                          </tbody>
                        </table>
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
                {/*############################################################# AREAS #############################################################*/}

                {/* <Comercial />
                <Implementacion />
                <RRHH />
                <Capacitacion />
                <Comunicacion />
                <Operacion />
                <TI />
                <CommandCenter />
                <Calidad />
                <Procesos /> */}
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </div>
    );
  }
}

export default Index;
