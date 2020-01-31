<template>
  <div>
    <h2>Set parking start time</h2>
    <Select :items="houres" @onChange="setHoure" :selected="selectedHoures" :disabled="isStarted" />
    <b>:</b>
    <Select :items="minutes" @onChange="setMinute" :selected="selectedMinute" :disabled="isStarted" />

    <h2>Set price per time</h2>
    <InputNumber @onInput="setPrice" :value="selectedPrice" :disabled="isStarted" />
    <b>/</b>
    <InputNumber @onInput="setPerTime" :value="selectedPerTime" :disabled="isStarted" />
    <Select :items="perType" @onChange="setPricePreType" :selected="selectedPerType" :disabled="isStarted" />

    <h2>Ready</h2>
    <div>
      <Button @onClick="toggleIsStarted">{{!isStarted ? 'START' : 'STOP'}}</Button>
      <Button @onClick="initData" :disabled="isStarted">RESET</Button>
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
import InputNumber from './InputNumber'
import { HOURES } from '../constants/houres.js'
import { MINUTES } from '../constants/minutes'
import dayjs from 'dayjs';
import localforage from 'localforage'

const PTLF = localforage.createInstance({
  driver: localforage.LOCALSTORAGE,
  name: 'ParkingTimer',
  storeName: 'saveData',
  version  : 1
});

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
    Button,
    InputNumber
  },
  created: function() {
    this.getSaveData().then(() => {
      if (!this.isStarted) {
        this.selectedHoures = dayjs().$H
        this.selectedMinute = dayjs().$m
      } else {
        this.startTimer()
      }
    })
  },
  methods: {
    setSaveData: function() {
      PTLF.setItem('saveData', {
        selectedHoures: this.selectedHoures,
        selectedMinute: this.selectedMinute,
        selectedPrice: this.selectedPrice,
        selectedPerTime: this.selectedPerTime,
        selectedPerType: this.selectedPerType,
        isStarted: this.isStarted,
        startedTime: this.startedTime
      })
    },
    getSaveData:async function() {
      await PTLF.getItem('saveData').then((saveData) => {
        if(!saveData) {
          return null
        }
        this.selectedHoures = Number(saveData.selectedHoures)
        this.selectedMinute =  Number(saveData.selectedMinute)
        this.selectedPrice =  Number(saveData.selectedPrice)
        this.selectedPerTime =  Number(saveData.selectedPerTime)
        this.selectedPerType = saveData.selectedPerType
        this.isStarted = saveData.isStarted
        this.startedTime = saveData.startedTime
      })
    },
    clearSaveData: function() {
      PTLF.clear();
    },
    initData: function () {
      console.log('initData')
      this.stopTimer()

      this.houres= HOURES
      this.selectedHoures = dayjs().$H
      this.minutes= MINUTES
      this.selectedMinute = dayjs().$m
      this.selectedPrice= 100
      this.selectedPerTime= 1
      this.perType= ['H',"M"]
      this.selectedPerType= 'H'
      this.isStarted= false
      this.timer= null
      this.startedTime= 0
      this.endedTime= 0
      this.totalParkingTime= '00:00:00'
      this.totalPrice= 0

      this.clearSaveData();
    },
    setHoure: function(value) {
      this.selectedHoures = value
    },
    setMinute: function(value) {
      this.selectedMinute = value
    },
    setPricePreType: function(value) {
      this.selectedPerType = value
    },
    setPrice: function(value) {
      this.selectedPrice = value;
    },
    setPerTime: function(value) {
      this.selectedPerTime = value
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
        this.startedTime = dayjs(`${dayjs().year()}-${dayjs().month()+1}-${dayjs().date()}T${this.selectedHoures}:${this.selectedMinute}:${dayjs().second()}`).unix()
        this.setSaveData()
        this.startTimer()
      } else {
        this.clearSaveData();
        this.stopTimer()
      }
    },
    startTimer: function() {
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
      const mm = Math.floor(diffTime / 60 ) % 60;
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
h2 {
  margin: 2rem 0 1rem;
}

b {
  font-size: 2rem;
  font-weight: normal;
  display: inline-block;
  padding: 0 0.3rem;
}

dl {
  display: flex;
  flex-wrap: wrap;
  font-size: 1.5rem;
  margin: 0;
}

dl dt {
  width: 50%;
  margin-bottom: 2rem;
  text-align: right;
}
dl dd {
  margin: 0;
  width: 50%;
  margin-bottom: 2rem;
  font-size: 2rem;
  text-align: center;
}
</style>
