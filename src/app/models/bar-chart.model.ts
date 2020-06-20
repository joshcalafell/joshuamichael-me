import { Chart } from 'chart.js';

interface IBarChart {
    chart: Chart;
}

export class BarChart implements IBarChart {

    chart: Chart;

    constructor({ elem, labels, data }: { elem: HTMLCanvasElement; labels: string[]; data: number[]; }) {
        this.chart = new Chart(elem, {
            type: 'bar',
            data: {
                labels,
                datasets: [
                    {
                        barPercentage: 100,
                        maxBarThickness: 15,
                        minBarLength: 5,
                        label: 'Experience in years',
                        data,
                        backgroundColor: 'rgba(234, 84, 85, 0.33)', // array should have same number of elements as number of dataset
                        borderColor: 'rgba(255, 84, 85, 1)', // array should have same number of elements as number of dataset
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                scales: {
                    xAxes: [
                        {
                            stacked: false,
                        },
                    ],
                    yAxes: [
                        {
                            stacked: true,
                        },
                    ],
                },
            },
        })
    }
}