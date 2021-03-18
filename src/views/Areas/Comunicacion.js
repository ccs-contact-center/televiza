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
            <h1 className="title2">Comunicación</h1>
          </div>
        </div>

        <div className="slide">
          <div className="content">
            <div className="info-box">
              <div className="info-item">
                <p>
                  Se traduce al Inglés la presentación comercial; el video
                  corporativo no se realiza
                </p>
              </div>
              <div className="info-item">
                <Progress value={50} />
              </div>
              <div className="info-item">
                <Progress value={100} color="green" />
              </div>
              <div className="info-item">
                <h2>Blog</h2>
                <p>
                  A partir de febrero se publicará un blog con las actividades
                  del area
                </p>
                <p>
                  Intranet se actualiza por semana para actividades de
                  comunicación
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="slide">
          <div className="content">
            <div className="info-box">
              <div className="info-item">
                <Progress value={100} color="green" />
              </div>
              <div className="info-item">
                <p>Cobertura del plan de comunicacion al 100%</p>
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
                <p>85% de participación en actividades de comunicación </p>
              </div>
              <div className="info-item">
                <p>100% apego al plan de trabajo</p>
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
                <p>Reducción de rotación al 5% </p>
              </div>
              <div className="info-item">
                <p>Promover campañas de difusión de cultura organizacional</p>
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
                <p>Incentivar programas de responsabilidad social</p>
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
