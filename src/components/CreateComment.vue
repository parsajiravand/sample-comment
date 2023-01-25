<script lang="ts">
import { defineComponent } from "vue";
import imageUrl from "@/assets/300-16.jpg";

export default defineComponent({
  setup() {
    return {
      imageUrl,
    };
  },
});
</script>
<template>
  <div class="create-comment bg-gray-50 flex flex-row items-center px-2 py-4">
    <div class="col-span-1">
      <img
        :src="imageUrl"
        class="avatar w-12 h-w-12 rounded-full"
        alt="profile"
      />
    </div>
    <div class="col-auto mx-2 w-full">
      <input
        type="text"
        class="border border-gray-300 bg-white text-sm rounded-sm w-full focus:border-gray-50 p-2.5"
        placeholder="Start a discussion "
        required
      />
    </div>
  </div>
</template>
