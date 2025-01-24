import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const SkillsShowcase = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      skills: [
        { name: "Python", technologies: ["Django", "Fast API"] },
        { name: "Java", technologies: ["Spring Boot"] },
        { name: "Node.js" },
        { name: "TypeScript" }
      ]
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "React JS" },
        { name: "Angular" },
        { name: "Tailwind" },
        { name: "HTML5" },
        { name: "SCSS/CSS" },
        { name: "JavaScript" },
        { name: "RxJS" },
        { name: "Bootstrap" }
      ]
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS Services", technologies: ["Lambda", "API Gateway", "Step Functions", "DynamoDB", "CloudWatch", "CloudTrail", "X-Ray", "Code Pipeline", "Code Build", "Code Commit"] },
        { name: "CI/CD", technologies: ["GitHub", "GitLab"] },
        { name: "Container Orchestration", technologies: ["Docker", "AWS Elastic Container Registry", "Elastic Container Service"] },
        { name: "Infrastructure as Code", technologies: ["Terraform", "AWS CloudFormation", "AWS SAM"] }
      ]
    },
    {
      title: "Data & Database",
      skills: [
        { name: "Databases", technologies: ["PostgreSQL", "MySQL", "Oracle", "DynamoDB"] },
        { name: "Data Warehousing", technologies: ["AWS Glue", "Data Pipeline", "Amazon Redshift", "Azure Data Factory", "Azure Synapse Analysis", "SSIS", "Hadoop"] },
        { name: "Data Analysis", technologies: ["PowerBI", "Microsoft Excel", "Python"] }
      ]
    },
    {
      title: "Methodologies & Additional Skills",
      skills: [
        { name: "Agile Methodologies", technologies: ["Scrum", "TDD", "Kanban"] },
        { name: "Programming Concepts", technologies: ["Object-Oriented Programming", "Multithreading", "Exception Handling"] },
        { name: "Testing", technologies: ["Unit Testing", "Integration Testing", "Automated Testing"] },
        { name: "Version Control", technologies: ["GitHub", "Code Commit", "GitLab"] }
      ]
    }
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {skillCategories.map((category, index) => (
        <Card key={index} className="w-full">
          <CardHeader>
            <CardTitle>{category.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="flex flex-col">
                  <Badge variant="secondary" className="mb-1">{skill.name}</Badge>
                  {skill.technologies && (
                    <div className="text-xs text-muted-foreground">
                      {skill.technologies.join(", ")}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default SkillsShowcase;