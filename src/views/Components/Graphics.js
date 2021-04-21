import React, { Component } from "react";
import "../../index.css";
import "react-circular-progressbar/dist/styles.css";
import VisibilitySensor from "react-visibility-sensor";
import { Bar, Pie } from "react-chartjs-2";

const optionsBar = {
  tooltips: {
    show:true,
    enabled: true,
    
  callbacks: {
    label: function(tooltipItem, data) {
      //get the concerned dataset
      var dataset = data.datasets[tooltipItem.datasetIndex];
      //calculate the total of this data set
      var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
        return previousValue + currentValue;
      });
      //get the current items value
      var currentValue = dataset.data[tooltipItem.index];
      //calculate the precentage based on the total and current item, also this does a rough rounding to give a whole number
      var percentage = Math.floor(((currentValue/total) * 100)+0.5);

      return percentage + "%";
    }
  }
  },
  legend: {
    display: false
  },
  scales: {
    yAxes: [
      {
        min: 0,
        scaleLabel: {
          display: true,
          fontColor: "rgba(255,255,255,0.7)",
          fontSize: 10
        },
        ticks: {
          min: 0,
          fontColor: "rgba(255,255,255,0.7)",
          fontSize: 14
        },
        gridLines: {
          drawBorder: false
        }
      }
    ],
    xAxes: [
      {
        min: 0,
        scaleLabel: {
          display: true,
          fontColor: "rgba(255,255,255,0.7)",
          fontSize: 10
        },
        ticks: {
          min: 0,
          fontColor: "rgba(255,255,255,0.7)",
          fontSize: 14
        },
        gridLines: {
          display: false
        }
      }
    ]
  }
};

const optionsPie = {
  maintainAspectRatio: false,
  responsive: true,
  
  legend: {
    position: 'left',
    labels: {
      boxWidth: 10
    }
  },
  tooltips: {
    show:true,
    enabled: true,
    
  callbacks: {
    label: function(tooltipItem, data) {
      //get the concerned dataset
      var dataset = data.datasets[tooltipItem.datasetIndex];
      //calculate the total of this data set
      var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
        return previousValue + currentValue;
      });
      //get the current items value
      var currentValue = dataset.data[tooltipItem.index];
      //calculate the precentage based on the total and current item, also this does a rough rounding to give a whole number
      var percentage = Math.floor(((currentValue/total) * 100)+0.5);

      return percentage + "%";
    }
  }
  },
}


class BarChart1 extends Component {
  static defaultProps = {
    data: [194, 199, 301, 93, 69, 36]
  };

  getData(dataProp) {
    var data = {
      labels: ["Sep-20", "Oct-20", "Nov-20", "Dic-20", "Ene-21", "Feb-21"],
      datasets: [
        {
          label: "Conversión",
          backgroundColor: [
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)"
          ],
          data: dataProp
        }
      ]
    };
    return data;
  }

  render() {
    return (
      <VisibilitySensor>
        {({ isVisible }) => {
          return (
            <div className="chart-wrapper">
              <Bar
                width={400}
                height={150}
                data={
                  isVisible ? () => this.getData(this.props.data) : []
                }
                options={optionsBar}
              />
            </div>
          );
        }}
      </VisibilitySensor>
    );
  }
}

class BarChart2 extends Component {
  static defaultProps = {
    data: [39, 35, 38, 52, 89, 85]
  };

  getData(dataProp) {
    var data = {
      labels: ["Sep-20", "Oct-20", "Nov-20", "Dic-20", "Ene-21", "Feb-21"],
      datasets: [
        {
          label: "Conversión venta nueva",
          backgroundColor: [
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)"
          ],
          data: dataProp
        }
      ]
    };
    return data;
  }

  render() {
    return (
      <VisibilitySensor>
        {({ isVisible }) => {
          return (
            <div className="chart-wrapper">
              <Bar
                width={400}
                height={150}
                data={
                  isVisible ? () => this.getData(this.props.data) : []
                }
                options={optionsBar}
              />
            </div>
          );
        }}
      </VisibilitySensor>
    );
  }
}



class BarChart3 extends Component {
  static defaultProps = {
    data: [1880, 1456, 1761, 3269, 2255, 4035]
  };

  getData(dataProp) {
    var data = {
      labels: ["Sep-20", "Oct-20", "Nov-20", "Dic-20", "Ene-21", "Feb-21"],
      datasets: [
        {
          label: "Conversión venta nueva",
          backgroundColor: [
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)"
          ],
          data: dataProp
        }
      ]
    };
    return data;
  }

  render() {
    return (
      <VisibilitySensor>
        {({ isVisible }) => {
          return (
            <div className="chart-wrapper">
              <Bar
                width={400}
                height={250}
                data={
                  isVisible ? () => this.getData(this.props.data) : []
                }
                options={optionsBar}
              />
            </div>
          );
        }}
      </VisibilitySensor>
    );
  }
}


class BarChart4 extends Component {
  static defaultProps = {
    data: [527, 501, 682, 727, 927, 960]
  };

  getData(dataProp) {
    var data = {
      labels: ["Sep-20", "Oct-20", "Nov-20", "Dic-20", "Ene-21", "Feb-21"],
      datasets: [
        {
          label: "Conversión venta nueva",
          backgroundColor: [
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)"
          ],
          data: dataProp
        }
      ]
    };
    return data;
  }

  render() {
    return (
      <VisibilitySensor>
        {({ isVisible }) => {
          return (
            <div className="chart-wrapper">
              <Bar
                width={400}
                height={250}
                data={
                  isVisible ? () => this.getData(this.props.data) : []
                }
                options={optionsBar}
              />
            </div>
          );
        }}
      </VisibilitySensor>
    );
  }
}



class PieChart5 extends Component {
  static defaultProps = {
    data: [19, 19, 22, 25, 35, 78, 84, 97, 101, 176, 598, 689, 912, 986,]
  };

  getData(dataProp) {
    var data = {
      labels: [
        "CAMBIO DE REVISTA",
        "CAMBIO O CORRECCIÓN DE DATOS",
        "INVESTIGACIÓN CORREO",
        "TRANSFERENCIA INTERNA",
        "DEVOLUCIÓN",
        "FACTURACIÓN",
        "APLICACIÓN DE PAGO",
        "VENTA CRUZADA",
        "NO VENTA",
        "REPOSICIÓN",
        "CANCELACIONES",
        "OTROS",
        "SUSCRIPCIONES",
        "INFORMACIÓN",
      ],
      datasets: [
        {
          label: "Tipificación",
          backgroundColor: [
            "#194350",
            "#206a5d",
            "#ce1212",
            "#798777",
            "#f05945",
            "#464f41",
            "#56776c",
            "#5b8a72",
            "#2f5d62",
            "#364547",
            "#1e6f5c",
            "#e84545",
            "#424642",
            "#40394a",
          ],
          hoverBackgroundColor: [
            "rgba(192,3,39,0.4)",
            "rgba(192,3,39,0.4)",
            "rgba(192,3,39,0.4)",
            "rgba(192,3,39,0.4)",
            "rgba(192,3,39,0.4)",
            "rgba(192,3,39,0.4)",
            "rgba(192,3,39,0.4)",
            "rgba(192,3,39,0.4)",
            "rgba(192,3,39,0.4)",
            "rgba(192,3,39,0.4)",
            "rgba(192,3,39,0.4)",
            "rgba(192,3,39,0.4)",
            "rgba(192,3,39,0.4)",
            "rgba(192,3,39,0.4)",
          ],
          data: dataProp
        }
      ]
    };
    return data;
  }

  render() {
    return (
      <VisibilitySensor>
        {({ isVisible }) => {
          return (
            <div className="chart-wrapper">
              <Pie
                width={300}
                data={
                  isVisible ? () => this.getData(this.props.data) : []
                }
                options={optionsPie}
              />
            </div>
          );
        }}
      </VisibilitySensor>
    );
  }
}




// class BarChart5 extends Component {
//   static defaultProps = {
//     data: [78, 19, 19, 176, 25, 35, 986, 22, 97, 689, 101, 912, 598, 84]
//   };

//   getData(dataProp) {
//     var data = {
//       labels: ["APLICACIÓN DE PAGO", "CAMBIO DE REVISTA", "CAMBIO O CORRECCIÓN DE DATOS", "CANCELACIONES",
//         "DEVOLUCIÓN", "FACTURACIÓN", "INFORMACIÓN", "INVESTIGACIÓN CORREO", "NO VENTA", "OTROS",
//         "REPOSICIÓN", "SUSCRIPCIONES", "TRANSFERENCIA INTERNA", "VENTA CRUZADA"],
//       datasets: [
//         {
//           label: "Tipificación",
//           backgroundColor: [
//             "rgba(192,3,39,0.7)",
//             "rgba(192,3,39,0.7)",
//             "rgba(192,3,39,0.7)",
//             "rgba(192,3,39,0.7)",
//             "rgba(192,3,39,0.7)",
//             "rgba(192,3,39,0.7)",
//             "rgba(192,3,39,0.7)",
//             "rgba(192,3,39,0.7)",
//             "rgba(192,3,39,0.7)",
//             "rgba(192,3,39,0.7)",
//             "rgba(192,3,39,0.7)",
//             "rgba(192,3,39,0.7)",
//             "rgba(192,3,39,0.7)",
//             "rgba(192,3,39,0.7)"
//           ],
//           data: dataProp
//         }
//       ]
//     };
//     return data;
//   }

//   render() {
//     return (
//       <VisibilitySensor>
//         {({ isVisible }) => {
//           return (
//             <div className="chart-wrapper">
//               <Bar
//                 width={350}
//                 height={150}
//                 data={
//                   isVisible ? () => this.getData(this.props.data) : []
//                 }
//                 options={optionsBar}
//               />
//             </div>
//           );
//         }}
//       </VisibilitySensor>
//     );
//   }
// }


class PieChart6 extends Component {
  static defaultProps = {
    data: [4, 5, 8, 9, 10, 17, 28, 43, 53, 287, 358, 476, 488, 554,]
  };

  getData(dataProp) {
    var data = {
      labels: [
        "INVESTIGACIÓN CORREO",
        "NO VENTA",
        "DEVOLUCIÓN",
        "CAMBIO DE REVISTA",
        "VENTA CRUZADA",
        "FACTURACIÓN",
        "CAMBIO O CORRECCIÓN DE DATOS",
        "TRANSFERENCIA INTERNA",
        "APLICACIÓN DE PAGO",
        "REPOSICIÓN",
        "CANCELACIONES",
        "OTROS",
        "SUSCRIPCIONES",
        "INFORMACIÓN",
      ],
      datasets: [
        {
          label: "Tipificación",
          backgroundColor: [
            "#194350",
            "#206a5d",
            "#ce1212",
            "#798777",
            "#f05945",
            "#464f41",
            "#56776c",
            "#5b8a72",
            "#2f5d62",
            "#364547",
            "#1e6f5c",
            "#e84545",
            "#424642",
            "#40394a",
          ],
          hoverBackgroundColor: [
            "rgba(192,3,39,0.4)",
            "rgba(192,3,39,0.4)",
            "rgba(192,3,39,0.4)",
            "rgba(192,3,39,0.4)",
            "rgba(192,3,39,0.4)",
            "rgba(192,3,39,0.4)",
            "rgba(192,3,39,0.4)",
            "rgba(192,3,39,0.4)",
            "rgba(192,3,39,0.4)",
            "rgba(192,3,39,0.4)",
            "rgba(192,3,39,0.4)",
            "rgba(192,3,39,0.4)",
            "rgba(192,3,39,0.4)",
            "rgba(192,3,39,0.4)",
          ],
          data: dataProp
        }
      ]
    };
    return data;
  }

  render() {
    return (
      <VisibilitySensor>
        {({ isVisible }) => {
          return (
            <div className="chart-wrapper">
              <Pie
                width={300}
                data={
                  isVisible ? () => this.getData(this.props.data) : []
                }
                options={optionsPie}
              />
            </div>
          );
        }}
      </VisibilitySensor>
    );
  }
}


// class BarChart6 extends Component {
//   static defaultProps = {
//     data: [53, 9, 28, 358, 8, 17, 554, 4, 5, 476, 287, 488, 43, 10]
//   };

//   getData(dataProp) {
//     var data = {
//       labels: ["APLICACIÓN DE PAGO", "CAMBIO DE REVISTA", "CAMBIO O CORRECCIÓN DE DATOS", "CANCELACIONES",
//         "DEVOLUCIÓN", "FACTURACIÓN", "INFORMACIÓN", "INVESTIGACIÓN CORREO", "NO VENTA", "OTROS",
//         "REPOSICIÓN", "SUSCRIPCIONES", "TRANSFERENCIA INTERNA", "VENTA CRUZADA"],
//       datasets: [
//         {
//           label: "Tipificación",
//           backgroundColor: [
//             "rgba(192,3,39,0.7)",
//             "rgba(192,3,39,0.7)",
//             "rgba(192,3,39,0.7)",
//             "rgba(192,3,39,0.7)",
//             "rgba(192,3,39,0.7)",
//             "rgba(192,3,39,0.7)",
//             "rgba(192,3,39,0.7)",
//             "rgba(192,3,39,0.7)",
//             "rgba(192,3,39,0.7)",
//             "rgba(192,3,39,0.7)",
//             "rgba(192,3,39,0.7)",
//             "rgba(192,3,39,0.7)",
//             "rgba(192,3,39,0.7)",
//             "rgba(192,3,39,0.7)"
//           ],
//           data: dataProp
//         }
//       ]
//     };
//     return data;
//   }

//   render() {
//     return (
//       <VisibilitySensor>
//         {({ isVisible }) => {
//           return (
//             <div className="chart-wrapper">
//               <Bar
//                 width={350}
//                 height={150}
//                 data={
//                   isVisible ? () => this.getData(this.props.data) : []
//                 }
//                 options={optionsBar}
//               />
//             </div>
//           );
//         }}
//       </VisibilitySensor>
//     );
//   }
// }

class BarChart7 extends Component {
  static defaultProps = {
    data: [90, 90, 100, 90, 100, 100, 100, 100]
  };

  getData(dataProp) {
    var data = {
      labels: ["JOSE EDUARDO  CRUZ  GARCIA", "LUIS DANIEL  MALDONADO  GALVAN", "ARTURO ADAN ALCANTARA GUZMAN", "DIANA LAURA  GOYRE GARCIA ", "MARIANA  FLORES  HERNANDEZ", "PATRICIA  JIMENEZ  JUAREZ", "LAURA GISELLE ROBLES  MEJIA", "TERESA  TOVAR TREJO"],
      datasets: [
        {
          label: "AGENTES",
          backgroundColor: [
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)"
          ],
          data: dataProp
        }
      ]
    };
    return data;
  }

  render() {
    return (
      <VisibilitySensor>
        {({ isVisible }) => {
          return (
            <div className="chart-wrapper">
              <Bar
                width={400}
                height={150}
                data={
                  isVisible ? () => this.getData(this.props.data) : []
                }
                options={optionsBar}
              />
            </div>
          );
        }}
      </VisibilitySensor>
    );
  }
}

class BarChart8 extends Component {
  static defaultProps = {
    data: [94.72, 93.02]
  };

  getData(dataProp) {
    var data = {
      labels: ["Enero", "Febrero"],
      datasets: [
        {
          label: "Calidad Anual",
          backgroundColor: [
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
          ],
          data: dataProp
        }
      ]
    };
    return data;
  }

  render() {
    return (
      <VisibilitySensor>
        {({ isVisible }) => {
          return (
            <div className="chart-wrapper">
              <Bar
                width={400}
                height={350}
                data={
                  isVisible ? () => this.getData(this.props.data) : []
                }
                options={optionsBar}
              />
            </div>
          );
        }}
      </VisibilitySensor>
    );
  }
}


class BarChart9 extends Component {
  static defaultProps = {
    data: [25, 75, 0, 50, 42, 8]
  };

  getData(dataProp) {
    var data = {
      labels: [" ", " Enero", " ", " ", "Febrero", " ",],
      datasets: [
        {
          label: "ABC",
          backgroundColor: [
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
          ],
          data: dataProp
        }
      ]
    };
    return data;
  }

  render() {
    return (
      <VisibilitySensor>
        {({ isVisible }) => {
          return (
            <div className="chart-wrapper">
              <Bar
                width={400}
                height={350}
                data={
                  isVisible ? () => this.getData(this.props.data) : []
                }
                options={optionsBar}
              />
            </div>
          );
        }}
      </VisibilitySensor>
    );
  }
}


class BarChartDoble extends Component {
  static defaultProps = {
    data1: [0, 0, 0],
    data2: [0, 0, 0]
  };

  getData(dataProp) {
    var data = {
      labels: ["2018", "2019", "2020"],
      datasets: [
        {
          label: "",
          backgroundColor: [
            "rgba(192,3,39,0.6)",
            "rgba(192,3,39,0.7)",
            "rgba(50,50,50,0.8)"
          ],
          data: dataProp[0]
        },

        {
          label: "",
          backgroundColor: [
            "rgba(192,3,39,0.6)",
            "rgba(192,3,39,0.7)",
            "rgba(50,50,50,0.8)"
          ],
          data: dataProp[1]
        }
      ]
    };
    return data;
  }

  render() {
    return (
      <VisibilitySensor>
        {({ isVisible }) => {
          return (
            <div className="chart-wrapper">
              <Bar
                width={400}
                data={
                  isVisible ? () => this.getData(this.props.data) : [0, 0, 0]
                }
                options={optionsBar}
              />
            </div>
          );
        }}
      </VisibilitySensor>
    );
  }
}


// class BarChartDoble extends Component {
//   static defaultProps = {
//     data1: [0, 0, 0],
//     data2: [0, 0, 0],
//   };

//   getData(dataProp) {
//     var data = {
//       labels: ["2018", "2019", "2020"],
//       datasets: [
//         {
//           label: "",
//           backgroundColor: [
//             "rgba(192,3,39,0.6)",
//             "rgba(192,3,39,0.7)",
//             "rgba(50,50,50,0.8)"
//           ],
//           data: dataProp[0]
//         },

//         {
//           label: "",
//           backgroundColor: [
//             "rgba(192,3,39,0.6)",
//             "rgba(192,3,39,0.7)",
//             "rgba(50,50,50,0.8)"
//           ],
//           data: dataProp[1]
//         }
//       ]
//     };
//     return data;
//   }

//   render() {
//     return (
//       <VisibilitySensor>
//         {({ isVisible }) => {
//           return (
//             <div className="chart-wrapper">
//               <Bar
//                 width={400}
//                 data={
//                   isVisible ? () => this.getData(this.props.data) : [0, 0, 0]
//                 }
//                 options={optionsBar}
//               />
//             </div>
//           );
//         }}
//       </VisibilitySensor>
//     );
//   }
// }
export { BarChart1, BarChart2, BarChart3, BarChart4, PieChart5, PieChart6, BarChart7, BarChart8, BarChart9, BarChartDoble };
