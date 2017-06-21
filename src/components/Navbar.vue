<template>
    <div>
        <div class="navbar navbar-inverse">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand">BookStore</a>
                </div>
                <ul class="nav navbar-nav">
                    <li>
                        <router-link to="/list">图书列表</router-link>
                    </li>
                    <li>
                      <router-link to="/add">添加图书</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>

<style>

</style>
