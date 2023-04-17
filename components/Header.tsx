import Link from "next/link";
import { useRouter } from 'next/router'
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations('Index')
  const { locale, locales, route } = useRouter()
  const otherLocale = locales?.find((cur) => cur !== locale)

  return (
    <header className="flex  flex-row-reverse justify-between items-center w-full mt-5 sm:px-4 px-2">
      <div className="flex gap-2 flex-row text-slate-500">
      {
        otherLocale && (
          <div
            className="relative font-medium text-black-600 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-x-100">
          <Link href={route} locale={otherLocale}>
            {t('switchLocale', { locale: otherLocale })}
          </Link>
          </div>
        )
      }
      {" / "}
        <a
          className="relative font-medium text-black-600 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-x-100"
          href="https://github.com/zhengbangbo/chat-simplifier/wiki/Deploy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>{t('deployWiki')}</p>
        </a>
      </div>
    </header>
  );
}
