// Import all tech logos
import databricksDarkLogo from "../assets/logos/databricks-dark.svg";
import databricksLogo from "../assets/logos/databricks-light.svg";
import dynamoLogo from "../assets/logos/dynamo.svg";
import materialUiLogo from "../assets/logos/materialui.svg";
import openaiLogo from "../assets/logos/openai.svg";
import pythonLogo from "../assets/logos/python.svg";
import reactLogo from "../assets/logos/react.svg";
import typescriptLogo from "../assets/logos/typescript.svg";

export const techLogos: Record<string, string> = {
  react: reactLogo,
  python: pythonLogo,
  typescript: typescriptLogo,
  // 'Git': gitLogo,
  // AWS: awsLogo,
  "databricks-light": databricksLogo,
  "databricks-dark": databricksDarkLogo,
  dynamo: dynamoLogo,
  // 'Jest': jestLogo,
  materialui: materialUiLogo,
  openai: openaiLogo,
};
