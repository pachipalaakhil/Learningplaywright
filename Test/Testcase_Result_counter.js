//Test Case Result Counter
//After a test suite runs, you receive an array of test results (strings: "pass", "fail", "skip").
// Write a JavaScript program using a for loop that counts how many tests passed, failed, and were skipped.
// Print a test report with total tests, counts, pass rate percentage, and a verdict
//  (all passed → ready for release, ≤2 failures → review, >2 failures → block release).
// input testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"]
//Total Tests : 8 Passed: 5 Failed: 2 Skipped: 1 Pass Rate: 62.50% VERDICT: Minor failures. 
// Review before release.

let testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"];

let passCount = 0;
let failCount = 0;
let skipCount = 0;

// Loop to count results
for (let i = 0; i < testResults.length; i++) {
    if (testResults[i] === "pass") {
        passCount++;
    } else if (testResults[i] === "fail") {
        failCount++;
    } else if (testResults[i] === "skip") {
        skipCount++;
    }
}

// Calculations
let totalTests = testResults.length;
let passRate = ((passCount / totalTests) * 100).toFixed(2);

// Verdict logic
let result;
if (passCount === totalTests) {
    result = "All tests passed → Ready for release";
} else if (failCount <= 2) {
    result = "Minor failures → Review before release";
} else {
    result = "Major failures → Block release";
}

// Final Report (Clean Output)
console.log(`Test Report:
Total Tests: ${totalTests}
Passed: ${passCount}
Failed: ${failCount}
Skipped: ${skipCount}
Pass Rate: ${passRate}%
Verdict: ${result}`);



