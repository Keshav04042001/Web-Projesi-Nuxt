<template>
  <div class="step-cart container main-container header-offset" style="padding-top: 0px; background-color: white;">
            <div style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); color: #000;
font-size: 14px;
line-height: 21px;
font-family: 'Nunito', sans-serif;
box-sizing: border-box;
position: relative;
padding-left: 10px;
padding-right: 10px;
float: left;
width: 75%;" class="row">
                <div style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
color: #000;
font-size: 14px;
line-height: 21px;
font-family: 'Nunito', sans-serif;
box-sizing: border-box;
position: relative;
padding-left: 0px;
padding-right: 600px;
float: left;
width: 75%;" class="col-lg-18 col-md-16">
                    <h1 style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
box-sizing: border-box;
font-family: inherit;
color: inherit;
font-weight: normal;
margin: 0;
padding-bottom: 15px;
font-size: 30px;
line-height: 35px;" class="section-title-inner"><i style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
color: inherit;
box-sizing: border-box;
display: inline-block;
font: normal normal normal 14px/1 FontAwesome;
text-rendering: auto;
-webkit-font-smoothing: antialiased;
font-size: 20px;" class="fa fa-shopping-basket"></i>&nbsp;Sepetim</h1>
                    
                </div>
            </div>
            <!--/.row-->

            <div style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
color: #000;
font-size: 14px;
line-height: 21px;
font-family: 'Nunito', sans-serif;
box-sizing: border-box;
margin-left: -10px;
margin-right: -10px;" class="row">
                <div style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
color: #000;
font-size: 14px;
line-height: 21px;
font-family: 'Nunito', sans-serif;
box-sizing: border-box;
position: relative;
padding-left: 10px;
padding-right: 10px;
float: left;
width: 75%;" class="col-md-18">
                    
                    <a style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
font-size: 14px;
line-height: 21px;
font-family: 'Nunito', sans-serif;
box-sizing: border-box;
background-color: transparent;
color: #000;
text-decoration: none;
outline: none !important;
transition: all .2s ease-in;" href="#anc-messge"></a>
                    <div style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
color: #000;
font-size: 14px;
line-height: 21px;
font-family: 'Nunito', sans-serif;
box-sizing: border-box;
position: relative;
clear: both;" id="msg-page-dialog"></div>
                    <div style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
color: #000;
font-size: 14px;
line-height: 21px;
font-family: 'Nunito', sans-serif;
box-sizing: border-box;
margin-left: -10px;
margin-right: -10px;" class="row userInfo">
                        <div style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
color: #000;
font-size: 14px;
line-height: 21px;
font-family: 'Nunito', sans-serif;
box-sizing: border-box;
position: relative;
padding-left: 10px;
padding-right: 10px;
float: left;
width: 100%;" class="col-xs-24 col-sm-24">
                            <div style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
color: #000;
font-size: 14px;
line-height: 21px;
font-family: 'Nunito', sans-serif;
box-sizing: border-box;
width: 100% !important;" class="cart-content w100">
                                <table class="cart-table table-responsive" style="width: 100%">
                                    <tbody style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
color: #000;
font-size: 14px;
line-height: 21px;
font-family: 'Nunito', sans-serif;
border-collapse: collapse;
border-spacing: 0;
box-sizing: border-box;">
                                        <tr style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
color: #000;
font-family: 'Nunito', sans-serif;
border-collapse: collapse;
border-spacing: 0;
box-sizing: border-box;
text-transform: uppercase;
font-weight: bold;
font-size: 15px;
line-height: 28px;
background: #EBEDEF;
border-bottom: 1px solid #E7E9EC;" class="cart-product cart-table-header">
                                            <td style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
color: #000;
font-family: 'Nunito', sans-serif;
border-collapse: collapse;
border-spacing: 0;
text-transform: uppercase;
font-weight: bold;
font-size: 15px;
line-height: 28px;
box-sizing: border-box;
padding: 6px 0;
text-align: center;
width: 15%;" >RESİM</td>
                                            <td style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
color: #000;
font-family: 'Nunito', sans-serif;
border-collapse: collapse;
border-spacing: 0;
text-transform: uppercase;
font-weight: bold;
font-size: 15px;
line-height: 28px;
box-sizing: border-box;
padding: 6px 0;
text-align: left;
width: 40%;">Ürün</td>
                                            <td style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
color: #000;
font-family: 'Nunito', sans-serif;
border-collapse: collapse;
border-spacing: 0;
text-transform: uppercase;
font-weight: bold;
font-size: 15px;
line-height: 28px;
box-sizing: border-box;
padding: 6px 0;
text-align: center;
width: 10%;">Adet</td>
                                            <td style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
color: #000;
font-family: 'Nunito', sans-serif;
border-collapse: collapse;
border-spacing: 0;
text-transform: uppercase;
font-weight: bold;
font-size: 15px;
line-height: 28px;
box-sizing: border-box;
padding: 6px 0;
text-align: center;
width: 20%;">Toplam</td>
                                            <td style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
color: #000;
font-family: 'Nunito', sans-serif;
border-collapse: collapse;
border-spacing: 0;
text-transform: uppercase;
font-weight: bold;
font-size: 15px;
line-height: 28px;
box-sizing: border-box;
padding: 6px 0;
text-align: center;
width: 5%;" class="delete">&nbsp;</td>
                                        </tr>
                                        
                                                <tr style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
color: #000;
font-size: 14px;
line-height: 21px;
font-family: 'Nunito', sans-serif;
border-collapse: collapse;
border-spacing: 0;
box-sizing: border-box;
border-bottom: 1px solid #E7E9EC;" class="cart-product">
                                                    <td style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
color: #000;
font-size: 14px;
line-height: 21px;
font-family: 'Nunito', sans-serif;
border-collapse: collapse;
border-spacing: 0;
box-sizing: border-box;
padding: 6px 0;
text-align: center;" class="cart-product-thumb">
                                                        <input style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
border-collapse: collapse;
border-spacing: 0;
box-sizing: border-box;
color: inherit;
font: inherit;
margin: 0;
font-family: inherit;
font-size: inherit;
line-height: inherit;" type="hidden" name="ctl00$PortalContent$RptCart$ctl00$HdnCartID" id="ctl00_PortalContent_RptCart_ctl00_HdnCartID" value="56201">
                                                        <div style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
color: #000;
font-size: 14px;
line-height: 21px;
font-family: 'Nunito', sans-serif;
border-collapse: collapse;
border-spacing: 0;
text-align: center;
box-sizing: border-box;">
                                                            <a style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
font-size: 14px;
line-height: 21px;
font-family: 'Nunito', sans-serif;
border-collapse: collapse;
border-spacing: 0;
text-align: center;
box-sizing: border-box;
background-color: transparent;
color: #000;
text-decoration: none;
outline: none !important;
transition: all .2s ease-in;" href="/erkek-lacivert-kapusonlu-fermuarli-denim-sweatshirt-p112662" title="Erkek Lacivert Kapüşonlu Fermuarlı Denim Sweatshirt 36">
                                                                <img style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
font-size: 14px;
line-height: 21px;
font-family: 'Nunito', sans-serif;
border-collapse: collapse;
border-spacing: 0;
text-align: center;
color: #000;
box-sizing: border-box;
border: 0;
vertical-align: middle;
width: 86px;
max-width: 100%;" src="https://www.lafaba.com/productimages/112662/small/20ke09484r211.jpg" title="Erkek Lacivert Kapüşonlu Fermuarlı Denim Sweatshirt 36" alt="img">
                                                            </a>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
color: #000;
font-size: 14px;
line-height: 21px;
font-family: 'Nunito', sans-serif;
border-collapse: collapse;
border-spacing: 0;
text-align: left;
box-sizing: border-box;" class="cart-description">
                                                            <h4 style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
border-collapse: collapse;
border-spacing: 0;
text-align: left;
box-sizing: border-box;
font-family: inherit;
color: inherit;
font-weight: normal;
margin: 0;
padding-bottom: 15px;
font-size: 17px;
line-height: 20px;"><a href="/erkek-lacivert-kapusonlu-fermuarli-denim-sweatshirt-p112662">Erkek Lacivert Kapüşonlu Fermuarlı Denim Sweatshirt 36</a></h4>
                                                            <span style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
color: #000;
font-size: 14px;
line-height: 21px;
font-family: 'Nunito', sans-serif;
border-collapse: collapse;
border-spacing: 0;
text-align: left;
box-sizing: border-box;" class="size">20KE09484R2136</span>
                                                            

                                                            
                                                            
                                                                <div style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
line-height: 21px;
font-family: 'Nunito', sans-serif;
border-collapse: collapse;
border-spacing: 0;
text-align: left;
box-sizing: border-box;
color: #000;
font-size: 18px;
display: table-cell;
font-weight: 600;" class="price"><span style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
line-height: 21px;
font-family: 'Nunito', sans-serif;
border-collapse: collapse;
border-spacing: 0;
text-align: left;
color: #000;
font-size: 18px;
font-weight: 600;
box-sizing: border-box;">229,99 TL</span></div>
                                                            
                                                            
                                                        </div>
                                                    </td>
                                                    <td  style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
color: #000;
font-size: 14px;
line-height: 21px;
font-family: 'Nunito', sans-serif;
border-collapse: collapse;
border-spacing: 0;
box-sizing: border-box;
padding: 6px 0;
text-align: center;" class="cart-quanity">
                                                        <div style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
color: #000;
font-size: 14px;
line-height: 21px;
font-family: 'Nunito', sans-serif;
border-spacing: 0;
text-align: center;
box-sizing: border-box;
position: relative;
display: table;
border-collapse: separate;" class="input-group bootstrap-touchspin">
                                                          <span style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
color: #000;
font-family: 'Nunito', sans-serif;
border-spacing: 0;
text-align: center;
border-collapse: separate;
box-sizing: border-box;
width: 1%;
vertical-align: middle;
position: relative;
font-size: 0;
white-space: nowrap;
display: table-cell;
line-height: 0;" class="input-group-btn">
                                                            <button style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
border-spacing: 0;
border-collapse: separate;
box-sizing: border-box;
font: inherit;
margin: 0;
overflow: visible;
text-transform: none;
font-family: inherit;
display: inline-block;
margin-bottom: 0;
text-align: center;
vertical-align: middle;
touch-action: manipulation;
cursor: pointer;
background-image: none;
white-space: nowrap;
user-select: none;
color: #337ab7;
background-color: transparent;
box-shadow: none;
border: medium none;
border-radius: 3px;
font-size: 14px;
font-weight: normal;
line-height: 1.4;
padding: 8px 20px;
transition: all 0.25s linear 0s;
position: relative;
border-bottom-right-radius: 0;
border-top-right-radius: 0;
margin-right: -1px;
padding-left: 8px;
padding-right: 8px;" class="btn btn-link bootstrap-touchspin-down" type="button">-</button>
                                                          </span>
                                                          <span style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
font-family: 'Nunito', sans-serif;
border-spacing: 0;
border-collapse: separate;
box-sizing: border-box;
width: 1%;
white-space: nowrap;
vertical-align: middle;
padding: 6px 12px;
font-size: 14px;
font-weight: normal;
line-height: 1;
color: #555555;
text-align: center;
background-color: #eeeeee;
border: 1px solid #cccccc;
display: none;
border-radius: 0;" class="input-group-addon bootstrap-touchspin-prefix"></span>
                                                          <input style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
border-spacing: 0;
border-collapse: separate;
box-sizing: border-box;
font: inherit;
margin: 0;
font-family: inherit;
line-height: 1.42857143;
color: #555555;
background-color: #ffffff;
background-image: none;
border: 1px solid #cccccc;
transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
height: 30px;
padding: 0;
text-align: center;
border-color: #DDDDDD;
box-shadow: none;
border-style: solid;
border-width: 1px;
font-size: 14px;
position: relative;
z-index: 2;
float: left;
width: 100%;
margin-bottom: 0;
display: table-cell;
border-radius: 0;" name="ctl00$PortalContent$RptCart$ctl00$TxtQuantity" type="text" value="1" id="ctl00_PortalContent_RptCart_ctl00_TxtQuantity" class="cart-quanity-box form-control">
                                                          <span style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
font-family: 'Nunito', sans-serif;
border-spacing: 0;
border-collapse: separate;
box-sizing: border-box;
width: 1%;
white-space: nowrap;
vertical-align: middle;
padding: 6px 12px;
font-size: 14px;
font-weight: normal;
line-height: 1;
color: #555555;
text-align: center;
background-color: #eeeeee;
border: 1px solid #cccccc;
display: none;
border-radius: 0;" class="input-group-addon bootstrap-touchspin-postfix"></span>
                                                          <span style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
color: #000;
font-family: 'Nunito', sans-serif;
border-spacing: 0;
text-align: center;
border-collapse: separate;
box-sizing: border-box;
width: 1%;
vertical-align: middle;
position: relative;
font-size: 0;
white-space: nowrap;
display: table-cell;
line-height: 0;" class="input-group-btn">
                                                            <button style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
border-spacing: 0;
border-collapse: separate;
box-sizing: border-box;
font: inherit;
margin: 0;
overflow: visible;
text-transform: none;
font-family: inherit;
display: inline-block;
margin-bottom: 0;
text-align: center;
vertical-align: middle;
touch-action: manipulation;
cursor: pointer;
background-image: none;
white-space: nowrap;
user-select: none;
color: #337ab7;
background-color: transparent;
box-shadow: none;
border: medium none;
border-radius: 3px;
font-size: 14px;
font-weight: normal;
line-height: 1.4;
padding: 8px 20px;
transition: all 0.25s linear 0s;
position: relative;
border-bottom-left-radius: 0;
border-top-left-radius: 0;
z-index: 2;
margin-left: -1px;
padding-left: 8px;
padding-right: 8px;" class="btn btn-link bootstrap-touchspin-up" type="button">+</button>
                                                          </span>
                                                        </div>
                                                    </td>
                                                    <td style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
line-height: 21px;
font-family: 'Nunito', sans-serif;
border-collapse: collapse;
border-spacing: 0;
box-sizing: border-box;
color: #000;
padding: 6px 0;
text-align: center;
font-size: 18px;
display: table-cell;
font-weight: 600;" class="price">
                                                        229,99 TL
                                                    </td>
                                                    <td style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
color: #000;
font-size: 14px;
line-height: 21px;
font-family: 'Nunito', sans-serif;
border-collapse: collapse;
border-spacing: 0;
box-sizing: border-box;
padding: 6px 0;
text-align: center;" class="delete">
                                                        <a style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
font-size: 14px;
line-height: 21px;
font-family: 'Nunito', sans-serif;
border-collapse: collapse;
border-spacing: 0;
text-align: center;
box-sizing: border-box;
background-color: transparent;
color: #000;
text-decoration: none;
outline: none !important;
transition: all .2s ease-in;" id="ctl00_PortalContent_RptCart_ctl00_DeleteBtn" title="Sil" href="javascript:__doPostBack('ctl00$PortalContent$RptCart$ctl00$DeleteBtn','')"><i class="fa fa-trash-o fa-2x"></i></a>
                                                    </td>
                                                </tr>
                                            
                                    </tbody>
                                </table>
                            </div>
                            <!--cart-content-->

                            <div style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
color: #000;
font-size: 14px;
line-height: 21px;
font-family: 'Nunito', sans-serif;
box-sizing: border-box;
width: 100% !important;
padding: 20px;
border-top: solid 1px #eee;
background: #EBEDEF;
display: inline-block;
margin-bottom: 20px;" class="cart-footer w100">
                                <div style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
color: #000;
font-size: 14px;
line-height: 21px;
font-family: 'Nunito', sans-serif;
box-sizing: border-box;" class="box-footer">
                                    <div style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
color: #000;
font-size: 14px;
line-height: 21px;
font-family: 'Nunito', sans-serif;
box-sizing: border-box;
float: left !important;" class="pull-left">
                                        <a style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
font-family: 'Nunito', sans-serif;
box-sizing: border-box;
text-decoration: none;
outline: none !important;
margin-bottom: 0;
text-align: center;
vertical-align: middle;
touch-action: manipulation;
cursor: pointer;
background-image: none;
white-space: nowrap;
user-select: none;
display: none !important;
border: medium none;
border-radius: 3px;
font-size: 14px;
line-height: 1.4;
padding: 8px 20px;
transition: all 0.25s linear 0s;
background-color: #2ecc71;
color: #ffffff;
font-weight: 600;
text-shadow: 0px 1px rgba(0, 0, 0, 0.1);
-webkit-box-shadow: 0 -1px rgba(0, 0, 0, 0.1) inset;" href="/login.aspx" id="ctl00_PortalContent_BtnRegister" class="btn btn-success hidden">
                                        <i style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
text-align: center;
cursor: pointer;
white-space: nowrap;
user-select: none;
color: #ffffff;
text-shadow: 0px 1px rgba(0, 0, 0, 0.1);
box-sizing: border-box;
display: inline-block;
font: normal normal normal 14px/1 FontAwesome;
font-size: inherit;
text-rendering: auto;
-webkit-font-smoothing: antialiased;" class="fa fa-arrow-left"></i>&nbsp;Üye Girişi</a>
                                        
                                        <a style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
font-family: 'Nunito', sans-serif;
box-sizing: border-box;
text-decoration: none;
outline: none !important;
display: inline-block;
margin-bottom: 0;
text-align: center;
vertical-align: middle;
touch-action: manipulation;
cursor: pointer;
background-image: none;
white-space: nowrap;
user-select: none;
border: medium none;
border-radius: 3px;
font-size: 14px;
line-height: 1.4;
padding: 8px 20px;
transition: all 0.25s linear 0s;
background-color: #f6f6f6;
color: #454545;
font-weight: 600;
text-shadow: 0px 1px rgba(0, 0, 0, 0.1);
-webkit-box-shadow: 0 -1px rgba(0, 0, 0, 0.1) inset;" class="btn btn-default" href="/">
                                        <i style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
text-align: center;
cursor: pointer;
white-space: nowrap;
user-select: none;
color: #454545;
text-shadow: 0px 1px rgba(0, 0, 0, 0.1);
box-sizing: border-box;
display: inline-block;
font: normal normal normal 14px/1 FontAwesome;
font-size: inherit;
text-rendering: auto;
-webkit-font-smoothing: antialiased;" class="fa fa-arrow-left"></i>&nbsp;Alışverişe Devam</a>
                                    </div>
                                    <div style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
color: #000;
font-size: 14px;
line-height: 21px;
font-family: 'Nunito', sans-serif;
box-sizing: border-box;
float: right !important;" class="pull-right">
                                        <a style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
text-align: center;
cursor: pointer;
white-space: nowrap;
user-select: none;
color: #FFFFFF;
text-shadow: 0px 1px rgba(0, 0, 0, 0.1);
box-sizing: border-box;
display: inline-block;
font: normal normal normal 14px/1 FontAwesome;
font-size: inherit;
text-rendering: auto;
-webkit-font-smoothing: antialiased;
background-color: black;" id="ctl00_PortalContent_UpdateBtn " class="btn btn-primary" href="javascript:__doPostBack('ctl00$PortalContent$UpdateBtn','')"><i class="fa fa-undo"></i>&nbsp;Kaydet</a>
                                    </div>
                                </div>
                            </div>
                            <!--/ cart-footer -->
                        </div>
                    </div>
                    <!--/row end-->
                </div>
                <div style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
color: #000;
font-size: 14px;
line-height: 21px;
font-family: 'Nunito', sans-serif;
box-sizing: border-box;
position: relative;
padding-left: 10px;
padding-right: 10px;
float: left;
width: 25%;" class="col-md-6 cart-right-panel">
<div style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
color: #000;
font-size: 14px;
line-height: 21px;
font-family: 'Nunito', sans-serif;
box-sizing: border-box;
margin-bottom: 15px;" class="contentBox">
    <div style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
color: #000;
font-size: 14px;
line-height: 21px;
font-family: 'Nunito', sans-serif;
box-sizing: border-box;
width: 100% !important;" class="w100">
        <div style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
color: #000;
font-size: 14px;
line-height: 21px;
font-family: 'Nunito', sans-serif;
box-sizing: border-box;" class="table-block">
            <div style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
color: #000;
font-size: 14px;
line-height: 21px;
font-family: 'Nunito', sans-serif;
box-sizing: border-box;
width: 100% !important;
border: 1px solid #DDDDDD;
padding: 10px;" class="w100 cart-summary-container">
                <table style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
color: #000;
font-size: 14px;
line-height: 21px;
font-family: 'Nunito', sans-serif;
box-sizing: border-box;
border-collapse: collapse;
border-spacing: 0;
background-color: transparent;
width: 100%;
max-width: 100%;
margin-bottom: 20px;
margin-top: 0;" class="std table cart-summary">
                    <tbody style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
color: #000;
font-size: 14px;
line-height: 21px;
font-family: 'Nunito', sans-serif;
border-collapse: collapse;
border-spacing: 0;
box-sizing: border-box;">
                        <tr id="tr1">
                            <td id="td1">Sepet Tutarı</td>
                            <td id="td2" class="price">
                                229,99 TL
                            </td>
                        </tr>
                        
                        <tr id="tr1">
                            <td id="td1">
                                Kampanya İndirimi</td>
                            <td id="td2" class="price">-114,99 TL
                            </td>
                        </tr>
                        
                        <tr id="tr1">
                            <td id="td1">
                                Kargo Ücreti</td>
                            <td id="td2" class="price">
                                
                                <i style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
border-collapse: collapse;
border-spacing: 0;
text-align: right;
box-sizing: border-box;
color: #3c763d;
display: inline-block;
font: normal normal normal 14px/1 FontAwesome;
font-size: inherit;
text-rendering: auto;
-webkit-font-smoothing: antialiased;" class="fa fa-info-circle text-success ui-tooltip" title="" data-placement="top" data-original-title="Kargo ücreti seçilen kargo firmasına ve ödeme şekline göre değişebilir."></i>&nbsp;
                                <span style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
font-family: 'Nunito', sans-serif;
border-collapse: collapse;
border-spacing: 0;
font-size: 20px;
line-height: 1.42857143;
text-align: right;
box-sizing: border-box;
color: #3c763d;" class="text-success">Ücretsiz!</span>
                                
                            </td>
                        </tr>
                        <tr id="tr1">
                            <td  id="td1">Genel Toplam</td>
                            <td style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
font-family: 'Nunito', sans-serif;
border-collapse: collapse;
border-spacing: 0;
box-sizing: border-box;
color: #000 !important;
padding: 8px;
line-height: 1.42857143;
border-top: 1px solid #dddddd;
padding-left: 4px;
padding-right: 4px;
vertical-align: middle;
font-size: 22px;
font-weight: bold;
text-align: right;" class="site-color total-price">
                                114,99 TL
                            </td>
                        </tr>

                        
                        <tr id="tr1">
                          <td style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
font-family: 'Nunito', sans-serif;
border-collapse: collapse;
border-spacing: 0;
box-sizing: border-box;
padding: 8px;
line-height: 1.42857143;
border-top: 1px solid #dddddd;
padding-left: 4px;
padding-right: 4px;
vertical-align: middle;
text-align: center;
font-size: 16px;
color: #d41a1a;" colspan="2" >150 TL ve üzeri alışverişlerde
                            <br>KARGO ÜCRETSİZ!
                          </td>
                        </tr>
                        
                        <tr style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
color: #000;
font-size: 14px;
line-height: 21px;
font-family: 'Nunito', sans-serif;
border-collapse: collapse;
border-spacing: 0;
box-sizing: border-box;" class="campaign-code-area">
                            <td style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
color: #000;
font-size: 14px;
font-family: 'Nunito', sans-serif;
border-collapse: collapse;
border-spacing: 0;
box-sizing: border-box;
padding: 8px;
line-height: 1.42857143;
border-top: 1px solid #dddddd;
padding-left: 4px;
padding-right: 4px;
vertical-align: middle;" colspan="2">
                                <div style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
color: #000;
font-size: 14px;
font-family: 'Nunito', sans-serif;
border-collapse: collapse;
border-spacing: 0;
line-height: 1.42857143;
box-sizing: border-box;">Kampanya Kodu:</div>
                                
                                <div style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
color: #000;
font-size: 14px;
font-family: 'Nunito', sans-serif;
border-spacing: 0;
line-height: 1.42857143;
box-sizing: border-box;
position: relative;
display: table;
border-collapse: separate;
width: 100% !important;" class="input-group w100">
                                    <input  style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
border-spacing: 0;
border-collapse: separate;
box-sizing: border-box;
font: inherit;
margin: 0;
font-family: inherit;
color: #555555;
background-color: #ffffff;
background-image: none;
border: 1px solid #cccccc;
transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
height: 30px;
padding: 5px 10px;
line-height: 1.5;
border-color: #DDDDDD;
box-shadow: none;
border-radius: 3px;
border-style: solid;
border-width: 1px;
font-size: 14px;
position: relative;
z-index: 2;
float: left;
width: 100%;
margin-bottom: 0;
display: table-cell;
border-bottom-right-radius: 0;
border-top-right-radius: 0;" type="text" class="form-control input-sm coupon-code" placeholder="Kampanya kodunuzu girin!">
                                    <span style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
color: #000;
font-family: 'Nunito', sans-serif;
border-spacing: 0;
border-collapse: separate;
box-sizing: border-box;
width: 1%;
vertical-align: middle;
position: relative;
font-size: 0;
white-space: nowrap;
display: table-cell;
line-height: 0;" class="input-group-btn">
                                        <a style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
font-family: 'Nunito', sans-serif;
border-spacing: 0;
border-collapse: separate;
box-sizing: border-box;
text-decoration: none;
outline: none !important;
display: inline-block;
margin-bottom: 0;
text-align: center;
vertical-align: middle;
touch-action: manipulation;
cursor: pointer;
background-image: none;
white-space: nowrap;
user-select: none;
border: medium none;
border-radius: 3px;
transition: all 0.25s linear 0s;
background-color: #3498db;
color: #ffffff;
position: relative;
font-weight: 600;
text-shadow: 0px 1px rgba(0, 0, 0, 0.1);
-webkit-box-shadow: 0 -1px rgba(0, 0, 0, 0.1) inset;
height: 30px;
line-height: 30px;
padding: 0 10px;
font-size: 14px;
text-transform: uppercase;
border-bottom-left-radius: 0;
border-top-left-radius: 0;
z-index: 2;
margin-left: -1px;" id="btn-use-coupon" class="btn btn-info btn-coupon btn sm" data-type="use-coupon">Kullan</a>
                                    </span>
                                </div>
                                
                            </td>
                        </tr>
                        
                        <tr id="tr1">
                            <td style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
color: #000;
font-size: 14px;
font-family: 'Nunito', sans-serif;
border-collapse: collapse;
border-spacing: 0;
box-sizing: border-box;
padding: 8px;
line-height: 1.42857143;
border-top: 1px solid #dddddd;
padding-left: 4px;
padding-right: 4px;
vertical-align: middle;" colspan="2">
                            <div href="/adresPage">
                                <a href="/adresPage" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
font-family: 'Nunito', sans-serif;
border-collapse: collapse;
border-spacing: 0;
box-sizing: border-box;
text-decoration: none;
outline: none !important;
margin-bottom: 0;
text-align: center;
vertical-align: middle;
touch-action: manipulation;
cursor: pointer;
background-image: none;
white-space: nowrap;
user-select: none;
display: block;
width: 100%;
border: medium none;
transition: all 0.25s linear 0s;
background-color: #2ecc71;
color: #ffffff;
font-weight: 600;
text-shadow: 0px 1px rgba(0, 0, 0, 0.1);
-webkit-box-shadow: 0 -1px rgba(0, 0, 0, 0.1) inset;
border-radius: 4px;
line-height: 1.471;
padding: 10px 20px;
font-size: 18px;"  id="btn-complate-order" class="btn btn-success btn-lg btn-block btn-next-step">
                                                                <i  class="fa fa-check-square-o"></i>&nbsp;Adres Seçimi&nbsp;
                            <i class="fa fa-arrow"></i>
                                                            </a>
                            </div>
                                
                                
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
<!-- End popular -->
</div>

            </div>
            <!--/row-->

            <div style="clear: both"></div>
        </div>
</template>


<script>

export default {
}
</script>


<style scoped>
#tr1{
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
color: #000;
font-size: 14px;
line-height: 21px;
font-family: 'Nunito', sans-serif;
border-collapse: collapse;
border-spacing: 0;
box-sizing: border-box;

}
#td1{
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
color: #000;
font-size: 14px;
font-family: 'Nunito', sans-serif;
border-collapse: collapse;
border-spacing: 0;
box-sizing: border-box;
padding: 8px;
line-height: 1.42857143;
padding-left: 4px;
padding-right: 4px;
vertical-align: middle;
border: none;
}
#td2{
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
font-family: 'Nunito', sans-serif;
border-collapse: collapse;
border-spacing: 0;
box-sizing: border-box;
font-size: 20px;
color: #000;
display: block;
padding: 8px;
line-height: 1.42857143;
padding-left: 4px;
padding-right: 4px;
vertical-align: middle;
border: none;
text-align: right;
}

</style>