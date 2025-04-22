<script setup>
import { ref, computed } from 'vue'
import VChart from 'vue-echarts'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { LineChart } from 'echarts/charts'
import { TitleComponent, TooltipComponent, GridComponent, LegendComponent } from 'echarts/components'

use([CanvasRenderer, LineChart, TitleComponent, TooltipComponent, GridComponent, LegendComponent])

let criteres = [
    {date: '2025-04-15', naf: '5', nma: '70min', st: '25', obj: '✔'},
    {date: '2025-04-16', naf: '2', nma: '28min', st: '15', obj: '❌'},
    {date: '2025-04-17', naf: '6', nma: '80min', st: '10', obj: '✔'},
    {date: '2025-04-18', naf: '2', nma: '15min', st: '5', obj: '❌'},
    {date: '2025-04-19', naf: '3', nma: '45min', st: '20', obj: '✔'},
    {date: '2025-04-20', naf: '8', nma: '100min', st: '30', obj: '✔'},
    {date: '2025-04-21', naf: '4', nma: '55min', st: '18', obj: '❌'},
    {date: '2025-04-22', naf: '7', nma: '90min', st: '40', obj: '✔'},
    {date: '2025-04-23', naf: '1', nma: '10min', st: '3', obj: '❌'},
    {date: '2025-04-24', naf: '9', nma: '120min', st: '50', obj: '✔'},
    {date: '2025-04-25', naf: '3', nma: '30min', st: '12', obj: '✔'},
    {date: '2025-04-26', naf: '5', nma: '70min', st: '25', obj: '❌'},
    {date: '2025-04-27', naf: '6', nma: '80min', st: '35', obj: '✔'},
    {date: '2025-04-28', naf: '2', nma: '15min', st: '6', obj: '❌'},
    {date: '2025-04-29', naf: '7', nma: '90min', st: '40', obj: '✔'},
    {date: '2025-04-30', naf: '4', nma: '50min', st: '20', obj: '✔'},
    {date: '2025-05-01', naf: '8', nma: '100min', st: '35', obj: '❌'},
    {date: '2025-05-02', naf: '3', nma: '40min', st: '15', obj: '✔'},
    {date: '2025-05-03', naf: '6', nma: '80min', st: '30', obj: '✔'}
];

// Calculer le nombre total de minutes traitées par jour
const dailyMinutes = computed(() => {
  const minutesByDate = {};

  criteres.forEach((item) => {
    const date = item.date;
    const minutes = parseInt(item.nma.replace('min', '').trim()); // Extraire la valeur numérique des minutes
    if (!minutesByDate[date]) {
      minutesByDate[date] = 0;
    }
    minutesByDate[date] += minutes; // Ajouter les minutes traitées
  });

  // Créer des données continues avec des jours consécutifs
  const startDate = new Date(criteres[0].date);
  const endDate = new Date(criteres[criteres.length - 1].date);
  const dailyLabels = [];
  const dailyData = [];
  
  let currentDate = startDate;
  while (currentDate <= endDate) {
    const dateStr = currentDate.toISOString().split('T')[0]; // Format YYYY-MM-DD
    dailyLabels.push(dateStr);
    dailyData.push(minutesByDate[dateStr] || 0); // Ajouter 0 si aucune minute ce jour-là
    currentDate.setDate(currentDate.getDate() + 1); // Passer au jour suivant
  }

  return { dailyLabels, dailyData };
});

// Options du graphique
const chartOptions = computed(() => {
  // Vérification si l'objectif de 70 minutes a été atteint pour chaque jour
  const targetLine = 70;
  const lineColor = (minutes) => minutes >= targetLine ? '#4CAF50' : '#FF3D00'; // Vert si atteint, rouge sinon

  return {
    title: {
      text: 'Nombre de minutes d\'audio traitées par jour',
    },
    tooltip: {
      trigger: 'axis',
    },
    xAxis: {
      type: 'category',
      data: dailyMinutes.value.dailyLabels, // Jours
    },
    yAxis: {
      type: 'value',
      name: 'Minutes d\'audio',
    },
    series: [
      {
        name: 'Minutes traitées',
        type: 'line',
        data: dailyMinutes.value.dailyData, // Données des minutes traitées
        smooth: true,
        lineStyle: { color: '#42A5F5' },
      },
      {
        name: 'Objectif 70 minutes',
        type: 'line',
        data: Array(dailyMinutes.value.dailyData.length).fill(targetLine), // L'objectif
        lineStyle: { color: '#FF3D00', type: 'dashed' }, // Ligne rouge ou verte
        markLine: {
          symbol: 'none',
          lineStyle: {
            color: '#FF3D00', // Par défaut rouge
            width: 2,
            type: 'solid',
          },
          data: [
            {
              yAxis: targetLine,
              name: 'Objectif 70 minutes',
              label: {
                formatter: '70 min',
                position: 'end',
              },
            },
          ],
        },
      },
    ],
  };
});


</script>

<template>
    <section>
        <h1 class="font-bold text-3xl bg-gray-300 p-4 text-center">Statistiques</h1><br><br>

        <div class="max-w-[80vw] mx-auto">

              <!-- Graphique -->
            <v-chart class="chart" :option="chartOptions" autoresize />
           
            <div>
                <table class="mx-auto w-full  text-center ">
                    <thead>
                        <tr class="hover:bg-gray-200 dark:hover:bg-gray-70">
                            <th class=" p-2 bg-gray-300 text-center">Date</th>
                            <th class=" p-2 bg-gray-300 text-center">Nombre d'annotation faites</th>
                            <th class=" p-2 bg-gray-300 text-center">Nombre de minutes annotées</th>
                            <th class=" p-2 bg-gray-300 text-center ">Score total</th>
                            <th class=" p-2 bg-gray-300 text-center">Objectif</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="hover:bg-gray-200 dark:hover:bg-gray-70 odd:bg-[#F8FAFC] even:bg-[#cbd5e1b2] cursor-pointer" v-for="(critere, index) in criteres" :key="index" >
                            <td class=" dark:hover:bg-gray-70   p-2">{{ critere.date }}</td>
                            <td class=" dark:hover:bg-gray-70   p-2">{{ critere.naf }}</td>
                            <td class=" dark:hover:bg-gray-70   p-2">{{ critere.nma }}</td>
                            <td class=" dark:hover:bg-gray-70   p-2">{{ critere.st }}</td>
                            <td class=" dark:hover:bg-gray-70   p-2">{{ critere.obj }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
</template>


<style scoped>
.chart {
  width: 100%;
  height: 400px;
  margin-top: 20px;
}

.chatbot {
  max-width: 400px;
  margin: 20px auto;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 10px;
  background-color: #f9f9f9;
}

.chat-window {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.messages {
  max-height: 300px;
  overflow-y: auto;
}

.message {
  padding: 5px;
  border-radius: 5px;
}

.message.user {
  background-color: #e0e0e0;
  text-align: right;
}

.message.bot {
  background-color: #cce5ff;
  text-align: left;
}

input {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 100%;
}
</style>



