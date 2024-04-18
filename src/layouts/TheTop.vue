<template>
    <header>
        <div class="inner">
            <a href="/" class="logo">
            </a>
            <div class="sub-menu">
                <ul class="menu">
                    <li>
                        <a href="/signin">회원가입</a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">로그인</a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">Admin</a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    setup () {
        const state = reactive({
            count: 0,
        })
    
        return {
            ...toRefs(state),
        }
    }
}
</script>

<style scoped>
.inner {
    /* background-color:blue; */
    /* width: 1100px; */
    height: 50px;
    margin: 0 auto;
    position: relative;
}

/* header {
    width: 100%;
    background-color: #f6f5f0;
    border-bottom: 1px solid #c8c8c8; */
    /* position: relative; */
    /* position: fixed;
    top: 0;
    z-index: 9;
} */

/* header>.inner {
    height: 120px;
} */


header .logo {
    height: 60px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    z-index : 10;
}

header .sub-menu {
    /* background-color: aquamarine; */
    display: flex;
    position: absolute;
    top: 10px;
    right: 0;
}

header .sub-menu ul.menu {
    /* background-color: black; */
    font-family: Arial, sans-serif;
    display: flex;
}

header .sub-menu ul.menu li {
    position: relative;
    padding:10px;
} 


/* header .sub-menu ul.menu li::before {
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    background-color: #e5e5e5;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
} */

/* header .sub-menu ul.menu li:first-child::before {
    display: none;
} */
/*
header .sub-menu ul.menu li a {
    font-size: 12px;
    padding: 11px 16px;
    display: block;
    color: #656565;

}

header .sub-menu ul.menu li a:hover {
    color: #000;
} */ 

</style>