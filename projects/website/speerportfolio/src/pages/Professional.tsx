import React from 'react';
import Box from '../components/Box'
import Grid from '../components/Grid'
import Header from '../components/Header';
import ProjectBox from '../components/ProjectBox';
import NavBar from '../Nav';
import '../App.css';


function Professional() {
  return (
    <div className="App">
      <Header />
      <NavBar />

      <Grid container spacing="md">
        <Grid item cols={1} />
        <Grid item cols={3}>
          <Box color='dark_gray' corners='rounder'>
            <h2> My professional experience... </h2>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing="md">
        <Grid item cols={2} />
        <Grid item cols={4}>
          <Box color='blue' corners='roundest'>
            <h2> DevOps Engineer at Ophelia Health </h2>
            <p> Oct 2022 - Jan 2023 </p>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing="md">
        <Grid item cols={3} />
        <Grid item cols={7}>
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
            <h2> Projects </h2>
            <ProjectBox
              title="Project 1"
              tools=""
              description=""
            />
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing="md">
        <Grid item cols={2} />
        <Grid item cols={4}>
          <Box color='blue' corners='roundest'>
            <h2> Senior QA Engineer at Stitch </h2>
            <p> Apr 2022 - Sep 2022 </p>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing="md">
        <Grid item cols={3} />
        <Grid item cols={7}>
          <Box color='gray' corners='rounder'>
            <h2> Summary </h2>
            <p>
              In my third year at Stitch I was promoted to Sr. QA Engineer. The QA team had grown
              to six members. I led a team of two other Sr. QA Engineers and oversaw
              all testing performed by two external contractor teams. While I was still writing and
              performing tests on new features, I focused heavily on process improvements,
              sprint planning, testing infrastrucure improvements and maintenence, and tackling
              tech debt.
            </p>
            <h2> Projects </h2>
            <ProjectBox
              title="Project 1"
              tools=""
              description=""
            />
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing="md">
        <Grid item cols={2} />
        <Grid item cols={4}>
          <Box color='blue' corners='roundest'>
            <h2> QA Engineer at Stitch </h2>
            <p> Apr 2021 - Apr 2022 </p>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing="md">
        <Grid item cols={3} />
        <Grid item cols={7}>
          <Box color='gray' corners='rounder'>
            <h2> Summary </h2>
            <p>
              After a year and half at Stitch, I was promoted to QA Engineer. By this point
              our QA team had gained a Sr. QA Engineer and I was working independently,
              embedded with a team of developers. My focus was on integration testing for our
              constantly growing set of open source data integrations.
            </p>
            <h2> Projects </h2>
            <ProjectBox
              title="Project 1"
              tools=""
              description=""
            />
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing="md">
        <Grid item cols={2} />
        <Grid item cols={4}>
          <Box color='blue' corners='roundest'>
            <h2> Junior QA Engineer at Stitch </h2>
            <p> Aug 2019 - Apr 2021 </p>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing="md">
        <Grid item cols={3} />
        <Grid item cols={7}>
          <Box color='gray' corners='rounder'>
            <h2> Summary </h2>
            <p>
              I worked as a Jr. QA Engineer during my first year at Stitch. The QA team consisted of me
              and my manager. I worked on a mix of frontend test automation, backend system testing,
              and test framework development. I benefited from frequent pair programming with my
              QA Manager and occassional pairing with developers. The environment at Stitch was highly
              collaborative with an emphasis on understanding and growth.
            </p>
            <h2> Projects </h2>
            <ProjectBox
              title="Increase Fortend Automation Test Coverage of Existing Features"
              tools="Python, Selenium"
              description=""
            />
            <ProjectBox
              title=" UI Automation Framework Refactoring for Integration Pages"
              tools=""
              description=""
            />
            <ProjectBox
              title="New Feature Frontend Testing"
              tools=""
              description="Account and User Settings"
            />
            <ProjectBox
              title="Backend Integration Testing of Loader Databricks Delta"
              tools=""
              description=""
            />
            <ProjectBox
              title="UI Automation of Loader Databricks Delta"
              tools=""
              description=""
            />
            <ProjectBox
              title="Backend Integration Testing of tap-harvest"
              tools=""
              description=""
            />
            <ProjectBox
              title="Backend Integration Testing of tap-stripe"
              tools=""
              description=""
            />
          </Box>
        </Grid>
      </Grid>

    </div >
  );
}

export default Professional
