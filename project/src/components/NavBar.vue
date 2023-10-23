<template>
  <div class="nav">
    <div
    class="navShell">
      <button @click="pastPage">Go Back</button>
      <button @click="nextPage">Next Page</button>
    </div>
  </div>
</template>

<script>
import { usePageInfoStore } from "@/stores/PageInfo";
import { storeToRefs } from "pinia";

name: "NavBar", setup();
{
  const pageInfoStore = usePageInfoStore();
  const { pages } = storeToRefs(pageInfoStore);
  return {
    pageInfoStore,
    pages,
  };
}
</script>