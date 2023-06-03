
<script setup>
defineProps({
    pharmacy: {
    type: Object,
    default: () => ({}),
  },
  
})
</script>

<template>
    <RouterLink
      :to="`/pharmacy/${pharmacy.imdbID}`"
      :style="{ backgroundImage: `url(${pharmacy.Poster})` }"
      class="pharmacy"
    >
      <div class="info">
        <div class="place-name">
          {{ pharmacy.placeName }}
        </div>
        <div class="address">
          {{ pharmacy.address }}
        </div>
      </div>
    </RouterLink>
  </template>

<style lang="scss" scoped>
@import "../scss/main.scss";
.pharmacy {
  $width: 168px;
  width: $width;
  height: calc($width * 3 / 2);
  margin: 10px;
  border-radius: 4px;
  background-color: $gray-400;
  background-size: cover;
  overflow: hidden;
  position: relative;
  &:hover::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border: 6px solid $primary;
  }
  .info {
    background-color: rgba($black, 0.3);
    width: 100%;
    padding: 14px;
    font-size: 14px;
    text-align: center;
    position: absolute;
    left: 0;
    bottom: 0;
    backdrop-filter: blur(10px);
    .address {
      color: $primary;
    }
    .place-name {
      color: $white;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>