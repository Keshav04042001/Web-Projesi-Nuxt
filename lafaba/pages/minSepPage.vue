<template>
<div>
    <MinikSepet />
    <ProductDetail />
</div>
</template>

<style scoped>
#i1{
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
line-height: 21px;
font-family: 'Nunito', sans-serif;
list-style: none;
font-size: 14px;
border-collapse: collapse;
border-spacing: 0;
text-align: center;
color: #333;
box-sizing: border-box;
border: 0;
vertical-align: middle;
width: 50px;
}
#d1{
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
color: #000;
font-size: 14px;
line-height: 21px;
font-family: 'Nunito', sans-serif;
box-sizing: border-box;
padding-left: 0;
list-style: none;
margin: 0;
float: right !important;
margin-right: -10px;
position: relative;
top: -100px;
left: -80px;

}
#d2{
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
color: #000;
font-size: 14px;
line-height: 21px;
font-family: 'Nunito', sans-serif;
list-style: none;
box-sizing: border-box;
float: left;
display: block;
position: static;
margin-top: 0;
}
#d3{
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
font-family: 'Nunito', sans-serif;
list-style: none;
box-sizing: border-box;
text-decoration: none;
outline: none !important;
transition: all .2s ease-in;
border-color: #337ab7;
font-size: 12px;
font-weight: 400;
text-transform: uppercase;
display: block;
border-radius: 4px;
padding: 0 10px;
height: 30px;
margin-bottom: 0;
line-height: 30px;
background: none;
color: #FFF;
}
#d4{
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
font-family: 'Nunito', sans-serif;
list-style: none;
font-size: 12px;
font-weight: 400;
text-transform: uppercase;
line-height: 30px;
color: #FFF;
box-sizing: border-box;
}
#d5{
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
list-style: none;
text-transform: uppercase;
color: #FFF;
box-sizing: border-box;
display: inline-block;
font: normal normal normal 14px/1 FontAwesome;
text-rendering: auto;
-webkit-font-smoothing: antialiased;
font-size: 20px;
position: relative;
top: 2px;
}
#d6{
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
font-family: 'Nunito', sans-serif;
list-style: none;
font-weight: 400;
text-transform: uppercase;
line-height: 30px;
color: #FFF;
box-sizing: border-box;
font-size: 14px;
}
#d7{
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
color: #000;
line-height: 21px;
font-family: 'Nunito', sans-serif;
box-sizing: border-box;
width: 33.33333333%;
position: absolute;
top: 100%;
z-index: 1000;
float: left;
margin: 2px 0 0;
list-style: none;
font-size: 14px;
text-align: left;
background-color: #ffffff;
border: 1px solid rgba(0, 0, 0, 0.15);
box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
background-clip: padding-box;
display: block;
left: auto;
right: 0;
border-radius: 0;
margin-top: 0;
min-width: 400px;
padding: 10px;
}
#d8{
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
color: #000;
line-height: 21px;
font-family: 'Nunito', sans-serif;
list-style: none;
font-size: 14px;
text-align: left;
box-sizing: border-box;
width: 100% !important;
max-height: 300px;
display: block;
padding: 10px 0;
overflow: hidden;
}
#d9{
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
color: #000;
line-height: 21px;
font-family: 'Nunito', sans-serif;
list-style: none;
font-size: 14px;
text-align: left;
box-sizing: border-box;
border-collapse: collapse;
border-spacing: 0;
background-color: transparent;
width: 100%;
height: auto;
}
#d10{
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
color: #000;
line-height: 21px;
font-family: 'Nunito', sans-serif;
list-style: none;
font-size: 14px;
text-align: left;
border-collapse: collapse;
border-spacing: 0;
box-sizing: border-box;
}
#d11{
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
line-height: 21px;
font-family: 'Nunito', sans-serif;
list-style: none;
font-size: 14px;
text-align: left;
border-collapse: collapse;
border-spacing: 0;
box-sizing: border-box;
border-bottom: solid 1px #ddd;
color: #333;
}
#d12{
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
line-height: 21px;
font-family: 'Nunito', sans-serif;
list-style: none;
font-size: 14px;
text-align: left;
border-collapse: collapse;
border-spacing: 0;
color: #333;
box-sizing: border-box;
}
#d13{
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
list-style: none;
text-align: left;
border-collapse: collapse;
border-spacing: 0;
box-sizing: border-box;
font-family: inherit;
color: inherit;
margin: 0;
line-height: 20px;
padding-bottom: 0;
font-size: 14px;
font-weight: 400;
}
#d14{
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
list-style: none;
text-align: left;
border-collapse: collapse;
border-spacing: 0;
font-family: inherit;
line-height: 20px;
font-size: 14px;
font-weight: 400;
box-sizing: border-box;
background-color: transparent;
text-decoration: none;
outline: none !important;
transition: all .2s ease-in;
color: #333;
}
#d15{
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
line-height: 21px;
font-family: 'Nunito', sans-serif;
list-style: none;
text-align: left;
border-collapse: collapse;
border-spacing: 0;
box-sizing: border-box;
font-size: 12px !important;
color: #333;
}
#d16{
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
line-height: 21px;
font-family: 'Nunito', sans-serif;
list-style: none;
text-align: left;
border-collapse: collapse;
border-spacing: 0;
box-sizing: border-box;
color: #666666;
font-weight: normal;
text-decoration: line-through;
font-size: 13px;
}
#d17{
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
line-height: 21px;
font-family: 'Nunito', sans-serif;
list-style: none;
text-align: left;
border-collapse: collapse;
border-spacing: 0;
box-sizing: border-box;
display: block;
font-size: 15px;
font-weight: 700;
color: #333;
}
#d18{
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
line-height: 21px;
font-family: 'Nunito', sans-serif;
list-style: none;
text-align: left;
border-collapse: collapse;
border-spacing: 0;
box-sizing: border-box;
font-size: 85%;
color: #3c763d;
}
#d20{
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
color: #000;
line-height: 21px;
font-family: 'Nunito', sans-serif;
list-style: none;
font-size: 14px;
text-align: left;
box-sizing: border-box;
position: absolute;
top: 0;
left: 0;
bottom: 0;
right: 0;
height: auto;
}
#d24{
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
color: #000;
line-height: 21px;
font-family: 'Nunito', sans-serif;
list-style: none;
font-size: 14px;
text-align: left;
box-sizing: border-box;
background: #fdfdfd !important;
padding: 10px 10px 10px;
}
#d25{
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
font-family: 'Nunito', sans-serif;
list-style: none;
text-align: left;
box-sizing: border-box;
float: right !important;
color: #000000;
font-size: 16px;
font-weight: bold;
line-height: normal;
margin-bottom: 6px;
}
#d26{
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
font-family: 'Nunito', sans-serif;
list-style: none;
text-align: left;
color: #000000;
font-weight: bold;
line-height: normal;
box-sizing: border-box;
font-size: 85%;
}
#d27{
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
font-family: 'Nunito', sans-serif;
list-style: none;
text-align: left;
color: #000000;
font-weight: bold;
line-height: normal;
box-sizing: border-box;
font-size: 14px;
}
#d28{
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
font-family: 'Nunito', sans-serif;
list-style: none;
box-sizing: border-box;
text-decoration: none;
outline: none !important;
display: inline-block;
margin-bottom: 0;
text-align: center;
vertical-align: middle;
touch-action: manipulation;
cursor: pointer;
white-space: nowrap;
user-select: none;
border: medium none;
transition: all 0.25s linear 0s;
color: #ffffff;
font-weight: 600;
text-shadow: 0px 1px rgba(0, 0, 0, 0.1);
-webkit-box-shadow: 0 -1px rgba(0, 0, 0, 0.1) inset;
border-radius: 3px;
font-size: 11px;
background: #d04040;
width: 100%;
height: 40px;
line-height: 40px;
padding: 0;
}
#d29{
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
list-style: none;
text-align: center;
cursor: pointer;
white-space: nowrap;
user-select: none;
color: #ffffff;
text-shadow: 0px 1px rgba(0, 0, 0, 0.1);
box-sizing: border-box;
display: inline-block;
font: normal normal normal 14px/1 FontAwesome;
text-rendering: auto;
-webkit-font-smoothing: antialiased;
font-size: 20px;
position: relative;
top: 2px;
}
#d30{
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
font-family: 'Nunito', sans-serif;
list-style: none;
text-align: center;
cursor: pointer;
white-space: nowrap;
user-select: none;
color: #ffffff;
font-weight: 600;
text-shadow: 0px 1px rgba(0, 0, 0, 0.1);
line-height: 40px;
box-sizing: border-box;
font-size: 14px;
}
</style>