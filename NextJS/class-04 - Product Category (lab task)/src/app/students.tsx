
type StudentsPropType = {
  name: string;
  feePaid: boolean;
  rollNum: number;
};

export default function StudentsListing({
  name,
  feePaid,
  rollNum,
}: StudentsPropType) {
  return (
    <p>
      <span>{name}</span><br />
      <span>{rollNum}</span> <br />
      {feePaid ? (
        <span>Your fee is submitted .</span>
      ) : (
        <span style={{ color: "red" }}>Please clear your dues.</span>
      )}
    </p>
  );
}
