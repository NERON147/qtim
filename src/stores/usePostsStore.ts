import { defineStore } from 'pinia';
import type {IPost} from '../types/posts';

export const usePostsStore = defineStore('posts', {
  state: () => ({
  }),

  actions: {
    async fetchPosts() {
      try {
        const { data } = await useAsyncData<IPost[]>(() => fetch('https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts').then(res => res.json()));
        return data.value;
      } catch (err: unknown) {
        if (err instanceof Error) {
          return err.message;
        }
        return 'Unknown error';
      }
    },
    async fetchSinglePost(id: string | string[]) {
      try {
        const { data } = await useAsyncData<IPost[]>(() => fetch(`https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/${id}`).then(res => res.json()));
        return data.value;
      } catch (err: unknown) {
        if (err instanceof Error) {
          return err.message;
        }
        return 'Unknown error';
      }
    },
  }
});