const pt = require("puppeteer");

(async () => {
  const bs = await pt.launch({
      executablePath:
        "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
      headless: false, // 设置为false以非无头模式运行
    }),
    url =
      "https://space.bilibili.com/4848323/channel/collectiondetail?sid=1646230&ctype=0",
    pg = await bs.newPage();

  await pg.goto(url, {
    timeout: 30 * 1000,
    waitUntil: "networkidle2",
  });

  const result = await pg.evaluate(() => {
    const $ = window.$,
      $item = $(".video-list .small-item");

    let data = [];

    $item.each((index, item) => {
      const $el = $(item),
        $elLink = $el.find(".title");

      const dataItem = {
        title: $elLink.prop("title"),
        href: $elLink.prop("href"),
        img: "test",
      };

      data.push(dataItem);
    });

    return data;
  });

  await bs.close();

  process.send(result);

  setTimeout(() => {
    process.exit(0);
  });
  
})();
