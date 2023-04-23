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
          <a href="https://www.teach-anything.com/" target="_blank" className="recommend-container">
            Teach Anything
          </a>
        </li>
        <li>
          <a href="https://weeklyreport.avemaria.fun/" target="_blank" className="recommend-container">
            Weekly Report
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
          <a href="https://readme.rustc.cloud/" target="_blank" className="recommend-container">
            Readme Generator
          </a>
        </li>
        <li>
          <a href="https://b.jimmylv.cn" target="_blank" className="recommend-container">
            BiliGPT - Video Summarizer
          </a>
        </li>
      </ul>
    </div>
  )
}
