<template>
    <div>
        <div>
             <select class="form-control select1 select1-hidden-accessible" id="f1" height="138" tabindex="-1" aria-hidden="true" v-model="currentFilter1">
            <option  v-for="filter in filters1" :value="filter" :key="filter">{{ filter }}</option>
        </select>
        </div>
        <div>
             <select class="form-control select2 select2-hidden-accessible" id="f2" height="138" tabindex="-1" aria-hidden="true" v-model="currentFilter2">
     
            <option v-for="filter1 in filters2" :value="filter1" :key="filter1">{{filter1}}</option>
        </select>
        </div>
        <div>
             <select class="form-control select3 select3-hidden-accessible" id="f3" height="138" tabindex="-1" aria-hidden="true" v-model="currentFilter3">
     
            <option v-for="filter2 in filters3" :value="filter2" :key="filter2">{{filter2}}</option>
        </select>
        </div>
        <div>
            <select class="form-control select4 select4-hidden-accessible" id="f3" height="138" tabindex="-1" aria-hidden="true" v-model="currentFilter4">
     
            <option v-for="filter3 in filters4" :value="filter3" :key="filter3">{{filter3}}</option>
        </select>
        </div>
        <div>
            <select class="form-control select5 select5-hidden-accessible" id="f4" height="138" tabindex="-1" aria-hidden="true" v-model="currentFilter5">
     
            <option v-for="filter4 in filters5" :value="filter4" :key="filter4">{{filter4}}</option>
        </select>
        </div>
         <div>
            <select class="form-control select6 select6-hidden-accessible" id="f5" height="138" tabindex="-1" aria-hidden="true" v-model="currentFilter6">
     
            <option v-for="filter5 in filters6" :value="filter5" :key="filter5">{{filter5}}</option>
        </select>
        </div>
        <div>
            <select class="form-control select7 select7-hidden-accessible" id="f5" height="138" tabindex="-1" aria-hidden="true" v-model="currentFilter7">
     
            <option v-for="filter6 in filters7" :value="filter6" :key="filter6">{{filter6}}</option>
        </select>
        </div>
       
    </div>
        
       
</template>

<script>
export default {
    name:'Filters',
    data(){
        return {
         
           currentFilter1: 'Alt Kategoriler',
          filters1: [
           'Alt Kategoriler',
           'Erkek Sweatshirt',
           'Erkek Gömlek',
           'Erkek Kazak',
           'Erkek T-shirt',
         
        ],
         currentFilter2:'Fiyat Aralığı',
           filters2:[
            'Fiyat Aralığı',
            '50TL-100TL',
            '100TL-250TL',
            ],
         currentFilter3:'Fırsatlar',
           filters3:[
              'Fırsatlar',
              'Yeni',
              'İndirimli Ürünler',
            ],
        currentFilter4:'Renk',
         filters4:[
             'Renk',
             'Siyah',
             'Beyaz',

         ],
         currentFilter5:'Beden',
         filters5:[
             'Beden',
             '36',
             '38',
             '40',
         ],
         currentFilter6:'Cinsiyet',
         filters6:[
             'Cinsiyet',
             'Erkek',
             'Kadın',
         ],
         currentFilter7:'Kategori',
         filters7:[
             'Kategori',
             'Sweatshirt',
             'Kazak',
             'T-shirt',
         ]

        /*
        projects: [
            {title: "Web development", image: "https://picsum.photos/g/200?image=116", category: 'WEB DEVELOPMENT'},
            {title: "WEB UX/UI DESIGN", image: "https://picsum.photos/g/200?image=121", category: 'Design'},
            {title: "Wordpress", image: "https://picsum.photos/g/200?image=133", category: 'WORDPRESS DEVELOPMENT'},
            {title: "Design", image: "https://picsum.photos/g/200?image=121", category: 'FREE COURSE'}, 
        ]*/
        }
    },
  
}
    

</script>

<style scoped>
#f1{
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
box-sizing: border-box;
color: inherit;
font: inherit;
margin: 0;
text-transform: none;
font-family: inherit;
line-height: inherit;
padding-left: 0;
list-style: none;
font-size: 14px;
border: none;
background: transparent;
width: 40;
height: 50;
height: 40px;
outline: none;
float: left;

}
#f2{
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
box-sizing: border-box;
color: inherit;
font: inherit;
margin: 0;
text-transform: none;
font-family: inherit;
line-height: inherit;
padding-left: 0;
list-style: none;
font-size: 14px;
border: none;
background: transparent;
width: 40;
height: 50;
height: 40px;
outline: none;
float: left;
}
#f3{
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
box-sizing: border-box;
color: inherit;
font: inherit;
margin: 0;
text-transform: none;
font-family: inherit;
line-height: inherit;
padding-left: 0;
list-style: none;
font-size: 14px;
border: none;
background: transparent;
width: 40;
height: 50;
height: 40px;
outline: none;
float: left;

}
#f4{
     -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
box-sizing: border-box;
color: inherit;
font: inherit;
margin: 0;
text-transform: none;
font-family: inherit;
line-height: inherit;
padding-left: 0;
list-style: none;
font-size: 14px;
border: none;
background: transparent;
width: 40;
height: 50;
height: 40px;
outline: none;
float: left;
}
#f5{
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
box-sizing: border-box;
color: inherit;
font: inherit;
margin: 0;
text-transform: none;
font-family: inherit;
line-height: inherit;
padding-left: 0;
list-style: none;
font-size: 14px;
border: none;
background: transparent;
width: 40;
height: 50;
height: 40px;
outline: none;
float: left;
}


</style>