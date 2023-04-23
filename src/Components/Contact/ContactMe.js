import React, { useState } from "react";
import {
  Button,
  TextField,
  Stack,
  FormGroup,
  Alert,
  AlertTitle,
} from "@mui/material";
import { t } from "@lingui/macro";
import axios from "axios";
import CustomBox from "../MuiCustomComponents/CustomBox";
import CustomTypoTitle from "../MuiCustomComponents/CustomTypoTitle";

const ContactMe = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [validations, setValidations] = useState({
    name: true,
    email: true,
    message: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState({
    type: "",
    message: "",
  });

  const validateInput = (field, value) => {
    switch (field) {
      case "name":
        return value.trim() !== "";

      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);

      case "message":
        return value.trim() !== "";

      default:
        return false;
    }
  };

  const areAllInputsValid = () =>
    validateInput("name", userInfo.name) &&
    validateInput("email", userInfo.email) &&
    validateInput("message", userInfo.message);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [name]: value,
    }));
    setValidations((prevValidations) => ({
      ...prevValidations,
      [name]: validateInput(name, value),
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isFormValid =
      Object.values(validations).every((value) => value) && areAllInputsValid();
    if (!isFormValid) {
      setAlert(() => {
        removeAlertAfter5s();
        return {
          type: "error",
          message: t`Please fill out the form correctly.`,
        };
      });
      removeAlertAfter5s();
      return;
    }
    setIsSubmitting(true);
    const data = {
      name: userInfo.name,
      email: userInfo.email,
      message: userInfo.message,
    };

    axios
      .post("https://formspree.io/f/myyabryw", data)
      .then(() => {
        setIsSubmitting(false);
        setAlert(() => {
          removeAlertAfter5s();
          return {
            type: "success",
            message: t`Message sent successfully!`,
          };
        });
        setUserInfo({
          name: "",
          email: "",
          message: "",
        });
        setValidations({
          name: true,
          email: true,
          message: true,
        });
      })
      .catch((err) => {
        setIsSubmitting(false);
        setAlert(() => {
          removeAlertAfter5s();
          return {
            type: "error",
            message: t`Something went wrong. Please try again later.`,
          };
        });
      });
  };

  const removeAlertAfter5s = () => {
    setTimeout(() => {
      setAlert({
        type: "",
        message: "",
      });
    }, 5000);
  };

  const renderAlert = () => {
    const { type, message } = alert;
    if (!type) {
      return null;
    }
    return (
      <CustomBox
        responsive
        sx={{
          zIndex: "1000",
        }}
      >
        <Alert
          severity={type}
          onClose={() => {}}
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AlertTitle>{type === "success" ? t`Success` : t`Error`}</AlertTitle>
          {message}
        </Alert>
      </CustomBox>
    );
  };

  return (
    <React.Fragment>
      <CustomBox
        whiteBox
        responsive
        sx={{
          width: "1200px",
        }}
      >
        <Stack direction="column" spacing={1} alignItems={"center"}>
          <CustomTypoTitle>{t`Contact Me`}</CustomTypoTitle>
          {renderAlert()}
          <CustomBox
            component="form"
            noValidate
            sx={{
              "& .MuiTextField-root": { m: 1 },
              width: "100%",
            }}
          >
            <FormGroup>
              <TextField
                id="name"
                label="Name"
                name="name"
                variant="outlined"
                disabled={isSubmitting}
                value={userInfo.name}
                onBlur={() => {
                  validateInput("name", userInfo.name);
                }}
                onChange={handleInputChange}
                error={!validations.name}
                helperText={!validations.name && t`Please enter a name.`}
              />
              <TextField
                id="email"
                label="Email"
                name="email"
                variant="outlined"
                disabled={isSubmitting}
                value={userInfo.email}
                onBlur={() => {
                  validateInput("email", userInfo.email);
                }}
                onChange={handleInputChange}
                error={!validations.email}
                helperText={
                  !validations.email && t`Please enter a valid email.`
                }
              />
              <TextField
                multiline
                TextField
                id="message"
                label="Message"
                name="message"
                variant="outlined"
                disabled={isSubmitting}
                value={userInfo.message}
                onBlur={() => {
                  validateInput("message", userInfo.message);
                }}
                onChange={handleInputChange}
                error={!validations.message}
                helperText={!validations.message && t`Please enter a message.`}
              />
              <input type="text" name="_gotcha" style={{ display: "none" }} />
              <Button
                variant="contained"
                sx={{ m: 1 }}
                disabled={isSubmitting || !areAllInputsValid()}
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </FormGroup>
          </CustomBox>
        </Stack>
      </CustomBox>
    </React.Fragment>
  );
};

export default ContactMe;
