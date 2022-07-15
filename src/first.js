async function init() {
  const { hello } = await import("./hello");
  hello();
}
init();
