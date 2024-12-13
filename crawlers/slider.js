const crawler = require("../libs/crawler");

crawler({
  url: "https://www.bilibili.com/v/popular/rank/all",
  callback() {
    const $ = window.$,
      $item = $(".video-list .small-item");

    let data = [];
    console.log("$item",$item);

    // $item.each((index, item) => {
    //   const $el = $(item),
    //     $elLink = $el.find(".title"),
    //     $elImg = $el.find("img");

    //   const dataItem = {
    //     cid: $el.attr("data-aid"),
    //     title: $elLink.prop("title"),
    //     href: $elLink.prop("href"),
    //     imgUrl: $elImg.prop("src"),
    //     imgKey: "",
    //     status: 1,
    //   };

    //   data.push(dataItem);
    // });

    return data;
  },
});
