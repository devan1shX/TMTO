import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Typography,
  Grid,
} from "@mui/material";
import {
  CalendarMonth,
  Groups,
  Message,
  Business,
  LightbulbOutlined,
  ArrowForward,
} from "@mui/icons-material";
import "./page.css";
import { Schedule_meet_link } from "../../../assets/links";
import { Idea_disclosure_form } from "../../../assets/links";
import { Policies } from "../../../assets/links";

const services = [
  {
    title: "Innovate and Collaborate",
    description:
      "Submit Your Ideas and Projects. Share your innovative ideas, research, or projects with us.",
    icon: CalendarMonth,
  },
  {
    title: "Engage with Us",
    description: "Join us in collaborative projects and community engagements.",
    icon: Message,
  },
  {
    title: "Open for Consulting and Contract Research",
    description:
      "We offer consulting services and contract research opportunities.",
    icon: Business,
  },
  {
    title: "From Concept to Market",
    description: "Help in turning your concepts into market-ready products.",
    icon: LightbulbOutlined,
  },
  {
    title: "Wish to Start Your Venture?",
    description: "Support and guidance for starting your own venture.",
    icon: ArrowForward,
  },
  {
    title: "Secure Your Innovations",
    description: "Protect your intellectual property and innovations.",
    icon: ArrowForward,
  },
];

const FacultyResourcesPage = () => {
  return (
    <Box className="innovation-page">
      <Box className="hero-section">
        <Container maxWidth="lg">
          <Box className="hero-content">
            <Typography variant="overline" className="service-label">
              Resources
            </Typography>
            <Typography variant="h1" className="hero-title">
              Resources for Faculty & Staff
            </Typography>
            <Typography variant="body1" className="hero-description">
              At the Technology Transfer Office, we bridge academia and
              innovation, transforming research into societal benefits. Our
              dynamic ecosystem fosters intellectual property and transcends
              academic boundaries, driving innovation forward. Join us to unlock
              the full potential of your innovations and shape tomorrow's
              landscape.
            </Typography>
            <Box className="hero-buttons">
              <a href={Schedule_meet_link} target="_blank" rel="noreferrer">
                <Button className="contained" color="primary" size="large">
                  Schedule a Meeting
                </Button>
              </a>
              <a href={Idea_disclosure_form} target="_blank" rel="noreferrer">
                <Button className="outlined" size="large">
                  Submit Form
                </Button>
              </a>
              <a href={Policies} target="_blank" rel="noreferrer">
                <Button className="outlined" size="large">
                  View Policy
                </Button>
              </a>
            </Box>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" className="services-section">
        <Grid container spacing={3}>
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Grid item xs={12} sm={6} md={4} key={service.title}>
                <Card className="service-card">
                  <CardContent>
                    <Box className="service-card-header">
                      <Box className="service-icon">
                        <Icon />
                      </Box>
                      <Typography variant="h6" className="service-title">
                        {service.title}
                      </Typography>
                    </Box>
                    <Typography variant="body2" className="service-description">
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default FacultyResourcesPage;
