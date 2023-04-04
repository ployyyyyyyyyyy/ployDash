<template>
  <div class="container">
    <div class="manu">
      <header v-if="type == '1'">
        <h1>OEE : Fabrication of F Frame</h1>
      </header>
      <header v-if="type == '2'">
        <h1>OEE : Fabrication of S Frame</h1>
      </header>
      <header v-if="type == '3'">
        <h1>OEE : Powder Coat Painting</h1>
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
          <router-link :to="/date/ + gettype()">
            <h2 class="mb-6 text-black">DATE</h2>
          </router-link>
          <router-link :to="/week/ + gettype()">
            <h2 class="mb-6 text-black">WEEK</h2>
          </router-link>
          <h2 class="mt-6">MONTH</h2>
          <h3>
            <Datepicker v-model="month" month-picker @update:modelValue="update" />
          </h3>
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
            <strong>{{ OEE }}%</strong>
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
                <v-card-text>
                  <div class="content-downtime-item">
                    <div class="mt-5" v-if="type == '1' || type == '2'">
                      <h3>Downtime at bottle neck </h3>
                    </div>
                    <v-table fixed-header height="590px" class="pa-10 ">
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
                        <tr v-for="(bottleneck, index) in bottleneck " :key="index">
                          <td>{{ bottleneck.id }}</td>
                          <td>{{ bottleneck.details }}</td>
                          <td>{{ bottleneck.station }}</td>
                          <td>{{ bottleneck.downtime }}</td>
                        </tr>
                      </tbody>
                    </v-table>
                  </div>
                </v-card-text>
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
              <v-card-text>
                <div class="content-downtime-item">
                  <v-table fixed-header height="630px" class="pa-10 ">
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
                      <tr v-for="(downtimenotBT, index) in downtimenotBT " :key="index">
                        <td>{{ downtimenotBT.id }}</td>
                        <td>{{ downtimenotBT.details }}</td>
                        <td>{{ downtimenotBT.station }}</td>
                        <td>{{ downtimenotBT.downtime }}</td>
                      </tr>
                    </tbody>
                  </v-table>
                </div>
              </v-card-text>
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
              <v-card-text>
                <div class="content-failureDefect-item">
                  <v-table fixed-header height="630px" class="pa-10 "  v-if="type == '1' || type == '2'">
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

                  <v-table fixed-header height="630px" class="pa-10 "  v-if="type == '3'">
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
                        <td>{{ failureDefect.extendedDetails }}</td>
                        <td>{{ failureDefect.station }}</td>
                        <td>{{ failureDefect.sum }}</td>
                      </tr>
                    </tbody>
                  </v-table>
                </div>
              </v-card-text>
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
      <div class="content-BT-item" v-if="type == '1' || type == '2'">
        <h2>BOTTLE NECK</h2>
        <a>
          <h3> {{ bottleNeck }} </h3>
        </a>
      </div>


      <div class="services-grid2" v-if="type == '1'">
        <div class="content-DG-item">
          <div>
            <h1>DOWNTIME</h1>
          </div>
          <div class="scale">min</div>
          <Bar :data="chartData1F" width="350" height="200" class="pa-4 " />
          <div class="scale2">operation</div>
        </div>
        <div class="content-SG-item">
          <div>
            <h1>DEFECT TYPE</h1>
          </div>
          <div class="scale">Frame</div>
          <Bar :data="chartData2" :options="options" width="350" height="200" class="pa-4 " />
          <div class="scale2">operation</div>
        </div>
      </div>

      <div class="services-grid3" v-if="type == '2'">
        <div class="content-DG-item">
          <div>
            <h1>DOWNTIME</h1>
          </div>
          <div class="scale">min</div>
          <Bar :data="chartData1S" width="350" height="200" class="pa-4 " />
          <div class="scale2">operation</div>
        </div>
        <div class="content-SG-item">
          <div>
            <h1>DEFECT TYPE</h1>
          </div>
          <div class="scale">Frame</div>
          <Bar :data="chartData3" :options="options2" width="350" height="200" class="pa-4 " />
          <div class="scale2">operation</div>
        </div>
      </div>

      <div class="services-grid4" v-if="type == '3'">
        <div class="content-DG-item">
          <div>
            <h1>DOWNTIME</h1>
          </div>
          <div class="scale">min</div>
          <Bar :data="chartData1P" width="350" height="200" class="pa-4 " />
          <div class="scale2">operation</div>
        </div>
        <div class="content-SG-item">
          <div>
            <h1>DEFECT TYPE</h1>
          </div>
          <div class="scale">Frame</div>
          <Bar :data="chartData4" width="350" height="200" class="pa-4 " />
          <div class="scale2">operation</div>

        </div>
      </div>

    </div>
  </div>
</template>
  
  
<script >
import axiosInstance from '../utils/axios.instance';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import { ref } from 'vue';
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);


export default {
  name: 'FF',
  components: { Datepicker, Bar },
  setup() {
    const month = ref({
      month: new Date().getMonth(),
      year: new Date().getFullYear()
    });
  },


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
    dialog1: false,
    dialog2: false,
    dialog3: false,
    bottleNeck: '-',
    lineId: 1,
    station: [],
    stationForChart: [],
    stationIns: [],
    stationData: [],
    month: ref({
      month: new Date().getMonth(),
      year: new Date().getFullYear()
    }),
    shift: 'DAY',
    bottleneck: null,
    downtimeDefect: [],
    sumdowntimeDefect: null,

    scrapDefects: [],
    sumScrapDefects: null,
    sumScrapIns1: null,
    sumScrapIns2: null,
    sumScrapIns3: null,
    sumScrapIns4: null,
    sumScrapIns5: null,

    repairDefects: [],
    sumRepairDefects: null,
    sumrepairIns1: null,
    sumrepairIns2: null,
    sumrepairIns3: null,
    sumrepairIns4: null,
    sumrepairIns5: null,

    reworkDefects: [],
    sumreworkDefects: null,
    sumreworkIns1: null,
    sumreworkIns2: null,
    sumreworkIns3: null,

    RTDefects: [],
    sumRTDefects: null,
    sumRTIns3: null,
    sumRTIns4: null,

    RPDefects: [],
    sumRPDefects: null,
    sumRPIns3: null,
    sumRPIns4: null,

    RWDefects: [],
    sumRWDefects: null,
    sumRWIns3: null,
    sumRWIns4: null,

    PSDefects: [],
    sumPSDefects: null,
    sumPSIns3: null,
    sumPSIns4: null,

    loaded: false,
    OEEOld: 101,
    availabilityOld: 101,
    performanceOld: 101,
    qualityOld: 101,
    options: {
        barThickness: 30,
      },
    options2: {
      barThickness: 40,
      }
  }),
  async mounted() {
    console.log(this.type);
    console.log("month mm", new Date().getMonth() + 1);
    console.log("month yy", new Date().getFullYear());
    const dashboard = await axiosInstance.post('/dashboard/month', {
      lineId: parseInt(this.type),
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear(),
      shift: "DAY"
    });
    this.loaded = false;
    try {

      this.target = dashboard.target;
      this.plan = dashboard.plan;
      this.actual = dashboard.actual;
      this.OEE = dashboard.oee;
      this.availability = dashboard.availability;
      this.performance = dashboard.performance;
      this.quality = dashboard.quality;
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
       //ตารางAvailability F--------------------------------------------------
        
       if (parseInt(this.type) == 1) { 
        this.bottleneck = dashboard.downtimeDefect.filter(
          (bottleneck) => bottleneck.station === "OPF06"
        );
        //ตารางPerformance F----------------------------------------------------
        this.downtimenotBT = dashboard.downtimeDefect.filter(
          (downtimenotBT) => this.downtimeDefect
        );
      }
        //ตารางAvailability S--------------------------------------------------
        if (parseInt(this.type) == 2) {
          this.bottleneck = dashboard.downtimeDefect.filter(
          (bottleneck) => bottleneck.station === "OPS04"
        );
        //ตารางPerformance S----------------------------------------------------
        this.downtimenotBT = dashboard.downtimeDefect.filter(
          (downtimenotBT) => this.downtimeDefect
        );
      }

      //ตารางAvailability P--------------------------------------------------
      if (parseInt(this.type) == 3) {
        this.bottleneck = this.downtimeDefect
      //ตารางPerformance P----------------------------------------------------
        this.downtimenotBT = this.downtimeDefect
      }

      // DOWNTIME S----------------------------------------------------------
      const s = await axiosInstance.get(`/station/line/${parseInt(this.type)}`);
        if (parseInt(this.type) == 3) {
          this.stationForChart = s.filter(
            (item) => !item.stationName.includes("Inspection")
          );
          this.station = s.filter(
            (item) => !item.stationName.includes("Inspection")
          );
        }
        if (
          parseInt(this.type) == 1 ||
          parseInt(this.type) == 2
        ) {
          this.stationForChart = s;
          this.station = s;
        }
      console.log(this.station);
      //เปลี่ยนข้อมูลจาก [] --> [0,0,0,0] ตามจำนวน station
      this.stationData = Array(this.station.length).fill(0);
      console.log(this.stationData);

      for (let i = 0; i < dashboard.downtimeDefect.length; i++) {
        console.log(dashboard.downtimeDefect[i]);
        for (let j = 0; j < this.station.length; j++) {
          if (this.station[j].stationId == dashboard.downtimeDefect[i].station) {
            this.stationData[j] =
              this.stationData[j] + dashboard.downtimeDefect[i].downtime;
            console.log(this.stationData);
          }
        }
      }

      //defect graph----------------------------------------------------
      this.stationIns = s.filter((e) => {
        const re = new RegExp("inspection", "i");
        return re.test(e.stationName);
      });

      console.log("this.stationIns", this.station);
      console.log("this.stationIns", this.stationIns.map(station => station.stationId));

      // SCRAP----------------------------------------------------------
      this.scrapDefects = dashboard.failureDefect.filter(
        (defect) => defect.type === "SCRAP"
      );

      for (let i = 0; i < dashboard.failureTotal; i++) {
        if (this.scrapDefects[i] && this.scrapDefects[i].sum) {
          this.sumScrapDefects =
            this.sumScrapDefects + this.scrapDefects[i].sum;
          this.countScrapDefects = this.countScrapDefects + 1;
          if (this.scrapDefects[i].station == "Inspection 1") {
            this.sumScrapIns1 = this.sumScrapIns1 + this.scrapDefects[i].sum;
            // console.log("this.sumScrapIns1", this.sumScrapIns1);
          }
          if (this.scrapDefects[i].station == "Inspection 2") {
            this.sumScrapIns2 = this.sumScrapIns2 + this.scrapDefects[i].sum;
            // console.log("this.sumScrapIns2", this.sumScrapIns2);
          }
          if (this.scrapDefects[i].station == "Q-Gate Inspection 3") {
            this.sumScrapIns3 = this.sumScrapIns3 + this.scrapDefects[i].sum;
            // console.log("this.sumScrapIns3", this.sumScrapIns3);
          }
          if (this.scrapDefects[i].station == "Inspection S") {
            this.sumScrapIns4 = this.sumScrapIns4 + this.scrapDefects[i].sum;
            // console.log("this.sumscrapIns1", this.sumscrapIns1);
          }
          if (this.scrapDefects[i].station == "Q-Gate Inspection 2") {
            this.sumScrapIns5 = this.sumScrapIns5 + this.scrapDefects[i].sum;
            // console.log("this.sumscrapIns1", this.sumscrapIns1);
          }
        }
      }

      // REPAIR----------------------------------------------------------
      this.repairDefects = dashboard.failureDefect.filter(
        (defect) => defect.type === "REPAIR"
      );
      for (let i = 0; i < dashboard.failureTotal; i++) {
        if (this.repairDefects[i] && this.repairDefects[i].sum) {
          this.sumrepairDefects =
            this.sumrepairDefects + this.repairDefects[i].sum;
          this.countrepairDefects = this.countrepairDefects + 1;
          if (this.repairDefects[i].station == "Inspection 1") {
            this.sumrepairIns1 = this.sumrepairIns1 + this.repairDefects[i].sum;
            // console.log("this.sumrepairIns1", this.sumrepairIns1);
          }
          if (this.repairDefects[i].station == "Inspection 2") {
            this.sumrepairIns2 = this.sumrepairIns2 + this.repairDefects[i].sum;
            // console.log("this.sumrepairIns2", this.sumrepairIns2);
          }
          if (this.repairDefects[i].station == "Q-Gate Inspection 3") {
            this.sumrepairIns3 = this.sumrepairIns3 + this.repairDefects[i].sum;
            // console.log("this.sumrepairIns3", this.sumrepairIns3);
          }
          if (this.repairDefects[i].station == "Inspection S") {
            this.sumrepairIns4 = this.sumrepairIns4 + this.repairDefects[i].sum;
            // console.log("this.sumrepairIns1", this.sumrepairIns1);
          }
          if (this.repairDefects[i].station == "Q-Gate Inspection 2") {
            this.sumrepairIns5 = this.sumrepairIns5 + this.repairDefects[i].sum;
            // console.log("this.sumrepairIns1", this.sumrepairIns1);
          }
        }
      }

      // REWORK----------------------------------------------------------
      this.reworkDefects = dashboard.failureDefect.filter(
        (defect) => defect.type === "REWORK"
      );
      for (let i = 0; i < dashboard.failureTotal; i++) {
        if (this.reworkDefects[i] && this.reworkDefects[i].sum) {
          this.sumreworkDefects =
            this.sumreworkDefects + this.reworkDefects[i].sum;
          this.countreworkDefects = this.countreworkDefects + 1;
          if (this.reworkDefects[i].station == "Inspection 1") {
            this.sumreworkIns1 = this.sumreworkIns1 + this.reworkDefects[i].sum;
            // console.log("this.sumreworkIns1", this.sumreworkIns1);
          }
          if (this.reworkDefects[i].station == "Inspection 2") {
            this.sumreworkIns2 = this.sumreworkIns2 + this.reworkDefects[i].sum;
            // console.log("this.sumreworkIns2", this.sumreworkIns2);
          }
          if (this.reworkDefects[i].station == "Q-Gate Inspection 3") {
            this.sumreworkIns3 = this.sumreworkIns3 + this.reworkDefects[i].sum;
            // console.log("this.sumreworkIns3", this.sumreworkIns3);
          }
        }
      }

            // RT----------------------------------------------------------
            this.RTDefects = dashboard.failureDefect.filter(
        (defect) => defect.type === "RT"
      );
      for (let i = 0; i < dashboard.failureTotal; i++) {
        if (this.RTDefects[i] && this.RTDefects[i].sum) {
          this.sumRTDefects =
            this.sumRTDefects + this.RTDefects[i].sum;
          this.countRTDefects = this.countRTDefects + 1;
          if (this.RTDefects[i].station == "Inspection 3") {
            this.sumRTIns3 = this.sumRTIns3 + this.RTDefects[i].sum;
            // console.log("this.sumRTIns3", this.sumRTIns3);
          }
          if (this.RTDefects[i].station == "Inspection 4") {
            this.sumRTIns4 = this.sumRTIns4 + this.RTDefects[i].sum;
            // console.log("this.sumRTIns4", this.sumRTIns4);
          }
        }
      }

      // RP----------------------------------------------------------
      this.RPDefects = dashboard.failureDefect.filter(
        (defect) => defect.type === "RP"
      );
      for (let i = 0; i < dashboard.failureTotal; i++) {
        if (this.RPDefects[i] && this.RPDefects[i].sum) {
          this.sumRPDefects =
            this.sumRPDefects + this.RPDefects[i].sum;
          this.countRPDefects = this.countRPDefects + 1;
          if (this.RPDefects[i].station == "Inspection 3") {
            this.sumRPIns3 = this.sumRPIns3 + this.RPDefects[i].sum;
            // console.log("this.sumRPIns3", this.sumRPIns3);
          }
          if (this.RPDefects[i].station == "Inspection 4") {
            this.sumRPIns4 = this.sumRPIns4 + this.RPDefects[i].sum;
            // console.log("this.sumRPIns4", this.sumRPIns4);
          }
        }
      }

      // RW----------------------------------------------------------
      this.RWDefects = dashboard.failureDefect.filter(
        (defect) => defect.type === "RW"
      );
      for (let i = 0; i < dashboard.failureTotal; i++) {
        if (this.RWDefects[i] && this.RWDefects[i].sum) {
          this.sumRWDefects =
            this.sumRWDefects + this.RWDefects[i].sum;
          this.countRWDefects = this.countRWDefects + 1;
          if (this.RWDefects[i].station == "Inspection 3") {
            this.sumRWIns3 = this.sumRWIns3 + this.RWDefects[i].sum;
            // console.log("this.sumRWIns3", this.sumRWIns3);
          }
          if (this.RWDefects[i].station == "Inspection 4") {
            this.sumRWIns4 = this.sumRWIns4 + this.RWDefects[i].sum;
            // console.log("this.sumRWIns4", this.sumRWIns4);
          }
        }
      }

      // PS----------------------------------------------------------
      this.PSDefects = dashboard.failureDefect.filter(
        (defect) => defect.type === "PS"
      );
      for (let i = 0; i < dashboard.failureTotal; i++) {
        if (this.PSDefects[i] && this.PSDefects[i].sum) {
          this.sumPSDefects =
            this.sumPSDefects + this.PSDefects[i].sum;
          this.countPSDefects = this.countPSDefects + 1;
          if (this.PSDefects[i].station == "Inspection 3") {
            this.sumPSIns3 = this.sumPSIns3 + this.PSDefects[i].sum;
            // console.log("this.sumPSIns3", this.sumPSIns3);
          }
          if (this.PSDefects[i].station == "Inspection 4") {
            this.sumPSIns4 = this.sumPSIns4 + this.PSDefects[i].sum;
            // console.log("this.sumPSIns4", this.sumPSIns4);
          }
        }
      }

      this.loaded = true;
    } catch (e) {
      console.error(e);
    }

    console.log("dashboard", dashboard);
    console.log("actual", dashboard.actual);
    console.log("OEE", dashboard.OEE);
    console.log("availability", dashboard.availability);
    console.log("dashboaperformancerd", dashboard.performance);
    console.log("quality", dashboard.quality);
    // console.log("dashboard", dashboardbar.bar);
    // console.log("dashboard", dashboardbar.min);
    // console.log("dashboard", dashboardbar.time);
    console.log("workingTime", dashboard.workingTime);
    console.log("workingTime.min", dashboard.workingTime.min);
    console.log("bottleNeck", dashboard.bottleNeck);
    console.log("plan", dashboard.plan);

  },
  methods: {
    AA() {
      this.target = 0;
      this.plan = 0;
      this.actual = 0;
      this.OEE = 0;
      this.availability = 0;
      this.performance = 0;
      this.quality = 0;
      this.time = 0;
      this.min = 0;
      this.bottleNeck = 0;
      this.group = 0
      this.downtimeDefect = 0;
      this.id = 0;
      this.details = 0;
      this.downtime = 0;
      this.failureDefect = 0;
      this.type = 0;
      this.details = 0;
      this.sum = 0;
      this.sumScrapIns1 = 0;
      this.sumScrapIns2 = 0;
      this.sumScrapIns3 = 0;
      this.sumrepairIns1 = 0;
      this.sumrepairIns2 = 0;
      this.sumrepairIns3 = 0;
      this.sumreworkIns1 = 0;
      this.sumreworkIns2 = 0;
      this.sumreworkIns3 = 0;
      this.sumRTIns3 = 0;
      this.sumRTIns4 = 0;
      this.sumRPIns3 = 0;
      this.sumRPIns4 = 0;
      this.sumRWIns3 = 0;
      this.sumRWIns4 = 0;
      this.sumPSIns3 = 0;
      this.sumPSIns4 = 0;
    },
    setChart() {
      this.sumScrapIns1 = 0;
      this.sumScrapIns2 = 0;
      this.sumScrapIns3 = 0;
      this.sumScrapIns4 = 0;
      this.sumScrapIns5 = 0;
      this.sumrepairIns1 = 0;
      this.sumrepairIns2 = 0;
      this.sumrepairIns3 = 0;
      this.sumrepairIns4 = 0;
      this.sumrepairIns5 = 0;
      this.sumreworkIns1 = 0;
      this.sumreworkIns2 = 0;
      this.sumreworkIns3 = 0;
      this.sumRTIns3 = 0;
      this.sumRTIns4 = 0;
      this.sumRPIns3 = 0;
      this.sumRPIns4 = 0;
      this.sumRWIns3 = 0;
      this.sumRWIns4 = 0;
      this.sumPSIns3 = 0;
      this.sumPSIns4 = 0;
    },
    gettype() {
      return this.type;
    },
    async update() {
      console.log("month mm", new Date().getMonth() + 1);
      console.log("month yy", new Date().getFullYear());
      const dashboard = await axiosInstance.post('/dashboard/month', {
        lineId: parseInt(this.type),
        month: this.month.month + 1,
        year: this.month.year,
        shift: this.shift
      });
      this.loaded = false;
      try {

        this.target = dashboard.target;
        this.plan = dashboard.plan;
        this.actual = dashboard.actual;
        this.OEE = dashboard.oee;
        this.availability = dashboard.availability;
        this.performance = dashboard.performance;
        this.quality = dashboard.quality;
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
       //ตารางAvailability F--------------------------------------------------
        
       if (parseInt(this.type) == 1) { 
        this.bottleneck = dashboard.downtimeDefect.filter(
          (bottleneck) => bottleneck.station === "OPF06"
        );
        //ตารางPerformance F----------------------------------------------------
        this.downtimenotBT = dashboard.downtimeDefect.filter(
          (downtimenotBT) => downtimenotBT.station !== "OPF06"
        );
      }
        //ตารางAvailability S--------------------------------------------------
        if (parseInt(this.type) == 2) {
          this.bottleneck = dashboard.downtimeDefect.filter(
          (bottleneck) => bottleneck.station === "OPS04"
        );
        //ตารางPerformance S----------------------------------------------------
        this.downtimenotBT = dashboard.downtimeDefect.filter(
          (downtimenotBT) => downtimenotBT.station !== "OPS04"
        );
      }

      
      //ตารางAvailability P--------------------------------------------------
      if (parseInt(this.type) == 3) {
        this.bottleneck = this.downtimeDefect
      //ตารางPerformance P----------------------------------------------------
        this.downtimenotBT = this.downtimeDefect
      }

      console.log(this.bottleneck)
        // DOWNTIME----------------------------------------------------------
        const s = await axiosInstance.get(`/station/line/${parseInt(this.type)}`);
        if (parseInt(this.type) == 3) {
          this.stationForChart = s.filter(
            (item) => !item.stationName.includes("Inspection")
          );
          this.station = s.filter(
            (item) => !item.stationName.includes("Inspection")
          );
        }
        if (
          parseInt(this.type) == 1 ||
          parseInt(this.type) == 2
        ) {
          this.stationForChart = s;
          this.station = s;
        }
        console.log("this.station", this.station);
        this.stationData = Array(this.station.length).fill(0);
        console.log(this.stationData);
        for (let i = 0; i < dashboard.downtimeDefect.length; i++) {
          console.log(dashboard.downtimeDefect[i]);
          for (let j = 0; j < this.station.length; j++) {
            if (this.station[j].stationId == dashboard.downtimeDefect[i].station) {
              this.stationData[j] =
                this.stationData[j] + dashboard.downtimeDefect[i].downtime;
              console.log(this.stationData);
            }
          }
        }

        this.setChart()
        if (this.OEEOld !== this.OEE && this.availabilityOld !== this.availability && this.performanceOld !== this.performance && this.qualityOld !== this.quality) {
          this.OEEOld == this.OEE
          this.availabilityOld == this.availability
          this.performanceOld == this.performance
          this.qualityOld == this.quality

          console.log("cgffd");

          // SCRAP----------------------------------------------------------
          this.scrapDefects = dashboard.failureDefect.filter(
            (defect) => defect.type === "SCRAP"
          );
          for (let i = 0; i < dashboard.failureTotal; i++) {
            if (this.scrapDefects[i] && this.scrapDefects[i].sum) {
              this.sumScrapDefects =
                this.sumScrapDefects + this.scrapDefects[i].sum;
              this.countScrapDefects = this.countScrapDefects + 1;
              if (this.scrapDefects[i].station == "Inspection 1") {
                this.sumScrapIns1 = this.sumScrapIns1 + this.scrapDefects[i].sum;
                console.log("this.sumScrapIns1", this.sumScrapIns1);
              }
              if (this.scrapDefects[i].station == "Inspection 2") {
                this.sumScrapIns2 = this.sumScrapIns2 + this.scrapDefects[i].sum;
                console.log("this.sumScrapIns2", this.sumScrapIns2);
              }
              if (this.scrapDefects[i].station == "Q-Gate Inspection 3") {
                this.sumScrapIns3 = this.sumScrapIns3 + this.scrapDefects[i].sum;
                console.log("this.sumScrapIns3", this.sumScrapIns3);
              }
              if (this.scrapDefects[i].station == "Inspection S") {
                this.sumScrapIns4 = this.sumScrapIns4 + this.scrapDefects[i].sum;
                // console.log("this.sumscrapIns1", this.sumscrapIns1);
              }
              if (this.scrapDefects[i].station == "Q-Gate Inspection 2") {
                this.sumScrapIns5 = this.sumScrapIns5 + this.scrapDefects[i].sum;
                // console.log("this.sumscrapIns1", this.sumscrapIns1);
              }
            }
          }

          // REPAIR----------------------------------------------------------
          this.repairDefects = dashboard.failureDefect.filter(
            (defect) => defect.type === "REPAIR"
          );
          for (let i = 0; i < dashboard.failureTotal; i++) {
            if (this.repairDefects[i] && this.repairDefects[i].sum) {
              this.sumrepairDefects =
                this.sumrepairDefects + this.repairDefects[i].sum;
              this.countrepairDefects = this.countrepairDefects + 1;
              if (this.repairDefects[i].station == "Inspection 1") {
                this.sumrepairIns1 = this.sumrepairIns1 + this.repairDefects[i].sum;
                // console.log("this.sumrepairIns1", this.sumrepairIns1);
              }
              if (this.repairDefects[i].station == "Inspection 2") {
                this.sumrepairIns2 = this.sumrepairIns2 + this.repairDefects[i].sum;
                // console.log("this.sumrepairIns2", this.sumrepairIns2);
              }
              if (this.repairDefects[i].station == "Q-Gate Inspection 3") {
                this.sumrepairIns3 = this.sumrepairIns3 + this.repairDefects[i].sum;
                // console.log("this.sumrepairIns3", this.sumrepairIns3);
              }
              if (this.repairDefects[i].station == "Inspection S") {
                this.sumrepairIns4 = this.sumrepairIns4 + this.repairDefects[i].sum;
                // console.log("this.sumrepairIns1", this.sumrepairIns1);
              }
              if (this.repairDefects[i].station == "Q-Gate Inspection 2") {
                this.sumrepairIns5 = this.sumrepairIns5 + this.repairDefects[i].sum;
                // console.log("this.sumrepairIns1", this.sumrepairIns1);
              }
            }
          }

          // REWORK----------------------------------------------------------
          this.reworkDefects = dashboard.failureDefect.filter(
            (defect) => defect.type === "REWORK"
          );
          for (let i = 0; i < dashboard.failureTotal; i++) {
            if (this.reworkDefects[i] && this.reworkDefects[i].sum) {
              this.sumreworkDefects =
                this.sumreworkDefects + this.reworkDefects[i].sum;
              this.countreworkDefects = this.countreworkDefects + 1;
              if (this.reworkDefects[i].station == "Inspection 1") {
                this.sumreworkIns1 = this.sumreworkIns1 + this.reworkDefects[i].sum;
                // console.log("this.sumreworkIns1", this.sumreworkIns1);
              }
              if (this.reworkDefects[i].station == "Inspection 2") {
                this.sumreworkIns2 = this.sumreworkIns2 + this.reworkDefects[i].sum;
                // console.log("this.sumreworkIns2", this.sumreworkIns2);
              }
              if (this.reworkDefects[i].station == "Q-Gate Inspection 3") {
                this.sumreworkIns3 = this.sumreworkIns3 + this.reworkDefects[i].sum;
                // console.log("this.sumreworkIns3", this.sumreworkIns3);
              }
            }
          }

          // RT----------------------------------------------------------
      this.RTDefects = dashboard.failureDefect.filter(
        (defect) => defect.type === "RT"
      );
      for (let i = 0; i < dashboard.failureTotal; i++) {
        if (this.RTDefects[i] && this.RTDefects[i].sum) {
          this.sumRTDefects =
            this.sumRTDefects + this.RTDefects[i].sum;
          this.countRTDefects = this.countRTDefects + 1;
          if (this.RTDefects[i].station == "Inspection 3") {
            this.sumRTIns3 = this.sumRTIns3 + this.RTDefects[i].sum;
            // console.log("this.sumRTIns3", this.sumRTIns3);
          }
          if (this.RTDefects[i].station == "Inspection 4") {
            this.sumRTIns4 = this.sumRTIns4 + this.RTDefects[i].sum;
            // console.log("this.sumRTIns4", this.sumRTIns4);
          }
        }
      }

      // RP----------------------------------------------------------
      this.RPDefects = dashboard.failureDefect.filter(
        (defect) => defect.type === "RP"
      );
      for (let i = 0; i < dashboard.failureTotal; i++) {
        if (this.RPDefects[i] && this.RPDefects[i].sum) {
          this.sumRPDefects =
            this.sumRPDefects + this.RPDefects[i].sum;
          this.countRPDefects = this.countRPDefects + 1;
          if (this.RPDefects[i].station == "Inspection 3") {
            this.sumRPIns3 = this.sumRPIns3 + this.RPDefects[i].sum;
            // console.log("this.sumRPIns3", this.sumRPIns3);
          }
          if (this.RPDefects[i].station == "Inspection 4") {
            this.sumRPIns4 = this.sumRPIns4 + this.RPDefects[i].sum;
            // console.log("this.sumRPIns4", this.sumRPIns4);
          }
        }
      }

      // RW----------------------------------------------------------
      this.RWDefects = dashboard.failureDefect.filter(
        (defect) => defect.type === "RW"
      );
      for (let i = 0; i < dashboard.failureTotal; i++) {
        if (this.RWDefects[i] && this.RWDefects[i].sum) {
          this.sumRWDefects =
            this.sumRWDefects + this.RWDefects[i].sum;
          this.countRWDefects = this.countRWDefects + 1;
          if (this.RWDefects[i].station == "Inspection 3") {
            this.sumRWIns3 = this.sumRWIns3 + this.RWDefects[i].sum;
            // console.log("this.sumRWIns3", this.sumRWIns3);
          }
          if (this.RWDefects[i].station == "Inspection 4") {
            this.sumRWIns4 = this.sumRWIns4 + this.RWDefects[i].sum;
            // console.log("this.sumRWIns4", this.sumRWIns4);
          }
        }
      }

      // PS----------------------------------------------------------
      this.PSDefects = dashboard.failureDefect.filter(
        (defect) => defect.type === "PS"
      );
      for (let i = 0; i < dashboard.failureTotal; i++) {
        if (this.PSDefects[i] && this.PSDefects[i].sum) {
          this.sumPSDefects =
            this.sumPSDefects + this.PSDefects[i].sum;
          this.countPSDefects = this.countPSDefects + 1;
          if (this.PSDefects[i].station == "Inspection 3") {
            this.sumPSIns3 = this.sumPSIns3 + this.PSDefects[i].sum;
            // console.log("this.sumPSIns3", this.sumPSIns3);
          }
          if (this.PSDefects[i].station == "Inspection 4") {
            this.sumPSIns4 = this.sumPSIns4 + this.PSDefects[i].sum;
            // console.log("this.sumPSIns4", this.sumPSIns4);
          }
        }
      }

          // this.stationData = Array(this.station.length).fill(0);
          // console.log(this.stationData);
        }
        // if (this.OEE == 0) {
        //   this.stationData = Array(this.station.length).fill(0);
        // }
        this.loaded = true;
      } catch (e) {
        this.AA()
        console.error(e);
      }

      console.log("dashboard", dashboard);
      console.log("actual", dashboard.actual);
      console.log("OEE", dashboard.OEE);
      console.log("availability", dashboard.availability);
      console.log("dashboaperformancerd", dashboard.performance);
      console.log("quality", dashboard.quality);
      // console.log("dashboard", dashboardbar.bar);
      // console.log("dashboard", dashboardbar.min);
      // console.log("dashboard", dashboardbar.time);
      console.log("workingTime", dashboard.workingTime);
      console.log("workingTime.min", dashboard.workingTime.min);
      console.log("bottleNeck", dashboard.bottleNeck);
      console.log("plan", dashboard.plan);

    },


  },
  computed: {
    type() {
      return this.$route.params.type;
    },
    chartData1F() {
      return {
        labels: this.stationForChart.map(station => station.stationId),
        datasets: [
          {
            label: "Downtime that affects Performance",
            backgroundColor: [              
              'rgba(0, 0, 139, 1)',
              'rgba(0, 0, 139, 1)',
              'rgba(0, 0, 139, 1)',
              'rgba(0, 0, 139, 1)',
              'rgba(0, 0, 139, 1)',
              'RGBA( 153, 50, 204, 1 )',
              'rgba(0, 0, 139, 1)',
              'rgba(0, 0, 139, 1)',
              'rgba(0, 0, 139, 1)',
              'rgba(0, 0, 139, 1)'],
            data: this.stationData,
          },
          {
            label: "Downtime that affects Availability",
            backgroundColor:"RGBA( 153, 50, 204, 1 )",
            data: [],
          },
        ],
      };
    },
    chartData1S() {
      return {
        labels: this.stationForChart.map(station => station.stationId),
        datasets: [
          {
            label: "Downtime that affects Performance",
            backgroundColor: [              
              'rgba(0, 0, 139, 1)',
              'rgba(0, 0, 139, 1)',
              'rgba(0, 0, 139, 1)',
              'RGBA( 153, 50, 204, 1 )',
              'rgba(0, 0, 139, 1)',],
            data: this.stationData,
          },
          {
            label: "Downtime that affects Availability",
            backgroundColor:"RGBA( 153, 50, 204, 1 )",
            data: [],
          },
        ],
      };
    },
    chartData1P() {
      return {
        labels: this.stationForChart.map(station => station.stationId),
        datasets: [
          {
            label: "Downtime",
            backgroundColor: "rgba(0, 0, 139, 1)",
            data: this.stationData,
          },
        ],
      };
    },
    chartData2() {
      return {
        labels: this.stationIns.map(station => station.stationName),
        datasets: [
          {
            label: "SCRAP",
            backgroundColor: "#FF0000",
            data: [this.sumScrapIns1, this.sumScrapIns2, this.sumScrapIns3],
          },
          {
            label: "REPAIR",
            backgroundColor: "#FF7F00",
            data: [this.sumrepairIns1, this.sumrepairIns2, this.sumrepairIns3],
          },
          // {
          //   label: "REWORK",
          //   backgroundColor: "#FFFF00",
          //   data: [this.sumreworkIns1, this.sumreworkIns2, this.sumreworkIns3],
          // },
        ],
            responsive: true,
            maintainAspectRatio: false,
            barThickness: 5, // กำหนดความหนาของแท่ง Bar
            categoryPercentage: 0 // กำหนดความกว้างของแต่ละแท่ง Bar
      };
    },

    chartData3() {
      return {
        labels: this.stationIns.map(station => station.stationName),
        datasets: [
          {
            label: "SCRAP",
            backgroundColor: "#FF0000",
            data: [this.sumScrapIns4, this.sumScrapIns5],
          },
          {
            label: "REPAIR",
            backgroundColor: "#FF7F00",
            data: [this.sumrepairIns4, this.sumrepairIns5],
          },
          // {
          //   label: "REWORK",
          //   backgroundColor: "#FFFF00",
          //   data: [this.sumreworkIns1, this.sumreworkIns2, this.sumreworkIns3],
          // },
        ],
      };
    },

    chartData4() {
      return {
        labels: this.stationIns.map(station => station.stationName),
        datasets: [
          {
            label: "PS",
            backgroundColor: "#FF0000",
            data: [this.sumPSIns3, this.sumPSIns4],
          },
          {
            label: "RP",
            backgroundColor: "#FF7F00",
            data: [this.sumRPIns3, this.sumRPIns4],
          },
          {
            label: "RW",
            backgroundColor: "#FFDF00",
            data: [this.sumRWIns3, this.sumRWIns4],
          },
          {
            label: "RT",
            backgroundColor: "#FF69B4",
            data: [this.sumRTIns3, this.sumRTIns4],
          },
        ],
      };
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
  margin-top: 5px;
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
  padding: 10px 23px;
}

.WT-item {
  background-color: #292929;
  color: white;
  width: 271px;
  height: 197px;
  border-radius: 15px;
  justify-items: center;
  margin-top: 126%;
  transform: translatex(587%);
  font-family: 'Sarabun', sans-serif;
  font-size: 20;
}

.DATA-item {
  transform: translatey(-303%);
  font-size: 28px;
  font-family: 'Sarabun', sans-serif;
}

.DATA-item h2 {
  margin-left: 20%;
}

ul.data-item a h2 {
  font-family: 'Sarabun', sans-serif;
  font-size: 22px;
  color: black;
  margin-left: 20%;
  text-decoration: none;
  transition: .3s ease-in-out;
}

ul.data-item a h2 :hover {
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
  transform: translatey(-10px);
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
  transform: translatey(-10px);
  margin-left: 40px;
}


/* #CONTENT */

.services-grid1 {
  display: grid;
  grid-template-columns: repeat(3, 620px);
  width: 500px;
  height: 400px;
  margin-left: 350px;
  margin-top: -49.5%;
}

.content-OEE-item h2 {
  background: #D9D9D9;
  width: 1000px;
  height: 400px;
  padding: 10px;
  border-radius: 20px;
  display: inline-block;


}

.content-OEE-item h2 {
  font-size: 32px;
  text-align: justify;
  padding-left: 250px;
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
  margin-top: -935px;
  color: black;
  transform: translatex(1575px);
}

.content-APQ-item {
  background: #D9D9D9;
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

.services-grid3 {
  display: grid;
  grid-template-columns: repeat(3, 620px);
  width: 500px;
  height: 400px;
  margin-left: -620px;
  margin-top: -1%;
}

.services-grid4 {
  display: grid;
  grid-template-columns: repeat(3, 620px);
  width: 500px;
  height: 400px;
  margin-left: -3px;
  margin-top: -1%;
}

.content-DG-item {
  background: #F2F2F2;
  width: 570px;
  height: 440px;
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

.scale2 {
  font-size: 16px;
  margin-top: 5px;
  margin-left: 250px;
}
.content-SG-item {
  background: #F2F2F2;
  width: 570px;
  height: 440px;
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
  padding-left: 5%;
  padding-right: 5%;

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
  