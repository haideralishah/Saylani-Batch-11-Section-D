type GreetType = {
  userName?: string;
};

export default function Greet({ userName }: GreetType) {
  return <h1>Welcome {userName}</h1>;
}
