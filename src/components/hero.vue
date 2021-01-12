<template>
  <div class="hero">
    <h1>Welcome, {{ greet }}</h1>
    <h2>Josh Rose's Web Portfolio</h2>
    <ul class="topnavHolder">
        <li v-for="topnav in topnavs" v-on:click="setTopnav(topnav.name)">
            <h3>{{topnav.name}}</h3>
        </li>
    </ul> 
  </div>
</template>

<script>
    
export default {
    props: ["topnavs", "greet", "catSelector"],
    
    data() {
        return {
            
        }
    
    },
    methods: {
        setTopnav(nav){
            this.$emit('topSelect', nav);
            console.log("topnav= " + nav);
        }
    }
}
    
</script>

<style scoped>

    h1 {
        margin: 0.5em;
        margin-left: 1em;
        font-size: 3em;
    }
    h2 {
        font-size: 2em;
        margin: 0em;
        margin-left: 1em;
    }
    .hero{
        height: 30%;
        display: flex;
        flex-direction: column;
        background-position: center;
        background-size:auto;
    }
    .topnavHolder{
        margin: 0.5em;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .topnavHolder > li{
        margin: 0.5em;
        font-size: 1.5em;
        transition-duration: 0.2s;
        
    }
    .topnavHolder > li:hover{
        color: azure;
        text-shadow: 2px 2px 4px #000000;
        
    }


</style>
