const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
let totalBatteries;

totalBatteries = batteryBatches.reduce((total, ele) => total + ele);
