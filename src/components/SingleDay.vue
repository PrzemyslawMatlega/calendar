<template>
  <div class="single-day" :class="isActive ? 'single-day--active' : 'single-day--inactive'">
    <div class="single-day__front"> <span>{{dayNumber}}</span></div>
    <div class="single-day__back">

    </div>
  </div>
</template>

<script>
  export default {
    props: {
      isActive: Boolean,
      dayNumber: Number,
    }
  }

</script>

<style lang="scss">
  .single-day {
    position: relative;
    width: 200px;
    height: 250px;
    cursor: pointer;
    border-radius: 50px;
    transform-style: preserve-3d;
    perspective: 600px;

    &:hover .single-day__front {
      transform: rotateY(-180deg)
    }

    &:hover .single-day__back {
      transform: rotateY(0deg)
    }

    &--active {}

    &--inactive {}

    &__front {
      height: 100%;
      width: 100%;
      position: absolute;
       border-radius: 10px;
      top: 0;
      left: 0;
      background: linear-gradient(to bottom, #ed213a, #93291e);
      transform: rotateY(0deg);
      transition: 0.8s;

      font-size: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      text-align: center;

    }

    &__back {
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
     border-radius: 10px;
      left: 0;
      backface-visibility: hidden;
      background: linear-gradient(to bottom, #52c234, #061700);
      transform: rotateY(180deg);
      transition: 0.8s;
    }

  }

</style>
