import React, { Component } from "react";
import "../../index.css";
import "react-circular-progressbar/dist/styles.css";
import check from "../../assets/img/check.gif";
import Progress from "../Components/Progress";
//import { BarChart } from "../Components/Graphics";
import home from "../../assets/img/home.png";
class Comercial extends Component {
  render() {
    return (
      <div className="section">
        <div className="slide">
          <div className="content">
            <h1 className="title2">Comercial y ATC</h1>
          </div>
        </div>

        <div className="slide">
          <div className="content">
            <div className="info-box">
              <div className="info-item">
                <h2>Clientes Activos</h2>
                <p>19 Clientes Activos</p>
              </div>
              <div className="info-item">
                <Progress value={100} text="19" color="green" />
              </div>
              <div className="info-item">
                <Progress value={27} color="green" />
              </div>
              <div className="info-item">
                <h2>Crecimiento Estaciones</h2>
                <p>
                  Crecimos 27% vs 2018, pasando de 115 a 146 estaciones
                  operativas
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="slide">
          <div className="content">
            <div className="info-box">
              <div className="info-item">
                <h2>Promedio de Estaciones por Cliente</h2>
              </div>
              <div className="info-item">
                <Progress value={100} color="green" text="8.5" />
              </div>
              <div className="info-item">
                <Progress value={11} color="green" />
              </div>
              <div className="info-item">
                <h2>Regreso de Clientes</h2>
                <p>Durante 2019, regresaron el 11% clientes</p>
              </div>
            </div>
          </div>
        </div>

        <div className="slide">
          <div className="content">
            <div className="info-box">
              <div className="info-item">
                <h2>Retención de Clientes</h2>
              </div>
              <div className="info-item">
                <Progress value={80} color="green" />
              </div>
              <div className="info-item">
                <Progress value={60} color="green" />
              </div>
              <div className="info-item">
                <h2>Contratos Firmados</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="slide">
          <div className="content">
            <div className="info-box">
              <div className="info-item">
                <h2>Cobranza</h2>
                <p>
                  Cobranza dentro de los primero 30 días del 62% de los
                  clientes.
                </p>
              </div>
              <div className="info-item">
                <Progress value={62} color="green" />
              </div>
              <div className="info-item">
                <Progress value={21} />
              </div>
              <div className="info-item">
                <h2>Crecimiento de Cuentas</h2>n

                <p>-</p>
              </div>
            </div>
          </div>
        </div>

        <div className="slide">
          <div className="content">
            <div className="info-box">
              <div className="info-item">
                <h2>Promedio de Estancia</h2>
                <p>El promedio de estancia de los clientes es de 4.6 Años</p>
              </div>
              <div className="info-item">
                <Progress value={100} color="green" text="4.6" />
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
                <p>600 Estaciones Nuevas</p>
              </div>
            </div>
          </div>
        </div>

        <div className="slide">
          <div className="content">
            <div className="info-box">
              <div className="info-item">
                <p>Evaluar la satisfacción de los clientes</p>
              </div>
              <div className="info-item">
                <img className="contentCheck" src={check} alt="" />
              </div>
              <div className="info-item">
                <img className="contentCheck" src={check} alt="" />
              </div>
              <div className="info-item">
                <p>
                  Células de trabajo con pendientes con semaforos y alertas
                  (Monday.com)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="slide">
          <div className="content">
            <div className="info-box">
              <div className="info-item">
                <p>Implementar soluciones multicanal con 80% de los clientes</p>
              </div>
              <div className="info-item">
                <img className="contentCheck" src={check} alt="" />
              </div>
              <div className="info-item">
                <img className="contentCheck" src={check} alt="" />
              </div>
              <div className="info-item">
                <h2>Contratos Firmados</h2>
                <p>90% de los clientes con contrato firmado</p>
              </div>
            </div>
          </div>
        </div>

        <div className="slide">
          <div className="content">
            <div className="info-box">
              <div className="info-item">
                <p>
                  Armado de expo de tecnologías actuales (Mitrol/Avaya/Genesys)
                  programadas de forma previa (Cada 6 meses al 100% de los
                  clientes)
                </p>
              </div>
              <div className="info-item">
                <img className="contentCheck" src={check} alt="" />
              </div>
              <div className="info-item">
                <img className="contentCheck" src={check} alt="" />
              </div>
              <div className="info-item">
                <p>Crecimiento de las cuentas actuales a un 50%.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="slide">
          <div className="content">
            <div className="info-box">
              <div className="info-item">
                <p>
                  Búsqueda de marcas con el mismo tipo de negocio, ejemplo
                  Televia-Vialidades/Venta por catálogo/Alimentos (3 clientes)
                </p>
              </div>
              <div className="info-item">
                <img className="contentCheck" src={check} alt="" />
              </div>
              <div className="info-item">
                <img className="contentCheck" src={check} alt="" />
              </div>
              <div className="info-item">
                <p>
                  Presentación de resultados al 100% de clientes de forma
                  mensual(Remota/Presencial)
                </p>
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
                  Establecer proceso interno de tiempos a las areas y envío de
                  alertas de cumplimiento 100%
                </p>
              </div>
              <div className="info-item">
                <p>
                  Registro de no conformidades de tiempos por actividades de
                  célula por área
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
                <p>Incrementar la cobranza temprana a un 90%</p>
              </div>
              <div className="info-item">
                <p>Disminuir el número de quejas de clientes</p>
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
                <p>Posicionar la marca en el mercado</p>
              </div>
              <div className="info-item">
                <p>3 clientes nuevos para CCS</p>
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
