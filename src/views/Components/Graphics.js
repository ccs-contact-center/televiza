import React, { Component } from "react";
import "../../index.css";
import "react-circular-progressbar/dist/styles.css";
import VisibilitySensor from "react-visibility-sensor";
import { Bar, Pie } from "react-chartjs-2";

const optionsBar = {
  tooltips: {
    show:true,
    enabled: true,
    
  
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

const optionsBar2 = {
  tooltips: {
    show:true,
    enabled: true,
    
  
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
    }, 
    legend: { display: true, position: "right" },
  },
  tooltips: {
    show:true,
    enabled: true,
    
  // callbacks: {
  //   label: function(tooltipItem, data) {
  //     //get the concerned dataset
  //     var dataset = data.datasets[tooltipItem.datasetIndex];
  //     //calculate the total of this data set
  //     var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
  //       return previousValue + currentValue;
  //     });
  //     //get the current items value
  //     var currentValue = dataset.data[tooltipItem.index];
  //     //calculate the precentage based on the total and current item, also this does a rough rounding to give a whole number
  //     var percentage = Math.floor(((currentValue/total) * 100)+0.5);

  //     return percentage + "%";
  //   }
  // }
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
          label: "Conversi??n",
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
    data: [89, 85, 101, 118, 109 ]
  };

  getData(dataProp) {
    var data = {
      labels: ["Ene-21","Feb-21","Mar-21","Abr-21","May-21"],
      datasets: [
        {
          label: "Ventas %",
          backgroundColor: [
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
                height={150}
                data={
                  isVisible ? () => this.getData(this.props.data) : []
                }
                options={optionsBar2}
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
    data: [69, 36, 48,50]
  };

  getData(dataProp) {
    var data = {
      labels: ["Ene-21","Feb-21","Mar-21","Abr-21"],
      datasets: [
        {
          label: "Conversi??n",
          backgroundColor: [
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
    data: [89,85,101,118]
  };

  getData(dataProp) {
    var data = {
      labels: ["Ene-21","Feb-21","Mar-21","Abr-21"],
      datasets: [
        {
          label: "Conversi??n",
          backgroundColor: [
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
    data: [33,3,21,124,7,6,1024,0,250,109,120,23,728,117,13,27,]
  };

  getData(dataProp) {
    var data = {
      labels: [
        "Aplicaci??n de pago",
        "Cambio de revista",
        "Cambio o correcci??n de datos",
        "Cancelaciones",
        "Devoluci??n",
        "Facturaci??n",
        "Informaci??n",
        "Investigaci??n correo",
        "No relacionadas",
        "No venta",
        "Renovaci??n",
        "Renovaci??n con revista adicional",
        "Reposici??n",
        "Suscripci??n nueva",
        "Suscripci??n nueva con rev adicional",
        "Transferencia interna", 
      ],
      datasets: [
        {
          label: "Tipificaci??n",
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
//       labels: ["APLICACI??N DE PAGO", "CAMBIO DE REVISTA", "CAMBIO O CORRECCI??N DE DATOS", "CANCELACIONES",
//         "DEVOLUCI??N", "FACTURACI??N", "INFORMACI??N", "INVESTIGACI??N CORREO", "NO VENTA", "OTROS",
//         "REPOSICI??N", "SUSCRIPCIONES", "TRANSFERENCIA INTERNA", "VENTA CRUZADA"],
//       datasets: [
//         {
//           label: "Tipificaci??n",
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
    data: [136,266,140,185,2,708,]
  };

  getData(dataProp) {
    var data = {
      labels: [
        "Atenci??n a Clientes",
        "No relacionadas",
        "No Venta",
        "Suscripci??n nueva con rev adicional",
        "Transferencia interna",
        "Suscripci??n nueva", 
      ],
      datasets: [
        {
          label: "Tipificaci??n",
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
//       labels: ["APLICACI??N DE PAGO", "CAMBIO DE REVISTA", "CAMBIO O CORRECCI??N DE DATOS", "CANCELACIONES",
//         "DEVOLUCI??N", "FACTURACI??N", "INFORMACI??N", "INVESTIGACI??N CORREO", "NO VENTA", "OTROS",
//         "REPOSICI??N", "SUSCRIPCIONES", "TRANSFERENCIA INTERNA", "VENTA CRUZADA"],
//       datasets: [
//         {
//           label: "Tipificaci??n",
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
    data: [91.1, 93.1, 96.2]
  };

  getData(dataProp) {
    var data = {
      labels: ["Marzo", "Abril","Mayo"],
      datasets: [
        {
          label: "QA Anual: %",
          backgroundColor: [
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


class BarChart9 extends Component {
  getData(dataProp) {
    var data = {
      labels: ["Enero", "Febrero","Marzo"],
      datasets: [
        {
          label: "",
          backgroundColor: [
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
          ],
          data: [29, 71,0, 2]
        },

        {
          label: "",
          backgroundColor: [
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
          ],
          data: [58 , 42,0,3]
        },
        {
          label: "",
          backgroundColor: [
            "rgba(192,3,39,0.7)", 
            "rgba(192,3,39,0.7)", 
            "rgba(192,3,39,0.7)", 
            "rgba(192,3,39,0.7)",
          ],
          data: [80, 20,0,3]
        },
        
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



class BarChartMar9 extends Component {
  static defaultProps = {
    data: [94.29, 93.02, 91.09]
  };

  getData(dataProp) {
    var data = {
      labels: [" Enero", "Febrero", "Marzo ",],
      datasets: [
        {
          label: "QA Anual           ",
          backgroundColor: [
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



class BarChartMar10 extends Component {
  static defaultProps = {
    data: [93, 91.1, 93.1]
  };

  getData(dataProp) {
    var data = {
      labels: [ "Febrero", "Marzo ", " Febrero",],
      datasets: [
        {
          label: "QA Anual           ",
          backgroundColor: [
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
  

  getData(dataProp) {
    var data = {
      labels: ["Marzo", "Abril", "Mayo"],
      datasets: [
        {
          label: "Marzo: %",
          backgroundColor: [
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
          ],
          data: [29, 58, 80]
        },

        {
          label: "Abri: %",
          backgroundColor: [
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
          ],
          data: [71, 42, 20]
        },
        {
          label: "Mayo: %",
          backgroundColor: [
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
          ],
          data: [0, 0, 0]
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
                width={1000}
               height={280}
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



class BarChartDoble2 extends Component {
  

  getData(dataProp) {
    var data = {
      labels: [ "Febrero", "Marzo", "Abril",],
      datasets: [
        {
          label: "",
          backgroundColor: [
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
          ],
          data: [54, 29, 58]
        },

        {
          label: "",
          backgroundColor: [
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
          ],
          data: [38, 71, 20]
        },
        {
          label: "",
          backgroundColor: [
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
          ],
          data: [8, 0, 20]
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
                width={1000}
               height={280}
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


class BarChartCapa extends Component {
  static defaultProps = {
    data: [90,90,90,90,100,100,100,100]
  };

  getData(dataProp) {
    var data = {
      labels: [ "JOSE EDUARDO CRUZ GARCIA", "Marzo ", " Febrero",],
      datasets: [
        {
          label: "QA Anual           ",
          backgroundColor: [
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
export { BarChart1, BarChart2, BarChart3, BarChart4, PieChart5, PieChart6, BarChart7, BarChart8, 
   BarChart9, BarChartMar9,  BarChartMar10,
  BarChartDoble, BarChartDoble2, BarChartCapa };
