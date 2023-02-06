import { AnimatePresence, motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import DropDown, { FormType } from "../components/DropDown";
import Footer from "../components/Footer";
import Github from "../components/GitHub";
import Header from "../components/Header";
import LoadingDots from "../components/LoadingDots";
import ResizablePanel from "../components/ResizablePanel";

const Home: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const [chat, setChat] = useState("");
  const [form, setForm] = useState<FormType>("段落");
  const [generatedChat, setGeneratedChat] = useState<String>("");

  console.log("Streamed response: ", generatedChat);

  const prompt =
    form === '段落'?
      `用一段话详略得当总结这段聊天内容：\n${chat}`
      : `用无序列表详略得当总结这段聊天内容：\n${chat}`;

  const generateChat = async (e: any) => {
    e.preventDefault();
    setGeneratedChat("");
    setLoading(true);
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
      }),
    });
    console.log("Edge function returned.");

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    // This data is a ReadableStream
    const data = response.body;
    if (!data) {
      return;
    }

    const reader = data.getReader();
    const decoder = new TextDecoder();
    let done = false;

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value).replace("<|im_end|>", "");
      setGeneratedChat((prev) => prev + chunkValue);
    }

    setLoading(false);
  };

  return (
    <div className="flex max-w-5xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>Chat Simplifier</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-12 sm:mt-20">
        <div className="flex flex-wrap justify-center space-x-2">
          <a
            className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-600 shadow-md transition-colors hover:bg-gray-100 mb-5"
            href="https://github.com/zhengbangbo/chat-simplifier"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
            <p>GitHub</p>
          </a>
          <a
            className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-600 shadow-md transition-colors hover:bg-gray-100 mb-5"
            href="https://imzbb.cc/img/sponsorship.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#888888" d="M12.001 4.529a5.998 5.998 0 0 1 8.242.228a6 6 0 0 1 .236 8.236l-8.48 8.492l-8.478-8.492a6 6 0 0 1 8.48-8.464zm6.826 1.641a3.998 3.998 0 0 0-5.49-.153l-1.335 1.198l-1.336-1.197a3.999 3.999 0 0 0-5.494.154a4 4 0 0 0-.192 5.451L12 18.654l7.02-7.03a4 4 0 0 0-.193-5.454z"/></svg>
            <p>赞助</p>
          </a>
        </div>

        <h1 className="sm:text-6xl text-4xl max-w-2xl font-bold text-slate-900">
          聊天内容简化器
        </h1>
        <p className="text-slate-500 mt-5">群消息太多？太长不看！</p>
        <div className="max-w-xl w-full">
          <div className="flex mt-10 items-center space-x-3">
            <Image
              src="/1-black.png"
              width={30}
              height={30}
              alt="1 icon"
              className="mb-5 sm:mb-0"
            />
            <p className="text-left font-medium">
              粘贴你的聊天内容{" "}
              <span className="text-blue-200 hover:text-blue-400">
                <a
                  href="https://github.com/zhengbangbo/chat-simplifier/wiki/Help"
                  target="_blank"
                  rel="noopener noreferrer"
                >(点击这里查看教程)</a>
              </span>
            </p>
          </div>
          <textarea
            value={chat}
            onChange={(e) => setChat(e.target.value)}
            rows={4}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black my-5"
            placeholder={
              "多选聊天内容，复制。通常包含昵称、时间和内容。"
            }
          />
          <div className="flex mb-5 items-center space-x-3">
            <Image src="/2-black.png" width={30} height={30} alt="1 icon" />
            <p className="text-left font-medium">选择输出结果的形式。</p>
          </div>
          <div className="block">
            <DropDown form={form} setForm={(newForm) => setForm(newForm)} />
          </div>

          {!loading && (
            <button
              className="bg-black rounded-xl text-white font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-black/80 w-full"
              onClick={(e) => generateChat(e)}
            >
              简化聊天内容 &rarr;
            </button>
          )}
          {loading && (
            <button
              className="bg-black rounded-xl text-white font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-black/80 w-full"
              disabled
            >
              <LoadingDots color="white" style="large" />
            </button>
          )}
          <div className="mt-1 items-center space-x-3">
            <span className="text-slate-200">
              不建议上传过于隐私的聊天内容，详情查看
              <a
                className="text-blue-200 hover:text-blue-400"
                href="https://github.com/zhengbangbo/chat-simplifier/wiki/Privacy-Policy"
                target="_blank"
                rel="noopener noreferrer"
              >《隐私声明》</a>
            </span>
          </div>
        </div>
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{ duration: 2000 }}
        />
        <hr className="h-px bg-gray-700 border-1 dark:bg-gray-700" />
        <ResizablePanel>
          <AnimatePresence mode="wait">
            <motion.div className="space-y-10 my-10">
              {generatedChat && (
                <>
                  <div>
                    <h2 className="sm:text-4xl text-3xl font-bold text-slate-900 mx-auto">
                      简化后的内容
                    </h2>
                  </div>
                  <div className="space-y-8 flex flex-col items-center justify-center max-w-xl mx-auto">
                    <div
                      className="bg-white rounded-xl shadow-md p-4 hover:bg-gray-100 transition cursor-copy border"
                      onClick={() => {
                        navigator.clipboard.writeText(generatedChat.trim());
                        toast("Chat copied to clipboard", {
                          icon: "✂️",
                        });
                      }}
                    >
                      <p>{generatedChat}</p>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </ResizablePanel>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
