export interface ServerComponentProp<Params, SearchParams = undefined> {
  params: Promise<Params>;
  searchParams: Promise<SearchParams>;
  children?: React.ReactNode;
}
