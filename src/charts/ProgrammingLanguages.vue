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
const languages = stats.value.languages.slice(0, props.top);

const indicators = [];
const data = [{
    value: [],
    name: "Programming Languages"
}];

for (const language of languages) {
    indicators.push({
        name: language.name,
    });
    data[0].value.push(language.percent);
}

const fgColor = '#282828';
const option = ref({
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
          shadowColor: 'rgba(0, 0, 0, 0.2)',
          shadowBlur: 10
        }
      },
      axisLine: {
        lineStyle: {
          color: fgColor
        }
      },
      splitLine: {
        lineStyle: {
          color: fgColor
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
.echarts
    height: 320px
</style>
