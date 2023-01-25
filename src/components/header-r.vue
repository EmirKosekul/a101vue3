<template>
<div class="navbar">
            <div class="logo">
                <img src="https://ayb.akinoncdn.com/static_omnishop/ayb811/assets/img/logo%40a101-2x.png">
            </div>
            <div class="mainDiv">
                <div class="div1">
                    <ul>
                        <li class="reklam250tl"><a href="#">₺250 ve üzeri siparişinize ücretsiz kargo!</a></li>
                        <li><a href="#" class="Kampanyalar">Kampanyalar ></a></li>
                        <li><a class="div1texts" href="#" >| Hakkımızda</a></li>
                        <li><a class="div1texts" href="#" >| Kariyer</a></li>
                        <li><a class="div1texts" href="#" >| Kiralık Yeriniz mi Var?</a></li>
                        <li><a class="div1texts" href="#" >| Bize Ulaşın</a></li>
                    </ul>
                </div>         
                <div class="div2">
                    <input class="searchBar" type="text" placeholder="   VOLTA VB7 ELEKTRİKLİ BİSİKLET 17.999TL">
                    <button class="online_alisveris"><i class="fa-solid fa-bag-shopping"></i> Online Alışveriş</button>
                    <button class="afisler"><i class="fa-regular fa-newspaper"></i> Afişler</button>
                    <router-link to="/register"><button class="uyeOl">Uye Ol</button></router-link>
                    <router-link to="/sign-in"><button class="girisYap">Giriş Yap</button></router-link>
                    <button class="sepet" >Sepetim</button>
                    
                    
                </div>
            </div>
            <div class="container">

            </div>                    
        </div>
</template>

<style>
.logo img{
    height: 2.35cm;
}
.logo{
    display: inline-block;
}

.navbar{
    margin-top: 0.25cm;
    width: 30.5cm;
    margin-left: 5cm;  
}

.navbar ul
{
    margin-top:-1.4cm;
    float: right;
    margin-right: 20px;    
}

.navbar ul li{
    list-style: none;
    display: inline-block;
    margin:0.8px;
}
.div1{
    margin-top: 1cm;
    border-bottom-color:#8088a4;
}
.div2{
    margin-top: -2cm;
    margin-left: 3cm;
 }

.navbar ul li a{
    text-decoration: none;  
    font-family: Arial, Helvetica, sans-serif;
    font-size: small;
}
.div1texts{
   color:#8088a4;
}
.navbar ul .reklam250tl a
{
   color:#666d86; 
    margin-right: 10cm;
}

.searchBar
{
    margin-right: -1cm;
    height: 0.85cm;
    width: 11cm;
    background-color:#f5f5f5;
    border-radius: 5px;
    border-color:#8a91ab;
}
.online_alisveris{
   border:none;
   background-color: white;
   height: 1.3cm;
   width: 130px;
   height: 40px;
   align-items: center;
   gap: 8px;
   padding: 9px 0;
   font-size: 14px;
   text-align: center;
   letter-spacing: .2px;
   text-decoration: none;
   color: #59617c;
   margin-left: 80px;
}
.afisler{
   border:none;
   background-color: white;
   height: 1.3cm;
   width: 70px;
   height: 40px;
   align-items: center;
   gap: 8px;
   padding: 9px 0;
   font-size: 14px;
   text-align: center;
   letter-spacing: .2px;
   text-decoration: none;
   color: #59617c;
   margin-left: -0.3cm;
}
.uyeOl{
   border-color: #8088a4;
   border-radius: 1mm;
   background-color: white;
   height: 1.3cm;
   width: 120px;
   height: 50px;
   align-items: center;
   gap: 8px;
   padding: 9px 0;
   font-size: 14px;
   text-align: center;
   letter-spacing: .2px;
   text-decoration: none;
   color: #59617c;
   margin-left: 5px;
   padding-left: 5px;
   padding-right: 5px;
}
.girisYap{
   border-color: #8088a4;
   border-radius: 1mm;
   background-color: white;
   height: 1.3cm;
   width: 120px;
   height: 50px;
   align-items: center;
   gap: 8px;
   padding: 9px 0;
   font-size: 14px;
   text-align: center;
   letter-spacing: .2px;
   text-decoration: none;
   color: #59617c;
   padding-left: 5px;
   padding-right: 5px;
}
.girisYap a{
   font-size: smaller;
   font-weight: bold;
}
 .sepet
 {
    height: 1.3cm;
    background-color: #00abc7;
    color: white;
    border:none;
    padding: 0.3cm;
    border-radius: 1mm;
    width: 120px;
    height: 40px;
    margin-left: 5px;
 }

 
 .Kampanyalar{
    background-color: #8088a4;
    color:white;
    padding: 5px;
    border-radius: 1mm;
    font-size: small;
 }

 .container{
    background-color: white;
    height: 0.6cm;
 }
 
 

 .sepeteEkleKartları h1{
    display: inline-block;
    color:#00abc7;
    font-weight: bolder;
    font-family:Arial;
 }
 .sepeteEkleKartları span{
    color:#fddd00;
    font-family:Arial;
 }
 .sepeteEkleKartları .cards .card{
    display: inline-block;
    background-color: #f5f5f5;
    margin:0.125cm;
    width: 220px;
    height: 400px;
 }
 .sepeteEkleKartları .cards .card img{
    height: 5cm;
    display: block;
    margin-left: 0.4cm;
    margin-top:0.3cm
 }
 .sepeteEkleKartları .cards .card a{
    display:block;
    text-align: center;
    margin:1cm; 
 }
 .sepeteEkleKartları .cards .card button{
    background-color: #00abc7;
    color:white;
    border:none;
    padding: 5px;
    width: 100px;
    margin-left:1.5cm;
 }
 .sepeteEkleKartları{
    margin-left: 5cm;
 }

</style>

<script>

</script>