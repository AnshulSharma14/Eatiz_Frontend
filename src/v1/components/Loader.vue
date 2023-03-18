<template>
<div class="row">
    <div class="col-4"></div>
    <div class="col-4">
        <ul class="loader">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        </ul>
    </div>
    <div class="col-4"></div>
</div>
</template>
<style>


 .loader{
    width: 108px;
    height: 55px;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    margin-left: 40%;
    margin-top: 50px;

}
.loader li{
  width: 30px;
  height: 30px;
  margin: 2px;
  background-color: transparent;
  animation: loading 0.8s infinite;

}

.loader li:nth-child(5){
  opacity: 0;
}
.loader li:nth-child(1){
  animation-delay: 0.1s;
}
.loader li:nth-child(2){
  animation-delay: 0.2s;
}
.loader li:nth-child(3){
  animation-delay: 0.3s;
}
.loader li:nth-child(6){
  animation-delay: 0.4s;
}
.loader li:nth-child(9){
  animation-delay: 0.5s;
}
.loader li:nth-child(8){
  animation-delay: 0.6s;
}
.loader li:nth-child(7){
  animation-delay: 0.7s;
}
.loader li:nth-child(4){
  animation-delay: 0.8s;
}
@keyframes loading{
  1%{
    background-color: #33cc66;
  }
}
</style>
<script>
export default {
      name: 'Loader',
}
</script>