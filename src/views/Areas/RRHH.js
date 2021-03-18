import React, { Component } from "react";
import "../../index.css";
import Progress from "../Components/Progress";
import check from "../../assets/img/check.gif";
import home from "../../assets/img/home.png";
class Comercial extends Component {
  render() {
    return (
      <div className="section">
        <div className="slide">
          <div className="content">
            <h1 className="title2">RRHH</h1>
          </div>
        </div>

        <div className="slide">
          <div className="content">
            <div className="info-box">
              <div className="info-item">
                <h2>Presentismo</h2>
                <p>
                  El presentismo durante 2019 cierra con 93.85%, el objetivo
                  durante 2020 es permanecer por arriba de 90%
                </p>
              </div>
              <div className="info-item">
                <Progress value={93.85} color="green" />
              </div>
              <div className="info-item">
                <Progress value={18.98} />
              </div>
              <div className="info-item">
                <h2>Retención</h2>
                <p>
                  La retención durante 2019 cierra con 81.02%, el objetivo
                  durante 2020 es aumentar al 90%
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="slide">
          <div className="content">
            <div className="info-box">
              <div className="info-item">
                <h2>Personal mayor a 40 Años</h2>
                <p>
                  El 16% del personal es mayor a 40 años, en 2020 el objetivo
                  será alcanzar el 20%
                </p>
              </div>
              <div className="info-item">
                <Progress value={16} color="green" />
              </div>
              <div className="info-item">
                <table style={{ width: "120%" }}>
                  <tbody>
                    <tr>
                      <td>40 - 50 Años</td>
                      <td>28</td>
                      <td>62.2%</td>
                    </tr>
                    <tr>
                      <td>51 - 60 Años</td>
                      <td>13</td>
                      <td>28.9%</td>
                    </tr>
                    <tr>
                      <td>Mayor a 61 Años</td>
                      <td>4</td>
                      <td>8.9%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="info-item">
                <h2>Distribución</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="slide">
          <div className="content">
            <div className="info-box">
              <div className="info-item">
                <h2>Demandas</h2>
                <p>Durante 2019 no se presentan demandas</p>
              </div>
              <div className="info-item">
                <Progress value={0} text={"0"} color="green" />
              </div>
              <div className="info-item">
                <Progress value={100} color="green" />
              </div>
              <div className="info-item">
                <h2>Calidad de la Recluta</h2>
                <p>Se alcanza el 100% durante todo el año</p>
              </div>
            </div>
          </div>
        </div>

        <div className="slide">
          <div className="content">
            <div className="info-box">
              <div className="info-item">
                <h2>Adherencia a Operación</h2>
                <p>
                  88% de la poblacion general considerando 150 agentes (132
                  personas
                </p>
              </div>
              <div className="info-item">
                <Progress value={88} color="green" />
              </div>
              <div className="info-item">
                <Progress value={97} color="green" />
              </div>
              <div className="info-item">
                <h2>Cobertura Reclutamiento</h2>
                <p>Se alcanza el 87% vs el 90% objetivo</p>
              </div>
            </div>
          </div>
        </div>

        <div className="slide">
          <div className="content">
            <div className="obj-bo">
              <div className="obj-title">
                <h2>Cobertura Mensual</h2>
              </div>

              <div
                className="obj-item"
                style={{ width: "200%", marginLeft: "-50%" }}
              >
                <table style={{ width: "180%", textAlign: "center" }}>
                  <tbody>
                    <tr>
                      <th>Mes</th>
                      <th>Cobertura</th>
                    </tr>

                    <tr>
                      <td>Enero</td>
                      <td>95%</td>
                    </tr>

                    <tr>
                      <td>Febrero</td>
                      <td>90%</td>
                    </tr>

                    <tr>
                      <td>Marzo</td>
                      <td>85%</td>
                    </tr>

                    <tr>
                      <td>Abril</td>
                      <td>100%</td>
                    </tr>
                    <tr>
                      <td>Mayo</td>
                      <td>95%</td>
                    </tr>
                    <tr>
                      <td>Junio</td>
                      <td>90%</td>
                    </tr>
                    <tr>
                      <td>Julio</td>
                      <td>95%</td>
                    </tr>
                    <tr>
                      <td>Agosto</td>
                      <td>71%</td>
                    </tr>
                    <tr>
                      <td>Septiembre</td>
                      <td>60%</td>
                    </tr>
                    <tr>
                      <td>Octubre</td>
                      <td>80%</td>
                    </tr>
                    <tr>
                      <td>Noviembre</td>
                      <td>90%</td>
                    </tr>

                    <tr>
                      <td>Diciembre</td>
                      <td>92%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="slide">
          <div className="content">
            <h2 style={{ position: "fixed" }}>Crecimiento Personal Staff</h2>
            <div
              className="info-box"
              style={{
                margin: "-5px",
                padding: "-100px",
                marginBottom: "-10px"
              }}
            >
              <div className="info-item">
                <Progress value={33} color="green" size={150} />
                <p>Command Center</p>
              </div>
              <div className="info-item">
                <Progress value={76} color="green" size={150} />
                <p>Supervisores</p>
              </div>
              <div className="info-item">
                <Progress value={90} color="green" size={150} />
                <p>Calidad</p>
              </div>
              <div className="info-item">
                <Progress value={83} color="green" size={150} />
                <p>Capacitación</p>
              </div>
            </div>
          </div>
        </div>
        <div className="slide">
          <div className="content">
            <div className="obj-box">
              <div className="obj-title">
                <h1 className="title3">Objetivos 2020</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="slide">
          <div className="content">
            <div className="info-box">
              <div className="info-item">
                <img className="contentCheck" src={check} alt="" />
              </div>
              <div className="info-item">
                <p>
                  Cubrir el 20 % de la poblacion general de agentes con personas
                  mayores de 40 años
                </p>
              </div>
              <div className="info-item">
                <p>100% Calidad de la Recluta</p>
              </div>
              <div className="info-item">
                <img className="contentCheck" src={check} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="slide">
          <div className="content">
            <div className="info-box">
              <div className="info-item">
                <img className="contentCheck" src={check} alt="" />
              </div>
              <div className="info-item">
                <p>Retención y Presentismo por encima del 90%</p>
              </div>
              <div className="info-item">
                <p>90% Cobertura Reclutamiento en tiempo</p>
              </div>
              <div className="info-item">
                <img className="contentCheck" src={check} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="slide">
          <div className="content">
            <div className="info-box">
              <div className="info-item">
                <p>Ejecutar el sistema de evaluación al personal Staff</p>
              </div>
              <div className="info-item">
                <img className="contentCheck" src={check} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="slide">
          <div className="content">
          <img
              onClick={() => (window.location.href = "/#Indice")}
              src={home}
              alt=""
              style={{
                width: "15%",
                filter:
                  "invert(100%) sepia(0%) saturate(7500%) hue-rotate(12deg) brightness(104%) contrast(103%) opacity(65%)"
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Comercial;
