
<template>
    <div>
      <form>
          <div class="form-group">
            <label for="bookname" class="control-label">书名</label>
            <input type="text" id="bookname" class="form-control" placeholder="请输入书名" autocomplete="off">
          </div>
          <div class="form-group">
            <label for="bookPrice" class="control-label">价格</label>
            <input type="text" id="bookPrice" class="form-control" placeholder="请输入价格" autocomplete="off">
          </div>
          <div class="form-group">
            <label for="bookcover" class="control-label">封面</label>
            <input type="text" id="bookcover" class="form-control" placeholder="请添加封面" autocomplete="off" >
          </div>
          <div class="form-group">
            <button type="button" class="btn btn-primary">添加图书</button>
          </div>
      </form>
    </div>
</template>
<script>
    export default {
        data(){
            return {}
        },
        components: {},
        methods: {}
    }
</script>
<style scoped>

</style>
