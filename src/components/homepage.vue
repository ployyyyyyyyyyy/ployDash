<template>
  <div class="Main">
    <div class="OEE">
      <h1>OEE</h1>
    </div>
    <router-link to="/FF" class="F_frame" >Fabrication of F Frame</router-link>
    <router-link to="/f_frame" class="S_Frame">Fabrication of S Frame</router-link>
    <router-link to="/f_frame" class="Painted">Powder Painted</router-link>

    <RouterView></RouterView>
      
  </div>
  <div class="bottom"></div>
</template>

<script>
export default {
  name: 'home',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Main {
    width: 1900px;
    height: 824px;
    margin: 0 auto;
  background-color: #D9D9D9;
}
.OEE {
    padding-top: 2%;
  margin: auto;
  width: 794px;
  height: 151px;
  background-color: #ff9820;
  float: left;
  margin-top: 118px;
  transform:translatex(590px);
  text-align: center;
  font-size: 30px;
  font-family: 'Sarabun', sans-serif;
  font-weight: bolder;
  font-family: Arial, Helvetica, sans-serif;
  color: black;
  border-radius: 30px;
  box-shadow: 10px 10px gray;
  
}



.F_frame {
  width: 380px;
  height: 400px;
  float: left;
  background-color: black;
  color: white;
  text-align: center;
  position: relative;
  margin-top: 350px;
  transform:translatex(-650px);
  font-size: 50px;
  padding-top: 7%;
  font-family: 'Sarabun', sans-serif;
  border: 20px;
  border-radius: 20px;
  text-decoration: none;
  transition: .3s ease-in-out;
}

.S_Frame {
  width: 380px;
  height: 400px;
  float: left;
  background-color: black;
  color: white;
  text-align: center;
  position: relative;
  margin-top: 350px;
  transform:translatex(-385px);
  font-size: 50px;
  padding-top: 7%;
  font-family: 'Sarabun', sans-serif;
  border: 20px;
  border-radius: 20px;
  text-decoration: none;
}
.Painted {
  width: 380px;
  height: 400px;
  float: left;
  background-color: black;
  color: white;
  text-align: center;
  position: relative;
  margin-top: -400px;
  transform:translatex(1400px);
  font-size: 50px;
  padding-top: 9%;
  font-family: 'Sarabun', sans-serif;
  border: 20px;
  border-radius: 20px;
  text-decoration: none;
}
.bottom {
    width: 1900px;
    height: 110px;
    margin: 0 auto;
  margin-bottom: 0%;
  background-color: #302E2E;
}
</style>