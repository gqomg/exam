<template>
  <div>
    <header-com ></header-com>
    <menu-com></menu-com>
    <div style="height:500px;">
    
    
    </div>
    <footer-com></footer-com>
  </div>
</template>
<script>
import HeaderCom from '@c/HeaderCom'
import MenuCom from '@c/MenuCom'
import FooterCom from '@c/FooterCom'
export default {
  name: 'Index',
  components:{
    HeaderCom,
    MenuCom,
    FooterCom
  },
  data () {
    return {
      
    }
  },
  methods: {
  }
}
</script>
