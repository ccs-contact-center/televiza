import React, { Component } from "react";
import "../../index.css";
import Progress from "../Components/Progress";
import check from "../../assets/img/check.gif";
//import grafica from "../../assets/img/brand/grafica.png";
import home from "../../assets/img/home.png";
class Comercial extends Component {
  render() {
    return (
      <div className="section">
        <div className="slide">
          <div className="content">
            <h1 className="title2">Implementación</h1>
          </div>
        </div>

        <div className="slide">
          <div className="content">
            <div className="info-box">
              <div className="info-item">
                <h2>Implementación</h2>
                <p>Se implementan 12 nuevos proyectos</p>
              </div>

              <div className="info-item">
                <Progress value={100} text="12" color="green" />
              </div>
              <div className="info-item">
                <Progress value={83} color="green" />
              </div>
              <div className="info-item">
                <h2>Seguimiento</h2>
                <p>
                  La calificación global del seguimiento a las implementaciones
                  es de 83%
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="slide">
          <div className="content">
            <div className="info-box">
              <div className="info-item">
                <h2>Tiempo de Implementación</h2>
                <p>
                  El 88% de los proyectos se implemento en tiempo y forma vs 95%
                  objetivo
                </p>
              </div>

              <div className="info-item">
                <Progress value={88} />
              </div>
              <div className="info-item">
                <Progress value={10} text="2" />
              </div>
              <div className="info-item">
                <h2>Control de Cambios</h2>
                <p>
                  En 2 proyectos de aplico control de cambios (Sin Delantal y
                  AMEX)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="slide">
          <div className="content">
            <div className="obj-bo">
              <div
                className="obj-item"
                style={{ width: "150%", marginLeft: "-25%" }}
              >
                <table style={{ width: "180%", textAlign: "center" }}>
                  <tbody>
                    <tr>
                      <th>Mes</th>
                      <th>Proyecto</th>
                      <th>% Seguimiento</th>
                      <th>Control de Cambios</th>
                    </tr>

                    <tr>
                      <td>Enero</td>
                      <td>CV Directo</td>
                      <td>93%</td>
                      <td>No</td>
                    </tr>

                    <tr>
                      <td>Marzo</td>
                      <td>Conde Nast</td>
                      <td>73%</td>
                      <td>No</td>
                    </tr>

                    <tr>
                      <td>Marzo</td>
                      <td>WSLA</td>
                      <td>N/A</td>
                      <td>N/A</td>
                    </tr>

                    <tr>
                      <td>Abril</td>
                      <td>Sin Delantal</td>
                      <td>75%</td>
                      <td>Si</td>
                    </tr>
                    <tr>
                      <td>Junio</td>
                      <td>Amex</td>
                      <td>68%</td>
                      <td>Si</td>
                    </tr>
                    <tr>
                      <td>Agosto</td>
                      <td>Altanredes</td>
                      <td>86%</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>Agosto</td>
                      <td>Televisa OUT</td>
                      <td>87%</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>Septiembre</td>
                      <td>Sodexo</td>
                      <td>87%</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>Septiembre</td>
                      <td>Casas Atlas</td>
                      <td>86%</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>Septiembre</td>
                      <td>Televisa IN</td>
                      <td>93%</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>Octubre</td>
                      <td>Club Desarrollo</td>
                      <td>80%</td>
                      <td>No</td>
                    </tr>

                    <tr>
                      <td>Noviembre</td>
                      <td>El heraldo de México</td>
                      <td>81%</td>
                      <td>No</td>
                    </tr>
                  </tbody>
                </table>
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
                  Implementación del 95% de servicios y productos tecnológicos
                  en tiempo y forma
                </p>
              </div>
              <div className="info-item">
                <p>
                  Seguimiento a la implementación del 90% en tiempo y forma a
                  través del Check List post implementación
                </p>
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
                <p>
                  Implementación de control de cambios para el control de todas
                  las campañas por medio del módulo en aplicativo
                </p>
              </div>
              <div className="info-item">
                <p>Rediseño de Ficha de Implementación</p>
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
