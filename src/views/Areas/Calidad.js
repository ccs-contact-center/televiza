import React, { Component } from "react";
import "../../index.css";
import Progress from "../Components/Progress";
import ABC from "../../assets/img/ABC.png";
import check from "../../assets/img/check.gif";
import home from "../../assets/img/home.png";

class Comercial extends Component {
  render() {
    return (
      <div className="section">
        <div className="slide">
          <div className="content">
            <h1 className="title2">Calidad</h1>
          </div>
        </div>

        <div className="slide">
          <div className="content">
            <div className="info-box">
              <div className="info-item">
                <h2>Dias en Meta</h2>
                <p>
                  Se obtiene 65.36% de alcance; 24.64 pp por debajo del
                  objetivo
                </p>
              </div>
              <div className="info-item">
                <Progress value={65.36} />
              </div>
              <div className="info-item">
                <Progress value={106.17} color="green" />
              </div>
              <div className="info-item">
                <h2>Cuota de Monitoreo</h2>
                <p>Se tiene un 106.17% en cuota de monitoreo</p>
              </div>
            </div>
          </div>
        </div>

        <div className="slide">
          <div className="content">
            <div className="info-box">
              <div className="info-item">
                <h2>Retroalimentación</h2>
                <p>70% de las retroalimentaciones se dan en tiempo</p>
              </div>
              <div className="info-item">
                <Progress value={70} />
              </div>
              <div className="info-item">
                <Progress value={92.18} color="green" />
              </div>
              <div className="info-item">
                <h2>Cobertura Retroalimentación</h2>
                <p>Se retroalimentan el 92.18% de los monitoreos realizados</p>
              </div>
            </div>
          </div>
        </div>

        <div className="slide">
          <div className="content">
            <div className="info-box">
              <div className="info-item">
                <h2>Distribución ABC</h2>
              </div>
              <div className="info-item">
                <img src={ABC} alt="" style={{ width: "100%" }} />
              </div>
              <div className="info-item">
                <Progress value={42} />
              </div>
              <div className="info-item">
                <h2>Retención Analistas</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="slide">
          <div className="content">
            <div className="info-box">
              <div className="info-item">
                <h2>Guias Omnicanal</h2>
                <p>
                  Se implementan guias omnicanal para todas las campañas que
                  cuentan con este servicio
                </p>
              </div>
              <div className="info-item">
                <Progress value={100} color="green" />
              </div>
              <div className="info-item">
                <Progress value={42} text="42 hrs" />
              </div>
              <div className="info-item">
                <p>42 tiempo promedio de retroalimentación</p>
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
                <p>Dias en Meta: 80%</p>
              </div>
              <div className="info-item">
                <p>Monitoreos en Tiempo: 95%</p>
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
                <p>Retros en Tiempo: 95%</p>
              </div>
              <div className="info-item">
                <p>Calificación Global 90%</p>
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
                <p>Menos del 10% de plantilla nivel C</p>
              </div>
              <div className="info-item">
                <p>Estandarizar rubros adicionales por tipo de servicio</p>
              </div>
              <div className="info-item">
                <img className="contentCheck" src={check} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="slide">
          <div className="content">
            {/*<h1 className="title2" onClick={() => (window.location.href = "/#Indice")}> Gracias</h1>*/}
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
