export async function hello() {
  console.log("hello");
  const { world } = await import("./world");
  world();
}
