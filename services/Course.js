const SliderModel = require("../db/models/slider");

class CourseService {
  async getCourses() {
    return await SliderModel.findAll();
  }
}

module.exports = new CourseService();
