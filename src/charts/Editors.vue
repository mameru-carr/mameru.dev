<template lang="pug">
VChart(:option="option" autoresize)
</template>

<script setup>
import { use } from "echarts/core";
import { SVGRenderer } from "echarts/renderers";
import { RadarChart } from "echarts/charts";
import VChart from "vue-echarts";
import { ref, computed, defineProps } from "vue";
import { useStatsStore } from "@/stores/stats";
import _ from "lodash";

use ([
    RadarChart,
    SVGRenderer,
]);

const props = defineProps({
    top: {
        type: Number,
        required: false,
        default: 5,
    },
    languages: {
    }
});

const statistics = useStatsStore();
const stats = computed(() => statistics.data);
const list = stats.value.editors;
const editors = list.slice(0, props.top);

const indicators = [];
const value = [];
const data = [{
    name: "Editors",
    areaStyle: {
        color: "rgba(184, 187, 38, 0.6)",
    }
}];

for (const editor of editors) {
    value.push(editor.percent);
}

// I am displaying %'s and most are below 50
// I don't want to keep max = 50 in the off chance that one value exceeds 50
// So I calc max as the following so that the graph is a bit neat to look at
const max = _.max(value) * 1.25 > 100 ? 100 : _.max(value) * 1.25;

for (const editor of editors) {
    indicators.push({
        name: editor.name,
        max: max,
    });
}

data[0].value = value;

const fgColor = 'rgba(40, 40, 40, 1)';
const option = ref({
    color: ['rgba(184, 187, 38, 0.8)'],
    radar:
    {
      indicator: indicators,
      radius: 120,
      startAngle: 90,
      splitNumber: 4,
       center: ['50%', '50%'],
      axisName: {
        formatter: '【{value}】',
        color: fgColor
      },
      splitArea: {
        areaStyle: {
          shadowColor: 'rgba(0, 0, 0, 0.4)',
          shadowBlur: 10
        }
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(40, 40, 40, 0.3)'
        }
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(40, 40, 40, 0.5)'
        }
      }
    },
  series: 
    {
      type: 'radar',
      data: data
    },
});
</script>

<style scoped lang="sass">
</style>

