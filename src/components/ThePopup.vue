<template>
    <div class="thePopup">
        <div class="thePopup__content"
        @click ="$emit('closeThePopup')"
        >
        {{pickedDay}}

        </div>
    </div>
</template>

<script>
export default {
    props: {
        pickedDay: Object
    }
}
</script>


<style lang="scss">
.thePopup{
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    background: rgba(0, 0, 0, 0.698);
    width: 100%;
    height: 100%;

    &__content{
         width: 40%;
         height: 20rem;
        padding: 1rem;
        background: #fff;
    }
}

    
</style>