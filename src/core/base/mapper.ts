export abstract class Mapper<I, O> {
  abstract mapFrom(params: I): O;
  abstract mapTo(params: O): I;
}
