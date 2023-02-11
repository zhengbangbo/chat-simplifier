import { useTranslations } from 'next-intl'

export default function Recommend() {
  const t = useTranslations('Index')
  return (
    <div className="my-5 max-w-xl w-full">
      <h2 className=" text-slate-400 mb-4">{t('recommend')}</h2>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
        <li>
          <a href="https://readpilot.vercel.app/" className="recommend-container">
            Read Pilot
          </a>
        </li>
        <li>
          <a href="https://bing-chat.vercel.app/" className="recommend-container">
            Bing Chat
          </a>
        </li>
        <li>
          <a href="https://chattytutor.vercel.app/" className="recommend-container">
            Chatty Tutor
          </a>
        </li>
        <li>
          <a href="https://graphgpt.vercel.app/" className="recommend-container">
            GraphGPT
          </a>
        </li>
        <li>
          <a href="https://www.twitterbio.com/" className="recommend-container">
            Twitter Bio
          </a>
        </li>
        <li>
          <a href="https://email-helper.vercel.app/" className="recommend-container">
            Email Helper
          </a>
        </li>
        <li>
          <a href="https://www.teach-anything.com/" className="recommend-container">
            Teach Anything
          </a>
        </li>
      </ul>
    </div>
  )
}
