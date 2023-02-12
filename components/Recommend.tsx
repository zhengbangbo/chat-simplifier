import { useTranslations } from 'next-intl'

export default function Recommend() {
  const t = useTranslations('Index')
  return (
    <div className="my-5 max-w-xl w-full">
      <h2 className=" text-slate-400 mb-4">{t('recommend')}</h2>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
        <li>
          <a href="https://www.twitterbio.com/" target="_blank" className="recommend-container">
            TwitterBio
          </a>
        </li>
        <li>
          <a href="https://email-helper.vercel.app/" target="_blank" className="recommend-container">
            Email Helper
          </a>
        </li>
        <li>
          <a href="https://www.teach-anything.com/" target="_blank" className="recommend-container">
            Teach Anything
          </a>
        </li>
        <li>
          <a href="https://siteexplainer.vercel.app/" target="_blank" className="recommend-container">
          SiteExplainer
          </a>
        </li>
        <li>
          <a href="https://www.dearaibby.com/" target="_blank" className="recommend-container">
            Dear Aibby
          </a>
        </li>
        <li>
          <a href="https://www.meout.app/" target="_blank" className="recommend-container">
            Meout
          </a>
        </li>
        <li>
          <a href="https://text-summarizer-seven.vercel.app/" target="_blank" className="recommend-container">
            Text Summarizer
          </a>
        </li>
        <li>
          <a href="https://lyrics-explainer.vercel.app/" target="_blank" className="recommend-container">
            Lyrics Explainer
          </a>
        </li>
        <li>
          <a href="https://email-simplify.vercel.app/" target="_blank" className="recommend-container">
            Email Simplify
          </a>
        </li>
      </ul>
    </div>
  )
}
