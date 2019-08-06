<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="include-wrapper pb-5 col-12">
          <div class="container">
            <div class="row">
              <div class="col-12 col-sm-6 col-md-4 image-grid-item">
                <div
                  style="background-image: url(https://img.okezone.com/content/2019/05/09/261/2053325/spurs-comeback-dramatis-pochettino-terima-kasih-sepakbola-sTQVp0FgI2.jpg);"
                  class="image-grid-cover"
                >
                  <a href="#" class="image-grid-clickbox"></a>
                  <a href="#" class="cover-wrapper" @click="$router.push({name: 'sport'})">Sport</a>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-md-4 image-grid-item">
                <div
                  style="background-image: url(https://cdn.detik.net.id/food/images/ramadan/spesial-ramadan.png?v=9dc50fbf);"
                  class="entry-cover image-grid-cover has-image"
                >
                  <a href="#" class="image-grid-clickbox"></a>
                  <a href="#" class="cover-wrapper" @click="$router.push({name: 'food'})">Food and Drink</a>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-md-4 image-grid-item">
                <div
                  style="background-image: url(https://ei.marketwatch.com/Multimedia/2018/11/22/Photos/ZH/MW-GY949_travel_20181122135819_ZH.jpg?uuid=93b13006-ee88-11e8-a75d-ac162d7bc1f7);"
                  class="entry-cover image-grid-cover has-image"
                >
                  <a href="#" class="image-grid-clickbox"></a>
                  <a href="#" class="cover-wrapper" @click="$router.push({name: 'travell'})">Tour and Travel</a>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-md-4 image-grid-item">
                <div
                  style="background-image: url(https://da10vrrz5y73b.cloudfront.net/wp-content/uploads/2017/12/indonesia_culture-825x385.jpg);"
                  class="entry-cover image-grid-cover has-image"
                >
                  <a href="#" class="image-grid-clickbox"></a>
                  <a href="#" class="cover-wrapper" @click="$router.push({name: 'social'})">Culture</a>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-md-4 image-grid-item">
                <div
                  style="background-image: url(https://cdn.shanghai.nyu.edu/sites/default/files/styles/content_page_slideshow_display/public/field/image/finance.jpg?itok=7lFZi55t);"
                  class="entry-cover image-grid-cover has-image"
                >
                  <a href="#" class="image-grid-clickbox"></a>
                  <a href="#" class="cover-wrapper" @click="$router.push({name: 'finance'})">Finance</a>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-md-4 image-grid-item">
                <div
                  style="background-image: url(https://img.okezone.com/content/2019/04/09/337/2040860/agama-politik-NILLmitmID.jpeg);"
                  class="entry-cover image-grid-cover has-image"
                >
                  <a href="#" class="image-grid-clickbox"></a>
                  <a href="#" class="cover-wrapper" @click="$router.push({name: 'politik'})">Politik</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-9">
          <div class="row mb-2" v-for="user in users" :key="user.id">
            <div class="col-md-12">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-4">
                      <img
                        src="https://akcdn.detik.net.id/community/media/visual/2019/04/26/bba7ad6c-4399-4a9f-b850-e04b2263ca8b_43.jpeg?w=700&q=80"
                      >
                    </div>
                    <div class="col-md-8">
                      <div class="news-title">
                        <a href="#">
                          <h5>{{user.tittle}}</h5>
                        </a>
                      </div>
                      <div class="news-cats">
                        <ul class="list-unstyled list-inline mb-1">
                          <li class="list-inline-item">
                            <i class="fa fa-folder-o text-danger"></i>
                            <a href="#">
                              <small>{{user.category}}</small>
                            </a>
                          </li>
                          <li class="list-inline-item">
                            <i class="fa fa-folder-o text-danger"></i>
                            <a href="#">
                              <small>{{user.author}}</small>
                            </a>
                          </li>
                          <li class="list-inline-item">
                            <i class="fa fa-folder-o text-danger"></i>
                            <a href="#">
                              <small>{{user.tgl_posting}}</small>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="news-content">
                        <p>{{user.description}}</p>
                      </div>
                      <div class="news-buttons">
                        <button
                          type="button"
                          class="btn btn-outline-danger btn-sm"
                          @click="$router.push({name: 'details'})"
                        >Read More</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
         <!--  <div class="row mb-2">
            <div class="col-md-12">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-4">
                      <img
                        src="https://akcdn.detik.net.id/community/media/visual/2019/05/09/3426c055-7361-4ad7-a3c0-27707cd12b8b.jpeg?w=700&q=80"
                      >
                    </div>
                    <div class="col-md-8">
                      <div class="news-title">
                        <a href="#">
                          <h5>Bank Mandiri Siapkan Dana Rp 54,9 T Selama Ramadan</h5>
                        </a>
                      </div>
                      <div class="news-cats">
                        <ul class="list-unstyled list-inline mb-1">
                          <li class="list-inline-item">
                            <i class="fa fa-folder-o text-danger"></i>
                            <a href="#">
                              <small>Finance</small>
                            </a>
                          </li>
                          <li class="list-inline-item">
                            <i class="fa fa-folder-o text-danger"></i>
                            <a href="#">
                              <small>Andre_Putra</small>
                            </a>
                          </li>
                          <li class="list-inline-item">
                            <i class="fa fa-folder-o text-danger"></i>
                            <a href="#">
                              <small>7 Mei 2019</small>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="news-content">
                        <p>Bank Mandiri menyiapkan dana tunai sebesar Rp 54,9 triliun. Dana ini dipersiapkan selama bulan Ramadan dan menjelang Idul Fitri</p>
                      </div>
                      <div class="news-buttons">
                        <button
                        type="button"
                        class="btn btn-outline-danger btn-sm"
                        @click="$router.push({name: 'details'})"
                      >Read More</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row mb-2">
            <div class="col-md-12">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-4">
                      <img
                        src="https://akcdn.detik.net.id/community/media/visual/2019/05/09/660b5a0c-7107-404e-a01f-df78b63c1fb8.jpeg?w=700&q=90"
                      >
                    </div>
                    <div class="col-md-8">
                      <div class="news-title">
                        <a href="#">
                          <h5>Inspiratif! Pengusaha Kafe Ini Pekerjakan Difabel Sebagai Barista hingga Kasir</h5>
                        </a>
                      </div>
                      <div class="news-cats">
                        <ul class="list-unstyled list-inline mb-1">
                          <li class="list-inline-item">
                            <i class="fa fa-folder-o text-danger"></i>
                            <a href="#">
                              <small>Food and Drink</small>
                            </a>
                          </li>
                          <li class="list-inline-item">
                            <i class="fa fa-folder-o text-danger"></i>
                            <a href="#">
                              <small>Andre_Putra</small>
                            </a>
                          </li>
                          <li class="list-inline-item">
                            <i class="fa fa-folder-o text-danger"></i>
                            <a href="#">
                              <small>7 Mei 2019</small>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="news-content">
                        <p>Usia kafe ini memang baru sebulan tapi antusiasme pengunjungnya membludak tak terbendung. Ternyata para pegawai di kafe ini adalah orang-orang difabel</p>
                      </div>
                      <div class="news-buttons">
                        <button
                        type="button"
                        class="btn btn-outline-danger btn-sm"
                        @click="$router.push({name: 'details'})"
                      >Read More</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row mb-2">
            <div class="col-md-12">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-4">
                      <img
                        src="https://akcdn.detik.net.id/community/media/visual/2019/05/09/7a612c38-6e22-4f5f-afc3-afc3da70cf22.jpeg?w=700&q=90"
                      >
                    </div>
                    <div class="col-md-8">
                      <div class="news-title">
                        <a href="#">
                          <h5>Muslimnesia Ingin Jadi Aplikasinya Para Muslim Milenial</h5>
                        </a>
                      </div>
                      <div class="news-cats">
                        <ul class="list-unstyled list-inline mb-1">
                          <li class="list-inline-item">
                            <i class="fa fa-folder-o text-danger"></i>
                            <a href="#">
                              <small>Teknologi</small>
                            </a>
                          </li>
                          <li class="list-inline-item">
                            <i class="fa fa-folder-o text-danger"></i>
                            <a href="#">
                              <small>Andre_Putra</small>
                            </a>
                          </li>
                          <li class="list-inline-item">
                            <i class="fa fa-folder-o text-danger"></i>
                            <a href="#">
                              <small>7 Mei 2019</small>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="news-content">
                        <p> Kebutuhan informasi muslim muda modern Indonesia tumbuh kian besar seiring dengan meningkatnya antusiasme mendalami ajaran Islam yang dimulai sejak usia muda</p>
                      </div>
                      <div class="news-buttons">
                        <button
                        type="button"
                        class="btn btn-outline-danger btn-sm"
                        @click="$router.push({name: 'details'})"
                      >Read More</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> -->
        </div>
        <div class="col-md-3">
          <div class="row mb-2">
            <div class="col-md-12">
              <div class="card">
                <div class="row">
                  <div class="col-md-12">
                    <div class="card">
                      <div class="card-body">
                        <h5>Categories</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="list-group">
                  <a href="#" class="list-group-item list-group-item-action">Sport</a>
                  <a href="#" class="list-group-item list-group-item-action">Travell</a>
                  <a href="#" class="list-group-item list-group-item-action">Finance</a>
                  <a href="#" class="list-group-item list-group-item-action">Politik</a>
                  <a href="#" class="list-group-item list-group-item-action">Social</a>
                  <a href="#" class="list-group-item list-group-item-action">Food</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data(){
    return{
      users: []
    }
  },
  methods: {
    load(){
        axios.get('http://localhost:3000/berita').then(res => {
        this.users = res.data 
      }).catch ((err) => {
        console.log(err);
      })
    }
   },

  mounted(){
    this.load()
  }
};
</script>

<style>
img {
  width: 100%;
}
.b-0 {
  bottom: 0;
}
.bg-shadow {
  background: rgba(76, 76, 76, 0);
  background: -webkit-gradient(
    left top,
    left bottom,
    color-stop(0%, rgba(179, 171, 171, 0)),
    color-stop(49%, rgba(48, 48, 48, 0.37)),
    color-stop(100%, rgba(19, 19, 19, 0.8))
  );
  background: linear-gradient(
    to bottom,
    rgba(179, 171, 171, 0) 0%,
    rgba(48, 48, 48, 0.71) 49%,
    rgba(19, 19, 19, 0.8) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#4c4c4c', endColorstr='#131313', GradientType=0 );
}
.top-indicator {
  right: 0;
  top: 1rem;
  bottom: inherit;
  left: inherit;
  margin-right: 1rem;
}
.overflow {
  position: relative;
  overflow: hidden;
}
.zoom img {
  transition: all 0.2s linear;
}
.zoom:hover img {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
p {
  margin-top: 0;
  margin-bottom: 1rem;
  text-align: left;
}
*,
*::before,
*::after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  text-align: left;
}
.h2,
.h3,
.h4,
.h5,
.h6 {
  margin-bottom: 0.5rem;
  font-weight: 300;
  line-height: 1.2;
  text-align: left;
}
.text-light {
  color: #f8f9fa !important;
  text-align: left;
}
.image-grid-cover {
  width: 100%;
  background-size: cover;
  min-height: 180px;
  position: relative;
  margin-bottom: 30px;
  text-shadow: rgba(0, 0, 0, 0.8) 0 1px 0;
  border-radius: 4px;
}
.image-grid-clickbox {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  z-index: 20;
  background: rgba(0, 0, 0, 0.45);
}
.cover-wrapper {
  font-size: 18px;
  text-align: center;
  display: block;
  color: #fff;
  text-shadow: rgba(0, 0, 0, 0.8) 0 1px 0;
  z-index: 21;
  position: relative;
  top: 80px;
}
a,
a:focus,
a:hover {
  text-decoration: none;
  outline: 0;
}
</style>
