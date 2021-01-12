<template>
  <div class="itemboard">
      <h2>Items</h2>
        <ul class="itemHolder">
            <li v-for="item in itemboards">
                <button class="button"><h3>{{item.title}}</h3></button>
            </li>
        </ul>
  </div>
</template>

<script>
export default {
    props: ["items", "leftSelector"],
    
    data() {
        return {
       
        }
    },
    computed: {
        itemboards: function(){
            return this.items.filter((item) => {
                return item.leftnavType.match(this.leftSelector);
            });
        }
    }
}
</script>

<style scoped>

    .itemboard {
        padding: 1em;
        background-color: #121212;
        flex-grow: 6;
        opacity: 85%;
    }
    h2{
        color: gray;
        font-size: 1.5em;
    }
    .itemHolder{
        margin: 0.5em;
        display: flex;
        flex-direction: column;
        justify-content:flex-start;
    }
    .itemHolder > li{
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
