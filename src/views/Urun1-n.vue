<template>
    <headera101/>
    <navbarButtons/>
    <div class="red">      
        <img class="imgUrun" src="https://ayb.akinoncdn.com/products/2022/11/16/2251766/140b9498-1367-4187-9a43-13c53f27ebd3.jpg">
    </div>
    <div class="blue">
        <h2 class="pYazi">Xiaomi Poco M5 128 GB 6 GB RAM Cep Telefonu Siyah</h2>
        <button class="redButton">₺6.999,00</button>
        <h2 class="pYaziF">Xiaomi Poco M5 128 GB 6 GB RAM Cep Telefonu Siyah</h2>
        <img src="https://ayb.akinoncdn.com/static_omnishop/ayb813/assets/img/img%40yerliuretim.png">
        <h2 class="pYaziF">Xiaomi Poco M5 128 GB 6 GB RAM Cep Telefonu Siyah</h2>

    </div>
    <footerr/>
</template>

<script>
import headera101 from "../components/header2-r.vue"
import navbarButtons from "../components/navbarButtons-s.vue"
import footerr from "../components/footer-r.vue"
export default {
    components:{
        headera101,
        navbarButtons,
        footerr,
    }
}
</script>

<style>
.redButton{
    background-color: #EB211D;
    color:#FDDD00;
    border:none;
    border-bottom-left-radius: 0.3cm;
    width: 100px;
    height: 30px;
    font-weight: bold;
    font-size: medium;
}
.pYazi{
    width: 8cm;
    
}
.imgUrun{
    height: 432px;
    width: 432px;

}
.red{
    margin-left: 9cm;
    display: inline-block;
    
}
.blue{
    
    display: inline-block;
}
.pYaziF{
    width: 8cm;
    color:white
}
</style>
