
<template>
<!--
 <p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>
  </p>
-->
    <form v-on:submit.prevent="submit" v-on:change="updateForm">
       <Input v-bind:item="data.name" />         
       <Input v-bind:item="data.forname" /> 
    </form>
</template>

<script>
import Input from "./Input";
import {UserName, UserForName} from "../../static/constants"
export default {
    name:"Form",
    components: {
        Input
    },
    data(){
        return{
            data:{
                name: {...UserName, "valid": null},
                forname:{...UserForName, "valid": null}
            }
        }
    },
    methods: {
        submit(){
            // eslint-disable-next-line
            console.log("formContent: ", formContent);
        },
        updateForm() {
            console.log(this.data);
        }
    },
    created: function () {
        
    }
}
</script>

