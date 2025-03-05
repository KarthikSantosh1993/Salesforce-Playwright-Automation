import { test } from "@playwright/test";
import { convertCsvFileToJsonFile } from "../utils/CSVtoJSONUtil";
import { exportToCsv, exportToJson, generateTestData } from "../utils/FakerDataUtil";

// test("csv to json conversion", async ({ page }) => {
//     convertCsvFileToJsonFile("data.csv", "data.json");
// });

// test("generate random dynamic data", async ({ page }) => {
//     const testData = generateTestData(20);
//     // Export data to JSON file
//     exportToJson(testData, "testData_generated.json");
//     // Export data to CSV file
//     exportToCsv(testData, "testData_generated.csv");
// });

