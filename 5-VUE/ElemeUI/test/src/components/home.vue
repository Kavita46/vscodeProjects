

<template>
  <div>
    <el-card>
      <!-- 生成一个disable的el-button -->

      <el-button :disabled="true">普通按钮</el-button>
      <el-button :disabled="true" type="primary">主要按钮</el-button>
      <el-button :disabled="true" type="success">成功按钮</el-button>
      <el-button :disabled="true" type="warning">警告按钮</el-button>
      <el-button :disabled="true" type="danger">危险按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <br />

      <el-button>普通按钮</el-button>
      <el-button type="primary" plain>主要按钮</el-button>
      <el-button type="success" plain>成功按钮</el-button>
      <el-button type="warning" plain>警告按钮</el-button>
      <el-button type="danger" plain>危险按钮</el-button>
      <el-button type="info" plain>信息按钮</el-button>

      <br />

      <el-button>普通按钮</el-button>
      <el-button type="primary" round>主要按钮</el-button>
      <el-button type="success" round>成功按钮</el-button>
      <el-button type="warning" round>警告按钮</el-button>
      <el-button type="danger" round>危险按钮</el-button>
      <el-button type="info" round>信息按钮</el-button>
      <br />

      <el-button type="text">文本按钮</el-button>
      <el-button type="info" plain>文本按钮</el-button>
      <el-button type="info" plain round>文本按钮</el-button>
      <el-button type="info" plain round icon="el-icon-search"
        >文本按钮</el-button
      >
      <el-button
        type="info"
        plain
        round
        icon="el-icon-search"
        circle
      ></el-button>
      <el-button
        type="info"
        plain
        round
        icon="el-icon-search"
        circle
        size="small"
      ></el-button>
      <el-button
        type="info"
        style="background: pink"
        plain
        round
        icon="el-icon-search"
        circle
        size="mini"
      ></el-button>
    </el-card>



      <el-button type="primary" :icon="Edit"></el-button>
  <el-button type="primary" :icon="Share"></el-button>
  <el-button type="primary" :icon="Delete"></el-button>
  <el-button type="primary" :icon="Search">Search</el-button>
  <el-button type="primary">
    Upload<el-icon class="el-icon--right"><Upload /></el-icon>
  </el-button>

<el-icon color="#409EFC" class="no-inherit">
  <edit />
</el-icon>

  </div>
</template>


<script>
export default {};
</script>


//  import { Edit, Share, Delete, Search, Upload } from '@element-plus/icons-vue'


<script setup lang="ts">
import { Edit, Share, Delete, Search, Upload } from '@element-plus/icons-vue'



</script>



