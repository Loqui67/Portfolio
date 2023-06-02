import React, { useState } from "react";
import {
  Button,
  TextField,
  Stack,
  FormGroup,
  Alert,
  AlertTitle,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@mui/material";
import { t } from "@lingui/macro";
import CustomBox from "../Custom/CustomBox";
import CustomTypoTitle from "../Custom/CustomTypoTitle";
import emailjs from "@emailjs/browser";
import { GoogleReCaptcha } from "react-google-recaptcha-v3";

const ContactMe = () => {
  const [refreshReCaptcha, setRefreshReCaptcha] = useState(false);
  const [isVerified, setIsVerified] = useState();

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    message: "",
    CV: false,
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
    const { name, value, checked } = event.target;

    if (name === "CV") {
      setUserInfo((prevUserInfo) => ({
        ...prevUserInfo,
        CV: checked,
      }));
      return;
    }

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

    if (!isVerified) {
      setAlert(() => {
        removeAlertAfter5s();
        return {
          type: "error",
          message: t`Please verify that you are not a robot.`,
        };
      });
      return;
    }
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
      return;
    }
    setIsSubmitting(true);
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          name: userInfo.name,
          email: userInfo.email,
          message: userInfo.message,
          CV: userInfo.CV,
        },
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(() => {
        if (userInfo.CV) {
          emailjs.send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_CV_ID,
            { name: userInfo.name, email: userInfo.email },
            process.env.REACT_APP_EMAILJS_USER_ID
          );
        }

        setRefreshReCaptcha((r) => !r);
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
          CV: false,
        });
        setValidations({
          name: true,
          email: true,
          message: true,
        });
      })
      .catch((err) => {
        console.error(err);
        setRefreshReCaptcha((r) => !r);
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
          width: { xs: "90%", sm: "70%", md: "50%", lg: "40%" },
        }}
      >
        <Stack direction="column" spacing={1}>
          <CustomTypoTitle divider>{t`Contact Me`}</CustomTypoTitle>
          {renderAlert()}
          <CustomBox
            component="form"
            noValidate
            sx={{
              "& .MuiTextField-root": { m: 1 },
              width: "100%",
            }}
          >
            <FormGroup sx={{ marginTop: "1rem" }}>
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
              <FormControlLabel
                control={<Checkbox name="CV" onChange={handleInputChange} />}
                label={t`AskForCV`}
                sx={{ m: 1 }}
                value={userInfo.CV}
              />
              <GoogleReCaptcha
                onVerify={setIsVerified}
                refreshReCaptcha={refreshReCaptcha}
              />
              <Button
                variant="contained"
                sx={{ m: 1 }}
                disabled={isSubmitting || !areAllInputsValid()}
                onClick={handleSubmit}
              >
                Submit
              </Button>
              <Typography variant="caption" color={"primary"}>
                This site is protected by reCAPTCHA and the Google{" "}
                <a href="https://policies.google.com/privacy">Privacy Policy</a>{" "}
                and{" "}
                <a href="https://policies.google.com/terms">Terms of Service</a>{" "}
                apply.
              </Typography>
            </FormGroup>
          </CustomBox>
        </Stack>
      </CustomBox>
    </React.Fragment>
  );
};

export default ContactMe;
