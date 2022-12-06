import React, { useState } from "react";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";

// import Warning from "@material-ui/icons/Warning";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
// import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
// import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormControl,
  Grid,
  // Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import { ExpandMore, Search } from "@material-ui/icons";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  const [isSmartSearch, setIsSmartSearch] = useState(1);
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon
                onClick={() => {
                  setIsSmartSearch(1);
                }}
                className={classes.cardIcon}
                color={isSmartSearch === 1 ? "success" : "warning"}
              >
                <Typography>smart search</Typography>
              </CardIcon>
              <CardIcon
                onClick={() => {
                  setIsSmartSearch(0);
                }}
                className={classes.cardIcon}
                color={isSmartSearch === 0 ? "success" : "warning"}
              >
                <Typography>Wizard</Typography>
              </CardIcon>
            </CardHeader>
            <CardBody>
              <Grid container className={classes.gridContainer} spacing={2}>
                {isSmartSearch === 1 ? (
                  <GridItem xs={12} sm={12} md={6}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="search"
                      className={classes.searchInput}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment>
                            <IconButton>
                              <Search />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </GridItem>
                ) : (
                  <GridContainer spacing={2}>
                    <Grid
                      item
                      className={classes.gridItemColumnGap}
                      xs={12}
                      sm={12}
                      md={6}
                    >
                      <FormControl
                        fullWidth
                        variant="outlined"
                        className={classes.formControl}
                      >
                        <InputLabel htmlFor="outlined-age-native-simple">
                          name
                        </InputLabel>
                        <Select
                          native
                          fullWidth
                          // value={state.age}
                          // onChange={handleChange}
                          label="Age"
                          inputProps={{
                            name: "age",
                            id: "outlined-age-native-simple",
                          }}
                        >
                          <option aria-label="None" value="" />
                          <option value={10}>Ten</option>
                          <option value={20}>Twenty</option>
                          <option value={30}>Thirty</option>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid
                      item
                      className={classes.gridItemColumnGap}
                      xs={12}
                      sm={12}
                      md={6}
                    >
                      <FormControl
                        fullWidth
                        variant="outlined"
                        className={classes.formControl}
                      >
                        <InputLabel htmlFor="outlined-age-native-simple">
                          name
                        </InputLabel>
                        <Select
                          native
                          fullWidth
                          // value={state.age}
                          // onChange={handleChange}
                          label="Age"
                          inputProps={{
                            name: "age",
                            id: "outlined-age-native-simple",
                          }}
                        >
                          <option aria-label="None" value="" />
                          <option value={10}>Ten</option>
                          <option value={20}>Twenty</option>
                          <option value={30}>Thirty</option>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid
                      item
                      className={classes.gridItemColumnGap}
                      xs={12}
                      sm={12}
                      md={6}
                    >
                      <FormControl
                        fullWidth
                        variant="outlined"
                        className={classes.formControl}
                      >
                        <InputLabel htmlFor="outlined-age-native-simple">
                          name
                        </InputLabel>
                        <Select
                          native
                          fullWidth
                          // value={state.age}
                          // onChange={handleChange}
                          label="Age"
                          inputProps={{
                            name: "age",
                            id: "outlined-age-native-simple",
                          }}
                        >
                          <option aria-label="None" value="" />
                          <option value={10}>Ten</option>
                          <option value={20}>Twenty</option>
                          <option value={30}>Thirty</option>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid
                      item
                      className={classes.gridItemColumnGap}
                      xs={12}
                      sm={12}
                      md={6}
                    >
                      <FormControl
                        fullWidth
                        variant="outlined"
                        className={classes.formControl}
                      >
                        <InputLabel htmlFor="outlined-age-native-simple">
                          name
                        </InputLabel>
                        <Select
                          native
                          fullWidth
                          // value={state.age}
                          // onChange={handleChange}
                          label="Age"
                          inputProps={{
                            name: "age",
                            id: "outlined-age-native-simple",
                          }}
                        >
                          <option aria-label="None" value="" />
                          <option value={10}>Ten</option>
                          <option value={20}>Twenty</option>
                          <option value={30}>Thirty</option>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid
                      item
                      className={classes.gridItemColumnGap}
                      xs={12}
                      sm={12}
                      md={6}
                    >
                      <FormControl
                        fullWidth
                        variant="outlined"
                        className={classes.formControl}
                      >
                        <InputLabel htmlFor="outlined-age-native-simple">
                          name
                        </InputLabel>
                        <Select
                          native
                          fullWidth
                          // value={state.age}
                          // onChange={handleChange}
                          label="Age"
                          inputProps={{
                            name: "age",
                            id: "outlined-age-native-simple",
                          }}
                        >
                          <option aria-label="None" value="" />
                          <option value={10}>Ten</option>
                          <option value={20}>Twenty</option>
                          <option value={30}>Thirty</option>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid
                      item
                      className={classes.gridItemColumnGap}
                      xs={12}
                      sm={12}
                      md={6}
                    >
                      <FormControl
                        fullWidth
                        variant="outlined"
                        className={classes.formControl}
                      >
                        <InputLabel htmlFor="outlined-age-native-simple">
                          name
                        </InputLabel>
                        <Select
                          native
                          fullWidth
                          // value={state.age}
                          // onChange={handleChange}
                          label="Age"
                          inputProps={{
                            name: "age",
                            id: "outlined-age-native-simple",
                          }}
                        >
                          <option aria-label="None" value="" />
                          <option value={10}>Ten</option>
                          <option value={20}>Twenty</option>
                          <option value={30}>Thirty</option>
                        </Select>
                      </FormControl>
                    </Grid>
                  </GridContainer>
                )}

                <Grid
                  item
                  className={classes.gridItemColumnGap}
                  sx={{ mt: 4 }}
                  xs={12}
                  sm={12}
                  md={12}
                >
                  <Accordion defaultExpanded={true}>
                    <AccordionSummary
                      expandIcon={<ExpandMore />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography className={classes.heading}>
                        cause collapse
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMore />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography className={classes.heading}>
                        Accordion 1
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </Grid>
              </Grid>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
