
"use client";
import { useAuth } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import { SignOutButton } from "@clerk/nextjs";
const Protected = () => {
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const {isSignedIn, user } = useUser();
  if (!isLoaded || !userId || !user) {
    return null;
  }
  return (
    
    <div>
     return <div>
      Hello, {user.firstName} welcome to Clerk
      <SignOutButton />
     </div>;
  </div>
  )
}

export default Protected