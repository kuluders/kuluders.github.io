export type Project = {
  title: string;
  description: string;
  details: {
    features: string[];
    techStack: string[];
  };
};

export const awsIconsBaseUrl =
  "https://raw.githubusercontent.com/awslabs/aws-icons-for-plantuml/main/dist/";

export const techStackIcons: Record<string, string> = {
  "AWS AppSync": "ApplicationIntegration/AppSync.png",
  DynamoDB: "Database/DynamoDB.png",
  Lambda: "Compute/Lambda.png",
  "Amazon OpenSearch": "Analytics/OpenSearchService.png",
  "AWS Step Functions": "ApplicationIntegration/StepFunctions.png",
};

export const projects: Record<string, Project[]> = {
  software_architecture: [
    {
      title: "AWS AppSync Workload Manager",
      description:
        "A platform utilizing AWS AppSync, DynamoDB, and Lambda for task management, real-time updates, and automated reporting.",
      details: {
        features: [
          "Real-time task streaming via WebSocket API Gateway",
          "Pipeline resolver for daily reporting (XLSX stored in S3)",
          "Recurring task automation with EventBridge",
          "Drag-and-drop UI with React, TypeScript, SCSS, Redux",
          "User tracking & alert system for due tasks",
        ],
        techStack: ["AWS AppSync", "DynamoDB", "Lambda", "React", "TypeScript"],
      },
    },
    {
      title: "Document Comparison Gen AI Tool",
      description:
        "A tool for comparing documents with multiple AI models, designed to handle various file types and large document ingestion.",
      details: {
        features: [
          "Increased document ingestion capability from 50MB to 1GB using AWS Step Functions.",
          "Detects if the file is a PDF and transforms non-PDF files into PDFs for easier viewing.",
          "Paginated the original file and chunked it for efficient processing.",
          "Parallel processing of documents using AWS Lambda to handle ingestion of various file types (e.g., .docx, .pptx, .pdf, .txt, .xlsx, .csv).",
          "Documents are transformed into embeddings and uploaded to an OpenSearch index for quick querying and comparison.",
        ],
        techStack: [
          "AWS Step Functions",
          "Lambda",
          "Amazon OpenSearch",
          "Document Transformation",
          "AI Models for Document Comparison",
        ],
      },
    },
  ],
  data: [
    {
      title: "Fuel Data Processing & Optimization",
      description:
        "Led the development of an automated fuel data processing system using Databricks, implementing AI-driven anomaly detection for cost optimization.",
      details: {
        features: [
          "Developed robust Databricks data pipelines with 90%+ test coverage",
          "Implemented parallel processing for improved data efficiency",
          "Created AI-driven anomaly detection for fuel transactions",
          "Led stakeholder engagement and requirement gathering",
          "Designed scalable architecture for long-term maintenance",
        ],
        techStack: ["Databricks", "Python", "SQL", "AI Models", "Git"],
      },
    },
    {
      title: "Evidence Pack Automation",
      description:
        "Developed an automated reporting system for streamlining evidence pack generation, improving operational efficiency across teams.",
      details: {
        features: [
          "Automated end-to-end report generation process",
          "Implemented comprehensive testing and QA processes",
          "Provided technical mentorship to team members",
          "Integrated with existing systems for seamless operation",
          "Led UI development and system architecture",
        ],
        techStack: ["Python", "React", "SQL", "AWS", "Testing Frameworks"],
      },
    },
  ],
  frontend: [
    {
      title: "ICC Checklist Digitization",
      description:
        "Designed and implemented a digital solution for ICC checklists, transforming manual processes into an intuitive digital workflow.",
      details: {
        features: [
          "Automated validation processes",
          "Intuitive user interface design",
          "Integration with existing systems",
          "Real-time validation and error checking",
          "Comprehensive reporting capabilities",
        ],
        techStack: ["React", "TypeScript", "Material-UI", "REST APIs", "Jest"],
      },
    },
  ],
};
