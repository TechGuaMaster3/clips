<template>
  <v-app>
    <div>
      <div class="container">
        <ais-instant-search
          :search-client="searchClient"
          index-name="tgm3"
        >
          <v-toolbar color="teal" dark>
            <v-icon>fas fa-search</v-icon>
            <v-toolbar-title class="ml-2">搜尋</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <div class="searchtool">
            <ais-search-box placeholder="Search here…" class="container">
              <div slot-scope="{ currentRefinement, refine }">
                <v-text-field
                  label="搜尋片片(標題/剪輯人...)"
                  outline
                  clearable
                  clear-icon="fas fa-times"
                  hide-details
                  prepend-inner-icon="fab fa-algolia"
                  @input="debounce_search(refine,$event)"
                ></v-text-field>
              </div>
            </ais-search-box>
          </div>
          <v-expansion-panels dark>
            <v-expansion-panel expand class="mb-2">
              <v-expansion-panel-header class="teal">
                <i class="fas fa-gamepad"></i>
                <div>遊戲分類</div>
              </v-expansion-panel-header>
              <v-expansion-panel-content
                expand-icon="fas fa-chevron-down"
                class="grey lighten-3 pt-4"
                style="text-align: left;"
              >
                <ais-refinement-list :limit="100" attribute="game_name" />
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
          <ais-hits>
            <v-layout slot-scope="{ items }" wrap class="cliparea">
              <v-flex xs12 sm6 md4 lg3 xl2 v-for="item in items" :key="item.objectID">
                <v-card color="teal lighten-5" class="ma-1 clipcard">
                  <a style="position:relative"
                    :href="item.url" target="_blank">
                    <v-img class="cardimage"
                      :src="item.thumbnail_url"
                      height="200px">
                    </v-img>
                  </a>
                  <v-card-text class="wb">
                    <a :href="item.url" target="_blank">
                      <v-flex xs12 class="font-weight-medium">
                        <ais-highlight :hit="item" attribute="title" />
                      </v-flex>
                    </a>
                    <v-flex xs12>
                      剪輯：
                      <a :href="'https://twitch.tv/'+item.creator_id" target="_blank">
                        {{item.creator_name}}
                      </a>
                    </v-flex>
                    <v-flex xs12>
                      {{ (new Date(item.created_at*1000)).toLocaleString('zh-TW') }}
                    </v-flex>
                    <v-flex xs12>
                      <a :href="`https://www.twitch.tv/directory/game/${encodeURI(item.game_name)}`" target="_blank">
                      {{(item.game_name === null)? "無分類":item.game_name}}
                      </a>
                    </v-flex>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </ais-hits>
          <v-layout class="pagi pt-2 pb-2" wrap align-content-center>
            <v-flex xs12>
              <ais-pagination class="container pa-0">
                <div
                  slot-scope="{
                    currentRefinement,
                    nbPages,
                    refine,
                  }"
                >
                  <v-pagination :length="nbPages" :value="currentRefinement+1" color="teal"
                    @input="pagination(refine,$event)"
                    prev-icon="fas fa-angle-left" next-icon="fas fa-angle-right"></v-pagination>
                </div>
              </ais-pagination>
            </v-flex>
          </v-layout>
        </ais-instant-search>
      </div>
    </div>
  </v-app>
</template>

<script>
import algoliasearch from 'algoliasearch/lite';
import 'instantsearch.css/themes/algolia-min.css';
import { debounce } from 'debounce';

export default {
  name: 'App',
  data() {
    return {
      searchClient: algoliasearch(
        'GYNWXGM337',
        'a9e56d5dc3f23f3a3ba7b90371115701',
      ),
    };
  },
  filters: {
    timetz(value) {
      if (!value) {
        return '';
      }
      return value.replace('T', ' ').replace('Z', ' ');
    },
  },
  methods: {
    test(e) {
      console.log(e);
    },
    pagination(func, val) {
      func(val - 1);
    },
    search(func, text) {
      if (!text) {
        func('');
      } else {
        func(text);
      }
    },
  },
  created() {
    this.debounce_search = debounce(this.search, 1000);
  },
};
</script>

<style lang="scss">
@import url(https://fonts.googleapis.com/earlyaccess/notosanstc.css);
* {
    font-family: 'Noto Sans TC';
}
body,
html {
  margin: 0;
  padding: 0;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 1.2rem;
  color: #2c3e50;
  background-color: #80CBC4;
  padding-bottom: 50px;
}
.v-application {
  .searchtool{
    background-color: #B2DFDB;
    padding: 5px;
    margin-bottom: 2%;
  }
  .cliparea{
    padding-top:2%;
    padding-bottom:2%;
    background-color: #B2DFDB;
  }
  .pagi{
    width:100%;
    position: fixed;
    z-index: 10;
    bottom: 0;
    left:0;
    background: rgba(30, 31, 28, 0.9);
  }
  .clipcard{
    height:98% !important;
    overflow: hidden;
  }
  .wb{
    text-align: left;
    word-break: break-all;
    font-size: 1rem;
    color: rgba(0,0,0,.87);
  }
  .wb a{
    color:#1D1F1F;
    text-decoration: none;
  }
  .wb a:hover{
    color:#1D1F1F;
    text-decoration: underline;
  }
  .v-image__image{
    z-index:3;
  }
  .cardimage::after{
    position: absolute;
    z-index:2;
    width:100%;
    height:100%;
    content:"";
    background: url('https://static-cdn.jtvnw.net/ttv-static/404_preview-320x180.jpg') center center / cover no-repeat;
  }
  .ais-RefinementList-labelText{
    margin: 0 5px;
  }
  .ais-RefinementList-list{
    display: flex;
    flex-wrap: wrap;
  }
  .ais-RefinementList-item {
    display: flex;
    align-items: center;
    width: 50%;
    margin-bottom: 5px;
    padding-right: 10px;
  }
  .ais-RefinementList-label{
    display: flex;
    align-items: center;
  }
  .ais-RefinementList-checkbox {
    position: relative;
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    -webkit-appearance: none;
    border: #009688 1px solid;
    border-radius: 4px;
    &::before {
      content: "✔";
      position: absolute;
      font-size: 1.1em;
      right: 0.2em;
      top: -0.2em;
      color: white;
      visibility: hidden;
    }
    &:checked{
      background-color: #009688;
      &::before{
        visibility: visible !important;
      }
    }
    &:focus{
      outline: none;
    }
  }
  mark {
      background-color: #80CBC4;
      color: #000;
  }
}
</style>
