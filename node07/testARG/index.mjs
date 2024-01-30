let islog = process.argv[2].toLowerCase();

let clg = (content) => {
  if (islog === "true") {
    console.log(content);
  }
}

clg(1 + 1)
clg("TEST")