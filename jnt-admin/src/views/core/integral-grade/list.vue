<template>
  <!-- Vue的模块是独立存在的-->
  <div>
    <!--不能有多个块标签-->
    积分等级列表
  </div>
</template>

<script>
import integralGradeApi from '@/api/core/integral-grade'

//导出vue模块
export default {
  data() {
    return {
      list: [], //积分等级列表
    }
  },

  created() {
    this.fetchData() //页面一开始就加载 数据从远程拉下来 成功后赋给list（积分等级列表)
  },

  methods: {
    fetchData() {
      integralGradeApi.list().then((response) => {
        this.list = response.data.list
      })
    },
  },
}
</script>

<style scoped></style>
