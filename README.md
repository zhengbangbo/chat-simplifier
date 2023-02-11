# Chat Simplifier

[![discord](https://img.shields.io/badge/chat-on%20discord-7289da.svg?sanitize=true)](https://chat.imzbb.cc)

[中文版](https://github.com/zhengbangbo/chat-simplifier/blob/main/README_zh.md)

This project simplify chat content for you using AI.

[![Chat Simplifier](./public/screenshot.png)](https://chat-simplifier.vercel.app/)

## How it works

This project uses the [OpenAI GPT-3 API](https://openai.com/api/) (specifically, text-davinci-003) and [Vercel Edge functions](https://vercel.com/features/edge-functions) with streaming. It constructs a prompt based on the form and user input, sends it to the GPT-3 API via a Vercel Edge function, then streams the response back to the application.

## Running Locally

After cloning the repo, go to [OpenAI](https://beta.openai.com/account/api-keys) to make an account and put your API key in a file called `.env`.

Then, run the application in the command line and it will be available at `http://localhost:3000`.

```bash
npm run dev
```

## Environment variable description

| Environment variable | Description | Optional value |
|---------|------|------|
|OPENAI_API_KEY| OpenAI API Key| ([Get](https://beta.openai.com/account/api-keys)) |
|NEXT_PUBLIC_USE_USER_KEY|Whether to use the API key entered by the user|`true` or `false` |
|OPENAI_MODEL|The model used when requesting OpenAI|`text-davinci-003`|

## One-Click Deploy

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=vercel-examples):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fzhengbangbo%2Fchat-simplifier&env=OPENAI_API_KEY,NEXT_PUBLIC_USE_USER_KEY,OPENAI_MODEL&envDescription=Click%20%22Learn%20More%22%20on%20the%20right%20to%20view%20the%20description%20of%20the%20environment%20variable&envLink=https%3A%2F%2Fgithub.com%2Fzhengbangbo%2Fchat-simplifier%2Fwiki%2FDeploy&project-name=chat-simplifier&repository-name=chat-simplifier)

## Credits

Inspired by [TwtterBio](https://github.com/Nutlope/twitterbio) and [Jimmy Lv](https://www.bilibili.com/video/BV17M411i7B6).
