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
            <h1 className="title2">Procesos</h1>
          </div>
        </div>

        <div className="slide">
          <div className="content">
            <div className="info-box">
              <div className="info-item">
                <h2>ISO 9001-2015</h2>
                <p>
                  Se certifica el área de Capacitación y Recursos Humanos en la
                  Norma ISO 9001-2015
                </p>
              </div>
              <div className="info-item">
                <Progress value={100} color="green" />
              </div>
              <div className="info-item">
                <Progress value={97.4} color="green" />
              </div>
              <div className="info-item">
                <h2>Hallazgos: ISO 27001</h2>
                <p>
                  Se detectan 3 hallazgos en la auditoria ISO27001 de 114 puntos
                  declarados (97.4% de cumplimiento), corregidos para poder
                  certificarse
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="slide">
          <div className="content">
            <div className="info-box">
              <div className="info-item">
                <h2>Hallazgos: ISO 9001</h2>
                <p>
                  Se detectan 2 hallazgos en la auditoria ISO 9001 , de 10
                  puntos declarados (80% de cumplimiento) corregidos para poder
                  certificarse
                </p>
              </div>
              <div className="info-item">
                <Progress value={80} color="green" />
              </div>
              <div className="info-item">
                <Progress value={98.9} color="green" />
              </div>
              <div className="info-item">
                <h2>Auditoría de Procesos</h2>
                <p>
                  De 253 procesos inventariados, 186 se encuentran activos y se
                  auditan 184 (98.9%)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="slide">
          <div className="content">
            <div className="info-box">
              <div className="info-item">
                <h2>Procesos Actualizados</h2>
                <p>Se actualizan 119 procesos vs 186 activos (63.9%)</p>
              </div>
              <div className="info-item">
                <Progress value={63.9} color="green" />
              </div>
            </div>
          </div>
        </div>

        <div className="slide">
          <div className="content">
            <div className="info-box">
              <div className="info-item">
                <h2>Auditoria por Área</h2>
                <p>
                  Se audita a Operaciones, Capacitación, Calidad, RRHH ,
                  Implementación , Auditoria , Command Center (87 % de las
                  áreas)
                </p>
              </div>
              <div className="info-item">
                <Progress value={87} />
              </div>
              <div className="info-item">
                <Progress value={100} />
              </div>
              <div className="info-item">
                <h2>Auditorias por Proceso</h2>
                <p>Se auditan permanentemente los siguientes procesos:</p>
                <p>Calidad</p>
                <p>Seguridad de Información y 5’S</p>
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
                <p>Implementación de la norma 035</p>
              </div>
              <div className="info-item">
                <p>Implementación de PCI</p>
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
                <p>Auditoría de Revisión ISO 9001</p>
              </div>
              <div className="info-item">
                <p>Auditoría de Revisión ISO 27001</p>
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
                <p> 2 auditorías Internas por año de ISO 27001 y ISO 9001</p>
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
