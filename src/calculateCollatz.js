export const getCollatzObjects = (num) => {
    const dataPoints = [
        {
            count: "",
            value: num
        }
    ];
    let nextNumber = num;
    let maxNum = num;
    let count = 0;
    for (let i = 1; nextNumber !== 1; i++) {
        if (nextNumber % 2 === 0) {
            nextNumber = nextNumber /2;
        } else {
            nextNumber = 3 * nextNumber + 1;
        }
         if (maxNum < nextNumber ){
            maxNum = nextNumber;
         }
        dataPoints.push({
            count: "",
            value: nextNumber
        });
        count = i;
    }
    const growth = ( maxNum - num )/ num * 100;
    console.log(dataPoints);
    return { dataPoints, growth, maxNum, count };

} 

// 
// I am part of the team who built and raced in the worlds longest slot car track race (Scalextric)