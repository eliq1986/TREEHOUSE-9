const CHART = document.getElementById("lineChart").getContext("2d");
const barChart = document.getElementById("barChart").getContext("2d");
const pieChart = document.getElementById("pieChart").getContext("2d");
const sendButton = document.getElementById("send");


// sets line chart demographics
let lineChart = new Chart(CHART, {
  type: "line",
  data: {
    labels: [
      "16-22",
      "23-29",
      "30-5",
      "6-12",
      "13-19",
      "20-26",
      "27-3",
      "4-10",
      "11-17",
      "18-24",
      "25-31"
    ],
    datasets: [
      {
        label: '# of Votes',
        data: [
          500,
          200,
          1000,
          1800,
          2500,
          2000,
          400,
          1500,
          300,
          800,
          1200,
          2000
        ],
        backgroundColor: ['rgba(214, 206, 224, 0.4)'],
        borderColor: ["rgb(139, 153, 232)"],
        borderWidth: 1
      }
    ]
  },
  options: {
    title: {
      display: false,
      text: "Traffic",
      fontSize: 20,
      position: "top"
    },
    legend: {
      display: false
    }

  }

});

let bChart = new Chart(barChart, {
  type: "bar",
  data: {
    labels: [
      "S",
      "M",
      "T",
      "W",
      "T",
      "F",
      "S"
    ],
    datasets: [
      {
        label: '# of Votes',
        data: [
          50,
          100,
          180,
          120,
          230,
          200,
          140
        ],
        backgroundColor: [
          "#8b99e8",
          "#8b99e8",
          "#8b99e8",
          "#8b99e8",
          "#8b99e8",
          "#8b99e8",
          "#8b99e8"
        ],
        borderColor: [],
        borderWidth: 1
      }
    ]
  },
  options: {
    title: {
      display: false,
      text: "Daily Traffic",
      fontSize: 20,
      position: "top"

    },
    legend: {
      display: false
    }
  }
});

let pChart = new Chart(pieChart, {
  type: "doughnut",
  data: {
    labels: [
      "Phones", "Tablet", "Desktop"
    ],
    datasets: [
      {

        data: [
          12, 19, 3
        ],
        backgroundColor: [
          "#8b99e8", "#00aced", "#3b5998"

        ],
        borderWidth: 0
      }
    ]
  },
  options: {
    title: {
      display: false,
      text: "Mobile User",
      fontSize: 20,
      maintainAspectRatio: false,
      position: "top"
    },
    legend: {
      position: "right"
    }

  }
});

function checkIt() {
  let searchUser = document.getElementById("search-user").value;
  let textArea = document.getElementById("textarea").value;
  if (searchUser.trim() === "" || textArea.trim() === "") {
    swal("Please fill out all fields", "Error ", "error");
    return false;
  } else if (textArea.length < 10) {
    swal("Message must be more than 10 letters", "Error", "error");
    return false;
  } else {
    alert("Message Sent")
    return true;

  }

}

$(".closebtn").on("click", function() {
  $(".alert").hide(500);
});
