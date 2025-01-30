export type LoginFormState =
  | {
    state: "loading";
  }
  | {
    state: "error";
    error: string;
  }
  | {
    state: "success";
  }
  | {
    state: "logged-out";
  }
  | {
    state: "multiple-found";
    events: { id: string; name: string }[];
  };
