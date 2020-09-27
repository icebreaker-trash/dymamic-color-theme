<template>
  <div id="app">
    <div>我是div</div>
    <span>我是span</span>
    <button>问我是按钮</button>
    随便选个主色
    <VSwatches v-model="colorProxy" />
  </div>
</template>

<script>
import VSwatches from 'vue-swatches'
import 'vue-swatches/dist/vue-swatches.css'
const defaultColor = `#2c3e50`
export default {
  name: 'App',
  components: { VSwatches },
  data() {
    return {
      color: '#2c3e50',
    }
  },
  computed: {
    colorProxy: {
      get() {
        return this.color
      },
      set(nv) {
        this.replaceStyle(nv)
        this.color = nv
      },
    },
  },
  methods: {
    appendStyle() {
      let dom
      if (this.cacheDom) {
        dom = this.cacheDom
      } else {
        dom = document.createElement('style')
        this.cacheDom = dom
      }
      dom.innerText = `#app{color: ${defaultColor};}`
      document.head.appendChild(this.cacheDom)
    },
    replaceStyle(color) {
      this.cacheDom.innerText = `#app{color: ${color};}`
    },
  },
  mounted() {
    this.appendStyle()
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
