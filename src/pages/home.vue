<script setup lang="ts">
import { data } from "@/mock/mockAPI.json";
import { reactive } from "vue";
import { IData } from "@/types";
import Comment from "@/components/Comment.vue";
import CreateComment from "@/components/CreateComment.vue";
import imageUrl from "@/assets/300-16.jpg";

const items: IData[] = reactive(JSON.parse(JSON.stringify(data)));
</script>
<template>
  <main class="container max-w-lg mx-auto my-20 shadow rounded-md">
    <section>
      <!-- Create Comment Component -->
      <CreateComment />
    </section>
    <section class="">
      <div v-for="(item, index) in items" :key="index" class="py-3 border-t">
        <!-- Comment Component -->
        <Comment :item="item" :index="index">
          <div v-if="item.replies.length">
            <!-- re render  Comment for childs Component -->
            <div
              v-for="(reply, i) in item.replies"
              :key="i"
              class="child-item mt-4 border-t py-3"
            >
              <Comment :item="reply" :index="i" :child-mode="true" />
            </div>
          </div>
        </Comment>
      </div>
    </section>
  </main>
</template>
