const { STRING, INT } = require("../../config/db_type_config");
seq = require("../connection/mysql_connect");

const Slider = seq.define("slider", {
  cid: {
    comment: "course ID",
    type: STRING,
    allowNull: false,
    unique: true,
  },
  href: {
    comment: "course detail page link",
    type: STRING,
    allowNull: false,
  },
  imgUrl: {
    comment: "course image url",
    type: STRING,
    allowNull: false,
  },
  title: {
    comment: "course name",
    type: STRING,
    allowNull: false,
  },
  imgKey: {
    comment: "course image name",
    type: STRING,
    allowNull: false,
  },
  status: {
    comment: "course status",
    type: INT,
    allowNull: false,
  },
});

module.exports = Slider;
