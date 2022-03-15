import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import MuiTypography from "@material-ui/core/Typography";

const Accordion = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "2px 2px 20px rgb(248, 153, 28)",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "#ffd400",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "2px 2px 20px #18191A",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    backgroundColor: "rgb(240, 238, 195)",
    fontWeight: "bold",
  },
  // }
  // typography: {
  //   fontWeight: 'regular',
  //--------------------
  // accordTypo: {
  //   fontWeight: 'regular',
  // }
}))(MuiAccordionDetails);

const Typography = withStyles({
  root: {
    fontWeight: "bold",
    fontFamily: 'Arima Madurai',
  },
  expanded: {},
})(MuiTypography);

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        square
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Motivation</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography><a href="../MotPages">
            Get Motivated everyday by subscribing to our community.
            WeRiseUpToday has one goal! Helping you improve your life by
            reaching out to a community that appreciates you. We want to give
            you encouragement to be that ideal person you want to be.
            </a> </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Philosophy</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography><a href="#">
            In order to get started on this journey, we need to be able to
            identify the real problems facing us. All problems are a matter of
            perspective. The better we understand our own perspectives, we are
            able to embark on the next phase of our journey. WeRiseUpToday will
            give you insight to our experiences, how we deal with things. It is
            always up to you on how you perceive this experience, but our
            guarantee to you is that we will always strive to help you find
            silver linings by providing you pick me up's when you need them.
          </a></Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Inspiration</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            WeRiseUpToday was Inspired by YOU! The world has seen some dark days
            and we have every intention of shining bright lights into that
            darkness by helping that one person in your life who matters most.
            YOU!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>Aspirations</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We believe in Dreams. More than that, we Want to SEE your dreams
            come true. When you join every day you will access to a community
            who wants nothing more than to see you thrive. Get quotes, images,
            ideas, or send us an email and tell us what you'd like to see here
            to make your goals more achievable.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
