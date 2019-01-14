
<template>
  <table class="table table-inline">
    <tbody>
    <tr v-for="(obj,index) in data" :key="index">
      <td width="50%" v-if="Array.isArray(obj)" v-for="item in obj"><div class="float-left align-right" style="color:#999;padding-right:5px;">{{item.label}}</div> <div class="float-left align-left">{{ item.value}}</div></td> 
      <td colspan="2" v-if="!Array.isArray(obj)"><div class="float-left align-left" style="color:#999;padding-right:5px;">{{ obj.label }}</div> <div>{{ obj.value }}</div></td> 
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'TableItem',
  props: {
    data:{
      type:Array,
      default:()=>[]
    }
  },
  data () {
    return {
    }
  }
}
</script>
