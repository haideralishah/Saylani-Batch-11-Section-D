import Greet from "./greet";
import Hobbies from "./hobbies";
import Post from "./post";
import { UserType } from "./usertype";

type UserTimelineType = {
  user: UserType | null;
};

export default function UserTimeline({ user }: UserTimelineType) {
    console.log(user)
  return (
    <>
      <Greet userName={user?.userName} />
      <Hobbies 
        hobbies={user?.hobbies}
      />     
    </>
  );
}
