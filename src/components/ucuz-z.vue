<template>
<div class="sepeteEkleKartları">
            <div class="ucuz">
                <div>
                    <h1>Büyük olduğu için UCUZ</h1>
                    <span>Tümünü Gör ></span>
                </div>
                <div class="cards">
                    <div class="resim">
                        <img  src="https://ayb.akinoncdn.com/cms/2021/12/27/f017c19a-4e7d-48c3-ac6a-d9723ce780e9.jpe">
                    </div>
                    <div class="card">
                        <img src="https://pictures.personaclick.com/resize-images/220/c8b6a5946225d5fbdc1570119c3aab/2400803345213161865.jpg">
                        <a>Pınar Süt Yağlı Küçük Boy 200ml</a>
                        <a>10.90TL</a>
                        <button @click="sutSepet" ><i class="fa-solid fa-cart-shopping"></i> Sepete Ekle</button>
                    </div>
                    <div class="card">
                        <img src="https://pictures.personaclick.com/resize-images/220/c8b6a5946225d5fbdc1570119c3aab/221128031.jpg">
                        <a>Gofret Bitter Çikolatalı 33g</a>
                        <a>14.90TL</a>
                        <button @click="gofret"><i class="fa-solid fa-cart-shopping"></i> Sepete Ekle</button>
                    </div>
                    <div class="card">
                        <img src="https://pictures.personaclick.com/resize-images/220/c8b6a5946225d5fbdc1570119c3aab/2400803345750032703.jpg">
                        <a>Çiçeğim Kireç Çözücü 1L</a>
                        <a>18.90TL</a>
                        <button @click="deterjan"><i class="fa-solid fa-cart-shopping"></i> Sepete Ekle</button>
                    </div>
                    <div class="card">
                        <img src="https://pictures.personaclick.com/resize-images/220/c8b6a5946225d5fbdc1570119c3aab/223345662.jpg">
                        <a>Vera Ayçiçek Yağı Pet 5 L</a>
                        <a>149.50TL</a>
                        <button @click="yag"><i class="fa-solid fa-cart-shopping"></i> Sepete Ekle</button>
                    </div>
                </div>
            </div>
        </div> 
</template>

<style>
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
 .resim{
    display: inline-block;
    height: 1cm;
 }
</style>

<script>
import db from "../main"
import { collection,addDoc } from "firebase/firestore";
const colRef=collection(db,'Sepetim')
export default{
    methods:{
        async createSut(){          
            const dataObj={
            resim:"https://pictures.personaclick.com/resize-images/220/c8b6a5946225d5fbdc1570119c3aab/2400803345213161865.jpg",
            adi:"Pınar Süt Yağlı Küçük Boy 200ml",
            fiyati:"10.90TL",
          }
          const docRef=await addDoc(colRef,dataObj)
        },
        async createGofret(){          
            const dataObj={
            resim:"https://pictures.personaclick.com/resize-images/220/c8b6a5946225d5fbdc1570119c3aab/221128031.jpg",
            adi:"Gofret Bitter Çikolatalı 33g",
            fiyati:"14.90TL",
          }
          const docRef=await addDoc(colRef,dataObj)
        },
        async createDeterjan(){          
            const dataObj={
            resim:"https://pictures.personaclick.com/resize-images/220/c8b6a5946225d5fbdc1570119c3aab/2400803345750032703.jpg",
            adi:"Çiçeğim Kireç Çözücü 1L",
            fiyati:"18.90TL",
          }
          const docRef=await addDoc(colRef,dataObj)
        },
        async createYag(){          
            const dataObj={
            resim:"https://pictures.personaclick.com/resize-images/220/c8b6a5946225d5fbdc1570119c3aab/223345662.jpg",
            adi:"Vera Ayçiçek Yağı Pet 5 L",
            fiyati:"149.50TL",
          }
          const docRef=await addDoc(colRef,dataObj)
        },
        sutSepet(){
        this.createSut()
        },
        gofret(){
        this.createGofret()
        },
        deterjan(){
        this.createDeterjan()
        },
        yag(){
        this.createYag()
        },        
    },
    
}
</script>