const pt = require("puppeteer");

module.exports = async function (option) {
  const bs = await pt.launch({
      executablePath:
        "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
      headless: false, // 设置为false以非无头模式运行
    }),
    pg = await bs.newPage(),
    url = option.url;

  await pg.goto(url, {
    timeout: 30 * 1000,
    waitUntil: "networkidle2",
  });

  const result = await pg.evaluate(option.callback);

  await bs.close();

  process.send(result);

  setTimeout(() => {
    process.exit(0);
  }, 1000);
};
