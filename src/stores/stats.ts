
import { defineStore } from 'pinia';

export const useStatsStore = defineStore('stats', {
    state: () => ({
        data: {} as StatsResponse,
    }),
    actions: {
    }
});
