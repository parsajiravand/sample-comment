<script lang="ts">
import { defineComponent } from "vue";
import CreateComment from "@/components/CreateComment.vue";
import { dateCalc } from "@/utils";
import imageUrl from "@/assets/300-16.jpg";
import likeImage from "@/assets/like.png";

import { ref } from "@vue/reactivity";

export default defineComponent({
  props: {
    item: {
      type: Object,
      required: true,
      default: {},
    },
    index: {
      type: Number,
      required: true,
      default: 0,
    },
    childMode: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  components: { CreateComment },
  setup() {
    const replayItemIndex = ref<null | number>(null);

    function showReplayItem(index: number) {
      if (index === replayItemIndex.value) {
        replayItemIndex.value = null;
      } else {
        replayItemIndex.value = index;
      }
    }
    return {
      showReplayItem,
      replayItemIndex,
      dateCalc,
      imageUrl,
      likeImage,
    };
  },
});
</script>

<template>
  <div class="comments flex flex-row px-2">
    <div class="col-span-1">
      <img
        :src="item.user.avatar ? item.user.avatar : imageUrl"
        class="avatar w-20 h-w-20 rounded-full"
        :alt="item.user.avatar"
      />
      <div
        v-show="childMode ? item.replies?.length : false"
        class="max-h-fit border-l h-5/6 ml-5 mt-3"
      ></div>
    </div>
    <div class="col-auto mx-2">
      <div>
        <span class="name font-bold mx">
          {{ item.user.name }}
        </span>
        <span class="time text-gray-400 text-sm mx-2">
          {{ dateCalc(item.date) }}
        </span>
      </div>
      <p class="text-sm text-gray-500 my-2">
        {{ item.text }}
      </p>
      <div class="flex flex-row items-center">
        <div
          class="py-1 px-2 bg-gray-100 flex flex-row rounded-xl cursor-pointer hover:bg-blue-500 hover:text-white"
          :class="item.iLikedIt ? 'bg-blue-500 text-white' : ''"
          @click="
            item.iLikedIt === false
              ? [item.likes++, (item.iLikedIt = true)]
              : [item.likes--, (item.iLikedIt = false)]
          "
        >
          <img :src="likeImage" alt="" class="w-4 h-4 my-auto" />
          <span class="mx-1">{{ item.likes }}</span>
        </div>
        <span
          v-if="!childMode"
          class="text-blue-500 cursor-pointer font-semibold text-sm mx-2"
          @click="showReplayItem(index)"
          >Replay</span
        >
      </div>
      <section>
        <slot />
      </section>

      <section v-if="replayItemIndex === index">
        <section class="mt-2">
          <CreateComment />
        </section>
      </section>
    </div>
  </div>
</template>
