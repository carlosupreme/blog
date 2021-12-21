export default async function Ajax(url, success, error, type) {
  try {
    let res = await fetch(url);
    let conversor;

    if (type === "text") {
      conversor = await res.text();
    } else if (type === "json") {
      conversor = await res.json();
    }

    if(!res.ok) throw {status: res.status, statusText: res.statusText}
    
    success(conversor);
  } catch (err) {
    error(err)
  }
}
