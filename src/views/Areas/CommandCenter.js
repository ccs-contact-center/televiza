import React, { Component } from "react";
import "../../index.css";
import Progress from "../Components/Progress";
import graph1 from "../../assets/img/command.png";
import check from "../../assets/img/check.gif";
import home from "../../assets/img/home.png";
class Comercial extends Component {
  render() {
    return (
      <div className="section">
        <div className="slide">
          <div className="content">
            <h1 className="title2">Command Center</h1>
          </div>
        </div>

        <div className="slide">
          <div className="content">
            <div className="info-box">
              <div className="info-item">
                <h2>Automatización</h2>
                <p>
                  De 112 reportes, 52 estan automatizados o semiautomatizados
                  (46%)
                </p>
              </div>
              <div className="info-item">
                <Progress value={46} color="green" />
              </div>
              <div className="info-item">
                <img src={graph1} alt="" style={{ width: "100%" }} />
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
                <h2>Capacitación Continua</h2>
                <p>
                  Se capacita parcialmente a los analistas en VB, SQL y Macros
                </p>
              </div>
              <div className="info-item">
                <Progress value={30} />
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
                <p>Mantener o aumentar el porcentaje de automatización</p>
              </div>
              <div className="info-item">
                <p>Continuar con la mejora en la profundidad de los analisis</p>
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
                <p>Retomar la capacitación continua de analistas</p>
              </div>
              <div className="info-item">
                <p>Monitoreo de adherencia en tiempo real</p>
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
