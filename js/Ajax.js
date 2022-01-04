export default async function Ajax(url, success) {
  try {
    let res = await fetch(url);
    let html = await res.text();
    if (!res.ok) throw { status: res.status, statusText: res.statusText };

    success(html);
  } catch (err) {
    console.warn(err);
  }
}
