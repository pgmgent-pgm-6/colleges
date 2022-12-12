import * as yup from "yup";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../../core/modules/auth/api";
import isVoid from "../../../core/utils/isVoid";
import Button from "../../Components/Design/Button/Button";
import TextField from "../../Components/Design/Form/TextField";
import Logo from "../../Components/Design/Logo/Logo";
import Title from "../../Components/Design/Text/Title";
import { Variables } from "../../style";
import AppForm from "../../Components/Shared/Form/AppForm";
import DefaultView from "../../Components/Design/View/DefaultView";
import AppTextField from "../../Components/Shared/Form/AppTextField";
import AppSubmitButton from "../../Components/Shared/Form/AppSubmitButton";
import ErrorMessage from "../../Components/Design/Text/ErrorMessage";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const LoginScreen = () => {
  const { mutate, isLoading, isError, error } = useMutation(login);

  const handleSubmit = async (values) => {
    mutate(values);
  };

  return (
    <AppForm
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <DefaultView style={styles.container}>
        <Logo />
        <Title style={styles.title}>Meld je aan met je account</Title>
        {isError && <ErrorMessage error={error} />}
        <AppTextField
          label="Email"
          name="email"
          disabled={isLoading}
          placeholder="john@doe.com"
          autoComplete="email"
          keyboardType="email-address"
        />
        <AppTextField
          label="Password"
          name="password"
          disabled={isLoading}
          secureTextEntry={true}
        />
        <AppSubmitButton disabled={isLoading}>Aanmelden</AppSubmitButton>
      </DefaultView>
    </AppForm>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Variables.sizes.xxxxl * 2,
    flex: 1,
    width: "100%",
    padding: Variables.sizes.horizontalPadding,
    alignItems: "center",
  },
  title: {
    marginTop: Variables.sizes.medium,
    marginBottom: Variables.sizes.xl,
  },
});

export default LoginScreen;
