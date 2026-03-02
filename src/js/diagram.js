"use strict";

const url = `https://mallarmiun.github.io/Frontend-baserad-webbutveckling/Moment%205%20-%20Dynamiska%20webbplatser/statistik_sokande_ht25.json`;

let allCourses = [];

let sortedCourses = [];

document.addEventListener("DOMContentLoaded", async () => {
    loadCourses();


});

async function loadCourses() {


    try {
        const response = await fetch(url);
        const courses = await response.json();
        // lagrar alla kurser i global array
        allCourses = courses;
        allCourses.forEach(course => {
            sortedCourses.push(course.applicantsTotal);
            sortedCourses.sort((a, b) => a - b);

        });
        let reversedAplNumb = sortedCourses.reverse();
        let highestAplNumb = [reversedAplNumb[0], reversedAplNumb[1], reversedAplNumb[2], reversedAplNumb[3], reversedAplNumb[4], reversedAplNumb[5]];
        console.log(highestAplNumb);
        addChartData(highestAplNumb);

    }
    catch (error) {
        console.error(`Felmeddelande: ${error}`);
    }
}

function addChartData(highestAplNumb) {
    /* för Chart.js */

    const chartDiv = document.getElementById("myChart");

    new Chart(chartDiv, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [highestAplNumb[0], highestAplNumb[1], highestAplNumb[2], highestAplNumb[3], highestAplNumb[4], highestAplNumb[5]],
                borderWidth: 1
            }]
        },
        options: {
            backgroundColor: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"]
        }
    });

    const chartDiv2 = document.getElementById("myChart2");

    new Chart(chartDiv2, {
        type: 'pie',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                borderWidth: 1
            }]
        },
        options: {
            backgroundColor: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"]
        }
    });
}