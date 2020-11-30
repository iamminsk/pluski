import { forwardRef, useCallback } from "react";
import { useForm } from "react-hook-form";
import { useForm as useFormspree } from "@formspree/react";
import { FormspreeProvider } from "@formspree/react";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

import { useTheme } from "../../theme";
import { BlockWrapper } from "../ui/BlockWrapper";
import { Loader } from "../ui/Loader";

export const ReservationForm = () => {
  const { register, handleSubmit, watch, errors } = useForm();

  const [state, handleFormSpreeSubmit] = useFormspree("mwkwnwlb");

  const onFormSubmit = useCallback((data) => {
    handleFormSpreeSubmit(data);
  }, []);

  return (
    <BlockWrapper
      css={{
        minHeight: 700,
        // border: "1px solid red",
        display: "flex",
        alignItems: "center",
      }}
    >
      <AnimatePresence>
        {!state.submitting && !state.succeeded && (
          <motion.div
            css={{ width: "100%" }}
            // initial={{ x: -100 }}
            // animate={{ x: 0 }}
            // exit={{ x: 100 }}
            // transition={{ type: "tween", duration: 2 }}
          >
            <h2>Rezerwacja</h2>
            <FormspreeProvider project="1558634127140322495">
              <form onSubmit={handleSubmit(onFormSubmit)}>
                <Input
                  label="imię"
                  name="name"
                  ref={register({ required: true })}
                />
                <Input label="e-mail" name="_replyto" ref={register} />
                <Input
                  label="liczba gości"
                  name="people"
                  type="number"
                  ref={register({ required: true })}
                />
                <Textarea
                  label="wiadomość"
                  name="message"
                  ref={register({ required: true })}
                  css={{ height: 200 }}
                />
                <Button type="submit" css={{ marginTop: 20 }}>
                  Wyślij
                </Button>
              </form>
            </FormspreeProvider>
          </motion.div>
        )}
        {state.submitting && (
          <motion.div layoutId="contact">
            <Loader />
          </motion.div>
        )}
        {state.succeeded && <motion.p layoutId="contact">hura</motion.p>}
      </AnimatePresence>
    </BlockWrapper>
  );
};

const Input = forwardRef<
  HTMLInputElement,
  JSX.IntrinsicElements["input"] & { label: string }
>(({ label, name, ...props }, ref) => {
  const { colors } = useTheme();

  return (
    <label css={{ fontSize: 20 }}>
      {label}
      <input
        ref={ref}
        name={name}
        css={{
          display: "block",
          height: 50,
          width: "100%",
          border: `2px solid ${colors.JUGNLE_GREEN}`,
          backgroundColor: "transparent",
          padding: 15,
          fontSize: 16,
          marginTop: 5,
          borderRadius: 0,
          WebkitAppearance: "none",
          MozAppearance: "none",
          appearance: "none",
          "::-webkit-inner-spin-button, ::-webkit-outer-spin-button": {
            WebkitAppearance: "none",
            margin: 0,
          },
        }}
        {...props}
      />
    </label>
  );
});

const Textarea = forwardRef<
  HTMLTextAreaElement,
  JSX.IntrinsicElements["textarea"] & { label: string }
>(({ label, name, ...props }, ref) => {
  const { colors } = useTheme();

  return (
    <label css={{ fontSize: 20 }}>
      {label}
      <textarea
        ref={ref}
        name={name}
        css={{
          display: "block",
          height: 50,
          width: "100%",
          border: `2px solid ${colors.JUGNLE_GREEN}`,
          backgroundColor: "transparent",
          padding: 15,
          fontSize: 16,
          marginTop: 5,
        }}
        {...props}
      />
    </label>
  );
});

const Button = (props) => {
  const { colors } = useTheme();
  return (
    <motion.button
      {...props}
      whileHover={{
        backgroundColor: "rgba(53, 96, 90, 0)",
        color: colors.JUGNLE_GREEN,
      }}
      transition={{ duration: 0.15 }}
      css={{
        height: 50,
        width: "100%",
        border: `2px solid ${colors.JUGNLE_GREEN}`,
        backgroundColor: "rgba(53, 96, 90, 1)",
        color: colors.WASHED_WHITE,
        cursor: "pointer",
        fontSize: 20,
        fontWeight: "bold",
      }}
    />
  );
};
