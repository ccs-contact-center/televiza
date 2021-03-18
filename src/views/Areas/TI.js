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
            <h1 className="title2">TI</h1>
          </div>
        </div>

        <div className="slide">
          <div className="content">
            <div className="info-box">
              <div className="info-item">
                <h2>Reportes Nuevos</h2>
                <p>
                  57 nuevos reportes en plataforma, pasando de 202 en 2018 a 259
                  al cierre de 2019 (28% más reportes)
                </p>
              </div>
              <div className="info-item">
                <Progress value={28} color="green" />
              </div>
              <div className="info-item">
                <Progress value={100} text={"26"} color="green" />
              </div>
              <div className="info-item">
                <h2>Aplicativos Operación</h2>
                <p>26 módulos o aplicativos operativos nuevos</p>
              </div>
            </div>
          </div>
        </div>

        <div className="slide">
          <div className="content">
            <div className="info-box">
              <div className="info-item">
                <h2>Tickets</h2>
                <p>85% de tickets cerrados en SLA</p>
              </div>
              <div className="info-item">
                <Progress value={85} color="green" />
              </div>
            </div>
          </div>
        </div>

        <div className="slide">
          <div className="content">
            <div className="info-box">
              <div className="info-item">
                <h2>Tickets Desarrollo Estratégico</h2>
                <p>
                  Se levantan 409 tickets y se cierran 392, quedando 17 aun
                  pendientes y con un % de cierre de 95.8%
                </p>
              </div>
              <div className="info-item">
                <Progress value={95.8} color="green" />
              </div>
              <div className="info-item">
                <Progress value={80.1} color="green" />
              </div>
              <div className="info-item">
                <h2>SLA Desarrollo Estrategico</h2>
                <p>El SLA del soporte de D.E. es de 80.1%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="slide">
          <div className="content">
            <div className="info-box">
              <div className="info-item">
                <h2>Tiempo de Atención</h2>
                <p>El tiempo promedio de atención es de 19.3 horas</p>
              </div>
              <div className="info-item">
                <Progress value={50} />
              </div>
              <div className="info-item">
                <Progress value={100} color="green" />
              </div>
              <div className="info-item">
                <h2>Control de Versiones</h2>
                <p>
                  En marzo se implementa un Sistema de Control de Versiones
                  (Github)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="slide">
          <div className="content">
            <div className="info-box">
              <div className="info-item">
                <h2>Aplicación Nativa</h2>
                <p>
                  Se publica la aplicación de Clientes CCS para iOS y Android
                </p>
              </div>
              <div className="info-item">
                <Progress value={100} color="green" />
              </div>
              <div className="info-item">
                <Progress value={50} color="green" />
              </div>
              <div className="info-item">
                <h2>Dashboards</h2>
                <p>
                  Se desarrolla el dashboard general para todos los servicios
                  (Datos Telefonía)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="slide">
          <div className="content">
            <div className="info-box">
              <div className="info-item">
                <h2>Pipeline Comercial</h2>
                <p>Se desarrolla el Pipeline comercial</p>
              </div>
              <div className="info-item">
                <Progress value={100} color="green" />
              </div>
              <div className="info-item">
                <Progress value={100} color="green" />
              </div>
              <div className="info-item">
                <h2>Infraestructura</h2>
                <p>
                  Se mejora la infraestructura de los D.E; de un servidor,
                  pasamos a un cluster de 4 servidores locales y un servidor
                  failover en AWS
                </p>
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
                <p>SLA de Tickets al 90%</p>
              </div>
              <div className="info-item">
                <p>
                  Entregar reportes base en plataforma para cada desarrollo
                  nuevo (2 de Inbound y 5 de Outbound)
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
                  Estandarizar reportes en plataforma de Desarrollos existentes
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
                  Mantener % Cierre y SLA en tickets de D.E. y mejorar el tiempo
                  de respuesta a Max 12 horas
                </p>
              </div>
              <div className="info-item">
                <p>
                  Finalizar el Sistema Integral de Gestion (V2.0 Aplicativo)
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
                <p>Incluir Alertas en la aplicación CCS</p>
              </div>
              <div className="info-item">
                <p>Comenzar el desarrollo de la Red Social CCS</p>
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
                <p>Gestionar la migración a una solución Omnicanal</p>
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
