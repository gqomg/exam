<template>
 <div class="n_nav xz">
    <dl style="padding-left:0">
        <dd class="d0"><a href="http://www.neea.edu.cn/html1/folder/16093/614-1.htm" target="_blank">考试资讯</a></dd>
        <dd class="d1"><a href="http://www.neea.edu.cn/html1/category/1508/151-1.htm" target="_blank">公示公告</a></dd>
        <dd class="d2" style="margin:0 80px 0 0"><a href="http://www.neea.edu.cn/html1/folder/16103/1271-1.htm" target="_blank">考试项目</a></dd>
    </dl>
</div>
</template>

<script>
export default {
  name: 'MenuCom',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
<style scoped>
.n_nav {
    height: 46px;
    background-color: #E7E8EB;
    border-bottom: solid 3px #003E7D;
    font-weight: bold;
}
.n_nav dl {
    float: left;
    line-height: 46px;
    padding: 0 0 0 20px;
}
.n_nav dl dd {
    float: left;
    padding: 0 0 0 96px;
}
.xz dl dd {
    padding: 0px 0px 0px 70px;
    line-height: 46px;
}
.n_nav dl dd a {
    float: left;
    color: #003e7d;
    font-size:14px;
    letter-spacing: 1px;
}
.n_nav dl dd a:hover {
    color: #ff7f00;
    text-decoration: none
}
</style>
