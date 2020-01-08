export default function convertList(payload: any): any[] { //eslint-disable-line @typescript-eslint/no-explicit-any
  return Object.keys(payload).map((id) => payload[id]);
}
