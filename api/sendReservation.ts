interface FormData {
  name: string;
  email: string;
  people: string;
  message: string;
}

export const sendReservation = async (formData: FormData) => {
  const response = await fetch("/api/sendEmail", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (response.ok) {
    return response;
  }

  throw new Error(`http error: ${response.status}`);
};
