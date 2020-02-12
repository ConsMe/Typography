<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import toastr from 'toastr';

toastr.options.closeButton = true;
export default {};
</script>

<style lang="scss">
@import "~bootswatch/dist/slate/bootstrap.min.css";
@import '~toastr/toastr.scss';
#toast-container > div {
  opacity: 1;
}
</style>
