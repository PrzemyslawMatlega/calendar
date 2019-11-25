<template>
 
    <div class="main-background">
      <div class="snow-background">
        <div class="calendar">
        <router-link to="/grudzien">
          <SingleDay 
          v-for="(day, index) in availableDays" 
          :key="index" 
          :isActive="day.isAvailable" 
          :dayNumber="index+1"
          @click.native="dayClicked(index)" />
        
        </router-link>
        </div>

        <router-view>
            <transition name="fade">
            <ThePopup 
                v-if="showThePopup"
                :pickedDay="availableDays[pickedDayIndex]"
                @closeThePopup="showThePopup = false"
            />
            </transition>

        </router-view>

      </div>
    </div>

</template>

<script>
  import SingleDay from './SingleDay'
  import ThePopup from './ThePopup'
  import MyDays from '../days.json'

  export default {
    name: 'App',
    data() {
      return {
        availableDays: [],
        showThePopup: false,
        pickedDayIndex: 0,
        dateObject : new Date(),
      }
    },
    methods: {
      dayClicked(dayIndex) {
          const today = parseInt(this.dateObject.getDate())
          
          if(dayIndex+1 > today){
            return;
          }
          else{
            this.pickedDayIndex = dayIndex
            this.showThePopup = true
           
          }

      }
    },
    created() {
      const today = parseInt(this.dateObject.getDate())

      for (let dayNumber in MyDays) {
        if (dayNumber <= today) {
          const activeDay = {
            ...MyDays[dayNumber],
            isAvailable: true,
          }
          this.availableDays.push(activeDay);
        } else {
          const inActiveDay = {
            img: '',
            opis: '',
            isAvailable: false,
          }
          this.availableDays.push(inActiveDay);
        }
      }
    },
    components: {
      SingleDay,
      ThePopup
    }
  }

</script>

<style>
 

  .calendar {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-row-gap: 3rem;
    grid-column-gap: 3rem;
    justify-items: center;
    max-width: 900px;
    margin: 0 auto;
  }

  .main-background {}

  .snow-background {}

    .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }


</style>
