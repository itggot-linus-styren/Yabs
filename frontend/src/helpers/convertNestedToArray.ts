export default function convertList(payload: any, typeOfId: string): any[] { //eslint-disable-line
  const res = Object.keys(payload).map((id) => payload[id]);
  return res;
}
