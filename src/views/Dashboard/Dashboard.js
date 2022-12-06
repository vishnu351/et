/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Autocomplete, {
  createFilterOptions,
} from "@material-ui/lab/Autocomplete";

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
import axios from "axios";
import ThumbUp from "@material-ui/icons/ThumbUp";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  FormControl,
  Grid,
  // Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  Select,
  TextField,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { Search, Add, Remove } from "@material-ui/icons";
import defaultOptions from "../../setup";
import { object } from "prop-types";
const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  const [isSmartSearch, setIsSmartSearch] = useState(1);
  const [errorSmart, setErrorSmart] = useState([]);
  const [showCollapsable, setShowCollapsable] = useState(false);
  const [cause, setCause] = useState(null);
  const [mainCollapse, setMainCollapse] = useState(true);
  const [causeCollapse, setCauseCollapse] = useState(false);
  const [actionCollapse, setActionCollapse] = useState(false);
  const [chronologyCollapse, setChronologyCollapse] = useState(false);
  const [action, setAction] = useState(null);
  const options = [
    {
      label: "plant",
      value: "100",
    },
    {
      label: "plant2",
      value: "101",
    },
    {
      label: "plant3",
      value: "102",
    },
    {
      label: "plant4",
      value: "103",
    },
    {
      label: "plant5",
      value: "104",
    },
  ];
  const list1 = [
    {
      ErrorCode: "1001",
      ErrorCatCode: "C10001001",
      ErrorDesc: "1001 - AnInpCalib",
      RecordType: null,
    },
    {
      ErrorCode: "1002",
      ErrorCatCode: "C10001002",
      ErrorDesc: "1002 - Aux PwrFail",
      RecordType: null,
    },
  ];
  const list2 = {
    ErrorCatCode: "510001001",
    Detail: "Automatic input calibration of IOEC boards not successful",
    DetailType: "5",
  };
  const list3 = {
    ErrorCatCode: "A10001001",
    Detail:
      "Disconnect analog inputs and\nretry\n- If the fault cannot be eliminated,\ncall local ABB service organization",
    DetailType: "A",
  };
  const matches = useMediaQuery("(min-width:600px)");
  useEffect(() => {
    getErrorCode();
  }, []);
  const getErrorCode = () => {
    setCause(null);
    setAction(null);
    axios
      .post("/api/troubleshoot/GetAllErrorCodes", {}, defaultOptions)
      .then((response) => {
        setErrorSmart(response.data);
        // this.setState({ list: response.data });
        console.log(response);
      })
      .catch(() => {});
    setErrorSmart(list1);
  };
  const response = async (data) => {
    axios
      .post(
        "api/troubleshoot/GetCauseAndActionByErrorCode",
        JSON.stringify(data),
        defaultOptions
      )
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error;
      });
  };
  const getCauseAndAction = async (errorCatCode) => {
    var data = {
      errorCatCode: errorCatCode,
    };
    const causeResponse = await response(data);
    if (typeof causeResponse === object) {
      setCause(causeResponse);
      const actionResponse = await response({
        errorCatCode: cause?.ErrorCatCode,
      });
      if (typeof actionResponse === object) {
        setAction(actionResponse);
      }
      setShowCollapsable(true);
    }
    //manual data
    setCause(list2);
    setAction(list3);
    setShowCollapsable(true);
  };
  const cleanAll = () => {
    setAction(null);
    setCause(null);
    setShowCollapsable(false);
  };

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card className={classes.card}>
            <CardHeader
              className={classes.cardHeader}
              color="warning"
              stats
              icon
            >
              <CardIcon
                onClick={() => {
                  setIsSmartSearch(1);
                  cleanAll();
                }}
                className={classes.cardIcon}
                color={isSmartSearch === 1 ? "success" : "warning"}
              >
                <Typography
                  className={matches ? " " : classes.fontSize1Rem}
                  variant={matches ? "button" : "inherit"}
                >
                  Smart Search
                </Typography>
              </CardIcon>
              <CardIcon
                onClick={() => {
                  setIsSmartSearch(0);
                  cleanAll();
                }}
                className={classes.cardIcon}
                color={isSmartSearch === 0 ? "success" : "warning"}
              >
                <Typography
                  className={matches ? " " : classes.fontSize1Rem}
                  variant={matches ? "button" : "inherit"}
                >
                  Wizard
                </Typography>
              </CardIcon>
            </CardHeader>
            <CardBody>
              <Grid container item xs={12} className={classes.gridContainer}>
                {isSmartSearch === 1 ? (
                  <Grid
                    container
                    item
                    xs={12}
                    className={classes.gridContainer}
                  >
                    <GridItem xs={12} sm={12} md={6}>
                      <Autocomplete
                        freeSolo
                        id="free-solo-2-demo"
                        // disableClearable
                        options={errorSmart}
                        getOptionLabel={(option) => option.ErrorDesc}
                        onChange={(event, newValue) => {
                          cleanAll();
                          getCauseAndAction(newValue.ErrorCatCode);
                          console.log(JSON.stringify(newValue));
                        }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            fullWidth
                            variant="outlined"
                            label="search"
                            className={classes.searchInput}
                            InputProps={{
                              ...params.InputProps,
                              endAdornment: (
                                <InputAdornment>
                                  <IconButton>
                                    <Search onClick={() => {}} />
                                  </IconButton>
                                </InputAdornment>
                              ),
                            }}
                          />
                        )}
                      />
                    </GridItem>
                  </Grid>
                ) : (
                  <Grid container item xs={12} spacing={2}>
                    <Grid
                      item
                      className={classes.gridItemColumnGap}
                      xs={12}
                      sm={12}
                      md={6}
                    >
                      <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={options}
                        getOptionLabel={(option) => option.label}
                        fullWidth
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            fullWidth
                            variant="outlined"
                            label="select Profile"
                          />
                        )}
                      />
                    </Grid>
                    <Grid
                      item
                      className={classes.gridItemColumnGap}
                      xs={12}
                      sm={12}
                      md={6}
                    >
                      <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={options}
                        getOptionLabel={(option) => option.label}
                        fullWidth
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            fullWidth
                            variant="outlined"
                            label="select Make"
                          />
                        )}
                      />
                    </Grid>
                    <Grid
                      item
                      className={classes.gridItemColumnGap}
                      xs={12}
                      sm={12}
                      md={6}
                    >
                      <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={options}
                        getOptionLabel={(option) => option.label}
                        fullWidth
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            fullWidth
                            variant="outlined"
                            label="select Model"
                          />
                        )}
                      />
                    </Grid>
                    <Grid
                      item
                      className={classes.gridItemColumnGap}
                      xs={12}
                      sm={12}
                      md={6}
                    >
                      <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={options}
                        getOptionLabel={(option) => option.label}
                        fullWidth
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            fullWidth
                            variant="outlined"
                            label="select Alert Type"
                          />
                        )}
                      />
                    </Grid>
                    <Grid
                      container
                      item
                      className={classes.cardSubmitContainer}
                      justifyContent="flex-end"
                      xs={12}
                      sm={12}
                      md={12}
                    >
                      <Button
                        variant="contained"
                        color="primary"
                        component="span"
                      >
                        Search
                      </Button>
                    </Grid>
                  </Grid>
                )}
                {showCollapsable ? (
                  <>
                    <Grid
                      container
                      item
                      xs={12}
                      sm={12}
                      md={3}
                      justify="center"
                      className={classes.gridItemColumnGap}
                    >
                      <ThumbUp
                        className={classes.thumbUpDefault}
                        fontSize="large"
                      />{" "}
                      <Typography className={classes.logo} variant="body1">
                        {"   "} Users found this useful{"   "}
                      </Typography>
                    </Grid>
                    <GridItem xs={12} sm={12} md={12}>
                      <Card>
                        <CardHeader className={classes.causeCardHeader}>
                          <Typography variant="h6">Cause</Typography>
                        </CardHeader>
                        <CardBody>{cause?.Detail}</CardBody>
                      </Card>
                      <Card>
                        <CardHeader className={classes.actionCardHeader}>
                          <Typography variant="h6">Action</Typography>
                        </CardHeader>
                        <CardBody>{action?.Detail}</CardBody>
                      </Card>
                      <Card>
                        <CardHeader className={classes.actionCardHeader}>
                          <Typography variant="h6">Chronology</Typography>
                        </CardHeader>
                        <CardBody>NA</CardBody>
                      </Card>
                    </GridItem>
                  </>
                ) : (
                  ""
                )}
              </Grid>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
