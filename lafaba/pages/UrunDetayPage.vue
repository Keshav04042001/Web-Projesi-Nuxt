<template>
  <div>
    <div class="breadcrumb-div container hidden-xs">
        <ul class="breadcrumb" itemscope="" itemtype="http://schema.org/BreadcrumbList">
            <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
                <a itemprop="item" href="/" class="breadcrumb-home" title="Ana Sayfa">
                    <span itemprop="name"><i class="fa fa-home"></i><span style="display:none">Ana Sayfa</span></span>
                    <meta itemprop="position" content="1">
                </a>
            </li>
            
            <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
                <a itemprop="item" href="/erkek-giyim" title="Erkek Giyim">
                    <span itemprop="name">Erkek Giyim</span>
                    <meta itemprop="position" content="2">
                </a>
            </li>
            
            <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
                <a itemprop="item" href="/erkek-ust-giyim" title="Erkek Üst Giyim">
                    <span itemprop="name">Erkek Üst Giyim</span>
                    <meta itemprop="position" content="3">
                </a>
            </li>
            
            <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
                <a itemprop="item" href="/erkek-sweatshirt" title="Erkek Sweatshirt">
                    <span itemprop="name">Erkek Sweatshirt</span>
                    <meta itemprop="position" content="4">
                </a>
            </li>
            
        </ul>
    </div>
       <UrunDetay />
  </div>
   
</template>