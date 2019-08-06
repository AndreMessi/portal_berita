<template>
  <div class="container">
    <div class="row">
      <div class="col-md-9">
        <!--  v-for=" article in articles" :key="article.id" -->
        <div class="row mb-2">
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
                         <h5>Persaingan Juara Liga Inggris Memang Sengit, tapi Takkan Ada Keajaiban</h5>
                        <!-- <h5>{{ articles.title }}</h5> -->
                      </a>
                    </div>
                    <div class="news-cats">
                      <ul class="list-unstyled list-inline mb-1">
                        <li class="list-inline-item">
                          <i class="fa fa-folder-o text-danger"></i>
                          <a href="#">
                            <small>Sport</small>
                          </a>
                        </li>
                        <li class="list-inline-item">
                          <i class="fa fa-folder-o text-danger"></i>
                          <a href="#">
                             <small>Andre_Putra</small>
                            <!-- <small>{{ articles.author }}</small> -->
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
                      <p>Manchester City dan Liverpool masih bersaing sengit di Liga Inggris musim ini. Kendati demikian, takkan ada keajaiban di pekan pamungkas Premier League.</p>
                      <!-- <p>{{ articles.description }}</p> -->
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
                      src="https://akcdn.detik.net.id/community/media/visual/2019/05/08/6ab23179-72c4-4716-965d-7c3912f2a65f_169.jpeg?w=700&q=80"
                    >
                  </div>
                  <div class="col-md-8">
                    <div class="news-title">
                      <a href="#">
                        <h5>Ronaldo: Kenapa Jika Barcelona Kalah, Messi Tak Pernah Disalahkan?</h5>
                      </a>
                    </div>
                    <div class="news-cats">
                      <ul class="list-unstyled list-inline mb-1">
                        <li class="list-inline-item">
                          <i class="fa fa-folder-o text-danger"></i>
                          <a href="#">
                            <small>Sport</small>
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
                      <p>Barcelona gagal ke final Liga Champions setelah didepak Liverpool. Ronaldo Luis Nazario de Lima mempertanyakan soal Lionel Messi yang hampir tak kena kritik</p>
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
                      src="https://akcdn.detik.net.id/community/media/visual/2019/05/09/18df86b8-5339-4125-8605-5898735d98b6_169.jpeg?w=700&q=80"
                    >
                  </div>
                  <div class="col-md-8">
                    <div class="news-title">
                      <a href="#">
                        <h5>Mimpi Buruk Ajax Amsterdam di Menit 96</h5>
                      </a>
                    </div>
                    <div class="news-cats">
                      <ul class="list-unstyled list-inline mb-1">
                        <li class="list-inline-item">
                          <i class="fa fa-folder-o text-danger"></i>
                          <a href="#">
                            <small>Sport</small>
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
                      <p>Tiket final Liga Champions itu ada di tangan Ajax Amsterdam sampai menit 95. Tapi gara-gara Lucas Moura, mimpi buruk yang datang ke Godenzonen pada menit 96</p>
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
                      src="https://akcdn.detik.net.id/community/media/visual/2019/05/03/1d9cca22-b632-43a7-b0bf-99f5f33e0a1f_169.jpeg?w=700&q=80"
                    >
                  </div>
                  <div class="col-md-8">
                    <div class="news-title">
                      <a href="#">
                        <h5>Valencia Menggali Inspirasi dari Liverpool untuk Singkirkan Arsenal</h5>
                      </a>
                    </div>
                    <div class="news-cats">
                      <ul class="list-unstyled list-inline mb-1">
                        <li class="list-inline-item">
                          <i class="fa fa-folder-o text-danger"></i>
                          <a href="#">
                            <small>Sport</small>
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
                      <p>Valencia harus membalikkan keadaan atas Arsenal di semifinal Liga Europa. Valencia berharap bisa mengambil inspirasi dari Liverpool untuk mencapai final.</p>
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
</template>

<script>
import axios from 'axios'

export default {
  data (){
    return{
      articles : []
    }
  },

  methods:{
    async load(){
      /*const response = await axios.get('https://newsapi.org/v2/top-headlines?country=id&category=sports&apiKey=9a5fe7e8155346c8b41a986035969021')
      this.articel = response.articles */
    }
  },

   async mounted() {
     //this.load()
  }
};
</script>

<style>
img {
  width: 100%;
}
h5,
.h5 {
  font-size: 1.171875rem;
  text-align: left;
}
.mb-1,
.my-1 {
  margin-bottom: 0.25rem !important;
  text-align: left;
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
</style>
