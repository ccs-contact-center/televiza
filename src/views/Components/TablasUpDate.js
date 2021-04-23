
import {
    Container,
    Row,
    Col,
  } from "reactstrap";

  import {
    Tabla1,
    Tabla2,
    TablaK1,
    TablaK2,
    Tabla3,
    TablaI3,
    Tabla4, TablaRVN4,
  } from "./Tablas";
import React, { Component } from "react";


class Kpis extends Component {
    render() {
        return (
            <div >
                <div className="slide">
                    <Container>
                        <Row>
                            <Col xs="12">
                                <h2 className="border border-bottom border-danger"><span>FEBRERO</span> <span>KPI´S</span></h2>
                            </Col>
                            <Col xs="6">
                                <div className="animated animate__backInLeft">
                                    < Tabla1 />

                                </div>
                            </Col>
                            <Col xs="6">
                                <Tabla2 />
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="slide">
                    <Container>
                        <Row>
                            <Col xs="12">
                                <h2 className="border border-bottom border-danger"><span>MARZO</span> <span>KPI´S</span></h2>
                            </Col>
                            <Col xs="6">
                                <div className="animated animate__backInLeft">
                                    < TablaK1 />

                                </div>
                            </Col>
                            <Col xs="6">
                                <TablaK2 />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

class IndicadoresAtencion extends Component {
    render() {
        return (
            <div >
                <div className="slide">
                    <Container>
                        <Row>
                            <Col xs="12">
                                <h2 className="border border-bottom border-danger"><span>Resumen Atención</span></h2>
                                <Tabla3 />
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="slide">
                    <Container>
                        <Row>
                            <Col xs="12">
                                <h2 className="border border-bottom border-danger"><span>Resumen Atención</span></h2>
                                <TablaI3 />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

class ResumenVentasNuevas extends Component {
    render() {
        return (
            <div >
                <div className="slide">
                    <Container>
                        <Row>
                            <Col xs="12">
                                <h2 className="border border-bottom border-danger"><span>Resumen Ventas nuevas</span></h2>
                                <Tabla4 />
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="slide">
                    <Container>
                        <Row>
                            <Col xs="12">
                                <h2 className="border border-bottom border-danger"><span>Resumen Ventas nuevas</span></h2>
                                <TablaRVN4 />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

export  {Kpis,IndicadoresAtencion, ResumenVentasNuevas}