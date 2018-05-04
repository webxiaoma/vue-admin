<template>
   <div class="dragWrap">
      <div class="dragCenter">
         <div class="title">
            vuedraggable 插件是 Vue 拖拽组件
           <a href="https://github.com/SortableJS/Vue.Draggable" target="_blank"> Vue.Draggable</a>
         </div>
         <p class="tip">状态：{{DraggingStatus}}</p>
         <div class="draggable">
            <el-row>
              <el-col :span="7">
                <div class="one">
                    <draggable  v-model="draggData1"
                                :options="dragOptions"
                                @start="onStart"
                                :move="onMove"
                                @end="onEnd"
                                @remove="onRemove"
                                @update="updata">
                      <transition-group>
                          <div v-for="items in draggData1" :key="items.order" class="item">
                            {{items.name}}
                          </div>
                      </transition-group>
                    </draggable>
                </div>
              </el-col>
              <el-col :span="7">
                <div class="one">
                    <draggable  v-model="draggData2"
                                :options="dragOptions"
                                @start="onStart"
                                :move="onMove"
                                @end="onEnd"
                                @remove="onRemove"
                                @update="updata">
                      <transition-group >
                          <div v-for="items in draggData2" :key="items.order" class="item">
                            {{items.name}}
                          </div>
                      </transition-group>
                    </draggable>
                </div>
              </el-col>
              <el-col :span="7">
                <div class="one">
                    <draggable  v-model="draggData3"
                                :options="dragOptions"
                                @start="onStart"
                                :move="onMove"
                                @end="onEnd"
                                @remove="onRemove"
                                @update="updata">
                      <transition-group>
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
import draggable from 'vuedraggable'

export default {
   data () {
      return {
         DraggingStatus: "",
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
            animation: 2,
            group: 'description',
            disabled: false,
            ghostClass: 'ghost',
          };
        },
    },
    methods:{
      onStart(evt){ //移动开始时的事件
        console.log(evt)
        this.DraggingStatus = "开始移动";
      },
      onMove(evt) { // 移动时的事件
         this.DraggingStatus = "移动中";
      },
      onEnd(evt){  // 移动后的事件
         this.DraggingStatus = "移动结束";
      },
      onRemove(evt){ //移除事件
      },
      updata(evt) { // 数据更新时的事件
      }
    },
    components:{
      draggable,
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
      font-size:20px;
      a{
        margin-left:10px;
        font-size:22px;
        color:@minor-color-3;
      }
    }
    .tip{
      width:100%;
      height:60px;
      font-size:20px;

    }
    .draggable{
      .el-col{
        margin:0 10px;
      }
      .one{
        width:100%;
        min-height:100px;
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
