import { sha256 } from 'js-sha256'
interface AuthPayload {
  t: number
  m: string
}

async function digestMessage(message: string) {
  if (typeof crypto !== 'undefined' && crypto?.subtle?.digest) {
    const msgUint8 = new TextEncoder().encode(message)
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8)
    const hashArray = Array.from(new Uint8Array(hashBuffer))
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
  } else {
    return sha256(message).toString()
  }
}

export const generateSignature = async(payload: AuthPayload) => {
  const { t: timestamp, m: lastMessage } = payload
  const secretKey = process.env.NEXT_PUBLIC_SECRET as string
  console.log('secretKey', secretKey)
  const signText = `${timestamp}:${lastMessage}:${secretKey}`
  console.log('signText', signText)
  // eslint-disable-next-line no-return-await
  return await digestMessage(signText)
}

export const verifySignature = async(payload: AuthPayload, sign: string) => {
  const payloadSign = await generateSignature(payload)
  console.log('payloadSign', payloadSign);
  console.log('sign', sign);
  return payloadSign === sign
}
