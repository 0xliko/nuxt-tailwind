<template>
    <div>
        <div class="grid grid-cols-5 gap-2">
            <div class="block">
                <DateView :dateString="date"></DateView>
            </div>
            <div class="p-5">
                <img :src="agenda.thumbnail" class="h-14 float-right"/>
            </div>
            <div class="col-span-2 font-medium text-4x1 grid grid-cols-1 place-items-center">
                <div  class="self-center">{{agenda.title}}</div>
            </div>
            <div class="pt-12">
                <a :href="agenda.url" class="bg-yellow-400 py-1 px-12 text-2x1 rounded float-right" style="font-family: Montserrat;outline: none;">join us</a>
            </div>
        </div>
        <div v-for="(webinar,i) in agenda.webinars" :key="i" class="grid grid-cols-5 gap-2 mb-2">
            <div></div>
            <div class="grid grid-cols-1 place-items-center bg-blue-300">
                <div class="self-center">{{timeFormat(webinar.startDateTime)}}</div>
            </div>
            <div class="bg-blue-300 px-4 py-3 col-span-3">{{webinar.blurb}}</div>
        </div>
    </div>
</template>
<script>
    import DateView from '../components/DateView';
  export default {
    name: 'AgendaView',
    components:{DateView},
    props: {
      agenda: {
        type: Object,
        default: {}
      }
    },
    methods:{
      timeFormat(dateTime){
        var h = new Date(dateTime).getHours();
        return  `${h} ${h>12?'pm':'am'}`
      }
    },
    computed:{
       date(){
         return this.agenda.webinars?this.agenda.webinars[0].startDateTime:''
       },
    },
    mounted(){
       console.log(this.agenda)
    }
  }
</script>

<style scoped>

</style>