<template>
    <h1>Hesap oluşturun</h1>
  <p><input type="text" placeholder="Email" v-model="email"></p>
  <p><input type="password" placeholder="password" v-model="password"></p>
  <p><button @click="register">KayitOl</button></p>
</template>

<script lang="ts" setup>
/* eslint-disable no-unused-vars */
import { ref } from 'vue';
import {getAuth,createUserWithEmailAndPassword} from "firebase/auth";
const email=ref("");
const password=ref("");
const  register = () => { 
  createUserWithEmailAndPassword(getAuth(),email.value,password.value)
  .then((data)=>{
    alert("KayitBasarili")
  })
  .catch((error)=>{
    console.log(error.code)
    alert(error.message)
  })
};
</script>
