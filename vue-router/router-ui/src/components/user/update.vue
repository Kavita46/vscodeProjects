<!-- 我的页面 -->
<template>
<div display = 'flex'>
  <div style="flex: 2">

      <el-form ref="form" :model="user" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="user.username"></el-input>
        </el-form-item>

        <el-form-item label="用户密码">
          <el-input v-model="user.password"></el-input>
        </el-form-item>

      </el-form>
  </div>

<div style="flex: 1">
         <el-upload
        class="avatar-uploader"
        action="http://localhost:7777/users/uploadTemp"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
      >
        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
</div>

  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      user: {},
    };
  },
  computed: {},
  watch: {},
  methods: {},
};
</script>

<style  scoped>
</style>
