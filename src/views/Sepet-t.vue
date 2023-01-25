<template>
    <div v-for="todo in todos" :key="todo" >
        <img src="{{ todo.resim }}">
        <p>{{ todo.adi }}</p>
        <p>{{ todo.fiyati }}</p>
    </div>
</template>

<script  setup>
/* eslint-disable */
import { collection, getDocs } from "firebase/firestore";
import db from "../main"
import {ref,onMounted} from 'vue'
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
</style>