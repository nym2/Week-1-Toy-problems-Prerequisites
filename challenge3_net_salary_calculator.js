const prompt = require('prompt-sync')();

function calculateNetSalary() {
    const basicSalary = parseFloat(prompt("Enter basic salary: "));
    const benefits = parseFloat(prompt("Enter benefits: "));

    if (isNaN(basicSalary) || isNaN(benefits) || basicSalary < 0 || benefits < 0) {
        console.log("Invalid input. Please enter positive numbers for salary and benefits.");
        return;
    }

    const grossSalary = basicSalary + benefits;

    const payee = calculatePAYE(grossSalary);
    const nhifDeductions = calculateNHIF(grossSalary);
    const nssfDeductions = calculateNSSF(grossSalary);

    const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;

    console.log(`Gross Salary: ${grossSalary.toFixed(2)}`);
    console.log(`PAYE: ${payee.toFixed(2)}`);
    console.log(`NHIF Deductions: ${nhifDeductions.toFixed(2)}`);
    console.log(`NSSF Deductions: ${nssfDeductions.toFixed(2)}`);
    console.log(`Net Salary: ${netSalary.toFixed(2)}`);
}

function calculatePAYE(grossSalary) {
    return grossSalary * 0.3;
}

function calculateNHIF(grossSalary) {
    return 1700;
}

function calculateNSSF(grossSalary) {
    return 400;
}

calculateNetSalary();