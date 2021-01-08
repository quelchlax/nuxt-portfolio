<template>
  <label class="switch">
    <input class="checkbox" type="checkbox" @click="toggler" />
    <span class="slider round"></span>
  </label>
</template>

<script>
import {toggler} from "@/middleware/switch";
export default {
  name: "Toggler",
  methods: {
    toggler
  }
};
</script>

<style lang="scss">
.switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 34px;
  outline: none;
  border: none;

  .checkbox {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;

    &:before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }

    &.round {
      border-radius: 34px;
    }

    &.round:before {
      border-radius: 50%;
    }
  }

  input:checked + .slider {
    background-color: #6c44c4;
  }

  input:checked + .slider:before {
    transform: translateX(17px);
  }
}
</style>
