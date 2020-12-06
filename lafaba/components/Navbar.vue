<template>
  <nav>
    <Dropdown  id="d1" title="YENİ GELENLER" :items="yenigelenler"  >
      <div><img src="https://www.lafaba.com/skins/shared/images/content/yeni-gelenler-desktop-menu-fw20.jpg"></div>
      
    </Dropdown>
    <Dropdown id="d1" title="KADIN" :items="kadin" />
    <Dropdown id="d1" title="ERKEK" :items="erkek" />
  </nav>
</template>

<script>
import Dropdown from './Dropdown';

export default {
  name: 'navbar',
  components: {
    Dropdown
  },
  data () {
    return {
      yenigelenler: [
        {
          title: 'KADIN YENİ GELENLER',
          link: '#'
          
        },
        {
          title: 'ERKEK YENİ GELENLER',
          link:'#'
        }
        
      ],
      kadin: [
        {
          title: 'ELBİSE',
          link: '#'
        },
        {
          title: 'ABİYE',
          link: '#'
        },
        {
          title: 'BÜYÜK BEDEN',
          link: '#'
        },
        {
          title: 'BLUZ',
          link: '#'
        },
        {
          title: 'DIŞ GİYİM',
          link: '#'
        },
        {
          title: 'ÜST GİYİM',
          link: '#'
        },
        {
          title: 'ALT GİYİM',
          link: '#'
        },
        {
          title: 'AKSESUAR',
          link: '#'
        },
      ],
      erkek: [
        {
          title: 'DIŞ GİYİM',
          link: '#'
        },
        {
          title: 'ÜST GİYİM',
          link: '#'
        },
        {
          title: 'ALT GİYİM',
          link: '#'
        },
        {
          title: 'AKSESUAR',
          link: '#'
        },
      ]
    }
  }
}
</script>

<style>

nav {
  background-color: #333333;;
  display: flex;
  align-items: center;
  justify-content: left; 
  left: 100px;
}
#d1{
  color: white;
}
nav .menu-item {
  color: black;
  padding: 10px 20px;
  position: relative;
  text-align: center;
  border-bottom: 3px solid transparent;
  display:table flex;
  transition: 0.4s;
  float: left;
  position: relative;
  left:50px;
}

nav .menu-item.active,
nav .menu-item:hover {
}

nav .menu-item a {
  color: inherit;
  text-decoration: none;
}
</style>