import React from "react";
import PropTypes from "prop-types";

function Test(props) {
  console.log(props);
  return (
    <div>
      标题:{props.title}
      <br />
      姓名:{props.name}
      <br />
      年龄:{props.age}
    </div>
  );
}

// Test.defaultProps = {
//   title: "蜗牛默认值",
//   name: "张三",
//   age: 30,
// };

Test.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

export default Test;
