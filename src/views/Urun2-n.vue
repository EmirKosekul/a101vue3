<template>
    <headera101/>
    <navbarButtons/>
    <div class="red">      
        <img class="imgUrun" src="https://ayb.akinoncdn.com/products/2022/11/30/2278594/14ddebbf-0e43-449d-b0c0-d2e86deae993.jpg">
    </div>
    <div class="blue">
        <h2 class="pYazi">Revolt RS7 125 Cc Benzinli Motosiklet Gümüş Gri</h2>
        <button class="redButton">₺16.799,00</button>
        <h2 class="pYaziF">Revolt RS7 125 Cc Benzinli Motosiklet Gümüş Gri</h2>
        <img src="https://ayb.akinoncdn.com/static_omnishop/ayb813/assets/img/img%40yerliuretim.png">
        <h2 class="pYaziF">Revolt RS7 125 Cc Benzinli Motosiklet Gümüş Gri</h2>

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