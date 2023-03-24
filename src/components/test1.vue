<template>
  <div class="container">
    <div class="manu">
      <header>
        <h1>OEE : Fabrication of F Frame</h1>
      </header>
      <div class="BACK-item">
        <ul class="BACK">
          <li><router-link to="/homepage">
              <h2>BACK</h2>
            </router-link></li>
        </ul>
      </div>
      <div class="WT-item">
        <table>
          <tr>
            <th>
              <h3> WORKING</h3>
            </th>
            <th>
              <h3> TIME</h3>
            </th>
          </tr>
          <tr>
            <td><b>TIME</b></td>
            <td><b>MIN</b></td>
          </tr>
          <tr>
            <td><b> DAY </b></td>
            <td><b> 480 </b></td>
          </tr>
        </table>
      </div>
      <div class="DATA-item">
        <ul class="data-item">
          <h2 >DATE</h2>
          <h3>
            <Datepicker v-model="date" :format="format" @update:modelValue="update" />
          </h3>
          <li><router-link to="/FFweek">
              <h2 class="mb-6">WEEK</h2>
            </router-link></li>
          <li><router-link to="/FFmonth">
              <h2>MONTH</h2>
            </router-link></li>
        </ul>
      </div>
      <div class="Logout-item">
        <ul class="Logout">
          <li><router-link to="/Login">
              <h2>Logout</h2>
            </router-link></li>
        </ul>
      </div>
      <h1>
        <div class="datetime"> </div>
      </h1>
      <div>
        <h3>
          <v-select label=" SHIFT " :items="['DAY', 'NIGHT']" v-model="shift" @update:modelValue="update"></v-select>
        </h3>
      </div>
    </div>

    <div class="services-grid1">
      <div class="content-OEE-item">
        <h2>OEE</h2>
        <div class="text-center">
          <v-progress-circular :rotate="360" :size="320" :width="60" :model-value="OEE" :color="this.OEE < 75 ? '#F9370C' : '#4CAF50'">
            <strong>{{ Math.ceil(OEE) }}%</strong>
          </v-progress-circular>

        </div>
      </div>

      <ul class="content-APQ-item">
        <br>
        <div>
          <div class="text-1">
          <v-dialog 
            v-model="dialog1"
            width="auto"
          >
            <template v-slot:activator="{ props }">
              <v-btn
              v-bind="props">
                
                  <h2>Availability : </h2>
                

            </v-btn>
            </template>
            <v-card width="800px" height="800px">
        <v-card-text-1>
          <div class="content-downtime-item">
    <v-table
      fixed-header
      height="300px"
    >
      <thead>
        <tr>
          <th class="text-left">
            <h3>ID</h3>
          </th>
          <th class="text-left">
            <h3>Failure</h3>
          </th>
          <th class="text-left">
            <h3>Operation</h3>
          </th>
          <th class="text-left">
            <h3>Downtime</h3>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in downtimeDefect"
          :key="item.name"
        >
          <td>{{ id }}</td>
          <td>{{ details }}</td>
          <td>{{ station }}</td>
          <td>{{ downtime }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>
        </v-card-text-1>
        <v-card-actions>
          <v-btn color="primary" block @click="dialog1 = false">Close</v-btn>
        </v-card-actions>
      </v-card>

          </v-dialog>
            <v-progress-linear v-model="availability"  height="55" :color="this.availability < 85 ? '#F9370C' : '#4CAF50'">
              <strong>{{ Math.ceil(availability) }}%</strong>
            </v-progress-linear>
          </div>
        </div>
        <br>
        <div class="text-2">
          <v-dialog 
            v-model="dialog2"
            width="auto"
          >
            <template v-slot:activator="{ props }">
              <v-btn
              v-bind="props">
                
              <h2>Performance : </h2>

            </v-btn>
            </template>
            <v-card width="800px" height="800px">
        <v-card-text-2>
          <div class="content-downtime-item">
    <v-table
      fixed-header
      height="300px"
    >
      <thead>
        <tr>
          <th class="text-left">
            <h3>ID</h3>
          </th>
          <th class="text-left">
            <h3>Failure</h3>
          </th>
          <th class="text-left">
            <h3>Operation</h3>
          </th>
          <th class="text-left">
            <h3>Downtime</h3>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in downtimeDefect"
          :key="item.name"
        >
          <td>{{ item.ID }}</td>
          <td>{{ item.Failure }}</td>
          <td>{{ item.Operation }}</td>
          <td>{{ item.Downtime }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>
        </v-card-text-2>
        <v-card-actions>
          <v-btn color="primary" block @click="dialog2 = false">Close</v-btn>
        </v-card-actions>
        </v-card>

          </v-dialog>
                
          <v-progress-linear v-model="performance"  height="55" :color="this.performance < 90 ? '#F9370C' : '#4CAF50'">
            <strong>{{ Math.ceil(performance) }}%</strong>
          </v-progress-linear>
        </div>
        <br>
        <div class="text-3">
          <v-dialog 
            v-model="dialog3"
            width="auto"
          >
            <template v-slot:activator="{ props }">
              <v-btn
              v-bind="props">
                <h2>Quality Rate : </h2>
              </v-btn>
            </template>
            <v-card width="800px" height="800px">
        <v-card-text-3>
          <div class="content-downtime-item">
    <v-table
      fixed-header
      height="300px"
    >
      <thead>
        <tr>
          <th class="text-left">
            <h3>Type</h3>
          </th>
          <th class="text-left">
            <h3>Failure Details</h3>
          </th>
          <th class="text-left">
            <h3>Operation</h3>
          </th>
          <th class="text-left">
            <h3>Sum</h3>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in downtimeDefect"
          :key="item.name"
        >
          <td>{{ item.id }}</td>
          <td>{{ item.details}}</td>
          <td>{{ item.station }}</td>
          <td>{{ item.downtime }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>
        </v-card-text-3>
        <v-card-actions>
          <v-btn color="primary" block @click="dialog3 = false">Close</v-btn>
        </v-card-actions>
        </v-card>
        </v-dialog>
        </div>
          <v-progress-linear v-model="quality"  height="55" color='#4CAF50'>
            <strong>{{ Math.ceil(quality) }}%</strong>
          </v-progress-linear>
        
    
      </ul>

      <div class="content-COUNT-item">
        <br>
        <h2>TARGET</h2>
        <a>
          <h3> {{ target }} </h3>
        </a>
        <br>
        <h2>PLAN</h2>
        <a>
          <h3> {{ plan }}</h3>
        </a>
        <br>
        <h2>ACTUAL</h2>
        <a>
          <h3> {{ actual }} </h3>
        </a>
      </div>
      <div class="content-BT-item">
        <h2>BOTTLE NECK</h2>
        <a>
          <h3> {{ bottleNeck }} </h3>
        </a>
      </div>
      <div class="content-group-item">
        <h2>GROUP</h2>
        <a>
          <h3>{{ group }} </h3>
        </a>
      </div>

      <div class="services-grid2">
        <div class="content-DG-item">
          <div>
            <h1>DOWNTIME</h1>
          </div>
          <div class="scale">min</div>
          <chart-DT :chart-data="chartData1" :chart-options="chartOptions" />
        </div>
        <div class="content-SG-item">
          <div>
            <h1>DEFECT TYPE</h1>
          </div>
          <div class="scale">Frame</div>
          <chart-DF :chart-data="chartData2" :chart-options="chartOptions" />
        </div>
      </div>

    </div>
  </div>
</template>


<script >
import axiosInstance from '../utils/axios.instance';
import Datepicker from '@vuepic/vue-datepicker';
import ChartDT from './ChartDT.vue';
import ChartDF from './ChartDF.vue';
import '@vuepic/vue-datepicker/dist/main.css'
import { ref } from 'vue';
import { Chart } from 'chart.js';



export default {
  name: 'FF',
  components: { Datepicker, ChartDT, ChartDF },
  setup() {
    const date = ref(new Date());
    // In case of a range picker, you'll receive [Date, Date]
    const format = (date) => {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      return `${day}/${month}/${year}`;
    }

    return {
      date,
      format,
    }

  
  },

  data: () => ({
    interval: {},
    availability: 98.58,
    performance: 90.24,
    quality:97.30,
    OEE: 86.56,
    target: 92,
    plan: 82,
    actual: 74,
    time: 0,
    dialog1: false,
    dialog2: false,
    dialog3: false,
    bottleNeck: 'OP06',
    group: 'A',
    lineId: 1,
    shift: '',
    date: ref(new Date()), // กำหนดค่าเริ่มต้นเป็นวันปัจจุบัน
    format: "YYYY-MM-DD", // กำหนดรูปแบบวันที่
    data: null,// เก็บข้อมูลที่ได้จาก API
    min: '',
    workingTime: [
      {
        time: 'DAY',
        min: 480,
      }],
    shift: 'DAY',
    downtimeDefect: [
      {
        id: ' ',
        details: ' ',
        station: ' ',
        downtime: 0,
      },
      {
        id: ' ',
        details: ' ',
        station: ' ',
        downtime: 0,
      },
      {
        id: ' ',
        details: ' ',
        station: ' ',
        downtime: 0,
      },
      {
        id: ' ',
        details: ' ',
        station: ' ',
        downtime: 0,
      },
    ],
 
    chartData1: {
      type: 'bar',
      data: {
        labels: ['OP1', 'OP2', 'OP3', 'OP4', 'OP5', 'OP6', 'OP7', 'OP8', 'OP9'],
        datasets: [
          {
            label: 'Downtime',
            data: [0, 100, 5, 2, 20, 30, 45, 218, 200, 300],
            backgroundColor: '	rgb(20, 20, 142)',
            borderColor: '	rgb(20, 20, 142)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      },
    },
    chartOptions: {
      responsive: true,
      maintainAspectRatio: false,
    },

    chartData2: {
      type: 'bar',
      data: {
        labels: ['Inspection 1', 'Inspection 2', 'Inspection 3'],
        datasets: [
          {
            label: 'Scrap',
            backgroundColor: 'rgb(228, 0, 43)',
            data: [10, 20, 30]
          },
          {
            label: 'Repair',
            backgroundColor: 'RGBA( 255, 140, 0, 1 )',
            data: [20, 30, 40]
          },
          {
            label: 'Rework',
            backgroundColor: 'rgba(255, 255, 0, 0.7)',
            data: [30, 40, 50]
          }
        ]
      },
      chartOptions: {
        scales: {
          xAxes: [{
            stacked: true
          }],
          yAxes: [{
            stacked: true
          }],
        },


      },
    },
  }),

  async mounted() {
    const dashboard = await axiosInstance.post('/dashboard/date', {
      lineId: this.lineId,
      targetDate: new Date(),
      shift: "DAY"
    });
    this.target = dashboard.target;
    this.plan = dashboard.plan;
    this.actual = dashboard.actual;
    this.bottleNeck = dashboard.bottleNeck;
    this.downtimeDefect = dashboard.downtimeDefect;
    this.OEE = dashboard.oee;
    this.availability = dashboard.availability;
    this.performance = dashboard.performance;
    this.quality = dashboard.quality;
    this.time = dashboard.workingTime.time;
    this.min = dashboard.workingTime.min;
    this.bottleNeck = dashboard.bottleNeck;
    this.group = dashboard.group;
    console.log("dashboard", dashboard);
    console.log("dashboard", dashboard.actual);
    console.log("dashboard", dashboard.OEE);
    console.log("availability", dashboard.availability);
    console.log("dashboaperformancerd", dashboard.performance);
    console.log("quality", dashboard.quality);
    // console.log("dashboard", dashboardbar.bar);
    // console.log("dashboard", dashboardbar.min);
    // console.log("dashboard", dashboardbar.time);
    console.log("workingTime", dashboard.workingTime);
    console.log("workingTime.min", dashboard.workingTime.min);
    console.log("bottleNeck", dashboard.bottleNeck);

    const startDate = new Date();
    const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
    date.value = [startDate, endDate];
  },
  methods: {

    async update() {

      const dashboard = await axiosInstance.post('/dashboard/date', {
        lineId: this.lineId,
        targetDate: this.date,
        shift: this.shift
      })
      this.target = dashboard.target;
      this.plan = dashboard.plan;
      this.actual = dashboard.actual;
      this.group = dashboard.group;
      //    this.downtimeDefect = dashboard.downtimeDefect;
      this.downtime = dashboard.downtimeDefect.downtime;
      this.station = dashboard.downtimeDefect.station;
      this.OEE = dashboard.oee;
      this.availability = dashboard.availability;
      this.performance = dashboard.performance;
      this.quality = dashboard.quality;
      this.time = dashboard.workingTime.time;
      this.min = dashboard.workingTime.min;
      this.bottleNeck = dashboard.bottleNeck;

      console.log("dashboard", dashboard);
    },

  },
}

</script>
  
<style scoped>
.container {
  width: 1900px;
  height: 1024px;
  margin: 0 auto;
  background: white;
}

header {
  width: 600px;
  padding: 2px;
  height: 0 auto;
  justify-content: center;
  text-align: center;
  background: #FF971E;
  margin: 0 auto;
  margin-top: 10px;
  transform: translatex(720px);
  font-family: 'Sarabun', sans-serif;
  font-size: 20px;
}

/* #MANU */

.manu {
  width: 300px;
  height: 100%;
  background: #D9D9D9;
  display: inline-block;
  margin: 0 auto;

}


ul.BACK {
  font-family: 'Sarabun', sans-serif;
  text-align: center;
  margin-left: -3px;
  transform: translatex(-20px);
}

ul.BACK li {
  list-style-type: none;
  font-size: 16px;
}

ul.BACK li a h2 {
  text-decoration: none;
  background: #282724;
  color: white;
  padding: 8px;
  border-radius: 15px;
  display: inline-block;
  transform: translatey(-60px);
  transition: .3s ease-in-out;
  margin-left: -60px;
}

ul.BACK li a h2:hover {
  text-decoration: none;
  background: #7D7D7D;
  color: white;
  padding: 8px;
  border-radius: 15px;
  display: inline-block;
  transform: translatey(-60px);
  margin-left: -60px;
}

.WT-item table tr th h3 {
  font-family: 'Sarabun', sans-serif;
  font-size: 25px;
  padding: 15px 20px;
  text-align: center;
}

.WT-item table tr td {
  font-family: 'Sarabun', sans-serif;
  font-size: 20px;
  text-align: center;
  background: white;
  color: black;
  padding: 10px 28px;
}

.WT-item {
  background-color: #292929;
  color: white;
  width: 270px;
  height: 197px;
  border-radius: 15px;
  justify-items: center;
  margin-top: 127%;
  transform: translatex(589%);
  font-family: 'Sarabun', sans-serif;
  font-size: 20;
}

.DATA-item {
  transform: translatey(-323%);
  font-size: 28px;
  font-family: 'Sarabun', sans-serif;
}

.DATA-item h2 {
  margin-left: 20%;
}

ul.data-item li a h2 {
  font-family: 'Sarabun', sans-serif;
  font-size: 22px;
  color: black;
  margin-left: 20%;
  text-decoration: none;
  transition: .3s ease-in-out;
}

ul.data-item li a h2 :hover {
  text-decoration: none;
  font-family: 'Sarabun', sans-serif;
  font-size: 20px;
  list-style-type: none;
  color: blue;
}

ul.data-item h2 {
  margin-left: 20%;
  font-size: 22px;
  color: blue;
}

ul.Logout {
  font-family: 'Sarabun', sans-serif;
  text-align: center;
  margin-left: -110px
}

ul.Logout li {
  list-style-type: none;
  font-size: 16px;
}

ul.Logout li a h2 {
  text-decoration: none;
  background: #282724;
  color: white;
  padding: 10px;
  border-radius: 15px;
  display: inline-block;
  transform: translatey(66px);
  transition: .3s ease-in-out;
  margin-left: 40px;
}

ul.Logout li a h2:hover {
  text-decoration: none;
  background: #7D7D7D;
  color: white;
  padding: 10px;
  border-radius: 15px;
  display: inline-block;
  transform: translatey(66px);
  margin-left: 40px;
}


/* #CONTENT */

.services-grid1 {
  display: grid;
  grid-template-columns: repeat(3, 620px);
  width: 500px;
  height: 400px;
  margin-left: 350px;
  margin-top: -49%;
}

.content-OEE-item h2 {
  background: #D9D9D9;
  width: 570px;
  height: 400px;
  padding: 10px;
  border-radius: 20px;
  display: inline-block;


}

.content-OEE-item h2 {
  font-size: 32px;
  text-align: center;
  font-family: 'Sarabun', sans-serif;
}

.v-progress-circular {
  margin-top: -63%;
  transform: translatex(-20px);
  font-size: 40px;
  text-align: center;
  font-family: 'Sarabun', sans-serif;
  color: black;
}

.v-progress-linear {
  font-size: 28px;
  font-family: 'Sarabun', sans-serif;

}

.v-select {
  font-size: 28px;
  font-family: 'Sarabun', sans-serif;
  margin-top: -924px;
  color: black;
  transform: translatex(1575px);
}

.content-APQ-item {
  background: #F2F2F2;
  width: 570px;
  height: 400px;
  padding: 10px;
  border-radius: 20px;
  font-family: 'Sarabun', sans-serif;
  list-style-type: none;
  display: inline-block;

}

ul.content-APQ-item li a {
  color: black;
  transition: .3s ease-in-out;
}

ul.content-APQ-item li a :hover {
  color: blue;
}

.content-COUNT-item h2 {
  font-size: 25px;
  font-family: 'Sarabun', sans-serif;
  text-align: center;
}

.content-COUNT-item {
  background: #FF7A00;
  width: 270px;
  height: 400px;
  padding: 10px;
  border-radius: 20px;

}

.content-COUNT-item a h3 {
  background: white;
  color: black;
  width: 193px;
  height: 55px;
  justify-items: center;
  text-align: center;
  transform: translatex(35px);
  font-size: 35px;
}

.services-grid2 {
  display: grid;
  grid-template-columns: repeat(3, 620px);
  width: 500px;
  height: 400px;
  margin-left: -1240px;
  margin-top: -1%;
}

.content-DG-item {
  background: #F2F2F2;
  width: 570px;
  height: 510px;
  border-radius: 20px;
}

.content-DG-item h1 {
  text-align: center;
  font-family: 'Sarabun', sans-serif;
  font-size: 25px;
  margin-top: 15px;

}

.scale {
  font-size: 16px;
  margin-top: 5px;
  margin-left: 20px;
}


.content-SG-item {
  background: #F2F2F2;
  width: 570px;
  height: 510px;
  border-radius: 20px;
}

.content-SG-item h1 {
  margin-top: 15px;
  text-align: center;
  font-family: 'Sarabun', sans-serif;
  font-size: 25px;

}

.content-group-item {
  background: #D9D9D9;
  width: 270px;
  height: 130px;
  padding: 10px;
  border-radius: 20px;
  text-align: center;
  font-family: 'Sarabun', sans-serif;
  font-size: 16px;
  margin-top: 33%;
  transform: translatex(230%);
}

a h3 {
  background: white;
  color: white;
  width: 193px;
  height: 50px;
  justify-items: center;
  text-align: center;
  transform: translatex(25px);
}

.content-BT-item {
  background: #D9D9D9;
  width: 270px;
  height: 130px;
  padding: 10px;
  border-radius: 20px;
  text-align: center;
  font-family: 'Sarabun', sans-serif;
  font-size: 16px;
  margin-top: 58%;
  transform: translatex(460%);
}

a h3 {
  background: white;
  color: black;
  width: 193px;
  height: 50px;
  justify-items: center;
  text-align: center;
  transform: translatex(25px);
  font-family: 'Sarabun', sans-serif;
  font-size: 28px;
  padding-top: 5px;
}

.content-downtime-item {
  font-size: 20px;
  font-family: 'Sarabun', sans-serif;
  text-align: center;
  transform: translatex(1230px);
  color: black;
}

.v-card--reveal {
  z-index: 1;
  padding-top: 2%;
  height: 450px;
  justify-content: center;
  top: 250px;
  left: 250px;
  width: 550px;
  background-color: #282724;
  color: #D9D9D9;
  flood-opacity: 100%;
  transform: translateX(400px);
  position: fixed;
  border-radius: 10%;
  box-shadow: 0 0 8px orangered;
}
</style>