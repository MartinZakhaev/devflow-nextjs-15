import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/route";

// const Home = async () => {
const Home = async () => {
  const session = await auth();
  console.log(session);
  return (
    <>
      <h1 className="text-3xl font-black text-light-500">
        Welcome to the world of Next.js 15!
      </h1>
      <form
        className="px-10 pt-[100px]"
        action={async () => {
          "use server";
          await signOut({ redirectTo: ROUTES.SIGN_IN });
        }}
      >
        <Button type="submit">Logout</Button>
      </form>
    </>
  );
};

export default Home;
