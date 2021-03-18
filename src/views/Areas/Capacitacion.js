import React, { Component } from "react";
import "../../index.css";
import check from "../../assets/img/check.gif";
import Progress from "../Components/Progress";
import home from "../../assets/img/home.png";
class Comercial extends Component {
  render() {
    return (
      <div className="section">
        <div className="slide">
          <div className="content">
            <h1 className="title2">Capacitación</h1>
          </div>
        </div>

        <div className="slide">
          <div className="content">
            <div className="info-box">
              <div className="info-item">
                <h2>Retención en Aula</h2>
                <p>
                  La retención en aula fue de 86.2%, 4.8 pp por debajo del
                  objetivo
                </p>
              </div>
              <div className="info-item">
                <Progress value={86.2} />
              </div>
              <div className="info-item">
                <Progress value={87} />
              </div>
              <div className="info-item">
                <h2>Retención fuera de Aula</h2>
                <p>
                  La retención fuera de aula fue de 87%, 6.5 pp por debajo del
                  objetivo
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="slide">
          <div className="content">
            <div className="info-box">
              <div className="info-item">
                <h2>Habilidades Operativas</h2>
                <p>
                  La cobertura de habilidades operativas fue de 74% vs 90% de
                  objetiivo
                </p>
              </div>
              <div className="info-item">
                <Progress value={74} />
              </div>
              <div className="info-item">
                <Progress value={0} />
              </div>
              <div className="info-item">
                <h2>Procesos Paperless</h2>
                <p>No se cumple el objetivo de hacer 100% paperless el area</p>
              </div>
            </div>
          </div>
        </div>

        <div className="slide">
          <div className="content">
            <div className="info-box">
              <div className="info-item">
                <h2>Certificación STPS</h2>
                <p>
                  Se logra la certificación de la Universidad CCS ante la STPS
                </p>
              </div>
              <div className="info-item">
                <Progress value={100} color="green" />
              </div>
              <div className="info-item">
                <Progress value={71} />
              </div>
              <div className="info-item">
                <h2>Retención Universidad CCS</h2>
                <p>La retención del programa cierra con 71%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="slide">
          <div className="content">
            <div className="info-box">
              <div className="info-item">
                <h2>Microlearning</h2>
                <p>
                  48% de las horas de HO, fueron a través de Microlearning, 2 pp
                  por debajo del objetivo
                </p>
              </div>
              <div className="info-item">
                <Progress value={48} />
              </div>
              <div className="info-item">
                <Progress value={0.33} />
              </div>
              <div className="info-item">
                <h2>E-Learning</h2>
                <p>
                  Solo el 0.33% de las horas de capacitación se impartieron a
                  traves de e-learniing, vs 42% objetivo
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="slide">
          <div className="content">
            <div className="info-box">
              <div className="info-item">
                <h2>Viviendo el Crecimiento</h2>
                <h2>Participación</h2>
              </div>
              <div className="info-item">
                <Progress value={9} />
              </div>
              <div className="info-item">
                <Progress value={81} color="green" />
              </div>
              <div className="info-item">
                <h2>Viviendo el Crecimiento</h2>
                <h2>Retención</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="slide">
          <div className="content">
            <div className="info-box">
              <div className="info-item">
                <h2>Viviendo el Crecimiento</h2>
                <p>Crecimiento Interno</p>
              </div>
              <div className="info-item">
                <Progress value={4} />
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
                <p>Reducción de tiempos y costos en capacitaciones</p>
              </div>
              <div className="info-item">
                <p>Reducción de Rotación 9% en aula</p>
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
                <p>Certificar al 90% del personal Capacitado</p>
              </div>
              <div className="info-item">
                <p>Cubrir habilidades operativas al 90% </p>
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
                <p>Registrar a los instructores en STPS</p>
              </div>
              <div className="info-item">
                <p>Asistencia por Aplicativo y Reportes de Capacitación</p>
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
                <p>Participación de E-Laernig 50%</p>
              </div>
              <div className="info-item">
                <p>Participación de Micro Learnig en un 50%</p>
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
                <p>Ejecución de encuesta de clima organizacional</p>
              </div>
              <div className="info-item">
                <p>Cumplimiento de Universidad CCS y Retención 80%</p>
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
                <p>Programa Viviendo el crecimiento perfilado por área</p>
              </div>
              <div className="info-item">
                <p>Definición e implementación de planes de Carrera</p>
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
                <p>Análisis y optimización por área</p>
              </div>
              <div className="info-item">
                <p>Unificación y creación de nuevo material de capacitación</p>
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
                <p>Creación de nuevos programas de capacitación por área</p>
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
