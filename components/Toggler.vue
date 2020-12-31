<template>
  <label class="switch">
    <input type="checkbox" @click="toggler" />
    <span class="slider round"></span>
  </label>
</template>

<script>
export default {
  name: "Toggler",
  methods: {
    toggler() {
      if (document.getElementById("app").className == "--dark") {
        document.getElementById("app").className = "light";
        document.getElementById('navbar').className = 'navbar'
      } else {
        document.getElementById("app").className = "--dark";
        document.getElementById('navbar').className = 'navbar --dark'
      }
    }
  }
};
</script>

<style lang="scss">
.switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 36px;
  outline: none;
  border: none;

  input {
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
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 5px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #0fb85a;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #0fb85a;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(18px);
    -ms-transform: translateX(18px);
    transform: translateX(18px);
  }

  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
}
</style>
