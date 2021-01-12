<template>
    <div>
        <div class="background" :style="{ backgroundImage: 'url(' + bgImg + ')' }">
        </div>
        <app-hero v-on:hover="herohover = true" v-on:topSelect="topSelection($event)" v-bind:topSelector="topSelector" class="hero" v-bind:topnavs="topnavs" v-bind:greet="greet"></app-hero>
        <div class="board">
            <app-leftnav v-bind:topSelector="topSelector" v-bind:leftSelector="leftSelector"  v-bind:categories="categories" v-on:leftSelect="leftSelection($event)"></app-leftnav>
            <app-itemboard v-bind:leftSelector="leftSelector"  v-bind:items="items"></app-itemboard>
        </div>
    </div>
</template>

<script>
    import Hero from './components/hero.vue';
    import LeftNav from './components/leftnav.vue';
    import ItemBoard from './components/itemboard.vue';
    import Item from './components/item.vue';
    
export default {
    components: {
            'app-hero': Hero,
            'app-leftnav': LeftNav,
            'app-itemboard': ItemBoard,
            'app-item': Item
    },
    data() {
            return {
                
                herohover: false,
                greet: 'Good Day',
                bgImg: '/src/assets/hero-morning1.png',
                topSelector: 'Home',
                leftSelector: 'About Me',
                
                topnavs: [
                    {name: "Home"},
                    {name: "Resume"},
                    {name: "Artwork"}
                ],
                
                categories: [
                    {name: "About Me", topnavType: "Home"},
                    
                    {name: "Resume", topnavType: "Resume"},
                    {name: "Cover Letters", topnavType: "Resume"},
                    
                    {name: "Rose-Corp Series", topnavType: "Artwork"}
                ],
                
                items: [
                    {title: "Rain Hat", leftnavType: "Rose-Corp Series"},
                    {title: "Resume PDF", leftnavType: "Resume"}
                ]
            }
    },
    
    created() {
        this.getNow;
    },
    
    methods:{
        // set new selections
        topSelection(nav){
            console.log("topSelection= " + nav);
            this.topSelector = nav;
        },      
        leftSelection(nav){
            console.log("leftSelection= " + nav);
            this.leftSelector = nav;    
        }
    },
    
    computed: {
            
        getNow() {
            const today = new Date();
            const hour = today.getHours(); 
            console.log(hour);
            if(hour < 4 || hour >= 21){
                this.bgImg = "/src/assets/hero-night1.png";
                this.greet = "Good Night";}
            else if(hour >= 4  && hour < 12){
                this.bgImg = "/src/assets/hero-morning1.png";
                this.greet = "Good Morning";}
            else if(hour >= 12  && hour < 18){
                this.bgImg = "/src/assets/hero-afternoon1.png";
                this.greet = "Good Afternoon";}
            else{
                this.bgImg = "/src/assets/hero-evening1.png";
                this.greet = "Good Evening";}
            console.log("hi");
        }, 
    }
}
</script>

<style scoped>
    *{
        height: 100%;
        margin: 0;
        font-family: 'Montserrat', sans-serif;
    } 
    .board{
        height: 70%;
        display: flex;
        flex-direction: row;
        border-style: solid;
        border-top-width: 2px;
        border-color: azure;
    }
    .background{
        z-index: -2;
        width: 100%;
        height: 100%;
        transition-duration: 0.4s;
        position:fixed;
    }
    .background:heroHover{
        filter: blur(4px);
    }
    
</style>
