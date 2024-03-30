interface IRequest {
  email: string;
  password: string;
}
export const login = async (props: IRequest) => {
  try {
    const url = "https://reqres.in/api/login";
    const request = {
      method: "POST",
      body: JSON.stringify(props),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(url, request);

    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      throw Error("User not found");
    }
  } catch (e) {
    throw Error(`${e}`);
  }
};
