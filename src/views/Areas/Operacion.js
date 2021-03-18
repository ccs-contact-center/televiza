import React, { Component } from "react";
import "../../index.css";
import Progress from "../Components/Progress";
import { BarChart, BarChartDoble } from "../Components/Graphics";
import check from "../../assets/img/check.gif";
import home from "../../assets/img/home.png";
class Comercial extends Component {
  render() {
    return (
      <div className="section">
        <div className="slide">
          <div className="content">
            <h1 className="title2">Operación</h1>
          </div>
        </div>

        <div className="slide">
          <div className="content">
            <div className="info-box">
              <div className="info-item">
                <h2>Facturación</h2>
                <p>
                  La facturación durante 2019 cerró en 102%, 9pp por encima de
                  2018 y 2pp por arriba del objetivo
                </p>
                <p>
                  El objetivo durante 2020, será mantener el 100% de la
                  facturación
                </p>
              </div>
              <div className="info-item">
                <BarChart data={[93, 102, 100]} />
              </div>
              <div className="info-item">
                <BarChartDoble
                  data={[
                    [80, 81, 85],
                    [93, 94, 95]
                  ]}
                ></BarChartDoble>
              </div>
              <div className="info-item">
                <h2>Retención y Presentismo</h2>
                <p>
                  La retención en 2019 cerró en 81.02%, 1pp por encima de 2018 y
                  10pp por debajo del objetivo. El presentismo cierra con
                  93.85%, 1.35pp por encima de 2018 y 0.15pp por debajo del
                  objetivo.
                </p>
                <p>
                  Durante 2020, la retención y el presentismo deberán ser >95%
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="slide">
          <div className="content">
            <div className="info-box">
              <div className="info-item">
                <h2>Retención Supervisores</h2>
                <p>
                  La retención de supervisores cerró en 54% (7 de 15
                  supervisores)
                </p>
              </div>
              <div className="info-item">
                <Progress value={54} />
              </div>
              <div className="info-item">
                <Progress value={100} color="green" />
              </div>
              <div className="info-item">
                <h2>Supervisor Retención</h2>
                <p>Se implementa la supervisión especializada en retención</p>
              </div>
            </div>
          </div>
        </div>

        <div className="slide">
          <div className="content">
            <div className="info-box">
              <div className="info-item">
                <h2>Cobertura VIP</h2>
                <p>Se cubre el 99.65% de las horas VIP</p>
              </div>
              <div className="info-item">
                <Progress value={99.65} color="green" />
              </div>

              <div className="info-item">
                <Progress value={10} color="green" />
              </div>
              <div className="info-item">
                <h2>Cobertura vs Horas Programadas VIP</h2>
                <p>
                  La participación del grupo VIP en la facturación fue del 10%
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
                <p>
                  Disminuir Rotación y el ausentismo al 10% por medio de
                  Dinamicas Mensuales, Programa VIP y el desarrollo de
                  Supervisores
                </p>
              </div>
              <div className="info-item">
                <p>Se incrementará la adherencia a dimensionamientos al 98%</p>
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
                <p>Incrementar de 4 a 8 los supervisores en nivel Plus</p>
              </div>
              <div className="info-item">
                <p>Se facturarán el 100% de las horas</p>
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
                <p>Crecimiento del 20% en el 80% de las campañas</p>
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
