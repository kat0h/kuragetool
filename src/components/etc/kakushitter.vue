<template>
    <div style="text-align: center">
        <h4>
        隠しtter(デコーダー)
        </h4>
        {{encodedText()}}
    </div>
</template>

<script>
function b64_to_utf8(str) {
    return decodeURIComponent(escape(window.atob(str)));
}
export default {
    name: 'Kakushitter',
    data: () => ({
    }),
    methods: {
        encodedText: function () {
            return b64_to_utf8(location.href.match(/\?txt=(.*)/)[1])
        }
    },
}

</script>
