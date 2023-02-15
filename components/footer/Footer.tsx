import Link from "next/link";
import { ButtonLink } from "../button/Button";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation("", { useSuspense: false });
  return (
    <div className="footer primary m-0 flex w-full items-center justify-evenly space-x-4 py-4">
      <ButtonLink
        to="https://directed.dev"
        target="_blank"
        text={t("need_help")}
        uppercase={true}
        backgroundColor="accent1"
        otherClasses="hover:border-accent2 button"
      />
      <ButtonLink
        to="https://directed.dev"
        target="_blank"
        text={t("have_suggestion")}
        uppercase={true}
        backgroundColor="accent1"
        otherClasses="hover:border-accent2 button"
      />
      <div className="flex flex-col p-1 text-sm text-white">
        <p className="flex flex-row space-x-1">
          <Link href="">{t("terms_conditions")} |</Link>
          <Link href="">{t("privacy")}</Link>
        </p>
        <p>©2022 DirectEd. {t("rights_reserved")}</p>
      </div>
    </div>
  );
};
