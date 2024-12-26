const SliderModel = require("../db/models/slider");

class CourseService {
  async getCourses() {
    return await SliderModel.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
  }
}

module.exports = new CourseService();
