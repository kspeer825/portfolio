import React from 'react';
import Box from '../components/Box'
import Grid from '../components/Grid'
import Header from '../components/Header';
import ProjectBox from '../components/ProjectBox';
import TableOfContents from '../components/TableOfContents';
import NavBar from '../Nav';
import '../App.css';


function Professional() {
  return (
    <div className="App">
      <Header />
      <NavBar />

      <Grid container spacing="md">
        <Grid item cols={12}>
          <Box color='dark_gray' corners='rounder'>
            <h2> My professional experience... </h2>
	    <TableOfContents />
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing="md">
        <Grid item cols={11}>
          <Box color='blue' corners='roundest'>
            <h1 id="teksystems"> Software Engineer III at Comcast </h1>
            <p> Feb 2023 - Present </p>
          </Box>
        </Grid>
        <Grid item cols={1} />
      </Grid>

      <Grid container spacing="md">
        <Grid item cols={1} />
        <Grid item cols={10}>
          <Box color='gray' corners='rounder'>
            <h2> Summary </h2>
            <p>
              I am currently a Platform Engineer at Comcast, supporting developers by building and maintaining middleware API services.
              Our small team follows Agile practices and has an "express everything as code" mentality which allows us to quickly build immutable, observable,
              and scalable infrastructure across hybrid cloud environments.
            </p>
            <h2> Notable Projects </h2>
            <ProjectBox
              title="Develop Lightweight Data Consumers"
              tools="Go, Terraform, Docker, and AWS (ECS, ECR, Kinesis, SQS)"
              description="I wrote a modular client using Go that consumes a data stream from Kinesis and writes corresponding messages to SQS queues. I implemented
	    this client for a collection of data streams. The records processed by these consumers represent updates to customer data from various data sources.
	    The infrastructure for this was written in Terraform, and the client binaries were baked into Docker images and stored in ECR, allowing us to run them as
	    ECS Fargate tasks. I set up a simple, ephemeral local environment using Docker, the AWS CLI, and a Makefile for quick development and testing. I also included
	    a discovery mode in the client so that a user could easily add new consumers even if the structure of the data for a given Kinesis stream is unknown."
              impact="The addition of these consumers enabled us to keep data fresh and up-to-date in our service without having to make subsequent requests when a developer queries
	    our API. This gave our service an edge over the existing GraphQL solution, which had to make a number of additional calls (depending on the query) for every client request
	    that it served to get the latest data."
            />
            <ProjectBox
              title="Baking Cloud Agnostic Machine Images"
              tools="Packer, Ansible, Concourse, Docker, VMware, and AWS (EC2, AMI)"
              description="I used Packer and Ansible to bake images for the individual components of a 3rd-party data service in order to run that service in a hybrid cloud environment.
	    The application components (an API, data transformation logic, and event streams) ran on EC2 instances in AWS, while the storage layer ran on VMware virtual machines in an
	    internal private cloud provider. I used Ansible playbooks to handle the bulk of the configuration, and then used different Packer providers to execute those playbooks on remote
	    hosts. Those hosts could then be saved as AMIs or CMIs (Comcast's internal machine images) depending on the cloud platform."
              impact="These Packer builds allowed us to create, update, and validate individual components of the application while completely decoupled from the running stack.
	    It also enabled us to maintain a single source of truth for component configurations, while still being able to deploy and run the application in separate cloud platforms."
            />
          </Box>
        </Grid>
        <Grid item cols={1} />
      </Grid>

      <Grid container spacing="md">
        <Grid item cols={11}>
          <Box color='blue' corners='roundest'>
            <h1 id="ophelia"> DevOps Engineer II at Ophelia Health </h1>
            <p> Oct 2022 - Jan 2023 </p>
          </Box>
        </Grid>
        <Grid item cols={1} />
      </Grid>

      <Grid container spacing="md">
        <Grid item cols={1} />
        <Grid item cols={10}>
          <Box color='gray' corners='rounder'>
            <h2> Summary </h2>
            <p>
              I worked as a DevOps Engineer on the Platform team alongside two developers at Ophelia.
              The focus of that team was to support the larger tech org through engineering improvements.
              My job was to learn existing systems, including architecture, tooling, and processes, with the
              goal of identifying pain points and finding quick wins and improvements to address them.
              My time at Ophelia was cut short in mid-January 2023 due to downsizing. While I wasn't there
              as long as I hoped to be, I learned a lot in a very short time. I touched almost
              all areas of the codebase, working on a mix of application development, automation tooling,
              and infrastructure improvements.
            </p>
            <h2> Notable Projects </h2>
            <ProjectBox
              title="Establish Telemetry in Patient and Clinician Web Apps"
              tools="Sentry, GCP Cloud Monitoring & Alerting, Typescript, NodeJS, PagerDuty"
              description=" I established telemetry around user flows, capturing product analytics at key sensor
	    points throughout onboarding and revenue funnels. I also established several baseline alerts across both a
	    patient-facing web app and a clinician-facing web app with a focus on errors, latency, throughput,
	    and saturation. I accomplished this by expanding on an existing Sentry integration and leveraging an
	    existing NodeJS logger wrapped around backend Cloud Functions and the API layer."
              impact="The added monitoring and alerting provided increased transparency to crucial application
	    functionality. The tech org did not previously have a mechanism to catch critical production issues
	    prior to hearing about it from an end user."
            />
            <ProjectBox
              title="Implement a CI/CD Pipeline for Clinician-Facing Web App"
              tools="Github Actions, Bash, Firebase Hosting, Firebase Functions"
              description="I implemented a CI/CD pipeline for a web app that consisted of building and deploying a
	    staging environment, executing frontend automation tests against that staging environment, and then
	    building and deploying the production environment. I modeled the initial version of the pipeline after an
	    existing pipeline from a separate application, however there were significant differences between them and
	    a number of hurdles along the way. Some of the challenges I had to overcome were overlapping backend
	    deployments across the two pipelines, inconsistent deployment rate limits imposed by GCP, an undocumented
	    mix of coupled and decoupled backend services, and different underlying tooling between the two applications."
              impact="Establishing a CI/CD pipeline for the clinician app enabled automatic deployments and regression
	    protection via frontend automation testing. It resulted in increased reliability of the backend server
	    deployments, reduction of repeated code across workflows, and process alignment between product development teams."
            />
          </Box>
        </Grid>
        <Grid item cols={1} />
      </Grid>

      <Grid container spacing="md">
        <Grid item cols={11}>
          <Box color='blue' corners='roundest'>
            <h1 id="stitch1"> Senior QA Engineer at Stitch </h1>
            <p> Apr 2022 - Sep 2022 </p>
          </Box>
        </Grid>
        <Grid item cols={1} />
      </Grid>

      <Grid container spacing="md">
        <Grid item cols={1} />
        <Grid item cols={10}>
          <Box color='gray' corners='rounder'>
            <h2> Summary </h2>
            <p>
              In my third year at Stitch I was promoted to Sr. QA Engineer. The QA team had grown
              to six members. I led a team of two other Sr. QA Engineers and oversaw
              all testing performed by two external contractor teams. While I was still writing and
              performing tests on new features, I focused heavily on process improvements,
              sprint planning, testing infrastructure improvements and maintenance, and tackling
              tech debt.
            </p>
            <h2> Notable Projects </h2>
            <ProjectBox
              title="Backend Automation Framework Refactoring"
              tools="Python, REST APIs, AWS"
              description="I refactored the majority of a backend test automation framework with the goal of simplifying the
	    interface and increasing visibility of test coverage. I started by consolidating duplicate methods, and converging
	    on a standard terminology. I added a Python logger to all actions and enabled saving of test logs to S3 in CI/CD
	    pipelines. I then abstracted away the 'Base Test Suite' into configurable objects. Each test object had a standard set
	    of test cases that could be expanded upon for unique scenarios or removed in the case of outlier behavior. I applied the
	    logger to this layer, ensuring that test coverage was standardized across integrations."
              impact="By adding the standard logger to the underlying test fixtures and to the top level framework, saved test logs
	    could be parsed to produce test coverage reports for a large complex set of integration tests. Abstracting out common
	    test cases and creating a standard test structure added clear guardrails to the framework, ensuring consistency regardless
	    of who wrote the test. It also enabled testing by configuration, which reduced the time needed to implement baseline tests."
            />
            <ProjectBox
              title="Sandbox Environment Stabilization"
              tools="Jenkins, Bash, AWS"
              description="I contributed to the stabilization of the sandbox testing environment used for running automated tests.
	    The sandbox environment had drifted greatly from production, and due to implementation restrictions much of that drift
	    had to be triaged, rather than fixed altogether. The sandbox environment became plagued by internal service errors
	    in the API layer and was causing periodic test failures, blocking releases. Over a couple sprint cycles I helped identify
	    and fix a number of previously unknown issues with the test environment. I created a script to clean up artifacts left
	    behind by automated tests that were overwhelming a database. I fixed retry logic in the deployment script
	    to ensure that the environment would deploy successfully and did not become stale. I also increased the deployment rate
	    of the monolithic environment so that tests would execute against up-to-date dependencies."
              impact="This effort resulted in the stabilization of CI/CD pipelines and a massive reduction in false positives for
	    automated tests. It also uncovered a significant amount of technical debt within our non-production environments."
            />
            <ProjectBox
              title="Integrate QA into Support Issue Hotfixes"
              tools="Jira"
              description="I implemented a process for developers and QA to follow that would ensure test automation coverage
	    for bug fixes that were shipped as a result of a support ticket submitted by an end user. This process ensured QA
	    support for developers that were quickly addressing live bugs in production. QA was previously reviewing support
	    tickets after they were closed to find gaps in existing test coverage, and changes that were released as a result
	    of a support ticket were typically shipped without regression protection around the change."
              impact="This resulted in higher quality changes made by devs on support shifts and reduced the risk involved in
	    shipping changes quickly. Most importantly, it resulted in an increase in communication between developers and QA, and
	    an alignment of goals across teams."
            />
          </Box>
        </Grid>
        <Grid item cols={1} />
      </Grid>

      <Grid container spacing="md">
        <Grid item cols={11}>
          <Box color='blue' corners='roundest'>
            <h1 id="stitch2"> QA Engineer at Stitch </h1>
            <p> Apr 2021 - Apr 2022 </p>
          </Box>
        </Grid>
        <Grid item cols={1} />
      </Grid>

      <Grid container spacing="md">
        <Grid item cols={1} />
        <Grid item cols={10}>
          <Box color='gray' corners='rounder'>
            <h2> Summary </h2>
            <p>
              After a year and half at Stitch, I was promoted to QA Engineer. By this point
              our QA team had gained a Sr. QA Engineer and I was working independently,
              embedded with a team of developers. My focus was on integration testing for our
              constantly growing set of open source data integrations.
            </p>
            <h2> Notable Projects </h2>
            <ProjectBox
              title="Establish Base Test Suite for Integrations"
              tools="Python"
              description="After several months of writing automated test cases for SaaS integrations,
	    I established a 'Base Test Suite' which organized various test cases into a series
	    of tests that could be applied to any SaaS integration. The Base Suite started with some
	    outdated test templates and was upgraded over the period of a few months, adding cases to cover
	    standard behavior and scenarios as they were identified. I worked closely with the Product Manager
	    and developers to curate these tests to ensure that we were covering priority features that any
	    SaaS integration should be able to handle. This Base Suite was later expanded to include
	    additional test cases to cover database integrations."
              impact="Creating a Base Suite of test cases to apply to all SaaS and database integrations
	    expedited the testing process to the point that QA was no longer a blocker for shipping a
	    new feature to Beta. It led to higher quality integrations earlier in the development
	    life cycle. The Base Suite eased the burden of achieving ample test coverage for integrations,
	    enabling QA to focus on more complex sync scenarios and edge cases."
            />
            <ProjectBox
              title="CI/CD Pipeline Upgrades to Support High Performance Integrations"
              tools="CircleCI, Python, Clojure, Docker, MySQL, PostgreSQL"
              description="I supported a year-long effort to increase the performance of two database integrations.
	    I wrote a large number of automated tests to thoroughly cover the feature. The high volume of tests
	    resulted in a massive increase in execution time for standard CI/CD pipelines. In order to support the
	    additional tests, I refactored the existing CI/CD pipeline to enable running tests in parallel. This was
	    a nontrivial task, as running a single test required spinning up a fresh instance of the database, generating
	    test data and often executing multiple integration syncs."
              impact="The testing and infrastructure work I did resulted in a test suite with coverage that was triple the
	    size of a standard suite, and a pipeline to run those tests in half the time of a standard integration's pipeline."
            />
          </Box>
        </Grid>
        <Grid item cols={1} />
      </Grid>

      <Grid container spacing="md">
        <Grid item cols={11}>
          <Box color='blue' corners='roundest'>
            <h1 id="stitch3"> Junior QA Engineer at Stitch </h1>
            <p> Aug 2019 - Apr 2021 </p>
          </Box>
        </Grid>
        <Grid item cols={1} />
      </Grid>

      <Grid container spacing="md">
        <Grid item cols={1} />
        <Grid item cols={10}>
          <Box color='gray' corners='rounder'>
            <h2> Summary </h2>
            <p>
              I worked as a Jr. QA Engineer during my first year at Stitch. The QA team consisted of me
              and my manager. I worked on a mix of frontend test automation, backend system testing,
              and test framework development. I benefited from frequent pair programming with my
              QA Manager and occasional pairing with developers. The environment at Stitch was highly
              collaborative with an emphasis on understanding and growth for entry-level engineers.
            </p>
            <h2> Notable Projects </h2>
            <ProjectBox
              title=" UI Automation Framework Refactoring"
              tools="Python, Selenium"
              description="I refactored a large portion of the page-object model within a custom Python test
	    framework. At the time, Stitch supported over 100 data source integrations, each of which had
	    its own frontend flow for creating and updating instances of the integrations. These frontend pages
	    were generated using a data-driven approach, resulting in very similar layouts and functionality across
	    each integration, yet there were significant differences in configuration as each integration had
	    different properties. Each set of pages needed to be validated via UI automation tests in order to provide
	    confidence that the integration had been configured correctly in the backend. I abstracted out the
	    Selenium selectors, Python actions, and page components into reusable components that would generate a
	    single reusable page class driven by a properties map. I also created templates for both the framework classes
	    and the test scripts."
              impact="This project reduced complexity and redundancy in the automation suite and resulted in much shorter
            lead times. What used to be a tedious, error-prone, multi-day process became a simple task that could take
            just a few hours."
            />
            {/* <ProjectBox
		title="Backend Integration Testing of Loader Databricks Delta"
		tools="Python, Delta Lake SDK"
		description=""
		impact=""
		/> */}
            <ProjectBox
              title="SaaS Integration Testing with Data Mutations"
              tools="Python, REST APIs"
              description="The data sources at Stitch largely fell into two categories: database and SaaS. The database
	    integrations were easily testable, as a local instance of the database could be spun up using a Docker container
	    and local test data could be generated using standard ODBC drivers and SDKs. The SaaS integrations were much
	    more difficult to test. A test account was needed and test data would need to be manually generated using their
	    public API endpoints. I worked on the first set of tests that actively performed CRUD operations on test data
	    within the setup and cleanup of a given test."
              impact="This project established a pattern for testing SaaS data integrations. The use of CRUD operations
	    greatly increased the diversity of test data. It also unlocked the ability to test standard use-cases that were not
	    previously testable for SaaS integrations, such as saving incremental state across multiple sync executions."
            />
          </Box>
        </Grid>
        <Grid item cols={1} />
      </Grid>

    </div >
  );
}

export default Professional
