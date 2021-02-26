<template>
  <div>
    <h1>このサイトについて</h1>
    <ol>
      <li v-for="l in d" :key="l.title">
        {{ l.title }}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  data: () => ({
    d: [
    {title: "unko", ind: "u"},
    {title: "unko2", ind: "i"},
    ]
  }),
};
</script>
