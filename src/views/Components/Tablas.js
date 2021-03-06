import React, { Component } from "react";
import pc from "../../assets/img/pc.png";
import { UncontrolledTooltip } from "reactstrap"

class Tabla1 extends Component {
    render() {
        return (
            <div>
                <table className="table table-bordered" >
                    <thead>
                        <tr className="bg-danger">
                            <th scope="col">Niveles de Servicio</th>
                            <th scope="col">Atención a Clientes </th>
                            <th scope="col">FEBRERO</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" className="bg-danger">SVL</th>
                            <td>95.00%</td>
                            <td>74.00%</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">ABA</th>
                            <td>&#60; 5%</td>
                            <td>5%</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">AHT</th>
                            <td>00:05:30</td>
                            <td className="text-danger"><b>00:04:04</b></td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">ASA</th>
                            <td>&#60; 00:00:20</td>
                            <td>&#60; 00:00:00</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">Productividad / conversión</th>
                            <td>50% </td>
                            <td>36% </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }

}

class Tabla2 extends Component {
    render() {
        return (
            <div>
                <table className="table table-bordered" >
                    <thead>
                        <tr className="bg-danger">
                            <th scope="col">Niveles de Servicio</th>
                            <th scope="col">Ventas </th>
                            <th scope="col">FEBRERO</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" className="bg-danger">SVL</th>
                            <td>95.00%</td>
                            <td class="text-danger"><b>76.00%</b></td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">ABA</th>
                            <td>&#60;5%</td>
                            <td>10%</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">AHT</th>
                            <td>00:04:30</td>
                            <td>00:04:06</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">ASA</th>
                            <td>&#60; 00:00:20</td>
                            <td>&#60; 00:00:00</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">Productividad / conversión</th>
                            <td>90% </td>
                            <td class="text-danger"><b>85.3%</b></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}


class TablaK1 extends Component {
    render() {
        return (
            <div>
                <table className="table table-bordered" >
                    <thead>
                        <tr className="bg-danger">
                            <th scope="col">Niveles de Servicio</th>
                            <th scope="col">Atención a Clientes </th>
                            <th scope="col">MARZO</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" className="bg-danger">SVL</th>
                            <td>35.00%</td>
                            <td>50.00%</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">ABA</th>
                            <td>&#60; 5%</td>
                            <td>16%</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">AHT</th>
                            <td>00:05:30</td>
                            <td className="text-danger"><b>00:06:29</b></td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">ASA</th>
                            <td>&#60; 00:00:20</td>
                            <td>&#60; 00:01:23</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">Productividad / conversión</th>
                            <td>50% </td>
                            <td>48% </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }

}

class TablaK2 extends Component {
    render() {
        return (
            <div>
                <table className="table table-bordered" >
                    <thead>
                        <tr className="bg-danger">
                            <th scope="col">Niveles de Servicio</th>
                            <th scope="col">Ventas </th>
                            <th scope="col">MARZO</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" className="bg-danger">SVL</th>
                            <td>95.00%</td>
                            <td class="text-danger"><b>61%</b></td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">ABA</th>
                            <td>&#60;5%</td>
                            <td>23%</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">AHT</th>
                            <td>00:04:30</td>
                            <td>00:06:54</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">ASA</th>
                            <td>&#60; 00:00:20</td>
                            <td>&#60; 00:01:15</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">Productividad / conversión</th>
                            <td>90% </td>
                            <td class="text-danger"><b>101.00%</b></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}


class TablaK3 extends Component {
    render() {
        return (
            <div>
                <table className="table table-bordered">
                    <thead>
                        <tr className="bg-danger">
                            <th scope="col">Niveles de Servicio</th>
                            <th scope="col" classname="bg-er">Atención a Clientes</th>
                            <th scope="col" classname="bg-">ABRIL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" className="bg-danger">SVL</th>
                            <td>95%</td>
                            <td>65%	</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">ABA</th>
                            <td>&lt; 5%</td>
                            <td>22%</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">AHT</th>
                            <td>00:05:30 a.m.</td>
                            <td>00:33 a.m.</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">ASA</th>
                            <td>00:00:20 a.m.</td>
                            <td>01:23 a.m.</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">Productividad / conversión</th>
                            <td>50%</td>
                            <td>50%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

class TablaK4 extends Component {
    render() {
        return (
            <div>
                <table className="table table-bordered">
                    <thead>
                        <tr  className="bg-danger">
                            <th scope="col" >Niveles de Servicio</th>
                            <th scope="col" classname="bg-">Ventas</th>
                            <th scope="col" classname="bg-">ABRIL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" className="bg-danger">SVL</th>
                            <td>95%</td>
                            <td>70%	</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">ABA</th>
                            <td>&lt; 5%</td>
                            <td>2%</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">AHT</th>
                            <td>00:04:30</td>
                            <td>07:47</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">ASA</th>
                            <td>00:00:20</td>
                            <td>01:13</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">Productividad / conversión</th>
                            <td>50%</td>
                            <td>50%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}


class TablaK5 extends Component {
    render() {
        return (
            <div>
                <table className="table table-bordered">
                    <thead>
                        <tr className="bg-danger">
                            <th scope="col">Niveles de Servicio</th>
                            <th scope="col" classname="bg-er">Atención a Clientes</th>
                            <th scope="col" classname="bg-">Mayo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" className="bg-danger">SVL</th>
                            <td>95.00%</td>
                            <td>78%	</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">ABA</th>
                            <td>&lt; 5%</td>
                            <td>10%</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">AHT</th>
                            <td>00:05:30</td>
                            <td className="text-danger"><strong>00:07:21</strong> </td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">ASA</th>
                            <td>00:00:20 </td>
                            <td>00:00:00</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">Productividad / conversión</th>
                            <td>50%</td>
                            <td>56%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

class TablaK6 extends Component {
    render() {
        return (
            <div>
                <table className="table table-bordered">
                    <thead>
                        <tr  className="bg-danger">
                            <th scope="col" >Niveles de Servicio</th>
                            <th scope="col" classname="bg-">Ventas</th>
                            <th scope="col" classname="bg-">Mayo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" className="bg-danger">SVL</th>
                            <td>95%</td>
                            <td>79%	</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">ABA</th>
                            <td>&lt; 5%</td>
                            <td>14%</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">AHT</th>
                            <td>00:04:30</td>
                            <td>00:06:59</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">ASA</th>
                            <td>00:00:20</td>
                            <td>00:00:00</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">Productividad / conversión</th>
                            <td>90%</td>
                            <td>109%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

class Tabla3 extends Component {
    render() {
        return (
            <table className="table table-bordered">
                <thead>
                    <tr className="bg-danger">
                        <th scope="col">INDICADORES ATENCION</th>
                        <th scope="col">sep-20</th>
                        <th scope="col">oct-20</th>
                        <th scope="col">nov-20 </th>
                        <th scope="col">dic-20</th>
                        <th scope="col">ene-21 </th>
                        <th scope="col">feb-21</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" className="bg-danger">Llamadas Recibidas Atencion</th>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1,880</td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1,456</td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1,761</td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>3,269 </td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>2,255</td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>4,035</td>
                    </tr>
                    <tr>
                        <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" className="bg-danger">Llamadas atendidas</th>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1,853</td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1,444</td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1,739</td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>3,016</td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1,956</td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>3,841</td>
                    </tr>
                    <tr>
                        <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" className="bg-danger">Llamadas atendidas de venta</th>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>202 </td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>187</td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>146 </td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>249</td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1,051</td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>755</td>
                    </tr>
                    <tr>
                        <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" className="bg-danger">Llamada abandonadas</th>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>27</td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>12</td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>22</td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>253</td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>299</td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>194</td>
                    </tr>
                    <tr>
                        <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" className="bg-danger">Nivel de Servicio</th>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>94%</td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>91%</td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>96%</td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>87%</td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>100%</td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>74%</td>
                    </tr>
                    <tr>
                        <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" className="bg-danger">% de Abandono ATN </th>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1.4% </td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0.8% </td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1.2% </td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>8.0% </td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>13.00% </td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>5.0% </td>
                    </tr>
                    <tr>
                        <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" className="bg-danger">AHT</th>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>00:05:39</td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>00:06:21</td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>00:06:49</td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>00:06:07</td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>00:06:14</td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>00:04:04</td>
                    </tr>
                    <tr>
                        <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" className="bg-danger">Nivel de Atención </th>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>99% </td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>99% </td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>99% </td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>92% </td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>87% </td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>95% </td>
                    </tr>
                    <tr>
                        <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" className="bg-danger">Ventas</th>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>392</td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>372</td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>439</td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1382</td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>727</td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>272</td>
                    </tr>
                    <tr>
                        <th scope="row" className="bg-danger" style={{ paddingTop: "5px", paddingBottom: "5px" }}>Conversión</th>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>194% </td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>199% </td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>301% </td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>93% </td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>69% </td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>36% </td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

class TablaI3 extends Component {
    render() {
        return (
            <table className="table table-bordered">
                <thead>
                    <tr className="bg-danger">
                        <th scope="col">INDICADORES ATENCION</th>
                        <th scope="col">sep-20</th>
                        <th scope="col">oct-20</th>
                        <th scope="col">nov-20 </th>
                        <th scope="col">dic-20</th>
                        <th scope="col">ene-21 </th>
                        <th scope="col">feb-21</th>
                        <th scope="col">mar-21</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" className="bg-danger">Llamadas Recibidas Atencion</th>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1,880</td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1,456</td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1,761</td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>3,269 </td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>2,255</td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>4,035</td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>3,385</td>
                    </tr>
                    <tr>
                        <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" className="bg-danger">Llamadas atendidas</th>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1,853</td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1,444</td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1,739</td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>3,016</td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1,956</td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>3,841</td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>2,854</td>
                    </tr>
                    <tr>
                        <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" className="bg-danger">Llamadas atendidas de venta</th>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>202 </td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>187</td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>146 </td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>249</td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1,051</td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>755</td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>578</td>
                    </tr>
                    <tr>
                        <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" className="bg-danger">Llamada abandonadas</th>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>27</td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>12</td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>22</td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>253</td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>299</td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>194</td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>531</td>
                    </tr>
                    <tr>
                        <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" className="bg-danger">Nivel de Servicio</th>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>94%</td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>91%</td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>96%</td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>87%</td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>100%</td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>74%</td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>55%</td>
                    </tr>
                    <tr>
                        <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" className="bg-danger">% de Abandono ATN </th>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1.4% </td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0.8% </td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1.2% </td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>8.0% </td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>13.00% </td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>5.0% </td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>16.00%</td>
                    </tr>
                    <tr>
                        <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" className="bg-danger">AHT</th>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>00:05:39</td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>00:06:21</td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>00:06:49</td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>00:06:07</td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>00:06:14</td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>00:04:04</td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>00:06:29</td>
                    </tr>
                    <tr>
                        <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" className="bg-danger">Nivel de Atención </th>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>99% </td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>99% </td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>99% </td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>92% </td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>87% </td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>95% </td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>84% </td>
                    </tr>
                    <tr>
                        <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" className="bg-danger">Ventas</th>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>392</td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>372</td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>439</td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1382</td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>727</td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>272</td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>279</td>
                    </tr>
                    <tr>
                        <th scope="row" className="bg-danger" style={{ paddingTop: "5px", paddingBottom: "5px" }}>Conversión</th>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>194% </td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>199% </td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>301% </td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>93% </td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>69% </td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>36% </td>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>48% </td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

class TablaI4 extends Component {
    render() {
        return (
            <div className="centrado-fila">
            <table className="table table-bordered">
                    <thead>
                        <tr className="bg-danger">
                            <th scope="col" >INDICADORES ATENCION</th>
                            <th scope="col" >sep-20</th>
                            <th scope="col" >oct-20</th>
                            <th scope="col" >nov-20</th>
                            <th scope="col" >dic-20</th>
                            <th scope="col" >ene-21</th>
                            <th scope="col" >feb-21</th>
                            <th scope="col" >mar-21</th>
                            <th scope="col" >abr-21</th>
                            <th scope="col" >may-21</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" className="bg-danger" >Llamadas Recibidas Atencion</th>
                            <td>1,880</td>
                            <td>1,456</td>
                            <td>1,761</td>
                            <td>3,269</td>
                            <td>2,255</td>
                            <td>4,035</td>
                            <td>3,385</td>
                            <td>1,924</td>
                            <td>1,520</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger" >Llamadas atendidas</th>
                            <td>1,853</td>
                            <td>1,444</td>
                            <td>1,739</td>
                            <td>3,016</td>
                            <td>1,956</td>
                            <td>3,841</td>
                            <td>2,854</td>
                            <td>1,492</td>
                            <td>1,373</td>
                        </tr>
                         <tr>
                            <th scope="row" className="bg-danger" >Llamadas atendidas de venta</th>
                            <td>202</td>
                            <td>187</td>
                            <td>146</td>
                            <td>249</td>
                            <td>1,051</td>
                            <td>755</td>
                            <td>578</td>
                            <td>428</td>
                            <td>360</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger" >Llamada abandonadas</th>
                            <td>27</td>
                            <td>12</td>
                            <td>22</td>
                            <td>253</td>
                            <td>299</td>
                            <td>194</td>
                            <td>531</td>
                            <td>432</td>
                            <td>147</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger" style={{ paddingTop: "5px", paddingBottom: "5px" }}>Nivel de Servicio</th>
                            <td>94%</td>
                            <td>91%</td>
                            <td>96%</td>
                            <td>87%</td>
                            <td>100%</td>
                            <td>74%</td>
                            <td>55%</td>
                            <td>65%</td>
                            <td>78%</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger" style={{ paddingTop: "5px", paddingBottom: "5px" }}>% de Abandono ATN</th>
                            <td>1.40%</td>
                            <td>0.80%</td>
                            <td>1.20%</td>
                            <td>8.00%</td>
                            <td>13.00%</td>
                            <td>5.00%</td>
                            <td>16.00%</td>
                            <td>22.00%</td>
                            <td>10.0%</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger" style={{ paddingTop: "5px", paddingBottom: "5px" }}>AHT</th>
                            <td>00:05:39</td>
                            <td>00:06:21</td>
                            <td>00:06:49</td>
                            <td>00:06:07</td>
                            <td>00:06:14</td>
                            <td>00:04:04</td>
                            <td>00:06:29</td>
                            <td>00:08:33</td>
                            <td>00:07:21</td>
                        </tr>
                         <tr>
                            <th scope="row" className="bg-danger" style={{ paddingTop: "5px", paddingBottom: "5px" }}>Nivel de Atención</th>
                            <td>99%</td>
                            <td>99%</td>
                            <td>99%</td>
                            <td>92%</td>
                            <td>87%</td>
                            <td>95%</td>
                            <td>84%</td>
                            <td>78%</td>
                            <td>90%</td>
                        </tr>
                         <tr>
                            <th scope="row" className="bg-danger" style={{ paddingTop: "5px", paddingBottom: "5px" }}>Ventas</th>
                            <td>392</td>
                            <td>372</td>
                            <td>439</td>
                            <td>1382</td>
                            <td>727</td>
                            <td>272</td>
                            <td>279</td>
                            <td>212</td>
                            <td>200</td>
                        </tr>
                         <tr>
                            <th scope="row" className="bg-danger" style={{ paddingTop: "5px", paddingBottom: "5px" }}>Conversión</th>
                            <td>194%</td>
                            <td>199%</td>
                            <td>301%</td>
                            <td>93%</td>
                            <td>69%</td>
                            <td>36%</td>
                            <td>48%</td>
                            <td>50%</td>
                            <td>56%</td>
                        </tr>
                       
                    </tbody>
                </table>
                </div>
        )
    }
}

class Tabla4 extends Component {
    render() {
        return (
            <div>
                <table className="table table-bordered">
                    <thead>
                        <tr className="bg-danger">
                            <th scope="col">INDICADORES VENTA NUEVA</th>
                            <th scope="col">sep-20</th>
                            <th scope="col">oct-20</th>
                            <th scope="col">nov-20 </th>
                            <th scope="col">dic-20</th>
                            <th scope="col">ene-21 </th>
                            <th scope="col">feb-21</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" className="bg-danger">Llamadas Recibidas VENTA NUEVA</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1,092</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1,033</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1,864</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>5,156 </td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>2,947</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>4,110</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" className="bg-danger">Llamadas atendidas</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1,039</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1,025</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1,791</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>4,319</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>2,407</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>3,691</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" className="bg-danger">Llamadas con peticion de venta</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>344 </td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>370</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>646 </td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1,185</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>684</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>807</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" className="bg-danger">Llamada abandonadas</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>53</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>8</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>73</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>837</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>540</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>419</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" className="bg-danger">Nivel de Servicio</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>94%%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>96%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>94%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>78%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>100%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>76%</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" className="bg-danger">% de Abandono venta nueva </th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>5% </td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1% </td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>4% </td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>16% </td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>18% </td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>10% </td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" className="bg-danger">AHT</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>00:05:33</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>00:06:06</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>00:04:07</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>00:04:34</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>00:05:34</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>00:04:06</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" className="bg-danger">Nivel de Atención </th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>95% </td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>99% </td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>96% </td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>84% </td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>82% </td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>90% </td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" className="bg-danger">Ventas</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>135</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>129</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>243</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>620</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>611</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>688</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" className="bg-danger">Conversión</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>39% </td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>35% </td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>38% </td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>52% </td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>89% </td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>85% </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

class TablaRVN4 extends Component {
    render() {
        return (
            <div>



                <table className="table table-bordered">
                    <thead>
                        <tr className="bg-danger">
                            <th scope="col">INDICADORES VENTA NUEVA</th>
                            <th scope="col">sep-20</th>
                            <th scope="col">oct-20</th>
                            <th scope="col">nov-20 </th>
                            <th scope="col">dic-20</th>
                            <th scope="col">ene-21 </th>
                            <th scope="col">feb-21</th>
                            <th scope="col">mar-21</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" className="bg-danger">Llamadas Recibidas VENTA NUEVA</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1,092</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1,033</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1,864</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>5,156 </td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>2,947</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>4,110</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>6,118</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" className="bg-danger">Llamadas atendidas</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1,039</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1,025</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1,791</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>4,319</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>2,407</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>3,691</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>4,709</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" className="bg-danger">Llamadas con peticion de venta</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>344 </td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>370</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>646 </td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1,185</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>684</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>807</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1871</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" className="bg-danger">Llamada abandonadas</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>53</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>8</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>73</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>837</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>540</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>419</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1409</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" className="bg-danger">Nivel de Servicio</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>94%%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>96%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>94%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>78%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>100%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>76%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>61%</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" className="bg-danger">% de Abandono venta nueva </th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>5% </td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1% </td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>4% </td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>16% </td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>18% </td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>10% </td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>23% </td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" className="bg-danger">AHT</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>00:05:33</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>00:06:06</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>00:04:07</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>00:04:34</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>00:05:34</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>00:04:06</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>00:06:54</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" className="bg-danger">Nivel de Atención </th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>95% </td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>99% </td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>96% </td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>84% </td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>82% </td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>90% </td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>77% </td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" className="bg-danger">Ventas</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>135</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>129</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>243</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>620</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>611</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>688</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1890</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" className="bg-danger">Conversión</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>39% </td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>35% </td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>38% </td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>52% </td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>89% </td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>85% </td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>101%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

class TablaRVN5 extends Component {
    render() {
        return (
            <div>
                <table className="table table-bordered">
                    <thead>
                        <tr className="bg-danger">
                            <th scope="col" classname="bg-">INDICADORES VENTA NUEVA</th>
                            <th scope="col" classname="bg-">sep-20</th>
                            <th scope="col" classname="bg-">oct-20</th>
                            <th scope="col" classname="bg-">nov-20</th>
                            <th scope="col" classname="bg-">dic-20</th>
                            <th scope="col" classname="bg-">ene-21</th>
                            <th scope="col" classname="bg-">feb-21</th>
                            <th scope="col" classname="bg-">mar-21</th>
                            <th scope="col" classname="bg-">abr-21</th>
                            <th scope="col" classname="bg-">may-21</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" className="bg-danger">Llamadas Recibidas Atencion VENTA NUEVA</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1,092</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1,033</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1,864</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>5,156</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>2,947</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>4,110</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>6,118</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>4,152</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>3,419</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">Llamadas atendidas</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1,039</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1,025</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1,791</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>4,319</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>2,407</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>3,691</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>4,709</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>3,288</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>2,944</td>
                        </tr>
                         <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" className="bg-danger">Llamadas con peticion de venta</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>344</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>370</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>646</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1,185</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>684</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>807</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1871</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1071</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>952</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" className="bg-danger">Llamada abandonadas</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>53</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>8</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>73</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>837</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>540</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>419</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1409</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>864</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>475</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" className="bg-danger">Nivel de Servicio</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>94%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>96%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>94%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>78%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>100%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>76%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>61%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>70%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>79%</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" className="bg-danger">% de Abandono venta nueva</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>5%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>4%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>16%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>18%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>10%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>20%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>21%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>14%</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" className="bg-danger">AHT</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>00:05:33</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>00:06:06</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>00:04:07</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>00:04:34</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>00:05:34</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>00:04:06</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>00:06:54</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>00:06:47</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>00:06:59</td>
                        </tr>
                         <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" className="bg-danger">Nivel de Atención</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>95%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>99%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>96%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>84%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>82%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>90%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>77%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>79%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>86%</td>
                        </tr>
                         <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" className="bg-danger">Ventas</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>135</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>129</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>243</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>620</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>611</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>688</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1890</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>12.66</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1,044</td>
                        </tr>
                         <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" className="bg-danger">Conversión</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>39%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>35%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>38%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>52%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>89%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>85%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>101%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>118%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>109%</td>
                        </tr>
                       
                    </tbody>
                </table>
            </div>
        )
    }
}

class Tabla5 extends Component {
    render() {
        return (
            <div>
                <table className="table table-bordered">
                    <thead>
                        <tr className="bg-danger">
                            <th style={{ paddingTop: "3px", paddingBottom: "3px" }} scope="col">Titulo</th>
                            <th style={{ paddingTop: "3px", paddingBottom: "3px" }} scope="col">#</th>
                            <th style={{ paddingTop: "3px", paddingBottom: "3px" }} scope="col">%</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th style={{ paddingTop: "3px", paddingBottom: "3px" }} scope="row" className=""><b>Total general</b></th>
                            <td style={{ paddingTop: "3px", paddingBottom: "3px" }}><b>3841</b></td>
                            <td style={{ paddingTop: "3px", paddingBottom: "3px" }}><b>100%</b></td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "3px", paddingBottom: "3px" }} scope="row" className="">APLICACIÓN DE PAGO</th>
                            <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>78</td>
                            <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>1%</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "3px", paddingBottom: "3px" }} scope="row" className="">CAMBIO DE REVISTA</th>
                            <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>19 </td>
                            <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>0%</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "3px", paddingBottom: "3px" }} scope="row" >CAMBIO O CORRECCIÓN DE DATOS</th>
                            <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>19</td>
                            <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>0%</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "3px", paddingBottom: "3px" }} scope="row" >CANCELACIONES</th>
                            <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>176</td>
                            <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>3%</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "3px", paddingBottom: "3px" }} scope="row" >DEVOLUCIÓN </th>
                            <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>25</td>
                            <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>0% </td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "3px", paddingBottom: "3px" }} scope="row" >FACTURACIÓN</th>
                            <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>35</td>
                            <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>1%</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "3px", paddingBottom: "3px" }} scope="row" >INFORMACIÓN </th>
                            <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>986 </td>
                            <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>23% </td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "3px", paddingBottom: "3px" }} scope="row" >INVESTIGACIÓN CORREO</th>
                            <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>22</td>
                            <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>0%</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "3px", paddingBottom: "3px" }} scope="row" >NO VENTA</th>
                            <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>97 </td>
                            <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>3% </td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "3px", paddingBottom: "3px" }} scope="row" >OTROS</th>
                            <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>689 </td>
                            <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>22% </td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "3px", paddingBottom: "3px" }} scope="row" >REPOSICIÓN</th>
                            <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>101 </td>
                            <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>4% </td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "3px", paddingBottom: "3px" }} scope="row" >SUSCRIPCIONES</th>
                            <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>912 </td>
                            <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>28% </td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "3px", paddingBottom: "3px" }} scope="row" >TRANSFERENCIA INTERNA</th>
                            <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>598 </td>
                            <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>0% </td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "3px", paddingBottom: "3px" }} scope="row" >VENTA CRUZADA</th>
                            <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>84 </td>
                            <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>0% </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

class Tabla6 extends Component {
    render() {
        return (
            <div>
                <table className="table table-bordered">
                    <thead>
                        <tr className="bg-danger">
                            <th style={{ paddingTop: "3px", paddingBottom: "3px" }} scope="col">Titulo</th>
                            <th style={{ paddingTop: "3px", paddingBottom: "3px" }} scope="col">#</th>
                            <th style={{ paddingTop: "3px", paddingBottom: "3px" }} scope="col">%</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th style={{ paddingTop: "3px", paddingBottom: "3px" }} scope="row" ><b>Total general</b></th>
                            <td style={{ paddingTop: "3px", paddingBottom: "3px" }}><b>2407</b></td>
                            <td style={{ paddingTop: "3px", paddingBottom: "3px" }}><b>100%</b></td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "3px", paddingBottom: "3px" }} scope="row" >APLICACIÓN DE PAGO</th>
                            <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>53</td>
                            <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>2%</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "3px", paddingBottom: "3px" }} scope="row" >CAMBIO DE REVISTA</th>
                            <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>9 </td>
                            <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>0%</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "3px", paddingBottom: "3px" }} scope="row" >CAMBIO O CORRECCIÓN DE DATOS</th>
                            <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>28</td>
                            <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>1%</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "3px", paddingBottom: "3px" }} scope="row" >CANCELACIONES</th>
                            <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>358</td>
                            <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>13%</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "3px", paddingBottom: "3px" }} scope="row" >DEVOLUCIÓN </th>
                            <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>8</td>
                            <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>0% </td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "3px", paddingBottom: "3px" }} scope="row" >FACTURACIÓN</th>
                            <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>17</td>
                            <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>1%</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "3px", paddingBottom: "3px" }} scope="row" >INFORMACIÓN </th>
                            <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>554 </td>
                            <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>28% </td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "3px", paddingBottom: "3px" }} scope="row" >INVESTIGACIÓN CORREO</th>
                            <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>4</td>
                            <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>0%</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "3px", paddingBottom: "3px" }} scope="row" >NO VENTA</th>
                            <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>5 </td>
                            <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>0% </td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "3px", paddingBottom: "3px" }} scope="row" >OTROS</th>
                            <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>476 </td>
                            <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>20% </td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "3px", paddingBottom: "3px" }} scope="row" >REPOSICIÓN</th>
                            <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>287 </td>
                            <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>8% </td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "3px", paddingBottom: "3px" }} scope="row" >SUSCRIPCIONES</th>
                            <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>488 </td>
                            <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>23% </td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "3px", paddingBottom: "3px" }} scope="row" >TRANSFERENCIA INTERNA</th>
                            <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>43 </td>
                            <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>0% </td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "3px", paddingBottom: "3px" }} scope="row" >VENTA CRUZADA</th>
                            <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>10 </td>
                            <td style={{ paddingTop: "3px", paddingBottom: "3px" }}>0% </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

class Tabla7 extends Component {
    render() {
        return (
            <div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col" className="bg-danger align-middle">PROMEDIO DNC</th>
                            <th scope="col" className="align-middle text-center text-white">96</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" className="bg-danger align-middle text-center">CURSOS</th>
                            <td className="align-middle text-center">
                                <img
                                    src={pc}
                                    width={400}
                                    alt="pc.png"
                                    className="img-fluid"
                                    style={{
                                        filter: "drop-shadow(2px 4px 6px rgba(0,0,0,0.5))"
                                    }}
                                    href="#" id="tooltip1"
                                />
                                <UncontrolledTooltip placement="right" target="tooltip1" >
                                    <span><p className="text-left">-Clientes difíciles</p></span>
                                    <span><p className="text-left">-Ventas</p></span>
                                   
                                </UncontrolledTooltip>
                                <UncontrolledTooltip placement="left" target="tooltip1" >
                                <span ><p className="text-left">-Gestión</p></span>
                                    <span ><p className="text-left">-Neuroventas</p></span>
                                </UncontrolledTooltip>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

class Tabla7a extends Component {
    render() {
        return (
            <div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col" className="bg-danger align-middle"> NOMBRE</th>
                            <th scope="col" className="bg-danger align-middle"> CALIFICACIÓN</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                JOSE EDUARDO CRUZ GARCIA
                            </td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">90</td>
                        </tr>
                        <tr>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                LUIS DANIEL  MALDONADO  GALVAN
                            </td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">90</td>
                        </tr>
                        <tr>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                ALEJANDRA IRAIS  MONROY JUAREZ
                            </td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">100</td>
                        </tr>
                        <tr>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                MARIANA  FLORES  HERNANDEZ
                            </td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">90</td>
                        </tr>
                        <tr>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                NANCY IBETH  PEÑA  ROMERO
                            </td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">85</td>
                        </tr>
                        <tr>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                PATRICIA  JIMENEZ  JUAREZ
                            </td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">100</td>
                        </tr>
                        <tr>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                LAURA GISELLE ROBLES  MEJIA
                            </td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">90</td>
                        </tr>
                        <tr>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                TERESA  TOVAR TREJO
                            </td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">90</td>
                        </tr>
                        <tr>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                MARIA DEL ROSARIO LESLIE TAGLE CISNEROS
                            </td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">85</td>
                        </tr>
                        <tr>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                MARIA DE LA LUZ ESTRADA  AGUILAR
                            </td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">85</td>
                        </tr>
                        <tr>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                LAURA JUNUEL SALDAÑA RIVERO
                            </td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">90</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}


class Tabla7a1 extends Component {
    render() {
        return (
            <div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col" className="bg-danger align-middle"> NOMBRE</th>
                            <th scope="col" className="bg-danger align-middle"> FECHA</th>
                            <th scope="col" className="bg-danger align-middle"> CURSO</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                JOSE EDUARDO CRUZ GARCIA
                            </td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                01/04/2021
                            </td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                Proceso de renovación anticipada
                            </td>
                        </tr>
                        <tr>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                LUIS DANIEL  MALDONADO  GALVAN
                            </td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                01/04/2021
                            </td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                Proceso de renovación anticipada
                            </td>
                        </tr>
                        <tr>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                ALEJANDRA IRAIS  MONROY JUAREZ
                            </td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                01/04/2021
                            </td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                Proceso de renovación anticipada
                            </td>
                        </tr>
                        <tr>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                JESUS ADRIAN RODRIGUEZ CASTAÑEDA
                            </td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                01/04/2021
                            </td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                Proceso de renovación anticipada
                            </td>
                        </tr>
                        <tr>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                DANIELA CARRASCO SILVA
                            </td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                01/04/2021
                            </td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                Proceso de renovación anticipada
                            </td>
                        </tr>
                        <tr>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                MARIA DEL ROSARIO LESLIE TAGLE CISNEROS
                            </td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                01/04/2021
                            </td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                Proceso de renovación anticipada
                            </td>
                        </tr>
                        <tr>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                LAURA JUNUEL SALDAÑA RIVERO
                            </td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                01/04/2021
                            </td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                Proceso de renovación anticipada
                            </td>
                        </tr>
                        <tr>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                NANCY IBETH  PEÑA  ROMERO
                            </td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                01/04/2021
                            </td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                Proceso de renovación anticipada
                            </td>
                        </tr>
                        <tr>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                MARIANA  FLORES  HERNANDEZ
                            </td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                01/04/2021
                            </td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                Proceso de renovación anticipada
                            </td>

                        </tr>
                        <tr>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                TERESA  TOVAR TREJO
                            </td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                01/04/2021
                            </td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                Proceso de renovación anticipada
                            </td>

                        </tr>
                        <tr>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                PATRICIA  JIMENEZ  JUAREZ
                            </td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                01/04/2021
                            </td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                Proceso de renovación anticipada
                            </td>
                        </tr>
                        <tr>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                LAURA GISELLE ROBLES MEJIA
                            </td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                01/04/2021
                            </td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                Proceso de renovación anticipada
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}


class Tabla7a2 extends Component {
    render() {
        return (
            <div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col" className="bg-danger align-middle"> NOMBRE</th>
                            <th scope="col" className="bg-danger align-middle"> FECHA</th>
                            <th scope="col" className="bg-danger align-middle"> CURSO</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                JOSE EDUARDO CRUZ GARCIA
                            </td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                01/04/2021
                            </td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                Etiqueta telefonica
                            </td>
                        </tr>
                        <tr>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                LUIS DANIEL  MALDONADO  GALVAN
                            </td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                01/04/2021
                            </td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                Etiqueta telefonica
                            </td>
                        </tr>
                        <tr>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                ALEJANDRA IRAIS  MONROY JUAREZ
                            </td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                01/04/2021
                            </td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                Etiqueta telefonica
                            </td>
                        </tr>
                        <tr>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                JESUS ADRIAN RODRIGUEZ CASTAÑEDA
                            </td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                01/04/2021
                            </td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                Etiqueta telefonica
                            </td>
                        </tr>
                        <tr>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                DANIELA CARRASCO SILVA
                            </td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                01/04/2021
                            </td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                Etiqueta telefonica
                            </td>
                        </tr>
                        <tr>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                MARIA DEL ROSARIO LESLIE TAGLE CISNEROS
                            </td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                01/04/2021
                            </td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                Etiqueta telefonica
                            </td>
                        </tr>
                        <tr>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                LAURA JUNUEL SALDAÑA RIVERO
                            </td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                01/04/2021
                            </td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                Etiqueta telefonica
                            </td>
                        </tr>
                        <tr>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                NANCY IBETH  PEÑA  ROMERO
                            </td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                01/04/2021
                            </td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                Etiqueta telefonica
                            </td>
                        </tr>
                        <tr>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                MARIANA  FLORES  HERNANDEZ
                            </td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                01/04/2021
                            </td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                Etiqueta telefonica
                            </td>
                        </tr>
                        <tr>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                TERESA  TOVAR TREJO
                            </td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                01/04/2021
                            </td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                Etiqueta telefonica
                            </td>
                        </tr>
                        <tr>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                PATRICIA  JIMENEZ  JUAREZ
                            </td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                01/04/2021
                            </td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                Etiqueta telefonica
                            </td>
                        </tr>
                        <tr>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                LAURA GISELLE ROBLES MEJIA
                            </td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                01/04/2021
                            </td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }} className="align-middle text-center">
                                Etiqueta telefonica
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}



class Tabla8 extends Component {
    render() {
        return (
            <div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col" className="bg-danger">Calidad ABC</th>
                            <th scope="col" className="bg-danger">Enero</th>
                            <th scope="col" className="bg-danger">Febrero</th>
                            <th scope="col" className="bg-danger">Febrero</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" className="bg-danger">A</th>
                            <td>25%</td>
                            <td>50%</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">B</th>
                            <td>75%</td>
                            <td>42%</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">C</th>
                            <td>0%</td>
                            <td>8%</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">Total</th>
                            <td>100%</td>
                            <td>100%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

class TablaCalidad8 extends Component {
    render() {
        return (
            <div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col" className="bg-danger">Calidad ABC</th>
                            <th scope="col" className="bg-danger">Enero-21</th>
                            <th scope="col" className="bg-danger">Febrero-21</th>
                            <th scope="col" className="bg-danger">Marzo-21</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" className="bg-danger">A</th>
                            <td>58%</td>
                            <td>54%</td>
                            <td>29%</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">B</th>
                            <td>42%</td>
                            <td>38%</td>
                            <td>71%</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">C</th>
                            <td>0%</td>
                            <td>8%</td>
                            <td>0%</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">Total</th>
                            <td>100%</td>
                            <td>100%</td>
                            <td>100%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}



class TablaCalidad9 extends Component {
    render() {
        return (
            <div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col" className="bg-danger">Calidad ABC</th>
                            <th scope="col" className="bg-danger">Enero-21</th>
                            <th scope="col" className="bg-danger">Febrero-21</th>
                            <th scope="col" className="bg-danger">Marzo-21</th>
                            <th scope="col" className="bg-danger">Abril-21</th>
                            <th scope="col" className="bg-danger">Mayo-21</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" className="bg-danger">A</th>
                            <td>58%</td>
                            <td>54%</td>
                            <td>29%</td>
                            <td>58%</td>
                            <td>80%</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">B</th>
                            <td>42%</td>
                            <td>38%</td>
                            <td>71%</td>
                            <td>42%</td>
                            <td>20%</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">C</th>
                            <td>0%</td>
                            <td>8%</td>
                            <td>0%</td>
                            <td>0%</td>
                            <td>0%</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">Total</th>
                            <td>100%</td>
                            <td>100%</td>
                            <td>100%</td>
                            <td>100%</td>
                            <td>100%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

class Tabla9 extends Component {
    render() {
        return (
            <div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col" className="bg-danger text-center">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ paddingBottom: "19px", paddingTop: "19px" }}>Dinámica de lectura/Durante la retroalimentación se proporciona una mini lectura focalizada a la venta con el fin de desarrollar el vocabulario del agente</td>
                        </tr>
                        <tr>
                            <td style={{ paddingBottom: "19px", paddingTop: "19px" }}>Clinica –Conoce a tu cliente ,con el fin de conocer los tipos de cliente que actualmente trabajamos como poder ofertar y debatir mediante su modo.</td>
                        </tr>
                        <tr>
                            <td style={{ paddingBottom: "19px", paddingTop: "19px" }}>Taller de servicio y trato al cliente,al brindar un servicio de excelencia despejando dudas ofertando adicional y no generar tiempos de espera creamos esa fidelidad con el cliente.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

class Tabla10 extends Component {
    render() {
        return (
            <div>
                <table className="table table-bordered" >
                    <thead>
                        <tr>
                            <th scope="col" className="bg-danger text-center"></th>
                            <th scope="col" className="bg-danger text-center">Detalle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Voz y Vocabulario</th>
                            <td>Agentes presenta muletillas y extranjerismos durante la interacción con el cliente.</td>
                        </tr>
                        <tr>
                            <th>Manejo de objeciones</th>
                            <td>Agente no realiza debate de objeciones para concretar la venta de una forma adecuada. </td>
                        </tr>
                        <tr>
                            <th>Ayuda Adicional/Despedida</th>
                            <td>Agente no ofrece ayuda adicional antes de finalizar la interacción con el cliente.</td>
                        </tr>
                        <tr>
                            <th>Tiempo de Espera</th>
                            <td>Agente supera los tiempos en espera, no agradece al retomar nuevamente la llamada.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

class TablaTipi1 extends Component {
    render() {
        return (
            <div>
                <table className="table table-responsive table-bordered " >
                    <thead>
                        <tr className="bg-danger">
                            <th scope="col" className="align-middle">FECHA</th>
                            <th scope="col" className="align-middle">Aplicación de pago </th>
                            <th scope="col" className="align-middle">Cambio de revista</th>
                            <th scope="col" className="align-middle">Cambio o corrección de datos</th>
                            <th scope="col" className="align-middle">Cancelaciones</th>
                            <th scope="col" className="align-middle">Devolución</th>
                            <th scope="col" className="align-middle">Facturación</th>
                            <th scope="col" className="align-middle">Información</th>
                            <th scope="col" className="align-middle">Investigación correo</th>
                            <th scope="col" className="align-middle">No relacionadas</th>
                            <th scope="col" className="align-middle">No venta</th>
                            <th scope="col" className="align-middle">Renovación</th>
                            <th scope="col" className="align-middle">Renovación con revista adicional</th>
                            <th scope="col" className="align-middle">Reposición</th>
                            <th scope="col" className="align-middle">Suscripción nueva</th>
                            <th scope="col" className="align-middle">Suscripción nueva con rev adicional</th>
                            <th scope="col" className="align-middle">Transferencia interna</th>
                            <th scope="col" className="bg-danger align-middle">TOTAL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" className="bg-danger">sabado 1 de Mayo</th>
                            <td></td>
                            <td></td>
                            <td className="align-middle"></td>
                            <td className="align-middle"></td>
                            <td></td>
                            <td></td>
                            <td className="align-middle"></td>
                            <td></td>
                            <td className="align-middle"></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className="align-middle"></td>
                            <td className="align-middle"></td>
                            <td className="align-middle"></td>
                            <td className="align-middle"></td>
                            <td className="align-middle"></td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">domingo 2 de Mayo</th>
                            <td></td>
                            <td></td>
                            <td className="align-middle"></td>
                            <td className="align-middle"></td>
                            <td></td>
                            <td></td>
                            <td className="align-middle"></td>
                            <td></td>
                            <td className="align-middle"></td>
                            <td className="align-middle"></td>
                            <td></td>
                            <td></td>
                            <td className="align-middle"></td>
                            <td className="align-middle"></td>
                            <td className="align-middle"></td>
                            <td className="align-middle"></td>
                            <td className="align-middle"></td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">lunes 3 de Mayo</th>
                            <td className="align-middle">2</td>
                            <td></td>
                            <td></td>
                            <td className="align-middle">12</td>
                            <td></td>
                            <td></td>
                            <td className="align-middle">54</td>
                            <td></td>
                            <td className="align-middle">18</td>
                            <td className="align-middle">7</td>
                            <td className="align-middle">10</td>
                            <td className="align-middle">1</td>
                            <td className="align-middle">71</td>
                            <td className="align-middle">3</td>
                            <td className="align-middle">1</td>
                            <td className="align-middle">6</td>
                            <td className="align-middle">185</td>
                            
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">martes 4 de Mayo</th>
                            <td className="align-middle">2</td>
                            <td></td>
                            <td></td>
                            <td className="align-middle">10</td>
                            <td></td>
                            <td></td>
                            <td className="align-middle">56</td>
                            <td></td>
                            <td className="align-middle">9</td>
                            <td className="align-middle">2</td>
                            <td className="align-middle">9</td>
                            <td className="align-middle">2</td>
                            <td className="align-middle">39</td>
                            <td className="align-middle">5</td>
                            <td className="align-middle">0</td>
                            <td className="align-middle">2</td>
                            <td className="align-middle">136</td>
                            
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">miercoles 5 de Mayo</th>
                            <td className="align-middle">1</td>
                            <td></td>
                            <td className="align-middle">1</td>
                            <td className="align-middle">6</td>
                            <td></td>
                            <td className="align-middle">1</td>

                            <td className="align-middle">48</td>
                            <td></td>
                            <td className="align-middle">6</td>
                            <td className="align-middle">6</td>
                            <td className="align-middle">2</td>
                            <td className="align-middle">1</td>
                            <td className="align-middle">33</td>
                            <td className="align-middle">7</td>
                            <td className="align-middle">1</td>
                            <td className="align-middle">3</td>
                            <td className="align-middle">116</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">Juevez 6 de Mayo</th>
                            <td className="align-middle">4</td>
                            <td></td>
                            <td></td>
                            <td className="align-middle">11</td>
                            <td></td>
                            <td></td>
                            <td className="align-middle">55</td>
                            <td></td>
                            <td className="align-middle">3</td>
                            <td className="align-middle">2</td>
                            <td className="align-middle">2</td>
                            <td className="align-middle">1</td>
                            <td className="align-middle">42</td>
                            <td className="align-middle">6</td>
                            <td className="align-middle">2</td>
                            <td className="align-middle">3</td>
                            <td className="align-middle">131</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">viernes 7 de Mayo</th>
                            <td>1</td>
                            <td></td>
                            <td></td>
                            <td>5</td>
                            <td></td>
                            <td></td>
                            <td>63</td>
                            <td></td>
                            <td>6</td>
                            <td>6</td>
                            <td>6</td>
                            <td></td>
                            <td>26</td>
                            <td>6</td>
                            <td>1</td>
                            <td>5</td>
                            <td>125</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">sábado 8 de Mayo</th>
                            <td></td>
                            <td></td>
                            <td className="align-middle">1</td>
                            <td className="align-middle">1</td>
                            <td></td>
                            <td></td>
                            <td className="align-middle">14</td>
                            <td></td>
                            <td className="align-middle">2</td>
                            <td className="align-middle">4</td>
                            <td className="align-middle">1</td>
                            <td></td>
                            <td className="align-middle">19</td>
                            <td className="align-middle">8</td>
                            <td></td>
                            <td className="align-middle">2</td>
                            <td className="align-middle">52</td>
                           
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">Domingo 9 de Mayo</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">Lunes 10 de Mayo</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className="align-middle">2</td>
                            <td></td>
                            <td className="align-middle">2</td>
                            <td className="align-middle">43</td>
                            <td></td>
                            <td className="align-middle">15</td>
                            <td className="align-middle">5</td>
                            <td className="align-middle">4</td>
                            <td className="align-middle">1</td>
                            <td className="align-middle">21</td>
                            <td className="align-middle">4</td>
                            <td></td>
                            <td className="align-middle">1</td>
                            <td className="align-middle">98</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">martes 11 de Mayo</th>
                            <td className="align-middle">2</td>
                            <td></td>
                            <td className="align-middle">1</td>
                            <td className="align-middle">5</td>
                            <td className="align-middle">1</td>
                            <td></td>
                            <td className="align-middle">40</td>
                            <td></td>
                            <td className="align-middle">8</td>
                            <td className="align-middle">11</td>
                            <td className="align-middle">6</td>
                            <td></td>
                            <td className="align-middle">34</td>
                            <td className="align-middle">4</td>
                            <td className="align-middle">1</td>
                            <td className="align-middle">1</td>
                            <td className="align-middle">114</td>
                            
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">miércoles 12 de mayo</th>
                            <td></td>
                            <td></td>
                            <td className="align-middle">2</td>
                            <td className="align-middle">4</td>
                            <td></td>
                            <td></td>
                            <td className="align-middle">53</td>
                            <td></td>
                            <td className="align-middle">10</td>
                            <td className="align-middle">7</td>
                            <td className="align-middle">10</td>
                            <td className="align-middle">1</td>
                            <td className="align-middle">36</td>
                            <td className="align-middle">8</td>
                            <td className="align-middle">2</td>
                            <td className="align-middle">3</td>
                            <td className="align-middle">136</td>
                           
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">jueves 13 de mayo</th>
                            <td className="align-middle">3</td>
                            <td></td>
                            <td></td>
                            <td className="align-middle">3</td>
                            <td></td>
                            <td></td>
                            <td className="align-middle">42</td>
                            <td></td>
                            <td className="align-middle">9</td>
                            <td className="align-middle">3</td>
                            <td className="align-middle">7</td>
                            <td className="align-middle">1</td>
                            <td className="align-middle">35</td>
                            <td className="align-middle">5</td>
                            <td></td>
                            <td></td>
                            <td className="align-middle">108</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">viernes 14 de mayo</th>
                            <td className="align-middle">1</td>
                            <td></td>
                            <td className="align-middle">1</td>
                            <td className="align-middle">4</td>
                            <td></td>
                            <td className="align-middle">1</td>
                            <td className="align-middle">38</td>
                            <td></td>
                            <td className="align-middle">12</td>
                            <td className="align-middle">4</td>
                            <td className="align-middle">5</td>
                            <td className="align-middle">2</td>
                            <td className="align-middle">34</td>
                            <td className="align-middle">5</td>
                            <td className="align-middle">1</td>
                            <td></td>
                            <td className="align-middle">108</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">sábado 15 de mayo</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className="align-middle">1</td>
                            <td></td>
                            <td></td>
                            <td className="align-middle">13</td>
                            <td></td>
                            <td className="align-middle">3</td>
                            <td></td>
                            <td className="align-middle">6</td>
                            <td></td>
                            <td className="align-middle">5</td>
                            <td className="align-middle">1</td>
                            <td className="align-middle">1</td>
                            <td></td>
                            <td className="align-middle">30</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">domingo 16 de mayo</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className="align-middle"></td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">lunes 17 de mayo</th>
                            <td className="align-middle">1</td>
                            <td className="align-middle">1</td>
                            <td className="align-middle">1</td>
                            <td className="align-middle">1</td>
                            <td></td>
                            <td className="align-middle">1</td>
                            <td className="align-middle">42</td>
                            <td></td>
                            <td className="align-middle">13</td>
                            <td className="align-middle">5</td>
                            <td className="align-middle">3</td>
                            <td className="align-middle">2</td>
                            <td className="align-middle">34</td>
                            <td className="align-middle">3</td>
                            <td></td>
                            <td></td>
                            <td className="align-middle">107</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">martes 18 de mayo</th>
                            <td className="align-middle">3</td>
                            <td></td>
                            <td className="align-middle">4</td>
                            <td className="align-middle">6</td>
                            <td></td>
                            <td className="align-middle">1</td>
                            <td className="align-middle">54</td>
                            <td></td>
                            <td className="align-middle">8</td>
                            <td className="align-middle">3</td>
                            <td className="align-middle">4</td>
                            <td></td>
                            <td className="align-middle">29</td>
                            <td className="align-middle">5</td>
                            <td></td>
                            <td></td>
                            <td className="align-middle">117</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">miércoles 19 de mayo</th>
                            <td className="align-middle">1</td>
                            <td></td>
                            <td></td>
                            <td className="align-middle">2</td>
                            <td></td>
                            <td></td>
                            <td className="align-middle">52</td>
                            <td></td>
                            <td className="align-middle">16</td>
                            <td className="align-middle">4</td>
                            <td className="align-middle">5</td>
                            <td className="align-middle">4</td>
                            <td className="align-middle">32</td>
                            <td className="align-middle">2</td>
                            <td></td>
                            <td></td>
                            <td className="align-middle">118</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">jueves 20 de mayo</th>
                            <td className="align-middle">1</td>
                            <td></td>
                            <td className="align-middle">1</td>
                            <td className="align-middle">4</td>
                            <td className="align-middle">1</td>
                            <td></td>
                            <td className="align-middle">42</td>
                            <td></td>
                            <td className="align-middle">13</td>
                            <td className="align-middle">4</td>
                            <td className="align-middle">3</td>
                            <td></td>
                            <td className="align-middle">30</td>
                            <td className="align-middle">3</td>
                            <td className="align-middle">2</td>
                            <td></td>
                            <td className="align-middle">104</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">viernes 21 de mayo</th>
                            <td className="align-middle">1</td>
                            <td></td>
                            <td className="align-middle">1</td>
                            <td className="align-middle">5</td>
                            <td></td>
                            <td></td>
                            <td className="align-middle">32</td>
                            <td></td>
                            <td className="align-middle">12</td>
                            <td className="align-middle">1</td>
                            <td className="align-middle">4</td>
                            <td></td>
                            <td className="align-middle">26</td>
                            <td className="align-middle">4</td>
                            <td></td>
                            <td></td>
                            <td className="align-middle">86</td>
                        </tr>
                       
                        <tr>
                            <th scope="row" className="bg-danger">sábado 22 de mayo</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className="align-middle">1</td>
                            <td></td>
                            <td></td>
                            <td className="align-middle">7</td>
                            <td></td>
                            <td className="align-middle"> 2</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className="align-middle">5</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className="align-middle">15</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">domingo 23 de mayo</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className="align-middle"></td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">lunes 24 de mayo</th>
                            <td className="align-middle">1</td>
                            <td className="align-middle">1</td>
                            <td className="align-middle">2</td>
                            <td className="align-middle">11</td>
                            <td></td>
                            <td></td>
                            <td className="align-middle">52</td>
                            <td></td>
                            <td className="align-middle">23</td>
                            <td className="align-middle">6</td>
                            <td className="align-middle">7</td>
                            <td></td>
                            <td className="align-middle">32</td>
                            <td className="align-middle">6</td>
                            <td className="align-middle">1</td>
                            <td></td>
                            <td className="align-middle">142</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">martes 25 de mayo</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className="align-middle">8</td>
                            <td className="align-middle">2</td>
                            <td></td>
                            <td className="align-middle">56</td>
                            <td></td>
                            <td className="align-middle">9</td>
                            <td className="align-middle">9</td>
                            <td className="align-middle">3</td>
                            <td className="align-middle">2</td>
                            <td className="align-middle">30</td>
                            <td className="align-middle">5</td>
                            <td></td>
                            <td className="align-middle">1</td>
                            <td className="align-middle">125</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">miércoles 26 de mayo</th>
                            <td className="align-middle">2</td>
                            <td className="align-middle">1</td>
                            <td className="align-middle">1</td>
                            <td className="align-middle">7</td>
                            <td className="align-middle">1</td>
                            <td></td>
                            <td className="align-middle">40</td>
                            <td></td>
                            <td className="align-middle">15</td>
                            <td className="align-middle">10</td>
                            <td className="align-middle">9</td>
                            <td></td>
                            <td className="align-middle">31</td>
                            <td className="align-middle">7</td>
                            <td></td>
                            <td></td>
                            <td className="align-middle">124</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">jueves 27 de mayo</th>
                            <td className="align-middle">2</td>
                            <td></td>
                            <td className="align-middle">2</td>
                            <td className="align-middle">3</td>
                            <td className="align-middle">1</td>
                            <td></td>
                            <td className="align-middle">46</td>
                            <td></td>
                            <td className="align-middle">9</td>
                            <td className="align-middle">3</td>
                            <td className="align-middle">8</td>
                            <td className="align-middle">2</td>
                            <td className="align-middle">34</td>
                            <td className="align-middle">7</td>
                            <td></td>
                            <td></td>
                            <td className="align-middle">117</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">viernes 28 de mayo</th>
                            <td className="align-middle">2</td>
                            <td></td>
                            <td className="align-middle">1</td>
                            <td className="align-middle">3</td>
                            <td></td>
                            <td></td>
                            <td className="align-middle">32</td>
                            <td></td>
                            <td className="align-middle">12</td>
                            <td className="align-middle">4</td>
                            <td className="align-middle">2</td>
                            <td className="align-middle">2</td>
                            <td className="align-middle">19</td>
                            <td className="align-middle">3</td>
                            <td></td>
                            <td></td>
                            <td className="align-middle">80</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">sábado 29 de mayo</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className="align-middle">3</td>
                            <td></td>
                            <td></td>
                            <td className="align-middle">12</td>
                            <td></td>
                            <td className="align-middle">2</td>
                            <td></td>
                            <td className="align-middle">3</td>
                            <td className="align-middle">1</td>
                            <td className="align-middle">2</td>
                            <td className="align-middle">1</td>
                            <td></td>
                            <td></td>
                            <td className="align-middle">24</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">domingo 30 de mayo</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">lunes 31 de mayo</th>
                            <td className="align-middle">3</td>
                            <td></td>
                            <td className="align-middle">2</td>
                            <td className="align-middle">6</td>
                            <td className="align-middle">1</td>
                            <td></td>
                            <td className="align-middle">56</td>
                            <td></td>
                            <td className="align-middle">15</td>
                            <td className="align-middle">3</td>
                            <td className="align-middle">1</td>
                            <td></td>
                            <td className="align-middle">29</td>
                            <td className="align-middle">9</td>
                            <td></td>
                            <td></td>
                            <td className="align-middle">129</td>
                        </tr>
                       
                       
                       
                        
                       
                        <tr>
                            <th scope="row" className="bg-danger">TOTAL</th>
                            <td></td>
                            <td className="align-middle">33</td>
                            <td className="align-middle">3</td>
                            <td className="align-middle">21</td>
                            <td className="align-middle">124</td>
                            <td className="align-middle">7</td>
                            <td className="align-middle">6</td>
                            <td className="align-middle">1,042</td>
                            <td className="align-middle"></td>
                            <td className="align-middle">250</td>
                            <td className="align-middle">109</td>
                            <td className="align-middle">18</td>
                            <td className="align-middle">120</td>
                            <td className="align-middle">23</td>
                            <td className="align-middle">0</td>
                            <td className="align-middle">117 </td>
                            <td className="align-middle">13 </td>
                            <td className="align-middle">27 </td>
                            <td className="align-middle text-danger" style={{ fontSize: "20px", }}><strong>2,623</strong></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}


class TablaTipi2 extends Component {
    render() {
        return (
            <div>
                <table className="table table-bordered" >
                    <thead>
                        <tr className="bg-danger">
                            <th scope="col" className="align-middle">FECHA</th>
                            <th scope="col" className="align-middle">Atención a Clientes</th>
                            <th scope="col" className="align-middle">No relacionadas</th>
                            <th scope="col" className="align-middle">No Venta</th>
                            <th scope="col" className="align-middle">Suscripción nueva con rev adicional</th>
                            <th scope="col" className="align-middle">Transferencia interna</th>
                            <th scope="col" className="align-middle">Suscripción nueva</th>
                            <th scope="col" className="bg-danger align-middle">TOTAL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" className="bg-danger">sábado 1 de mayo</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">domingo 2 de mayo</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">lunes 3 de mayo</th>
                            <td>3</td>
                            <td>6</td>
                            <td>3</td>
                            <td>8</td>
                            <td></td>
                            <td>49</td>
                            <td>63</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">martes 4 de mayo</th>
                            <td>1</td>
                            <td>8</td>
                            <td>7</td>
                            <td></td>
                            <td>1</td>
                            <td>39</td>
                            <td>56</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">miércoles 5 de mayo</th>
                            <td>3</td>
                            <td>6</td>
                            <td>11</td>
                            <td>11</td>
                            <td></td>
                            <td>21</td>
                            <td>52</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">jueves 6 de mayo</th>
                            <td>3</td>
                            <td>4</td>
                            <td>4</td>
                            <td>5</td>
                            <td></td>
                            <td>32</td>
                            <td>48</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">viernes 7 de mayo</th>
                            <td>4</td>
                            <td>7</td>
                            <td>7</td>
                            <td>5</td>
                            <td></td>
                            <td>39</td>
                            <td>62</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">sábado 8 de mayo</th>
                            <td></td>
                            <td>6</td>
                            <td>3</td>
                            <td>1</td>
                            <td>1</td>
                            <td>13</td>
                            <td>24</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">domingo 9 de mayo</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">lunes 10 de mayo</th>
                            <td>2</td>
                            <td>4</td>
                            <td>5</td>
                            <td>4</td>
                            <td></td>
                            <td>30</td>
                            <td>45</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">martes 11 de mayo</th>
                            <td>2</td>
                            <td>2</td>
                            <td>9</td>
                            <td>7</td>
                            <td></td>
                            <td>21</td>
                            <td>41</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">miércoles 12 de mayo</th>
                            <td></td>
                            <td>9</td>
                            <td>6</td>
                            <td>6</td>
                            <td></td>
                            <td>32</td>
                            <td>56</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">jueves 13 de mayo</th>
                            <td>2</td>
                            <td>19</td>
                            <td>10</td>
                            <td>8</td>
                            <td></td>
                            <td>39</td>
                            <td>78</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">viernes 14 de mayo</th>
                            <td>9</td>
                            <td>6</td>
                            <td>7</td>
                            <td>3</td>
                            <td></td>
                            <td>30</td>
                            <td>55</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">sábado 15 de mayo</th>
                            <td>3</td>
                            <td>2</td>
                            <td>4</td>
                            <td>5</td>
                            <td></td>
                            <td>13</td>
                            <td>27</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">domingo 16 de mayo</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">lunes 17 de mayo</th>
                            <td>15</td>
                            <td>4</td>
                            <td>3</td>
                            <td>3</td>
                            <td></td>
                            <td>33</td>
                            <td>58</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">martes 18 de mayo</th>
                            <td>14</td>
                            <td>20</td>
                            <td>12</td>
                            <td>5</td>
                            <td></td>
                            <td>38</td>
                            <td>89</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">miércoles 19 de mayo</th>
                            <td>7</td>
                            <td>27</td>
                            <td>6</td>
                            <td>6</td>
                            <td></td>
                            <td>25</td>
                            <td>71</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">jueves 20 de mayo</th>
                            <td>13</td>
                            <td>9</td>
                            <td>10</td>
                            <td>8</td>
                            <td></td>
                            <td>45</td>
                            <td>85</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">viernes 21 de mayo</th>
                            <td>13</td>
                            <td>21</td>
                            <td>6</td>
                            <td>2</td>
                            <td></td>
                            <td>29</td>
                            <td>71</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">sábado 22 de mayo</th>
                            <td>1</td>
                            <td>2</td>
                            <td>1</td>
                            <td></td>
                            <td></td>
                            <td>12</td>
                            <td>16</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">domingo 23 de mayo</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">lunes 24 de mayo</th>
                            <td>1</td>
                            <td>20</td>
                            <td>5</td>
                            <td>13</td>
                            <td></td>
                            <td>24</td>
                            <td>63</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">martes 25 de mayo</th>
                            <td>1</td>
                            <td>8</td>
                            <td>2</td>
                            <td>5</td>
                            <td></td>
                            <td>32</td>
                            <td>58</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">miércoles 26 de mayo</th>
                            <td>16</td>
                            <td>26</td>
                            <td>7</td>
                            <td>12</td>
                            <td></td>
                            <td>37</td>
                            <td>98</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">jueves 27 de mayo</th>
                            <td>10</td>
                            <td>8</td>
                            <td>5</td>
                            <td>9</td>
                            <td></td>
                            <td>43</td>
                            <td>75</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">viernes 28 de mayo</th>
                            <td>2</td>
                            <td>16</td>
                            <td>6</td>
                            <td>5</td>
                            <td></td>
                            <td>26</td>
                            <td>55</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">sábado 29 de mayo</th>
                            <td></td>
                            <td>3</td>
                            <td></td>
                            <td>3</td>
                            <td></td>
                            <td>6</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">domingo 30 de mayo</th>
                            <td>16</td>
                            <td>13</td>
                            <td>12</td>
                            <td>8</td>
                            <td></td>
                            <td>79</td>
                            <td>128</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">TOTAL</th>
                            <td>136</td>
                            <td>266</td>
                            
                            <td>140</td>
                            <td>185</td>
                            <td>2</td>
                            <td>708</td>
                            <td className="align-middle text-danger" style={{ fontSize: "20px", }}><strong>1,960</strong></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

class TablaRG extends Component {
    render() {
        return (
            <div>
                <table className="table table-bordered" >
                    <thead>
                        <tr>
                            <th scope="col" className="bg-danger text-center">INDICADORES</th>
                            <th scope="col" className="bg-danger text-center">Enero-21</th>
                            <th scope="col" className="bg-danger text-center">Febrero-21</th>
                            <th scope="col" className="bg-danger text-center">Marzo-21</th>
                            <th scope="col" className="bg-danger text-center">Abril-21</th>
                            <th scope="col" className="bg-danger text-center">Mayo-21</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th style={{ paddingTop: "7px", paddingBottom: "7px" }}>Llamadas Recibidas </th>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }}>5202</td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }}>8145</td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }}>9503</td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }}>6076</td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }}>4939</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "7px", paddingBottom: "7px" }}>Llamadas atendidas</th>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }}>4363 </td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }}>7532</td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }}>7563</td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }}>4780</td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }}>4317</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "7px", paddingBottom: "7px" }}>Llamadas con peticion de venta</th>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }}>1735</td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }}>1562</td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }}>2449</td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }}>1499</td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }}>1312</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "7px", paddingBottom: "7px" }}>Llamada abandonadas</th>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }}>839</td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }}>613</td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }}>1940</td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }}>1296</td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }}>622</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "7px", paddingBottom: "7px" }}>Nivel de Servicio</th>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }}>100%</td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }}>75%</td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }}>58%</td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }}>68%</td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }}>79%</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "7px", paddingBottom: "7px" }}>% de Abandono </th>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }}>15%</td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }}>8%</td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }}>20%</td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }}>22%</td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }}>12%</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "7px", paddingBottom: "7px" }}>AHT </th>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }}>12:05:34</td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }}>12:04:04</td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }}>12:06:44</td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }}>12:06:47</td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }}>12:06:59</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "7px", paddingBottom: "7px" }}>Nivel de Atención </th>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }}>85%</td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }}>93%</td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }}>81%</td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }}>79%</td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }}>88%</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "7px", paddingBottom: "7px" }}>Ventas </th>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }}>1338</td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }}>960</td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }}>2169</td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }}>1478</td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }}>1244</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "7px", paddingBottom: "7px" }}>Conversión  </th>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }}>79%</td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }}>61%</td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }}>75%</td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }}>84%</td>
                            <td style={{ paddingTop: "7px", paddingBottom: "7px" }}>83%</td>
                        </tr>
                    </tbody>
                </table>
            </div>


        )
    }
}

export {
    Tabla1, Tabla2, TablaK1, TablaK2, TablaK3, TablaK4, TablaK5,TablaK6, Tabla3, TablaI3, TablaI4,
     Tabla4, TablaRVN4, TablaRVN5, Tabla5, Tabla6, Tabla7, Tabla7a, Tabla7a1,
    Tabla7a2, Tabla8,
    TablaCalidad8, TablaCalidad9, Tabla9, Tabla10, TablaTipi1, TablaTipi2,TablaRG
};