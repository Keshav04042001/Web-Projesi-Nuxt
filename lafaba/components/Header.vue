<template>
     <!--Header div-->
     <div id="w100">
            <!--Container div-->
            <div class="container p0">
                <!--Logo div-->
                <div class="col-xs-6 header-center p0">
                    <a id="aa" class="navbar-brand a1" href="/anasayfa">
                        <img  id="i1"  height="30" width="160" src="../assets/logo.png" alt="LOGO">
                    </a>



                    
                     <!--Search Box-->
                    <div id="d5">
                        <input width="580" height="30" type="search" name="q" id="input1" placeholder="Aramak istediğiniz ürünü yazınız" aria-placeholder="left" class="search-input form-control">
                                 <i class="fas fa-search" id="searchicon"></i>
                                 <el-input placeholder="Search term"></el-input>
                        </input>
                    </div>
                    <div id="icondiv">
                        <div>
                        <i class="fa fa-heart" id="hearticon"></i>
                    </div>
                    <div href="/girisYap">
                        <a href="/girisYap">
                            <i class="fa fa-user" id="usericon"></i>
                        </a>
                    </div>
                    <div href="/minSepPage">
                     <a href="/minSepPage">
                        <i class="fa fa-shopping-cart" id="carticon"></i></a>
                   
                    </div>

                    </div>
                    
              </div>
            </div>
        </div>
    </div>
</template>

<script>
export default { }
</script>

<style scoped>
#aa{
    position: relative;
    top: 45px;
    left: 10px;
}
#icondiv{
    width: 300;
    height:10;
}
#w100{
    
    background-color: black;
}
#i1{
       height: 160;
       width: 30;
       display: block;
       border: 10;
       top: 50px;
       margin-left:70px;
}
#input1{
 border-top-right-radius: 25px;
 border-top-left-radius: 25px;
 border-bottom-left-radius: 25px;
 border-bottom-right-radius: 25px;
 width:600px;
 height:30px;
 text-align:left;
 font-size: 14px;
 text-emphasis: size 10px;
 position: relative;
 top:15px;
 left:350px;
}
#searchicon{
    
 position: relative;
 top:15px;
 left:320px;
 color:black;
}
#hearticon{
     position: relative;
 top:-10px;
 left:1110px;
 color:white;
 font-size: 20px;
}
#usericon{
     position: relative;
 top:-32px;
 left:1150px;
 color:white;
 font-size: 20px;
}
#carticon{
    position: relative;
 top:-54px;
 left:1190px;
 color:white;
 font-size: 20px;
}
#d5{
 width: 580;
 height: 30;
}

</style>
