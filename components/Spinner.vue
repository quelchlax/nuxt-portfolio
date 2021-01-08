<template>
  <div class="is-loading container">
    <div class="loader"></div>
  </div>
</template>

<style lang="scss">
.loading {
  .subtitle {
    text-align: center;
    margin-bottom: 16px;
  }
}

.is-loading {
  display: flex;
  justify-content: center;
}

.loader {
  border: 16px solid #0a1117;
  border-radius: 50%;
  border-top: 16px solid #008cf6;
  width: 80px;
  height: 80px;
  -webkit-animation: spin 1s linear infinite; /* Safari */
  animation: spin 1s linear infinite;
}

@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
