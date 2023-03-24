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
            <td><b> {{ time }} </b></td>
            <td><b> {{ min }} </b></td>
          </tr>
        </table>
      </div>
      <div class="DATA-item">
        <ul class="data-item">
          <li><router-link to="/FF">
              <h2 class="mb-6">DATE</h2>
            </router-link></li>
          <h2>WEEK</h2>
          <h3>
            <Datepicker v-model="date" range auto-range="6" :enableTimePicker="false" :format="formatRange" @update:modelValue="update" />
          </h3>
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
          <v-progress-circular :rotate="360" :size="320" :width="60" :model-value="OEE"
            :color="this.OEE < 75 ? '#F9370C' : '#4CAF50'">
            <strong>{{ Math.ceil(OEE) }}%</strong>
          </v-progress-circular>

        </div>
      </div>

      <ul class="content-APQ-item">
        <br>
        <div>
          <div class="text-1">
            <v-dialog v-model="dialog1" width="auto">
              <template v-slot:activator="{ props }">
                <v-btn v-bind="props">

                  <h2>Availability : </h2>


                </v-btn>
              </template>
              <v-card width="800px" height="800px">
                <v-card-text-1>
                  <div class="content-downtime-item">
                    <v-table fixed-header height="630px">
                      <thead>
                        <tr>
                          <th>
                            <h3>ID</h3>
                          </th>
                          <th>
                            <h3>Failure</h3>
                          </th>
                          <th>
                            <h3>Operation</h3>
                          </th>
                          <th>
                            <h3>Downtime</h3>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(downtimeDefect, index) in downtimeDefect " :key="index">
                          <td>{{ downtimeDefect.id }}</td>
                          <td>{{ downtimeDefect.details }}</td>
                          <td>{{ downtimeDefect.station }}</td>
                          <td>{{ downtimeDefect.downtime }}</td>
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
            <v-progress-linear v-model="availability" height="55" :color="this.availability < 85 ? '#F9370C' : '#4CAF50'">
              <strong>{{ availability }}%</strong>
            </v-progress-linear>
          </div>
        </div>
        <br>
        <div class="text-2">
          <v-dialog v-model="dialog2" width="auto">
            <template v-slot:activator="{ props }">
              <v-btn v-bind="props">

                <h2>Performance : </h2>

              </v-btn>
            </template>
            <v-card width="800px" height="800px">
              <v-card-text-2>
                <div class="content-downtime-item">
                  <v-table fixed-header height="630px">
                    <thead>
                      <tr>
                        <th>
                          <h3>ID</h3>
                        </th>
                        <th>
                          <h3>Failure</h3>
                        </th>
                        <th>
                          <h3>Operation</h3>
                        </th>
                        <th>
                          <h3>Downtime</h3>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(downtimeDefect, index) in downtimeDefect " :key="index">
                        <td>{{ downtimeDefect.id }}</td>
                        <td>{{ downtimeDefect.details }}</td>
                        <td>{{ downtimeDefect.station }}</td>
                        <td>{{ downtimeDefect.downtime }}</td>
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

          <v-progress-linear v-model="performance" height="55" :color="this.performance < 90 ? '#F9370C' : '#4CAF50'">
            <strong>{{ performance }}%</strong>
          </v-progress-linear>
        </div>
        <br>
        <div class="text-3">
          <v-dialog v-model="dialog3" width="auto">
            <template v-slot:activator="{ props }">
              <v-btn v-bind="props">
                <h2>Quality Rate : </h2>
              </v-btn>
            </template>
            <v-card width="800px" height="800px">
              <v-card-text-3>
                <div class="content-failureDefect-item">
                  <v-table fixed-header height="630px">
                    <thead>
                      <tr>
                        <th>
                          <h3>Type</h3>
                        </th>
                        <th>
                          <h3>Failure Details</h3>
                        </th>
                        <th>
                          <h3>Operation</h3>
                        </th>
                        <th>
                          <h3>Sum</h3>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(failureDefect, index) in failureDefect " :key="index">
                        <td>{{ failureDefect.type }}</td>
                        <td>{{ failureDefect.details }}</td>
                        <td>{{ failureDefect.station }}</td>
                        <td>{{ failureDefect.sum }}</td>
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
        <v-progress-linear v-model="quality" height="55" :color="this.quality < 98 ? '#F9370C' : '#4CAF50'">
          <strong>{{ quality }}%</strong>
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
import '@vuepic/vue-datepicker/dist/main.css'
import { ref, onMounted } from 'vue';



export default {
  name: 'FF',
  components: { Datepicker },

  data: () => ({
    interval: {},
    availability: 0,
    performance: 0,
    quality: 0,
    OEE: 0,
    target: 0,
    plan: 0,
    actual: 0,
    time: '-',
    min: '-',
    bottleNeck: 'NO DATA',
    lineId: 1,
    shift: '',
    dialog1: false,
    dialog2: false,
    dialog3: false,
    date: new Date(),
    
  formatRange: (range) => {
      const start = range[0] ? range[0].toLocaleDateString("en-US") : "-";
      const end = range[1] ? range[1].toLocaleDateString("en-US") : "-";

      const [monthstart, daystart, yearstart] = start.split("/");
      const [monthend, dayend, yearend] = end.split("/");
      return `${daystart}/${monthstart}/${yearstart} - ${dayend}/${monthend}/${yearend}`;
    },
    shift: 'DAY',
  }),

  async mounted() {
    const endDate = new Date();
    const startDate = new Date(new Date().setDate(endDate.getDate() - 6));
    this.date = [startDate, endDate];

    console.log(this.lineId);
    console.log(startDate.toISOString());
    console.log(endDate);
    const dashboard = await axiosInstance.post('/dashboard/week', {
      lineId: this.lineId,
      startDate: startDate.toISOString(),
      endDate: new Date(),
      shift: "DAY"
    });
    this.target = dashboard.target;
    this.plan = dashboard.plan;
    this.actual = dashboard.actual;
    this.bottleNeck = dashboard.bottleNeck;
    this.OEE = dashboard.oee;
    this.availability = dashboard.availability;
    this.performance = dashboard.performance;
    this.quality = dashboard.quality;
    this.workingTime = dashboard.workingTim;
    this.time = dashboard.workingTime.time;
    this.min = dashboard.workingTime.min;
    this.bottleNeck = dashboard.bottleNeck;
    this.downtimeDefect = dashboard.downtimeDefect;
    this.id = dashboard.downtimeDefect.id;
    this.details = dashboard.downtimeDefect.details;
    this.station = dashboard.downtimeDefect.station;
    this.downtime = dashboard.downtimeDefect.downtime;
    this.failureDefect = dashboard.failureDefect;
    this.type = dashboard.failureDefect.type;
    this.details = dashboard.failureDefect.details;
    this.station = dashboard.failureDefect.station;
    this.sum = dashboard.failureDefect.sum;
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

  },
  methods: {

    async update() {

      const dashboard = await axiosInstance.post('/dashboard/week', {
        lineId: this.lineId,
        startDate: this.date[0],
        endDate: this.date[1],
        shift: this.shift
      })
      this.target = dashboard.target;
      this.plan = dashboard.plan;
      this.actual = dashboard.actual;
      this.group = dashboard.group;
      //    this.downtimeDefect = dashboard.downtimeDefect;
      this.station = dashboard.downtimeDefect.station;
      this.OEE = dashboard.oee;
      this.availability = dashboard.availability;
      this.performance = dashboard.performance;
      this.quality = dashboard.quality;
      this.workingTime = dashboard.workingTim;
      this.time = dashboard.workingTime.time;
      this.min = dashboard.workingTime.min;
      this.bottleNeck = dashboard.bottleNeck;
      this.downtimeDefect = dashboard.downtimeDefect;
      this.id = dashboard.downtimeDefect.id;
      this.details = dashboard.downtimeDefect.details;
      this.station = dashboard.downtimeDefect.station;
      this.downtime = dashboard.downtimeDefect.downtime;
      this.failureDefect = dashboard.failureDefect;
      this.type = dashboard.failureDefect.type;
      this.details = dashboard.failureDefect.details;
      this.station = dashboard.failureDefect.station;
      this.sum = dashboard.failureDefect.sum;

      console.log("dashboard", dashboard);
      const endDate = new Date();
      const startDate = new Date(new Date().setDate(endDate.getDate() - 6));
      this.date = [startDate, endDate];
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
  margin-left: -620px;
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


.content-BT-item {
  background: #D9D9D9;
  width: 270px;
  height: 130px;
  padding: 10px;
  border-radius: 20px;
  text-align: center;
  font-family: 'Sarabun', sans-serif;
  font-size: 16px;
  margin-top: 33%;
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

.v-card-text-1 content-downtime-item {
  font-size: 20px;
  font-family: 'Sarabun', sans-serif;
  text-align: center;
  transform: translatex(1230px);
  color: black;
}

.v-table {
  padding: 5%;

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
  