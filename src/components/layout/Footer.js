import React from "react";
import {Container, Grid, Link, Typography} from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
const Footer = () => {
  return (
    <Container disableGutters maxWidth="xl">
      <Grid
        maxWidth="100%"
        container
        bgcolor="#eaeaea"
        component="footer"
        padding={2}
        mt={2}>
        <Grid item xs={12} md={6} textAlign="center">
          <Typography
            component="p"
            variant="p"
            fontWeight={400}
            fontSize="1.2rem"
            textAlign="center"
            color="primary">
            طراحی سایت توسط MohammadAli semnani
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Grid
            container
            component="div"
            textAlign="center"
            display="flex"
            justifyContent="center"
            alignItems="center">
            <Grid pl={1} filter=" blur(4px)">
              <Typography
                component="p"
                variant="p"
                fontWeight={400}
                fontSize="1.2rem"
                textAlign="center"
                color="primary">
                راه های ارتباطی :
              </Typography>
            </Grid>

            <Grid>
              <Link color="primary" margin={1} href="https://t.me/inf_brutal">
                <TelegramIcon />
              </Link>

              <Link
                color="primary"
                margin={1}
                href="https://www.instagram.com/mhmd.ali_s/">
                <InstagramIcon />
              </Link>

              <Link
                margin={1}
                href="https://www.linkedin.com/in/mohammadali-semnani-12b02722b/"
                color="primary">
                <LinkedInIcon />
              </Link>

              <Link
                margin={1}
                href="https://twitter.com/mhmd_ali_s"
                color="primary">
                <TwitterIcon />
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
