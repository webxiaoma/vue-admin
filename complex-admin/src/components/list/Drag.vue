<template>
   <div class="dragWrap">
      <div class="dragCenter">
         <div class="title">
            vuedraggable 插件是 Vue 拖拽组件
           <a href="https://github.com/SortableJS/Vue.Draggable"> Vue.Draggable</a>
         </div>
         <div class="draggable">
            <el-row>
              <el-col :span="7">
                <div class="one">
                    <draggable v-model="draggData1" :options="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                      <transition-group name="list-one">
                          <div v-for="items in draggData1" :key="items.order" class="item">
                            {{items.name}}
                          </div>
                      </transition-group>
                    </draggable>
                </div>
              </el-col>
              <el-col :span="7">
                <div class="one">
                    <draggable v-model="draggData1" :options="dragOptions" >
                      <transition-group  name="list-two">
                          <div v-for="items in draggData2" :key="items.order" class="item">
                            {{items.name}}
                          </div>
                      </transition-group>
                    </draggable>
                </div>
              </el-col>
              <el-col :span="7">
                <div class="one">
                    <draggable v-model="draggData1" :options="dragOptions">
                      <transition-group  name="list-three">
                          <div v-for="items in draggData3" :key="items.order" class="item">
                            {{items.name}}
                          </div>
                      </transition-group>
                    </draggable>
                </div>
              </el-col>
            </el-row>
         </div>
      </div>
   </div>
</template>

<script>

export default {
   data () {
      return {
        isDragging: false,
         draggData1:[{
             name:'Vue 教程',
             order:1,
           },{
             name:'JQuery 教程',
             order:2,
           },{
             name:'React 教程',
             order:3,
           },{
             name:'Angular 教程',
             order:4,
          }],
          draggData2:[{
             name:'Vue 练习',
             order:5,
           },{
             name:'JQuery 练习',
             order:6,
           },{
             name:'React 练习',
             order:7,
           },{
             name:'Angular 练习',
             order:8,
           }],
           draggData3:[{
             name:'Vue 项目',
             order:9,
           },{
             name:'JQuery 项目',
             order:10,
           },{
             name:'React 项目',
             order:11,
           },{
             name:'Angular 项目',
             order:12,
           }]
      }
    },
    computed:{
        dragOptions () {
          return  {
            animation: 0,
            group: 'description',
            disabled: !this.editable,
            ghostClass: 'ghost'
          };
        },
    },
    methods:{
      onMove ({relatedContext, draggedContext}) {
         console.log(relatedContext, draggedContext)
      },
    }

}
</script>

<style lang="less" scoped>
@import url('../../theme/base-theme.less');

.dragWrap{
  width:99.8%;
  padding:20px;
  .dragCenter{
    width:100%;
    padding:20px;
    background:@minor-color-4;
    text-align: center;
    .title{
      height:30px;
      display:flex;
      align-items:center;
      justify-content: center;
      margin-bottom:30px;
      a{
        margin-left:10px;
        font-size:18px;
        color:@minor-color-3;
      }
    }
    .draggable{
      .el-col{
        margin:0 10px;
      }
      .one{
        width:100%;
        padding:10px 30px;
        background:@minor-color-1;
        border-radius:5px;
        .item{
          padding:10px 0;
          width:100%;
          cursor: move;
          background: @minor-color-4;
          color:@font-color-1;
          margin:10px 0;
          border-radius:5px;
          font-size:16px;

        }
      }
    }
  }
}
</style>
