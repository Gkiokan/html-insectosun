<template lang="html">
<div class='top_header shadow-8'>
    <div class='background' :style="{ backgroundImage: 'url(' + image + ')' }" />
    <div class='overlay'>
        <div />
        <div />
        <div />
    </div>
    <h1 class="title" v-if="title">
        <div>{{ title }}</div>
        <div class="sub" v-if="sub">{{ sub }}</div>
    </h1>
</div>
</template>

<script>
export default {
  name: 'TopHeader',

  props: {
      image: {},
      title: {},
      sub: {}
  }
}
</script>

<style lang="scss" scoped>
.top_header {
  // height: 0px;
  // padding-bottom: 56.25%;
  position: relative;
  height: 600px;

  .background {
      content: '';
      position: absolute; z-index: 3;
      top: 0px; left: 0px; right: 0px; bottom: 0px;
      background: center center;
      background-size: cover;
  }

  .overlay {
    position: absolute; z-index: 4;
    top: 0px; bottom: 0px; left: 0px; right: 0px;
    overflow: hidden;

    > div {
        position: absolute; z-index: 5;
        top: -10%; left: 2%;
        margin-left: 0%;
        height: 120%;
        width: 200px;
        background: white;
        opacity: .6;
        margin-right: 20px;
        transform: rotate(20deg);

        &:nth-child(2){
            left: 4%;
        }

        &:nth-child(3){
            left: 6%;
        }
    }
  }

  h1 {
    position: relative; z-index: 10;
    display: inline-block;
    font-weight: bold;
    padding: 10px 40px;

    .sub {
        font-size: 40%;
        font-weight: 400;
        margin: 0px;
        padding-left: 80px;
        line-height: 1.5;
    }
  }
}
</style>
