export default function convertList(payload: any): any[] { //eslint-disable-line
  const res = Object.keys(payload).map((id) => payload[id]);
  return res;
}
