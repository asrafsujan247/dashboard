// Local Imports
import { Page } from "@/components/shared/Page";
import { Content } from "./Content";
import { Header } from "./Header";
import { Reply } from "./Reply";
import { Sender } from "./Sender";
import { Title } from "./Title";

// ----------------------------------------------------------------------

export default function MailContent() {
  return (
    <Page title="Mail App">
      <div className="transition-content px-(--margin-x) pb-5">
        <div className="flex min-h-[calc(100dvh-85px)] flex-col">
          <div className="grow">
            <Header />
            <Title />
            <Sender />
            <Content />
          </div>
          <Reply />
        </div>
      </div>
    </Page>
  );
}
