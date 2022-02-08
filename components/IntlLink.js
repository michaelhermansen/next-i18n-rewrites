import Link from "next/link";
import { getAlias } from "../lib/i18n";

const IntlLink = ({ children, href, locale, ...rest }) => {
  return (
    <Link href={getAlias(href, locale)} locale={locale}>
      <a {...rest}>{children}</a>
    </Link>
  );
};

export default IntlLink;
