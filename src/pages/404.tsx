import React, { FunctionComponent } from "react";
import { Link } from "gatsby";
import { PageError } from "../components/layouts/PageError/PageError";
import { Paragraph } from "../components/atoms/Paragraph/Paragraph";
import { Title } from "../components/atoms/Title/Title";

const Page404: FunctionComponent = () => (
  <PageError>
    <Title>Something went wrong!</Title>
    <Paragraph>
      Sorry, it looks like this page can&apos;t be found.. 😞
    </Paragraph>
    <Paragraph>
      <Link to="/">I&apos;m coming home</Link>
    </Paragraph>
  </PageError>
);

export default Page404;
