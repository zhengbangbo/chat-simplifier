
export function checkOpenAIKey(str: string) {
  var pattern = /^sk-[A-Za-z0-9]{48}$/;
  return pattern.test(str);
}
