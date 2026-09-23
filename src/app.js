function add(a, b) {
  return a + b;
}

module.exports = { add };

if (require.main === module) {
  console.log("Application started successfully");
}