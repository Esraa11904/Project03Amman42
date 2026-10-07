function calculateGrade(score) {
    if (typeof score !== "number" || score < 0 || score > 100) {
        return "invalid score";
    }

    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

function checkAccess(age, hasTicket) {
    if (typeof age !== "number" || typeof hasTicket !== "boolean") {
        return false;
    }

    if (age >= 18 && hasTicket === true) {
        return true;
    } else {
        return false;
    }
}

console.log("--- Testing calculateGrade ---");
console.log(calculateGrade(100));
console.log(calculateGrade(90));
console.log(calculateGrade(89));
console.log(calculateGrade(0));
console.log(calculateGrade(-5));
console.log(calculateGrade(105));
console.log(calculateGrade("90"));

console.log("--- Testing checkAccess ---");
console.log(checkAccess(20, true));
console.log(checkAccess(17, true));
console.log(checkAccess(20, false));
console.log(checkAccess(18, true));