<template>
    <div class="float-right pt-4 pr-2">
      <div class="block">
          <p class="text-yellow-400 text-4xl font-medium">{{day}}</p>
      </div>
      <div class="">
          <span class="text-xs font-normal">{{month}}</span>,
          <span class="text-xs font-normal">{{year}}</span>

      </div>

    </div>
</template>
<script>

  export default {
    name: 'DateView',
    props: {
      dateString: {
        type: String,
        default: ""
      }
    },
    data() {
      return { date : new Date()}
    },
    computed:{
       day(){ return this.date.getDate()},
       month(){return ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][this.date.getMonth()]},
       year(){return this.date.getFullYear()}
    },
    mounted(){
       this.date = new Date(this.dateString);

    }
  }
</script>

<style scoped>

</style>