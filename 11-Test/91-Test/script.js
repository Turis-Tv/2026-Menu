window.onkeydown = function(e) {
    return !(e.keyCode == 32);
};

/*
  Handles a click on the down button to slide down the playlist.
*/
document.getElementsByClassName('down-header')[0].addEventListener('click', function(){
  var list = document.getElementById('list');

  list.style.height = ( parseInt( document.getElementById('flat-black-player-container').offsetHeight ) - 135 ) + 'px';

  document.getElementById('list-screen').classList.remove('slide-out-top');
  document.getElementById('list-screen').classList.add('slide-in-top');
  document.getElementById('list-screen').style.display = "block";
});

/*
  Handles a click on the up arrow to hide the list screen.
*/
document.getElementsByClassName('hide-playlist')[0].addEventListener('click', function(){
  document.getElementById('list-screen').classList.remove('slide-in-top');
  document.getElementById('list-screen').classList.add('slide-out-top');
  document.getElementById('list-screen').style.display = "none";
});

/*
  Handles a click on the song played progress bar.
*/
document.getElementById('song-played-progress').addEventListener('click', function( e ){
  var offset = this.getBoundingClientRect();
  var x = e.pageX - offset.left;

  Amplitude.setSongPlayedPercentage( ( parseFloat( x ) / parseFloat( this.offsetWidth) ) * 100 );
});

document.querySelector('img[data-amplitude-song-info="cover_art_url"]').style.height = document.querySelector('img[data-amplitude-song-info="cover_art_url"]').offsetWidth + 'px';

Amplitude.init({
  "bindings": {
    37: 'prev',
    39: 'next',
    32: 'play_pause'
  },
  "songs": [
    {
      "name": "Alemcisin",
      "artist": "Ahmet Ayverdi",
      "album": " ",
      "url": "https://mp3kulisi.mobi/indir/ahmet-ayverdi/sikir-sikir-oyun-havalari-2016/ahmet-ayverdi-alemcisin.mp3",
      "cover_art_url": "https://cdn.statically.io/img/mp3kulisi.mobi/h=164,w=164,q=50/detayresim/164/164/mp3resimler/ahmet-ayverdi-sikir-sikir-oyun-havalari-2016.jpg"
    },
    {
      "name": "Ara Beni Sor Beni",
      "artist": "Ahmet Ayverdi",
      "album": " ",
      "url": "https://mp3kulisi.mobi/indir/ahmet-ayverdi/sikir-sikir-oyun-havalari-2016/ahmet-ayverdi-ara-beni-sor-beni.mp3",
      "cover_art_url": "https://cdn.statically.io/img/mp3kulisi.mobi/h=164,w=164,q=50/detayresim/164/164/mp3resimler/ahmet-ayverdi-sikir-sikir-oyun-havalari-2016.jpg"
    },
    {
      "name": "Aşta Gel",
      "artist": "Lorn",
      "album": " ",
      "url": "https://mp3kulisi.mobi/indir/ahmet-ayverdi/sazli-sozlu-yoresel-oyun-havalari-2018/ahmet-ayverdi-asta-gel.mp3",
      "cover_art_url": "https://cdn.statically.io/img/mp3kulisi.mobi/h=164,w=164,q=50/detayresim/164/164/mp3resimler/ahmet-ayverdi-sikir-sikir-oyun-havalari-2016.jpg"
    },
    {
      "name": "Bıktım",
      "artist": "Ahmet Ayverdi",
      "album": " ",
      "url": "https://mp3kulisi.mobi/indir/ahmet-ayverdi/sazli-sozlu-yoresel-oyun-havalari-2018/ahmet-ayverdi-biktim.mp3",
      "cover_art_url": "https://cdn.statically.io/img/mp3kulisi.mobi/h=164,w=164,q=50/detayresim/164/164/mp3resimler/ahmet-ayverdi-sikir-sikir-oyun-havalari-2016.jpg"
    },
    {
      "name": "Bilebilse",
      "artist": "Ahmet Ayverdi",
      "album": " ",
      "url": "https://mp3kulisi.mobi/indir/ahmet-ayverdi/sazli-sozlu-yoresel-oyun-havalari-2018/ahmet-ayverdi-bilebilse.mp3",
      "cover_art_url": "https://cdn.statically.io/img/mp3kulisi.mobi/h=164,w=164,q=50/detayresim/164/164/mp3resimler/ahmet-ayverdi-sikir-sikir-oyun-havalari-2016.jpg"
    },
    {
      "name": "Bilemem Yar Bilemem",
      "artist": "Ahmet Ayverdi",
      "album": " ",
      "url": "https://mp3kulisi.mobi/indir/ahmet-ayverdi/sikir-sikir-oyun-havalari-2016/ahmet-ayverdi-bilemem-yar-bilemem.mp3",
      "cover_art_url": "https://cdn.statically.io/img/mp3kulisi.mobi/h=164,w=164,q=50/detayresim/164/164/mp3resimler/ahmet-ayverdi-sikir-sikir-oyun-havalari-2016.jpg"
    },
    {
      "name": "Bir Yastıkta",
      "artist": "Ahmet Ayverdi",
      "album": " ",
      "url": "https://mp3kulisi.mobi/indir/ahmet-ayverdi/sazli-sozlu-yoresel-oyun-havalari-2018/ahmet-ayverdi-bir-yastikta.mp3",
      "cover_art_url": "https://cdn.statically.io/img/mp3kulisi.mobi/h=164,w=164,q=50/detayresim/164/164/mp3resimler/ahmet-ayverdi-sikir-sikir-oyun-havalari-2016.jpg"
    },
    {
      "name": "Cevdet",
      "artist": "Ahmet Ayverdi",
      "album": " ",
      "url": "https://mp3kulisi.mobi/indir/ahmet-ayverdi/sikir-sikir-oyun-havalari-2016/ahmet-ayverdi-cevdet.mp3",
      "cover_art_url": "https://cdn.statically.io/img/mp3kulisi.mobi/h=164,w=164,q=50/detayresim/164/164/mp3resimler/ahmet-ayverdi-sikir-sikir-oyun-havalari-2016.jpg"
    },
    {
      "name": "Garip Ahmet",
      "artist": "Ahmet Ayverdi",
      "album": " ",
      "url": "https://mp3kulisi.mobi/indir/ahmet-ayverdi/sikir-sikir-oyun-havalari-2016/ahmet-ayverdi-garip-ahmet.mp3",
      "cover_art_url": "https://cdn.statically.io/img/mp3kulisi.mobi/h=164,w=164,q=50/detayresim/164/164/mp3resimler/ahmet-ayverdi-sikir-sikir-oyun-havalari-2016.jpg"
    },
    {
      "name": "Günahların Benim Olsun",
      "artist": "Ahmet Ayverdi",
      "album": " ",
      "url": "https://mp3kulisi.mobi/indir/ahmet-ayverdi/sikir-sikir-oyun-havalari-2016/ahmet-ayverdi-gunahlarin-benim-olsun.mp3",
      "cover_art_url": "https://cdn.statically.io/img/mp3kulisi.mobi/h=164,w=164,q=50/detayresim/164/164/mp3resimler/ahmet-ayverdi-sikir-sikir-oyun-havalari-2016.jpg"
    },
    {
      "name": "Kastamonu Oyun Havası",
      "artist": "Ahmet Ayverdi",
      "album": " ",
      "url": "https://mp3kulisi.mobi/indir/ahmet-ayverdi/sazli-sozlu-yoresel-oyun-havalari-2018/ahmet-ayverdi-kastamonu-oyun-havasi.mp3",
      "cover_art_url": "https://cdn.statically.io/img/mp3kulisi.mobi/h=164,w=164,q=50/detayresim/164/164/mp3resimler/ahmet-ayverdi-sikir-sikir-oyun-havalari-2016.jpg"
    },
    {
      "name": "Mersi Mersi",
      "artist": "Ahmet Ayverdi",
      "album": " ",
      "url": "https://mp3kulisi.mobi/indir/ahmet-ayverdi/sikir-sikir-oyun-havalari-2016/ahmet-ayverdi-mersi-mersi.mp3",
      "cover_art_url": "https://cdn.statically.io/img/mp3kulisi.mobi/h=164,w=164,q=50/detayresim/164/164/mp3resimler/ahmet-ayverdi-sikir-sikir-oyun-havalari-2016.jpg"
    },

    {
      "name": "Meyhane",
      "artist": "Ahmet Ayverdi",
      "album": " ",
      "url": "https://mp3kulisi.mobi/indir/ahmet-ayverdi/sazli-sozlu-yoresel-oyun-havalari-2018/ahmet-ayverdi-meyhane.mp3",
      "cover_art_url": "https://cdn.statically.io/img/mp3kulisi.mobi/h=164,w=164,q=50/detayresim/164/164/mp3resimler/ahmet-ayverdi-sikir-sikir-oyun-havalari-2016.jpg"
    },
    {
      "name": "Neriman",
      "artist": "Ahmet Ayverdi",
      "album": " ",
      "url": "https://mp3kulisi.mobi/indir/ahmet-ayverdi/sazli-sozlu-yoresel-oyun-havalari-2018/ahmet-ayverdi-neriman.mp3",
      "cover_art_url": "https://cdn.statically.io/img/mp3kulisi.mobi/h=164,w=164,q=50/detayresim/164/164/mp3resimler/ahmet-ayverdi-sikir-sikir-oyun-havalari-2016.jpg"
    },
    {
      "name": "Oh De",
      "artist": "Ahmet Ayverdi",
      "album": " ",
      "url": "https://mp3kulisi.mobi/indir/ahmet-ayverdi/sikir-sikir-oyun-havalari-2016/ahmet-ayverdi-oh-de.mp3",
      "cover_art_url": "https://cdn.statically.io/img/mp3kulisi.mobi/h=164,w=164,q=50/detayresim/164/164/mp3resimler/ahmet-ayverdi-sikir-sikir-oyun-havalari-2016.jpg"
    },
    {
      "name": "Pişman Olursun",
      "artist": "Ahmet Ayverdi",
      "album": " ",
      "url": "https://mp3kulisi.mobi/indir/ahmet-ayverdi/sazli-sozlu-yoresel-oyun-havalari-2018/ahmet-ayverdi-pisman-olursun.mp3",
      "cover_art_url": "https://cdn.statically.io/img/mp3kulisi.mobi/h=164,w=164,q=50/detayresim/164/164/mp3resimler/ahmet-ayverdi-sikir-sikir-oyun-havalari-2016.jpg"
    },
    {
      "name": "Söğütlü Çeşme",
      "artist": "Ahmet Ayverdi",
      "album": " ",
      "url": "https://mp3kulisi.mobi/indir/ahmet-ayverdi/sikir-sikir-oyun-havalari-2016/ahmet-ayverdi-sogutlu-cesme.mp3",
      "cover_art_url": "https://cdn.statically.io/img/mp3kulisi.mobi/h=164,w=164,q=50/detayresim/164/164/mp3resimler/ahmet-ayverdi-sikir-sikir-oyun-havalari-2016.jpg"
    },
    {
      "name": "Üzülüpte Ağlarsın",
      "artist": "Ahmet Ayverdi",
      "album": " ",
      "url": "https://mp3kulisi.mobi/indir/ahmet-ayverdi/sazli-sozlu-yoresel-oyun-havalari-2018/ahmet-ayverdi-uzulupte-aglarsin.mp3",
      "cover_art_url": "https://cdn.statically.io/img/mp3kulisi.mobi/h=164,w=164,q=50/detayresim/164/164/mp3resimler/ahmet-ayverdi-sikir-sikir-oyun-havalari-2016.jpg"
    },





    {
      "name": "Hovarda ",
      "artist": "Ahmet Ayverdi",
      "album": " ",
      "url": "https://mp3kulisi.mobi/indir/ahmet-ayverdi/sikir-sikir-oyun-havalari-2016/ahmet-ayverdi-hovarda.mp3",
      "cover_art_url": "https://cdn.statically.io/img/mp3kulisi.mobi/h=164,w=164,q=50/detayresim/164/164/mp3resimler/ahmet-ayverdi-sikir-sikir-oyun-havalari-2016.jpg"
    },


    {
      "name": "Hanönünün Hanında",
      "artist": "Ahmet Ayverdi",
      "album": " ",
      "url": "https://mp3kulisi.mobi/indir/ahmet-ayverdi/sikir-sikir-oyun-havalari-2016/ahmet-ayverdi-hanonunun-haninda.mp3",
      "cover_art_url": "https://cdn.statically.io/img/mp3kulisi.mobi/h=164,w=164,q=50/detayresim/164/164/mp3resimler/ahmet-ayverdi-sikir-sikir-oyun-havalari-2016.jpg"
    }
  ]
});