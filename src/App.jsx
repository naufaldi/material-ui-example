import styled, { keyframes } from "styled-components";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { ButtonGroup, Fade, Grow } from "@mui/material";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { useState } from "react";

const StyledButton = styled(Button)`
  background-color: grey;
  color: #fff;

  &:hover {
    background-color: #3700b3;
  }
`;
const StyledHeading = styled(Typography)`
  color: red;
`;

const ButtonPrimary = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: "black",
  [theme.breakpoints.down("md")]: {
    backgroundColor: "#3700b3",
    color: "white",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
  },
}));

const FadeIn = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 100%
    
    }
`;

const FadeInComponents = styled.div`
  animation: ${FadeIn} 3s ease-in-out;
`;

export default function App() {
  // state react
  const [isCheck, setCheck] = useState(false);

  const handleChange = () => {
    setCheck((prev) => !prev);
  };
  return (
    <Container maxWidth="sm">
      <FadeInComponents>
        <h1>Animated Heading </h1>
      </FadeInComponents>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Material UI Vite.js example
        </Typography>
        <StyledHeading> Warna Merah</StyledHeading>
        <StyledButton variant="contained">
          Styled Material-UI Button
        </StyledButton>
        <Button variant="contained" color="primary">
          {" "}
          Maaterial UI{" "}
        </Button>
        <ButtonPrimary> Button Primary</ButtonPrimary>
        <ButtonGroup variant="contained" aria-label="Basic button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Box>
      <Box>
        <Typography variant="h1" component="h2">
          h1. Heading
        </Typography>
      </Box>

      <Button onClick={handleChange}> Show Card </Button>
      <Fade in={isCheck}>
        <div>
          <BasicCard />
        </div>
      </Fade>
      <Grow
        in={isCheck}
        style={{ transformOrigin: "0 0 0" }}
        {...(isCheck ? { timeout: 1000 } : {})}
      >
        <div>
          <h1>Title Card</h1>
          <BasicCard />
        </div>
      </Grow>
    </Container>
  );
}

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
