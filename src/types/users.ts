export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  email: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  address: {
    city: "Phoenix";
    state: "Mississippi";
    country: "United States";
  };
  role: "admin"; // or "moderator", or "user"
}
