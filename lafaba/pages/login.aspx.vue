<template>
<div class="main">
    <SignIn v-if="isLogin === true" />
</div>
</template>

<style scoped>
.main{
    background-image: url(https://www.lafaba.com/skins/default/images/login-container-bg.jpg);
}
</style>

<script>
export default {
  data: function () {
    return {
      isLogin: true,
    };
  },
}
</script>