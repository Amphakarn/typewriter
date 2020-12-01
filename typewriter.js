const typewriter = (sentence) => {
  for (let i in sentence) {
    setTimeout(() => {
      console.log(`${sentence[i]} => ${i} ms\n`);
    }, i * 50);
  }
};
const sentence = "hello there from lighthouse labs";
typewriter(sentence);