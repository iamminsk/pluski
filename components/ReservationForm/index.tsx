import { useState, useCallback, useRef } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import scrollIntoView from "smooth-scroll-into-view-if-needed";

import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Textarea } from "../ui/Textarea";
import { useTheme } from "../../theme";
import { BlockWrapper } from "../ui/BlockWrapper";
import { Loader } from "../ui/Loader";
import { sendReservation } from "../../api/sendReservation";

export const ReservationForm = () => {
  const form = useForm();
  const [formState, setFormState] = useState("idle");
  const ref = useRef<HTMLDivElement>(null);
  const { colors, bp } = useTheme();

  const { register, handleSubmit, errors } = form;

  const onFormSubmit = useCallback(
    (data) => {
      setFormState("submitting");
      if (ref.current) {
        scrollIntoView(ref.current, {
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      }

      sendReservation(data)
        .then(() => {
          setFormState("submitted");
        })
        .catch(() => {
          setFormState("error");
        });
    },
    [ref]
  );

  const animations = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3 },
  };

  return (
    <BlockWrapper
      ref={ref}
      css={{
        minHeight: 800,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: colors.JUGNLE_GREEN,
      }}
      wrapperCss={{ padding: "20px 0", position: "relative" }}
      id="reservation"
    >
      <AnimatePresence>
        {formState === "idle" && (
          <motion.div key="form" {...animations} css={{ width: "100%" }}>
            <div
              css={{
                [bp.FROM_TABLET]: {
                  display: "flex",
                },
              }}
            >
              <div
                css={{
                  [bp.FROM_TABLET]: {
                    flexBasis: 500,
                  },
                }}
              >
                <h2 css={{ alignSelf: "flex-start", marginBottom: 10 }}>
                  Rezerwacja
                </h2>
                <p
                  css={{
                    alignSelf: "flex-start",
                    fontSize: 20,
                    lineHeight: "26px",
                    marginBottom: 30,
                  }}
                >
                  Odpowiemy na Twoje zapytanie
                  <br /> tak szybko, jak to możliwe.
                </p>
              </div>
              <form
                onSubmit={handleSubmit(onFormSubmit)}
                css={{
                  [bp.FROM_TABLET]: {
                    flexBasis: 600,
                  },
                }}
              >
                <Input
                  label="imię"
                  name="name"
                  ref={register({ required: "wymagane pole" })}
                  errorMessage={errors.name?.message}
                  wrapperCss={{ marginBottom: 10 }}
                />
                <Input
                  label="e-mail"
                  name="email"
                  ref={register({
                    required: "wymagane pole",
                    pattern: {
                      value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "niepoprawny format",
                    },
                  })}
                  errorMessage={errors.email?.message}
                  wrapperCss={{ marginBottom: 10 }}
                />
                <Input
                  label="liczba gości"
                  name="people"
                  type="number"
                  ref={register}
                  wrapperCss={{ marginBottom: 10 }}
                />
                <Textarea
                  label="wiadomość"
                  name="message"
                  ref={register({ required: "wymagane pole" })}
                  errorMessage={errors.message?.message}
                  css={{ height: 200 }}
                />
                <Button type="submit" css={{ marginTop: 30 }}>
                  Wyślij
                </Button>
              </form>
            </div>
          </motion.div>
        )}
        {formState === "submitting" && (
          <motion.div
            key="loader"
            {...animations}
            css={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Loader />
          </motion.div>
        )}
        {formState === "submitted" && (
          <motion.p
            key="success"
            {...animations}
            css={{ fontSize: 30, textAlign: "center" }}
          >
            Dziękujemy za przesłanie zapytania
          </motion.p>
        )}
        {formState === "error" && (
          <motion.p
            key="error"
            {...animations}
            css={{ fontSize: 30, textAlign: "center" }}
          >
            Przepraszamy, wystąpił błąd
          </motion.p>
        )}
      </AnimatePresence>
    </BlockWrapper>
  );
};
