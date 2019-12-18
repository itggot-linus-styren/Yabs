export default function convertList(payload: any): any[] { //eslint-disable-line
  return Object.keys(payload).map((id) => payload[id]);
}
