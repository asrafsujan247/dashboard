// Local Imports
import { Page } from "@/components/shared/Page";
import { Card } from "@/components/ui";
import { mailList } from "../data";
import { Item } from "./Item";
import { Header } from "./Header";
import { Footer } from "./Footer";

// ----------------------------------------------------------------------

export function MailList() {
  return (
    <Page title="Mail App">
      <div className="transition-content grid flex-1 grid-cols-1 place-content-start px-(--margin-x) pb-5">
        <Header />
        <Card>
          {mailList.map((mail) => (
            <Item key={mail.id} data={mail} />
          ))}
        </Card>
        <Footer />
      </div>
    </Page>
  );
}
