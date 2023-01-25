<template>
    <headera101/>
    <navbarButtons/>
      <div class="box">
        <div class="box2">
          <h1 class="yazi">ÜYE GİRİŞİ</h1>
          <a>A101 hesabınızla giriş yapın.</a>
          <p><input type="text" placeholder="Email" v-model="email"></p>
          <p><input type="password" placeholder="password" v-model="password"></p>
          <a>Dogrulama surecleri kapsamindaki kisisel veri isleme faaliyetine iliskin aydinlatma metni icin tıklayınız</a>
          <p class="pbutton"><button class="kayitOl" @click="register">GİRİŞ YAP</button></p>
          <a>Hesabınız yoksa üye olun</a>
        </div>
      </div>
  </template>
  
  <style>
  .box{
    margin-top: 1cm;
    border-width:2px;
    border-style:solid;
    border-color:lightgrey;
    padding-bottom: 1cm;
    width: 500px;
    margin-left: 12.7cm;
  }
  .box2{
    margin-top: 1cm;
    margin-left: 1.9cm;
    border-width:2px;
    width: 350px;
  }
  .kayitOl{
    background-color:#00b3c8;
      color:white;
      border:none;
      border-radius: 0.2cm;
      width: 120px;
      height: 30px;
      font-weight: bold;
      font-size: medium;
      margin-left:0.5cm;
  }
  .yazi{
    font-weight: lighter;
    font-size:28px;
    font-family: 'Arial';
    margin-left:0.3cm;
  }
  .pbutton{
    margin-left: 2.1cm;
  
  }
  input{
    width: 350px;
  }
  </style>
  
  <script lang="ts" setup>
  /* eslint-disable no-unused-vars */
  import { ref } from 'vue';
  import {getAuth,signInWithEmailAndPassword} from "firebase/auth";
  import { useRouter } from 'vue-router';
  import headera101 from "../components/header-r.vue"
  import navbarButtons from "../components/navbarButtons-s.vue"
  const email=ref("");
  const password=ref("");
  const router=useRouter();
  const  register = () => { 
    signInWithEmailAndPassword(getAuth(),email.value,password.value)
    .then((data)=>{
      alert("GirisYapildi")
      router.push("/2")
    })
    .catch((error)=>{
      console.log(error.code)
      alert(error.message)
    })
  };
  </script>