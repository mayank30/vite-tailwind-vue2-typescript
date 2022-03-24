<template>
  <div class="hello">
    <h1 class="text-3xl text-blue-800 mt-6 mb-6">
      {{ msg }}
    </h1>
    <img
      src="data:image/png;base64,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"
      height="80px"
    />
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
          target="_blank"
          rel="noopener"
          >babel</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router"
          target="_blank"
          rel="noopener"
          >router</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex"
          target="_blank"
          rel="noopener"
          >vuex</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
          target="_blank"
          rel="noopener"
          >eslint</a
        >
      </li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank" rel="noopener"> Forum </a>
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a>
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a>
      </li>
      <li>
        <a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a>
      </li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li>
        <a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a>
      </li>
      <li>
        <a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-devtools#vue-devtools"
          target="_blank"
          rel="noopener"
          >vue-devtools</a
        >
      </li>
      <li>
        <a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener"
          >vue-loader</a
        >
      </li>
      <li>
        <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener"
          >awesome-vue</a
        >
      </li>
    </ul>
    <h3>Env Variable</h3>
    <pre>{{ env }}</pre>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      env: import.meta.env,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
pre {
  @apply bg-gray-100 p-5 rounded-lg;
}
h3 {
  @apply mt-6 text-lg;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  @apply text-blue-500;
}
</style>
