
<template>
    <div>
      <div class="panel panel-warning">
        <div class="panel-heading">
          书名: <span v-show="!flag">{{book.bookName}}</span>
          <input type="text" v-model="book.bookName" v-show="flag">
        </div>
        <div class="panel-heading">
          <img :src="book.bookCover" >
        </div>
        <div class="panel-footer">
          价格: <span v-show="!flag" >{{book.bookPrice | currency('￥')}}</span>
          <input type="text" v-model="book.bookPrice" v-show="flag">
          <button type="button" class="btn btn-danger" @click="remove" v-show="!flag">删除</button>
          <button type="button" class="btn btn-warning" @click="change" v-show="!flag">修改</button>
          <button type="button" class="btn btn-primary" @click="update" v-show="flag">确认修改</button>
        </div>
      </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                book:{
                  bookName:'',
                  bookCover:'',
                  bookPrice:''
                },
                id:'',
                flag:false
            }
        },
        filters:{
            currency(input,param1){
                return param1+input;
            }
        },
        created(){
          this.id = this.$route.params.id;
          this.$http.get('/book?id='+this.id).then(res=>{
              this.book = res.body;
          })
        },
        components: {},
        methods: {
            change(){
              this.flag = !this.flag;
            },
            remove(){
                this.$http.delete('/book?id='+this.id).then(()=>{
                    this.$router.push('/list');
                });
            },
            update(){
                this.$http.put('/book?id='+this.id,this.book).then(()=>{
                       this.flag= false;
                })
            }
        }
    }
</script>
<style scoped>

</style>
