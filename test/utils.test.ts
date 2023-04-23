import { checkOpenAIKey } from "../utils/utils";
import { describe, it, expect } from 'vitest'


describe('checkOpenAIKey', () => {
  it('should return false when OpenAI Api Key is incorrect', () => {
    expect(checkOpenAIKey('sk-c0VR')).toBe(false)
  })
  it('should return true when OpenAI APi Key is correct', () => {
    expect(checkOpenAIKey('sk-cU0xvexxxxxxxxxxxxxxxxxxxxxxxxxxxx00tPk7H2iue0VR')).toBe(true)
  })
})
