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
        default: 10,
    },
    languages: {
    }
});

const statistics = useStatsStore();
const stats = computed(() => statistics.data);
const iCareAbout = ["Python", "C#", "Vue.js", "TypeScript", "JavaScript", "Bash", "SQL", "Python", "Markdown"]
const list = stats.value.languages.filter((language) => iCareAbout.includes(language.name));
const languages = list.slice(0, props.top);

const indicators = [];
const data = [{
    value: [],
    name: "Programming Languages",
    areaStyle: 'rgb(69, 133, 136, 0.3)'
}];

for (const language of languages) {
    indicators.push({
        name: language.name,
    });
    data[0].value.push(language.percent);
}

const fgColor = 'rgb(40, 40, 40, 1)';
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
          shadowColor: 'rgba(0, 0, 0, 0.4)',
          shadowBlur: 10
        }
      },
      axisLine: {
        lineStyle: {
          color: 'rgb(40, 40, 40, 0.3)'
        }
      },
      splitLine: {
        lineStyle: {
          color: 'rgb(40, 40, 40, 0.5)'
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
