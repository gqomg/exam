
<template>
    <div class="box">
      <div class="box-header with-border">
        <h3 class="box-title">{{title}}</h3>
        <div class="box-tools pull-right" v-if="closable">
            <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
        </div>
        <slot name="header"></slot>
      </div>
      <div class="box-body" :class="className" style="padding:0;">
        <slot></slot>
      </div>
    </div>  
</template>

<script>
export default {
  name: 'BoxItem',
  props: {
    title:{
      type:String,
      required:true
    },
    className:{
      type:String  
    },
    closable:{
      type:Boolean
    }
  },
  data () {
    return {
    }
  }
}
</script>
