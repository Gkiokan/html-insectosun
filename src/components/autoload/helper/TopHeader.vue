<template lang="html">
<div class='top_header shadow-8'>
    <div class='background' :style="{ backgroundImage: 'url(' + image + ')' }">

    </div>
    <div class='overlay'>
        <div />
        <div />
        <div />
    </div>    

    <h1 class="title">
        <slot />
        <div v-if="title">{{ title }}</div>
        <div class="sub" v-if="sub">{{ sub }}</div>
    </h1>

    <slot name="bg" />
</div>
</template>

<script>
export default {
  name: 'TopHeader',

  props: {
      image: {},
      title: {},
      sub: {}
  },

  data(){ return {
        videoURL: 'https://player.vimeo.com/video/903252728?h=08ce33fdce',
  }}
}
</script>

<style lang="scss" scoped>
.top_header {
  // height: 0px;
  // padding-bottom: 56.25%;
  position: relative;
  height: 800px;

  &.extended {
    // overflow: hidden;
    height: auto;
    // min-height: calc((100vw / 16 * 9) - 50px);

  }

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

  h1.title {
    position: relative; z-index: 10;
    top: 0px; left: 0px;
    display: inline-block;
    font-weight: bold;
    padding: 10px 40px;
    border-radius: 0px 12px 12px 0px !important;

    .sub {
        font-size: 40%;
        font-weight: 400;
        margin: 0px;
        padding-left: 80px;
        line-height: 1.5;
    }

    @media (max-width: 1024px){
        font-size: 4rem;

        .sub {
          padding-left: 40px;
        }
    }

    @media (max-width: 768px){
        font-size: 3rem;
    }
  }
}
</style>
