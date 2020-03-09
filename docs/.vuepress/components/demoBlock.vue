<template>
  <div class="example">
    <div class="example-case">
      <slot name="source"></slot>
    </div>
    <div class="example-code">
      <div class="highlight">
        <slot name="highlight"></slot>
      </div>
      <div class="example-code-more" @click="changeCode">
        <span>{{showCode?'隐藏':'显示'}}代码</span>
      </div>
    </div>
  </div>
</template>

<script>
import showSrcCode from "show-src-code";
export default {
  name: "",
  components: {
    showSrcCode
  },
  data() {
		return {
			showCode: false,
			lsHeight: 0,
			ready: false
		}
  },
  mounted() {
		let vm = this
		vm.$nextTick(() => {
			let highlight = this.$el.getElementsByClassName('highlight')[0]
			if (vm.showCode) {
				highlight.style.height = 'auto'
			} else {
				highlight.style.height = 0
			}
		})
	},
  computed: {
		codeHeight() {
			let style = {
				height: `${this.lsHeight}px`
			}
			return style;
		}
	},
  methods: {
		changeCode() {
			let vm = this
			vm.showCode = !vm.showCode
			let highlight = this.$el.getElementsByClassName('highlight')[0]
			if (vm.showCode) {
				highlight.style.height = 'auto'
			} else {
				highlight.style.height = 0
			}
		}
	}
};
</script>
<style scoped>
.example {
  border: 1px solid #eee;
  border-radius: 6px;
  margin-bottom: 20px;
  transition: all 0.2s ease-in-out;
}
.example-case {
  padding: 40px;
}
.highlight {
  padding: 10px;
  padding-bottom: 0px;
  overflow: hidden;
}
.example-code-more {
  color: #409eff;
  background-color: #f9fafc;
  height: 44px;
  line-height: 44px;
  font-size: 14px;
  border-top: 1px solid #eee;
  text-align: center;
  cursor: pointer;
}
</style>