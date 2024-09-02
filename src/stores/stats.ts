
import { defineStore } from 'pinia';

export const useStatsStore = defineStore('stats', {
    state: () => ({
        data: null as StatsResponse,
    }),
    actions: {
    }
});
