export function domain() {
  return "http://localhost:5000";
}
export function instiId() {
  const instiId = localStorage.getItem("instiId");
  return instiId;
}
