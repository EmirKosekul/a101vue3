<template>
    <headera101/>
    <navbarButtons/>
    <div class="sepett" v-for="todo in todos" :key="todo" >
        <img src="{{ todo.resim }}">
        <p>{{ todo.adi }}</p>
        <p>{{ todo.fiyati }}</p>
        <button @click="deleteTodo" class="sepet">Sil</button>
    </div>
    <footerr/>
</template>

<script  setup>
/* eslint-disable */
import { collection, getDocs , deleteDoc,doc} from "firebase/firestore";
import db from "../main"
import {ref,onMounted} from 'vue'
import headera101 from "../components/header2-r.vue"
import navbarButtons from "../components/navbarButtons-s.vue"
import footerr from "../components/footer-r.vue"
const colRef=collection(db,'Sepetim')
const todos=ref([])

onMounted(async()=>{
    const querySnapshot = await getDocs(collection(db, "Sepetim"))
    let fbTodos=[]
    querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data())
    const todo = {
        adi:doc.data().adi,
        fiyati:doc.data().fiyati,
        resim:doc.data().resim,
        id:doc.data().id,
       }
       
       fbTodos.push(todo)
    })
    todos.value=fbTodos
})
</script>

<style>
image{
    display: inline-block;
}
p{
    margin-left: 4cm;
    display: inline-block;
}
.sepett{
    margin-left: 10cm;
    width: 20cm;
    background-color: white;
}
.sepett p{
    color:black
}
</style>