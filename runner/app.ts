import fs from "fs";
import {ApiGenStack} from "@cny-cdk-stack/test-goal-stack";
import {TYPES, deployStacks} from "@cny-common/aws.cdk.ts";
import {CONSTANTS} from "./app-constants";
const inputData: TYPES.InputData = JSON.parse(fs.readFileSync("./inputs.json", "utf-8"));
const {stage} = inputData;
const {productShortName, orgShortName, stackName}: TYPES.AppConstants = CONSTANTS;
const dependencyStackInfo: TYPES.DependencyStackInfo[] = [
];

(async () => {
     try {
          await deployStacks(dependencyStackInfo, ApiGenStack, {productShortName, orgShortName, stackName, stage});
     } catch (error) {
          console.error("Error deploying stacks:", error);
          process.exit(1);
     }
})();
