module.exports = (fn) => {
  return (req, res, next) => {
    fn(rq, res, next).catch(next);
  };
};
