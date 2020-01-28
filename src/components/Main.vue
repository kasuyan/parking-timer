<template>
  <div>
    <h2>Set parking start time</h2>
    <Select :items="houres" @onChange="setHoure" :selected="selectedHoures" :disabled="isStarted" />
    :
    <Select :items="minutes" @onChange="setMinute" :selected="selectedMinute" :disabled="isStarted" />
    <!-- <p>Selected: {{selectedHoures}}:{{selectedMinute}}</p> -->

    <h2>Set price</h2>
    <p>price / time</p>
    <input type="number" v-model="selectedPrice" :disabled="isStarted" /> / 
    <input type="number" v-model="selectedPerTime" :disabled="isStarted" />
    <Select :items="perType" @onChange="setPricePreType" :disabled="isStarted" />
    <!-- <p>Set: {{selectedPrice}}/{{selectedPerTime}}{{selectedPerType}}</p> -->

    <h2>Ready</h2>
    <div>
      <Button @onClick="toggleIsStarted">{{!isStarted ? 'START' : 'STOP'}}</Button>
      <!-- <button>Reset</button> -->
    </div>
    <h2>Results</h2>
    <dl>
      <dt>Parking Time:</dt>
      <dd>{{totalParkingTime}}</dd>
      <dt>Total Price:</dt>
      <dd>{{totalPrice}}</dd>
    </dl>
  </div>
</template>

<script>
import Select from './Select'
import Button from './Button'
import { HOURES } from '../constants/houres.js'
import { MINUTES } from '../constants/minutes'
import dayjs from 'dayjs';

export default {
  name: 'Main',
  data: () => {
    return {
      houres: HOURES,
      selectedHoures: 0,
      minutes: MINUTES,
      selectedMinute: 0,
      selectedPrice: 100,
      selectedPerTime: 1,
      perType: ['H', "M"],
      selectedPerType: 'H',
      isStarted: false,
      timer: null,
      startedTime: 0,
      endedTime: 0,
      totalParkingTime: '00:00:00',
      totalPrice: 0
    }
  },
  components: {
    Select,
    Button
  },
  created: function() {
    if (!this.isStarted) {
      this.selectedHoures = dayjs().$H
      this.selectedMinute = dayjs().$m
    }
  },
  methods: {
    setHoure: function(value) {
      this.selectedHoures = value
    },
    setMinute: function(value) {
      this.selectedMinute = value
    },
    setPricePreType: function(value) {
      this.selectedPerType = value
    },
    toggleIsStarted: function() {
      if (this.selectedPrice === 0) {
        alert('Please set price')
        return
      }

      if (this.selectedPerTime === 0) {
        alert('Please set per time')
        return
      }

      this.isStarted = !this.isStarted;

      if(this.isStarted) {
        this.startTimer()
      } else {
        this.stopTimer()
      }
    },
    startTimer: function() {
      this.startedTime = dayjs(`${dayjs().year()}-${dayjs().month()+1}-${dayjs().date()}T${this.selectedHoures}:${this.selectedMinute}:${dayjs().second()}`).unix()
      this.startInterval();
    },
    stopTimer: function() {
      this.endedTime = dayjs().unix()
      this.showResult();
      this.stopInterval();
    },
    showResult: function() {
      let diffTime;
      let totalPrice;

      if (this.isStarted) {
        const now = dayjs().unix()
        diffTime = dayjs(now).diff(dayjs(this.startedTime))
      } else {
        diffTime = dayjs(this.endedTime).diff(dayjs(this.startedTime))
      }

      const ss = diffTime % 60
      const mm = Math.floor(diffTime / 60)
      const hh = Math.floor(diffTime / (60 * 60))

      this.totalParkingTime = `
        ${String(hh).length > 1 ? hh : '0'+hh}:${String(mm).length > 1 ? mm : '0' + mm}:${String(ss).length > 1 ? ss : '0'+ ss}
      `

      if (this.selectedPerType === "H") {
        totalPrice = Math.ceil(diffTime/(this.selectedPerTime * 60 * 60)) * this.selectedPrice
      } else {
        totalPrice = Math.ceil(diffTime/(this.selectedPerTime * 60 )) * this.selectedPrice
      }

      this.totalPrice = totalPrice
    },
    startInterval: function() {
      this.timer = setInterval(() => {
        this.showResult()
      }, 1000)
    },
    stopInterval: function() {
      clearInterval(this.timer)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
