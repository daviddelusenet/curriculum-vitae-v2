import React, { FunctionComponent } from "react";
import { DemographicInformation } from "../components/layouts/DemographicInformation/DemographicInformation";
import { DevelopmentSkills } from "../components/layouts/DevelopmentSkills/DevelopmentSkills";
import { PersonalInterests } from "../components/layouts/PersonalInterests/PersonalInterests";
import { WorkingExperience } from "../components/layouts/WorkingExperience/WorkingExperience";
import { Introduction } from "../components/layouts/Introduction/Introduction";

const PageHome: FunctionComponent = () => (
  <>
    <DemographicInformation />
    <Introduction />
    <WorkingExperience />
    <DevelopmentSkills />
    <PersonalInterests />
  </>
);

export default PageHome;
