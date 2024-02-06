import { Main } from "@/app/Main";
import ContactSideNavigation from "@/app/contact/ContactSideNavigation";

export default function Contact() {
  return (
    <>
      <ContactSideNavigation />
      <Main>
        <p>You can find me online in a few places. Please say hi!</p>
        <p>
          If you really want to, you can{" "}
          <a href="mailto:brian.david.vaughn@gmail.com">email me</a>.
        </p>
      </Main>
    </>
  );
}
