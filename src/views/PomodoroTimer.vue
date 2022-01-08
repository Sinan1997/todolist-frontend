<template>
  <div class="container" :class="{'gradient-flip': gradientFlipped }">
    <div class="width">
      <h2 class="title" v-html="pomodoroStageSelection"></h2>
      <div class="steps">
        <div v-for="(stage,index) in pomodoroStage" :key="stage.id" :class="{ active: activeStage(index) }"></div>
      </div>
      <div id="timer" v-html="time"></div>
      <div class="buttons">
        <button @click="timerPlay" v-if="!timerRunning">Start &nbsp;<span class="fa fa-play"></span></button>
<!--        v-html="pauseSwitch"-->
        <button @click="timerPause" v-if="timerRunning">Pause <span class="fa fa-pause"></span></button>
        <button @click="timerReset">Restart &nbsp;<span class="fa fa-redo"></span></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PomodoroTimer',
  data () {
    return {
      totalTime: (25 * 60),
      timerRunning: false,
      timerPaused: false,
      interval: null,
      pomodoroStage:
        ['Pomodoro Runde 1', 'Pause', 'Pomodoro Runde 2', 'Pause', 'Pomodoro Runde 3', 'Pause', 'Final Pomodoro', 'Letzte Pause'],
      stage: 0,
      gradientFlipped: null
    }
  },
  computed: {
    time: function () {
      return this.minutes + ' : ' + this.seconds
    },
    minutes: function () {
      var min = Math.floor(this.totalTime / 60)
      return min >= 10 ? min : '0' + min
    },
    seconds: function () {
      var sec = this.totalTime - (this.minutes * 60)
      return sec >= 10 ? sec : '0' + sec
    },
    pauseSwitch: function () {
      var paused = this.timerPaused
      if (paused === false) {
        return 'Start &nbsp;<span class="fa fa-play"></span>'
      } else {
        return 'Resume &nbsp;<span class="fa fa-play"></span>'
      }
    },
    pomodoroStageSelection: function () {
      var selectedStage = this.stage
      return this.pomodoroStage[selectedStage]
    }
  },
  methods: {
    playSound (sound) {
      if (sound) {
        var audio = new Audio(sound)
        audio.play()
      }
    },
    timerPlay () {
      this.timerRunning = true
      this.timerPaused = false
      this.interval = setInterval(this.countdownTimer, 1000)
    },
    timerPause () {
      this.timerRunning = false
      this.timerPaused = true
      clearInterval(this.interval)
    },
    timerReset () {
      this.timerRunning = false
      this.timerPaused = false
      clearInterval(this.interval)
      this.totalTime = (25 * 60)
      this.stage = 0
    },
    countdownTimer () {
      if (this.totalTime === 0) {
        this.playSound('http://soundbible.com/mp3/Elevator Ding-SoundBible.com-685385892.mp3')
        this.timerRunning = false
        this.timerPaused = false
        clearInterval(this.interval)
        this.stageStep()
      } else if (this.timerRunning === true) {
        this.totalTime--
      }
    },
    stageStep: function () {
      this.stage++
      if (this.stage === 8) {
        this.timerReset()
      } else if ((this.stage === 2) || (this.stage === 4) || (this.stage === 6)) {
        this.totalTime = (25 * 60)
        this.gradientFlipped = false
      } else {
        this.totalTime = (5 * 60)
        this.gradientFlipped = true
      }
    },
    activeStage: function (index) {
      return this.stage === index
    }
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  background-image: linear-gradient(141deg, #ffffff 0, #ffffff 100%);
  min-height: 100vh;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container.gradient-flip {
  background-image: linear-gradient(141deg, #ffffff 0, #ffffff 100%);
}
.width {
  max-width: 620px;
}

#timer {
  font-size: 200px;
  line-height: 1;
  margin-bottom: 40px;
  color: #000000;
  text-align: center;
}

.gradient-flip #timer {
  color: #000000;
}

.title {
  text-align: center;
  font-size: 3em;
  letter-spacing: 5px;
  text-transform: uppercase;
}

.buttons {
  text-align: center;
}
.buttons button {
  background-color: rgb(105, 105, 105);
  color: #ffffff;
  border: none;
  padding: 12px 30px;
  margin: 0 12px;
  border-radius: 6px;
  transition: all .3s ease-out;
  box-shadow: 2px 3px 6px rgba(0, 0, 0, 0.2);
}
.buttons button:hover {
  cursor: pointer;
  opacity: .75;
  -webkit-transform: translatey(-3px);
  transform: translatey(-3px);
}

.steps {
  display: grid;
  grid-template: auto/repeat(8, 1fr);
  padding-bottom: 50px;
}
.steps > div {
  width: 20px;
  height: 20px;
  background-color: #696969;
  border-radius: 50%;
  margin: auto;
  opacity: .2;
}
.steps .Pomodoro {
  background: #696969;
}
.steps .Break {
  background: #696969;
}
.steps .active,
.steps .done {
  opacity: 1;
}

</style>
