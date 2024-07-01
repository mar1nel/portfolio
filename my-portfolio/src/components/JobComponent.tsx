import React from "react";
import ArrowIconGreen from "../icons/ArrowIconGreen";
import "./JobComponent.css";

interface JobComponentProps {
  company: string;
  role: string;
  date: string;
  description: string;
}

const JobComponent: React.FC<JobComponentProps> = ({
  company,
  role,
  date,
  description,
}) => {
  return (
    <div className="job-container">
      <div className="company-name">
        {company}{" "}
        <span className="arrow-spacing-job">
          <ArrowIconGreen />
        </span>
        <span className="job-role-date">
          {role} {date}
        </span>
      </div>
      <div className="job-description">{description}</div>
    </div>
  );
};

export default JobComponent;
