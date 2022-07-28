import { useSession, signOut } from "next-auth/react";

const Account = () => {
  const { data: session } = useSession({ required: true });

  if (session) {
    return (
      <div>
        <p>Welcome {session.user.name}</p>
      </div>
    );
  }

  return (
    <div>
      <p>You are not logged in.</p>
    </div>
  );
};

export default Account;
