<template>
  <div>
    <header-com ></header-com>
    <menu-com :list="menuData"></menu-com>
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
      menuData: [
        {
          name: '考试资讯',
          path: '/kaoshi'
        },
        {
          name: '公示公告',
          path: '/kaoshi'
        },
        {
          name: '考试项目',
          path: '/kaoshi'
        }
      ]
    }
  },
  methods: {
  }
}
</script>
