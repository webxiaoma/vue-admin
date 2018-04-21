<template>
  <div class="homeWrap">
       首页
  </div>
</template>

<script>
// import {mapActions} from 'vuex'


export default {
  data () {
    return {

    }
  },
  created(){
    // this.listRequest().then(res=>{
    //   // console.log(res)
    // })
  },
  methods:{
    // ...mapActions('list/home',['listRequest']),
  }
}
</script>

<style scoped>

.homeWrap{
   width:100%;
   height:100%;
   display:flex;
   justify-content:center;
   font-size:50px;
}
</style>
