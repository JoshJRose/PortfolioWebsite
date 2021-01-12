<template>
  <div class="leftnav">
      <h2>Category</h2>
      <ul class="leftnavHolder">
        <li v-for="nav in leftnavs" v-on:click="setLeftnav(nav.name)">
            <button class="button">
            <h3>{{nav.name}}</h3></button>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    props: ["categories", "topSelector", "leftSelector"],
    
    data() {
        return {
            
        }
    },
    methods: {
        setLeftnav(nav){
            this.$emit('leftSelect', nav)
            console.log("leftnav= " + nav);
        },
        changeActive(nav){
            if (nav.match(this.leftSelector)){
                this.active =true;
            }
        }
    },
    computed: {
        
        leftnavs: function(){
            return this.categories.filter((category) => {return             category.topnavType.match(this.topSelector);
            });
        }
    }
}
</script>

<style scoped>
    
    .leftnav{
        padding: 1em;
        background-color: #121212;
        flex-grow: 1;
        border-style: solid;
        border-right-width: 2px;
        border-color: gray;
        opacity: 85%;
    }
    h2{
        color: gray;
        font-size: 1.5em;
    }
    .leftnavHolder{
        margin: 0.5em;
        display: flex;
        flex-direction: column;
        justify-content:flex-start;
    }
    .leftnavHolder > li{
        margin: 0.5em;
        color: gray;
        
    }
    .button {
        width: 100%;
        font-family: 'Montserrat', sans-serif;
        background-color: #212121;
        border: none;
        color: gray;
        padding: 20px 20px;
        text-align: left;
        display: inline-block;
        font-size: 1em;
        margin: 0px 2px;
        cursor: pointer;
        transition-duration: 0.3s;
    }
    .button:hover{
        color: #121212;
        background-color: azure;
    }
    .button:focus{
        color: #212121;
        background-color: gray;
    }

</style>
