<template>
  <div>
    <topbar />
    <main>
      <div class="container">
        <div v-for="(agenda,i) in agendas" :key="i">
           <AgendaView :agenda="agenda" />
        </div>
      </div>
    </main>

  </div>
</template>
<script>
  import { mapState } from 'vuex'
  import topbar from '../layouts/topbar';
  import AgendaView from '../components/AgendaView';
  export default {
    name: 'index',
    components:{topbar,AgendaView},
    props: {
      agendas: {
        type: Object,
        default: []
      }
    },
    methods:{

    },
    computed:mapState({
      // arrow functions can make the code very succinct!
      agendas: state => state.agendas
    }),
    mounted(){
      this.$store.dispatch('getAgenda');
    }
  }
</script>

<style scoped>

</style>