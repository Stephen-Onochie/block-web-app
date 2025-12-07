
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model TestPing
 * 
 */
export type TestPing = $Result.DefaultSelection<Prisma.$TestPingPayload>
/**
 * Model House
 * 
 */
export type House = $Result.DefaultSelection<Prisma.$HousePayload>
/**
 * Model MockHouse
 * 
 */
export type MockHouse = $Result.DefaultSelection<Prisma.$MockHousePayload>
/**
 * Model Route
 * 
 */
export type Route = $Result.DefaultSelection<Prisma.$RoutePayload>
/**
 * Model Cluster
 * 
 */
export type Cluster = $Result.DefaultSelection<Prisma.$ClusterPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more TestPings
 * const testPings = await prisma.testPing.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more TestPings
   * const testPings = await prisma.testPing.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.testPing`: Exposes CRUD operations for the **TestPing** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TestPings
    * const testPings = await prisma.testPing.findMany()
    * ```
    */
  get testPing(): Prisma.TestPingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.house`: Exposes CRUD operations for the **House** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Houses
    * const houses = await prisma.house.findMany()
    * ```
    */
  get house(): Prisma.HouseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mockHouse`: Exposes CRUD operations for the **MockHouse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MockHouses
    * const mockHouses = await prisma.mockHouse.findMany()
    * ```
    */
  get mockHouse(): Prisma.MockHouseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.route`: Exposes CRUD operations for the **Route** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Routes
    * const routes = await prisma.route.findMany()
    * ```
    */
  get route(): Prisma.RouteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cluster`: Exposes CRUD operations for the **Cluster** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clusters
    * const clusters = await prisma.cluster.findMany()
    * ```
    */
  get cluster(): Prisma.ClusterDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.1.0
   * Query Engine version: ab635e6b9d606fa5c8fb8b1a7f909c3c3c1c98ba
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    TestPing: 'TestPing',
    House: 'House',
    MockHouse: 'MockHouse',
    Route: 'Route',
    Cluster: 'Cluster'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "testPing" | "house" | "mockHouse" | "route" | "cluster"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      TestPing: {
        payload: Prisma.$TestPingPayload<ExtArgs>
        fields: Prisma.TestPingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestPingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestPingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPingPayload>
          }
          findFirst: {
            args: Prisma.TestPingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestPingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPingPayload>
          }
          findMany: {
            args: Prisma.TestPingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPingPayload>[]
          }
          create: {
            args: Prisma.TestPingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPingPayload>
          }
          createMany: {
            args: Prisma.TestPingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TestPingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPingPayload>[]
          }
          delete: {
            args: Prisma.TestPingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPingPayload>
          }
          update: {
            args: Prisma.TestPingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPingPayload>
          }
          deleteMany: {
            args: Prisma.TestPingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestPingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TestPingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPingPayload>[]
          }
          upsert: {
            args: Prisma.TestPingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPingPayload>
          }
          aggregate: {
            args: Prisma.TestPingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTestPing>
          }
          groupBy: {
            args: Prisma.TestPingGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestPingGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestPingCountArgs<ExtArgs>
            result: $Utils.Optional<TestPingCountAggregateOutputType> | number
          }
        }
      }
      House: {
        payload: Prisma.$HousePayload<ExtArgs>
        fields: Prisma.HouseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HouseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HousePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HouseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HousePayload>
          }
          findFirst: {
            args: Prisma.HouseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HousePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HouseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HousePayload>
          }
          findMany: {
            args: Prisma.HouseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HousePayload>[]
          }
          create: {
            args: Prisma.HouseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HousePayload>
          }
          createMany: {
            args: Prisma.HouseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HouseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HousePayload>[]
          }
          delete: {
            args: Prisma.HouseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HousePayload>
          }
          update: {
            args: Prisma.HouseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HousePayload>
          }
          deleteMany: {
            args: Prisma.HouseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HouseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HouseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HousePayload>[]
          }
          upsert: {
            args: Prisma.HouseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HousePayload>
          }
          aggregate: {
            args: Prisma.HouseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHouse>
          }
          groupBy: {
            args: Prisma.HouseGroupByArgs<ExtArgs>
            result: $Utils.Optional<HouseGroupByOutputType>[]
          }
          count: {
            args: Prisma.HouseCountArgs<ExtArgs>
            result: $Utils.Optional<HouseCountAggregateOutputType> | number
          }
        }
      }
      MockHouse: {
        payload: Prisma.$MockHousePayload<ExtArgs>
        fields: Prisma.MockHouseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MockHouseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MockHousePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MockHouseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MockHousePayload>
          }
          findFirst: {
            args: Prisma.MockHouseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MockHousePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MockHouseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MockHousePayload>
          }
          findMany: {
            args: Prisma.MockHouseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MockHousePayload>[]
          }
          create: {
            args: Prisma.MockHouseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MockHousePayload>
          }
          createMany: {
            args: Prisma.MockHouseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MockHouseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MockHousePayload>[]
          }
          delete: {
            args: Prisma.MockHouseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MockHousePayload>
          }
          update: {
            args: Prisma.MockHouseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MockHousePayload>
          }
          deleteMany: {
            args: Prisma.MockHouseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MockHouseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MockHouseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MockHousePayload>[]
          }
          upsert: {
            args: Prisma.MockHouseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MockHousePayload>
          }
          aggregate: {
            args: Prisma.MockHouseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMockHouse>
          }
          groupBy: {
            args: Prisma.MockHouseGroupByArgs<ExtArgs>
            result: $Utils.Optional<MockHouseGroupByOutputType>[]
          }
          count: {
            args: Prisma.MockHouseCountArgs<ExtArgs>
            result: $Utils.Optional<MockHouseCountAggregateOutputType> | number
          }
        }
      }
      Route: {
        payload: Prisma.$RoutePayload<ExtArgs>
        fields: Prisma.RouteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RouteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RouteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          findFirst: {
            args: Prisma.RouteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RouteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          findMany: {
            args: Prisma.RouteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>[]
          }
          create: {
            args: Prisma.RouteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          createMany: {
            args: Prisma.RouteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RouteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>[]
          }
          delete: {
            args: Prisma.RouteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          update: {
            args: Prisma.RouteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          deleteMany: {
            args: Prisma.RouteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RouteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RouteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>[]
          }
          upsert: {
            args: Prisma.RouteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          aggregate: {
            args: Prisma.RouteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoute>
          }
          groupBy: {
            args: Prisma.RouteGroupByArgs<ExtArgs>
            result: $Utils.Optional<RouteGroupByOutputType>[]
          }
          count: {
            args: Prisma.RouteCountArgs<ExtArgs>
            result: $Utils.Optional<RouteCountAggregateOutputType> | number
          }
        }
      }
      Cluster: {
        payload: Prisma.$ClusterPayload<ExtArgs>
        fields: Prisma.ClusterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClusterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClusterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClusterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClusterPayload>
          }
          findFirst: {
            args: Prisma.ClusterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClusterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClusterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClusterPayload>
          }
          findMany: {
            args: Prisma.ClusterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClusterPayload>[]
          }
          create: {
            args: Prisma.ClusterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClusterPayload>
          }
          createMany: {
            args: Prisma.ClusterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClusterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClusterPayload>[]
          }
          delete: {
            args: Prisma.ClusterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClusterPayload>
          }
          update: {
            args: Prisma.ClusterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClusterPayload>
          }
          deleteMany: {
            args: Prisma.ClusterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClusterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClusterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClusterPayload>[]
          }
          upsert: {
            args: Prisma.ClusterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClusterPayload>
          }
          aggregate: {
            args: Prisma.ClusterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCluster>
          }
          groupBy: {
            args: Prisma.ClusterGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClusterGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClusterCountArgs<ExtArgs>
            result: $Utils.Optional<ClusterCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    testPing?: TestPingOmit
    house?: HouseOmit
    mockHouse?: MockHouseOmit
    route?: RouteOmit
    cluster?: ClusterOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model TestPing
   */

  export type AggregateTestPing = {
    _count: TestPingCountAggregateOutputType | null
    _min: TestPingMinAggregateOutputType | null
    _max: TestPingMaxAggregateOutputType | null
  }

  export type TestPingMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
  }

  export type TestPingMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
  }

  export type TestPingCountAggregateOutputType = {
    id: number
    createdAt: number
    _all: number
  }


  export type TestPingMinAggregateInputType = {
    id?: true
    createdAt?: true
  }

  export type TestPingMaxAggregateInputType = {
    id?: true
    createdAt?: true
  }

  export type TestPingCountAggregateInputType = {
    id?: true
    createdAt?: true
    _all?: true
  }

  export type TestPingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestPing to aggregate.
     */
    where?: TestPingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestPings to fetch.
     */
    orderBy?: TestPingOrderByWithRelationInput | TestPingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestPingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestPings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestPings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TestPings
    **/
    _count?: true | TestPingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestPingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestPingMaxAggregateInputType
  }

  export type GetTestPingAggregateType<T extends TestPingAggregateArgs> = {
        [P in keyof T & keyof AggregateTestPing]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestPing[P]>
      : GetScalarType<T[P], AggregateTestPing[P]>
  }




  export type TestPingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestPingWhereInput
    orderBy?: TestPingOrderByWithAggregationInput | TestPingOrderByWithAggregationInput[]
    by: TestPingScalarFieldEnum[] | TestPingScalarFieldEnum
    having?: TestPingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestPingCountAggregateInputType | true
    _min?: TestPingMinAggregateInputType
    _max?: TestPingMaxAggregateInputType
  }

  export type TestPingGroupByOutputType = {
    id: string
    createdAt: Date
    _count: TestPingCountAggregateOutputType | null
    _min: TestPingMinAggregateOutputType | null
    _max: TestPingMaxAggregateOutputType | null
  }

  type GetTestPingGroupByPayload<T extends TestPingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestPingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestPingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestPingGroupByOutputType[P]>
            : GetScalarType<T[P], TestPingGroupByOutputType[P]>
        }
      >
    >


  export type TestPingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["testPing"]>

  export type TestPingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["testPing"]>

  export type TestPingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["testPing"]>

  export type TestPingSelectScalar = {
    id?: boolean
    createdAt?: boolean
  }

  export type TestPingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt", ExtArgs["result"]["testPing"]>

  export type $TestPingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TestPing"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
    }, ExtArgs["result"]["testPing"]>
    composites: {}
  }

  type TestPingGetPayload<S extends boolean | null | undefined | TestPingDefaultArgs> = $Result.GetResult<Prisma.$TestPingPayload, S>

  type TestPingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TestPingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TestPingCountAggregateInputType | true
    }

  export interface TestPingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TestPing'], meta: { name: 'TestPing' } }
    /**
     * Find zero or one TestPing that matches the filter.
     * @param {TestPingFindUniqueArgs} args - Arguments to find a TestPing
     * @example
     * // Get one TestPing
     * const testPing = await prisma.testPing.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestPingFindUniqueArgs>(args: SelectSubset<T, TestPingFindUniqueArgs<ExtArgs>>): Prisma__TestPingClient<$Result.GetResult<Prisma.$TestPingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TestPing that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TestPingFindUniqueOrThrowArgs} args - Arguments to find a TestPing
     * @example
     * // Get one TestPing
     * const testPing = await prisma.testPing.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestPingFindUniqueOrThrowArgs>(args: SelectSubset<T, TestPingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestPingClient<$Result.GetResult<Prisma.$TestPingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestPing that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestPingFindFirstArgs} args - Arguments to find a TestPing
     * @example
     * // Get one TestPing
     * const testPing = await prisma.testPing.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestPingFindFirstArgs>(args?: SelectSubset<T, TestPingFindFirstArgs<ExtArgs>>): Prisma__TestPingClient<$Result.GetResult<Prisma.$TestPingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestPing that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestPingFindFirstOrThrowArgs} args - Arguments to find a TestPing
     * @example
     * // Get one TestPing
     * const testPing = await prisma.testPing.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestPingFindFirstOrThrowArgs>(args?: SelectSubset<T, TestPingFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestPingClient<$Result.GetResult<Prisma.$TestPingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TestPings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestPingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TestPings
     * const testPings = await prisma.testPing.findMany()
     * 
     * // Get first 10 TestPings
     * const testPings = await prisma.testPing.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testPingWithIdOnly = await prisma.testPing.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TestPingFindManyArgs>(args?: SelectSubset<T, TestPingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestPingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TestPing.
     * @param {TestPingCreateArgs} args - Arguments to create a TestPing.
     * @example
     * // Create one TestPing
     * const TestPing = await prisma.testPing.create({
     *   data: {
     *     // ... data to create a TestPing
     *   }
     * })
     * 
     */
    create<T extends TestPingCreateArgs>(args: SelectSubset<T, TestPingCreateArgs<ExtArgs>>): Prisma__TestPingClient<$Result.GetResult<Prisma.$TestPingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TestPings.
     * @param {TestPingCreateManyArgs} args - Arguments to create many TestPings.
     * @example
     * // Create many TestPings
     * const testPing = await prisma.testPing.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestPingCreateManyArgs>(args?: SelectSubset<T, TestPingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TestPings and returns the data saved in the database.
     * @param {TestPingCreateManyAndReturnArgs} args - Arguments to create many TestPings.
     * @example
     * // Create many TestPings
     * const testPing = await prisma.testPing.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TestPings and only return the `id`
     * const testPingWithIdOnly = await prisma.testPing.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TestPingCreateManyAndReturnArgs>(args?: SelectSubset<T, TestPingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestPingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TestPing.
     * @param {TestPingDeleteArgs} args - Arguments to delete one TestPing.
     * @example
     * // Delete one TestPing
     * const TestPing = await prisma.testPing.delete({
     *   where: {
     *     // ... filter to delete one TestPing
     *   }
     * })
     * 
     */
    delete<T extends TestPingDeleteArgs>(args: SelectSubset<T, TestPingDeleteArgs<ExtArgs>>): Prisma__TestPingClient<$Result.GetResult<Prisma.$TestPingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TestPing.
     * @param {TestPingUpdateArgs} args - Arguments to update one TestPing.
     * @example
     * // Update one TestPing
     * const testPing = await prisma.testPing.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestPingUpdateArgs>(args: SelectSubset<T, TestPingUpdateArgs<ExtArgs>>): Prisma__TestPingClient<$Result.GetResult<Prisma.$TestPingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TestPings.
     * @param {TestPingDeleteManyArgs} args - Arguments to filter TestPings to delete.
     * @example
     * // Delete a few TestPings
     * const { count } = await prisma.testPing.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestPingDeleteManyArgs>(args?: SelectSubset<T, TestPingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestPings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestPingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TestPings
     * const testPing = await prisma.testPing.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestPingUpdateManyArgs>(args: SelectSubset<T, TestPingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestPings and returns the data updated in the database.
     * @param {TestPingUpdateManyAndReturnArgs} args - Arguments to update many TestPings.
     * @example
     * // Update many TestPings
     * const testPing = await prisma.testPing.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TestPings and only return the `id`
     * const testPingWithIdOnly = await prisma.testPing.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TestPingUpdateManyAndReturnArgs>(args: SelectSubset<T, TestPingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestPingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TestPing.
     * @param {TestPingUpsertArgs} args - Arguments to update or create a TestPing.
     * @example
     * // Update or create a TestPing
     * const testPing = await prisma.testPing.upsert({
     *   create: {
     *     // ... data to create a TestPing
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TestPing we want to update
     *   }
     * })
     */
    upsert<T extends TestPingUpsertArgs>(args: SelectSubset<T, TestPingUpsertArgs<ExtArgs>>): Prisma__TestPingClient<$Result.GetResult<Prisma.$TestPingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TestPings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestPingCountArgs} args - Arguments to filter TestPings to count.
     * @example
     * // Count the number of TestPings
     * const count = await prisma.testPing.count({
     *   where: {
     *     // ... the filter for the TestPings we want to count
     *   }
     * })
    **/
    count<T extends TestPingCountArgs>(
      args?: Subset<T, TestPingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestPingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TestPing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestPingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TestPingAggregateArgs>(args: Subset<T, TestPingAggregateArgs>): Prisma.PrismaPromise<GetTestPingAggregateType<T>>

    /**
     * Group by TestPing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestPingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TestPingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestPingGroupByArgs['orderBy'] }
        : { orderBy?: TestPingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TestPingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestPingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TestPing model
   */
  readonly fields: TestPingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TestPing.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestPingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TestPing model
   */
  interface TestPingFieldRefs {
    readonly id: FieldRef<"TestPing", 'String'>
    readonly createdAt: FieldRef<"TestPing", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TestPing findUnique
   */
  export type TestPingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestPing
     */
    select?: TestPingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestPing
     */
    omit?: TestPingOmit<ExtArgs> | null
    /**
     * Filter, which TestPing to fetch.
     */
    where: TestPingWhereUniqueInput
  }

  /**
   * TestPing findUniqueOrThrow
   */
  export type TestPingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestPing
     */
    select?: TestPingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestPing
     */
    omit?: TestPingOmit<ExtArgs> | null
    /**
     * Filter, which TestPing to fetch.
     */
    where: TestPingWhereUniqueInput
  }

  /**
   * TestPing findFirst
   */
  export type TestPingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestPing
     */
    select?: TestPingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestPing
     */
    omit?: TestPingOmit<ExtArgs> | null
    /**
     * Filter, which TestPing to fetch.
     */
    where?: TestPingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestPings to fetch.
     */
    orderBy?: TestPingOrderByWithRelationInput | TestPingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestPings.
     */
    cursor?: TestPingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestPings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestPings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestPings.
     */
    distinct?: TestPingScalarFieldEnum | TestPingScalarFieldEnum[]
  }

  /**
   * TestPing findFirstOrThrow
   */
  export type TestPingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestPing
     */
    select?: TestPingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestPing
     */
    omit?: TestPingOmit<ExtArgs> | null
    /**
     * Filter, which TestPing to fetch.
     */
    where?: TestPingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestPings to fetch.
     */
    orderBy?: TestPingOrderByWithRelationInput | TestPingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestPings.
     */
    cursor?: TestPingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestPings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestPings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestPings.
     */
    distinct?: TestPingScalarFieldEnum | TestPingScalarFieldEnum[]
  }

  /**
   * TestPing findMany
   */
  export type TestPingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestPing
     */
    select?: TestPingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestPing
     */
    omit?: TestPingOmit<ExtArgs> | null
    /**
     * Filter, which TestPings to fetch.
     */
    where?: TestPingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestPings to fetch.
     */
    orderBy?: TestPingOrderByWithRelationInput | TestPingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TestPings.
     */
    cursor?: TestPingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestPings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestPings.
     */
    skip?: number
    distinct?: TestPingScalarFieldEnum | TestPingScalarFieldEnum[]
  }

  /**
   * TestPing create
   */
  export type TestPingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestPing
     */
    select?: TestPingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestPing
     */
    omit?: TestPingOmit<ExtArgs> | null
    /**
     * The data needed to create a TestPing.
     */
    data?: XOR<TestPingCreateInput, TestPingUncheckedCreateInput>
  }

  /**
   * TestPing createMany
   */
  export type TestPingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TestPings.
     */
    data: TestPingCreateManyInput | TestPingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TestPing createManyAndReturn
   */
  export type TestPingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestPing
     */
    select?: TestPingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TestPing
     */
    omit?: TestPingOmit<ExtArgs> | null
    /**
     * The data used to create many TestPings.
     */
    data: TestPingCreateManyInput | TestPingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TestPing update
   */
  export type TestPingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestPing
     */
    select?: TestPingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestPing
     */
    omit?: TestPingOmit<ExtArgs> | null
    /**
     * The data needed to update a TestPing.
     */
    data: XOR<TestPingUpdateInput, TestPingUncheckedUpdateInput>
    /**
     * Choose, which TestPing to update.
     */
    where: TestPingWhereUniqueInput
  }

  /**
   * TestPing updateMany
   */
  export type TestPingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TestPings.
     */
    data: XOR<TestPingUpdateManyMutationInput, TestPingUncheckedUpdateManyInput>
    /**
     * Filter which TestPings to update
     */
    where?: TestPingWhereInput
    /**
     * Limit how many TestPings to update.
     */
    limit?: number
  }

  /**
   * TestPing updateManyAndReturn
   */
  export type TestPingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestPing
     */
    select?: TestPingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TestPing
     */
    omit?: TestPingOmit<ExtArgs> | null
    /**
     * The data used to update TestPings.
     */
    data: XOR<TestPingUpdateManyMutationInput, TestPingUncheckedUpdateManyInput>
    /**
     * Filter which TestPings to update
     */
    where?: TestPingWhereInput
    /**
     * Limit how many TestPings to update.
     */
    limit?: number
  }

  /**
   * TestPing upsert
   */
  export type TestPingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestPing
     */
    select?: TestPingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestPing
     */
    omit?: TestPingOmit<ExtArgs> | null
    /**
     * The filter to search for the TestPing to update in case it exists.
     */
    where: TestPingWhereUniqueInput
    /**
     * In case the TestPing found by the `where` argument doesn't exist, create a new TestPing with this data.
     */
    create: XOR<TestPingCreateInput, TestPingUncheckedCreateInput>
    /**
     * In case the TestPing was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestPingUpdateInput, TestPingUncheckedUpdateInput>
  }

  /**
   * TestPing delete
   */
  export type TestPingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestPing
     */
    select?: TestPingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestPing
     */
    omit?: TestPingOmit<ExtArgs> | null
    /**
     * Filter which TestPing to delete.
     */
    where: TestPingWhereUniqueInput
  }

  /**
   * TestPing deleteMany
   */
  export type TestPingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestPings to delete
     */
    where?: TestPingWhereInput
    /**
     * Limit how many TestPings to delete.
     */
    limit?: number
  }

  /**
   * TestPing without action
   */
  export type TestPingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestPing
     */
    select?: TestPingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestPing
     */
    omit?: TestPingOmit<ExtArgs> | null
  }


  /**
   * Model House
   */

  export type AggregateHouse = {
    _count: HouseCountAggregateOutputType | null
    _avg: HouseAvgAggregateOutputType | null
    _sum: HouseSumAggregateOutputType | null
    _min: HouseMinAggregateOutputType | null
    _max: HouseMaxAggregateOutputType | null
  }

  export type HouseAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type HouseSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type HouseMinAggregateOutputType = {
    id: string | null
    address: string | null
    latitude: number | null
    longitude: number | null
    status: string | null
    clusterId: string | null
  }

  export type HouseMaxAggregateOutputType = {
    id: string | null
    address: string | null
    latitude: number | null
    longitude: number | null
    status: string | null
    clusterId: string | null
  }

  export type HouseCountAggregateOutputType = {
    id: number
    address: number
    latitude: number
    longitude: number
    status: number
    clusterId: number
    _all: number
  }


  export type HouseAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type HouseSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type HouseMinAggregateInputType = {
    id?: true
    address?: true
    latitude?: true
    longitude?: true
    status?: true
    clusterId?: true
  }

  export type HouseMaxAggregateInputType = {
    id?: true
    address?: true
    latitude?: true
    longitude?: true
    status?: true
    clusterId?: true
  }

  export type HouseCountAggregateInputType = {
    id?: true
    address?: true
    latitude?: true
    longitude?: true
    status?: true
    clusterId?: true
    _all?: true
  }

  export type HouseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which House to aggregate.
     */
    where?: HouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Houses to fetch.
     */
    orderBy?: HouseOrderByWithRelationInput | HouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Houses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Houses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Houses
    **/
    _count?: true | HouseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HouseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HouseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HouseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HouseMaxAggregateInputType
  }

  export type GetHouseAggregateType<T extends HouseAggregateArgs> = {
        [P in keyof T & keyof AggregateHouse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHouse[P]>
      : GetScalarType<T[P], AggregateHouse[P]>
  }




  export type HouseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HouseWhereInput
    orderBy?: HouseOrderByWithAggregationInput | HouseOrderByWithAggregationInput[]
    by: HouseScalarFieldEnum[] | HouseScalarFieldEnum
    having?: HouseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HouseCountAggregateInputType | true
    _avg?: HouseAvgAggregateInputType
    _sum?: HouseSumAggregateInputType
    _min?: HouseMinAggregateInputType
    _max?: HouseMaxAggregateInputType
  }

  export type HouseGroupByOutputType = {
    id: string
    address: string
    latitude: number
    longitude: number
    status: string
    clusterId: string
    _count: HouseCountAggregateOutputType | null
    _avg: HouseAvgAggregateOutputType | null
    _sum: HouseSumAggregateOutputType | null
    _min: HouseMinAggregateOutputType | null
    _max: HouseMaxAggregateOutputType | null
  }

  type GetHouseGroupByPayload<T extends HouseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HouseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HouseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HouseGroupByOutputType[P]>
            : GetScalarType<T[P], HouseGroupByOutputType[P]>
        }
      >
    >


  export type HouseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    status?: boolean
    clusterId?: boolean
  }, ExtArgs["result"]["house"]>

  export type HouseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    status?: boolean
    clusterId?: boolean
  }, ExtArgs["result"]["house"]>

  export type HouseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    status?: boolean
    clusterId?: boolean
  }, ExtArgs["result"]["house"]>

  export type HouseSelectScalar = {
    id?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    status?: boolean
    clusterId?: boolean
  }

  export type HouseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "address" | "latitude" | "longitude" | "status" | "clusterId", ExtArgs["result"]["house"]>

  export type $HousePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "House"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      address: string
      latitude: number
      longitude: number
      status: string
      clusterId: string
    }, ExtArgs["result"]["house"]>
    composites: {}
  }

  type HouseGetPayload<S extends boolean | null | undefined | HouseDefaultArgs> = $Result.GetResult<Prisma.$HousePayload, S>

  type HouseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HouseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HouseCountAggregateInputType | true
    }

  export interface HouseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['House'], meta: { name: 'House' } }
    /**
     * Find zero or one House that matches the filter.
     * @param {HouseFindUniqueArgs} args - Arguments to find a House
     * @example
     * // Get one House
     * const house = await prisma.house.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HouseFindUniqueArgs>(args: SelectSubset<T, HouseFindUniqueArgs<ExtArgs>>): Prisma__HouseClient<$Result.GetResult<Prisma.$HousePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one House that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HouseFindUniqueOrThrowArgs} args - Arguments to find a House
     * @example
     * // Get one House
     * const house = await prisma.house.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HouseFindUniqueOrThrowArgs>(args: SelectSubset<T, HouseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HouseClient<$Result.GetResult<Prisma.$HousePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first House that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseFindFirstArgs} args - Arguments to find a House
     * @example
     * // Get one House
     * const house = await prisma.house.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HouseFindFirstArgs>(args?: SelectSubset<T, HouseFindFirstArgs<ExtArgs>>): Prisma__HouseClient<$Result.GetResult<Prisma.$HousePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first House that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseFindFirstOrThrowArgs} args - Arguments to find a House
     * @example
     * // Get one House
     * const house = await prisma.house.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HouseFindFirstOrThrowArgs>(args?: SelectSubset<T, HouseFindFirstOrThrowArgs<ExtArgs>>): Prisma__HouseClient<$Result.GetResult<Prisma.$HousePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Houses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Houses
     * const houses = await prisma.house.findMany()
     * 
     * // Get first 10 Houses
     * const houses = await prisma.house.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const houseWithIdOnly = await prisma.house.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HouseFindManyArgs>(args?: SelectSubset<T, HouseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HousePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a House.
     * @param {HouseCreateArgs} args - Arguments to create a House.
     * @example
     * // Create one House
     * const House = await prisma.house.create({
     *   data: {
     *     // ... data to create a House
     *   }
     * })
     * 
     */
    create<T extends HouseCreateArgs>(args: SelectSubset<T, HouseCreateArgs<ExtArgs>>): Prisma__HouseClient<$Result.GetResult<Prisma.$HousePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Houses.
     * @param {HouseCreateManyArgs} args - Arguments to create many Houses.
     * @example
     * // Create many Houses
     * const house = await prisma.house.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HouseCreateManyArgs>(args?: SelectSubset<T, HouseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Houses and returns the data saved in the database.
     * @param {HouseCreateManyAndReturnArgs} args - Arguments to create many Houses.
     * @example
     * // Create many Houses
     * const house = await prisma.house.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Houses and only return the `id`
     * const houseWithIdOnly = await prisma.house.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HouseCreateManyAndReturnArgs>(args?: SelectSubset<T, HouseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HousePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a House.
     * @param {HouseDeleteArgs} args - Arguments to delete one House.
     * @example
     * // Delete one House
     * const House = await prisma.house.delete({
     *   where: {
     *     // ... filter to delete one House
     *   }
     * })
     * 
     */
    delete<T extends HouseDeleteArgs>(args: SelectSubset<T, HouseDeleteArgs<ExtArgs>>): Prisma__HouseClient<$Result.GetResult<Prisma.$HousePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one House.
     * @param {HouseUpdateArgs} args - Arguments to update one House.
     * @example
     * // Update one House
     * const house = await prisma.house.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HouseUpdateArgs>(args: SelectSubset<T, HouseUpdateArgs<ExtArgs>>): Prisma__HouseClient<$Result.GetResult<Prisma.$HousePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Houses.
     * @param {HouseDeleteManyArgs} args - Arguments to filter Houses to delete.
     * @example
     * // Delete a few Houses
     * const { count } = await prisma.house.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HouseDeleteManyArgs>(args?: SelectSubset<T, HouseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Houses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Houses
     * const house = await prisma.house.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HouseUpdateManyArgs>(args: SelectSubset<T, HouseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Houses and returns the data updated in the database.
     * @param {HouseUpdateManyAndReturnArgs} args - Arguments to update many Houses.
     * @example
     * // Update many Houses
     * const house = await prisma.house.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Houses and only return the `id`
     * const houseWithIdOnly = await prisma.house.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HouseUpdateManyAndReturnArgs>(args: SelectSubset<T, HouseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HousePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one House.
     * @param {HouseUpsertArgs} args - Arguments to update or create a House.
     * @example
     * // Update or create a House
     * const house = await prisma.house.upsert({
     *   create: {
     *     // ... data to create a House
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the House we want to update
     *   }
     * })
     */
    upsert<T extends HouseUpsertArgs>(args: SelectSubset<T, HouseUpsertArgs<ExtArgs>>): Prisma__HouseClient<$Result.GetResult<Prisma.$HousePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Houses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseCountArgs} args - Arguments to filter Houses to count.
     * @example
     * // Count the number of Houses
     * const count = await prisma.house.count({
     *   where: {
     *     // ... the filter for the Houses we want to count
     *   }
     * })
    **/
    count<T extends HouseCountArgs>(
      args?: Subset<T, HouseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HouseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a House.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HouseAggregateArgs>(args: Subset<T, HouseAggregateArgs>): Prisma.PrismaPromise<GetHouseAggregateType<T>>

    /**
     * Group by House.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HouseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HouseGroupByArgs['orderBy'] }
        : { orderBy?: HouseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HouseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHouseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the House model
   */
  readonly fields: HouseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for House.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HouseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the House model
   */
  interface HouseFieldRefs {
    readonly id: FieldRef<"House", 'String'>
    readonly address: FieldRef<"House", 'String'>
    readonly latitude: FieldRef<"House", 'Float'>
    readonly longitude: FieldRef<"House", 'Float'>
    readonly status: FieldRef<"House", 'String'>
    readonly clusterId: FieldRef<"House", 'String'>
  }
    

  // Custom InputTypes
  /**
   * House findUnique
   */
  export type HouseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the House
     */
    select?: HouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the House
     */
    omit?: HouseOmit<ExtArgs> | null
    /**
     * Filter, which House to fetch.
     */
    where: HouseWhereUniqueInput
  }

  /**
   * House findUniqueOrThrow
   */
  export type HouseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the House
     */
    select?: HouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the House
     */
    omit?: HouseOmit<ExtArgs> | null
    /**
     * Filter, which House to fetch.
     */
    where: HouseWhereUniqueInput
  }

  /**
   * House findFirst
   */
  export type HouseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the House
     */
    select?: HouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the House
     */
    omit?: HouseOmit<ExtArgs> | null
    /**
     * Filter, which House to fetch.
     */
    where?: HouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Houses to fetch.
     */
    orderBy?: HouseOrderByWithRelationInput | HouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Houses.
     */
    cursor?: HouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Houses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Houses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Houses.
     */
    distinct?: HouseScalarFieldEnum | HouseScalarFieldEnum[]
  }

  /**
   * House findFirstOrThrow
   */
  export type HouseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the House
     */
    select?: HouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the House
     */
    omit?: HouseOmit<ExtArgs> | null
    /**
     * Filter, which House to fetch.
     */
    where?: HouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Houses to fetch.
     */
    orderBy?: HouseOrderByWithRelationInput | HouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Houses.
     */
    cursor?: HouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Houses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Houses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Houses.
     */
    distinct?: HouseScalarFieldEnum | HouseScalarFieldEnum[]
  }

  /**
   * House findMany
   */
  export type HouseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the House
     */
    select?: HouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the House
     */
    omit?: HouseOmit<ExtArgs> | null
    /**
     * Filter, which Houses to fetch.
     */
    where?: HouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Houses to fetch.
     */
    orderBy?: HouseOrderByWithRelationInput | HouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Houses.
     */
    cursor?: HouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Houses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Houses.
     */
    skip?: number
    distinct?: HouseScalarFieldEnum | HouseScalarFieldEnum[]
  }

  /**
   * House create
   */
  export type HouseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the House
     */
    select?: HouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the House
     */
    omit?: HouseOmit<ExtArgs> | null
    /**
     * The data needed to create a House.
     */
    data?: XOR<HouseCreateInput, HouseUncheckedCreateInput>
  }

  /**
   * House createMany
   */
  export type HouseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Houses.
     */
    data: HouseCreateManyInput | HouseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * House createManyAndReturn
   */
  export type HouseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the House
     */
    select?: HouseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the House
     */
    omit?: HouseOmit<ExtArgs> | null
    /**
     * The data used to create many Houses.
     */
    data: HouseCreateManyInput | HouseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * House update
   */
  export type HouseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the House
     */
    select?: HouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the House
     */
    omit?: HouseOmit<ExtArgs> | null
    /**
     * The data needed to update a House.
     */
    data: XOR<HouseUpdateInput, HouseUncheckedUpdateInput>
    /**
     * Choose, which House to update.
     */
    where: HouseWhereUniqueInput
  }

  /**
   * House updateMany
   */
  export type HouseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Houses.
     */
    data: XOR<HouseUpdateManyMutationInput, HouseUncheckedUpdateManyInput>
    /**
     * Filter which Houses to update
     */
    where?: HouseWhereInput
    /**
     * Limit how many Houses to update.
     */
    limit?: number
  }

  /**
   * House updateManyAndReturn
   */
  export type HouseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the House
     */
    select?: HouseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the House
     */
    omit?: HouseOmit<ExtArgs> | null
    /**
     * The data used to update Houses.
     */
    data: XOR<HouseUpdateManyMutationInput, HouseUncheckedUpdateManyInput>
    /**
     * Filter which Houses to update
     */
    where?: HouseWhereInput
    /**
     * Limit how many Houses to update.
     */
    limit?: number
  }

  /**
   * House upsert
   */
  export type HouseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the House
     */
    select?: HouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the House
     */
    omit?: HouseOmit<ExtArgs> | null
    /**
     * The filter to search for the House to update in case it exists.
     */
    where: HouseWhereUniqueInput
    /**
     * In case the House found by the `where` argument doesn't exist, create a new House with this data.
     */
    create: XOR<HouseCreateInput, HouseUncheckedCreateInput>
    /**
     * In case the House was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HouseUpdateInput, HouseUncheckedUpdateInput>
  }

  /**
   * House delete
   */
  export type HouseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the House
     */
    select?: HouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the House
     */
    omit?: HouseOmit<ExtArgs> | null
    /**
     * Filter which House to delete.
     */
    where: HouseWhereUniqueInput
  }

  /**
   * House deleteMany
   */
  export type HouseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Houses to delete
     */
    where?: HouseWhereInput
    /**
     * Limit how many Houses to delete.
     */
    limit?: number
  }

  /**
   * House without action
   */
  export type HouseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the House
     */
    select?: HouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the House
     */
    omit?: HouseOmit<ExtArgs> | null
  }


  /**
   * Model MockHouse
   */

  export type AggregateMockHouse = {
    _count: MockHouseCountAggregateOutputType | null
    _avg: MockHouseAvgAggregateOutputType | null
    _sum: MockHouseSumAggregateOutputType | null
    _min: MockHouseMinAggregateOutputType | null
    _max: MockHouseMaxAggregateOutputType | null
  }

  export type MockHouseAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    priorityScore: number | null
    visitDurationMinutes: number | null
    houseNumber: number | null
  }

  export type MockHouseSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    priorityScore: number | null
    visitDurationMinutes: number | null
    houseNumber: number | null
  }

  export type MockHouseMinAggregateOutputType = {
    id: string | null
    address: string | null
    latitude: number | null
    longitude: number | null
    neighborhood: string | null
    priorityScore: number | null
    visitDurationMinutes: number | null
    status: string | null
    isCornerHouse: boolean | null
    streetName: string | null
    houseNumber: number | null
    createdAt: Date | null
  }

  export type MockHouseMaxAggregateOutputType = {
    id: string | null
    address: string | null
    latitude: number | null
    longitude: number | null
    neighborhood: string | null
    priorityScore: number | null
    visitDurationMinutes: number | null
    status: string | null
    isCornerHouse: boolean | null
    streetName: string | null
    houseNumber: number | null
    createdAt: Date | null
  }

  export type MockHouseCountAggregateOutputType = {
    id: number
    address: number
    latitude: number
    longitude: number
    neighborhood: number
    priorityScore: number
    visitDurationMinutes: number
    status: number
    isCornerHouse: number
    streetName: number
    houseNumber: number
    createdAt: number
    _all: number
  }


  export type MockHouseAvgAggregateInputType = {
    latitude?: true
    longitude?: true
    priorityScore?: true
    visitDurationMinutes?: true
    houseNumber?: true
  }

  export type MockHouseSumAggregateInputType = {
    latitude?: true
    longitude?: true
    priorityScore?: true
    visitDurationMinutes?: true
    houseNumber?: true
  }

  export type MockHouseMinAggregateInputType = {
    id?: true
    address?: true
    latitude?: true
    longitude?: true
    neighborhood?: true
    priorityScore?: true
    visitDurationMinutes?: true
    status?: true
    isCornerHouse?: true
    streetName?: true
    houseNumber?: true
    createdAt?: true
  }

  export type MockHouseMaxAggregateInputType = {
    id?: true
    address?: true
    latitude?: true
    longitude?: true
    neighborhood?: true
    priorityScore?: true
    visitDurationMinutes?: true
    status?: true
    isCornerHouse?: true
    streetName?: true
    houseNumber?: true
    createdAt?: true
  }

  export type MockHouseCountAggregateInputType = {
    id?: true
    address?: true
    latitude?: true
    longitude?: true
    neighborhood?: true
    priorityScore?: true
    visitDurationMinutes?: true
    status?: true
    isCornerHouse?: true
    streetName?: true
    houseNumber?: true
    createdAt?: true
    _all?: true
  }

  export type MockHouseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MockHouse to aggregate.
     */
    where?: MockHouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MockHouses to fetch.
     */
    orderBy?: MockHouseOrderByWithRelationInput | MockHouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MockHouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MockHouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MockHouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MockHouses
    **/
    _count?: true | MockHouseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MockHouseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MockHouseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MockHouseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MockHouseMaxAggregateInputType
  }

  export type GetMockHouseAggregateType<T extends MockHouseAggregateArgs> = {
        [P in keyof T & keyof AggregateMockHouse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMockHouse[P]>
      : GetScalarType<T[P], AggregateMockHouse[P]>
  }




  export type MockHouseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MockHouseWhereInput
    orderBy?: MockHouseOrderByWithAggregationInput | MockHouseOrderByWithAggregationInput[]
    by: MockHouseScalarFieldEnum[] | MockHouseScalarFieldEnum
    having?: MockHouseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MockHouseCountAggregateInputType | true
    _avg?: MockHouseAvgAggregateInputType
    _sum?: MockHouseSumAggregateInputType
    _min?: MockHouseMinAggregateInputType
    _max?: MockHouseMaxAggregateInputType
  }

  export type MockHouseGroupByOutputType = {
    id: string
    address: string
    latitude: number
    longitude: number
    neighborhood: string
    priorityScore: number
    visitDurationMinutes: number
    status: string
    isCornerHouse: boolean
    streetName: string
    houseNumber: number
    createdAt: Date
    _count: MockHouseCountAggregateOutputType | null
    _avg: MockHouseAvgAggregateOutputType | null
    _sum: MockHouseSumAggregateOutputType | null
    _min: MockHouseMinAggregateOutputType | null
    _max: MockHouseMaxAggregateOutputType | null
  }

  type GetMockHouseGroupByPayload<T extends MockHouseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MockHouseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MockHouseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MockHouseGroupByOutputType[P]>
            : GetScalarType<T[P], MockHouseGroupByOutputType[P]>
        }
      >
    >


  export type MockHouseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    neighborhood?: boolean
    priorityScore?: boolean
    visitDurationMinutes?: boolean
    status?: boolean
    isCornerHouse?: boolean
    streetName?: boolean
    houseNumber?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["mockHouse"]>

  export type MockHouseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    neighborhood?: boolean
    priorityScore?: boolean
    visitDurationMinutes?: boolean
    status?: boolean
    isCornerHouse?: boolean
    streetName?: boolean
    houseNumber?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["mockHouse"]>

  export type MockHouseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    neighborhood?: boolean
    priorityScore?: boolean
    visitDurationMinutes?: boolean
    status?: boolean
    isCornerHouse?: boolean
    streetName?: boolean
    houseNumber?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["mockHouse"]>

  export type MockHouseSelectScalar = {
    id?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    neighborhood?: boolean
    priorityScore?: boolean
    visitDurationMinutes?: boolean
    status?: boolean
    isCornerHouse?: boolean
    streetName?: boolean
    houseNumber?: boolean
    createdAt?: boolean
  }

  export type MockHouseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "address" | "latitude" | "longitude" | "neighborhood" | "priorityScore" | "visitDurationMinutes" | "status" | "isCornerHouse" | "streetName" | "houseNumber" | "createdAt", ExtArgs["result"]["mockHouse"]>

  export type $MockHousePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MockHouse"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      address: string
      latitude: number
      longitude: number
      neighborhood: string
      priorityScore: number
      visitDurationMinutes: number
      status: string
      isCornerHouse: boolean
      streetName: string
      houseNumber: number
      createdAt: Date
    }, ExtArgs["result"]["mockHouse"]>
    composites: {}
  }

  type MockHouseGetPayload<S extends boolean | null | undefined | MockHouseDefaultArgs> = $Result.GetResult<Prisma.$MockHousePayload, S>

  type MockHouseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MockHouseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MockHouseCountAggregateInputType | true
    }

  export interface MockHouseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MockHouse'], meta: { name: 'MockHouse' } }
    /**
     * Find zero or one MockHouse that matches the filter.
     * @param {MockHouseFindUniqueArgs} args - Arguments to find a MockHouse
     * @example
     * // Get one MockHouse
     * const mockHouse = await prisma.mockHouse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MockHouseFindUniqueArgs>(args: SelectSubset<T, MockHouseFindUniqueArgs<ExtArgs>>): Prisma__MockHouseClient<$Result.GetResult<Prisma.$MockHousePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MockHouse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MockHouseFindUniqueOrThrowArgs} args - Arguments to find a MockHouse
     * @example
     * // Get one MockHouse
     * const mockHouse = await prisma.mockHouse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MockHouseFindUniqueOrThrowArgs>(args: SelectSubset<T, MockHouseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MockHouseClient<$Result.GetResult<Prisma.$MockHousePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MockHouse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MockHouseFindFirstArgs} args - Arguments to find a MockHouse
     * @example
     * // Get one MockHouse
     * const mockHouse = await prisma.mockHouse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MockHouseFindFirstArgs>(args?: SelectSubset<T, MockHouseFindFirstArgs<ExtArgs>>): Prisma__MockHouseClient<$Result.GetResult<Prisma.$MockHousePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MockHouse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MockHouseFindFirstOrThrowArgs} args - Arguments to find a MockHouse
     * @example
     * // Get one MockHouse
     * const mockHouse = await prisma.mockHouse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MockHouseFindFirstOrThrowArgs>(args?: SelectSubset<T, MockHouseFindFirstOrThrowArgs<ExtArgs>>): Prisma__MockHouseClient<$Result.GetResult<Prisma.$MockHousePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MockHouses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MockHouseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MockHouses
     * const mockHouses = await prisma.mockHouse.findMany()
     * 
     * // Get first 10 MockHouses
     * const mockHouses = await prisma.mockHouse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mockHouseWithIdOnly = await prisma.mockHouse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MockHouseFindManyArgs>(args?: SelectSubset<T, MockHouseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MockHousePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MockHouse.
     * @param {MockHouseCreateArgs} args - Arguments to create a MockHouse.
     * @example
     * // Create one MockHouse
     * const MockHouse = await prisma.mockHouse.create({
     *   data: {
     *     // ... data to create a MockHouse
     *   }
     * })
     * 
     */
    create<T extends MockHouseCreateArgs>(args: SelectSubset<T, MockHouseCreateArgs<ExtArgs>>): Prisma__MockHouseClient<$Result.GetResult<Prisma.$MockHousePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MockHouses.
     * @param {MockHouseCreateManyArgs} args - Arguments to create many MockHouses.
     * @example
     * // Create many MockHouses
     * const mockHouse = await prisma.mockHouse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MockHouseCreateManyArgs>(args?: SelectSubset<T, MockHouseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MockHouses and returns the data saved in the database.
     * @param {MockHouseCreateManyAndReturnArgs} args - Arguments to create many MockHouses.
     * @example
     * // Create many MockHouses
     * const mockHouse = await prisma.mockHouse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MockHouses and only return the `id`
     * const mockHouseWithIdOnly = await prisma.mockHouse.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MockHouseCreateManyAndReturnArgs>(args?: SelectSubset<T, MockHouseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MockHousePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MockHouse.
     * @param {MockHouseDeleteArgs} args - Arguments to delete one MockHouse.
     * @example
     * // Delete one MockHouse
     * const MockHouse = await prisma.mockHouse.delete({
     *   where: {
     *     // ... filter to delete one MockHouse
     *   }
     * })
     * 
     */
    delete<T extends MockHouseDeleteArgs>(args: SelectSubset<T, MockHouseDeleteArgs<ExtArgs>>): Prisma__MockHouseClient<$Result.GetResult<Prisma.$MockHousePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MockHouse.
     * @param {MockHouseUpdateArgs} args - Arguments to update one MockHouse.
     * @example
     * // Update one MockHouse
     * const mockHouse = await prisma.mockHouse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MockHouseUpdateArgs>(args: SelectSubset<T, MockHouseUpdateArgs<ExtArgs>>): Prisma__MockHouseClient<$Result.GetResult<Prisma.$MockHousePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MockHouses.
     * @param {MockHouseDeleteManyArgs} args - Arguments to filter MockHouses to delete.
     * @example
     * // Delete a few MockHouses
     * const { count } = await prisma.mockHouse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MockHouseDeleteManyArgs>(args?: SelectSubset<T, MockHouseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MockHouses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MockHouseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MockHouses
     * const mockHouse = await prisma.mockHouse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MockHouseUpdateManyArgs>(args: SelectSubset<T, MockHouseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MockHouses and returns the data updated in the database.
     * @param {MockHouseUpdateManyAndReturnArgs} args - Arguments to update many MockHouses.
     * @example
     * // Update many MockHouses
     * const mockHouse = await prisma.mockHouse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MockHouses and only return the `id`
     * const mockHouseWithIdOnly = await prisma.mockHouse.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MockHouseUpdateManyAndReturnArgs>(args: SelectSubset<T, MockHouseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MockHousePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MockHouse.
     * @param {MockHouseUpsertArgs} args - Arguments to update or create a MockHouse.
     * @example
     * // Update or create a MockHouse
     * const mockHouse = await prisma.mockHouse.upsert({
     *   create: {
     *     // ... data to create a MockHouse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MockHouse we want to update
     *   }
     * })
     */
    upsert<T extends MockHouseUpsertArgs>(args: SelectSubset<T, MockHouseUpsertArgs<ExtArgs>>): Prisma__MockHouseClient<$Result.GetResult<Prisma.$MockHousePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MockHouses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MockHouseCountArgs} args - Arguments to filter MockHouses to count.
     * @example
     * // Count the number of MockHouses
     * const count = await prisma.mockHouse.count({
     *   where: {
     *     // ... the filter for the MockHouses we want to count
     *   }
     * })
    **/
    count<T extends MockHouseCountArgs>(
      args?: Subset<T, MockHouseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MockHouseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MockHouse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MockHouseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MockHouseAggregateArgs>(args: Subset<T, MockHouseAggregateArgs>): Prisma.PrismaPromise<GetMockHouseAggregateType<T>>

    /**
     * Group by MockHouse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MockHouseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MockHouseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MockHouseGroupByArgs['orderBy'] }
        : { orderBy?: MockHouseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MockHouseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMockHouseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MockHouse model
   */
  readonly fields: MockHouseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MockHouse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MockHouseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MockHouse model
   */
  interface MockHouseFieldRefs {
    readonly id: FieldRef<"MockHouse", 'String'>
    readonly address: FieldRef<"MockHouse", 'String'>
    readonly latitude: FieldRef<"MockHouse", 'Float'>
    readonly longitude: FieldRef<"MockHouse", 'Float'>
    readonly neighborhood: FieldRef<"MockHouse", 'String'>
    readonly priorityScore: FieldRef<"MockHouse", 'Float'>
    readonly visitDurationMinutes: FieldRef<"MockHouse", 'Int'>
    readonly status: FieldRef<"MockHouse", 'String'>
    readonly isCornerHouse: FieldRef<"MockHouse", 'Boolean'>
    readonly streetName: FieldRef<"MockHouse", 'String'>
    readonly houseNumber: FieldRef<"MockHouse", 'Int'>
    readonly createdAt: FieldRef<"MockHouse", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MockHouse findUnique
   */
  export type MockHouseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MockHouse
     */
    select?: MockHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MockHouse
     */
    omit?: MockHouseOmit<ExtArgs> | null
    /**
     * Filter, which MockHouse to fetch.
     */
    where: MockHouseWhereUniqueInput
  }

  /**
   * MockHouse findUniqueOrThrow
   */
  export type MockHouseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MockHouse
     */
    select?: MockHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MockHouse
     */
    omit?: MockHouseOmit<ExtArgs> | null
    /**
     * Filter, which MockHouse to fetch.
     */
    where: MockHouseWhereUniqueInput
  }

  /**
   * MockHouse findFirst
   */
  export type MockHouseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MockHouse
     */
    select?: MockHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MockHouse
     */
    omit?: MockHouseOmit<ExtArgs> | null
    /**
     * Filter, which MockHouse to fetch.
     */
    where?: MockHouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MockHouses to fetch.
     */
    orderBy?: MockHouseOrderByWithRelationInput | MockHouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MockHouses.
     */
    cursor?: MockHouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MockHouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MockHouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MockHouses.
     */
    distinct?: MockHouseScalarFieldEnum | MockHouseScalarFieldEnum[]
  }

  /**
   * MockHouse findFirstOrThrow
   */
  export type MockHouseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MockHouse
     */
    select?: MockHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MockHouse
     */
    omit?: MockHouseOmit<ExtArgs> | null
    /**
     * Filter, which MockHouse to fetch.
     */
    where?: MockHouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MockHouses to fetch.
     */
    orderBy?: MockHouseOrderByWithRelationInput | MockHouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MockHouses.
     */
    cursor?: MockHouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MockHouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MockHouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MockHouses.
     */
    distinct?: MockHouseScalarFieldEnum | MockHouseScalarFieldEnum[]
  }

  /**
   * MockHouse findMany
   */
  export type MockHouseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MockHouse
     */
    select?: MockHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MockHouse
     */
    omit?: MockHouseOmit<ExtArgs> | null
    /**
     * Filter, which MockHouses to fetch.
     */
    where?: MockHouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MockHouses to fetch.
     */
    orderBy?: MockHouseOrderByWithRelationInput | MockHouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MockHouses.
     */
    cursor?: MockHouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MockHouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MockHouses.
     */
    skip?: number
    distinct?: MockHouseScalarFieldEnum | MockHouseScalarFieldEnum[]
  }

  /**
   * MockHouse create
   */
  export type MockHouseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MockHouse
     */
    select?: MockHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MockHouse
     */
    omit?: MockHouseOmit<ExtArgs> | null
    /**
     * The data needed to create a MockHouse.
     */
    data?: XOR<MockHouseCreateInput, MockHouseUncheckedCreateInput>
  }

  /**
   * MockHouse createMany
   */
  export type MockHouseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MockHouses.
     */
    data: MockHouseCreateManyInput | MockHouseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MockHouse createManyAndReturn
   */
  export type MockHouseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MockHouse
     */
    select?: MockHouseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MockHouse
     */
    omit?: MockHouseOmit<ExtArgs> | null
    /**
     * The data used to create many MockHouses.
     */
    data: MockHouseCreateManyInput | MockHouseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MockHouse update
   */
  export type MockHouseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MockHouse
     */
    select?: MockHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MockHouse
     */
    omit?: MockHouseOmit<ExtArgs> | null
    /**
     * The data needed to update a MockHouse.
     */
    data: XOR<MockHouseUpdateInput, MockHouseUncheckedUpdateInput>
    /**
     * Choose, which MockHouse to update.
     */
    where: MockHouseWhereUniqueInput
  }

  /**
   * MockHouse updateMany
   */
  export type MockHouseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MockHouses.
     */
    data: XOR<MockHouseUpdateManyMutationInput, MockHouseUncheckedUpdateManyInput>
    /**
     * Filter which MockHouses to update
     */
    where?: MockHouseWhereInput
    /**
     * Limit how many MockHouses to update.
     */
    limit?: number
  }

  /**
   * MockHouse updateManyAndReturn
   */
  export type MockHouseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MockHouse
     */
    select?: MockHouseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MockHouse
     */
    omit?: MockHouseOmit<ExtArgs> | null
    /**
     * The data used to update MockHouses.
     */
    data: XOR<MockHouseUpdateManyMutationInput, MockHouseUncheckedUpdateManyInput>
    /**
     * Filter which MockHouses to update
     */
    where?: MockHouseWhereInput
    /**
     * Limit how many MockHouses to update.
     */
    limit?: number
  }

  /**
   * MockHouse upsert
   */
  export type MockHouseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MockHouse
     */
    select?: MockHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MockHouse
     */
    omit?: MockHouseOmit<ExtArgs> | null
    /**
     * The filter to search for the MockHouse to update in case it exists.
     */
    where: MockHouseWhereUniqueInput
    /**
     * In case the MockHouse found by the `where` argument doesn't exist, create a new MockHouse with this data.
     */
    create: XOR<MockHouseCreateInput, MockHouseUncheckedCreateInput>
    /**
     * In case the MockHouse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MockHouseUpdateInput, MockHouseUncheckedUpdateInput>
  }

  /**
   * MockHouse delete
   */
  export type MockHouseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MockHouse
     */
    select?: MockHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MockHouse
     */
    omit?: MockHouseOmit<ExtArgs> | null
    /**
     * Filter which MockHouse to delete.
     */
    where: MockHouseWhereUniqueInput
  }

  /**
   * MockHouse deleteMany
   */
  export type MockHouseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MockHouses to delete
     */
    where?: MockHouseWhereInput
    /**
     * Limit how many MockHouses to delete.
     */
    limit?: number
  }

  /**
   * MockHouse without action
   */
  export type MockHouseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MockHouse
     */
    select?: MockHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MockHouse
     */
    omit?: MockHouseOmit<ExtArgs> | null
  }


  /**
   * Model Route
   */

  export type AggregateRoute = {
    _count: RouteCountAggregateOutputType | null
    _min: RouteMinAggregateOutputType | null
    _max: RouteMaxAggregateOutputType | null
  }

  export type RouteMinAggregateOutputType = {
    id: string | null
    clusterId: string | null
  }

  export type RouteMaxAggregateOutputType = {
    id: string | null
    clusterId: string | null
  }

  export type RouteCountAggregateOutputType = {
    id: number
    clusterId: number
    orderedHouseIds: number
    _all: number
  }


  export type RouteMinAggregateInputType = {
    id?: true
    clusterId?: true
  }

  export type RouteMaxAggregateInputType = {
    id?: true
    clusterId?: true
  }

  export type RouteCountAggregateInputType = {
    id?: true
    clusterId?: true
    orderedHouseIds?: true
    _all?: true
  }

  export type RouteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Route to aggregate.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Routes
    **/
    _count?: true | RouteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RouteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RouteMaxAggregateInputType
  }

  export type GetRouteAggregateType<T extends RouteAggregateArgs> = {
        [P in keyof T & keyof AggregateRoute]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoute[P]>
      : GetScalarType<T[P], AggregateRoute[P]>
  }




  export type RouteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RouteWhereInput
    orderBy?: RouteOrderByWithAggregationInput | RouteOrderByWithAggregationInput[]
    by: RouteScalarFieldEnum[] | RouteScalarFieldEnum
    having?: RouteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RouteCountAggregateInputType | true
    _min?: RouteMinAggregateInputType
    _max?: RouteMaxAggregateInputType
  }

  export type RouteGroupByOutputType = {
    id: string
    clusterId: string
    orderedHouseIds: string[]
    _count: RouteCountAggregateOutputType | null
    _min: RouteMinAggregateOutputType | null
    _max: RouteMaxAggregateOutputType | null
  }

  type GetRouteGroupByPayload<T extends RouteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RouteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RouteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RouteGroupByOutputType[P]>
            : GetScalarType<T[P], RouteGroupByOutputType[P]>
        }
      >
    >


  export type RouteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clusterId?: boolean
    orderedHouseIds?: boolean
  }, ExtArgs["result"]["route"]>

  export type RouteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clusterId?: boolean
    orderedHouseIds?: boolean
  }, ExtArgs["result"]["route"]>

  export type RouteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clusterId?: boolean
    orderedHouseIds?: boolean
  }, ExtArgs["result"]["route"]>

  export type RouteSelectScalar = {
    id?: boolean
    clusterId?: boolean
    orderedHouseIds?: boolean
  }

  export type RouteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clusterId" | "orderedHouseIds", ExtArgs["result"]["route"]>

  export type $RoutePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Route"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clusterId: string
      orderedHouseIds: string[]
    }, ExtArgs["result"]["route"]>
    composites: {}
  }

  type RouteGetPayload<S extends boolean | null | undefined | RouteDefaultArgs> = $Result.GetResult<Prisma.$RoutePayload, S>

  type RouteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RouteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RouteCountAggregateInputType | true
    }

  export interface RouteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Route'], meta: { name: 'Route' } }
    /**
     * Find zero or one Route that matches the filter.
     * @param {RouteFindUniqueArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RouteFindUniqueArgs>(args: SelectSubset<T, RouteFindUniqueArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Route that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RouteFindUniqueOrThrowArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RouteFindUniqueOrThrowArgs>(args: SelectSubset<T, RouteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Route that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteFindFirstArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RouteFindFirstArgs>(args?: SelectSubset<T, RouteFindFirstArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Route that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteFindFirstOrThrowArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RouteFindFirstOrThrowArgs>(args?: SelectSubset<T, RouteFindFirstOrThrowArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Routes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Routes
     * const routes = await prisma.route.findMany()
     * 
     * // Get first 10 Routes
     * const routes = await prisma.route.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const routeWithIdOnly = await prisma.route.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RouteFindManyArgs>(args?: SelectSubset<T, RouteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Route.
     * @param {RouteCreateArgs} args - Arguments to create a Route.
     * @example
     * // Create one Route
     * const Route = await prisma.route.create({
     *   data: {
     *     // ... data to create a Route
     *   }
     * })
     * 
     */
    create<T extends RouteCreateArgs>(args: SelectSubset<T, RouteCreateArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Routes.
     * @param {RouteCreateManyArgs} args - Arguments to create many Routes.
     * @example
     * // Create many Routes
     * const route = await prisma.route.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RouteCreateManyArgs>(args?: SelectSubset<T, RouteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Routes and returns the data saved in the database.
     * @param {RouteCreateManyAndReturnArgs} args - Arguments to create many Routes.
     * @example
     * // Create many Routes
     * const route = await prisma.route.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Routes and only return the `id`
     * const routeWithIdOnly = await prisma.route.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RouteCreateManyAndReturnArgs>(args?: SelectSubset<T, RouteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Route.
     * @param {RouteDeleteArgs} args - Arguments to delete one Route.
     * @example
     * // Delete one Route
     * const Route = await prisma.route.delete({
     *   where: {
     *     // ... filter to delete one Route
     *   }
     * })
     * 
     */
    delete<T extends RouteDeleteArgs>(args: SelectSubset<T, RouteDeleteArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Route.
     * @param {RouteUpdateArgs} args - Arguments to update one Route.
     * @example
     * // Update one Route
     * const route = await prisma.route.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RouteUpdateArgs>(args: SelectSubset<T, RouteUpdateArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Routes.
     * @param {RouteDeleteManyArgs} args - Arguments to filter Routes to delete.
     * @example
     * // Delete a few Routes
     * const { count } = await prisma.route.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RouteDeleteManyArgs>(args?: SelectSubset<T, RouteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Routes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Routes
     * const route = await prisma.route.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RouteUpdateManyArgs>(args: SelectSubset<T, RouteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Routes and returns the data updated in the database.
     * @param {RouteUpdateManyAndReturnArgs} args - Arguments to update many Routes.
     * @example
     * // Update many Routes
     * const route = await prisma.route.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Routes and only return the `id`
     * const routeWithIdOnly = await prisma.route.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RouteUpdateManyAndReturnArgs>(args: SelectSubset<T, RouteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Route.
     * @param {RouteUpsertArgs} args - Arguments to update or create a Route.
     * @example
     * // Update or create a Route
     * const route = await prisma.route.upsert({
     *   create: {
     *     // ... data to create a Route
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Route we want to update
     *   }
     * })
     */
    upsert<T extends RouteUpsertArgs>(args: SelectSubset<T, RouteUpsertArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Routes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteCountArgs} args - Arguments to filter Routes to count.
     * @example
     * // Count the number of Routes
     * const count = await prisma.route.count({
     *   where: {
     *     // ... the filter for the Routes we want to count
     *   }
     * })
    **/
    count<T extends RouteCountArgs>(
      args?: Subset<T, RouteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RouteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Route.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RouteAggregateArgs>(args: Subset<T, RouteAggregateArgs>): Prisma.PrismaPromise<GetRouteAggregateType<T>>

    /**
     * Group by Route.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RouteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RouteGroupByArgs['orderBy'] }
        : { orderBy?: RouteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RouteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRouteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Route model
   */
  readonly fields: RouteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Route.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RouteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Route model
   */
  interface RouteFieldRefs {
    readonly id: FieldRef<"Route", 'String'>
    readonly clusterId: FieldRef<"Route", 'String'>
    readonly orderedHouseIds: FieldRef<"Route", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * Route findUnique
   */
  export type RouteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route findUniqueOrThrow
   */
  export type RouteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route findFirst
   */
  export type RouteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Routes.
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Routes.
     */
    distinct?: RouteScalarFieldEnum | RouteScalarFieldEnum[]
  }

  /**
   * Route findFirstOrThrow
   */
  export type RouteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Routes.
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Routes.
     */
    distinct?: RouteScalarFieldEnum | RouteScalarFieldEnum[]
  }

  /**
   * Route findMany
   */
  export type RouteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Filter, which Routes to fetch.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Routes.
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    distinct?: RouteScalarFieldEnum | RouteScalarFieldEnum[]
  }

  /**
   * Route create
   */
  export type RouteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * The data needed to create a Route.
     */
    data?: XOR<RouteCreateInput, RouteUncheckedCreateInput>
  }

  /**
   * Route createMany
   */
  export type RouteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Routes.
     */
    data: RouteCreateManyInput | RouteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Route createManyAndReturn
   */
  export type RouteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * The data used to create many Routes.
     */
    data: RouteCreateManyInput | RouteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Route update
   */
  export type RouteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * The data needed to update a Route.
     */
    data: XOR<RouteUpdateInput, RouteUncheckedUpdateInput>
    /**
     * Choose, which Route to update.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route updateMany
   */
  export type RouteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Routes.
     */
    data: XOR<RouteUpdateManyMutationInput, RouteUncheckedUpdateManyInput>
    /**
     * Filter which Routes to update
     */
    where?: RouteWhereInput
    /**
     * Limit how many Routes to update.
     */
    limit?: number
  }

  /**
   * Route updateManyAndReturn
   */
  export type RouteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * The data used to update Routes.
     */
    data: XOR<RouteUpdateManyMutationInput, RouteUncheckedUpdateManyInput>
    /**
     * Filter which Routes to update
     */
    where?: RouteWhereInput
    /**
     * Limit how many Routes to update.
     */
    limit?: number
  }

  /**
   * Route upsert
   */
  export type RouteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * The filter to search for the Route to update in case it exists.
     */
    where: RouteWhereUniqueInput
    /**
     * In case the Route found by the `where` argument doesn't exist, create a new Route with this data.
     */
    create: XOR<RouteCreateInput, RouteUncheckedCreateInput>
    /**
     * In case the Route was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RouteUpdateInput, RouteUncheckedUpdateInput>
  }

  /**
   * Route delete
   */
  export type RouteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Filter which Route to delete.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route deleteMany
   */
  export type RouteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Routes to delete
     */
    where?: RouteWhereInput
    /**
     * Limit how many Routes to delete.
     */
    limit?: number
  }

  /**
   * Route without action
   */
  export type RouteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
  }


  /**
   * Model Cluster
   */

  export type AggregateCluster = {
    _count: ClusterCountAggregateOutputType | null
    _avg: ClusterAvgAggregateOutputType | null
    _sum: ClusterSumAggregateOutputType | null
    _min: ClusterMinAggregateOutputType | null
    _max: ClusterMaxAggregateOutputType | null
  }

  export type ClusterAvgAggregateOutputType = {
    centriodLat: number | null
    centriodLong: number | null
  }

  export type ClusterSumAggregateOutputType = {
    centriodLat: number | null
    centriodLong: number | null
  }

  export type ClusterMinAggregateOutputType = {
    id: string | null
    centriodLat: number | null
    centriodLong: number | null
  }

  export type ClusterMaxAggregateOutputType = {
    id: string | null
    centriodLat: number | null
    centriodLong: number | null
  }

  export type ClusterCountAggregateOutputType = {
    id: number
    centriodLat: number
    centriodLong: number
    routeIds: number
    _all: number
  }


  export type ClusterAvgAggregateInputType = {
    centriodLat?: true
    centriodLong?: true
  }

  export type ClusterSumAggregateInputType = {
    centriodLat?: true
    centriodLong?: true
  }

  export type ClusterMinAggregateInputType = {
    id?: true
    centriodLat?: true
    centriodLong?: true
  }

  export type ClusterMaxAggregateInputType = {
    id?: true
    centriodLat?: true
    centriodLong?: true
  }

  export type ClusterCountAggregateInputType = {
    id?: true
    centriodLat?: true
    centriodLong?: true
    routeIds?: true
    _all?: true
  }

  export type ClusterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cluster to aggregate.
     */
    where?: ClusterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clusters to fetch.
     */
    orderBy?: ClusterOrderByWithRelationInput | ClusterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClusterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clusters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clusters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clusters
    **/
    _count?: true | ClusterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClusterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClusterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClusterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClusterMaxAggregateInputType
  }

  export type GetClusterAggregateType<T extends ClusterAggregateArgs> = {
        [P in keyof T & keyof AggregateCluster]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCluster[P]>
      : GetScalarType<T[P], AggregateCluster[P]>
  }




  export type ClusterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClusterWhereInput
    orderBy?: ClusterOrderByWithAggregationInput | ClusterOrderByWithAggregationInput[]
    by: ClusterScalarFieldEnum[] | ClusterScalarFieldEnum
    having?: ClusterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClusterCountAggregateInputType | true
    _avg?: ClusterAvgAggregateInputType
    _sum?: ClusterSumAggregateInputType
    _min?: ClusterMinAggregateInputType
    _max?: ClusterMaxAggregateInputType
  }

  export type ClusterGroupByOutputType = {
    id: string
    centriodLat: number
    centriodLong: number
    routeIds: string[]
    _count: ClusterCountAggregateOutputType | null
    _avg: ClusterAvgAggregateOutputType | null
    _sum: ClusterSumAggregateOutputType | null
    _min: ClusterMinAggregateOutputType | null
    _max: ClusterMaxAggregateOutputType | null
  }

  type GetClusterGroupByPayload<T extends ClusterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClusterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClusterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClusterGroupByOutputType[P]>
            : GetScalarType<T[P], ClusterGroupByOutputType[P]>
        }
      >
    >


  export type ClusterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    centriodLat?: boolean
    centriodLong?: boolean
    routeIds?: boolean
  }, ExtArgs["result"]["cluster"]>

  export type ClusterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    centriodLat?: boolean
    centriodLong?: boolean
    routeIds?: boolean
  }, ExtArgs["result"]["cluster"]>

  export type ClusterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    centriodLat?: boolean
    centriodLong?: boolean
    routeIds?: boolean
  }, ExtArgs["result"]["cluster"]>

  export type ClusterSelectScalar = {
    id?: boolean
    centriodLat?: boolean
    centriodLong?: boolean
    routeIds?: boolean
  }

  export type ClusterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "centriodLat" | "centriodLong" | "routeIds", ExtArgs["result"]["cluster"]>

  export type $ClusterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cluster"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      centriodLat: number
      centriodLong: number
      routeIds: string[]
    }, ExtArgs["result"]["cluster"]>
    composites: {}
  }

  type ClusterGetPayload<S extends boolean | null | undefined | ClusterDefaultArgs> = $Result.GetResult<Prisma.$ClusterPayload, S>

  type ClusterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClusterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClusterCountAggregateInputType | true
    }

  export interface ClusterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cluster'], meta: { name: 'Cluster' } }
    /**
     * Find zero or one Cluster that matches the filter.
     * @param {ClusterFindUniqueArgs} args - Arguments to find a Cluster
     * @example
     * // Get one Cluster
     * const cluster = await prisma.cluster.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClusterFindUniqueArgs>(args: SelectSubset<T, ClusterFindUniqueArgs<ExtArgs>>): Prisma__ClusterClient<$Result.GetResult<Prisma.$ClusterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cluster that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClusterFindUniqueOrThrowArgs} args - Arguments to find a Cluster
     * @example
     * // Get one Cluster
     * const cluster = await prisma.cluster.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClusterFindUniqueOrThrowArgs>(args: SelectSubset<T, ClusterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClusterClient<$Result.GetResult<Prisma.$ClusterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cluster that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClusterFindFirstArgs} args - Arguments to find a Cluster
     * @example
     * // Get one Cluster
     * const cluster = await prisma.cluster.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClusterFindFirstArgs>(args?: SelectSubset<T, ClusterFindFirstArgs<ExtArgs>>): Prisma__ClusterClient<$Result.GetResult<Prisma.$ClusterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cluster that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClusterFindFirstOrThrowArgs} args - Arguments to find a Cluster
     * @example
     * // Get one Cluster
     * const cluster = await prisma.cluster.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClusterFindFirstOrThrowArgs>(args?: SelectSubset<T, ClusterFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClusterClient<$Result.GetResult<Prisma.$ClusterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clusters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClusterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clusters
     * const clusters = await prisma.cluster.findMany()
     * 
     * // Get first 10 Clusters
     * const clusters = await prisma.cluster.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clusterWithIdOnly = await prisma.cluster.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClusterFindManyArgs>(args?: SelectSubset<T, ClusterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClusterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cluster.
     * @param {ClusterCreateArgs} args - Arguments to create a Cluster.
     * @example
     * // Create one Cluster
     * const Cluster = await prisma.cluster.create({
     *   data: {
     *     // ... data to create a Cluster
     *   }
     * })
     * 
     */
    create<T extends ClusterCreateArgs>(args: SelectSubset<T, ClusterCreateArgs<ExtArgs>>): Prisma__ClusterClient<$Result.GetResult<Prisma.$ClusterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clusters.
     * @param {ClusterCreateManyArgs} args - Arguments to create many Clusters.
     * @example
     * // Create many Clusters
     * const cluster = await prisma.cluster.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClusterCreateManyArgs>(args?: SelectSubset<T, ClusterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clusters and returns the data saved in the database.
     * @param {ClusterCreateManyAndReturnArgs} args - Arguments to create many Clusters.
     * @example
     * // Create many Clusters
     * const cluster = await prisma.cluster.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clusters and only return the `id`
     * const clusterWithIdOnly = await prisma.cluster.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClusterCreateManyAndReturnArgs>(args?: SelectSubset<T, ClusterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClusterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cluster.
     * @param {ClusterDeleteArgs} args - Arguments to delete one Cluster.
     * @example
     * // Delete one Cluster
     * const Cluster = await prisma.cluster.delete({
     *   where: {
     *     // ... filter to delete one Cluster
     *   }
     * })
     * 
     */
    delete<T extends ClusterDeleteArgs>(args: SelectSubset<T, ClusterDeleteArgs<ExtArgs>>): Prisma__ClusterClient<$Result.GetResult<Prisma.$ClusterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cluster.
     * @param {ClusterUpdateArgs} args - Arguments to update one Cluster.
     * @example
     * // Update one Cluster
     * const cluster = await prisma.cluster.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClusterUpdateArgs>(args: SelectSubset<T, ClusterUpdateArgs<ExtArgs>>): Prisma__ClusterClient<$Result.GetResult<Prisma.$ClusterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clusters.
     * @param {ClusterDeleteManyArgs} args - Arguments to filter Clusters to delete.
     * @example
     * // Delete a few Clusters
     * const { count } = await prisma.cluster.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClusterDeleteManyArgs>(args?: SelectSubset<T, ClusterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clusters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClusterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clusters
     * const cluster = await prisma.cluster.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClusterUpdateManyArgs>(args: SelectSubset<T, ClusterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clusters and returns the data updated in the database.
     * @param {ClusterUpdateManyAndReturnArgs} args - Arguments to update many Clusters.
     * @example
     * // Update many Clusters
     * const cluster = await prisma.cluster.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clusters and only return the `id`
     * const clusterWithIdOnly = await prisma.cluster.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClusterUpdateManyAndReturnArgs>(args: SelectSubset<T, ClusterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClusterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cluster.
     * @param {ClusterUpsertArgs} args - Arguments to update or create a Cluster.
     * @example
     * // Update or create a Cluster
     * const cluster = await prisma.cluster.upsert({
     *   create: {
     *     // ... data to create a Cluster
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cluster we want to update
     *   }
     * })
     */
    upsert<T extends ClusterUpsertArgs>(args: SelectSubset<T, ClusterUpsertArgs<ExtArgs>>): Prisma__ClusterClient<$Result.GetResult<Prisma.$ClusterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clusters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClusterCountArgs} args - Arguments to filter Clusters to count.
     * @example
     * // Count the number of Clusters
     * const count = await prisma.cluster.count({
     *   where: {
     *     // ... the filter for the Clusters we want to count
     *   }
     * })
    **/
    count<T extends ClusterCountArgs>(
      args?: Subset<T, ClusterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClusterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cluster.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClusterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClusterAggregateArgs>(args: Subset<T, ClusterAggregateArgs>): Prisma.PrismaPromise<GetClusterAggregateType<T>>

    /**
     * Group by Cluster.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClusterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClusterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClusterGroupByArgs['orderBy'] }
        : { orderBy?: ClusterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClusterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClusterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cluster model
   */
  readonly fields: ClusterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cluster.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClusterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cluster model
   */
  interface ClusterFieldRefs {
    readonly id: FieldRef<"Cluster", 'String'>
    readonly centriodLat: FieldRef<"Cluster", 'Float'>
    readonly centriodLong: FieldRef<"Cluster", 'Float'>
    readonly routeIds: FieldRef<"Cluster", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * Cluster findUnique
   */
  export type ClusterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cluster
     */
    select?: ClusterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cluster
     */
    omit?: ClusterOmit<ExtArgs> | null
    /**
     * Filter, which Cluster to fetch.
     */
    where: ClusterWhereUniqueInput
  }

  /**
   * Cluster findUniqueOrThrow
   */
  export type ClusterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cluster
     */
    select?: ClusterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cluster
     */
    omit?: ClusterOmit<ExtArgs> | null
    /**
     * Filter, which Cluster to fetch.
     */
    where: ClusterWhereUniqueInput
  }

  /**
   * Cluster findFirst
   */
  export type ClusterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cluster
     */
    select?: ClusterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cluster
     */
    omit?: ClusterOmit<ExtArgs> | null
    /**
     * Filter, which Cluster to fetch.
     */
    where?: ClusterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clusters to fetch.
     */
    orderBy?: ClusterOrderByWithRelationInput | ClusterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clusters.
     */
    cursor?: ClusterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clusters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clusters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clusters.
     */
    distinct?: ClusterScalarFieldEnum | ClusterScalarFieldEnum[]
  }

  /**
   * Cluster findFirstOrThrow
   */
  export type ClusterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cluster
     */
    select?: ClusterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cluster
     */
    omit?: ClusterOmit<ExtArgs> | null
    /**
     * Filter, which Cluster to fetch.
     */
    where?: ClusterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clusters to fetch.
     */
    orderBy?: ClusterOrderByWithRelationInput | ClusterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clusters.
     */
    cursor?: ClusterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clusters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clusters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clusters.
     */
    distinct?: ClusterScalarFieldEnum | ClusterScalarFieldEnum[]
  }

  /**
   * Cluster findMany
   */
  export type ClusterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cluster
     */
    select?: ClusterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cluster
     */
    omit?: ClusterOmit<ExtArgs> | null
    /**
     * Filter, which Clusters to fetch.
     */
    where?: ClusterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clusters to fetch.
     */
    orderBy?: ClusterOrderByWithRelationInput | ClusterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clusters.
     */
    cursor?: ClusterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clusters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clusters.
     */
    skip?: number
    distinct?: ClusterScalarFieldEnum | ClusterScalarFieldEnum[]
  }

  /**
   * Cluster create
   */
  export type ClusterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cluster
     */
    select?: ClusterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cluster
     */
    omit?: ClusterOmit<ExtArgs> | null
    /**
     * The data needed to create a Cluster.
     */
    data?: XOR<ClusterCreateInput, ClusterUncheckedCreateInput>
  }

  /**
   * Cluster createMany
   */
  export type ClusterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clusters.
     */
    data: ClusterCreateManyInput | ClusterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cluster createManyAndReturn
   */
  export type ClusterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cluster
     */
    select?: ClusterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cluster
     */
    omit?: ClusterOmit<ExtArgs> | null
    /**
     * The data used to create many Clusters.
     */
    data: ClusterCreateManyInput | ClusterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cluster update
   */
  export type ClusterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cluster
     */
    select?: ClusterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cluster
     */
    omit?: ClusterOmit<ExtArgs> | null
    /**
     * The data needed to update a Cluster.
     */
    data: XOR<ClusterUpdateInput, ClusterUncheckedUpdateInput>
    /**
     * Choose, which Cluster to update.
     */
    where: ClusterWhereUniqueInput
  }

  /**
   * Cluster updateMany
   */
  export type ClusterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clusters.
     */
    data: XOR<ClusterUpdateManyMutationInput, ClusterUncheckedUpdateManyInput>
    /**
     * Filter which Clusters to update
     */
    where?: ClusterWhereInput
    /**
     * Limit how many Clusters to update.
     */
    limit?: number
  }

  /**
   * Cluster updateManyAndReturn
   */
  export type ClusterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cluster
     */
    select?: ClusterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cluster
     */
    omit?: ClusterOmit<ExtArgs> | null
    /**
     * The data used to update Clusters.
     */
    data: XOR<ClusterUpdateManyMutationInput, ClusterUncheckedUpdateManyInput>
    /**
     * Filter which Clusters to update
     */
    where?: ClusterWhereInput
    /**
     * Limit how many Clusters to update.
     */
    limit?: number
  }

  /**
   * Cluster upsert
   */
  export type ClusterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cluster
     */
    select?: ClusterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cluster
     */
    omit?: ClusterOmit<ExtArgs> | null
    /**
     * The filter to search for the Cluster to update in case it exists.
     */
    where: ClusterWhereUniqueInput
    /**
     * In case the Cluster found by the `where` argument doesn't exist, create a new Cluster with this data.
     */
    create: XOR<ClusterCreateInput, ClusterUncheckedCreateInput>
    /**
     * In case the Cluster was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClusterUpdateInput, ClusterUncheckedUpdateInput>
  }

  /**
   * Cluster delete
   */
  export type ClusterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cluster
     */
    select?: ClusterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cluster
     */
    omit?: ClusterOmit<ExtArgs> | null
    /**
     * Filter which Cluster to delete.
     */
    where: ClusterWhereUniqueInput
  }

  /**
   * Cluster deleteMany
   */
  export type ClusterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clusters to delete
     */
    where?: ClusterWhereInput
    /**
     * Limit how many Clusters to delete.
     */
    limit?: number
  }

  /**
   * Cluster without action
   */
  export type ClusterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cluster
     */
    select?: ClusterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cluster
     */
    omit?: ClusterOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TestPingScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt'
  };

  export type TestPingScalarFieldEnum = (typeof TestPingScalarFieldEnum)[keyof typeof TestPingScalarFieldEnum]


  export const HouseScalarFieldEnum: {
    id: 'id',
    address: 'address',
    latitude: 'latitude',
    longitude: 'longitude',
    status: 'status',
    clusterId: 'clusterId'
  };

  export type HouseScalarFieldEnum = (typeof HouseScalarFieldEnum)[keyof typeof HouseScalarFieldEnum]


  export const MockHouseScalarFieldEnum: {
    id: 'id',
    address: 'address',
    latitude: 'latitude',
    longitude: 'longitude',
    neighborhood: 'neighborhood',
    priorityScore: 'priorityScore',
    visitDurationMinutes: 'visitDurationMinutes',
    status: 'status',
    isCornerHouse: 'isCornerHouse',
    streetName: 'streetName',
    houseNumber: 'houseNumber',
    createdAt: 'createdAt'
  };

  export type MockHouseScalarFieldEnum = (typeof MockHouseScalarFieldEnum)[keyof typeof MockHouseScalarFieldEnum]


  export const RouteScalarFieldEnum: {
    id: 'id',
    clusterId: 'clusterId',
    orderedHouseIds: 'orderedHouseIds'
  };

  export type RouteScalarFieldEnum = (typeof RouteScalarFieldEnum)[keyof typeof RouteScalarFieldEnum]


  export const ClusterScalarFieldEnum: {
    id: 'id',
    centriodLat: 'centriodLat',
    centriodLong: 'centriodLong',
    routeIds: 'routeIds'
  };

  export type ClusterScalarFieldEnum = (typeof ClusterScalarFieldEnum)[keyof typeof ClusterScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type TestPingWhereInput = {
    AND?: TestPingWhereInput | TestPingWhereInput[]
    OR?: TestPingWhereInput[]
    NOT?: TestPingWhereInput | TestPingWhereInput[]
    id?: UuidFilter<"TestPing"> | string
    createdAt?: DateTimeFilter<"TestPing"> | Date | string
  }

  export type TestPingOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
  }

  export type TestPingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TestPingWhereInput | TestPingWhereInput[]
    OR?: TestPingWhereInput[]
    NOT?: TestPingWhereInput | TestPingWhereInput[]
    createdAt?: DateTimeFilter<"TestPing"> | Date | string
  }, "id">

  export type TestPingOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    _count?: TestPingCountOrderByAggregateInput
    _max?: TestPingMaxOrderByAggregateInput
    _min?: TestPingMinOrderByAggregateInput
  }

  export type TestPingScalarWhereWithAggregatesInput = {
    AND?: TestPingScalarWhereWithAggregatesInput | TestPingScalarWhereWithAggregatesInput[]
    OR?: TestPingScalarWhereWithAggregatesInput[]
    NOT?: TestPingScalarWhereWithAggregatesInput | TestPingScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"TestPing"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TestPing"> | Date | string
  }

  export type HouseWhereInput = {
    AND?: HouseWhereInput | HouseWhereInput[]
    OR?: HouseWhereInput[]
    NOT?: HouseWhereInput | HouseWhereInput[]
    id?: UuidFilter<"House"> | string
    address?: StringFilter<"House"> | string
    latitude?: FloatFilter<"House"> | number
    longitude?: FloatFilter<"House"> | number
    status?: StringFilter<"House"> | string
    clusterId?: StringFilter<"House"> | string
  }

  export type HouseOrderByWithRelationInput = {
    id?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    status?: SortOrder
    clusterId?: SortOrder
  }

  export type HouseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HouseWhereInput | HouseWhereInput[]
    OR?: HouseWhereInput[]
    NOT?: HouseWhereInput | HouseWhereInput[]
    address?: StringFilter<"House"> | string
    latitude?: FloatFilter<"House"> | number
    longitude?: FloatFilter<"House"> | number
    status?: StringFilter<"House"> | string
    clusterId?: StringFilter<"House"> | string
  }, "id">

  export type HouseOrderByWithAggregationInput = {
    id?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    status?: SortOrder
    clusterId?: SortOrder
    _count?: HouseCountOrderByAggregateInput
    _avg?: HouseAvgOrderByAggregateInput
    _max?: HouseMaxOrderByAggregateInput
    _min?: HouseMinOrderByAggregateInput
    _sum?: HouseSumOrderByAggregateInput
  }

  export type HouseScalarWhereWithAggregatesInput = {
    AND?: HouseScalarWhereWithAggregatesInput | HouseScalarWhereWithAggregatesInput[]
    OR?: HouseScalarWhereWithAggregatesInput[]
    NOT?: HouseScalarWhereWithAggregatesInput | HouseScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"House"> | string
    address?: StringWithAggregatesFilter<"House"> | string
    latitude?: FloatWithAggregatesFilter<"House"> | number
    longitude?: FloatWithAggregatesFilter<"House"> | number
    status?: StringWithAggregatesFilter<"House"> | string
    clusterId?: StringWithAggregatesFilter<"House"> | string
  }

  export type MockHouseWhereInput = {
    AND?: MockHouseWhereInput | MockHouseWhereInput[]
    OR?: MockHouseWhereInput[]
    NOT?: MockHouseWhereInput | MockHouseWhereInput[]
    id?: UuidFilter<"MockHouse"> | string
    address?: StringFilter<"MockHouse"> | string
    latitude?: FloatFilter<"MockHouse"> | number
    longitude?: FloatFilter<"MockHouse"> | number
    neighborhood?: StringFilter<"MockHouse"> | string
    priorityScore?: FloatFilter<"MockHouse"> | number
    visitDurationMinutes?: IntFilter<"MockHouse"> | number
    status?: StringFilter<"MockHouse"> | string
    isCornerHouse?: BoolFilter<"MockHouse"> | boolean
    streetName?: StringFilter<"MockHouse"> | string
    houseNumber?: IntFilter<"MockHouse"> | number
    createdAt?: DateTimeFilter<"MockHouse"> | Date | string
  }

  export type MockHouseOrderByWithRelationInput = {
    id?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    neighborhood?: SortOrder
    priorityScore?: SortOrder
    visitDurationMinutes?: SortOrder
    status?: SortOrder
    isCornerHouse?: SortOrder
    streetName?: SortOrder
    houseNumber?: SortOrder
    createdAt?: SortOrder
  }

  export type MockHouseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MockHouseWhereInput | MockHouseWhereInput[]
    OR?: MockHouseWhereInput[]
    NOT?: MockHouseWhereInput | MockHouseWhereInput[]
    address?: StringFilter<"MockHouse"> | string
    latitude?: FloatFilter<"MockHouse"> | number
    longitude?: FloatFilter<"MockHouse"> | number
    neighborhood?: StringFilter<"MockHouse"> | string
    priorityScore?: FloatFilter<"MockHouse"> | number
    visitDurationMinutes?: IntFilter<"MockHouse"> | number
    status?: StringFilter<"MockHouse"> | string
    isCornerHouse?: BoolFilter<"MockHouse"> | boolean
    streetName?: StringFilter<"MockHouse"> | string
    houseNumber?: IntFilter<"MockHouse"> | number
    createdAt?: DateTimeFilter<"MockHouse"> | Date | string
  }, "id">

  export type MockHouseOrderByWithAggregationInput = {
    id?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    neighborhood?: SortOrder
    priorityScore?: SortOrder
    visitDurationMinutes?: SortOrder
    status?: SortOrder
    isCornerHouse?: SortOrder
    streetName?: SortOrder
    houseNumber?: SortOrder
    createdAt?: SortOrder
    _count?: MockHouseCountOrderByAggregateInput
    _avg?: MockHouseAvgOrderByAggregateInput
    _max?: MockHouseMaxOrderByAggregateInput
    _min?: MockHouseMinOrderByAggregateInput
    _sum?: MockHouseSumOrderByAggregateInput
  }

  export type MockHouseScalarWhereWithAggregatesInput = {
    AND?: MockHouseScalarWhereWithAggregatesInput | MockHouseScalarWhereWithAggregatesInput[]
    OR?: MockHouseScalarWhereWithAggregatesInput[]
    NOT?: MockHouseScalarWhereWithAggregatesInput | MockHouseScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"MockHouse"> | string
    address?: StringWithAggregatesFilter<"MockHouse"> | string
    latitude?: FloatWithAggregatesFilter<"MockHouse"> | number
    longitude?: FloatWithAggregatesFilter<"MockHouse"> | number
    neighborhood?: StringWithAggregatesFilter<"MockHouse"> | string
    priorityScore?: FloatWithAggregatesFilter<"MockHouse"> | number
    visitDurationMinutes?: IntWithAggregatesFilter<"MockHouse"> | number
    status?: StringWithAggregatesFilter<"MockHouse"> | string
    isCornerHouse?: BoolWithAggregatesFilter<"MockHouse"> | boolean
    streetName?: StringWithAggregatesFilter<"MockHouse"> | string
    houseNumber?: IntWithAggregatesFilter<"MockHouse"> | number
    createdAt?: DateTimeWithAggregatesFilter<"MockHouse"> | Date | string
  }

  export type RouteWhereInput = {
    AND?: RouteWhereInput | RouteWhereInput[]
    OR?: RouteWhereInput[]
    NOT?: RouteWhereInput | RouteWhereInput[]
    id?: UuidFilter<"Route"> | string
    clusterId?: StringFilter<"Route"> | string
    orderedHouseIds?: StringNullableListFilter<"Route">
  }

  export type RouteOrderByWithRelationInput = {
    id?: SortOrder
    clusterId?: SortOrder
    orderedHouseIds?: SortOrder
  }

  export type RouteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RouteWhereInput | RouteWhereInput[]
    OR?: RouteWhereInput[]
    NOT?: RouteWhereInput | RouteWhereInput[]
    clusterId?: StringFilter<"Route"> | string
    orderedHouseIds?: StringNullableListFilter<"Route">
  }, "id">

  export type RouteOrderByWithAggregationInput = {
    id?: SortOrder
    clusterId?: SortOrder
    orderedHouseIds?: SortOrder
    _count?: RouteCountOrderByAggregateInput
    _max?: RouteMaxOrderByAggregateInput
    _min?: RouteMinOrderByAggregateInput
  }

  export type RouteScalarWhereWithAggregatesInput = {
    AND?: RouteScalarWhereWithAggregatesInput | RouteScalarWhereWithAggregatesInput[]
    OR?: RouteScalarWhereWithAggregatesInput[]
    NOT?: RouteScalarWhereWithAggregatesInput | RouteScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Route"> | string
    clusterId?: StringWithAggregatesFilter<"Route"> | string
    orderedHouseIds?: StringNullableListFilter<"Route">
  }

  export type ClusterWhereInput = {
    AND?: ClusterWhereInput | ClusterWhereInput[]
    OR?: ClusterWhereInput[]
    NOT?: ClusterWhereInput | ClusterWhereInput[]
    id?: UuidFilter<"Cluster"> | string
    centriodLat?: FloatFilter<"Cluster"> | number
    centriodLong?: FloatFilter<"Cluster"> | number
    routeIds?: StringNullableListFilter<"Cluster">
  }

  export type ClusterOrderByWithRelationInput = {
    id?: SortOrder
    centriodLat?: SortOrder
    centriodLong?: SortOrder
    routeIds?: SortOrder
  }

  export type ClusterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClusterWhereInput | ClusterWhereInput[]
    OR?: ClusterWhereInput[]
    NOT?: ClusterWhereInput | ClusterWhereInput[]
    centriodLat?: FloatFilter<"Cluster"> | number
    centriodLong?: FloatFilter<"Cluster"> | number
    routeIds?: StringNullableListFilter<"Cluster">
  }, "id">

  export type ClusterOrderByWithAggregationInput = {
    id?: SortOrder
    centriodLat?: SortOrder
    centriodLong?: SortOrder
    routeIds?: SortOrder
    _count?: ClusterCountOrderByAggregateInput
    _avg?: ClusterAvgOrderByAggregateInput
    _max?: ClusterMaxOrderByAggregateInput
    _min?: ClusterMinOrderByAggregateInput
    _sum?: ClusterSumOrderByAggregateInput
  }

  export type ClusterScalarWhereWithAggregatesInput = {
    AND?: ClusterScalarWhereWithAggregatesInput | ClusterScalarWhereWithAggregatesInput[]
    OR?: ClusterScalarWhereWithAggregatesInput[]
    NOT?: ClusterScalarWhereWithAggregatesInput | ClusterScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Cluster"> | string
    centriodLat?: FloatWithAggregatesFilter<"Cluster"> | number
    centriodLong?: FloatWithAggregatesFilter<"Cluster"> | number
    routeIds?: StringNullableListFilter<"Cluster">
  }

  export type TestPingCreateInput = {
    id?: string
    createdAt?: Date | string
  }

  export type TestPingUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
  }

  export type TestPingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestPingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestPingCreateManyInput = {
    id?: string
    createdAt?: Date | string
  }

  export type TestPingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestPingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HouseCreateInput = {
    id?: string
    address?: string
    latitude?: number
    longitude?: number
    status?: string
    clusterId?: string
  }

  export type HouseUncheckedCreateInput = {
    id?: string
    address?: string
    latitude?: number
    longitude?: number
    status?: string
    clusterId?: string
  }

  export type HouseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    clusterId?: StringFieldUpdateOperationsInput | string
  }

  export type HouseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    clusterId?: StringFieldUpdateOperationsInput | string
  }

  export type HouseCreateManyInput = {
    id?: string
    address?: string
    latitude?: number
    longitude?: number
    status?: string
    clusterId?: string
  }

  export type HouseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    clusterId?: StringFieldUpdateOperationsInput | string
  }

  export type HouseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    clusterId?: StringFieldUpdateOperationsInput | string
  }

  export type MockHouseCreateInput = {
    id?: string
    address?: string
    latitude?: number
    longitude?: number
    neighborhood?: string
    priorityScore?: number
    visitDurationMinutes?: number
    status?: string
    isCornerHouse?: boolean
    streetName?: string
    houseNumber?: number
    createdAt?: Date | string
  }

  export type MockHouseUncheckedCreateInput = {
    id?: string
    address?: string
    latitude?: number
    longitude?: number
    neighborhood?: string
    priorityScore?: number
    visitDurationMinutes?: number
    status?: string
    isCornerHouse?: boolean
    streetName?: string
    houseNumber?: number
    createdAt?: Date | string
  }

  export type MockHouseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    neighborhood?: StringFieldUpdateOperationsInput | string
    priorityScore?: FloatFieldUpdateOperationsInput | number
    visitDurationMinutes?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    isCornerHouse?: BoolFieldUpdateOperationsInput | boolean
    streetName?: StringFieldUpdateOperationsInput | string
    houseNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MockHouseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    neighborhood?: StringFieldUpdateOperationsInput | string
    priorityScore?: FloatFieldUpdateOperationsInput | number
    visitDurationMinutes?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    isCornerHouse?: BoolFieldUpdateOperationsInput | boolean
    streetName?: StringFieldUpdateOperationsInput | string
    houseNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MockHouseCreateManyInput = {
    id?: string
    address?: string
    latitude?: number
    longitude?: number
    neighborhood?: string
    priorityScore?: number
    visitDurationMinutes?: number
    status?: string
    isCornerHouse?: boolean
    streetName?: string
    houseNumber?: number
    createdAt?: Date | string
  }

  export type MockHouseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    neighborhood?: StringFieldUpdateOperationsInput | string
    priorityScore?: FloatFieldUpdateOperationsInput | number
    visitDurationMinutes?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    isCornerHouse?: BoolFieldUpdateOperationsInput | boolean
    streetName?: StringFieldUpdateOperationsInput | string
    houseNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MockHouseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    neighborhood?: StringFieldUpdateOperationsInput | string
    priorityScore?: FloatFieldUpdateOperationsInput | number
    visitDurationMinutes?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    isCornerHouse?: BoolFieldUpdateOperationsInput | boolean
    streetName?: StringFieldUpdateOperationsInput | string
    houseNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteCreateInput = {
    id?: string
    clusterId?: string
    orderedHouseIds?: RouteCreateorderedHouseIdsInput | string[]
  }

  export type RouteUncheckedCreateInput = {
    id?: string
    clusterId?: string
    orderedHouseIds?: RouteCreateorderedHouseIdsInput | string[]
  }

  export type RouteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clusterId?: StringFieldUpdateOperationsInput | string
    orderedHouseIds?: RouteUpdateorderedHouseIdsInput | string[]
  }

  export type RouteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clusterId?: StringFieldUpdateOperationsInput | string
    orderedHouseIds?: RouteUpdateorderedHouseIdsInput | string[]
  }

  export type RouteCreateManyInput = {
    id?: string
    clusterId?: string
    orderedHouseIds?: RouteCreateorderedHouseIdsInput | string[]
  }

  export type RouteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clusterId?: StringFieldUpdateOperationsInput | string
    orderedHouseIds?: RouteUpdateorderedHouseIdsInput | string[]
  }

  export type RouteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clusterId?: StringFieldUpdateOperationsInput | string
    orderedHouseIds?: RouteUpdateorderedHouseIdsInput | string[]
  }

  export type ClusterCreateInput = {
    id?: string
    centriodLat?: number
    centriodLong?: number
    routeIds?: ClusterCreaterouteIdsInput | string[]
  }

  export type ClusterUncheckedCreateInput = {
    id?: string
    centriodLat?: number
    centriodLong?: number
    routeIds?: ClusterCreaterouteIdsInput | string[]
  }

  export type ClusterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    centriodLat?: FloatFieldUpdateOperationsInput | number
    centriodLong?: FloatFieldUpdateOperationsInput | number
    routeIds?: ClusterUpdaterouteIdsInput | string[]
  }

  export type ClusterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    centriodLat?: FloatFieldUpdateOperationsInput | number
    centriodLong?: FloatFieldUpdateOperationsInput | number
    routeIds?: ClusterUpdaterouteIdsInput | string[]
  }

  export type ClusterCreateManyInput = {
    id?: string
    centriodLat?: number
    centriodLong?: number
    routeIds?: ClusterCreaterouteIdsInput | string[]
  }

  export type ClusterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    centriodLat?: FloatFieldUpdateOperationsInput | number
    centriodLong?: FloatFieldUpdateOperationsInput | number
    routeIds?: ClusterUpdaterouteIdsInput | string[]
  }

  export type ClusterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    centriodLat?: FloatFieldUpdateOperationsInput | number
    centriodLong?: FloatFieldUpdateOperationsInput | number
    routeIds?: ClusterUpdaterouteIdsInput | string[]
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TestPingCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
  }

  export type TestPingMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
  }

  export type TestPingMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type HouseCountOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    status?: SortOrder
    clusterId?: SortOrder
  }

  export type HouseAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type HouseMaxOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    status?: SortOrder
    clusterId?: SortOrder
  }

  export type HouseMinOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    status?: SortOrder
    clusterId?: SortOrder
  }

  export type HouseSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type MockHouseCountOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    neighborhood?: SortOrder
    priorityScore?: SortOrder
    visitDurationMinutes?: SortOrder
    status?: SortOrder
    isCornerHouse?: SortOrder
    streetName?: SortOrder
    houseNumber?: SortOrder
    createdAt?: SortOrder
  }

  export type MockHouseAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    priorityScore?: SortOrder
    visitDurationMinutes?: SortOrder
    houseNumber?: SortOrder
  }

  export type MockHouseMaxOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    neighborhood?: SortOrder
    priorityScore?: SortOrder
    visitDurationMinutes?: SortOrder
    status?: SortOrder
    isCornerHouse?: SortOrder
    streetName?: SortOrder
    houseNumber?: SortOrder
    createdAt?: SortOrder
  }

  export type MockHouseMinOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    neighborhood?: SortOrder
    priorityScore?: SortOrder
    visitDurationMinutes?: SortOrder
    status?: SortOrder
    isCornerHouse?: SortOrder
    streetName?: SortOrder
    houseNumber?: SortOrder
    createdAt?: SortOrder
  }

  export type MockHouseSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    priorityScore?: SortOrder
    visitDurationMinutes?: SortOrder
    houseNumber?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type RouteCountOrderByAggregateInput = {
    id?: SortOrder
    clusterId?: SortOrder
    orderedHouseIds?: SortOrder
  }

  export type RouteMaxOrderByAggregateInput = {
    id?: SortOrder
    clusterId?: SortOrder
  }

  export type RouteMinOrderByAggregateInput = {
    id?: SortOrder
    clusterId?: SortOrder
  }

  export type ClusterCountOrderByAggregateInput = {
    id?: SortOrder
    centriodLat?: SortOrder
    centriodLong?: SortOrder
    routeIds?: SortOrder
  }

  export type ClusterAvgOrderByAggregateInput = {
    centriodLat?: SortOrder
    centriodLong?: SortOrder
  }

  export type ClusterMaxOrderByAggregateInput = {
    id?: SortOrder
    centriodLat?: SortOrder
    centriodLong?: SortOrder
  }

  export type ClusterMinOrderByAggregateInput = {
    id?: SortOrder
    centriodLat?: SortOrder
    centriodLong?: SortOrder
  }

  export type ClusterSumOrderByAggregateInput = {
    centriodLat?: SortOrder
    centriodLong?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type RouteCreateorderedHouseIdsInput = {
    set: string[]
  }

  export type RouteUpdateorderedHouseIdsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ClusterCreaterouteIdsInput = {
    set: string[]
  }

  export type ClusterUpdaterouteIdsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}