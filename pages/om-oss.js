import { useRouter } from "next/router";
import IntlLink from "../components/IntlLink";

export default function About({ title }) {
  const router = useRouter();
  return (
    <div>
      <p>{title}</p>
      <IntlLink href={router.pathname} locale="no">
        {" NO "}
      </IntlLink>
      <IntlLink href={router.pathname} locale="en">
        {" EN "}
      </IntlLink>
      <IntlLink href={router.pathname} locale="de">
        {" DE "}
      </IntlLink>
    </div>
  );
}

export const getStaticProps = ({ locale }) => {
  const locTitle = {
    no: "om oss",
    en: "about us",
    de: "über uns",
  };

  return {
    props: {
      title: locTitle[locale],
    },
  };
};
