<template>
  <div style="text-align: center">
    <h2>
        AmazonURLクリーナー
    </h2>
    <v-container >
        <v-text-field label="URLをコピペ" v-model="amazonurl"></v-text-field>
        <h3>↓変換後↓</h3>
        <a :href="cleanurl()">
            {{cleanurl()}}
        </a><br><br>
        <v-btn block v-on:click="copybtn">コピーする!</v-btn>
    </v-container>
  </div>
</template>

<script>
export default {
    name: 'AmazonClean',
    data: () => ({
        amazonurl: ""
    }),
    methods: {
cleanurl: function() {
              return this.amazonurl.replace(/(https:\/\/.*?\/).*dp\/(.*?)\?.*/, function(){return arguments[1] + "dp/" + arguments[2]})
          },
copybtn: function() {
             var copyFrom = document.createElement("textarea");
             copyFrom.textContent = this.cleanurl(this.amazonurl);
             var bodyElm = document.getElementsByTagName("body")[0];
             bodyElm.appendChild(copyFrom);
             copyFrom.select();
             document.execCommand('copy');
             bodyElm.removeChild(copyFrom);
         }
    }
};

</script>
