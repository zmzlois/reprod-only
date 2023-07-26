export const PEOPLE = {
    Mary: "Mary",
    John: "John",
    Jane: "Jane"
} as const;
export type PEOPLE = (typeof PEOPLE)[keyof typeof PEOPLE];
 