<template>
  <aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <!-- sidebar menu: : style can be found in sidebar.less -->
      <ul class="sidebar-menu">
        <li class="treeview" :class="{'active':menu.active,'hassubtree':menu.children.length>0}" v-for="(menu,index) in menuList" :key="index">
          <a :href="menu.children.length===0 ? menu.url : 'javascript:void(0)'">
            <i :class="menu.icon"></i>
            <span  :class="{'headerli':menu.children.length>0}">{{menu.name}}</span><i class="fa fa-angle-up pull-right" v-if="menu.children.length>0"></i>
          </a>
          <ul class="treeview-menu" v-if="menu.children.length>0">
            <li :class="{'active':subitem.active}" v-for="(subitem,index) in menu.children" :key="index"><a :href="subitem.url"><i :class="subitem.icon"></i> {{subitem.name}}</a></li>
          </ul>
        </li>
      </ul>
    </section>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
export default {
  name: 'SidebarCom',
  data () {
    return {
      menuList:[],
      hashname:window.location.hash
    }
  },
  computed:{
    menus(){
      return this.$store.state.menuTree
    }
  },
  watch:{
    hashname(){
      this.menuHandler()
    },
    menus(){
      this.menuHandler()
    }
  },
  methods: {
    menuHandler(){
      let self = this
      this.menuList = this.menus.slice(0)
      let curpathname = this.hashname
      self.menuList.forEach((menu) =>{
        if (curpathname.indexOf(menu.url) !== -1 && curpathname === menu.url && menu.children.length === 0) {
          menu.active = true
        } else {
          menu.active = false
          if (menu.children.length > 0){
            menu.children.forEach((subitem) => {
              if (curpathname.indexOf(subitem.url) !== -1) {
                subitem.active = true
                menu.active = true
              } else {
                subitem.active = false
              }
            })
          }
        }
      })
      
    }
  },
  mounted() {
    let self = this
    setTimeout(()=>{
      this.menuHandler()
    },100)
    window.addEventListener("hashchange",function(e){ 
      self.hashname = window.location.hash
    },false)
  }
}
</script>
