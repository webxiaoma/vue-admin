<template>
  <div class="homeWrap">

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

<style lang="less" scoped>
@import url("../../theme/base-theme.less");

.homeWrap{
   width:100%;
   height:100%;
   display:flex;
   justify-content:center;
   font-size:50px;
}
</style>
