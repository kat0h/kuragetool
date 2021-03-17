<template>
    <div>
        <v-container style="text-align: center">
            <h1>
                隠しtter
            </h1>
            <v-textarea
            filled
            label="隠す文章を入力"
            auto-grow
            v-model="inputText"
            ></v-textarea>
            <h3>↓変換後↓</h3>
            <a :href="makeurl()" target="_blank">
                文章を確める(新しいタブを開く)
            </a><br><br>
            <v-btn block v-on:click="copybtn">コピーする</v-btn>
        </v-container>
        <v-container>
            <h3>
                隠しtterとは？
            </h3>
            <div>
                ふせったーのように好きな文章をネタバレを防ぎながら共有できるサービスです。<br>
                文章を一目でわからない形式に、ブラウザ上で変換するため、データがサーバーに送られることは一切ありません。<br>
            </div>
            <h3>
                使い方
            </h3>
            <div>
                隠したい文章を入力し、コピーボタンを押すことでTwitterに貼り付けられるURLをコピーできます。<br>
                コピーされたリンクをTwitterに貼り付けることで文章を共有できます。<br>
            </div>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'Kakushitter',
    data: () => ({
        inputText: ""
    }),
    methods: {
        utf8_to_b64: function(str) {
            return window.btoa( unescape(encodeURIComponent(str)));
        },
        makeurl: function() {
            return window.location.origin + "/#/etc/kakushitter?txt=" + encodeURIComponent(this.utf8_to_b64(this.inputText))
        },
        copybtn: function() {
            var copyFrom = document.createElement("textarea");
            copyFrom.textContent = this.makeurl(this.amazonurl);
            var bodyElm = document.getElementsByTagName("body")[0];
            bodyElm.appendChild(copyFrom)
            copyFrom.select();
            document.execCommand('copy');
            bodyElm.removeChild(copyFrom);
        }
    },
}

</script>
