// @ts-ignore
export const sendReservation = async (formData) => {
  try {
    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        to: "minskiam@gmail.com",
        from: "dsds",
        data: JSON.stringify(formData),
      }),
    });
    return response;
  } catch (error) {
    return error;
  }
};
