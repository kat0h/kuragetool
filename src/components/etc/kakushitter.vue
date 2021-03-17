<template>
    <v-container>
        <h5>
            隠しtter(デコーダー)
        </h5>
        <div style="white-space: pre-wrap;">{{decodedText}}</div>
    </v-container>
</template>

<script>
function b64_to_utf8(str) {
    return decodeURIComponent(escape(window.atob(decodeURIComponent(str))));
}
function decodeText() {
    return b64_to_utf8(location.href.match(/\?txt=(.*)/)[1])
}
export default {
    name: 'Kakushitter',
    data: () => ({
        decodedText: decodeText()
    }),
    methods: {
    },
}

</script>
