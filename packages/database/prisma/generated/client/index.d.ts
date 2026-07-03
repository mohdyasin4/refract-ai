
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model api_connections
 * 
 */
export type api_connections = $Result.DefaultSelection<Prisma.$api_connectionsPayload>
/**
 * Model csvData
 * 
 */
export type csvData = $Result.DefaultSelection<Prisma.$csvDataPayload>
/**
 * Model dashboards
 * 
 */
export type dashboards = $Result.DefaultSelection<Prisma.$dashboardsPayload>
/**
 * Model database_connections
 * 
 */
export type database_connections = $Result.DefaultSelection<Prisma.$database_connectionsPayload>
/**
 * Model datasets
 * 
 */
export type datasets = $Result.DefaultSelection<Prisma.$datasetsPayload>
/**
 * Model data_sources
 * 
 */
export type data_sources = $Result.DefaultSelection<Prisma.$data_sourcesPayload>
/**
 * Model users_storage
 * 
 */
export type users_storage = $Result.DefaultSelection<Prisma.$users_storagePayload>
/**
 * Model analytics_events
 * 
 */
export type analytics_events = $Result.DefaultSelection<Prisma.$analytics_eventsPayload>
/**
 * Model csvdata
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type csvdata = $Result.DefaultSelection<Prisma.$csvdataPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.api_connections`: Exposes CRUD operations for the **api_connections** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Api_connections
    * const api_connections = await prisma.api_connections.findMany()
    * ```
    */
  get api_connections(): Prisma.api_connectionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.csvData`: Exposes CRUD operations for the **csvData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CsvData
    * const csvData = await prisma.csvData.findMany()
    * ```
    */
  get csvData(): Prisma.csvDataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dashboards`: Exposes CRUD operations for the **dashboards** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dashboards
    * const dashboards = await prisma.dashboards.findMany()
    * ```
    */
  get dashboards(): Prisma.dashboardsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.database_connections`: Exposes CRUD operations for the **database_connections** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Database_connections
    * const database_connections = await prisma.database_connections.findMany()
    * ```
    */
  get database_connections(): Prisma.database_connectionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.datasets`: Exposes CRUD operations for the **datasets** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Datasets
    * const datasets = await prisma.datasets.findMany()
    * ```
    */
  get datasets(): Prisma.datasetsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.data_sources`: Exposes CRUD operations for the **data_sources** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Data_sources
    * const data_sources = await prisma.data_sources.findMany()
    * ```
    */
  get data_sources(): Prisma.data_sourcesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users_storage`: Exposes CRUD operations for the **users_storage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users_storages
    * const users_storages = await prisma.users_storage.findMany()
    * ```
    */
  get users_storage(): Prisma.users_storageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.analytics_events`: Exposes CRUD operations for the **analytics_events** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Analytics_events
    * const analytics_events = await prisma.analytics_events.findMany()
    * ```
    */
  get analytics_events(): Prisma.analytics_eventsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.csvdata`: Exposes CRUD operations for the **csvdata** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Csvdata
    * const csvdata = await prisma.csvdata.findMany()
    * ```
    */
  get csvdata(): Prisma.csvdataDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
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
    users: 'users',
    api_connections: 'api_connections',
    csvData: 'csvData',
    dashboards: 'dashboards',
    database_connections: 'database_connections',
    datasets: 'datasets',
    data_sources: 'data_sources',
    users_storage: 'users_storage',
    analytics_events: 'analytics_events',
    csvdata: 'csvdata'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "api_connections" | "csvData" | "dashboards" | "database_connections" | "datasets" | "data_sources" | "users_storage" | "analytics_events" | "csvdata"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      api_connections: {
        payload: Prisma.$api_connectionsPayload<ExtArgs>
        fields: Prisma.api_connectionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.api_connectionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_connectionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.api_connectionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_connectionsPayload>
          }
          findFirst: {
            args: Prisma.api_connectionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_connectionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.api_connectionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_connectionsPayload>
          }
          findMany: {
            args: Prisma.api_connectionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_connectionsPayload>[]
          }
          create: {
            args: Prisma.api_connectionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_connectionsPayload>
          }
          createMany: {
            args: Prisma.api_connectionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.api_connectionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_connectionsPayload>[]
          }
          delete: {
            args: Prisma.api_connectionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_connectionsPayload>
          }
          update: {
            args: Prisma.api_connectionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_connectionsPayload>
          }
          deleteMany: {
            args: Prisma.api_connectionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.api_connectionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.api_connectionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_connectionsPayload>[]
          }
          upsert: {
            args: Prisma.api_connectionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_connectionsPayload>
          }
          aggregate: {
            args: Prisma.Api_connectionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApi_connections>
          }
          groupBy: {
            args: Prisma.api_connectionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Api_connectionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.api_connectionsCountArgs<ExtArgs>
            result: $Utils.Optional<Api_connectionsCountAggregateOutputType> | number
          }
        }
      }
      csvData: {
        payload: Prisma.$csvDataPayload<ExtArgs>
        fields: Prisma.csvDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.csvDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$csvDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.csvDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$csvDataPayload>
          }
          findFirst: {
            args: Prisma.csvDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$csvDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.csvDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$csvDataPayload>
          }
          findMany: {
            args: Prisma.csvDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$csvDataPayload>[]
          }
          create: {
            args: Prisma.csvDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$csvDataPayload>
          }
          createMany: {
            args: Prisma.csvDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.csvDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$csvDataPayload>[]
          }
          delete: {
            args: Prisma.csvDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$csvDataPayload>
          }
          update: {
            args: Prisma.csvDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$csvDataPayload>
          }
          deleteMany: {
            args: Prisma.csvDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.csvDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.csvDataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$csvDataPayload>[]
          }
          upsert: {
            args: Prisma.csvDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$csvDataPayload>
          }
          aggregate: {
            args: Prisma.CsvDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCsvData>
          }
          groupBy: {
            args: Prisma.csvDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<CsvDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.csvDataCountArgs<ExtArgs>
            result: $Utils.Optional<CsvDataCountAggregateOutputType> | number
          }
        }
      }
      dashboards: {
        payload: Prisma.$dashboardsPayload<ExtArgs>
        fields: Prisma.dashboardsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.dashboardsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dashboardsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.dashboardsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dashboardsPayload>
          }
          findFirst: {
            args: Prisma.dashboardsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dashboardsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.dashboardsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dashboardsPayload>
          }
          findMany: {
            args: Prisma.dashboardsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dashboardsPayload>[]
          }
          create: {
            args: Prisma.dashboardsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dashboardsPayload>
          }
          createMany: {
            args: Prisma.dashboardsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.dashboardsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dashboardsPayload>[]
          }
          delete: {
            args: Prisma.dashboardsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dashboardsPayload>
          }
          update: {
            args: Prisma.dashboardsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dashboardsPayload>
          }
          deleteMany: {
            args: Prisma.dashboardsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.dashboardsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.dashboardsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dashboardsPayload>[]
          }
          upsert: {
            args: Prisma.dashboardsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dashboardsPayload>
          }
          aggregate: {
            args: Prisma.DashboardsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDashboards>
          }
          groupBy: {
            args: Prisma.dashboardsGroupByArgs<ExtArgs>
            result: $Utils.Optional<DashboardsGroupByOutputType>[]
          }
          count: {
            args: Prisma.dashboardsCountArgs<ExtArgs>
            result: $Utils.Optional<DashboardsCountAggregateOutputType> | number
          }
        }
      }
      database_connections: {
        payload: Prisma.$database_connectionsPayload<ExtArgs>
        fields: Prisma.database_connectionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.database_connectionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$database_connectionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.database_connectionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$database_connectionsPayload>
          }
          findFirst: {
            args: Prisma.database_connectionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$database_connectionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.database_connectionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$database_connectionsPayload>
          }
          findMany: {
            args: Prisma.database_connectionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$database_connectionsPayload>[]
          }
          create: {
            args: Prisma.database_connectionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$database_connectionsPayload>
          }
          createMany: {
            args: Prisma.database_connectionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.database_connectionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$database_connectionsPayload>[]
          }
          delete: {
            args: Prisma.database_connectionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$database_connectionsPayload>
          }
          update: {
            args: Prisma.database_connectionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$database_connectionsPayload>
          }
          deleteMany: {
            args: Prisma.database_connectionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.database_connectionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.database_connectionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$database_connectionsPayload>[]
          }
          upsert: {
            args: Prisma.database_connectionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$database_connectionsPayload>
          }
          aggregate: {
            args: Prisma.Database_connectionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDatabase_connections>
          }
          groupBy: {
            args: Prisma.database_connectionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Database_connectionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.database_connectionsCountArgs<ExtArgs>
            result: $Utils.Optional<Database_connectionsCountAggregateOutputType> | number
          }
        }
      }
      datasets: {
        payload: Prisma.$datasetsPayload<ExtArgs>
        fields: Prisma.datasetsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.datasetsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$datasetsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.datasetsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$datasetsPayload>
          }
          findFirst: {
            args: Prisma.datasetsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$datasetsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.datasetsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$datasetsPayload>
          }
          findMany: {
            args: Prisma.datasetsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$datasetsPayload>[]
          }
          create: {
            args: Prisma.datasetsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$datasetsPayload>
          }
          createMany: {
            args: Prisma.datasetsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.datasetsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$datasetsPayload>[]
          }
          delete: {
            args: Prisma.datasetsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$datasetsPayload>
          }
          update: {
            args: Prisma.datasetsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$datasetsPayload>
          }
          deleteMany: {
            args: Prisma.datasetsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.datasetsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.datasetsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$datasetsPayload>[]
          }
          upsert: {
            args: Prisma.datasetsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$datasetsPayload>
          }
          aggregate: {
            args: Prisma.DatasetsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDatasets>
          }
          groupBy: {
            args: Prisma.datasetsGroupByArgs<ExtArgs>
            result: $Utils.Optional<DatasetsGroupByOutputType>[]
          }
          count: {
            args: Prisma.datasetsCountArgs<ExtArgs>
            result: $Utils.Optional<DatasetsCountAggregateOutputType> | number
          }
        }
      }
      data_sources: {
        payload: Prisma.$data_sourcesPayload<ExtArgs>
        fields: Prisma.data_sourcesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.data_sourcesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$data_sourcesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.data_sourcesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$data_sourcesPayload>
          }
          findFirst: {
            args: Prisma.data_sourcesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$data_sourcesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.data_sourcesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$data_sourcesPayload>
          }
          findMany: {
            args: Prisma.data_sourcesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$data_sourcesPayload>[]
          }
          create: {
            args: Prisma.data_sourcesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$data_sourcesPayload>
          }
          createMany: {
            args: Prisma.data_sourcesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.data_sourcesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$data_sourcesPayload>[]
          }
          delete: {
            args: Prisma.data_sourcesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$data_sourcesPayload>
          }
          update: {
            args: Prisma.data_sourcesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$data_sourcesPayload>
          }
          deleteMany: {
            args: Prisma.data_sourcesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.data_sourcesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.data_sourcesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$data_sourcesPayload>[]
          }
          upsert: {
            args: Prisma.data_sourcesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$data_sourcesPayload>
          }
          aggregate: {
            args: Prisma.Data_sourcesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateData_sources>
          }
          groupBy: {
            args: Prisma.data_sourcesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Data_sourcesGroupByOutputType>[]
          }
          count: {
            args: Prisma.data_sourcesCountArgs<ExtArgs>
            result: $Utils.Optional<Data_sourcesCountAggregateOutputType> | number
          }
        }
      }
      users_storage: {
        payload: Prisma.$users_storagePayload<ExtArgs>
        fields: Prisma.users_storageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.users_storageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_storagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.users_storageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_storagePayload>
          }
          findFirst: {
            args: Prisma.users_storageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_storagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.users_storageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_storagePayload>
          }
          findMany: {
            args: Prisma.users_storageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_storagePayload>[]
          }
          create: {
            args: Prisma.users_storageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_storagePayload>
          }
          createMany: {
            args: Prisma.users_storageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.users_storageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_storagePayload>[]
          }
          delete: {
            args: Prisma.users_storageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_storagePayload>
          }
          update: {
            args: Prisma.users_storageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_storagePayload>
          }
          deleteMany: {
            args: Prisma.users_storageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.users_storageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.users_storageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_storagePayload>[]
          }
          upsert: {
            args: Prisma.users_storageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_storagePayload>
          }
          aggregate: {
            args: Prisma.Users_storageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers_storage>
          }
          groupBy: {
            args: Prisma.users_storageGroupByArgs<ExtArgs>
            result: $Utils.Optional<Users_storageGroupByOutputType>[]
          }
          count: {
            args: Prisma.users_storageCountArgs<ExtArgs>
            result: $Utils.Optional<Users_storageCountAggregateOutputType> | number
          }
        }
      }
      analytics_events: {
        payload: Prisma.$analytics_eventsPayload<ExtArgs>
        fields: Prisma.analytics_eventsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.analytics_eventsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$analytics_eventsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.analytics_eventsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$analytics_eventsPayload>
          }
          findFirst: {
            args: Prisma.analytics_eventsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$analytics_eventsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.analytics_eventsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$analytics_eventsPayload>
          }
          findMany: {
            args: Prisma.analytics_eventsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$analytics_eventsPayload>[]
          }
          create: {
            args: Prisma.analytics_eventsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$analytics_eventsPayload>
          }
          createMany: {
            args: Prisma.analytics_eventsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.analytics_eventsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$analytics_eventsPayload>[]
          }
          delete: {
            args: Prisma.analytics_eventsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$analytics_eventsPayload>
          }
          update: {
            args: Prisma.analytics_eventsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$analytics_eventsPayload>
          }
          deleteMany: {
            args: Prisma.analytics_eventsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.analytics_eventsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.analytics_eventsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$analytics_eventsPayload>[]
          }
          upsert: {
            args: Prisma.analytics_eventsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$analytics_eventsPayload>
          }
          aggregate: {
            args: Prisma.Analytics_eventsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnalytics_events>
          }
          groupBy: {
            args: Prisma.analytics_eventsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Analytics_eventsGroupByOutputType>[]
          }
          count: {
            args: Prisma.analytics_eventsCountArgs<ExtArgs>
            result: $Utils.Optional<Analytics_eventsCountAggregateOutputType> | number
          }
        }
      }
      csvdata: {
        payload: Prisma.$csvdataPayload<ExtArgs>
        fields: Prisma.csvdataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.csvdataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$csvdataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.csvdataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$csvdataPayload>
          }
          findFirst: {
            args: Prisma.csvdataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$csvdataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.csvdataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$csvdataPayload>
          }
          findMany: {
            args: Prisma.csvdataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$csvdataPayload>[]
          }
          create: {
            args: Prisma.csvdataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$csvdataPayload>
          }
          createMany: {
            args: Prisma.csvdataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.csvdataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$csvdataPayload>[]
          }
          delete: {
            args: Prisma.csvdataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$csvdataPayload>
          }
          update: {
            args: Prisma.csvdataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$csvdataPayload>
          }
          deleteMany: {
            args: Prisma.csvdataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.csvdataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.csvdataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$csvdataPayload>[]
          }
          upsert: {
            args: Prisma.csvdataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$csvdataPayload>
          }
          aggregate: {
            args: Prisma.CsvdataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCsvdata>
          }
          groupBy: {
            args: Prisma.csvdataGroupByArgs<ExtArgs>
            result: $Utils.Optional<CsvdataGroupByOutputType>[]
          }
          count: {
            args: Prisma.csvdataCountArgs<ExtArgs>
            result: $Utils.Optional<CsvdataCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
    adapter?: runtime.SqlDriverAdapterFactory | null
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
  }
  export type GlobalOmitConfig = {
    users?: usersOmit
    api_connections?: api_connectionsOmit
    csvData?: csvDataOmit
    dashboards?: dashboardsOmit
    database_connections?: database_connectionsOmit
    datasets?: datasetsOmit
    data_sources?: data_sourcesOmit
    users_storage?: users_storageOmit
    analytics_events?: analytics_eventsOmit
    csvdata?: csvdataOmit
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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    csvdata: number
    data_sources: number
    connections: number
    datasets: number
    analytics_events: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    csvdata?: boolean | UsersCountOutputTypeCountCsvdataArgs
    data_sources?: boolean | UsersCountOutputTypeCountData_sourcesArgs
    connections?: boolean | UsersCountOutputTypeCountConnectionsArgs
    datasets?: boolean | UsersCountOutputTypeCountDatasetsArgs
    analytics_events?: boolean | UsersCountOutputTypeCountAnalytics_eventsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCsvdataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: csvdataWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountData_sourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: data_sourcesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountConnectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: database_connectionsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountDatasetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: datasetsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountAnalytics_eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: analytics_eventsWhereInput
  }


  /**
   * Count Type Api_connectionsCountOutputType
   */

  export type Api_connectionsCountOutputType = {
    data_sources: number
  }

  export type Api_connectionsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    data_sources?: boolean | Api_connectionsCountOutputTypeCountData_sourcesArgs
  }

  // Custom InputTypes
  /**
   * Api_connectionsCountOutputType without action
   */
  export type Api_connectionsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Api_connectionsCountOutputType
     */
    select?: Api_connectionsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Api_connectionsCountOutputType without action
   */
  export type Api_connectionsCountOutputTypeCountData_sourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: data_sourcesWhereInput
  }


  /**
   * Count Type Database_connectionsCountOutputType
   */

  export type Database_connectionsCountOutputType = {
    api_connections: number
    data_sources: number
  }

  export type Database_connectionsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    api_connections?: boolean | Database_connectionsCountOutputTypeCountApi_connectionsArgs
    data_sources?: boolean | Database_connectionsCountOutputTypeCountData_sourcesArgs
  }

  // Custom InputTypes
  /**
   * Database_connectionsCountOutputType without action
   */
  export type Database_connectionsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Database_connectionsCountOutputType
     */
    select?: Database_connectionsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Database_connectionsCountOutputType without action
   */
  export type Database_connectionsCountOutputTypeCountApi_connectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: api_connectionsWhereInput
  }

  /**
   * Database_connectionsCountOutputType without action
   */
  export type Database_connectionsCountOutputTypeCountData_sourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: data_sourcesWhereInput
  }


  /**
   * Count Type Data_sourcesCountOutputType
   */

  export type Data_sourcesCountOutputType = {
    analytics_events: number
  }

  export type Data_sourcesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    analytics_events?: boolean | Data_sourcesCountOutputTypeCountAnalytics_eventsArgs
  }

  // Custom InputTypes
  /**
   * Data_sourcesCountOutputType without action
   */
  export type Data_sourcesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Data_sourcesCountOutputType
     */
    select?: Data_sourcesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Data_sourcesCountOutputType without action
   */
  export type Data_sourcesCountOutputTypeCountAnalytics_eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: analytics_eventsWhereInput
  }


  /**
   * Count Type CsvdataCountOutputType
   */

  export type CsvdataCountOutputType = {
    data_sources: number
  }

  export type CsvdataCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    data_sources?: boolean | CsvdataCountOutputTypeCountData_sourcesArgs
  }

  // Custom InputTypes
  /**
   * CsvdataCountOutputType without action
   */
  export type CsvdataCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CsvdataCountOutputType
     */
    select?: CsvdataCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CsvdataCountOutputType without action
   */
  export type CsvdataCountOutputTypeCountData_sourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: data_sourcesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    user_id: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    user_id: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    user_id: number
    attributes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    user_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    user_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    user_id?: true
    attributes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    user_id: string
    attributes: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    attributes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    csvdata?: boolean | users$csvdataArgs<ExtArgs>
    data_sources?: boolean | users$data_sourcesArgs<ExtArgs>
    connections?: boolean | users$connectionsArgs<ExtArgs>
    datasets?: boolean | users$datasetsArgs<ExtArgs>
    analytics_events?: boolean | users$analytics_eventsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    attributes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    attributes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    user_id?: boolean
    attributes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "attributes" | "createdAt" | "updatedAt", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    csvdata?: boolean | users$csvdataArgs<ExtArgs>
    data_sources?: boolean | users$data_sourcesArgs<ExtArgs>
    connections?: boolean | users$connectionsArgs<ExtArgs>
    datasets?: boolean | users$datasetsArgs<ExtArgs>
    analytics_events?: boolean | users$analytics_eventsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      csvdata: Prisma.$csvdataPayload<ExtArgs>[]
      data_sources: Prisma.$data_sourcesPayload<ExtArgs>[]
      connections: Prisma.$database_connectionsPayload<ExtArgs>[]
      datasets: Prisma.$datasetsPayload<ExtArgs>[]
      analytics_events: Prisma.$analytics_eventsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: string
      attributes: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
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
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    csvdata<T extends users$csvdataArgs<ExtArgs> = {}>(args?: Subset<T, users$csvdataArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$csvdataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    data_sources<T extends users$data_sourcesArgs<ExtArgs> = {}>(args?: Subset<T, users$data_sourcesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$data_sourcesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    connections<T extends users$connectionsArgs<ExtArgs> = {}>(args?: Subset<T, users$connectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$database_connectionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    datasets<T extends users$datasetsArgs<ExtArgs> = {}>(args?: Subset<T, users$datasetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$datasetsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    analytics_events<T extends users$analytics_eventsArgs<ExtArgs> = {}>(args?: Subset<T, users$analytics_eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$analytics_eventsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly user_id: FieldRef<"users", 'String'>
    readonly attributes: FieldRef<"users", 'Json'>
    readonly createdAt: FieldRef<"users", 'DateTime'>
    readonly updatedAt: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.csvdata
   */
  export type users$csvdataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the csvdata
     */
    select?: csvdataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the csvdata
     */
    omit?: csvdataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: csvdataInclude<ExtArgs> | null
    where?: csvdataWhereInput
    orderBy?: csvdataOrderByWithRelationInput | csvdataOrderByWithRelationInput[]
    cursor?: csvdataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CsvdataScalarFieldEnum | CsvdataScalarFieldEnum[]
  }

  /**
   * users.data_sources
   */
  export type users$data_sourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data_sources
     */
    select?: data_sourcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the data_sources
     */
    omit?: data_sourcesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: data_sourcesInclude<ExtArgs> | null
    where?: data_sourcesWhereInput
    orderBy?: data_sourcesOrderByWithRelationInput | data_sourcesOrderByWithRelationInput[]
    cursor?: data_sourcesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Data_sourcesScalarFieldEnum | Data_sourcesScalarFieldEnum[]
  }

  /**
   * users.connections
   */
  export type users$connectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the database_connections
     */
    select?: database_connectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the database_connections
     */
    omit?: database_connectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: database_connectionsInclude<ExtArgs> | null
    where?: database_connectionsWhereInput
    orderBy?: database_connectionsOrderByWithRelationInput | database_connectionsOrderByWithRelationInput[]
    cursor?: database_connectionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Database_connectionsScalarFieldEnum | Database_connectionsScalarFieldEnum[]
  }

  /**
   * users.datasets
   */
  export type users$datasetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the datasets
     */
    select?: datasetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the datasets
     */
    omit?: datasetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: datasetsInclude<ExtArgs> | null
    where?: datasetsWhereInput
    orderBy?: datasetsOrderByWithRelationInput | datasetsOrderByWithRelationInput[]
    cursor?: datasetsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DatasetsScalarFieldEnum | DatasetsScalarFieldEnum[]
  }

  /**
   * users.analytics_events
   */
  export type users$analytics_eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the analytics_events
     */
    select?: analytics_eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the analytics_events
     */
    omit?: analytics_eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: analytics_eventsInclude<ExtArgs> | null
    where?: analytics_eventsWhereInput
    orderBy?: analytics_eventsOrderByWithRelationInput | analytics_eventsOrderByWithRelationInput[]
    cursor?: analytics_eventsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Analytics_eventsScalarFieldEnum | Analytics_eventsScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model api_connections
   */

  export type AggregateApi_connections = {
    _count: Api_connectionsCountAggregateOutputType | null
    _avg: Api_connectionsAvgAggregateOutputType | null
    _sum: Api_connectionsSumAggregateOutputType | null
    _min: Api_connectionsMinAggregateOutputType | null
    _max: Api_connectionsMaxAggregateOutputType | null
  }

  export type Api_connectionsAvgAggregateOutputType = {
    id: number | null
    database_connection_id: number | null
  }

  export type Api_connectionsSumAggregateOutputType = {
    id: number | null
    database_connection_id: number | null
  }

  export type Api_connectionsMinAggregateOutputType = {
    id: number | null
    connection_name: string | null
    api_url: string | null
    api_key: string | null
    user_id: string | null
    created_at: Date | null
    updated_at: Date | null
    database_connection_id: number | null
    table_name: string | null
  }

  export type Api_connectionsMaxAggregateOutputType = {
    id: number | null
    connection_name: string | null
    api_url: string | null
    api_key: string | null
    user_id: string | null
    created_at: Date | null
    updated_at: Date | null
    database_connection_id: number | null
    table_name: string | null
  }

  export type Api_connectionsCountAggregateOutputType = {
    id: number
    connection_name: number
    api_url: number
    api_key: number
    headers: number
    user_id: number
    created_at: number
    updated_at: number
    database_connection_id: number
    table_name: number
    _all: number
  }


  export type Api_connectionsAvgAggregateInputType = {
    id?: true
    database_connection_id?: true
  }

  export type Api_connectionsSumAggregateInputType = {
    id?: true
    database_connection_id?: true
  }

  export type Api_connectionsMinAggregateInputType = {
    id?: true
    connection_name?: true
    api_url?: true
    api_key?: true
    user_id?: true
    created_at?: true
    updated_at?: true
    database_connection_id?: true
    table_name?: true
  }

  export type Api_connectionsMaxAggregateInputType = {
    id?: true
    connection_name?: true
    api_url?: true
    api_key?: true
    user_id?: true
    created_at?: true
    updated_at?: true
    database_connection_id?: true
    table_name?: true
  }

  export type Api_connectionsCountAggregateInputType = {
    id?: true
    connection_name?: true
    api_url?: true
    api_key?: true
    headers?: true
    user_id?: true
    created_at?: true
    updated_at?: true
    database_connection_id?: true
    table_name?: true
    _all?: true
  }

  export type Api_connectionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which api_connections to aggregate.
     */
    where?: api_connectionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of api_connections to fetch.
     */
    orderBy?: api_connectionsOrderByWithRelationInput | api_connectionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: api_connectionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` api_connections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` api_connections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned api_connections
    **/
    _count?: true | Api_connectionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Api_connectionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Api_connectionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Api_connectionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Api_connectionsMaxAggregateInputType
  }

  export type GetApi_connectionsAggregateType<T extends Api_connectionsAggregateArgs> = {
        [P in keyof T & keyof AggregateApi_connections]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApi_connections[P]>
      : GetScalarType<T[P], AggregateApi_connections[P]>
  }




  export type api_connectionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: api_connectionsWhereInput
    orderBy?: api_connectionsOrderByWithAggregationInput | api_connectionsOrderByWithAggregationInput[]
    by: Api_connectionsScalarFieldEnum[] | Api_connectionsScalarFieldEnum
    having?: api_connectionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Api_connectionsCountAggregateInputType | true
    _avg?: Api_connectionsAvgAggregateInputType
    _sum?: Api_connectionsSumAggregateInputType
    _min?: Api_connectionsMinAggregateInputType
    _max?: Api_connectionsMaxAggregateInputType
  }

  export type Api_connectionsGroupByOutputType = {
    id: number
    connection_name: string
    api_url: string
    api_key: string | null
    headers: JsonValue | null
    user_id: string
    created_at: Date
    updated_at: Date
    database_connection_id: number | null
    table_name: string | null
    _count: Api_connectionsCountAggregateOutputType | null
    _avg: Api_connectionsAvgAggregateOutputType | null
    _sum: Api_connectionsSumAggregateOutputType | null
    _min: Api_connectionsMinAggregateOutputType | null
    _max: Api_connectionsMaxAggregateOutputType | null
  }

  type GetApi_connectionsGroupByPayload<T extends api_connectionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Api_connectionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Api_connectionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Api_connectionsGroupByOutputType[P]>
            : GetScalarType<T[P], Api_connectionsGroupByOutputType[P]>
        }
      >
    >


  export type api_connectionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    connection_name?: boolean
    api_url?: boolean
    api_key?: boolean
    headers?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    database_connection_id?: boolean
    table_name?: boolean
    connection?: boolean | api_connections$connectionArgs<ExtArgs>
    data_sources?: boolean | api_connections$data_sourcesArgs<ExtArgs>
    _count?: boolean | Api_connectionsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["api_connections"]>

  export type api_connectionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    connection_name?: boolean
    api_url?: boolean
    api_key?: boolean
    headers?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    database_connection_id?: boolean
    table_name?: boolean
    connection?: boolean | api_connections$connectionArgs<ExtArgs>
  }, ExtArgs["result"]["api_connections"]>

  export type api_connectionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    connection_name?: boolean
    api_url?: boolean
    api_key?: boolean
    headers?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    database_connection_id?: boolean
    table_name?: boolean
    connection?: boolean | api_connections$connectionArgs<ExtArgs>
  }, ExtArgs["result"]["api_connections"]>

  export type api_connectionsSelectScalar = {
    id?: boolean
    connection_name?: boolean
    api_url?: boolean
    api_key?: boolean
    headers?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    database_connection_id?: boolean
    table_name?: boolean
  }

  export type api_connectionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "connection_name" | "api_url" | "api_key" | "headers" | "user_id" | "created_at" | "updated_at" | "database_connection_id" | "table_name", ExtArgs["result"]["api_connections"]>
  export type api_connectionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    connection?: boolean | api_connections$connectionArgs<ExtArgs>
    data_sources?: boolean | api_connections$data_sourcesArgs<ExtArgs>
    _count?: boolean | Api_connectionsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type api_connectionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    connection?: boolean | api_connections$connectionArgs<ExtArgs>
  }
  export type api_connectionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    connection?: boolean | api_connections$connectionArgs<ExtArgs>
  }

  export type $api_connectionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "api_connections"
    objects: {
      connection: Prisma.$database_connectionsPayload<ExtArgs> | null
      data_sources: Prisma.$data_sourcesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      connection_name: string
      api_url: string
      api_key: string | null
      headers: Prisma.JsonValue | null
      user_id: string
      created_at: Date
      updated_at: Date
      database_connection_id: number | null
      table_name: string | null
    }, ExtArgs["result"]["api_connections"]>
    composites: {}
  }

  type api_connectionsGetPayload<S extends boolean | null | undefined | api_connectionsDefaultArgs> = $Result.GetResult<Prisma.$api_connectionsPayload, S>

  type api_connectionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<api_connectionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Api_connectionsCountAggregateInputType | true
    }

  export interface api_connectionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['api_connections'], meta: { name: 'api_connections' } }
    /**
     * Find zero or one Api_connections that matches the filter.
     * @param {api_connectionsFindUniqueArgs} args - Arguments to find a Api_connections
     * @example
     * // Get one Api_connections
     * const api_connections = await prisma.api_connections.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends api_connectionsFindUniqueArgs>(args: SelectSubset<T, api_connectionsFindUniqueArgs<ExtArgs>>): Prisma__api_connectionsClient<$Result.GetResult<Prisma.$api_connectionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Api_connections that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {api_connectionsFindUniqueOrThrowArgs} args - Arguments to find a Api_connections
     * @example
     * // Get one Api_connections
     * const api_connections = await prisma.api_connections.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends api_connectionsFindUniqueOrThrowArgs>(args: SelectSubset<T, api_connectionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__api_connectionsClient<$Result.GetResult<Prisma.$api_connectionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Api_connections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_connectionsFindFirstArgs} args - Arguments to find a Api_connections
     * @example
     * // Get one Api_connections
     * const api_connections = await prisma.api_connections.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends api_connectionsFindFirstArgs>(args?: SelectSubset<T, api_connectionsFindFirstArgs<ExtArgs>>): Prisma__api_connectionsClient<$Result.GetResult<Prisma.$api_connectionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Api_connections that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_connectionsFindFirstOrThrowArgs} args - Arguments to find a Api_connections
     * @example
     * // Get one Api_connections
     * const api_connections = await prisma.api_connections.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends api_connectionsFindFirstOrThrowArgs>(args?: SelectSubset<T, api_connectionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__api_connectionsClient<$Result.GetResult<Prisma.$api_connectionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Api_connections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_connectionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Api_connections
     * const api_connections = await prisma.api_connections.findMany()
     * 
     * // Get first 10 Api_connections
     * const api_connections = await prisma.api_connections.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const api_connectionsWithIdOnly = await prisma.api_connections.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends api_connectionsFindManyArgs>(args?: SelectSubset<T, api_connectionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$api_connectionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Api_connections.
     * @param {api_connectionsCreateArgs} args - Arguments to create a Api_connections.
     * @example
     * // Create one Api_connections
     * const Api_connections = await prisma.api_connections.create({
     *   data: {
     *     // ... data to create a Api_connections
     *   }
     * })
     * 
     */
    create<T extends api_connectionsCreateArgs>(args: SelectSubset<T, api_connectionsCreateArgs<ExtArgs>>): Prisma__api_connectionsClient<$Result.GetResult<Prisma.$api_connectionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Api_connections.
     * @param {api_connectionsCreateManyArgs} args - Arguments to create many Api_connections.
     * @example
     * // Create many Api_connections
     * const api_connections = await prisma.api_connections.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends api_connectionsCreateManyArgs>(args?: SelectSubset<T, api_connectionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Api_connections and returns the data saved in the database.
     * @param {api_connectionsCreateManyAndReturnArgs} args - Arguments to create many Api_connections.
     * @example
     * // Create many Api_connections
     * const api_connections = await prisma.api_connections.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Api_connections and only return the `id`
     * const api_connectionsWithIdOnly = await prisma.api_connections.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends api_connectionsCreateManyAndReturnArgs>(args?: SelectSubset<T, api_connectionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$api_connectionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Api_connections.
     * @param {api_connectionsDeleteArgs} args - Arguments to delete one Api_connections.
     * @example
     * // Delete one Api_connections
     * const Api_connections = await prisma.api_connections.delete({
     *   where: {
     *     // ... filter to delete one Api_connections
     *   }
     * })
     * 
     */
    delete<T extends api_connectionsDeleteArgs>(args: SelectSubset<T, api_connectionsDeleteArgs<ExtArgs>>): Prisma__api_connectionsClient<$Result.GetResult<Prisma.$api_connectionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Api_connections.
     * @param {api_connectionsUpdateArgs} args - Arguments to update one Api_connections.
     * @example
     * // Update one Api_connections
     * const api_connections = await prisma.api_connections.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends api_connectionsUpdateArgs>(args: SelectSubset<T, api_connectionsUpdateArgs<ExtArgs>>): Prisma__api_connectionsClient<$Result.GetResult<Prisma.$api_connectionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Api_connections.
     * @param {api_connectionsDeleteManyArgs} args - Arguments to filter Api_connections to delete.
     * @example
     * // Delete a few Api_connections
     * const { count } = await prisma.api_connections.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends api_connectionsDeleteManyArgs>(args?: SelectSubset<T, api_connectionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Api_connections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_connectionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Api_connections
     * const api_connections = await prisma.api_connections.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends api_connectionsUpdateManyArgs>(args: SelectSubset<T, api_connectionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Api_connections and returns the data updated in the database.
     * @param {api_connectionsUpdateManyAndReturnArgs} args - Arguments to update many Api_connections.
     * @example
     * // Update many Api_connections
     * const api_connections = await prisma.api_connections.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Api_connections and only return the `id`
     * const api_connectionsWithIdOnly = await prisma.api_connections.updateManyAndReturn({
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
    updateManyAndReturn<T extends api_connectionsUpdateManyAndReturnArgs>(args: SelectSubset<T, api_connectionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$api_connectionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Api_connections.
     * @param {api_connectionsUpsertArgs} args - Arguments to update or create a Api_connections.
     * @example
     * // Update or create a Api_connections
     * const api_connections = await prisma.api_connections.upsert({
     *   create: {
     *     // ... data to create a Api_connections
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Api_connections we want to update
     *   }
     * })
     */
    upsert<T extends api_connectionsUpsertArgs>(args: SelectSubset<T, api_connectionsUpsertArgs<ExtArgs>>): Prisma__api_connectionsClient<$Result.GetResult<Prisma.$api_connectionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Api_connections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_connectionsCountArgs} args - Arguments to filter Api_connections to count.
     * @example
     * // Count the number of Api_connections
     * const count = await prisma.api_connections.count({
     *   where: {
     *     // ... the filter for the Api_connections we want to count
     *   }
     * })
    **/
    count<T extends api_connectionsCountArgs>(
      args?: Subset<T, api_connectionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Api_connectionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Api_connections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Api_connectionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Api_connectionsAggregateArgs>(args: Subset<T, Api_connectionsAggregateArgs>): Prisma.PrismaPromise<GetApi_connectionsAggregateType<T>>

    /**
     * Group by Api_connections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_connectionsGroupByArgs} args - Group by arguments.
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
      T extends api_connectionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: api_connectionsGroupByArgs['orderBy'] }
        : { orderBy?: api_connectionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, api_connectionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApi_connectionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the api_connections model
   */
  readonly fields: api_connectionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for api_connections.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__api_connectionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    connection<T extends api_connections$connectionArgs<ExtArgs> = {}>(args?: Subset<T, api_connections$connectionArgs<ExtArgs>>): Prisma__database_connectionsClient<$Result.GetResult<Prisma.$database_connectionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    data_sources<T extends api_connections$data_sourcesArgs<ExtArgs> = {}>(args?: Subset<T, api_connections$data_sourcesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$data_sourcesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the api_connections model
   */
  interface api_connectionsFieldRefs {
    readonly id: FieldRef<"api_connections", 'Int'>
    readonly connection_name: FieldRef<"api_connections", 'String'>
    readonly api_url: FieldRef<"api_connections", 'String'>
    readonly api_key: FieldRef<"api_connections", 'String'>
    readonly headers: FieldRef<"api_connections", 'Json'>
    readonly user_id: FieldRef<"api_connections", 'String'>
    readonly created_at: FieldRef<"api_connections", 'DateTime'>
    readonly updated_at: FieldRef<"api_connections", 'DateTime'>
    readonly database_connection_id: FieldRef<"api_connections", 'Int'>
    readonly table_name: FieldRef<"api_connections", 'String'>
  }
    

  // Custom InputTypes
  /**
   * api_connections findUnique
   */
  export type api_connectionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_connections
     */
    select?: api_connectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_connections
     */
    omit?: api_connectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_connectionsInclude<ExtArgs> | null
    /**
     * Filter, which api_connections to fetch.
     */
    where: api_connectionsWhereUniqueInput
  }

  /**
   * api_connections findUniqueOrThrow
   */
  export type api_connectionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_connections
     */
    select?: api_connectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_connections
     */
    omit?: api_connectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_connectionsInclude<ExtArgs> | null
    /**
     * Filter, which api_connections to fetch.
     */
    where: api_connectionsWhereUniqueInput
  }

  /**
   * api_connections findFirst
   */
  export type api_connectionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_connections
     */
    select?: api_connectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_connections
     */
    omit?: api_connectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_connectionsInclude<ExtArgs> | null
    /**
     * Filter, which api_connections to fetch.
     */
    where?: api_connectionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of api_connections to fetch.
     */
    orderBy?: api_connectionsOrderByWithRelationInput | api_connectionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for api_connections.
     */
    cursor?: api_connectionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` api_connections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` api_connections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of api_connections.
     */
    distinct?: Api_connectionsScalarFieldEnum | Api_connectionsScalarFieldEnum[]
  }

  /**
   * api_connections findFirstOrThrow
   */
  export type api_connectionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_connections
     */
    select?: api_connectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_connections
     */
    omit?: api_connectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_connectionsInclude<ExtArgs> | null
    /**
     * Filter, which api_connections to fetch.
     */
    where?: api_connectionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of api_connections to fetch.
     */
    orderBy?: api_connectionsOrderByWithRelationInput | api_connectionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for api_connections.
     */
    cursor?: api_connectionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` api_connections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` api_connections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of api_connections.
     */
    distinct?: Api_connectionsScalarFieldEnum | Api_connectionsScalarFieldEnum[]
  }

  /**
   * api_connections findMany
   */
  export type api_connectionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_connections
     */
    select?: api_connectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_connections
     */
    omit?: api_connectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_connectionsInclude<ExtArgs> | null
    /**
     * Filter, which api_connections to fetch.
     */
    where?: api_connectionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of api_connections to fetch.
     */
    orderBy?: api_connectionsOrderByWithRelationInput | api_connectionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing api_connections.
     */
    cursor?: api_connectionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` api_connections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` api_connections.
     */
    skip?: number
    distinct?: Api_connectionsScalarFieldEnum | Api_connectionsScalarFieldEnum[]
  }

  /**
   * api_connections create
   */
  export type api_connectionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_connections
     */
    select?: api_connectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_connections
     */
    omit?: api_connectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_connectionsInclude<ExtArgs> | null
    /**
     * The data needed to create a api_connections.
     */
    data: XOR<api_connectionsCreateInput, api_connectionsUncheckedCreateInput>
  }

  /**
   * api_connections createMany
   */
  export type api_connectionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many api_connections.
     */
    data: api_connectionsCreateManyInput | api_connectionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * api_connections createManyAndReturn
   */
  export type api_connectionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_connections
     */
    select?: api_connectionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the api_connections
     */
    omit?: api_connectionsOmit<ExtArgs> | null
    /**
     * The data used to create many api_connections.
     */
    data: api_connectionsCreateManyInput | api_connectionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_connectionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * api_connections update
   */
  export type api_connectionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_connections
     */
    select?: api_connectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_connections
     */
    omit?: api_connectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_connectionsInclude<ExtArgs> | null
    /**
     * The data needed to update a api_connections.
     */
    data: XOR<api_connectionsUpdateInput, api_connectionsUncheckedUpdateInput>
    /**
     * Choose, which api_connections to update.
     */
    where: api_connectionsWhereUniqueInput
  }

  /**
   * api_connections updateMany
   */
  export type api_connectionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update api_connections.
     */
    data: XOR<api_connectionsUpdateManyMutationInput, api_connectionsUncheckedUpdateManyInput>
    /**
     * Filter which api_connections to update
     */
    where?: api_connectionsWhereInput
    /**
     * Limit how many api_connections to update.
     */
    limit?: number
  }

  /**
   * api_connections updateManyAndReturn
   */
  export type api_connectionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_connections
     */
    select?: api_connectionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the api_connections
     */
    omit?: api_connectionsOmit<ExtArgs> | null
    /**
     * The data used to update api_connections.
     */
    data: XOR<api_connectionsUpdateManyMutationInput, api_connectionsUncheckedUpdateManyInput>
    /**
     * Filter which api_connections to update
     */
    where?: api_connectionsWhereInput
    /**
     * Limit how many api_connections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_connectionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * api_connections upsert
   */
  export type api_connectionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_connections
     */
    select?: api_connectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_connections
     */
    omit?: api_connectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_connectionsInclude<ExtArgs> | null
    /**
     * The filter to search for the api_connections to update in case it exists.
     */
    where: api_connectionsWhereUniqueInput
    /**
     * In case the api_connections found by the `where` argument doesn't exist, create a new api_connections with this data.
     */
    create: XOR<api_connectionsCreateInput, api_connectionsUncheckedCreateInput>
    /**
     * In case the api_connections was found with the provided `where` argument, update it with this data.
     */
    update: XOR<api_connectionsUpdateInput, api_connectionsUncheckedUpdateInput>
  }

  /**
   * api_connections delete
   */
  export type api_connectionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_connections
     */
    select?: api_connectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_connections
     */
    omit?: api_connectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_connectionsInclude<ExtArgs> | null
    /**
     * Filter which api_connections to delete.
     */
    where: api_connectionsWhereUniqueInput
  }

  /**
   * api_connections deleteMany
   */
  export type api_connectionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which api_connections to delete
     */
    where?: api_connectionsWhereInput
    /**
     * Limit how many api_connections to delete.
     */
    limit?: number
  }

  /**
   * api_connections.connection
   */
  export type api_connections$connectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the database_connections
     */
    select?: database_connectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the database_connections
     */
    omit?: database_connectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: database_connectionsInclude<ExtArgs> | null
    where?: database_connectionsWhereInput
  }

  /**
   * api_connections.data_sources
   */
  export type api_connections$data_sourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data_sources
     */
    select?: data_sourcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the data_sources
     */
    omit?: data_sourcesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: data_sourcesInclude<ExtArgs> | null
    where?: data_sourcesWhereInput
    orderBy?: data_sourcesOrderByWithRelationInput | data_sourcesOrderByWithRelationInput[]
    cursor?: data_sourcesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Data_sourcesScalarFieldEnum | Data_sourcesScalarFieldEnum[]
  }

  /**
   * api_connections without action
   */
  export type api_connectionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_connections
     */
    select?: api_connectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_connections
     */
    omit?: api_connectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_connectionsInclude<ExtArgs> | null
  }


  /**
   * Model csvData
   */

  export type AggregateCsvData = {
    _count: CsvDataCountAggregateOutputType | null
    _avg: CsvDataAvgAggregateOutputType | null
    _sum: CsvDataSumAggregateOutputType | null
    _min: CsvDataMinAggregateOutputType | null
    _max: CsvDataMaxAggregateOutputType | null
  }

  export type CsvDataAvgAggregateOutputType = {
    id: number | null
  }

  export type CsvDataSumAggregateOutputType = {
    id: bigint | null
  }

  export type CsvDataMinAggregateOutputType = {
    id: bigint | null
    user_id: string | null
    bucket_name: string | null
    file_name: string | null
    createdat: Date | null
    updatedat: Date | null
    connection_name: string | null
  }

  export type CsvDataMaxAggregateOutputType = {
    id: bigint | null
    user_id: string | null
    bucket_name: string | null
    file_name: string | null
    createdat: Date | null
    updatedat: Date | null
    connection_name: string | null
  }

  export type CsvDataCountAggregateOutputType = {
    id: number
    user_id: number
    bucket_name: number
    file_name: number
    selectedFields: number
    createdat: number
    updatedat: number
    connection_name: number
    _all: number
  }


  export type CsvDataAvgAggregateInputType = {
    id?: true
  }

  export type CsvDataSumAggregateInputType = {
    id?: true
  }

  export type CsvDataMinAggregateInputType = {
    id?: true
    user_id?: true
    bucket_name?: true
    file_name?: true
    createdat?: true
    updatedat?: true
    connection_name?: true
  }

  export type CsvDataMaxAggregateInputType = {
    id?: true
    user_id?: true
    bucket_name?: true
    file_name?: true
    createdat?: true
    updatedat?: true
    connection_name?: true
  }

  export type CsvDataCountAggregateInputType = {
    id?: true
    user_id?: true
    bucket_name?: true
    file_name?: true
    selectedFields?: true
    createdat?: true
    updatedat?: true
    connection_name?: true
    _all?: true
  }

  export type CsvDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which csvData to aggregate.
     */
    where?: csvDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of csvData to fetch.
     */
    orderBy?: csvDataOrderByWithRelationInput | csvDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: csvDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` csvData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` csvData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned csvData
    **/
    _count?: true | CsvDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CsvDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CsvDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CsvDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CsvDataMaxAggregateInputType
  }

  export type GetCsvDataAggregateType<T extends CsvDataAggregateArgs> = {
        [P in keyof T & keyof AggregateCsvData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCsvData[P]>
      : GetScalarType<T[P], AggregateCsvData[P]>
  }




  export type csvDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: csvDataWhereInput
    orderBy?: csvDataOrderByWithAggregationInput | csvDataOrderByWithAggregationInput[]
    by: CsvDataScalarFieldEnum[] | CsvDataScalarFieldEnum
    having?: csvDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CsvDataCountAggregateInputType | true
    _avg?: CsvDataAvgAggregateInputType
    _sum?: CsvDataSumAggregateInputType
    _min?: CsvDataMinAggregateInputType
    _max?: CsvDataMaxAggregateInputType
  }

  export type CsvDataGroupByOutputType = {
    id: bigint
    user_id: string
    bucket_name: string | null
    file_name: string | null
    selectedFields: string[]
    createdat: Date | null
    updatedat: Date | null
    connection_name: string | null
    _count: CsvDataCountAggregateOutputType | null
    _avg: CsvDataAvgAggregateOutputType | null
    _sum: CsvDataSumAggregateOutputType | null
    _min: CsvDataMinAggregateOutputType | null
    _max: CsvDataMaxAggregateOutputType | null
  }

  type GetCsvDataGroupByPayload<T extends csvDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CsvDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CsvDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CsvDataGroupByOutputType[P]>
            : GetScalarType<T[P], CsvDataGroupByOutputType[P]>
        }
      >
    >


  export type csvDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    bucket_name?: boolean
    file_name?: boolean
    selectedFields?: boolean
    createdat?: boolean
    updatedat?: boolean
    connection_name?: boolean
  }, ExtArgs["result"]["csvData"]>

  export type csvDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    bucket_name?: boolean
    file_name?: boolean
    selectedFields?: boolean
    createdat?: boolean
    updatedat?: boolean
    connection_name?: boolean
  }, ExtArgs["result"]["csvData"]>

  export type csvDataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    bucket_name?: boolean
    file_name?: boolean
    selectedFields?: boolean
    createdat?: boolean
    updatedat?: boolean
    connection_name?: boolean
  }, ExtArgs["result"]["csvData"]>

  export type csvDataSelectScalar = {
    id?: boolean
    user_id?: boolean
    bucket_name?: boolean
    file_name?: boolean
    selectedFields?: boolean
    createdat?: boolean
    updatedat?: boolean
    connection_name?: boolean
  }

  export type csvDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "bucket_name" | "file_name" | "selectedFields" | "createdat" | "updatedat" | "connection_name", ExtArgs["result"]["csvData"]>

  export type $csvDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "csvData"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      user_id: string
      bucket_name: string | null
      file_name: string | null
      selectedFields: string[]
      createdat: Date | null
      updatedat: Date | null
      connection_name: string | null
    }, ExtArgs["result"]["csvData"]>
    composites: {}
  }

  type csvDataGetPayload<S extends boolean | null | undefined | csvDataDefaultArgs> = $Result.GetResult<Prisma.$csvDataPayload, S>

  type csvDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<csvDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CsvDataCountAggregateInputType | true
    }

  export interface csvDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['csvData'], meta: { name: 'csvData' } }
    /**
     * Find zero or one CsvData that matches the filter.
     * @param {csvDataFindUniqueArgs} args - Arguments to find a CsvData
     * @example
     * // Get one CsvData
     * const csvData = await prisma.csvData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends csvDataFindUniqueArgs>(args: SelectSubset<T, csvDataFindUniqueArgs<ExtArgs>>): Prisma__csvDataClient<$Result.GetResult<Prisma.$csvDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CsvData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {csvDataFindUniqueOrThrowArgs} args - Arguments to find a CsvData
     * @example
     * // Get one CsvData
     * const csvData = await prisma.csvData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends csvDataFindUniqueOrThrowArgs>(args: SelectSubset<T, csvDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__csvDataClient<$Result.GetResult<Prisma.$csvDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CsvData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {csvDataFindFirstArgs} args - Arguments to find a CsvData
     * @example
     * // Get one CsvData
     * const csvData = await prisma.csvData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends csvDataFindFirstArgs>(args?: SelectSubset<T, csvDataFindFirstArgs<ExtArgs>>): Prisma__csvDataClient<$Result.GetResult<Prisma.$csvDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CsvData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {csvDataFindFirstOrThrowArgs} args - Arguments to find a CsvData
     * @example
     * // Get one CsvData
     * const csvData = await prisma.csvData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends csvDataFindFirstOrThrowArgs>(args?: SelectSubset<T, csvDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__csvDataClient<$Result.GetResult<Prisma.$csvDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CsvData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {csvDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CsvData
     * const csvData = await prisma.csvData.findMany()
     * 
     * // Get first 10 CsvData
     * const csvData = await prisma.csvData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const csvDataWithIdOnly = await prisma.csvData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends csvDataFindManyArgs>(args?: SelectSubset<T, csvDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$csvDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CsvData.
     * @param {csvDataCreateArgs} args - Arguments to create a CsvData.
     * @example
     * // Create one CsvData
     * const CsvData = await prisma.csvData.create({
     *   data: {
     *     // ... data to create a CsvData
     *   }
     * })
     * 
     */
    create<T extends csvDataCreateArgs>(args: SelectSubset<T, csvDataCreateArgs<ExtArgs>>): Prisma__csvDataClient<$Result.GetResult<Prisma.$csvDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CsvData.
     * @param {csvDataCreateManyArgs} args - Arguments to create many CsvData.
     * @example
     * // Create many CsvData
     * const csvData = await prisma.csvData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends csvDataCreateManyArgs>(args?: SelectSubset<T, csvDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CsvData and returns the data saved in the database.
     * @param {csvDataCreateManyAndReturnArgs} args - Arguments to create many CsvData.
     * @example
     * // Create many CsvData
     * const csvData = await prisma.csvData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CsvData and only return the `id`
     * const csvDataWithIdOnly = await prisma.csvData.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends csvDataCreateManyAndReturnArgs>(args?: SelectSubset<T, csvDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$csvDataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CsvData.
     * @param {csvDataDeleteArgs} args - Arguments to delete one CsvData.
     * @example
     * // Delete one CsvData
     * const CsvData = await prisma.csvData.delete({
     *   where: {
     *     // ... filter to delete one CsvData
     *   }
     * })
     * 
     */
    delete<T extends csvDataDeleteArgs>(args: SelectSubset<T, csvDataDeleteArgs<ExtArgs>>): Prisma__csvDataClient<$Result.GetResult<Prisma.$csvDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CsvData.
     * @param {csvDataUpdateArgs} args - Arguments to update one CsvData.
     * @example
     * // Update one CsvData
     * const csvData = await prisma.csvData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends csvDataUpdateArgs>(args: SelectSubset<T, csvDataUpdateArgs<ExtArgs>>): Prisma__csvDataClient<$Result.GetResult<Prisma.$csvDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CsvData.
     * @param {csvDataDeleteManyArgs} args - Arguments to filter CsvData to delete.
     * @example
     * // Delete a few CsvData
     * const { count } = await prisma.csvData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends csvDataDeleteManyArgs>(args?: SelectSubset<T, csvDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CsvData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {csvDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CsvData
     * const csvData = await prisma.csvData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends csvDataUpdateManyArgs>(args: SelectSubset<T, csvDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CsvData and returns the data updated in the database.
     * @param {csvDataUpdateManyAndReturnArgs} args - Arguments to update many CsvData.
     * @example
     * // Update many CsvData
     * const csvData = await prisma.csvData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CsvData and only return the `id`
     * const csvDataWithIdOnly = await prisma.csvData.updateManyAndReturn({
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
    updateManyAndReturn<T extends csvDataUpdateManyAndReturnArgs>(args: SelectSubset<T, csvDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$csvDataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CsvData.
     * @param {csvDataUpsertArgs} args - Arguments to update or create a CsvData.
     * @example
     * // Update or create a CsvData
     * const csvData = await prisma.csvData.upsert({
     *   create: {
     *     // ... data to create a CsvData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CsvData we want to update
     *   }
     * })
     */
    upsert<T extends csvDataUpsertArgs>(args: SelectSubset<T, csvDataUpsertArgs<ExtArgs>>): Prisma__csvDataClient<$Result.GetResult<Prisma.$csvDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CsvData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {csvDataCountArgs} args - Arguments to filter CsvData to count.
     * @example
     * // Count the number of CsvData
     * const count = await prisma.csvData.count({
     *   where: {
     *     // ... the filter for the CsvData we want to count
     *   }
     * })
    **/
    count<T extends csvDataCountArgs>(
      args?: Subset<T, csvDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CsvDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CsvData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CsvDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CsvDataAggregateArgs>(args: Subset<T, CsvDataAggregateArgs>): Prisma.PrismaPromise<GetCsvDataAggregateType<T>>

    /**
     * Group by CsvData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {csvDataGroupByArgs} args - Group by arguments.
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
      T extends csvDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: csvDataGroupByArgs['orderBy'] }
        : { orderBy?: csvDataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, csvDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCsvDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the csvData model
   */
  readonly fields: csvDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for csvData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__csvDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the csvData model
   */
  interface csvDataFieldRefs {
    readonly id: FieldRef<"csvData", 'BigInt'>
    readonly user_id: FieldRef<"csvData", 'String'>
    readonly bucket_name: FieldRef<"csvData", 'String'>
    readonly file_name: FieldRef<"csvData", 'String'>
    readonly selectedFields: FieldRef<"csvData", 'String[]'>
    readonly createdat: FieldRef<"csvData", 'DateTime'>
    readonly updatedat: FieldRef<"csvData", 'DateTime'>
    readonly connection_name: FieldRef<"csvData", 'String'>
  }
    

  // Custom InputTypes
  /**
   * csvData findUnique
   */
  export type csvDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the csvData
     */
    select?: csvDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the csvData
     */
    omit?: csvDataOmit<ExtArgs> | null
    /**
     * Filter, which csvData to fetch.
     */
    where: csvDataWhereUniqueInput
  }

  /**
   * csvData findUniqueOrThrow
   */
  export type csvDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the csvData
     */
    select?: csvDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the csvData
     */
    omit?: csvDataOmit<ExtArgs> | null
    /**
     * Filter, which csvData to fetch.
     */
    where: csvDataWhereUniqueInput
  }

  /**
   * csvData findFirst
   */
  export type csvDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the csvData
     */
    select?: csvDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the csvData
     */
    omit?: csvDataOmit<ExtArgs> | null
    /**
     * Filter, which csvData to fetch.
     */
    where?: csvDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of csvData to fetch.
     */
    orderBy?: csvDataOrderByWithRelationInput | csvDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for csvData.
     */
    cursor?: csvDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` csvData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` csvData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of csvData.
     */
    distinct?: CsvDataScalarFieldEnum | CsvDataScalarFieldEnum[]
  }

  /**
   * csvData findFirstOrThrow
   */
  export type csvDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the csvData
     */
    select?: csvDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the csvData
     */
    omit?: csvDataOmit<ExtArgs> | null
    /**
     * Filter, which csvData to fetch.
     */
    where?: csvDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of csvData to fetch.
     */
    orderBy?: csvDataOrderByWithRelationInput | csvDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for csvData.
     */
    cursor?: csvDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` csvData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` csvData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of csvData.
     */
    distinct?: CsvDataScalarFieldEnum | CsvDataScalarFieldEnum[]
  }

  /**
   * csvData findMany
   */
  export type csvDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the csvData
     */
    select?: csvDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the csvData
     */
    omit?: csvDataOmit<ExtArgs> | null
    /**
     * Filter, which csvData to fetch.
     */
    where?: csvDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of csvData to fetch.
     */
    orderBy?: csvDataOrderByWithRelationInput | csvDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing csvData.
     */
    cursor?: csvDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` csvData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` csvData.
     */
    skip?: number
    distinct?: CsvDataScalarFieldEnum | CsvDataScalarFieldEnum[]
  }

  /**
   * csvData create
   */
  export type csvDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the csvData
     */
    select?: csvDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the csvData
     */
    omit?: csvDataOmit<ExtArgs> | null
    /**
     * The data needed to create a csvData.
     */
    data: XOR<csvDataCreateInput, csvDataUncheckedCreateInput>
  }

  /**
   * csvData createMany
   */
  export type csvDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many csvData.
     */
    data: csvDataCreateManyInput | csvDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * csvData createManyAndReturn
   */
  export type csvDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the csvData
     */
    select?: csvDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the csvData
     */
    omit?: csvDataOmit<ExtArgs> | null
    /**
     * The data used to create many csvData.
     */
    data: csvDataCreateManyInput | csvDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * csvData update
   */
  export type csvDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the csvData
     */
    select?: csvDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the csvData
     */
    omit?: csvDataOmit<ExtArgs> | null
    /**
     * The data needed to update a csvData.
     */
    data: XOR<csvDataUpdateInput, csvDataUncheckedUpdateInput>
    /**
     * Choose, which csvData to update.
     */
    where: csvDataWhereUniqueInput
  }

  /**
   * csvData updateMany
   */
  export type csvDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update csvData.
     */
    data: XOR<csvDataUpdateManyMutationInput, csvDataUncheckedUpdateManyInput>
    /**
     * Filter which csvData to update
     */
    where?: csvDataWhereInput
    /**
     * Limit how many csvData to update.
     */
    limit?: number
  }

  /**
   * csvData updateManyAndReturn
   */
  export type csvDataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the csvData
     */
    select?: csvDataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the csvData
     */
    omit?: csvDataOmit<ExtArgs> | null
    /**
     * The data used to update csvData.
     */
    data: XOR<csvDataUpdateManyMutationInput, csvDataUncheckedUpdateManyInput>
    /**
     * Filter which csvData to update
     */
    where?: csvDataWhereInput
    /**
     * Limit how many csvData to update.
     */
    limit?: number
  }

  /**
   * csvData upsert
   */
  export type csvDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the csvData
     */
    select?: csvDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the csvData
     */
    omit?: csvDataOmit<ExtArgs> | null
    /**
     * The filter to search for the csvData to update in case it exists.
     */
    where: csvDataWhereUniqueInput
    /**
     * In case the csvData found by the `where` argument doesn't exist, create a new csvData with this data.
     */
    create: XOR<csvDataCreateInput, csvDataUncheckedCreateInput>
    /**
     * In case the csvData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<csvDataUpdateInput, csvDataUncheckedUpdateInput>
  }

  /**
   * csvData delete
   */
  export type csvDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the csvData
     */
    select?: csvDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the csvData
     */
    omit?: csvDataOmit<ExtArgs> | null
    /**
     * Filter which csvData to delete.
     */
    where: csvDataWhereUniqueInput
  }

  /**
   * csvData deleteMany
   */
  export type csvDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which csvData to delete
     */
    where?: csvDataWhereInput
    /**
     * Limit how many csvData to delete.
     */
    limit?: number
  }

  /**
   * csvData without action
   */
  export type csvDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the csvData
     */
    select?: csvDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the csvData
     */
    omit?: csvDataOmit<ExtArgs> | null
  }


  /**
   * Model dashboards
   */

  export type AggregateDashboards = {
    _count: DashboardsCountAggregateOutputType | null
    _avg: DashboardsAvgAggregateOutputType | null
    _sum: DashboardsSumAggregateOutputType | null
    _min: DashboardsMinAggregateOutputType | null
    _max: DashboardsMaxAggregateOutputType | null
  }

  export type DashboardsAvgAggregateOutputType = {
    id: number | null
  }

  export type DashboardsSumAggregateOutputType = {
    id: number | null
  }

  export type DashboardsMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    user_id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    type: string | null
  }

  export type DashboardsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    user_id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    type: string | null
  }

  export type DashboardsCountAggregateOutputType = {
    id: number
    name: number
    description: number
    user_id: number
    createdAt: number
    updatedAt: number
    widget_details: number
    layout: number
    custom_settings: number
    type: number
    _all: number
  }


  export type DashboardsAvgAggregateInputType = {
    id?: true
  }

  export type DashboardsSumAggregateInputType = {
    id?: true
  }

  export type DashboardsMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    user_id?: true
    createdAt?: true
    updatedAt?: true
    type?: true
  }

  export type DashboardsMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    user_id?: true
    createdAt?: true
    updatedAt?: true
    type?: true
  }

  export type DashboardsCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    user_id?: true
    createdAt?: true
    updatedAt?: true
    widget_details?: true
    layout?: true
    custom_settings?: true
    type?: true
    _all?: true
  }

  export type DashboardsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which dashboards to aggregate.
     */
    where?: dashboardsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dashboards to fetch.
     */
    orderBy?: dashboardsOrderByWithRelationInput | dashboardsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: dashboardsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dashboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dashboards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned dashboards
    **/
    _count?: true | DashboardsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DashboardsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DashboardsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DashboardsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DashboardsMaxAggregateInputType
  }

  export type GetDashboardsAggregateType<T extends DashboardsAggregateArgs> = {
        [P in keyof T & keyof AggregateDashboards]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDashboards[P]>
      : GetScalarType<T[P], AggregateDashboards[P]>
  }




  export type dashboardsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: dashboardsWhereInput
    orderBy?: dashboardsOrderByWithAggregationInput | dashboardsOrderByWithAggregationInput[]
    by: DashboardsScalarFieldEnum[] | DashboardsScalarFieldEnum
    having?: dashboardsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DashboardsCountAggregateInputType | true
    _avg?: DashboardsAvgAggregateInputType
    _sum?: DashboardsSumAggregateInputType
    _min?: DashboardsMinAggregateInputType
    _max?: DashboardsMaxAggregateInputType
  }

  export type DashboardsGroupByOutputType = {
    id: number
    name: string
    description: string | null
    user_id: string
    createdAt: Date
    updatedAt: Date
    widget_details: JsonValue | null
    layout: JsonValue | null
    custom_settings: JsonValue | null
    type: string | null
    _count: DashboardsCountAggregateOutputType | null
    _avg: DashboardsAvgAggregateOutputType | null
    _sum: DashboardsSumAggregateOutputType | null
    _min: DashboardsMinAggregateOutputType | null
    _max: DashboardsMaxAggregateOutputType | null
  }

  type GetDashboardsGroupByPayload<T extends dashboardsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DashboardsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DashboardsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DashboardsGroupByOutputType[P]>
            : GetScalarType<T[P], DashboardsGroupByOutputType[P]>
        }
      >
    >


  export type dashboardsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    user_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    widget_details?: boolean
    layout?: boolean
    custom_settings?: boolean
    type?: boolean
  }, ExtArgs["result"]["dashboards"]>

  export type dashboardsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    user_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    widget_details?: boolean
    layout?: boolean
    custom_settings?: boolean
    type?: boolean
  }, ExtArgs["result"]["dashboards"]>

  export type dashboardsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    user_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    widget_details?: boolean
    layout?: boolean
    custom_settings?: boolean
    type?: boolean
  }, ExtArgs["result"]["dashboards"]>

  export type dashboardsSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    user_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    widget_details?: boolean
    layout?: boolean
    custom_settings?: boolean
    type?: boolean
  }

  export type dashboardsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "user_id" | "createdAt" | "updatedAt" | "widget_details" | "layout" | "custom_settings" | "type", ExtArgs["result"]["dashboards"]>

  export type $dashboardsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "dashboards"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      user_id: string
      createdAt: Date
      updatedAt: Date
      widget_details: Prisma.JsonValue | null
      layout: Prisma.JsonValue | null
      custom_settings: Prisma.JsonValue | null
      type: string | null
    }, ExtArgs["result"]["dashboards"]>
    composites: {}
  }

  type dashboardsGetPayload<S extends boolean | null | undefined | dashboardsDefaultArgs> = $Result.GetResult<Prisma.$dashboardsPayload, S>

  type dashboardsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<dashboardsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DashboardsCountAggregateInputType | true
    }

  export interface dashboardsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['dashboards'], meta: { name: 'dashboards' } }
    /**
     * Find zero or one Dashboards that matches the filter.
     * @param {dashboardsFindUniqueArgs} args - Arguments to find a Dashboards
     * @example
     * // Get one Dashboards
     * const dashboards = await prisma.dashboards.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends dashboardsFindUniqueArgs>(args: SelectSubset<T, dashboardsFindUniqueArgs<ExtArgs>>): Prisma__dashboardsClient<$Result.GetResult<Prisma.$dashboardsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dashboards that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {dashboardsFindUniqueOrThrowArgs} args - Arguments to find a Dashboards
     * @example
     * // Get one Dashboards
     * const dashboards = await prisma.dashboards.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends dashboardsFindUniqueOrThrowArgs>(args: SelectSubset<T, dashboardsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__dashboardsClient<$Result.GetResult<Prisma.$dashboardsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dashboards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dashboardsFindFirstArgs} args - Arguments to find a Dashboards
     * @example
     * // Get one Dashboards
     * const dashboards = await prisma.dashboards.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends dashboardsFindFirstArgs>(args?: SelectSubset<T, dashboardsFindFirstArgs<ExtArgs>>): Prisma__dashboardsClient<$Result.GetResult<Prisma.$dashboardsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dashboards that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dashboardsFindFirstOrThrowArgs} args - Arguments to find a Dashboards
     * @example
     * // Get one Dashboards
     * const dashboards = await prisma.dashboards.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends dashboardsFindFirstOrThrowArgs>(args?: SelectSubset<T, dashboardsFindFirstOrThrowArgs<ExtArgs>>): Prisma__dashboardsClient<$Result.GetResult<Prisma.$dashboardsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dashboards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dashboardsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dashboards
     * const dashboards = await prisma.dashboards.findMany()
     * 
     * // Get first 10 Dashboards
     * const dashboards = await prisma.dashboards.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dashboardsWithIdOnly = await prisma.dashboards.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends dashboardsFindManyArgs>(args?: SelectSubset<T, dashboardsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dashboardsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dashboards.
     * @param {dashboardsCreateArgs} args - Arguments to create a Dashboards.
     * @example
     * // Create one Dashboards
     * const Dashboards = await prisma.dashboards.create({
     *   data: {
     *     // ... data to create a Dashboards
     *   }
     * })
     * 
     */
    create<T extends dashboardsCreateArgs>(args: SelectSubset<T, dashboardsCreateArgs<ExtArgs>>): Prisma__dashboardsClient<$Result.GetResult<Prisma.$dashboardsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dashboards.
     * @param {dashboardsCreateManyArgs} args - Arguments to create many Dashboards.
     * @example
     * // Create many Dashboards
     * const dashboards = await prisma.dashboards.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends dashboardsCreateManyArgs>(args?: SelectSubset<T, dashboardsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dashboards and returns the data saved in the database.
     * @param {dashboardsCreateManyAndReturnArgs} args - Arguments to create many Dashboards.
     * @example
     * // Create many Dashboards
     * const dashboards = await prisma.dashboards.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dashboards and only return the `id`
     * const dashboardsWithIdOnly = await prisma.dashboards.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends dashboardsCreateManyAndReturnArgs>(args?: SelectSubset<T, dashboardsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dashboardsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Dashboards.
     * @param {dashboardsDeleteArgs} args - Arguments to delete one Dashboards.
     * @example
     * // Delete one Dashboards
     * const Dashboards = await prisma.dashboards.delete({
     *   where: {
     *     // ... filter to delete one Dashboards
     *   }
     * })
     * 
     */
    delete<T extends dashboardsDeleteArgs>(args: SelectSubset<T, dashboardsDeleteArgs<ExtArgs>>): Prisma__dashboardsClient<$Result.GetResult<Prisma.$dashboardsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dashboards.
     * @param {dashboardsUpdateArgs} args - Arguments to update one Dashboards.
     * @example
     * // Update one Dashboards
     * const dashboards = await prisma.dashboards.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends dashboardsUpdateArgs>(args: SelectSubset<T, dashboardsUpdateArgs<ExtArgs>>): Prisma__dashboardsClient<$Result.GetResult<Prisma.$dashboardsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dashboards.
     * @param {dashboardsDeleteManyArgs} args - Arguments to filter Dashboards to delete.
     * @example
     * // Delete a few Dashboards
     * const { count } = await prisma.dashboards.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends dashboardsDeleteManyArgs>(args?: SelectSubset<T, dashboardsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dashboards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dashboardsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dashboards
     * const dashboards = await prisma.dashboards.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends dashboardsUpdateManyArgs>(args: SelectSubset<T, dashboardsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dashboards and returns the data updated in the database.
     * @param {dashboardsUpdateManyAndReturnArgs} args - Arguments to update many Dashboards.
     * @example
     * // Update many Dashboards
     * const dashboards = await prisma.dashboards.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Dashboards and only return the `id`
     * const dashboardsWithIdOnly = await prisma.dashboards.updateManyAndReturn({
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
    updateManyAndReturn<T extends dashboardsUpdateManyAndReturnArgs>(args: SelectSubset<T, dashboardsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dashboardsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Dashboards.
     * @param {dashboardsUpsertArgs} args - Arguments to update or create a Dashboards.
     * @example
     * // Update or create a Dashboards
     * const dashboards = await prisma.dashboards.upsert({
     *   create: {
     *     // ... data to create a Dashboards
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dashboards we want to update
     *   }
     * })
     */
    upsert<T extends dashboardsUpsertArgs>(args: SelectSubset<T, dashboardsUpsertArgs<ExtArgs>>): Prisma__dashboardsClient<$Result.GetResult<Prisma.$dashboardsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dashboards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dashboardsCountArgs} args - Arguments to filter Dashboards to count.
     * @example
     * // Count the number of Dashboards
     * const count = await prisma.dashboards.count({
     *   where: {
     *     // ... the filter for the Dashboards we want to count
     *   }
     * })
    **/
    count<T extends dashboardsCountArgs>(
      args?: Subset<T, dashboardsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DashboardsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dashboards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DashboardsAggregateArgs>(args: Subset<T, DashboardsAggregateArgs>): Prisma.PrismaPromise<GetDashboardsAggregateType<T>>

    /**
     * Group by Dashboards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dashboardsGroupByArgs} args - Group by arguments.
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
      T extends dashboardsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: dashboardsGroupByArgs['orderBy'] }
        : { orderBy?: dashboardsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, dashboardsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDashboardsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the dashboards model
   */
  readonly fields: dashboardsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for dashboards.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__dashboardsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the dashboards model
   */
  interface dashboardsFieldRefs {
    readonly id: FieldRef<"dashboards", 'Int'>
    readonly name: FieldRef<"dashboards", 'String'>
    readonly description: FieldRef<"dashboards", 'String'>
    readonly user_id: FieldRef<"dashboards", 'String'>
    readonly createdAt: FieldRef<"dashboards", 'DateTime'>
    readonly updatedAt: FieldRef<"dashboards", 'DateTime'>
    readonly widget_details: FieldRef<"dashboards", 'Json'>
    readonly layout: FieldRef<"dashboards", 'Json'>
    readonly custom_settings: FieldRef<"dashboards", 'Json'>
    readonly type: FieldRef<"dashboards", 'String'>
  }
    

  // Custom InputTypes
  /**
   * dashboards findUnique
   */
  export type dashboardsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dashboards
     */
    select?: dashboardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dashboards
     */
    omit?: dashboardsOmit<ExtArgs> | null
    /**
     * Filter, which dashboards to fetch.
     */
    where: dashboardsWhereUniqueInput
  }

  /**
   * dashboards findUniqueOrThrow
   */
  export type dashboardsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dashboards
     */
    select?: dashboardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dashboards
     */
    omit?: dashboardsOmit<ExtArgs> | null
    /**
     * Filter, which dashboards to fetch.
     */
    where: dashboardsWhereUniqueInput
  }

  /**
   * dashboards findFirst
   */
  export type dashboardsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dashboards
     */
    select?: dashboardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dashboards
     */
    omit?: dashboardsOmit<ExtArgs> | null
    /**
     * Filter, which dashboards to fetch.
     */
    where?: dashboardsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dashboards to fetch.
     */
    orderBy?: dashboardsOrderByWithRelationInput | dashboardsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dashboards.
     */
    cursor?: dashboardsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dashboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dashboards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dashboards.
     */
    distinct?: DashboardsScalarFieldEnum | DashboardsScalarFieldEnum[]
  }

  /**
   * dashboards findFirstOrThrow
   */
  export type dashboardsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dashboards
     */
    select?: dashboardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dashboards
     */
    omit?: dashboardsOmit<ExtArgs> | null
    /**
     * Filter, which dashboards to fetch.
     */
    where?: dashboardsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dashboards to fetch.
     */
    orderBy?: dashboardsOrderByWithRelationInput | dashboardsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dashboards.
     */
    cursor?: dashboardsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dashboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dashboards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dashboards.
     */
    distinct?: DashboardsScalarFieldEnum | DashboardsScalarFieldEnum[]
  }

  /**
   * dashboards findMany
   */
  export type dashboardsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dashboards
     */
    select?: dashboardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dashboards
     */
    omit?: dashboardsOmit<ExtArgs> | null
    /**
     * Filter, which dashboards to fetch.
     */
    where?: dashboardsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dashboards to fetch.
     */
    orderBy?: dashboardsOrderByWithRelationInput | dashboardsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing dashboards.
     */
    cursor?: dashboardsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dashboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dashboards.
     */
    skip?: number
    distinct?: DashboardsScalarFieldEnum | DashboardsScalarFieldEnum[]
  }

  /**
   * dashboards create
   */
  export type dashboardsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dashboards
     */
    select?: dashboardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dashboards
     */
    omit?: dashboardsOmit<ExtArgs> | null
    /**
     * The data needed to create a dashboards.
     */
    data: XOR<dashboardsCreateInput, dashboardsUncheckedCreateInput>
  }

  /**
   * dashboards createMany
   */
  export type dashboardsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many dashboards.
     */
    data: dashboardsCreateManyInput | dashboardsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * dashboards createManyAndReturn
   */
  export type dashboardsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dashboards
     */
    select?: dashboardsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the dashboards
     */
    omit?: dashboardsOmit<ExtArgs> | null
    /**
     * The data used to create many dashboards.
     */
    data: dashboardsCreateManyInput | dashboardsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * dashboards update
   */
  export type dashboardsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dashboards
     */
    select?: dashboardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dashboards
     */
    omit?: dashboardsOmit<ExtArgs> | null
    /**
     * The data needed to update a dashboards.
     */
    data: XOR<dashboardsUpdateInput, dashboardsUncheckedUpdateInput>
    /**
     * Choose, which dashboards to update.
     */
    where: dashboardsWhereUniqueInput
  }

  /**
   * dashboards updateMany
   */
  export type dashboardsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update dashboards.
     */
    data: XOR<dashboardsUpdateManyMutationInput, dashboardsUncheckedUpdateManyInput>
    /**
     * Filter which dashboards to update
     */
    where?: dashboardsWhereInput
    /**
     * Limit how many dashboards to update.
     */
    limit?: number
  }

  /**
   * dashboards updateManyAndReturn
   */
  export type dashboardsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dashboards
     */
    select?: dashboardsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the dashboards
     */
    omit?: dashboardsOmit<ExtArgs> | null
    /**
     * The data used to update dashboards.
     */
    data: XOR<dashboardsUpdateManyMutationInput, dashboardsUncheckedUpdateManyInput>
    /**
     * Filter which dashboards to update
     */
    where?: dashboardsWhereInput
    /**
     * Limit how many dashboards to update.
     */
    limit?: number
  }

  /**
   * dashboards upsert
   */
  export type dashboardsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dashboards
     */
    select?: dashboardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dashboards
     */
    omit?: dashboardsOmit<ExtArgs> | null
    /**
     * The filter to search for the dashboards to update in case it exists.
     */
    where: dashboardsWhereUniqueInput
    /**
     * In case the dashboards found by the `where` argument doesn't exist, create a new dashboards with this data.
     */
    create: XOR<dashboardsCreateInput, dashboardsUncheckedCreateInput>
    /**
     * In case the dashboards was found with the provided `where` argument, update it with this data.
     */
    update: XOR<dashboardsUpdateInput, dashboardsUncheckedUpdateInput>
  }

  /**
   * dashboards delete
   */
  export type dashboardsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dashboards
     */
    select?: dashboardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dashboards
     */
    omit?: dashboardsOmit<ExtArgs> | null
    /**
     * Filter which dashboards to delete.
     */
    where: dashboardsWhereUniqueInput
  }

  /**
   * dashboards deleteMany
   */
  export type dashboardsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which dashboards to delete
     */
    where?: dashboardsWhereInput
    /**
     * Limit how many dashboards to delete.
     */
    limit?: number
  }

  /**
   * dashboards without action
   */
  export type dashboardsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dashboards
     */
    select?: dashboardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dashboards
     */
    omit?: dashboardsOmit<ExtArgs> | null
  }


  /**
   * Model database_connections
   */

  export type AggregateDatabase_connections = {
    _count: Database_connectionsCountAggregateOutputType | null
    _avg: Database_connectionsAvgAggregateOutputType | null
    _sum: Database_connectionsSumAggregateOutputType | null
    _min: Database_connectionsMinAggregateOutputType | null
    _max: Database_connectionsMaxAggregateOutputType | null
  }

  export type Database_connectionsAvgAggregateOutputType = {
    id: number | null
    port: number | null
  }

  export type Database_connectionsSumAggregateOutputType = {
    id: number | null
    port: number | null
  }

  export type Database_connectionsMinAggregateOutputType = {
    id: number | null
    connection_name: string | null
    database_name: string | null
    database_type: string | null
    host: string | null
    port: number | null
    username: string | null
    password: string | null
    user_id: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Database_connectionsMaxAggregateOutputType = {
    id: number | null
    connection_name: string | null
    database_name: string | null
    database_type: string | null
    host: string | null
    port: number | null
    username: string | null
    password: string | null
    user_id: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Database_connectionsCountAggregateOutputType = {
    id: number
    connection_name: number
    database_name: number
    database_type: number
    host: number
    port: number
    username: number
    password: number
    user_id: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Database_connectionsAvgAggregateInputType = {
    id?: true
    port?: true
  }

  export type Database_connectionsSumAggregateInputType = {
    id?: true
    port?: true
  }

  export type Database_connectionsMinAggregateInputType = {
    id?: true
    connection_name?: true
    database_name?: true
    database_type?: true
    host?: true
    port?: true
    username?: true
    password?: true
    user_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Database_connectionsMaxAggregateInputType = {
    id?: true
    connection_name?: true
    database_name?: true
    database_type?: true
    host?: true
    port?: true
    username?: true
    password?: true
    user_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Database_connectionsCountAggregateInputType = {
    id?: true
    connection_name?: true
    database_name?: true
    database_type?: true
    host?: true
    port?: true
    username?: true
    password?: true
    user_id?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Database_connectionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which database_connections to aggregate.
     */
    where?: database_connectionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of database_connections to fetch.
     */
    orderBy?: database_connectionsOrderByWithRelationInput | database_connectionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: database_connectionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` database_connections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` database_connections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned database_connections
    **/
    _count?: true | Database_connectionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Database_connectionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Database_connectionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Database_connectionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Database_connectionsMaxAggregateInputType
  }

  export type GetDatabase_connectionsAggregateType<T extends Database_connectionsAggregateArgs> = {
        [P in keyof T & keyof AggregateDatabase_connections]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDatabase_connections[P]>
      : GetScalarType<T[P], AggregateDatabase_connections[P]>
  }




  export type database_connectionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: database_connectionsWhereInput
    orderBy?: database_connectionsOrderByWithAggregationInput | database_connectionsOrderByWithAggregationInput[]
    by: Database_connectionsScalarFieldEnum[] | Database_connectionsScalarFieldEnum
    having?: database_connectionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Database_connectionsCountAggregateInputType | true
    _avg?: Database_connectionsAvgAggregateInputType
    _sum?: Database_connectionsSumAggregateInputType
    _min?: Database_connectionsMinAggregateInputType
    _max?: Database_connectionsMaxAggregateInputType
  }

  export type Database_connectionsGroupByOutputType = {
    id: number
    connection_name: string
    database_name: string
    database_type: string
    host: string
    port: number | null
    username: string
    password: string
    user_id: string
    createdAt: Date
    updatedAt: Date
    _count: Database_connectionsCountAggregateOutputType | null
    _avg: Database_connectionsAvgAggregateOutputType | null
    _sum: Database_connectionsSumAggregateOutputType | null
    _min: Database_connectionsMinAggregateOutputType | null
    _max: Database_connectionsMaxAggregateOutputType | null
  }

  type GetDatabase_connectionsGroupByPayload<T extends database_connectionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Database_connectionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Database_connectionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Database_connectionsGroupByOutputType[P]>
            : GetScalarType<T[P], Database_connectionsGroupByOutputType[P]>
        }
      >
    >


  export type database_connectionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    connection_name?: boolean
    database_name?: boolean
    database_type?: boolean
    host?: boolean
    port?: boolean
    username?: boolean
    password?: boolean
    user_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    api_connections?: boolean | database_connections$api_connectionsArgs<ExtArgs>
    data_sources?: boolean | database_connections$data_sourcesArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | Database_connectionsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["database_connections"]>

  export type database_connectionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    connection_name?: boolean
    database_name?: boolean
    database_type?: boolean
    host?: boolean
    port?: boolean
    username?: boolean
    password?: boolean
    user_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["database_connections"]>

  export type database_connectionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    connection_name?: boolean
    database_name?: boolean
    database_type?: boolean
    host?: boolean
    port?: boolean
    username?: boolean
    password?: boolean
    user_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["database_connections"]>

  export type database_connectionsSelectScalar = {
    id?: boolean
    connection_name?: boolean
    database_name?: boolean
    database_type?: boolean
    host?: boolean
    port?: boolean
    username?: boolean
    password?: boolean
    user_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type database_connectionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "connection_name" | "database_name" | "database_type" | "host" | "port" | "username" | "password" | "user_id" | "createdAt" | "updatedAt", ExtArgs["result"]["database_connections"]>
  export type database_connectionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    api_connections?: boolean | database_connections$api_connectionsArgs<ExtArgs>
    data_sources?: boolean | database_connections$data_sourcesArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | Database_connectionsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type database_connectionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type database_connectionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $database_connectionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "database_connections"
    objects: {
      api_connections: Prisma.$api_connectionsPayload<ExtArgs>[]
      data_sources: Prisma.$data_sourcesPayload<ExtArgs>[]
      user: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      connection_name: string
      database_name: string
      database_type: string
      host: string
      port: number | null
      username: string
      password: string
      user_id: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["database_connections"]>
    composites: {}
  }

  type database_connectionsGetPayload<S extends boolean | null | undefined | database_connectionsDefaultArgs> = $Result.GetResult<Prisma.$database_connectionsPayload, S>

  type database_connectionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<database_connectionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Database_connectionsCountAggregateInputType | true
    }

  export interface database_connectionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['database_connections'], meta: { name: 'database_connections' } }
    /**
     * Find zero or one Database_connections that matches the filter.
     * @param {database_connectionsFindUniqueArgs} args - Arguments to find a Database_connections
     * @example
     * // Get one Database_connections
     * const database_connections = await prisma.database_connections.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends database_connectionsFindUniqueArgs>(args: SelectSubset<T, database_connectionsFindUniqueArgs<ExtArgs>>): Prisma__database_connectionsClient<$Result.GetResult<Prisma.$database_connectionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Database_connections that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {database_connectionsFindUniqueOrThrowArgs} args - Arguments to find a Database_connections
     * @example
     * // Get one Database_connections
     * const database_connections = await prisma.database_connections.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends database_connectionsFindUniqueOrThrowArgs>(args: SelectSubset<T, database_connectionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__database_connectionsClient<$Result.GetResult<Prisma.$database_connectionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Database_connections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {database_connectionsFindFirstArgs} args - Arguments to find a Database_connections
     * @example
     * // Get one Database_connections
     * const database_connections = await prisma.database_connections.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends database_connectionsFindFirstArgs>(args?: SelectSubset<T, database_connectionsFindFirstArgs<ExtArgs>>): Prisma__database_connectionsClient<$Result.GetResult<Prisma.$database_connectionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Database_connections that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {database_connectionsFindFirstOrThrowArgs} args - Arguments to find a Database_connections
     * @example
     * // Get one Database_connections
     * const database_connections = await prisma.database_connections.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends database_connectionsFindFirstOrThrowArgs>(args?: SelectSubset<T, database_connectionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__database_connectionsClient<$Result.GetResult<Prisma.$database_connectionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Database_connections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {database_connectionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Database_connections
     * const database_connections = await prisma.database_connections.findMany()
     * 
     * // Get first 10 Database_connections
     * const database_connections = await prisma.database_connections.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const database_connectionsWithIdOnly = await prisma.database_connections.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends database_connectionsFindManyArgs>(args?: SelectSubset<T, database_connectionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$database_connectionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Database_connections.
     * @param {database_connectionsCreateArgs} args - Arguments to create a Database_connections.
     * @example
     * // Create one Database_connections
     * const Database_connections = await prisma.database_connections.create({
     *   data: {
     *     // ... data to create a Database_connections
     *   }
     * })
     * 
     */
    create<T extends database_connectionsCreateArgs>(args: SelectSubset<T, database_connectionsCreateArgs<ExtArgs>>): Prisma__database_connectionsClient<$Result.GetResult<Prisma.$database_connectionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Database_connections.
     * @param {database_connectionsCreateManyArgs} args - Arguments to create many Database_connections.
     * @example
     * // Create many Database_connections
     * const database_connections = await prisma.database_connections.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends database_connectionsCreateManyArgs>(args?: SelectSubset<T, database_connectionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Database_connections and returns the data saved in the database.
     * @param {database_connectionsCreateManyAndReturnArgs} args - Arguments to create many Database_connections.
     * @example
     * // Create many Database_connections
     * const database_connections = await prisma.database_connections.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Database_connections and only return the `id`
     * const database_connectionsWithIdOnly = await prisma.database_connections.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends database_connectionsCreateManyAndReturnArgs>(args?: SelectSubset<T, database_connectionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$database_connectionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Database_connections.
     * @param {database_connectionsDeleteArgs} args - Arguments to delete one Database_connections.
     * @example
     * // Delete one Database_connections
     * const Database_connections = await prisma.database_connections.delete({
     *   where: {
     *     // ... filter to delete one Database_connections
     *   }
     * })
     * 
     */
    delete<T extends database_connectionsDeleteArgs>(args: SelectSubset<T, database_connectionsDeleteArgs<ExtArgs>>): Prisma__database_connectionsClient<$Result.GetResult<Prisma.$database_connectionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Database_connections.
     * @param {database_connectionsUpdateArgs} args - Arguments to update one Database_connections.
     * @example
     * // Update one Database_connections
     * const database_connections = await prisma.database_connections.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends database_connectionsUpdateArgs>(args: SelectSubset<T, database_connectionsUpdateArgs<ExtArgs>>): Prisma__database_connectionsClient<$Result.GetResult<Prisma.$database_connectionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Database_connections.
     * @param {database_connectionsDeleteManyArgs} args - Arguments to filter Database_connections to delete.
     * @example
     * // Delete a few Database_connections
     * const { count } = await prisma.database_connections.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends database_connectionsDeleteManyArgs>(args?: SelectSubset<T, database_connectionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Database_connections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {database_connectionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Database_connections
     * const database_connections = await prisma.database_connections.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends database_connectionsUpdateManyArgs>(args: SelectSubset<T, database_connectionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Database_connections and returns the data updated in the database.
     * @param {database_connectionsUpdateManyAndReturnArgs} args - Arguments to update many Database_connections.
     * @example
     * // Update many Database_connections
     * const database_connections = await prisma.database_connections.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Database_connections and only return the `id`
     * const database_connectionsWithIdOnly = await prisma.database_connections.updateManyAndReturn({
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
    updateManyAndReturn<T extends database_connectionsUpdateManyAndReturnArgs>(args: SelectSubset<T, database_connectionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$database_connectionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Database_connections.
     * @param {database_connectionsUpsertArgs} args - Arguments to update or create a Database_connections.
     * @example
     * // Update or create a Database_connections
     * const database_connections = await prisma.database_connections.upsert({
     *   create: {
     *     // ... data to create a Database_connections
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Database_connections we want to update
     *   }
     * })
     */
    upsert<T extends database_connectionsUpsertArgs>(args: SelectSubset<T, database_connectionsUpsertArgs<ExtArgs>>): Prisma__database_connectionsClient<$Result.GetResult<Prisma.$database_connectionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Database_connections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {database_connectionsCountArgs} args - Arguments to filter Database_connections to count.
     * @example
     * // Count the number of Database_connections
     * const count = await prisma.database_connections.count({
     *   where: {
     *     // ... the filter for the Database_connections we want to count
     *   }
     * })
    **/
    count<T extends database_connectionsCountArgs>(
      args?: Subset<T, database_connectionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Database_connectionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Database_connections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Database_connectionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Database_connectionsAggregateArgs>(args: Subset<T, Database_connectionsAggregateArgs>): Prisma.PrismaPromise<GetDatabase_connectionsAggregateType<T>>

    /**
     * Group by Database_connections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {database_connectionsGroupByArgs} args - Group by arguments.
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
      T extends database_connectionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: database_connectionsGroupByArgs['orderBy'] }
        : { orderBy?: database_connectionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, database_connectionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDatabase_connectionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the database_connections model
   */
  readonly fields: database_connectionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for database_connections.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__database_connectionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    api_connections<T extends database_connections$api_connectionsArgs<ExtArgs> = {}>(args?: Subset<T, database_connections$api_connectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$api_connectionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    data_sources<T extends database_connections$data_sourcesArgs<ExtArgs> = {}>(args?: Subset<T, database_connections$data_sourcesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$data_sourcesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the database_connections model
   */
  interface database_connectionsFieldRefs {
    readonly id: FieldRef<"database_connections", 'Int'>
    readonly connection_name: FieldRef<"database_connections", 'String'>
    readonly database_name: FieldRef<"database_connections", 'String'>
    readonly database_type: FieldRef<"database_connections", 'String'>
    readonly host: FieldRef<"database_connections", 'String'>
    readonly port: FieldRef<"database_connections", 'Int'>
    readonly username: FieldRef<"database_connections", 'String'>
    readonly password: FieldRef<"database_connections", 'String'>
    readonly user_id: FieldRef<"database_connections", 'String'>
    readonly createdAt: FieldRef<"database_connections", 'DateTime'>
    readonly updatedAt: FieldRef<"database_connections", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * database_connections findUnique
   */
  export type database_connectionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the database_connections
     */
    select?: database_connectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the database_connections
     */
    omit?: database_connectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: database_connectionsInclude<ExtArgs> | null
    /**
     * Filter, which database_connections to fetch.
     */
    where: database_connectionsWhereUniqueInput
  }

  /**
   * database_connections findUniqueOrThrow
   */
  export type database_connectionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the database_connections
     */
    select?: database_connectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the database_connections
     */
    omit?: database_connectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: database_connectionsInclude<ExtArgs> | null
    /**
     * Filter, which database_connections to fetch.
     */
    where: database_connectionsWhereUniqueInput
  }

  /**
   * database_connections findFirst
   */
  export type database_connectionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the database_connections
     */
    select?: database_connectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the database_connections
     */
    omit?: database_connectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: database_connectionsInclude<ExtArgs> | null
    /**
     * Filter, which database_connections to fetch.
     */
    where?: database_connectionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of database_connections to fetch.
     */
    orderBy?: database_connectionsOrderByWithRelationInput | database_connectionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for database_connections.
     */
    cursor?: database_connectionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` database_connections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` database_connections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of database_connections.
     */
    distinct?: Database_connectionsScalarFieldEnum | Database_connectionsScalarFieldEnum[]
  }

  /**
   * database_connections findFirstOrThrow
   */
  export type database_connectionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the database_connections
     */
    select?: database_connectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the database_connections
     */
    omit?: database_connectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: database_connectionsInclude<ExtArgs> | null
    /**
     * Filter, which database_connections to fetch.
     */
    where?: database_connectionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of database_connections to fetch.
     */
    orderBy?: database_connectionsOrderByWithRelationInput | database_connectionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for database_connections.
     */
    cursor?: database_connectionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` database_connections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` database_connections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of database_connections.
     */
    distinct?: Database_connectionsScalarFieldEnum | Database_connectionsScalarFieldEnum[]
  }

  /**
   * database_connections findMany
   */
  export type database_connectionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the database_connections
     */
    select?: database_connectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the database_connections
     */
    omit?: database_connectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: database_connectionsInclude<ExtArgs> | null
    /**
     * Filter, which database_connections to fetch.
     */
    where?: database_connectionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of database_connections to fetch.
     */
    orderBy?: database_connectionsOrderByWithRelationInput | database_connectionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing database_connections.
     */
    cursor?: database_connectionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` database_connections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` database_connections.
     */
    skip?: number
    distinct?: Database_connectionsScalarFieldEnum | Database_connectionsScalarFieldEnum[]
  }

  /**
   * database_connections create
   */
  export type database_connectionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the database_connections
     */
    select?: database_connectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the database_connections
     */
    omit?: database_connectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: database_connectionsInclude<ExtArgs> | null
    /**
     * The data needed to create a database_connections.
     */
    data: XOR<database_connectionsCreateInput, database_connectionsUncheckedCreateInput>
  }

  /**
   * database_connections createMany
   */
  export type database_connectionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many database_connections.
     */
    data: database_connectionsCreateManyInput | database_connectionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * database_connections createManyAndReturn
   */
  export type database_connectionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the database_connections
     */
    select?: database_connectionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the database_connections
     */
    omit?: database_connectionsOmit<ExtArgs> | null
    /**
     * The data used to create many database_connections.
     */
    data: database_connectionsCreateManyInput | database_connectionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: database_connectionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * database_connections update
   */
  export type database_connectionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the database_connections
     */
    select?: database_connectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the database_connections
     */
    omit?: database_connectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: database_connectionsInclude<ExtArgs> | null
    /**
     * The data needed to update a database_connections.
     */
    data: XOR<database_connectionsUpdateInput, database_connectionsUncheckedUpdateInput>
    /**
     * Choose, which database_connections to update.
     */
    where: database_connectionsWhereUniqueInput
  }

  /**
   * database_connections updateMany
   */
  export type database_connectionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update database_connections.
     */
    data: XOR<database_connectionsUpdateManyMutationInput, database_connectionsUncheckedUpdateManyInput>
    /**
     * Filter which database_connections to update
     */
    where?: database_connectionsWhereInput
    /**
     * Limit how many database_connections to update.
     */
    limit?: number
  }

  /**
   * database_connections updateManyAndReturn
   */
  export type database_connectionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the database_connections
     */
    select?: database_connectionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the database_connections
     */
    omit?: database_connectionsOmit<ExtArgs> | null
    /**
     * The data used to update database_connections.
     */
    data: XOR<database_connectionsUpdateManyMutationInput, database_connectionsUncheckedUpdateManyInput>
    /**
     * Filter which database_connections to update
     */
    where?: database_connectionsWhereInput
    /**
     * Limit how many database_connections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: database_connectionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * database_connections upsert
   */
  export type database_connectionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the database_connections
     */
    select?: database_connectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the database_connections
     */
    omit?: database_connectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: database_connectionsInclude<ExtArgs> | null
    /**
     * The filter to search for the database_connections to update in case it exists.
     */
    where: database_connectionsWhereUniqueInput
    /**
     * In case the database_connections found by the `where` argument doesn't exist, create a new database_connections with this data.
     */
    create: XOR<database_connectionsCreateInput, database_connectionsUncheckedCreateInput>
    /**
     * In case the database_connections was found with the provided `where` argument, update it with this data.
     */
    update: XOR<database_connectionsUpdateInput, database_connectionsUncheckedUpdateInput>
  }

  /**
   * database_connections delete
   */
  export type database_connectionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the database_connections
     */
    select?: database_connectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the database_connections
     */
    omit?: database_connectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: database_connectionsInclude<ExtArgs> | null
    /**
     * Filter which database_connections to delete.
     */
    where: database_connectionsWhereUniqueInput
  }

  /**
   * database_connections deleteMany
   */
  export type database_connectionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which database_connections to delete
     */
    where?: database_connectionsWhereInput
    /**
     * Limit how many database_connections to delete.
     */
    limit?: number
  }

  /**
   * database_connections.api_connections
   */
  export type database_connections$api_connectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_connections
     */
    select?: api_connectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_connections
     */
    omit?: api_connectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_connectionsInclude<ExtArgs> | null
    where?: api_connectionsWhereInput
    orderBy?: api_connectionsOrderByWithRelationInput | api_connectionsOrderByWithRelationInput[]
    cursor?: api_connectionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Api_connectionsScalarFieldEnum | Api_connectionsScalarFieldEnum[]
  }

  /**
   * database_connections.data_sources
   */
  export type database_connections$data_sourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data_sources
     */
    select?: data_sourcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the data_sources
     */
    omit?: data_sourcesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: data_sourcesInclude<ExtArgs> | null
    where?: data_sourcesWhereInput
    orderBy?: data_sourcesOrderByWithRelationInput | data_sourcesOrderByWithRelationInput[]
    cursor?: data_sourcesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Data_sourcesScalarFieldEnum | Data_sourcesScalarFieldEnum[]
  }

  /**
   * database_connections without action
   */
  export type database_connectionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the database_connections
     */
    select?: database_connectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the database_connections
     */
    omit?: database_connectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: database_connectionsInclude<ExtArgs> | null
  }


  /**
   * Model datasets
   */

  export type AggregateDatasets = {
    _count: DatasetsCountAggregateOutputType | null
    _avg: DatasetsAvgAggregateOutputType | null
    _sum: DatasetsSumAggregateOutputType | null
    _min: DatasetsMinAggregateOutputType | null
    _max: DatasetsMaxAggregateOutputType | null
  }

  export type DatasetsAvgAggregateOutputType = {
    id: number | null
    connection_id: number | null
    api_id: number | null
    csv_id: number | null
  }

  export type DatasetsSumAggregateOutputType = {
    id: number | null
    connection_id: number | null
    api_id: number | null
    csv_id: number | null
  }

  export type DatasetsMinAggregateOutputType = {
    id: number | null
    dataset_name: string | null
    dataset_description: string | null
    sql_query: string | null
    connection_id: number | null
    user_id: string | null
    visualization_type: string | null
    createdAt: Date | null
    updatedAt: Date | null
    selectedField: string | null
    x_axis: string | null
    y_axis: string | null
    issample: boolean | null
    is_stacked: boolean | null
    api_id: number | null
    csv_id: number | null
    table_name: string | null
    selectedAggregate: string | null
    selectedDateBy: string | null
  }

  export type DatasetsMaxAggregateOutputType = {
    id: number | null
    dataset_name: string | null
    dataset_description: string | null
    sql_query: string | null
    connection_id: number | null
    user_id: string | null
    visualization_type: string | null
    createdAt: Date | null
    updatedAt: Date | null
    selectedField: string | null
    x_axis: string | null
    y_axis: string | null
    issample: boolean | null
    is_stacked: boolean | null
    api_id: number | null
    csv_id: number | null
    table_name: string | null
    selectedAggregate: string | null
    selectedDateBy: string | null
  }

  export type DatasetsCountAggregateOutputType = {
    id: number
    dataset_name: number
    dataset_description: number
    sql_query: number
    connection_id: number
    user_id: number
    visualization_type: number
    createdAt: number
    updatedAt: number
    selectedField: number
    x_axis: number
    y_axis: number
    issample: number
    is_stacked: number
    api_id: number
    csv_id: number
    filters: number
    table_name: number
    selectedAggregate: number
    selectedGroupByValues: number
    selectedDateBy: number
    _all: number
  }


  export type DatasetsAvgAggregateInputType = {
    id?: true
    connection_id?: true
    api_id?: true
    csv_id?: true
  }

  export type DatasetsSumAggregateInputType = {
    id?: true
    connection_id?: true
    api_id?: true
    csv_id?: true
  }

  export type DatasetsMinAggregateInputType = {
    id?: true
    dataset_name?: true
    dataset_description?: true
    sql_query?: true
    connection_id?: true
    user_id?: true
    visualization_type?: true
    createdAt?: true
    updatedAt?: true
    selectedField?: true
    x_axis?: true
    y_axis?: true
    issample?: true
    is_stacked?: true
    api_id?: true
    csv_id?: true
    table_name?: true
    selectedAggregate?: true
    selectedDateBy?: true
  }

  export type DatasetsMaxAggregateInputType = {
    id?: true
    dataset_name?: true
    dataset_description?: true
    sql_query?: true
    connection_id?: true
    user_id?: true
    visualization_type?: true
    createdAt?: true
    updatedAt?: true
    selectedField?: true
    x_axis?: true
    y_axis?: true
    issample?: true
    is_stacked?: true
    api_id?: true
    csv_id?: true
    table_name?: true
    selectedAggregate?: true
    selectedDateBy?: true
  }

  export type DatasetsCountAggregateInputType = {
    id?: true
    dataset_name?: true
    dataset_description?: true
    sql_query?: true
    connection_id?: true
    user_id?: true
    visualization_type?: true
    createdAt?: true
    updatedAt?: true
    selectedField?: true
    x_axis?: true
    y_axis?: true
    issample?: true
    is_stacked?: true
    api_id?: true
    csv_id?: true
    filters?: true
    table_name?: true
    selectedAggregate?: true
    selectedGroupByValues?: true
    selectedDateBy?: true
    _all?: true
  }

  export type DatasetsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which datasets to aggregate.
     */
    where?: datasetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of datasets to fetch.
     */
    orderBy?: datasetsOrderByWithRelationInput | datasetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: datasetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` datasets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` datasets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned datasets
    **/
    _count?: true | DatasetsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DatasetsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DatasetsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DatasetsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DatasetsMaxAggregateInputType
  }

  export type GetDatasetsAggregateType<T extends DatasetsAggregateArgs> = {
        [P in keyof T & keyof AggregateDatasets]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDatasets[P]>
      : GetScalarType<T[P], AggregateDatasets[P]>
  }




  export type datasetsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: datasetsWhereInput
    orderBy?: datasetsOrderByWithAggregationInput | datasetsOrderByWithAggregationInput[]
    by: DatasetsScalarFieldEnum[] | DatasetsScalarFieldEnum
    having?: datasetsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DatasetsCountAggregateInputType | true
    _avg?: DatasetsAvgAggregateInputType
    _sum?: DatasetsSumAggregateInputType
    _min?: DatasetsMinAggregateInputType
    _max?: DatasetsMaxAggregateInputType
  }

  export type DatasetsGroupByOutputType = {
    id: number
    dataset_name: string
    dataset_description: string | null
    sql_query: string
    connection_id: number | null
    user_id: string
    visualization_type: string
    createdAt: Date
    updatedAt: Date
    selectedField: string | null
    x_axis: string | null
    y_axis: string | null
    issample: boolean | null
    is_stacked: boolean | null
    api_id: number | null
    csv_id: number | null
    filters: JsonValue | null
    table_name: string | null
    selectedAggregate: string | null
    selectedGroupByValues: string[]
    selectedDateBy: string | null
    _count: DatasetsCountAggregateOutputType | null
    _avg: DatasetsAvgAggregateOutputType | null
    _sum: DatasetsSumAggregateOutputType | null
    _min: DatasetsMinAggregateOutputType | null
    _max: DatasetsMaxAggregateOutputType | null
  }

  type GetDatasetsGroupByPayload<T extends datasetsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DatasetsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DatasetsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DatasetsGroupByOutputType[P]>
            : GetScalarType<T[P], DatasetsGroupByOutputType[P]>
        }
      >
    >


  export type datasetsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dataset_name?: boolean
    dataset_description?: boolean
    sql_query?: boolean
    connection_id?: boolean
    user_id?: boolean
    visualization_type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    selectedField?: boolean
    x_axis?: boolean
    y_axis?: boolean
    issample?: boolean
    is_stacked?: boolean
    api_id?: boolean
    csv_id?: boolean
    filters?: boolean
    table_name?: boolean
    selectedAggregate?: boolean
    selectedGroupByValues?: boolean
    selectedDateBy?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["datasets"]>

  export type datasetsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dataset_name?: boolean
    dataset_description?: boolean
    sql_query?: boolean
    connection_id?: boolean
    user_id?: boolean
    visualization_type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    selectedField?: boolean
    x_axis?: boolean
    y_axis?: boolean
    issample?: boolean
    is_stacked?: boolean
    api_id?: boolean
    csv_id?: boolean
    filters?: boolean
    table_name?: boolean
    selectedAggregate?: boolean
    selectedGroupByValues?: boolean
    selectedDateBy?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["datasets"]>

  export type datasetsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dataset_name?: boolean
    dataset_description?: boolean
    sql_query?: boolean
    connection_id?: boolean
    user_id?: boolean
    visualization_type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    selectedField?: boolean
    x_axis?: boolean
    y_axis?: boolean
    issample?: boolean
    is_stacked?: boolean
    api_id?: boolean
    csv_id?: boolean
    filters?: boolean
    table_name?: boolean
    selectedAggregate?: boolean
    selectedGroupByValues?: boolean
    selectedDateBy?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["datasets"]>

  export type datasetsSelectScalar = {
    id?: boolean
    dataset_name?: boolean
    dataset_description?: boolean
    sql_query?: boolean
    connection_id?: boolean
    user_id?: boolean
    visualization_type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    selectedField?: boolean
    x_axis?: boolean
    y_axis?: boolean
    issample?: boolean
    is_stacked?: boolean
    api_id?: boolean
    csv_id?: boolean
    filters?: boolean
    table_name?: boolean
    selectedAggregate?: boolean
    selectedGroupByValues?: boolean
    selectedDateBy?: boolean
  }

  export type datasetsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dataset_name" | "dataset_description" | "sql_query" | "connection_id" | "user_id" | "visualization_type" | "createdAt" | "updatedAt" | "selectedField" | "x_axis" | "y_axis" | "issample" | "is_stacked" | "api_id" | "csv_id" | "filters" | "table_name" | "selectedAggregate" | "selectedGroupByValues" | "selectedDateBy", ExtArgs["result"]["datasets"]>
  export type datasetsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type datasetsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type datasetsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $datasetsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "datasets"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      dataset_name: string
      dataset_description: string | null
      sql_query: string
      connection_id: number | null
      user_id: string
      visualization_type: string
      createdAt: Date
      updatedAt: Date
      selectedField: string | null
      x_axis: string | null
      y_axis: string | null
      issample: boolean | null
      is_stacked: boolean | null
      api_id: number | null
      csv_id: number | null
      filters: Prisma.JsonValue | null
      table_name: string | null
      selectedAggregate: string | null
      selectedGroupByValues: string[]
      selectedDateBy: string | null
    }, ExtArgs["result"]["datasets"]>
    composites: {}
  }

  type datasetsGetPayload<S extends boolean | null | undefined | datasetsDefaultArgs> = $Result.GetResult<Prisma.$datasetsPayload, S>

  type datasetsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<datasetsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DatasetsCountAggregateInputType | true
    }

  export interface datasetsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['datasets'], meta: { name: 'datasets' } }
    /**
     * Find zero or one Datasets that matches the filter.
     * @param {datasetsFindUniqueArgs} args - Arguments to find a Datasets
     * @example
     * // Get one Datasets
     * const datasets = await prisma.datasets.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends datasetsFindUniqueArgs>(args: SelectSubset<T, datasetsFindUniqueArgs<ExtArgs>>): Prisma__datasetsClient<$Result.GetResult<Prisma.$datasetsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Datasets that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {datasetsFindUniqueOrThrowArgs} args - Arguments to find a Datasets
     * @example
     * // Get one Datasets
     * const datasets = await prisma.datasets.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends datasetsFindUniqueOrThrowArgs>(args: SelectSubset<T, datasetsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__datasetsClient<$Result.GetResult<Prisma.$datasetsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Datasets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {datasetsFindFirstArgs} args - Arguments to find a Datasets
     * @example
     * // Get one Datasets
     * const datasets = await prisma.datasets.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends datasetsFindFirstArgs>(args?: SelectSubset<T, datasetsFindFirstArgs<ExtArgs>>): Prisma__datasetsClient<$Result.GetResult<Prisma.$datasetsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Datasets that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {datasetsFindFirstOrThrowArgs} args - Arguments to find a Datasets
     * @example
     * // Get one Datasets
     * const datasets = await prisma.datasets.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends datasetsFindFirstOrThrowArgs>(args?: SelectSubset<T, datasetsFindFirstOrThrowArgs<ExtArgs>>): Prisma__datasetsClient<$Result.GetResult<Prisma.$datasetsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Datasets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {datasetsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Datasets
     * const datasets = await prisma.datasets.findMany()
     * 
     * // Get first 10 Datasets
     * const datasets = await prisma.datasets.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const datasetsWithIdOnly = await prisma.datasets.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends datasetsFindManyArgs>(args?: SelectSubset<T, datasetsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$datasetsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Datasets.
     * @param {datasetsCreateArgs} args - Arguments to create a Datasets.
     * @example
     * // Create one Datasets
     * const Datasets = await prisma.datasets.create({
     *   data: {
     *     // ... data to create a Datasets
     *   }
     * })
     * 
     */
    create<T extends datasetsCreateArgs>(args: SelectSubset<T, datasetsCreateArgs<ExtArgs>>): Prisma__datasetsClient<$Result.GetResult<Prisma.$datasetsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Datasets.
     * @param {datasetsCreateManyArgs} args - Arguments to create many Datasets.
     * @example
     * // Create many Datasets
     * const datasets = await prisma.datasets.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends datasetsCreateManyArgs>(args?: SelectSubset<T, datasetsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Datasets and returns the data saved in the database.
     * @param {datasetsCreateManyAndReturnArgs} args - Arguments to create many Datasets.
     * @example
     * // Create many Datasets
     * const datasets = await prisma.datasets.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Datasets and only return the `id`
     * const datasetsWithIdOnly = await prisma.datasets.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends datasetsCreateManyAndReturnArgs>(args?: SelectSubset<T, datasetsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$datasetsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Datasets.
     * @param {datasetsDeleteArgs} args - Arguments to delete one Datasets.
     * @example
     * // Delete one Datasets
     * const Datasets = await prisma.datasets.delete({
     *   where: {
     *     // ... filter to delete one Datasets
     *   }
     * })
     * 
     */
    delete<T extends datasetsDeleteArgs>(args: SelectSubset<T, datasetsDeleteArgs<ExtArgs>>): Prisma__datasetsClient<$Result.GetResult<Prisma.$datasetsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Datasets.
     * @param {datasetsUpdateArgs} args - Arguments to update one Datasets.
     * @example
     * // Update one Datasets
     * const datasets = await prisma.datasets.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends datasetsUpdateArgs>(args: SelectSubset<T, datasetsUpdateArgs<ExtArgs>>): Prisma__datasetsClient<$Result.GetResult<Prisma.$datasetsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Datasets.
     * @param {datasetsDeleteManyArgs} args - Arguments to filter Datasets to delete.
     * @example
     * // Delete a few Datasets
     * const { count } = await prisma.datasets.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends datasetsDeleteManyArgs>(args?: SelectSubset<T, datasetsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Datasets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {datasetsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Datasets
     * const datasets = await prisma.datasets.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends datasetsUpdateManyArgs>(args: SelectSubset<T, datasetsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Datasets and returns the data updated in the database.
     * @param {datasetsUpdateManyAndReturnArgs} args - Arguments to update many Datasets.
     * @example
     * // Update many Datasets
     * const datasets = await prisma.datasets.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Datasets and only return the `id`
     * const datasetsWithIdOnly = await prisma.datasets.updateManyAndReturn({
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
    updateManyAndReturn<T extends datasetsUpdateManyAndReturnArgs>(args: SelectSubset<T, datasetsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$datasetsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Datasets.
     * @param {datasetsUpsertArgs} args - Arguments to update or create a Datasets.
     * @example
     * // Update or create a Datasets
     * const datasets = await prisma.datasets.upsert({
     *   create: {
     *     // ... data to create a Datasets
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Datasets we want to update
     *   }
     * })
     */
    upsert<T extends datasetsUpsertArgs>(args: SelectSubset<T, datasetsUpsertArgs<ExtArgs>>): Prisma__datasetsClient<$Result.GetResult<Prisma.$datasetsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Datasets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {datasetsCountArgs} args - Arguments to filter Datasets to count.
     * @example
     * // Count the number of Datasets
     * const count = await prisma.datasets.count({
     *   where: {
     *     // ... the filter for the Datasets we want to count
     *   }
     * })
    **/
    count<T extends datasetsCountArgs>(
      args?: Subset<T, datasetsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DatasetsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Datasets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasetsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DatasetsAggregateArgs>(args: Subset<T, DatasetsAggregateArgs>): Prisma.PrismaPromise<GetDatasetsAggregateType<T>>

    /**
     * Group by Datasets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {datasetsGroupByArgs} args - Group by arguments.
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
      T extends datasetsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: datasetsGroupByArgs['orderBy'] }
        : { orderBy?: datasetsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, datasetsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDatasetsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the datasets model
   */
  readonly fields: datasetsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for datasets.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__datasetsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the datasets model
   */
  interface datasetsFieldRefs {
    readonly id: FieldRef<"datasets", 'Int'>
    readonly dataset_name: FieldRef<"datasets", 'String'>
    readonly dataset_description: FieldRef<"datasets", 'String'>
    readonly sql_query: FieldRef<"datasets", 'String'>
    readonly connection_id: FieldRef<"datasets", 'Int'>
    readonly user_id: FieldRef<"datasets", 'String'>
    readonly visualization_type: FieldRef<"datasets", 'String'>
    readonly createdAt: FieldRef<"datasets", 'DateTime'>
    readonly updatedAt: FieldRef<"datasets", 'DateTime'>
    readonly selectedField: FieldRef<"datasets", 'String'>
    readonly x_axis: FieldRef<"datasets", 'String'>
    readonly y_axis: FieldRef<"datasets", 'String'>
    readonly issample: FieldRef<"datasets", 'Boolean'>
    readonly is_stacked: FieldRef<"datasets", 'Boolean'>
    readonly api_id: FieldRef<"datasets", 'Int'>
    readonly csv_id: FieldRef<"datasets", 'Int'>
    readonly filters: FieldRef<"datasets", 'Json'>
    readonly table_name: FieldRef<"datasets", 'String'>
    readonly selectedAggregate: FieldRef<"datasets", 'String'>
    readonly selectedGroupByValues: FieldRef<"datasets", 'String[]'>
    readonly selectedDateBy: FieldRef<"datasets", 'String'>
  }
    

  // Custom InputTypes
  /**
   * datasets findUnique
   */
  export type datasetsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the datasets
     */
    select?: datasetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the datasets
     */
    omit?: datasetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: datasetsInclude<ExtArgs> | null
    /**
     * Filter, which datasets to fetch.
     */
    where: datasetsWhereUniqueInput
  }

  /**
   * datasets findUniqueOrThrow
   */
  export type datasetsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the datasets
     */
    select?: datasetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the datasets
     */
    omit?: datasetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: datasetsInclude<ExtArgs> | null
    /**
     * Filter, which datasets to fetch.
     */
    where: datasetsWhereUniqueInput
  }

  /**
   * datasets findFirst
   */
  export type datasetsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the datasets
     */
    select?: datasetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the datasets
     */
    omit?: datasetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: datasetsInclude<ExtArgs> | null
    /**
     * Filter, which datasets to fetch.
     */
    where?: datasetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of datasets to fetch.
     */
    orderBy?: datasetsOrderByWithRelationInput | datasetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for datasets.
     */
    cursor?: datasetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` datasets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` datasets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of datasets.
     */
    distinct?: DatasetsScalarFieldEnum | DatasetsScalarFieldEnum[]
  }

  /**
   * datasets findFirstOrThrow
   */
  export type datasetsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the datasets
     */
    select?: datasetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the datasets
     */
    omit?: datasetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: datasetsInclude<ExtArgs> | null
    /**
     * Filter, which datasets to fetch.
     */
    where?: datasetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of datasets to fetch.
     */
    orderBy?: datasetsOrderByWithRelationInput | datasetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for datasets.
     */
    cursor?: datasetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` datasets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` datasets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of datasets.
     */
    distinct?: DatasetsScalarFieldEnum | DatasetsScalarFieldEnum[]
  }

  /**
   * datasets findMany
   */
  export type datasetsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the datasets
     */
    select?: datasetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the datasets
     */
    omit?: datasetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: datasetsInclude<ExtArgs> | null
    /**
     * Filter, which datasets to fetch.
     */
    where?: datasetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of datasets to fetch.
     */
    orderBy?: datasetsOrderByWithRelationInput | datasetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing datasets.
     */
    cursor?: datasetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` datasets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` datasets.
     */
    skip?: number
    distinct?: DatasetsScalarFieldEnum | DatasetsScalarFieldEnum[]
  }

  /**
   * datasets create
   */
  export type datasetsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the datasets
     */
    select?: datasetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the datasets
     */
    omit?: datasetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: datasetsInclude<ExtArgs> | null
    /**
     * The data needed to create a datasets.
     */
    data: XOR<datasetsCreateInput, datasetsUncheckedCreateInput>
  }

  /**
   * datasets createMany
   */
  export type datasetsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many datasets.
     */
    data: datasetsCreateManyInput | datasetsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * datasets createManyAndReturn
   */
  export type datasetsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the datasets
     */
    select?: datasetsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the datasets
     */
    omit?: datasetsOmit<ExtArgs> | null
    /**
     * The data used to create many datasets.
     */
    data: datasetsCreateManyInput | datasetsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: datasetsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * datasets update
   */
  export type datasetsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the datasets
     */
    select?: datasetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the datasets
     */
    omit?: datasetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: datasetsInclude<ExtArgs> | null
    /**
     * The data needed to update a datasets.
     */
    data: XOR<datasetsUpdateInput, datasetsUncheckedUpdateInput>
    /**
     * Choose, which datasets to update.
     */
    where: datasetsWhereUniqueInput
  }

  /**
   * datasets updateMany
   */
  export type datasetsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update datasets.
     */
    data: XOR<datasetsUpdateManyMutationInput, datasetsUncheckedUpdateManyInput>
    /**
     * Filter which datasets to update
     */
    where?: datasetsWhereInput
    /**
     * Limit how many datasets to update.
     */
    limit?: number
  }

  /**
   * datasets updateManyAndReturn
   */
  export type datasetsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the datasets
     */
    select?: datasetsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the datasets
     */
    omit?: datasetsOmit<ExtArgs> | null
    /**
     * The data used to update datasets.
     */
    data: XOR<datasetsUpdateManyMutationInput, datasetsUncheckedUpdateManyInput>
    /**
     * Filter which datasets to update
     */
    where?: datasetsWhereInput
    /**
     * Limit how many datasets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: datasetsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * datasets upsert
   */
  export type datasetsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the datasets
     */
    select?: datasetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the datasets
     */
    omit?: datasetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: datasetsInclude<ExtArgs> | null
    /**
     * The filter to search for the datasets to update in case it exists.
     */
    where: datasetsWhereUniqueInput
    /**
     * In case the datasets found by the `where` argument doesn't exist, create a new datasets with this data.
     */
    create: XOR<datasetsCreateInput, datasetsUncheckedCreateInput>
    /**
     * In case the datasets was found with the provided `where` argument, update it with this data.
     */
    update: XOR<datasetsUpdateInput, datasetsUncheckedUpdateInput>
  }

  /**
   * datasets delete
   */
  export type datasetsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the datasets
     */
    select?: datasetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the datasets
     */
    omit?: datasetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: datasetsInclude<ExtArgs> | null
    /**
     * Filter which datasets to delete.
     */
    where: datasetsWhereUniqueInput
  }

  /**
   * datasets deleteMany
   */
  export type datasetsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which datasets to delete
     */
    where?: datasetsWhereInput
    /**
     * Limit how many datasets to delete.
     */
    limit?: number
  }

  /**
   * datasets without action
   */
  export type datasetsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the datasets
     */
    select?: datasetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the datasets
     */
    omit?: datasetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: datasetsInclude<ExtArgs> | null
  }


  /**
   * Model data_sources
   */

  export type AggregateData_sources = {
    _count: Data_sourcesCountAggregateOutputType | null
    _avg: Data_sourcesAvgAggregateOutputType | null
    _sum: Data_sourcesSumAggregateOutputType | null
    _min: Data_sourcesMinAggregateOutputType | null
    _max: Data_sourcesMaxAggregateOutputType | null
  }

  export type Data_sourcesAvgAggregateOutputType = {
    id: number | null
    database_connection_id: number | null
    csv_data_id: number | null
    api_connection_id: number | null
    row_count: number | null
    column_count: number | null
    avg_query_time_ms: number | null
    total_queries: number | null
    data_quality_score: number | null
    null_percentage: number | null
    duplicate_count: number | null
  }

  export type Data_sourcesSumAggregateOutputType = {
    id: bigint | null
    database_connection_id: number | null
    csv_data_id: bigint | null
    api_connection_id: number | null
    row_count: number | null
    column_count: number | null
    avg_query_time_ms: number | null
    total_queries: number | null
    data_quality_score: number | null
    null_percentage: number | null
    duplicate_count: number | null
  }

  export type Data_sourcesMinAggregateOutputType = {
    id: bigint | null
    user_id: string | null
    source_name: string | null
    source_type: string | null
    database_name: string | null
    table_name: string | null
    database_connection_id: number | null
    csv_data_id: bigint | null
    api_connection_id: number | null
    row_count: number | null
    column_count: number | null
    last_updated: Date | null
    cache_key: string | null
    avg_query_time_ms: number | null
    total_queries: number | null
    last_accessed: Date | null
    data_quality_score: number | null
    null_percentage: number | null
    duplicate_count: number | null
  }

  export type Data_sourcesMaxAggregateOutputType = {
    id: bigint | null
    user_id: string | null
    source_name: string | null
    source_type: string | null
    database_name: string | null
    table_name: string | null
    database_connection_id: number | null
    csv_data_id: bigint | null
    api_connection_id: number | null
    row_count: number | null
    column_count: number | null
    last_updated: Date | null
    cache_key: string | null
    avg_query_time_ms: number | null
    total_queries: number | null
    last_accessed: Date | null
    data_quality_score: number | null
    null_percentage: number | null
    duplicate_count: number | null
  }

  export type Data_sourcesCountAggregateOutputType = {
    id: number
    user_id: number
    source_name: number
    source_type: number
    database_name: number
    table_name: number
    database_connection_id: number
    csv_data_id: number
    api_connection_id: number
    row_count: number
    column_count: number
    data_schema: number
    last_updated: number
    cache_key: number
    partition_info: number
    index_info: number
    avg_query_time_ms: number
    total_queries: number
    last_accessed: number
    data_quality_score: number
    null_percentage: number
    duplicate_count: number
    _all: number
  }


  export type Data_sourcesAvgAggregateInputType = {
    id?: true
    database_connection_id?: true
    csv_data_id?: true
    api_connection_id?: true
    row_count?: true
    column_count?: true
    avg_query_time_ms?: true
    total_queries?: true
    data_quality_score?: true
    null_percentage?: true
    duplicate_count?: true
  }

  export type Data_sourcesSumAggregateInputType = {
    id?: true
    database_connection_id?: true
    csv_data_id?: true
    api_connection_id?: true
    row_count?: true
    column_count?: true
    avg_query_time_ms?: true
    total_queries?: true
    data_quality_score?: true
    null_percentage?: true
    duplicate_count?: true
  }

  export type Data_sourcesMinAggregateInputType = {
    id?: true
    user_id?: true
    source_name?: true
    source_type?: true
    database_name?: true
    table_name?: true
    database_connection_id?: true
    csv_data_id?: true
    api_connection_id?: true
    row_count?: true
    column_count?: true
    last_updated?: true
    cache_key?: true
    avg_query_time_ms?: true
    total_queries?: true
    last_accessed?: true
    data_quality_score?: true
    null_percentage?: true
    duplicate_count?: true
  }

  export type Data_sourcesMaxAggregateInputType = {
    id?: true
    user_id?: true
    source_name?: true
    source_type?: true
    database_name?: true
    table_name?: true
    database_connection_id?: true
    csv_data_id?: true
    api_connection_id?: true
    row_count?: true
    column_count?: true
    last_updated?: true
    cache_key?: true
    avg_query_time_ms?: true
    total_queries?: true
    last_accessed?: true
    data_quality_score?: true
    null_percentage?: true
    duplicate_count?: true
  }

  export type Data_sourcesCountAggregateInputType = {
    id?: true
    user_id?: true
    source_name?: true
    source_type?: true
    database_name?: true
    table_name?: true
    database_connection_id?: true
    csv_data_id?: true
    api_connection_id?: true
    row_count?: true
    column_count?: true
    data_schema?: true
    last_updated?: true
    cache_key?: true
    partition_info?: true
    index_info?: true
    avg_query_time_ms?: true
    total_queries?: true
    last_accessed?: true
    data_quality_score?: true
    null_percentage?: true
    duplicate_count?: true
    _all?: true
  }

  export type Data_sourcesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which data_sources to aggregate.
     */
    where?: data_sourcesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of data_sources to fetch.
     */
    orderBy?: data_sourcesOrderByWithRelationInput | data_sourcesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: data_sourcesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` data_sources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` data_sources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned data_sources
    **/
    _count?: true | Data_sourcesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Data_sourcesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Data_sourcesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Data_sourcesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Data_sourcesMaxAggregateInputType
  }

  export type GetData_sourcesAggregateType<T extends Data_sourcesAggregateArgs> = {
        [P in keyof T & keyof AggregateData_sources]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateData_sources[P]>
      : GetScalarType<T[P], AggregateData_sources[P]>
  }




  export type data_sourcesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: data_sourcesWhereInput
    orderBy?: data_sourcesOrderByWithAggregationInput | data_sourcesOrderByWithAggregationInput[]
    by: Data_sourcesScalarFieldEnum[] | Data_sourcesScalarFieldEnum
    having?: data_sourcesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Data_sourcesCountAggregateInputType | true
    _avg?: Data_sourcesAvgAggregateInputType
    _sum?: Data_sourcesSumAggregateInputType
    _min?: Data_sourcesMinAggregateInputType
    _max?: Data_sourcesMaxAggregateInputType
  }

  export type Data_sourcesGroupByOutputType = {
    id: bigint
    user_id: string | null
    source_name: string | null
    source_type: string | null
    database_name: string | null
    table_name: string | null
    database_connection_id: number | null
    csv_data_id: bigint | null
    api_connection_id: number | null
    row_count: number | null
    column_count: number | null
    data_schema: JsonValue | null
    last_updated: Date | null
    cache_key: string | null
    partition_info: JsonValue | null
    index_info: JsonValue | null
    avg_query_time_ms: number | null
    total_queries: number | null
    last_accessed: Date | null
    data_quality_score: number | null
    null_percentage: number | null
    duplicate_count: number | null
    _count: Data_sourcesCountAggregateOutputType | null
    _avg: Data_sourcesAvgAggregateOutputType | null
    _sum: Data_sourcesSumAggregateOutputType | null
    _min: Data_sourcesMinAggregateOutputType | null
    _max: Data_sourcesMaxAggregateOutputType | null
  }

  type GetData_sourcesGroupByPayload<T extends data_sourcesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Data_sourcesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Data_sourcesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Data_sourcesGroupByOutputType[P]>
            : GetScalarType<T[P], Data_sourcesGroupByOutputType[P]>
        }
      >
    >


  export type data_sourcesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    source_name?: boolean
    source_type?: boolean
    database_name?: boolean
    table_name?: boolean
    database_connection_id?: boolean
    csv_data_id?: boolean
    api_connection_id?: boolean
    row_count?: boolean
    column_count?: boolean
    data_schema?: boolean
    last_updated?: boolean
    cache_key?: boolean
    partition_info?: boolean
    index_info?: boolean
    avg_query_time_ms?: boolean
    total_queries?: boolean
    last_accessed?: boolean
    data_quality_score?: boolean
    null_percentage?: boolean
    duplicate_count?: boolean
    api_connection?: boolean | data_sources$api_connectionArgs<ExtArgs>
    csv_data?: boolean | data_sources$csv_dataArgs<ExtArgs>
    database_connection?: boolean | data_sources$database_connectionArgs<ExtArgs>
    user?: boolean | data_sources$userArgs<ExtArgs>
    analytics_events?: boolean | data_sources$analytics_eventsArgs<ExtArgs>
    _count?: boolean | Data_sourcesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["data_sources"]>

  export type data_sourcesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    source_name?: boolean
    source_type?: boolean
    database_name?: boolean
    table_name?: boolean
    database_connection_id?: boolean
    csv_data_id?: boolean
    api_connection_id?: boolean
    row_count?: boolean
    column_count?: boolean
    data_schema?: boolean
    last_updated?: boolean
    cache_key?: boolean
    partition_info?: boolean
    index_info?: boolean
    avg_query_time_ms?: boolean
    total_queries?: boolean
    last_accessed?: boolean
    data_quality_score?: boolean
    null_percentage?: boolean
    duplicate_count?: boolean
    api_connection?: boolean | data_sources$api_connectionArgs<ExtArgs>
    csv_data?: boolean | data_sources$csv_dataArgs<ExtArgs>
    database_connection?: boolean | data_sources$database_connectionArgs<ExtArgs>
    user?: boolean | data_sources$userArgs<ExtArgs>
  }, ExtArgs["result"]["data_sources"]>

  export type data_sourcesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    source_name?: boolean
    source_type?: boolean
    database_name?: boolean
    table_name?: boolean
    database_connection_id?: boolean
    csv_data_id?: boolean
    api_connection_id?: boolean
    row_count?: boolean
    column_count?: boolean
    data_schema?: boolean
    last_updated?: boolean
    cache_key?: boolean
    partition_info?: boolean
    index_info?: boolean
    avg_query_time_ms?: boolean
    total_queries?: boolean
    last_accessed?: boolean
    data_quality_score?: boolean
    null_percentage?: boolean
    duplicate_count?: boolean
    api_connection?: boolean | data_sources$api_connectionArgs<ExtArgs>
    csv_data?: boolean | data_sources$csv_dataArgs<ExtArgs>
    database_connection?: boolean | data_sources$database_connectionArgs<ExtArgs>
    user?: boolean | data_sources$userArgs<ExtArgs>
  }, ExtArgs["result"]["data_sources"]>

  export type data_sourcesSelectScalar = {
    id?: boolean
    user_id?: boolean
    source_name?: boolean
    source_type?: boolean
    database_name?: boolean
    table_name?: boolean
    database_connection_id?: boolean
    csv_data_id?: boolean
    api_connection_id?: boolean
    row_count?: boolean
    column_count?: boolean
    data_schema?: boolean
    last_updated?: boolean
    cache_key?: boolean
    partition_info?: boolean
    index_info?: boolean
    avg_query_time_ms?: boolean
    total_queries?: boolean
    last_accessed?: boolean
    data_quality_score?: boolean
    null_percentage?: boolean
    duplicate_count?: boolean
  }

  export type data_sourcesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "source_name" | "source_type" | "database_name" | "table_name" | "database_connection_id" | "csv_data_id" | "api_connection_id" | "row_count" | "column_count" | "data_schema" | "last_updated" | "cache_key" | "partition_info" | "index_info" | "avg_query_time_ms" | "total_queries" | "last_accessed" | "data_quality_score" | "null_percentage" | "duplicate_count", ExtArgs["result"]["data_sources"]>
  export type data_sourcesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    api_connection?: boolean | data_sources$api_connectionArgs<ExtArgs>
    csv_data?: boolean | data_sources$csv_dataArgs<ExtArgs>
    database_connection?: boolean | data_sources$database_connectionArgs<ExtArgs>
    user?: boolean | data_sources$userArgs<ExtArgs>
    analytics_events?: boolean | data_sources$analytics_eventsArgs<ExtArgs>
    _count?: boolean | Data_sourcesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type data_sourcesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    api_connection?: boolean | data_sources$api_connectionArgs<ExtArgs>
    csv_data?: boolean | data_sources$csv_dataArgs<ExtArgs>
    database_connection?: boolean | data_sources$database_connectionArgs<ExtArgs>
    user?: boolean | data_sources$userArgs<ExtArgs>
  }
  export type data_sourcesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    api_connection?: boolean | data_sources$api_connectionArgs<ExtArgs>
    csv_data?: boolean | data_sources$csv_dataArgs<ExtArgs>
    database_connection?: boolean | data_sources$database_connectionArgs<ExtArgs>
    user?: boolean | data_sources$userArgs<ExtArgs>
  }

  export type $data_sourcesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "data_sources"
    objects: {
      api_connection: Prisma.$api_connectionsPayload<ExtArgs> | null
      csv_data: Prisma.$csvdataPayload<ExtArgs> | null
      database_connection: Prisma.$database_connectionsPayload<ExtArgs> | null
      user: Prisma.$usersPayload<ExtArgs> | null
      analytics_events: Prisma.$analytics_eventsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      user_id: string | null
      source_name: string | null
      source_type: string | null
      database_name: string | null
      table_name: string | null
      database_connection_id: number | null
      csv_data_id: bigint | null
      api_connection_id: number | null
      row_count: number | null
      column_count: number | null
      data_schema: Prisma.JsonValue | null
      last_updated: Date | null
      cache_key: string | null
      partition_info: Prisma.JsonValue | null
      index_info: Prisma.JsonValue | null
      avg_query_time_ms: number | null
      total_queries: number | null
      last_accessed: Date | null
      data_quality_score: number | null
      null_percentage: number | null
      duplicate_count: number | null
    }, ExtArgs["result"]["data_sources"]>
    composites: {}
  }

  type data_sourcesGetPayload<S extends boolean | null | undefined | data_sourcesDefaultArgs> = $Result.GetResult<Prisma.$data_sourcesPayload, S>

  type data_sourcesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<data_sourcesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Data_sourcesCountAggregateInputType | true
    }

  export interface data_sourcesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['data_sources'], meta: { name: 'data_sources' } }
    /**
     * Find zero or one Data_sources that matches the filter.
     * @param {data_sourcesFindUniqueArgs} args - Arguments to find a Data_sources
     * @example
     * // Get one Data_sources
     * const data_sources = await prisma.data_sources.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends data_sourcesFindUniqueArgs>(args: SelectSubset<T, data_sourcesFindUniqueArgs<ExtArgs>>): Prisma__data_sourcesClient<$Result.GetResult<Prisma.$data_sourcesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Data_sources that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {data_sourcesFindUniqueOrThrowArgs} args - Arguments to find a Data_sources
     * @example
     * // Get one Data_sources
     * const data_sources = await prisma.data_sources.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends data_sourcesFindUniqueOrThrowArgs>(args: SelectSubset<T, data_sourcesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__data_sourcesClient<$Result.GetResult<Prisma.$data_sourcesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Data_sources that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {data_sourcesFindFirstArgs} args - Arguments to find a Data_sources
     * @example
     * // Get one Data_sources
     * const data_sources = await prisma.data_sources.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends data_sourcesFindFirstArgs>(args?: SelectSubset<T, data_sourcesFindFirstArgs<ExtArgs>>): Prisma__data_sourcesClient<$Result.GetResult<Prisma.$data_sourcesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Data_sources that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {data_sourcesFindFirstOrThrowArgs} args - Arguments to find a Data_sources
     * @example
     * // Get one Data_sources
     * const data_sources = await prisma.data_sources.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends data_sourcesFindFirstOrThrowArgs>(args?: SelectSubset<T, data_sourcesFindFirstOrThrowArgs<ExtArgs>>): Prisma__data_sourcesClient<$Result.GetResult<Prisma.$data_sourcesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Data_sources that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {data_sourcesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Data_sources
     * const data_sources = await prisma.data_sources.findMany()
     * 
     * // Get first 10 Data_sources
     * const data_sources = await prisma.data_sources.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const data_sourcesWithIdOnly = await prisma.data_sources.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends data_sourcesFindManyArgs>(args?: SelectSubset<T, data_sourcesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$data_sourcesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Data_sources.
     * @param {data_sourcesCreateArgs} args - Arguments to create a Data_sources.
     * @example
     * // Create one Data_sources
     * const Data_sources = await prisma.data_sources.create({
     *   data: {
     *     // ... data to create a Data_sources
     *   }
     * })
     * 
     */
    create<T extends data_sourcesCreateArgs>(args: SelectSubset<T, data_sourcesCreateArgs<ExtArgs>>): Prisma__data_sourcesClient<$Result.GetResult<Prisma.$data_sourcesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Data_sources.
     * @param {data_sourcesCreateManyArgs} args - Arguments to create many Data_sources.
     * @example
     * // Create many Data_sources
     * const data_sources = await prisma.data_sources.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends data_sourcesCreateManyArgs>(args?: SelectSubset<T, data_sourcesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Data_sources and returns the data saved in the database.
     * @param {data_sourcesCreateManyAndReturnArgs} args - Arguments to create many Data_sources.
     * @example
     * // Create many Data_sources
     * const data_sources = await prisma.data_sources.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Data_sources and only return the `id`
     * const data_sourcesWithIdOnly = await prisma.data_sources.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends data_sourcesCreateManyAndReturnArgs>(args?: SelectSubset<T, data_sourcesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$data_sourcesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Data_sources.
     * @param {data_sourcesDeleteArgs} args - Arguments to delete one Data_sources.
     * @example
     * // Delete one Data_sources
     * const Data_sources = await prisma.data_sources.delete({
     *   where: {
     *     // ... filter to delete one Data_sources
     *   }
     * })
     * 
     */
    delete<T extends data_sourcesDeleteArgs>(args: SelectSubset<T, data_sourcesDeleteArgs<ExtArgs>>): Prisma__data_sourcesClient<$Result.GetResult<Prisma.$data_sourcesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Data_sources.
     * @param {data_sourcesUpdateArgs} args - Arguments to update one Data_sources.
     * @example
     * // Update one Data_sources
     * const data_sources = await prisma.data_sources.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends data_sourcesUpdateArgs>(args: SelectSubset<T, data_sourcesUpdateArgs<ExtArgs>>): Prisma__data_sourcesClient<$Result.GetResult<Prisma.$data_sourcesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Data_sources.
     * @param {data_sourcesDeleteManyArgs} args - Arguments to filter Data_sources to delete.
     * @example
     * // Delete a few Data_sources
     * const { count } = await prisma.data_sources.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends data_sourcesDeleteManyArgs>(args?: SelectSubset<T, data_sourcesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Data_sources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {data_sourcesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Data_sources
     * const data_sources = await prisma.data_sources.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends data_sourcesUpdateManyArgs>(args: SelectSubset<T, data_sourcesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Data_sources and returns the data updated in the database.
     * @param {data_sourcesUpdateManyAndReturnArgs} args - Arguments to update many Data_sources.
     * @example
     * // Update many Data_sources
     * const data_sources = await prisma.data_sources.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Data_sources and only return the `id`
     * const data_sourcesWithIdOnly = await prisma.data_sources.updateManyAndReturn({
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
    updateManyAndReturn<T extends data_sourcesUpdateManyAndReturnArgs>(args: SelectSubset<T, data_sourcesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$data_sourcesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Data_sources.
     * @param {data_sourcesUpsertArgs} args - Arguments to update or create a Data_sources.
     * @example
     * // Update or create a Data_sources
     * const data_sources = await prisma.data_sources.upsert({
     *   create: {
     *     // ... data to create a Data_sources
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Data_sources we want to update
     *   }
     * })
     */
    upsert<T extends data_sourcesUpsertArgs>(args: SelectSubset<T, data_sourcesUpsertArgs<ExtArgs>>): Prisma__data_sourcesClient<$Result.GetResult<Prisma.$data_sourcesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Data_sources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {data_sourcesCountArgs} args - Arguments to filter Data_sources to count.
     * @example
     * // Count the number of Data_sources
     * const count = await prisma.data_sources.count({
     *   where: {
     *     // ... the filter for the Data_sources we want to count
     *   }
     * })
    **/
    count<T extends data_sourcesCountArgs>(
      args?: Subset<T, data_sourcesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Data_sourcesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Data_sources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Data_sourcesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Data_sourcesAggregateArgs>(args: Subset<T, Data_sourcesAggregateArgs>): Prisma.PrismaPromise<GetData_sourcesAggregateType<T>>

    /**
     * Group by Data_sources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {data_sourcesGroupByArgs} args - Group by arguments.
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
      T extends data_sourcesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: data_sourcesGroupByArgs['orderBy'] }
        : { orderBy?: data_sourcesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, data_sourcesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetData_sourcesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the data_sources model
   */
  readonly fields: data_sourcesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for data_sources.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__data_sourcesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    api_connection<T extends data_sources$api_connectionArgs<ExtArgs> = {}>(args?: Subset<T, data_sources$api_connectionArgs<ExtArgs>>): Prisma__api_connectionsClient<$Result.GetResult<Prisma.$api_connectionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    csv_data<T extends data_sources$csv_dataArgs<ExtArgs> = {}>(args?: Subset<T, data_sources$csv_dataArgs<ExtArgs>>): Prisma__csvdataClient<$Result.GetResult<Prisma.$csvdataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    database_connection<T extends data_sources$database_connectionArgs<ExtArgs> = {}>(args?: Subset<T, data_sources$database_connectionArgs<ExtArgs>>): Prisma__database_connectionsClient<$Result.GetResult<Prisma.$database_connectionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends data_sources$userArgs<ExtArgs> = {}>(args?: Subset<T, data_sources$userArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    analytics_events<T extends data_sources$analytics_eventsArgs<ExtArgs> = {}>(args?: Subset<T, data_sources$analytics_eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$analytics_eventsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the data_sources model
   */
  interface data_sourcesFieldRefs {
    readonly id: FieldRef<"data_sources", 'BigInt'>
    readonly user_id: FieldRef<"data_sources", 'String'>
    readonly source_name: FieldRef<"data_sources", 'String'>
    readonly source_type: FieldRef<"data_sources", 'String'>
    readonly database_name: FieldRef<"data_sources", 'String'>
    readonly table_name: FieldRef<"data_sources", 'String'>
    readonly database_connection_id: FieldRef<"data_sources", 'Int'>
    readonly csv_data_id: FieldRef<"data_sources", 'BigInt'>
    readonly api_connection_id: FieldRef<"data_sources", 'Int'>
    readonly row_count: FieldRef<"data_sources", 'Int'>
    readonly column_count: FieldRef<"data_sources", 'Int'>
    readonly data_schema: FieldRef<"data_sources", 'Json'>
    readonly last_updated: FieldRef<"data_sources", 'DateTime'>
    readonly cache_key: FieldRef<"data_sources", 'String'>
    readonly partition_info: FieldRef<"data_sources", 'Json'>
    readonly index_info: FieldRef<"data_sources", 'Json'>
    readonly avg_query_time_ms: FieldRef<"data_sources", 'Float'>
    readonly total_queries: FieldRef<"data_sources", 'Int'>
    readonly last_accessed: FieldRef<"data_sources", 'DateTime'>
    readonly data_quality_score: FieldRef<"data_sources", 'Float'>
    readonly null_percentage: FieldRef<"data_sources", 'Float'>
    readonly duplicate_count: FieldRef<"data_sources", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * data_sources findUnique
   */
  export type data_sourcesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data_sources
     */
    select?: data_sourcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the data_sources
     */
    omit?: data_sourcesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: data_sourcesInclude<ExtArgs> | null
    /**
     * Filter, which data_sources to fetch.
     */
    where: data_sourcesWhereUniqueInput
  }

  /**
   * data_sources findUniqueOrThrow
   */
  export type data_sourcesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data_sources
     */
    select?: data_sourcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the data_sources
     */
    omit?: data_sourcesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: data_sourcesInclude<ExtArgs> | null
    /**
     * Filter, which data_sources to fetch.
     */
    where: data_sourcesWhereUniqueInput
  }

  /**
   * data_sources findFirst
   */
  export type data_sourcesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data_sources
     */
    select?: data_sourcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the data_sources
     */
    omit?: data_sourcesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: data_sourcesInclude<ExtArgs> | null
    /**
     * Filter, which data_sources to fetch.
     */
    where?: data_sourcesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of data_sources to fetch.
     */
    orderBy?: data_sourcesOrderByWithRelationInput | data_sourcesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for data_sources.
     */
    cursor?: data_sourcesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` data_sources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` data_sources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of data_sources.
     */
    distinct?: Data_sourcesScalarFieldEnum | Data_sourcesScalarFieldEnum[]
  }

  /**
   * data_sources findFirstOrThrow
   */
  export type data_sourcesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data_sources
     */
    select?: data_sourcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the data_sources
     */
    omit?: data_sourcesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: data_sourcesInclude<ExtArgs> | null
    /**
     * Filter, which data_sources to fetch.
     */
    where?: data_sourcesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of data_sources to fetch.
     */
    orderBy?: data_sourcesOrderByWithRelationInput | data_sourcesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for data_sources.
     */
    cursor?: data_sourcesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` data_sources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` data_sources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of data_sources.
     */
    distinct?: Data_sourcesScalarFieldEnum | Data_sourcesScalarFieldEnum[]
  }

  /**
   * data_sources findMany
   */
  export type data_sourcesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data_sources
     */
    select?: data_sourcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the data_sources
     */
    omit?: data_sourcesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: data_sourcesInclude<ExtArgs> | null
    /**
     * Filter, which data_sources to fetch.
     */
    where?: data_sourcesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of data_sources to fetch.
     */
    orderBy?: data_sourcesOrderByWithRelationInput | data_sourcesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing data_sources.
     */
    cursor?: data_sourcesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` data_sources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` data_sources.
     */
    skip?: number
    distinct?: Data_sourcesScalarFieldEnum | Data_sourcesScalarFieldEnum[]
  }

  /**
   * data_sources create
   */
  export type data_sourcesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data_sources
     */
    select?: data_sourcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the data_sources
     */
    omit?: data_sourcesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: data_sourcesInclude<ExtArgs> | null
    /**
     * The data needed to create a data_sources.
     */
    data?: XOR<data_sourcesCreateInput, data_sourcesUncheckedCreateInput>
  }

  /**
   * data_sources createMany
   */
  export type data_sourcesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many data_sources.
     */
    data: data_sourcesCreateManyInput | data_sourcesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * data_sources createManyAndReturn
   */
  export type data_sourcesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data_sources
     */
    select?: data_sourcesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the data_sources
     */
    omit?: data_sourcesOmit<ExtArgs> | null
    /**
     * The data used to create many data_sources.
     */
    data: data_sourcesCreateManyInput | data_sourcesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: data_sourcesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * data_sources update
   */
  export type data_sourcesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data_sources
     */
    select?: data_sourcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the data_sources
     */
    omit?: data_sourcesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: data_sourcesInclude<ExtArgs> | null
    /**
     * The data needed to update a data_sources.
     */
    data: XOR<data_sourcesUpdateInput, data_sourcesUncheckedUpdateInput>
    /**
     * Choose, which data_sources to update.
     */
    where: data_sourcesWhereUniqueInput
  }

  /**
   * data_sources updateMany
   */
  export type data_sourcesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update data_sources.
     */
    data: XOR<data_sourcesUpdateManyMutationInput, data_sourcesUncheckedUpdateManyInput>
    /**
     * Filter which data_sources to update
     */
    where?: data_sourcesWhereInput
    /**
     * Limit how many data_sources to update.
     */
    limit?: number
  }

  /**
   * data_sources updateManyAndReturn
   */
  export type data_sourcesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data_sources
     */
    select?: data_sourcesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the data_sources
     */
    omit?: data_sourcesOmit<ExtArgs> | null
    /**
     * The data used to update data_sources.
     */
    data: XOR<data_sourcesUpdateManyMutationInput, data_sourcesUncheckedUpdateManyInput>
    /**
     * Filter which data_sources to update
     */
    where?: data_sourcesWhereInput
    /**
     * Limit how many data_sources to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: data_sourcesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * data_sources upsert
   */
  export type data_sourcesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data_sources
     */
    select?: data_sourcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the data_sources
     */
    omit?: data_sourcesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: data_sourcesInclude<ExtArgs> | null
    /**
     * The filter to search for the data_sources to update in case it exists.
     */
    where: data_sourcesWhereUniqueInput
    /**
     * In case the data_sources found by the `where` argument doesn't exist, create a new data_sources with this data.
     */
    create: XOR<data_sourcesCreateInput, data_sourcesUncheckedCreateInput>
    /**
     * In case the data_sources was found with the provided `where` argument, update it with this data.
     */
    update: XOR<data_sourcesUpdateInput, data_sourcesUncheckedUpdateInput>
  }

  /**
   * data_sources delete
   */
  export type data_sourcesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data_sources
     */
    select?: data_sourcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the data_sources
     */
    omit?: data_sourcesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: data_sourcesInclude<ExtArgs> | null
    /**
     * Filter which data_sources to delete.
     */
    where: data_sourcesWhereUniqueInput
  }

  /**
   * data_sources deleteMany
   */
  export type data_sourcesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which data_sources to delete
     */
    where?: data_sourcesWhereInput
    /**
     * Limit how many data_sources to delete.
     */
    limit?: number
  }

  /**
   * data_sources.api_connection
   */
  export type data_sources$api_connectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_connections
     */
    select?: api_connectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_connections
     */
    omit?: api_connectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_connectionsInclude<ExtArgs> | null
    where?: api_connectionsWhereInput
  }

  /**
   * data_sources.csv_data
   */
  export type data_sources$csv_dataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the csvdata
     */
    select?: csvdataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the csvdata
     */
    omit?: csvdataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: csvdataInclude<ExtArgs> | null
    where?: csvdataWhereInput
  }

  /**
   * data_sources.database_connection
   */
  export type data_sources$database_connectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the database_connections
     */
    select?: database_connectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the database_connections
     */
    omit?: database_connectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: database_connectionsInclude<ExtArgs> | null
    where?: database_connectionsWhereInput
  }

  /**
   * data_sources.user
   */
  export type data_sources$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * data_sources.analytics_events
   */
  export type data_sources$analytics_eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the analytics_events
     */
    select?: analytics_eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the analytics_events
     */
    omit?: analytics_eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: analytics_eventsInclude<ExtArgs> | null
    where?: analytics_eventsWhereInput
    orderBy?: analytics_eventsOrderByWithRelationInput | analytics_eventsOrderByWithRelationInput[]
    cursor?: analytics_eventsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Analytics_eventsScalarFieldEnum | Analytics_eventsScalarFieldEnum[]
  }

  /**
   * data_sources without action
   */
  export type data_sourcesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data_sources
     */
    select?: data_sourcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the data_sources
     */
    omit?: data_sourcesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: data_sourcesInclude<ExtArgs> | null
  }


  /**
   * Model users_storage
   */

  export type AggregateUsers_storage = {
    _count: Users_storageCountAggregateOutputType | null
    _avg: Users_storageAvgAggregateOutputType | null
    _sum: Users_storageSumAggregateOutputType | null
    _min: Users_storageMinAggregateOutputType | null
    _max: Users_storageMaxAggregateOutputType | null
  }

  export type Users_storageAvgAggregateOutputType = {
    id: number | null
  }

  export type Users_storageSumAggregateOutputType = {
    id: bigint | null
  }

  export type Users_storageMinAggregateOutputType = {
    id: bigint | null
    user_id: string | null
    bucket_name: string | null
    createdat: Date | null
    updatedat: Date | null
  }

  export type Users_storageMaxAggregateOutputType = {
    id: bigint | null
    user_id: string | null
    bucket_name: string | null
    createdat: Date | null
    updatedat: Date | null
  }

  export type Users_storageCountAggregateOutputType = {
    id: number
    user_id: number
    bucket_name: number
    createdat: number
    updatedat: number
    _all: number
  }


  export type Users_storageAvgAggregateInputType = {
    id?: true
  }

  export type Users_storageSumAggregateInputType = {
    id?: true
  }

  export type Users_storageMinAggregateInputType = {
    id?: true
    user_id?: true
    bucket_name?: true
    createdat?: true
    updatedat?: true
  }

  export type Users_storageMaxAggregateInputType = {
    id?: true
    user_id?: true
    bucket_name?: true
    createdat?: true
    updatedat?: true
  }

  export type Users_storageCountAggregateInputType = {
    id?: true
    user_id?: true
    bucket_name?: true
    createdat?: true
    updatedat?: true
    _all?: true
  }

  export type Users_storageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users_storage to aggregate.
     */
    where?: users_storageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users_storages to fetch.
     */
    orderBy?: users_storageOrderByWithRelationInput | users_storageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: users_storageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users_storages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users_storages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users_storages
    **/
    _count?: true | Users_storageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Users_storageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Users_storageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Users_storageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Users_storageMaxAggregateInputType
  }

  export type GetUsers_storageAggregateType<T extends Users_storageAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers_storage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers_storage[P]>
      : GetScalarType<T[P], AggregateUsers_storage[P]>
  }




  export type users_storageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: users_storageWhereInput
    orderBy?: users_storageOrderByWithAggregationInput | users_storageOrderByWithAggregationInput[]
    by: Users_storageScalarFieldEnum[] | Users_storageScalarFieldEnum
    having?: users_storageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Users_storageCountAggregateInputType | true
    _avg?: Users_storageAvgAggregateInputType
    _sum?: Users_storageSumAggregateInputType
    _min?: Users_storageMinAggregateInputType
    _max?: Users_storageMaxAggregateInputType
  }

  export type Users_storageGroupByOutputType = {
    id: bigint
    user_id: string
    bucket_name: string | null
    createdat: Date | null
    updatedat: Date | null
    _count: Users_storageCountAggregateOutputType | null
    _avg: Users_storageAvgAggregateOutputType | null
    _sum: Users_storageSumAggregateOutputType | null
    _min: Users_storageMinAggregateOutputType | null
    _max: Users_storageMaxAggregateOutputType | null
  }

  type GetUsers_storageGroupByPayload<T extends users_storageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Users_storageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Users_storageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Users_storageGroupByOutputType[P]>
            : GetScalarType<T[P], Users_storageGroupByOutputType[P]>
        }
      >
    >


  export type users_storageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    bucket_name?: boolean
    createdat?: boolean
    updatedat?: boolean
  }, ExtArgs["result"]["users_storage"]>

  export type users_storageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    bucket_name?: boolean
    createdat?: boolean
    updatedat?: boolean
  }, ExtArgs["result"]["users_storage"]>

  export type users_storageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    bucket_name?: boolean
    createdat?: boolean
    updatedat?: boolean
  }, ExtArgs["result"]["users_storage"]>

  export type users_storageSelectScalar = {
    id?: boolean
    user_id?: boolean
    bucket_name?: boolean
    createdat?: boolean
    updatedat?: boolean
  }

  export type users_storageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "bucket_name" | "createdat" | "updatedat", ExtArgs["result"]["users_storage"]>

  export type $users_storagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users_storage"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      user_id: string
      bucket_name: string | null
      createdat: Date | null
      updatedat: Date | null
    }, ExtArgs["result"]["users_storage"]>
    composites: {}
  }

  type users_storageGetPayload<S extends boolean | null | undefined | users_storageDefaultArgs> = $Result.GetResult<Prisma.$users_storagePayload, S>

  type users_storageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<users_storageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Users_storageCountAggregateInputType | true
    }

  export interface users_storageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users_storage'], meta: { name: 'users_storage' } }
    /**
     * Find zero or one Users_storage that matches the filter.
     * @param {users_storageFindUniqueArgs} args - Arguments to find a Users_storage
     * @example
     * // Get one Users_storage
     * const users_storage = await prisma.users_storage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends users_storageFindUniqueArgs>(args: SelectSubset<T, users_storageFindUniqueArgs<ExtArgs>>): Prisma__users_storageClient<$Result.GetResult<Prisma.$users_storagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users_storage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {users_storageFindUniqueOrThrowArgs} args - Arguments to find a Users_storage
     * @example
     * // Get one Users_storage
     * const users_storage = await prisma.users_storage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends users_storageFindUniqueOrThrowArgs>(args: SelectSubset<T, users_storageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__users_storageClient<$Result.GetResult<Prisma.$users_storagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users_storage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {users_storageFindFirstArgs} args - Arguments to find a Users_storage
     * @example
     * // Get one Users_storage
     * const users_storage = await prisma.users_storage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends users_storageFindFirstArgs>(args?: SelectSubset<T, users_storageFindFirstArgs<ExtArgs>>): Prisma__users_storageClient<$Result.GetResult<Prisma.$users_storagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users_storage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {users_storageFindFirstOrThrowArgs} args - Arguments to find a Users_storage
     * @example
     * // Get one Users_storage
     * const users_storage = await prisma.users_storage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends users_storageFindFirstOrThrowArgs>(args?: SelectSubset<T, users_storageFindFirstOrThrowArgs<ExtArgs>>): Prisma__users_storageClient<$Result.GetResult<Prisma.$users_storagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users_storages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {users_storageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users_storages
     * const users_storages = await prisma.users_storage.findMany()
     * 
     * // Get first 10 Users_storages
     * const users_storages = await prisma.users_storage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const users_storageWithIdOnly = await prisma.users_storage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends users_storageFindManyArgs>(args?: SelectSubset<T, users_storageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$users_storagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users_storage.
     * @param {users_storageCreateArgs} args - Arguments to create a Users_storage.
     * @example
     * // Create one Users_storage
     * const Users_storage = await prisma.users_storage.create({
     *   data: {
     *     // ... data to create a Users_storage
     *   }
     * })
     * 
     */
    create<T extends users_storageCreateArgs>(args: SelectSubset<T, users_storageCreateArgs<ExtArgs>>): Prisma__users_storageClient<$Result.GetResult<Prisma.$users_storagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users_storages.
     * @param {users_storageCreateManyArgs} args - Arguments to create many Users_storages.
     * @example
     * // Create many Users_storages
     * const users_storage = await prisma.users_storage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends users_storageCreateManyArgs>(args?: SelectSubset<T, users_storageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users_storages and returns the data saved in the database.
     * @param {users_storageCreateManyAndReturnArgs} args - Arguments to create many Users_storages.
     * @example
     * // Create many Users_storages
     * const users_storage = await prisma.users_storage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users_storages and only return the `id`
     * const users_storageWithIdOnly = await prisma.users_storage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends users_storageCreateManyAndReturnArgs>(args?: SelectSubset<T, users_storageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$users_storagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users_storage.
     * @param {users_storageDeleteArgs} args - Arguments to delete one Users_storage.
     * @example
     * // Delete one Users_storage
     * const Users_storage = await prisma.users_storage.delete({
     *   where: {
     *     // ... filter to delete one Users_storage
     *   }
     * })
     * 
     */
    delete<T extends users_storageDeleteArgs>(args: SelectSubset<T, users_storageDeleteArgs<ExtArgs>>): Prisma__users_storageClient<$Result.GetResult<Prisma.$users_storagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users_storage.
     * @param {users_storageUpdateArgs} args - Arguments to update one Users_storage.
     * @example
     * // Update one Users_storage
     * const users_storage = await prisma.users_storage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends users_storageUpdateArgs>(args: SelectSubset<T, users_storageUpdateArgs<ExtArgs>>): Prisma__users_storageClient<$Result.GetResult<Prisma.$users_storagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users_storages.
     * @param {users_storageDeleteManyArgs} args - Arguments to filter Users_storages to delete.
     * @example
     * // Delete a few Users_storages
     * const { count } = await prisma.users_storage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends users_storageDeleteManyArgs>(args?: SelectSubset<T, users_storageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users_storages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {users_storageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users_storages
     * const users_storage = await prisma.users_storage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends users_storageUpdateManyArgs>(args: SelectSubset<T, users_storageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users_storages and returns the data updated in the database.
     * @param {users_storageUpdateManyAndReturnArgs} args - Arguments to update many Users_storages.
     * @example
     * // Update many Users_storages
     * const users_storage = await prisma.users_storage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users_storages and only return the `id`
     * const users_storageWithIdOnly = await prisma.users_storage.updateManyAndReturn({
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
    updateManyAndReturn<T extends users_storageUpdateManyAndReturnArgs>(args: SelectSubset<T, users_storageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$users_storagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users_storage.
     * @param {users_storageUpsertArgs} args - Arguments to update or create a Users_storage.
     * @example
     * // Update or create a Users_storage
     * const users_storage = await prisma.users_storage.upsert({
     *   create: {
     *     // ... data to create a Users_storage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users_storage we want to update
     *   }
     * })
     */
    upsert<T extends users_storageUpsertArgs>(args: SelectSubset<T, users_storageUpsertArgs<ExtArgs>>): Prisma__users_storageClient<$Result.GetResult<Prisma.$users_storagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users_storages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {users_storageCountArgs} args - Arguments to filter Users_storages to count.
     * @example
     * // Count the number of Users_storages
     * const count = await prisma.users_storage.count({
     *   where: {
     *     // ... the filter for the Users_storages we want to count
     *   }
     * })
    **/
    count<T extends users_storageCountArgs>(
      args?: Subset<T, users_storageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Users_storageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users_storage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Users_storageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Users_storageAggregateArgs>(args: Subset<T, Users_storageAggregateArgs>): Prisma.PrismaPromise<GetUsers_storageAggregateType<T>>

    /**
     * Group by Users_storage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {users_storageGroupByArgs} args - Group by arguments.
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
      T extends users_storageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: users_storageGroupByArgs['orderBy'] }
        : { orderBy?: users_storageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, users_storageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsers_storageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users_storage model
   */
  readonly fields: users_storageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users_storage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__users_storageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the users_storage model
   */
  interface users_storageFieldRefs {
    readonly id: FieldRef<"users_storage", 'BigInt'>
    readonly user_id: FieldRef<"users_storage", 'String'>
    readonly bucket_name: FieldRef<"users_storage", 'String'>
    readonly createdat: FieldRef<"users_storage", 'DateTime'>
    readonly updatedat: FieldRef<"users_storage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users_storage findUnique
   */
  export type users_storageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_storage
     */
    select?: users_storageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_storage
     */
    omit?: users_storageOmit<ExtArgs> | null
    /**
     * Filter, which users_storage to fetch.
     */
    where: users_storageWhereUniqueInput
  }

  /**
   * users_storage findUniqueOrThrow
   */
  export type users_storageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_storage
     */
    select?: users_storageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_storage
     */
    omit?: users_storageOmit<ExtArgs> | null
    /**
     * Filter, which users_storage to fetch.
     */
    where: users_storageWhereUniqueInput
  }

  /**
   * users_storage findFirst
   */
  export type users_storageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_storage
     */
    select?: users_storageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_storage
     */
    omit?: users_storageOmit<ExtArgs> | null
    /**
     * Filter, which users_storage to fetch.
     */
    where?: users_storageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users_storages to fetch.
     */
    orderBy?: users_storageOrderByWithRelationInput | users_storageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users_storages.
     */
    cursor?: users_storageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users_storages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users_storages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users_storages.
     */
    distinct?: Users_storageScalarFieldEnum | Users_storageScalarFieldEnum[]
  }

  /**
   * users_storage findFirstOrThrow
   */
  export type users_storageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_storage
     */
    select?: users_storageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_storage
     */
    omit?: users_storageOmit<ExtArgs> | null
    /**
     * Filter, which users_storage to fetch.
     */
    where?: users_storageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users_storages to fetch.
     */
    orderBy?: users_storageOrderByWithRelationInput | users_storageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users_storages.
     */
    cursor?: users_storageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users_storages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users_storages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users_storages.
     */
    distinct?: Users_storageScalarFieldEnum | Users_storageScalarFieldEnum[]
  }

  /**
   * users_storage findMany
   */
  export type users_storageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_storage
     */
    select?: users_storageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_storage
     */
    omit?: users_storageOmit<ExtArgs> | null
    /**
     * Filter, which users_storages to fetch.
     */
    where?: users_storageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users_storages to fetch.
     */
    orderBy?: users_storageOrderByWithRelationInput | users_storageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users_storages.
     */
    cursor?: users_storageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users_storages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users_storages.
     */
    skip?: number
    distinct?: Users_storageScalarFieldEnum | Users_storageScalarFieldEnum[]
  }

  /**
   * users_storage create
   */
  export type users_storageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_storage
     */
    select?: users_storageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_storage
     */
    omit?: users_storageOmit<ExtArgs> | null
    /**
     * The data needed to create a users_storage.
     */
    data: XOR<users_storageCreateInput, users_storageUncheckedCreateInput>
  }

  /**
   * users_storage createMany
   */
  export type users_storageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users_storages.
     */
    data: users_storageCreateManyInput | users_storageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users_storage createManyAndReturn
   */
  export type users_storageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_storage
     */
    select?: users_storageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users_storage
     */
    omit?: users_storageOmit<ExtArgs> | null
    /**
     * The data used to create many users_storages.
     */
    data: users_storageCreateManyInput | users_storageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users_storage update
   */
  export type users_storageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_storage
     */
    select?: users_storageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_storage
     */
    omit?: users_storageOmit<ExtArgs> | null
    /**
     * The data needed to update a users_storage.
     */
    data: XOR<users_storageUpdateInput, users_storageUncheckedUpdateInput>
    /**
     * Choose, which users_storage to update.
     */
    where: users_storageWhereUniqueInput
  }

  /**
   * users_storage updateMany
   */
  export type users_storageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users_storages.
     */
    data: XOR<users_storageUpdateManyMutationInput, users_storageUncheckedUpdateManyInput>
    /**
     * Filter which users_storages to update
     */
    where?: users_storageWhereInput
    /**
     * Limit how many users_storages to update.
     */
    limit?: number
  }

  /**
   * users_storage updateManyAndReturn
   */
  export type users_storageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_storage
     */
    select?: users_storageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users_storage
     */
    omit?: users_storageOmit<ExtArgs> | null
    /**
     * The data used to update users_storages.
     */
    data: XOR<users_storageUpdateManyMutationInput, users_storageUncheckedUpdateManyInput>
    /**
     * Filter which users_storages to update
     */
    where?: users_storageWhereInput
    /**
     * Limit how many users_storages to update.
     */
    limit?: number
  }

  /**
   * users_storage upsert
   */
  export type users_storageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_storage
     */
    select?: users_storageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_storage
     */
    omit?: users_storageOmit<ExtArgs> | null
    /**
     * The filter to search for the users_storage to update in case it exists.
     */
    where: users_storageWhereUniqueInput
    /**
     * In case the users_storage found by the `where` argument doesn't exist, create a new users_storage with this data.
     */
    create: XOR<users_storageCreateInput, users_storageUncheckedCreateInput>
    /**
     * In case the users_storage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<users_storageUpdateInput, users_storageUncheckedUpdateInput>
  }

  /**
   * users_storage delete
   */
  export type users_storageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_storage
     */
    select?: users_storageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_storage
     */
    omit?: users_storageOmit<ExtArgs> | null
    /**
     * Filter which users_storage to delete.
     */
    where: users_storageWhereUniqueInput
  }

  /**
   * users_storage deleteMany
   */
  export type users_storageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users_storages to delete
     */
    where?: users_storageWhereInput
    /**
     * Limit how many users_storages to delete.
     */
    limit?: number
  }

  /**
   * users_storage without action
   */
  export type users_storageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_storage
     */
    select?: users_storageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_storage
     */
    omit?: users_storageOmit<ExtArgs> | null
  }


  /**
   * Model analytics_events
   */

  export type AggregateAnalytics_events = {
    _count: Analytics_eventsCountAggregateOutputType | null
    _avg: Analytics_eventsAvgAggregateOutputType | null
    _sum: Analytics_eventsSumAggregateOutputType | null
    _min: Analytics_eventsMinAggregateOutputType | null
    _max: Analytics_eventsMaxAggregateOutputType | null
  }

  export type Analytics_eventsAvgAggregateOutputType = {
    id: number | null
    data_source_id: number | null
  }

  export type Analytics_eventsSumAggregateOutputType = {
    id: bigint | null
    data_source_id: bigint | null
  }

  export type Analytics_eventsMinAggregateOutputType = {
    id: bigint | null
    data_source_id: bigint | null
    event_type: string | null
    timestamp: Date | null
    user_id: string | null
    session_id: string | null
    ip_address: string | null
  }

  export type Analytics_eventsMaxAggregateOutputType = {
    id: bigint | null
    data_source_id: bigint | null
    event_type: string | null
    timestamp: Date | null
    user_id: string | null
    session_id: string | null
    ip_address: string | null
  }

  export type Analytics_eventsCountAggregateOutputType = {
    id: number
    data_source_id: number
    event_type: number
    event_metadata: number
    timestamp: number
    user_id: number
    session_id: number
    ip_address: number
    _all: number
  }


  export type Analytics_eventsAvgAggregateInputType = {
    id?: true
    data_source_id?: true
  }

  export type Analytics_eventsSumAggregateInputType = {
    id?: true
    data_source_id?: true
  }

  export type Analytics_eventsMinAggregateInputType = {
    id?: true
    data_source_id?: true
    event_type?: true
    timestamp?: true
    user_id?: true
    session_id?: true
    ip_address?: true
  }

  export type Analytics_eventsMaxAggregateInputType = {
    id?: true
    data_source_id?: true
    event_type?: true
    timestamp?: true
    user_id?: true
    session_id?: true
    ip_address?: true
  }

  export type Analytics_eventsCountAggregateInputType = {
    id?: true
    data_source_id?: true
    event_type?: true
    event_metadata?: true
    timestamp?: true
    user_id?: true
    session_id?: true
    ip_address?: true
    _all?: true
  }

  export type Analytics_eventsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which analytics_events to aggregate.
     */
    where?: analytics_eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of analytics_events to fetch.
     */
    orderBy?: analytics_eventsOrderByWithRelationInput | analytics_eventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: analytics_eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` analytics_events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` analytics_events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned analytics_events
    **/
    _count?: true | Analytics_eventsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Analytics_eventsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Analytics_eventsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Analytics_eventsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Analytics_eventsMaxAggregateInputType
  }

  export type GetAnalytics_eventsAggregateType<T extends Analytics_eventsAggregateArgs> = {
        [P in keyof T & keyof AggregateAnalytics_events]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnalytics_events[P]>
      : GetScalarType<T[P], AggregateAnalytics_events[P]>
  }




  export type analytics_eventsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: analytics_eventsWhereInput
    orderBy?: analytics_eventsOrderByWithAggregationInput | analytics_eventsOrderByWithAggregationInput[]
    by: Analytics_eventsScalarFieldEnum[] | Analytics_eventsScalarFieldEnum
    having?: analytics_eventsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Analytics_eventsCountAggregateInputType | true
    _avg?: Analytics_eventsAvgAggregateInputType
    _sum?: Analytics_eventsSumAggregateInputType
    _min?: Analytics_eventsMinAggregateInputType
    _max?: Analytics_eventsMaxAggregateInputType
  }

  export type Analytics_eventsGroupByOutputType = {
    id: bigint
    data_source_id: bigint
    event_type: string
    event_metadata: JsonValue
    timestamp: Date
    user_id: string | null
    session_id: string | null
    ip_address: string | null
    _count: Analytics_eventsCountAggregateOutputType | null
    _avg: Analytics_eventsAvgAggregateOutputType | null
    _sum: Analytics_eventsSumAggregateOutputType | null
    _min: Analytics_eventsMinAggregateOutputType | null
    _max: Analytics_eventsMaxAggregateOutputType | null
  }

  type GetAnalytics_eventsGroupByPayload<T extends analytics_eventsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Analytics_eventsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Analytics_eventsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Analytics_eventsGroupByOutputType[P]>
            : GetScalarType<T[P], Analytics_eventsGroupByOutputType[P]>
        }
      >
    >


  export type analytics_eventsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data_source_id?: boolean
    event_type?: boolean
    event_metadata?: boolean
    timestamp?: boolean
    user_id?: boolean
    session_id?: boolean
    ip_address?: boolean
    data_source?: boolean | data_sourcesDefaultArgs<ExtArgs>
    user?: boolean | analytics_events$userArgs<ExtArgs>
  }, ExtArgs["result"]["analytics_events"]>

  export type analytics_eventsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data_source_id?: boolean
    event_type?: boolean
    event_metadata?: boolean
    timestamp?: boolean
    user_id?: boolean
    session_id?: boolean
    ip_address?: boolean
    data_source?: boolean | data_sourcesDefaultArgs<ExtArgs>
    user?: boolean | analytics_events$userArgs<ExtArgs>
  }, ExtArgs["result"]["analytics_events"]>

  export type analytics_eventsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data_source_id?: boolean
    event_type?: boolean
    event_metadata?: boolean
    timestamp?: boolean
    user_id?: boolean
    session_id?: boolean
    ip_address?: boolean
    data_source?: boolean | data_sourcesDefaultArgs<ExtArgs>
    user?: boolean | analytics_events$userArgs<ExtArgs>
  }, ExtArgs["result"]["analytics_events"]>

  export type analytics_eventsSelectScalar = {
    id?: boolean
    data_source_id?: boolean
    event_type?: boolean
    event_metadata?: boolean
    timestamp?: boolean
    user_id?: boolean
    session_id?: boolean
    ip_address?: boolean
  }

  export type analytics_eventsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "data_source_id" | "event_type" | "event_metadata" | "timestamp" | "user_id" | "session_id" | "ip_address", ExtArgs["result"]["analytics_events"]>
  export type analytics_eventsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    data_source?: boolean | data_sourcesDefaultArgs<ExtArgs>
    user?: boolean | analytics_events$userArgs<ExtArgs>
  }
  export type analytics_eventsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    data_source?: boolean | data_sourcesDefaultArgs<ExtArgs>
    user?: boolean | analytics_events$userArgs<ExtArgs>
  }
  export type analytics_eventsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    data_source?: boolean | data_sourcesDefaultArgs<ExtArgs>
    user?: boolean | analytics_events$userArgs<ExtArgs>
  }

  export type $analytics_eventsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "analytics_events"
    objects: {
      data_source: Prisma.$data_sourcesPayload<ExtArgs>
      user: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      data_source_id: bigint
      event_type: string
      event_metadata: Prisma.JsonValue
      timestamp: Date
      user_id: string | null
      session_id: string | null
      ip_address: string | null
    }, ExtArgs["result"]["analytics_events"]>
    composites: {}
  }

  type analytics_eventsGetPayload<S extends boolean | null | undefined | analytics_eventsDefaultArgs> = $Result.GetResult<Prisma.$analytics_eventsPayload, S>

  type analytics_eventsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<analytics_eventsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Analytics_eventsCountAggregateInputType | true
    }

  export interface analytics_eventsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['analytics_events'], meta: { name: 'analytics_events' } }
    /**
     * Find zero or one Analytics_events that matches the filter.
     * @param {analytics_eventsFindUniqueArgs} args - Arguments to find a Analytics_events
     * @example
     * // Get one Analytics_events
     * const analytics_events = await prisma.analytics_events.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends analytics_eventsFindUniqueArgs>(args: SelectSubset<T, analytics_eventsFindUniqueArgs<ExtArgs>>): Prisma__analytics_eventsClient<$Result.GetResult<Prisma.$analytics_eventsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Analytics_events that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {analytics_eventsFindUniqueOrThrowArgs} args - Arguments to find a Analytics_events
     * @example
     * // Get one Analytics_events
     * const analytics_events = await prisma.analytics_events.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends analytics_eventsFindUniqueOrThrowArgs>(args: SelectSubset<T, analytics_eventsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__analytics_eventsClient<$Result.GetResult<Prisma.$analytics_eventsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Analytics_events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {analytics_eventsFindFirstArgs} args - Arguments to find a Analytics_events
     * @example
     * // Get one Analytics_events
     * const analytics_events = await prisma.analytics_events.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends analytics_eventsFindFirstArgs>(args?: SelectSubset<T, analytics_eventsFindFirstArgs<ExtArgs>>): Prisma__analytics_eventsClient<$Result.GetResult<Prisma.$analytics_eventsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Analytics_events that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {analytics_eventsFindFirstOrThrowArgs} args - Arguments to find a Analytics_events
     * @example
     * // Get one Analytics_events
     * const analytics_events = await prisma.analytics_events.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends analytics_eventsFindFirstOrThrowArgs>(args?: SelectSubset<T, analytics_eventsFindFirstOrThrowArgs<ExtArgs>>): Prisma__analytics_eventsClient<$Result.GetResult<Prisma.$analytics_eventsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Analytics_events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {analytics_eventsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Analytics_events
     * const analytics_events = await prisma.analytics_events.findMany()
     * 
     * // Get first 10 Analytics_events
     * const analytics_events = await prisma.analytics_events.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const analytics_eventsWithIdOnly = await prisma.analytics_events.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends analytics_eventsFindManyArgs>(args?: SelectSubset<T, analytics_eventsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$analytics_eventsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Analytics_events.
     * @param {analytics_eventsCreateArgs} args - Arguments to create a Analytics_events.
     * @example
     * // Create one Analytics_events
     * const Analytics_events = await prisma.analytics_events.create({
     *   data: {
     *     // ... data to create a Analytics_events
     *   }
     * })
     * 
     */
    create<T extends analytics_eventsCreateArgs>(args: SelectSubset<T, analytics_eventsCreateArgs<ExtArgs>>): Prisma__analytics_eventsClient<$Result.GetResult<Prisma.$analytics_eventsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Analytics_events.
     * @param {analytics_eventsCreateManyArgs} args - Arguments to create many Analytics_events.
     * @example
     * // Create many Analytics_events
     * const analytics_events = await prisma.analytics_events.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends analytics_eventsCreateManyArgs>(args?: SelectSubset<T, analytics_eventsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Analytics_events and returns the data saved in the database.
     * @param {analytics_eventsCreateManyAndReturnArgs} args - Arguments to create many Analytics_events.
     * @example
     * // Create many Analytics_events
     * const analytics_events = await prisma.analytics_events.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Analytics_events and only return the `id`
     * const analytics_eventsWithIdOnly = await prisma.analytics_events.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends analytics_eventsCreateManyAndReturnArgs>(args?: SelectSubset<T, analytics_eventsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$analytics_eventsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Analytics_events.
     * @param {analytics_eventsDeleteArgs} args - Arguments to delete one Analytics_events.
     * @example
     * // Delete one Analytics_events
     * const Analytics_events = await prisma.analytics_events.delete({
     *   where: {
     *     // ... filter to delete one Analytics_events
     *   }
     * })
     * 
     */
    delete<T extends analytics_eventsDeleteArgs>(args: SelectSubset<T, analytics_eventsDeleteArgs<ExtArgs>>): Prisma__analytics_eventsClient<$Result.GetResult<Prisma.$analytics_eventsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Analytics_events.
     * @param {analytics_eventsUpdateArgs} args - Arguments to update one Analytics_events.
     * @example
     * // Update one Analytics_events
     * const analytics_events = await prisma.analytics_events.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends analytics_eventsUpdateArgs>(args: SelectSubset<T, analytics_eventsUpdateArgs<ExtArgs>>): Prisma__analytics_eventsClient<$Result.GetResult<Prisma.$analytics_eventsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Analytics_events.
     * @param {analytics_eventsDeleteManyArgs} args - Arguments to filter Analytics_events to delete.
     * @example
     * // Delete a few Analytics_events
     * const { count } = await prisma.analytics_events.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends analytics_eventsDeleteManyArgs>(args?: SelectSubset<T, analytics_eventsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Analytics_events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {analytics_eventsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Analytics_events
     * const analytics_events = await prisma.analytics_events.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends analytics_eventsUpdateManyArgs>(args: SelectSubset<T, analytics_eventsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Analytics_events and returns the data updated in the database.
     * @param {analytics_eventsUpdateManyAndReturnArgs} args - Arguments to update many Analytics_events.
     * @example
     * // Update many Analytics_events
     * const analytics_events = await prisma.analytics_events.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Analytics_events and only return the `id`
     * const analytics_eventsWithIdOnly = await prisma.analytics_events.updateManyAndReturn({
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
    updateManyAndReturn<T extends analytics_eventsUpdateManyAndReturnArgs>(args: SelectSubset<T, analytics_eventsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$analytics_eventsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Analytics_events.
     * @param {analytics_eventsUpsertArgs} args - Arguments to update or create a Analytics_events.
     * @example
     * // Update or create a Analytics_events
     * const analytics_events = await prisma.analytics_events.upsert({
     *   create: {
     *     // ... data to create a Analytics_events
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Analytics_events we want to update
     *   }
     * })
     */
    upsert<T extends analytics_eventsUpsertArgs>(args: SelectSubset<T, analytics_eventsUpsertArgs<ExtArgs>>): Prisma__analytics_eventsClient<$Result.GetResult<Prisma.$analytics_eventsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Analytics_events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {analytics_eventsCountArgs} args - Arguments to filter Analytics_events to count.
     * @example
     * // Count the number of Analytics_events
     * const count = await prisma.analytics_events.count({
     *   where: {
     *     // ... the filter for the Analytics_events we want to count
     *   }
     * })
    **/
    count<T extends analytics_eventsCountArgs>(
      args?: Subset<T, analytics_eventsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Analytics_eventsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Analytics_events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Analytics_eventsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Analytics_eventsAggregateArgs>(args: Subset<T, Analytics_eventsAggregateArgs>): Prisma.PrismaPromise<GetAnalytics_eventsAggregateType<T>>

    /**
     * Group by Analytics_events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {analytics_eventsGroupByArgs} args - Group by arguments.
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
      T extends analytics_eventsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: analytics_eventsGroupByArgs['orderBy'] }
        : { orderBy?: analytics_eventsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, analytics_eventsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnalytics_eventsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the analytics_events model
   */
  readonly fields: analytics_eventsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for analytics_events.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__analytics_eventsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    data_source<T extends data_sourcesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, data_sourcesDefaultArgs<ExtArgs>>): Prisma__data_sourcesClient<$Result.GetResult<Prisma.$data_sourcesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends analytics_events$userArgs<ExtArgs> = {}>(args?: Subset<T, analytics_events$userArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the analytics_events model
   */
  interface analytics_eventsFieldRefs {
    readonly id: FieldRef<"analytics_events", 'BigInt'>
    readonly data_source_id: FieldRef<"analytics_events", 'BigInt'>
    readonly event_type: FieldRef<"analytics_events", 'String'>
    readonly event_metadata: FieldRef<"analytics_events", 'Json'>
    readonly timestamp: FieldRef<"analytics_events", 'DateTime'>
    readonly user_id: FieldRef<"analytics_events", 'String'>
    readonly session_id: FieldRef<"analytics_events", 'String'>
    readonly ip_address: FieldRef<"analytics_events", 'String'>
  }
    

  // Custom InputTypes
  /**
   * analytics_events findUnique
   */
  export type analytics_eventsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the analytics_events
     */
    select?: analytics_eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the analytics_events
     */
    omit?: analytics_eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: analytics_eventsInclude<ExtArgs> | null
    /**
     * Filter, which analytics_events to fetch.
     */
    where: analytics_eventsWhereUniqueInput
  }

  /**
   * analytics_events findUniqueOrThrow
   */
  export type analytics_eventsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the analytics_events
     */
    select?: analytics_eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the analytics_events
     */
    omit?: analytics_eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: analytics_eventsInclude<ExtArgs> | null
    /**
     * Filter, which analytics_events to fetch.
     */
    where: analytics_eventsWhereUniqueInput
  }

  /**
   * analytics_events findFirst
   */
  export type analytics_eventsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the analytics_events
     */
    select?: analytics_eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the analytics_events
     */
    omit?: analytics_eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: analytics_eventsInclude<ExtArgs> | null
    /**
     * Filter, which analytics_events to fetch.
     */
    where?: analytics_eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of analytics_events to fetch.
     */
    orderBy?: analytics_eventsOrderByWithRelationInput | analytics_eventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for analytics_events.
     */
    cursor?: analytics_eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` analytics_events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` analytics_events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of analytics_events.
     */
    distinct?: Analytics_eventsScalarFieldEnum | Analytics_eventsScalarFieldEnum[]
  }

  /**
   * analytics_events findFirstOrThrow
   */
  export type analytics_eventsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the analytics_events
     */
    select?: analytics_eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the analytics_events
     */
    omit?: analytics_eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: analytics_eventsInclude<ExtArgs> | null
    /**
     * Filter, which analytics_events to fetch.
     */
    where?: analytics_eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of analytics_events to fetch.
     */
    orderBy?: analytics_eventsOrderByWithRelationInput | analytics_eventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for analytics_events.
     */
    cursor?: analytics_eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` analytics_events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` analytics_events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of analytics_events.
     */
    distinct?: Analytics_eventsScalarFieldEnum | Analytics_eventsScalarFieldEnum[]
  }

  /**
   * analytics_events findMany
   */
  export type analytics_eventsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the analytics_events
     */
    select?: analytics_eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the analytics_events
     */
    omit?: analytics_eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: analytics_eventsInclude<ExtArgs> | null
    /**
     * Filter, which analytics_events to fetch.
     */
    where?: analytics_eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of analytics_events to fetch.
     */
    orderBy?: analytics_eventsOrderByWithRelationInput | analytics_eventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing analytics_events.
     */
    cursor?: analytics_eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` analytics_events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` analytics_events.
     */
    skip?: number
    distinct?: Analytics_eventsScalarFieldEnum | Analytics_eventsScalarFieldEnum[]
  }

  /**
   * analytics_events create
   */
  export type analytics_eventsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the analytics_events
     */
    select?: analytics_eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the analytics_events
     */
    omit?: analytics_eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: analytics_eventsInclude<ExtArgs> | null
    /**
     * The data needed to create a analytics_events.
     */
    data: XOR<analytics_eventsCreateInput, analytics_eventsUncheckedCreateInput>
  }

  /**
   * analytics_events createMany
   */
  export type analytics_eventsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many analytics_events.
     */
    data: analytics_eventsCreateManyInput | analytics_eventsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * analytics_events createManyAndReturn
   */
  export type analytics_eventsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the analytics_events
     */
    select?: analytics_eventsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the analytics_events
     */
    omit?: analytics_eventsOmit<ExtArgs> | null
    /**
     * The data used to create many analytics_events.
     */
    data: analytics_eventsCreateManyInput | analytics_eventsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: analytics_eventsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * analytics_events update
   */
  export type analytics_eventsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the analytics_events
     */
    select?: analytics_eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the analytics_events
     */
    omit?: analytics_eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: analytics_eventsInclude<ExtArgs> | null
    /**
     * The data needed to update a analytics_events.
     */
    data: XOR<analytics_eventsUpdateInput, analytics_eventsUncheckedUpdateInput>
    /**
     * Choose, which analytics_events to update.
     */
    where: analytics_eventsWhereUniqueInput
  }

  /**
   * analytics_events updateMany
   */
  export type analytics_eventsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update analytics_events.
     */
    data: XOR<analytics_eventsUpdateManyMutationInput, analytics_eventsUncheckedUpdateManyInput>
    /**
     * Filter which analytics_events to update
     */
    where?: analytics_eventsWhereInput
    /**
     * Limit how many analytics_events to update.
     */
    limit?: number
  }

  /**
   * analytics_events updateManyAndReturn
   */
  export type analytics_eventsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the analytics_events
     */
    select?: analytics_eventsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the analytics_events
     */
    omit?: analytics_eventsOmit<ExtArgs> | null
    /**
     * The data used to update analytics_events.
     */
    data: XOR<analytics_eventsUpdateManyMutationInput, analytics_eventsUncheckedUpdateManyInput>
    /**
     * Filter which analytics_events to update
     */
    where?: analytics_eventsWhereInput
    /**
     * Limit how many analytics_events to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: analytics_eventsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * analytics_events upsert
   */
  export type analytics_eventsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the analytics_events
     */
    select?: analytics_eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the analytics_events
     */
    omit?: analytics_eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: analytics_eventsInclude<ExtArgs> | null
    /**
     * The filter to search for the analytics_events to update in case it exists.
     */
    where: analytics_eventsWhereUniqueInput
    /**
     * In case the analytics_events found by the `where` argument doesn't exist, create a new analytics_events with this data.
     */
    create: XOR<analytics_eventsCreateInput, analytics_eventsUncheckedCreateInput>
    /**
     * In case the analytics_events was found with the provided `where` argument, update it with this data.
     */
    update: XOR<analytics_eventsUpdateInput, analytics_eventsUncheckedUpdateInput>
  }

  /**
   * analytics_events delete
   */
  export type analytics_eventsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the analytics_events
     */
    select?: analytics_eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the analytics_events
     */
    omit?: analytics_eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: analytics_eventsInclude<ExtArgs> | null
    /**
     * Filter which analytics_events to delete.
     */
    where: analytics_eventsWhereUniqueInput
  }

  /**
   * analytics_events deleteMany
   */
  export type analytics_eventsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which analytics_events to delete
     */
    where?: analytics_eventsWhereInput
    /**
     * Limit how many analytics_events to delete.
     */
    limit?: number
  }

  /**
   * analytics_events.user
   */
  export type analytics_events$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * analytics_events without action
   */
  export type analytics_eventsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the analytics_events
     */
    select?: analytics_eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the analytics_events
     */
    omit?: analytics_eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: analytics_eventsInclude<ExtArgs> | null
  }


  /**
   * Model csvdata
   */

  export type AggregateCsvdata = {
    _count: CsvdataCountAggregateOutputType | null
    _avg: CsvdataAvgAggregateOutputType | null
    _sum: CsvdataSumAggregateOutputType | null
    _min: CsvdataMinAggregateOutputType | null
    _max: CsvdataMaxAggregateOutputType | null
  }

  export type CsvdataAvgAggregateOutputType = {
    id: number | null
    file_size_bytes: number | null
    row_count: number | null
    column_count: number | null
  }

  export type CsvdataSumAggregateOutputType = {
    id: bigint | null
    file_size_bytes: bigint | null
    row_count: number | null
    column_count: number | null
  }

  export type CsvdataMinAggregateOutputType = {
    id: bigint | null
    user_id: string | null
    bucket_name: string | null
    file_name: string | null
    createdat: Date | null
    updatedat: Date | null
    connection_name: string | null
    file_size_bytes: bigint | null
    row_count: number | null
    column_count: number | null
    processing_status: string | null
    error_message: string | null
    checksum: string | null
  }

  export type CsvdataMaxAggregateOutputType = {
    id: bigint | null
    user_id: string | null
    bucket_name: string | null
    file_name: string | null
    createdat: Date | null
    updatedat: Date | null
    connection_name: string | null
    file_size_bytes: bigint | null
    row_count: number | null
    column_count: number | null
    processing_status: string | null
    error_message: string | null
    checksum: string | null
  }

  export type CsvdataCountAggregateOutputType = {
    id: number
    user_id: number
    bucket_name: number
    file_name: number
    selectedfields: number
    createdat: number
    updatedat: number
    connection_name: number
    file_size_bytes: number
    row_count: number
    column_count: number
    data_schema: number
    processing_status: number
    error_message: number
    checksum: number
    _all: number
  }


  export type CsvdataAvgAggregateInputType = {
    id?: true
    file_size_bytes?: true
    row_count?: true
    column_count?: true
  }

  export type CsvdataSumAggregateInputType = {
    id?: true
    file_size_bytes?: true
    row_count?: true
    column_count?: true
  }

  export type CsvdataMinAggregateInputType = {
    id?: true
    user_id?: true
    bucket_name?: true
    file_name?: true
    createdat?: true
    updatedat?: true
    connection_name?: true
    file_size_bytes?: true
    row_count?: true
    column_count?: true
    processing_status?: true
    error_message?: true
    checksum?: true
  }

  export type CsvdataMaxAggregateInputType = {
    id?: true
    user_id?: true
    bucket_name?: true
    file_name?: true
    createdat?: true
    updatedat?: true
    connection_name?: true
    file_size_bytes?: true
    row_count?: true
    column_count?: true
    processing_status?: true
    error_message?: true
    checksum?: true
  }

  export type CsvdataCountAggregateInputType = {
    id?: true
    user_id?: true
    bucket_name?: true
    file_name?: true
    selectedfields?: true
    createdat?: true
    updatedat?: true
    connection_name?: true
    file_size_bytes?: true
    row_count?: true
    column_count?: true
    data_schema?: true
    processing_status?: true
    error_message?: true
    checksum?: true
    _all?: true
  }

  export type CsvdataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which csvdata to aggregate.
     */
    where?: csvdataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of csvdata to fetch.
     */
    orderBy?: csvdataOrderByWithRelationInput | csvdataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: csvdataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` csvdata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` csvdata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned csvdata
    **/
    _count?: true | CsvdataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CsvdataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CsvdataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CsvdataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CsvdataMaxAggregateInputType
  }

  export type GetCsvdataAggregateType<T extends CsvdataAggregateArgs> = {
        [P in keyof T & keyof AggregateCsvdata]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCsvdata[P]>
      : GetScalarType<T[P], AggregateCsvdata[P]>
  }




  export type csvdataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: csvdataWhereInput
    orderBy?: csvdataOrderByWithAggregationInput | csvdataOrderByWithAggregationInput[]
    by: CsvdataScalarFieldEnum[] | CsvdataScalarFieldEnum
    having?: csvdataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CsvdataCountAggregateInputType | true
    _avg?: CsvdataAvgAggregateInputType
    _sum?: CsvdataSumAggregateInputType
    _min?: CsvdataMinAggregateInputType
    _max?: CsvdataMaxAggregateInputType
  }

  export type CsvdataGroupByOutputType = {
    id: bigint
    user_id: string | null
    bucket_name: string | null
    file_name: string | null
    selectedfields: string[]
    createdat: Date | null
    updatedat: Date | null
    connection_name: string | null
    file_size_bytes: bigint | null
    row_count: number | null
    column_count: number | null
    data_schema: JsonValue | null
    processing_status: string | null
    error_message: string | null
    checksum: string | null
    _count: CsvdataCountAggregateOutputType | null
    _avg: CsvdataAvgAggregateOutputType | null
    _sum: CsvdataSumAggregateOutputType | null
    _min: CsvdataMinAggregateOutputType | null
    _max: CsvdataMaxAggregateOutputType | null
  }

  type GetCsvdataGroupByPayload<T extends csvdataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CsvdataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CsvdataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CsvdataGroupByOutputType[P]>
            : GetScalarType<T[P], CsvdataGroupByOutputType[P]>
        }
      >
    >


  export type csvdataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    bucket_name?: boolean
    file_name?: boolean
    selectedfields?: boolean
    createdat?: boolean
    updatedat?: boolean
    connection_name?: boolean
    file_size_bytes?: boolean
    row_count?: boolean
    column_count?: boolean
    data_schema?: boolean
    processing_status?: boolean
    error_message?: boolean
    checksum?: boolean
    users?: boolean | csvdata$usersArgs<ExtArgs>
    data_sources?: boolean | csvdata$data_sourcesArgs<ExtArgs>
    _count?: boolean | CsvdataCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["csvdata"]>

  export type csvdataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    bucket_name?: boolean
    file_name?: boolean
    selectedfields?: boolean
    createdat?: boolean
    updatedat?: boolean
    connection_name?: boolean
    file_size_bytes?: boolean
    row_count?: boolean
    column_count?: boolean
    data_schema?: boolean
    processing_status?: boolean
    error_message?: boolean
    checksum?: boolean
    users?: boolean | csvdata$usersArgs<ExtArgs>
  }, ExtArgs["result"]["csvdata"]>

  export type csvdataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    bucket_name?: boolean
    file_name?: boolean
    selectedfields?: boolean
    createdat?: boolean
    updatedat?: boolean
    connection_name?: boolean
    file_size_bytes?: boolean
    row_count?: boolean
    column_count?: boolean
    data_schema?: boolean
    processing_status?: boolean
    error_message?: boolean
    checksum?: boolean
    users?: boolean | csvdata$usersArgs<ExtArgs>
  }, ExtArgs["result"]["csvdata"]>

  export type csvdataSelectScalar = {
    id?: boolean
    user_id?: boolean
    bucket_name?: boolean
    file_name?: boolean
    selectedfields?: boolean
    createdat?: boolean
    updatedat?: boolean
    connection_name?: boolean
    file_size_bytes?: boolean
    row_count?: boolean
    column_count?: boolean
    data_schema?: boolean
    processing_status?: boolean
    error_message?: boolean
    checksum?: boolean
  }

  export type csvdataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "bucket_name" | "file_name" | "selectedfields" | "createdat" | "updatedat" | "connection_name" | "file_size_bytes" | "row_count" | "column_count" | "data_schema" | "processing_status" | "error_message" | "checksum", ExtArgs["result"]["csvdata"]>
  export type csvdataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | csvdata$usersArgs<ExtArgs>
    data_sources?: boolean | csvdata$data_sourcesArgs<ExtArgs>
    _count?: boolean | CsvdataCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type csvdataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | csvdata$usersArgs<ExtArgs>
  }
  export type csvdataIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | csvdata$usersArgs<ExtArgs>
  }

  export type $csvdataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "csvdata"
    objects: {
      users: Prisma.$usersPayload<ExtArgs> | null
      data_sources: Prisma.$data_sourcesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      user_id: string | null
      bucket_name: string | null
      file_name: string | null
      selectedfields: string[]
      createdat: Date | null
      updatedat: Date | null
      connection_name: string | null
      file_size_bytes: bigint | null
      row_count: number | null
      column_count: number | null
      data_schema: Prisma.JsonValue | null
      processing_status: string | null
      error_message: string | null
      checksum: string | null
    }, ExtArgs["result"]["csvdata"]>
    composites: {}
  }

  type csvdataGetPayload<S extends boolean | null | undefined | csvdataDefaultArgs> = $Result.GetResult<Prisma.$csvdataPayload, S>

  type csvdataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<csvdataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CsvdataCountAggregateInputType | true
    }

  export interface csvdataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['csvdata'], meta: { name: 'csvdata' } }
    /**
     * Find zero or one Csvdata that matches the filter.
     * @param {csvdataFindUniqueArgs} args - Arguments to find a Csvdata
     * @example
     * // Get one Csvdata
     * const csvdata = await prisma.csvdata.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends csvdataFindUniqueArgs>(args: SelectSubset<T, csvdataFindUniqueArgs<ExtArgs>>): Prisma__csvdataClient<$Result.GetResult<Prisma.$csvdataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Csvdata that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {csvdataFindUniqueOrThrowArgs} args - Arguments to find a Csvdata
     * @example
     * // Get one Csvdata
     * const csvdata = await prisma.csvdata.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends csvdataFindUniqueOrThrowArgs>(args: SelectSubset<T, csvdataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__csvdataClient<$Result.GetResult<Prisma.$csvdataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Csvdata that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {csvdataFindFirstArgs} args - Arguments to find a Csvdata
     * @example
     * // Get one Csvdata
     * const csvdata = await prisma.csvdata.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends csvdataFindFirstArgs>(args?: SelectSubset<T, csvdataFindFirstArgs<ExtArgs>>): Prisma__csvdataClient<$Result.GetResult<Prisma.$csvdataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Csvdata that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {csvdataFindFirstOrThrowArgs} args - Arguments to find a Csvdata
     * @example
     * // Get one Csvdata
     * const csvdata = await prisma.csvdata.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends csvdataFindFirstOrThrowArgs>(args?: SelectSubset<T, csvdataFindFirstOrThrowArgs<ExtArgs>>): Prisma__csvdataClient<$Result.GetResult<Prisma.$csvdataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Csvdata that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {csvdataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Csvdata
     * const csvdata = await prisma.csvdata.findMany()
     * 
     * // Get first 10 Csvdata
     * const csvdata = await prisma.csvdata.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const csvdataWithIdOnly = await prisma.csvdata.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends csvdataFindManyArgs>(args?: SelectSubset<T, csvdataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$csvdataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Csvdata.
     * @param {csvdataCreateArgs} args - Arguments to create a Csvdata.
     * @example
     * // Create one Csvdata
     * const Csvdata = await prisma.csvdata.create({
     *   data: {
     *     // ... data to create a Csvdata
     *   }
     * })
     * 
     */
    create<T extends csvdataCreateArgs>(args: SelectSubset<T, csvdataCreateArgs<ExtArgs>>): Prisma__csvdataClient<$Result.GetResult<Prisma.$csvdataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Csvdata.
     * @param {csvdataCreateManyArgs} args - Arguments to create many Csvdata.
     * @example
     * // Create many Csvdata
     * const csvdata = await prisma.csvdata.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends csvdataCreateManyArgs>(args?: SelectSubset<T, csvdataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Csvdata and returns the data saved in the database.
     * @param {csvdataCreateManyAndReturnArgs} args - Arguments to create many Csvdata.
     * @example
     * // Create many Csvdata
     * const csvdata = await prisma.csvdata.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Csvdata and only return the `id`
     * const csvdataWithIdOnly = await prisma.csvdata.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends csvdataCreateManyAndReturnArgs>(args?: SelectSubset<T, csvdataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$csvdataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Csvdata.
     * @param {csvdataDeleteArgs} args - Arguments to delete one Csvdata.
     * @example
     * // Delete one Csvdata
     * const Csvdata = await prisma.csvdata.delete({
     *   where: {
     *     // ... filter to delete one Csvdata
     *   }
     * })
     * 
     */
    delete<T extends csvdataDeleteArgs>(args: SelectSubset<T, csvdataDeleteArgs<ExtArgs>>): Prisma__csvdataClient<$Result.GetResult<Prisma.$csvdataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Csvdata.
     * @param {csvdataUpdateArgs} args - Arguments to update one Csvdata.
     * @example
     * // Update one Csvdata
     * const csvdata = await prisma.csvdata.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends csvdataUpdateArgs>(args: SelectSubset<T, csvdataUpdateArgs<ExtArgs>>): Prisma__csvdataClient<$Result.GetResult<Prisma.$csvdataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Csvdata.
     * @param {csvdataDeleteManyArgs} args - Arguments to filter Csvdata to delete.
     * @example
     * // Delete a few Csvdata
     * const { count } = await prisma.csvdata.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends csvdataDeleteManyArgs>(args?: SelectSubset<T, csvdataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Csvdata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {csvdataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Csvdata
     * const csvdata = await prisma.csvdata.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends csvdataUpdateManyArgs>(args: SelectSubset<T, csvdataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Csvdata and returns the data updated in the database.
     * @param {csvdataUpdateManyAndReturnArgs} args - Arguments to update many Csvdata.
     * @example
     * // Update many Csvdata
     * const csvdata = await prisma.csvdata.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Csvdata and only return the `id`
     * const csvdataWithIdOnly = await prisma.csvdata.updateManyAndReturn({
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
    updateManyAndReturn<T extends csvdataUpdateManyAndReturnArgs>(args: SelectSubset<T, csvdataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$csvdataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Csvdata.
     * @param {csvdataUpsertArgs} args - Arguments to update or create a Csvdata.
     * @example
     * // Update or create a Csvdata
     * const csvdata = await prisma.csvdata.upsert({
     *   create: {
     *     // ... data to create a Csvdata
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Csvdata we want to update
     *   }
     * })
     */
    upsert<T extends csvdataUpsertArgs>(args: SelectSubset<T, csvdataUpsertArgs<ExtArgs>>): Prisma__csvdataClient<$Result.GetResult<Prisma.$csvdataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Csvdata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {csvdataCountArgs} args - Arguments to filter Csvdata to count.
     * @example
     * // Count the number of Csvdata
     * const count = await prisma.csvdata.count({
     *   where: {
     *     // ... the filter for the Csvdata we want to count
     *   }
     * })
    **/
    count<T extends csvdataCountArgs>(
      args?: Subset<T, csvdataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CsvdataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Csvdata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CsvdataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CsvdataAggregateArgs>(args: Subset<T, CsvdataAggregateArgs>): Prisma.PrismaPromise<GetCsvdataAggregateType<T>>

    /**
     * Group by Csvdata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {csvdataGroupByArgs} args - Group by arguments.
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
      T extends csvdataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: csvdataGroupByArgs['orderBy'] }
        : { orderBy?: csvdataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, csvdataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCsvdataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the csvdata model
   */
  readonly fields: csvdataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for csvdata.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__csvdataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends csvdata$usersArgs<ExtArgs> = {}>(args?: Subset<T, csvdata$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    data_sources<T extends csvdata$data_sourcesArgs<ExtArgs> = {}>(args?: Subset<T, csvdata$data_sourcesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$data_sourcesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the csvdata model
   */
  interface csvdataFieldRefs {
    readonly id: FieldRef<"csvdata", 'BigInt'>
    readonly user_id: FieldRef<"csvdata", 'String'>
    readonly bucket_name: FieldRef<"csvdata", 'String'>
    readonly file_name: FieldRef<"csvdata", 'String'>
    readonly selectedfields: FieldRef<"csvdata", 'String[]'>
    readonly createdat: FieldRef<"csvdata", 'DateTime'>
    readonly updatedat: FieldRef<"csvdata", 'DateTime'>
    readonly connection_name: FieldRef<"csvdata", 'String'>
    readonly file_size_bytes: FieldRef<"csvdata", 'BigInt'>
    readonly row_count: FieldRef<"csvdata", 'Int'>
    readonly column_count: FieldRef<"csvdata", 'Int'>
    readonly data_schema: FieldRef<"csvdata", 'Json'>
    readonly processing_status: FieldRef<"csvdata", 'String'>
    readonly error_message: FieldRef<"csvdata", 'String'>
    readonly checksum: FieldRef<"csvdata", 'String'>
  }
    

  // Custom InputTypes
  /**
   * csvdata findUnique
   */
  export type csvdataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the csvdata
     */
    select?: csvdataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the csvdata
     */
    omit?: csvdataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: csvdataInclude<ExtArgs> | null
    /**
     * Filter, which csvdata to fetch.
     */
    where: csvdataWhereUniqueInput
  }

  /**
   * csvdata findUniqueOrThrow
   */
  export type csvdataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the csvdata
     */
    select?: csvdataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the csvdata
     */
    omit?: csvdataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: csvdataInclude<ExtArgs> | null
    /**
     * Filter, which csvdata to fetch.
     */
    where: csvdataWhereUniqueInput
  }

  /**
   * csvdata findFirst
   */
  export type csvdataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the csvdata
     */
    select?: csvdataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the csvdata
     */
    omit?: csvdataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: csvdataInclude<ExtArgs> | null
    /**
     * Filter, which csvdata to fetch.
     */
    where?: csvdataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of csvdata to fetch.
     */
    orderBy?: csvdataOrderByWithRelationInput | csvdataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for csvdata.
     */
    cursor?: csvdataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` csvdata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` csvdata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of csvdata.
     */
    distinct?: CsvdataScalarFieldEnum | CsvdataScalarFieldEnum[]
  }

  /**
   * csvdata findFirstOrThrow
   */
  export type csvdataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the csvdata
     */
    select?: csvdataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the csvdata
     */
    omit?: csvdataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: csvdataInclude<ExtArgs> | null
    /**
     * Filter, which csvdata to fetch.
     */
    where?: csvdataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of csvdata to fetch.
     */
    orderBy?: csvdataOrderByWithRelationInput | csvdataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for csvdata.
     */
    cursor?: csvdataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` csvdata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` csvdata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of csvdata.
     */
    distinct?: CsvdataScalarFieldEnum | CsvdataScalarFieldEnum[]
  }

  /**
   * csvdata findMany
   */
  export type csvdataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the csvdata
     */
    select?: csvdataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the csvdata
     */
    omit?: csvdataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: csvdataInclude<ExtArgs> | null
    /**
     * Filter, which csvdata to fetch.
     */
    where?: csvdataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of csvdata to fetch.
     */
    orderBy?: csvdataOrderByWithRelationInput | csvdataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing csvdata.
     */
    cursor?: csvdataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` csvdata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` csvdata.
     */
    skip?: number
    distinct?: CsvdataScalarFieldEnum | CsvdataScalarFieldEnum[]
  }

  /**
   * csvdata create
   */
  export type csvdataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the csvdata
     */
    select?: csvdataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the csvdata
     */
    omit?: csvdataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: csvdataInclude<ExtArgs> | null
    /**
     * The data needed to create a csvdata.
     */
    data?: XOR<csvdataCreateInput, csvdataUncheckedCreateInput>
  }

  /**
   * csvdata createMany
   */
  export type csvdataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many csvdata.
     */
    data: csvdataCreateManyInput | csvdataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * csvdata createManyAndReturn
   */
  export type csvdataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the csvdata
     */
    select?: csvdataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the csvdata
     */
    omit?: csvdataOmit<ExtArgs> | null
    /**
     * The data used to create many csvdata.
     */
    data: csvdataCreateManyInput | csvdataCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: csvdataIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * csvdata update
   */
  export type csvdataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the csvdata
     */
    select?: csvdataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the csvdata
     */
    omit?: csvdataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: csvdataInclude<ExtArgs> | null
    /**
     * The data needed to update a csvdata.
     */
    data: XOR<csvdataUpdateInput, csvdataUncheckedUpdateInput>
    /**
     * Choose, which csvdata to update.
     */
    where: csvdataWhereUniqueInput
  }

  /**
   * csvdata updateMany
   */
  export type csvdataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update csvdata.
     */
    data: XOR<csvdataUpdateManyMutationInput, csvdataUncheckedUpdateManyInput>
    /**
     * Filter which csvdata to update
     */
    where?: csvdataWhereInput
    /**
     * Limit how many csvdata to update.
     */
    limit?: number
  }

  /**
   * csvdata updateManyAndReturn
   */
  export type csvdataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the csvdata
     */
    select?: csvdataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the csvdata
     */
    omit?: csvdataOmit<ExtArgs> | null
    /**
     * The data used to update csvdata.
     */
    data: XOR<csvdataUpdateManyMutationInput, csvdataUncheckedUpdateManyInput>
    /**
     * Filter which csvdata to update
     */
    where?: csvdataWhereInput
    /**
     * Limit how many csvdata to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: csvdataIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * csvdata upsert
   */
  export type csvdataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the csvdata
     */
    select?: csvdataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the csvdata
     */
    omit?: csvdataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: csvdataInclude<ExtArgs> | null
    /**
     * The filter to search for the csvdata to update in case it exists.
     */
    where: csvdataWhereUniqueInput
    /**
     * In case the csvdata found by the `where` argument doesn't exist, create a new csvdata with this data.
     */
    create: XOR<csvdataCreateInput, csvdataUncheckedCreateInput>
    /**
     * In case the csvdata was found with the provided `where` argument, update it with this data.
     */
    update: XOR<csvdataUpdateInput, csvdataUncheckedUpdateInput>
  }

  /**
   * csvdata delete
   */
  export type csvdataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the csvdata
     */
    select?: csvdataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the csvdata
     */
    omit?: csvdataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: csvdataInclude<ExtArgs> | null
    /**
     * Filter which csvdata to delete.
     */
    where: csvdataWhereUniqueInput
  }

  /**
   * csvdata deleteMany
   */
  export type csvdataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which csvdata to delete
     */
    where?: csvdataWhereInput
    /**
     * Limit how many csvdata to delete.
     */
    limit?: number
  }

  /**
   * csvdata.users
   */
  export type csvdata$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * csvdata.data_sources
   */
  export type csvdata$data_sourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data_sources
     */
    select?: data_sourcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the data_sources
     */
    omit?: data_sourcesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: data_sourcesInclude<ExtArgs> | null
    where?: data_sourcesWhereInput
    orderBy?: data_sourcesOrderByWithRelationInput | data_sourcesOrderByWithRelationInput[]
    cursor?: data_sourcesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Data_sourcesScalarFieldEnum | Data_sourcesScalarFieldEnum[]
  }

  /**
   * csvdata without action
   */
  export type csvdataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the csvdata
     */
    select?: csvdataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the csvdata
     */
    omit?: csvdataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: csvdataInclude<ExtArgs> | null
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


  export const UsersScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    attributes: 'attributes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const Api_connectionsScalarFieldEnum: {
    id: 'id',
    connection_name: 'connection_name',
    api_url: 'api_url',
    api_key: 'api_key',
    headers: 'headers',
    user_id: 'user_id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    database_connection_id: 'database_connection_id',
    table_name: 'table_name'
  };

  export type Api_connectionsScalarFieldEnum = (typeof Api_connectionsScalarFieldEnum)[keyof typeof Api_connectionsScalarFieldEnum]


  export const CsvDataScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    bucket_name: 'bucket_name',
    file_name: 'file_name',
    selectedFields: 'selectedFields',
    createdat: 'createdat',
    updatedat: 'updatedat',
    connection_name: 'connection_name'
  };

  export type CsvDataScalarFieldEnum = (typeof CsvDataScalarFieldEnum)[keyof typeof CsvDataScalarFieldEnum]


  export const DashboardsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    user_id: 'user_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    widget_details: 'widget_details',
    layout: 'layout',
    custom_settings: 'custom_settings',
    type: 'type'
  };

  export type DashboardsScalarFieldEnum = (typeof DashboardsScalarFieldEnum)[keyof typeof DashboardsScalarFieldEnum]


  export const Database_connectionsScalarFieldEnum: {
    id: 'id',
    connection_name: 'connection_name',
    database_name: 'database_name',
    database_type: 'database_type',
    host: 'host',
    port: 'port',
    username: 'username',
    password: 'password',
    user_id: 'user_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Database_connectionsScalarFieldEnum = (typeof Database_connectionsScalarFieldEnum)[keyof typeof Database_connectionsScalarFieldEnum]


  export const DatasetsScalarFieldEnum: {
    id: 'id',
    dataset_name: 'dataset_name',
    dataset_description: 'dataset_description',
    sql_query: 'sql_query',
    connection_id: 'connection_id',
    user_id: 'user_id',
    visualization_type: 'visualization_type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    selectedField: 'selectedField',
    x_axis: 'x_axis',
    y_axis: 'y_axis',
    issample: 'issample',
    is_stacked: 'is_stacked',
    api_id: 'api_id',
    csv_id: 'csv_id',
    filters: 'filters',
    table_name: 'table_name',
    selectedAggregate: 'selectedAggregate',
    selectedGroupByValues: 'selectedGroupByValues',
    selectedDateBy: 'selectedDateBy'
  };

  export type DatasetsScalarFieldEnum = (typeof DatasetsScalarFieldEnum)[keyof typeof DatasetsScalarFieldEnum]


  export const Data_sourcesScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    source_name: 'source_name',
    source_type: 'source_type',
    database_name: 'database_name',
    table_name: 'table_name',
    database_connection_id: 'database_connection_id',
    csv_data_id: 'csv_data_id',
    api_connection_id: 'api_connection_id',
    row_count: 'row_count',
    column_count: 'column_count',
    data_schema: 'data_schema',
    last_updated: 'last_updated',
    cache_key: 'cache_key',
    partition_info: 'partition_info',
    index_info: 'index_info',
    avg_query_time_ms: 'avg_query_time_ms',
    total_queries: 'total_queries',
    last_accessed: 'last_accessed',
    data_quality_score: 'data_quality_score',
    null_percentage: 'null_percentage',
    duplicate_count: 'duplicate_count'
  };

  export type Data_sourcesScalarFieldEnum = (typeof Data_sourcesScalarFieldEnum)[keyof typeof Data_sourcesScalarFieldEnum]


  export const Users_storageScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    bucket_name: 'bucket_name',
    createdat: 'createdat',
    updatedat: 'updatedat'
  };

  export type Users_storageScalarFieldEnum = (typeof Users_storageScalarFieldEnum)[keyof typeof Users_storageScalarFieldEnum]


  export const Analytics_eventsScalarFieldEnum: {
    id: 'id',
    data_source_id: 'data_source_id',
    event_type: 'event_type',
    event_metadata: 'event_metadata',
    timestamp: 'timestamp',
    user_id: 'user_id',
    session_id: 'session_id',
    ip_address: 'ip_address'
  };

  export type Analytics_eventsScalarFieldEnum = (typeof Analytics_eventsScalarFieldEnum)[keyof typeof Analytics_eventsScalarFieldEnum]


  export const CsvdataScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    bucket_name: 'bucket_name',
    file_name: 'file_name',
    selectedfields: 'selectedfields',
    createdat: 'createdat',
    updatedat: 'updatedat',
    connection_name: 'connection_name',
    file_size_bytes: 'file_size_bytes',
    row_count: 'row_count',
    column_count: 'column_count',
    data_schema: 'data_schema',
    processing_status: 'processing_status',
    error_message: 'error_message',
    checksum: 'checksum'
  };

  export type CsvdataScalarFieldEnum = (typeof CsvdataScalarFieldEnum)[keyof typeof CsvdataScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    user_id?: StringFilter<"users"> | string
    attributes?: JsonFilter<"users">
    createdAt?: DateTimeFilter<"users"> | Date | string
    updatedAt?: DateTimeFilter<"users"> | Date | string
    csvdata?: CsvdataListRelationFilter
    data_sources?: Data_sourcesListRelationFilter
    connections?: Database_connectionsListRelationFilter
    datasets?: DatasetsListRelationFilter
    analytics_events?: Analytics_eventsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    attributes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    csvdata?: csvdataOrderByRelationAggregateInput
    data_sources?: data_sourcesOrderByRelationAggregateInput
    connections?: database_connectionsOrderByRelationAggregateInput
    datasets?: datasetsOrderByRelationAggregateInput
    analytics_events?: analytics_eventsOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    user_id?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    attributes?: JsonFilter<"users">
    createdAt?: DateTimeFilter<"users"> | Date | string
    updatedAt?: DateTimeFilter<"users"> | Date | string
    csvdata?: CsvdataListRelationFilter
    data_sources?: Data_sourcesListRelationFilter
    connections?: Database_connectionsListRelationFilter
    datasets?: DatasetsListRelationFilter
    analytics_events?: Analytics_eventsListRelationFilter
  }, "id" | "user_id">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    attributes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    user_id?: StringWithAggregatesFilter<"users"> | string
    attributes?: JsonWithAggregatesFilter<"users">
    createdAt?: DateTimeWithAggregatesFilter<"users"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"users"> | Date | string
  }

  export type api_connectionsWhereInput = {
    AND?: api_connectionsWhereInput | api_connectionsWhereInput[]
    OR?: api_connectionsWhereInput[]
    NOT?: api_connectionsWhereInput | api_connectionsWhereInput[]
    id?: IntFilter<"api_connections"> | number
    connection_name?: StringFilter<"api_connections"> | string
    api_url?: StringFilter<"api_connections"> | string
    api_key?: StringNullableFilter<"api_connections"> | string | null
    headers?: JsonNullableFilter<"api_connections">
    user_id?: StringFilter<"api_connections"> | string
    created_at?: DateTimeFilter<"api_connections"> | Date | string
    updated_at?: DateTimeFilter<"api_connections"> | Date | string
    database_connection_id?: IntNullableFilter<"api_connections"> | number | null
    table_name?: StringNullableFilter<"api_connections"> | string | null
    connection?: XOR<Database_connectionsNullableScalarRelationFilter, database_connectionsWhereInput> | null
    data_sources?: Data_sourcesListRelationFilter
  }

  export type api_connectionsOrderByWithRelationInput = {
    id?: SortOrder
    connection_name?: SortOrder
    api_url?: SortOrder
    api_key?: SortOrderInput | SortOrder
    headers?: SortOrderInput | SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    database_connection_id?: SortOrderInput | SortOrder
    table_name?: SortOrderInput | SortOrder
    connection?: database_connectionsOrderByWithRelationInput
    data_sources?: data_sourcesOrderByRelationAggregateInput
  }

  export type api_connectionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: api_connectionsWhereInput | api_connectionsWhereInput[]
    OR?: api_connectionsWhereInput[]
    NOT?: api_connectionsWhereInput | api_connectionsWhereInput[]
    connection_name?: StringFilter<"api_connections"> | string
    api_url?: StringFilter<"api_connections"> | string
    api_key?: StringNullableFilter<"api_connections"> | string | null
    headers?: JsonNullableFilter<"api_connections">
    user_id?: StringFilter<"api_connections"> | string
    created_at?: DateTimeFilter<"api_connections"> | Date | string
    updated_at?: DateTimeFilter<"api_connections"> | Date | string
    database_connection_id?: IntNullableFilter<"api_connections"> | number | null
    table_name?: StringNullableFilter<"api_connections"> | string | null
    connection?: XOR<Database_connectionsNullableScalarRelationFilter, database_connectionsWhereInput> | null
    data_sources?: Data_sourcesListRelationFilter
  }, "id">

  export type api_connectionsOrderByWithAggregationInput = {
    id?: SortOrder
    connection_name?: SortOrder
    api_url?: SortOrder
    api_key?: SortOrderInput | SortOrder
    headers?: SortOrderInput | SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    database_connection_id?: SortOrderInput | SortOrder
    table_name?: SortOrderInput | SortOrder
    _count?: api_connectionsCountOrderByAggregateInput
    _avg?: api_connectionsAvgOrderByAggregateInput
    _max?: api_connectionsMaxOrderByAggregateInput
    _min?: api_connectionsMinOrderByAggregateInput
    _sum?: api_connectionsSumOrderByAggregateInput
  }

  export type api_connectionsScalarWhereWithAggregatesInput = {
    AND?: api_connectionsScalarWhereWithAggregatesInput | api_connectionsScalarWhereWithAggregatesInput[]
    OR?: api_connectionsScalarWhereWithAggregatesInput[]
    NOT?: api_connectionsScalarWhereWithAggregatesInput | api_connectionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"api_connections"> | number
    connection_name?: StringWithAggregatesFilter<"api_connections"> | string
    api_url?: StringWithAggregatesFilter<"api_connections"> | string
    api_key?: StringNullableWithAggregatesFilter<"api_connections"> | string | null
    headers?: JsonNullableWithAggregatesFilter<"api_connections">
    user_id?: StringWithAggregatesFilter<"api_connections"> | string
    created_at?: DateTimeWithAggregatesFilter<"api_connections"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"api_connections"> | Date | string
    database_connection_id?: IntNullableWithAggregatesFilter<"api_connections"> | number | null
    table_name?: StringNullableWithAggregatesFilter<"api_connections"> | string | null
  }

  export type csvDataWhereInput = {
    AND?: csvDataWhereInput | csvDataWhereInput[]
    OR?: csvDataWhereInput[]
    NOT?: csvDataWhereInput | csvDataWhereInput[]
    id?: BigIntFilter<"csvData"> | bigint | number
    user_id?: StringFilter<"csvData"> | string
    bucket_name?: StringNullableFilter<"csvData"> | string | null
    file_name?: StringNullableFilter<"csvData"> | string | null
    selectedFields?: StringNullableListFilter<"csvData">
    createdat?: DateTimeNullableFilter<"csvData"> | Date | string | null
    updatedat?: DateTimeNullableFilter<"csvData"> | Date | string | null
    connection_name?: StringNullableFilter<"csvData"> | string | null
  }

  export type csvDataOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    bucket_name?: SortOrderInput | SortOrder
    file_name?: SortOrderInput | SortOrder
    selectedFields?: SortOrder
    createdat?: SortOrderInput | SortOrder
    updatedat?: SortOrderInput | SortOrder
    connection_name?: SortOrderInput | SortOrder
  }

  export type csvDataWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: csvDataWhereInput | csvDataWhereInput[]
    OR?: csvDataWhereInput[]
    NOT?: csvDataWhereInput | csvDataWhereInput[]
    user_id?: StringFilter<"csvData"> | string
    bucket_name?: StringNullableFilter<"csvData"> | string | null
    file_name?: StringNullableFilter<"csvData"> | string | null
    selectedFields?: StringNullableListFilter<"csvData">
    createdat?: DateTimeNullableFilter<"csvData"> | Date | string | null
    updatedat?: DateTimeNullableFilter<"csvData"> | Date | string | null
    connection_name?: StringNullableFilter<"csvData"> | string | null
  }, "id">

  export type csvDataOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    bucket_name?: SortOrderInput | SortOrder
    file_name?: SortOrderInput | SortOrder
    selectedFields?: SortOrder
    createdat?: SortOrderInput | SortOrder
    updatedat?: SortOrderInput | SortOrder
    connection_name?: SortOrderInput | SortOrder
    _count?: csvDataCountOrderByAggregateInput
    _avg?: csvDataAvgOrderByAggregateInput
    _max?: csvDataMaxOrderByAggregateInput
    _min?: csvDataMinOrderByAggregateInput
    _sum?: csvDataSumOrderByAggregateInput
  }

  export type csvDataScalarWhereWithAggregatesInput = {
    AND?: csvDataScalarWhereWithAggregatesInput | csvDataScalarWhereWithAggregatesInput[]
    OR?: csvDataScalarWhereWithAggregatesInput[]
    NOT?: csvDataScalarWhereWithAggregatesInput | csvDataScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"csvData"> | bigint | number
    user_id?: StringWithAggregatesFilter<"csvData"> | string
    bucket_name?: StringNullableWithAggregatesFilter<"csvData"> | string | null
    file_name?: StringNullableWithAggregatesFilter<"csvData"> | string | null
    selectedFields?: StringNullableListFilter<"csvData">
    createdat?: DateTimeNullableWithAggregatesFilter<"csvData"> | Date | string | null
    updatedat?: DateTimeNullableWithAggregatesFilter<"csvData"> | Date | string | null
    connection_name?: StringNullableWithAggregatesFilter<"csvData"> | string | null
  }

  export type dashboardsWhereInput = {
    AND?: dashboardsWhereInput | dashboardsWhereInput[]
    OR?: dashboardsWhereInput[]
    NOT?: dashboardsWhereInput | dashboardsWhereInput[]
    id?: IntFilter<"dashboards"> | number
    name?: StringFilter<"dashboards"> | string
    description?: StringNullableFilter<"dashboards"> | string | null
    user_id?: StringFilter<"dashboards"> | string
    createdAt?: DateTimeFilter<"dashboards"> | Date | string
    updatedAt?: DateTimeFilter<"dashboards"> | Date | string
    widget_details?: JsonNullableFilter<"dashboards">
    layout?: JsonNullableFilter<"dashboards">
    custom_settings?: JsonNullableFilter<"dashboards">
    type?: StringNullableFilter<"dashboards"> | string | null
  }

  export type dashboardsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    widget_details?: SortOrderInput | SortOrder
    layout?: SortOrderInput | SortOrder
    custom_settings?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
  }

  export type dashboardsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: dashboardsWhereInput | dashboardsWhereInput[]
    OR?: dashboardsWhereInput[]
    NOT?: dashboardsWhereInput | dashboardsWhereInput[]
    name?: StringFilter<"dashboards"> | string
    description?: StringNullableFilter<"dashboards"> | string | null
    user_id?: StringFilter<"dashboards"> | string
    createdAt?: DateTimeFilter<"dashboards"> | Date | string
    updatedAt?: DateTimeFilter<"dashboards"> | Date | string
    widget_details?: JsonNullableFilter<"dashboards">
    layout?: JsonNullableFilter<"dashboards">
    custom_settings?: JsonNullableFilter<"dashboards">
    type?: StringNullableFilter<"dashboards"> | string | null
  }, "id">

  export type dashboardsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    widget_details?: SortOrderInput | SortOrder
    layout?: SortOrderInput | SortOrder
    custom_settings?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    _count?: dashboardsCountOrderByAggregateInput
    _avg?: dashboardsAvgOrderByAggregateInput
    _max?: dashboardsMaxOrderByAggregateInput
    _min?: dashboardsMinOrderByAggregateInput
    _sum?: dashboardsSumOrderByAggregateInput
  }

  export type dashboardsScalarWhereWithAggregatesInput = {
    AND?: dashboardsScalarWhereWithAggregatesInput | dashboardsScalarWhereWithAggregatesInput[]
    OR?: dashboardsScalarWhereWithAggregatesInput[]
    NOT?: dashboardsScalarWhereWithAggregatesInput | dashboardsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"dashboards"> | number
    name?: StringWithAggregatesFilter<"dashboards"> | string
    description?: StringNullableWithAggregatesFilter<"dashboards"> | string | null
    user_id?: StringWithAggregatesFilter<"dashboards"> | string
    createdAt?: DateTimeWithAggregatesFilter<"dashboards"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"dashboards"> | Date | string
    widget_details?: JsonNullableWithAggregatesFilter<"dashboards">
    layout?: JsonNullableWithAggregatesFilter<"dashboards">
    custom_settings?: JsonNullableWithAggregatesFilter<"dashboards">
    type?: StringNullableWithAggregatesFilter<"dashboards"> | string | null
  }

  export type database_connectionsWhereInput = {
    AND?: database_connectionsWhereInput | database_connectionsWhereInput[]
    OR?: database_connectionsWhereInput[]
    NOT?: database_connectionsWhereInput | database_connectionsWhereInput[]
    id?: IntFilter<"database_connections"> | number
    connection_name?: StringFilter<"database_connections"> | string
    database_name?: StringFilter<"database_connections"> | string
    database_type?: StringFilter<"database_connections"> | string
    host?: StringFilter<"database_connections"> | string
    port?: IntNullableFilter<"database_connections"> | number | null
    username?: StringFilter<"database_connections"> | string
    password?: StringFilter<"database_connections"> | string
    user_id?: StringFilter<"database_connections"> | string
    createdAt?: DateTimeFilter<"database_connections"> | Date | string
    updatedAt?: DateTimeFilter<"database_connections"> | Date | string
    api_connections?: Api_connectionsListRelationFilter
    data_sources?: Data_sourcesListRelationFilter
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type database_connectionsOrderByWithRelationInput = {
    id?: SortOrder
    connection_name?: SortOrder
    database_name?: SortOrder
    database_type?: SortOrder
    host?: SortOrder
    port?: SortOrderInput | SortOrder
    username?: SortOrder
    password?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    api_connections?: api_connectionsOrderByRelationAggregateInput
    data_sources?: data_sourcesOrderByRelationAggregateInput
    user?: usersOrderByWithRelationInput
  }

  export type database_connectionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: database_connectionsWhereInput | database_connectionsWhereInput[]
    OR?: database_connectionsWhereInput[]
    NOT?: database_connectionsWhereInput | database_connectionsWhereInput[]
    connection_name?: StringFilter<"database_connections"> | string
    database_name?: StringFilter<"database_connections"> | string
    database_type?: StringFilter<"database_connections"> | string
    host?: StringFilter<"database_connections"> | string
    port?: IntNullableFilter<"database_connections"> | number | null
    username?: StringFilter<"database_connections"> | string
    password?: StringFilter<"database_connections"> | string
    user_id?: StringFilter<"database_connections"> | string
    createdAt?: DateTimeFilter<"database_connections"> | Date | string
    updatedAt?: DateTimeFilter<"database_connections"> | Date | string
    api_connections?: Api_connectionsListRelationFilter
    data_sources?: Data_sourcesListRelationFilter
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type database_connectionsOrderByWithAggregationInput = {
    id?: SortOrder
    connection_name?: SortOrder
    database_name?: SortOrder
    database_type?: SortOrder
    host?: SortOrder
    port?: SortOrderInput | SortOrder
    username?: SortOrder
    password?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: database_connectionsCountOrderByAggregateInput
    _avg?: database_connectionsAvgOrderByAggregateInput
    _max?: database_connectionsMaxOrderByAggregateInput
    _min?: database_connectionsMinOrderByAggregateInput
    _sum?: database_connectionsSumOrderByAggregateInput
  }

  export type database_connectionsScalarWhereWithAggregatesInput = {
    AND?: database_connectionsScalarWhereWithAggregatesInput | database_connectionsScalarWhereWithAggregatesInput[]
    OR?: database_connectionsScalarWhereWithAggregatesInput[]
    NOT?: database_connectionsScalarWhereWithAggregatesInput | database_connectionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"database_connections"> | number
    connection_name?: StringWithAggregatesFilter<"database_connections"> | string
    database_name?: StringWithAggregatesFilter<"database_connections"> | string
    database_type?: StringWithAggregatesFilter<"database_connections"> | string
    host?: StringWithAggregatesFilter<"database_connections"> | string
    port?: IntNullableWithAggregatesFilter<"database_connections"> | number | null
    username?: StringWithAggregatesFilter<"database_connections"> | string
    password?: StringWithAggregatesFilter<"database_connections"> | string
    user_id?: StringWithAggregatesFilter<"database_connections"> | string
    createdAt?: DateTimeWithAggregatesFilter<"database_connections"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"database_connections"> | Date | string
  }

  export type datasetsWhereInput = {
    AND?: datasetsWhereInput | datasetsWhereInput[]
    OR?: datasetsWhereInput[]
    NOT?: datasetsWhereInput | datasetsWhereInput[]
    id?: IntFilter<"datasets"> | number
    dataset_name?: StringFilter<"datasets"> | string
    dataset_description?: StringNullableFilter<"datasets"> | string | null
    sql_query?: StringFilter<"datasets"> | string
    connection_id?: IntNullableFilter<"datasets"> | number | null
    user_id?: StringFilter<"datasets"> | string
    visualization_type?: StringFilter<"datasets"> | string
    createdAt?: DateTimeFilter<"datasets"> | Date | string
    updatedAt?: DateTimeFilter<"datasets"> | Date | string
    selectedField?: StringNullableFilter<"datasets"> | string | null
    x_axis?: StringNullableFilter<"datasets"> | string | null
    y_axis?: StringNullableFilter<"datasets"> | string | null
    issample?: BoolNullableFilter<"datasets"> | boolean | null
    is_stacked?: BoolNullableFilter<"datasets"> | boolean | null
    api_id?: IntNullableFilter<"datasets"> | number | null
    csv_id?: IntNullableFilter<"datasets"> | number | null
    filters?: JsonNullableFilter<"datasets">
    table_name?: StringNullableFilter<"datasets"> | string | null
    selectedAggregate?: StringNullableFilter<"datasets"> | string | null
    selectedGroupByValues?: StringNullableListFilter<"datasets">
    selectedDateBy?: StringNullableFilter<"datasets"> | string | null
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type datasetsOrderByWithRelationInput = {
    id?: SortOrder
    dataset_name?: SortOrder
    dataset_description?: SortOrderInput | SortOrder
    sql_query?: SortOrder
    connection_id?: SortOrderInput | SortOrder
    user_id?: SortOrder
    visualization_type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    selectedField?: SortOrderInput | SortOrder
    x_axis?: SortOrderInput | SortOrder
    y_axis?: SortOrderInput | SortOrder
    issample?: SortOrderInput | SortOrder
    is_stacked?: SortOrderInput | SortOrder
    api_id?: SortOrderInput | SortOrder
    csv_id?: SortOrderInput | SortOrder
    filters?: SortOrderInput | SortOrder
    table_name?: SortOrderInput | SortOrder
    selectedAggregate?: SortOrderInput | SortOrder
    selectedGroupByValues?: SortOrder
    selectedDateBy?: SortOrderInput | SortOrder
    user?: usersOrderByWithRelationInput
  }

  export type datasetsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: datasetsWhereInput | datasetsWhereInput[]
    OR?: datasetsWhereInput[]
    NOT?: datasetsWhereInput | datasetsWhereInput[]
    dataset_name?: StringFilter<"datasets"> | string
    dataset_description?: StringNullableFilter<"datasets"> | string | null
    sql_query?: StringFilter<"datasets"> | string
    connection_id?: IntNullableFilter<"datasets"> | number | null
    user_id?: StringFilter<"datasets"> | string
    visualization_type?: StringFilter<"datasets"> | string
    createdAt?: DateTimeFilter<"datasets"> | Date | string
    updatedAt?: DateTimeFilter<"datasets"> | Date | string
    selectedField?: StringNullableFilter<"datasets"> | string | null
    x_axis?: StringNullableFilter<"datasets"> | string | null
    y_axis?: StringNullableFilter<"datasets"> | string | null
    issample?: BoolNullableFilter<"datasets"> | boolean | null
    is_stacked?: BoolNullableFilter<"datasets"> | boolean | null
    api_id?: IntNullableFilter<"datasets"> | number | null
    csv_id?: IntNullableFilter<"datasets"> | number | null
    filters?: JsonNullableFilter<"datasets">
    table_name?: StringNullableFilter<"datasets"> | string | null
    selectedAggregate?: StringNullableFilter<"datasets"> | string | null
    selectedGroupByValues?: StringNullableListFilter<"datasets">
    selectedDateBy?: StringNullableFilter<"datasets"> | string | null
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type datasetsOrderByWithAggregationInput = {
    id?: SortOrder
    dataset_name?: SortOrder
    dataset_description?: SortOrderInput | SortOrder
    sql_query?: SortOrder
    connection_id?: SortOrderInput | SortOrder
    user_id?: SortOrder
    visualization_type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    selectedField?: SortOrderInput | SortOrder
    x_axis?: SortOrderInput | SortOrder
    y_axis?: SortOrderInput | SortOrder
    issample?: SortOrderInput | SortOrder
    is_stacked?: SortOrderInput | SortOrder
    api_id?: SortOrderInput | SortOrder
    csv_id?: SortOrderInput | SortOrder
    filters?: SortOrderInput | SortOrder
    table_name?: SortOrderInput | SortOrder
    selectedAggregate?: SortOrderInput | SortOrder
    selectedGroupByValues?: SortOrder
    selectedDateBy?: SortOrderInput | SortOrder
    _count?: datasetsCountOrderByAggregateInput
    _avg?: datasetsAvgOrderByAggregateInput
    _max?: datasetsMaxOrderByAggregateInput
    _min?: datasetsMinOrderByAggregateInput
    _sum?: datasetsSumOrderByAggregateInput
  }

  export type datasetsScalarWhereWithAggregatesInput = {
    AND?: datasetsScalarWhereWithAggregatesInput | datasetsScalarWhereWithAggregatesInput[]
    OR?: datasetsScalarWhereWithAggregatesInput[]
    NOT?: datasetsScalarWhereWithAggregatesInput | datasetsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"datasets"> | number
    dataset_name?: StringWithAggregatesFilter<"datasets"> | string
    dataset_description?: StringNullableWithAggregatesFilter<"datasets"> | string | null
    sql_query?: StringWithAggregatesFilter<"datasets"> | string
    connection_id?: IntNullableWithAggregatesFilter<"datasets"> | number | null
    user_id?: StringWithAggregatesFilter<"datasets"> | string
    visualization_type?: StringWithAggregatesFilter<"datasets"> | string
    createdAt?: DateTimeWithAggregatesFilter<"datasets"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"datasets"> | Date | string
    selectedField?: StringNullableWithAggregatesFilter<"datasets"> | string | null
    x_axis?: StringNullableWithAggregatesFilter<"datasets"> | string | null
    y_axis?: StringNullableWithAggregatesFilter<"datasets"> | string | null
    issample?: BoolNullableWithAggregatesFilter<"datasets"> | boolean | null
    is_stacked?: BoolNullableWithAggregatesFilter<"datasets"> | boolean | null
    api_id?: IntNullableWithAggregatesFilter<"datasets"> | number | null
    csv_id?: IntNullableWithAggregatesFilter<"datasets"> | number | null
    filters?: JsonNullableWithAggregatesFilter<"datasets">
    table_name?: StringNullableWithAggregatesFilter<"datasets"> | string | null
    selectedAggregate?: StringNullableWithAggregatesFilter<"datasets"> | string | null
    selectedGroupByValues?: StringNullableListFilter<"datasets">
    selectedDateBy?: StringNullableWithAggregatesFilter<"datasets"> | string | null
  }

  export type data_sourcesWhereInput = {
    AND?: data_sourcesWhereInput | data_sourcesWhereInput[]
    OR?: data_sourcesWhereInput[]
    NOT?: data_sourcesWhereInput | data_sourcesWhereInput[]
    id?: BigIntFilter<"data_sources"> | bigint | number
    user_id?: StringNullableFilter<"data_sources"> | string | null
    source_name?: StringNullableFilter<"data_sources"> | string | null
    source_type?: StringNullableFilter<"data_sources"> | string | null
    database_name?: StringNullableFilter<"data_sources"> | string | null
    table_name?: StringNullableFilter<"data_sources"> | string | null
    database_connection_id?: IntNullableFilter<"data_sources"> | number | null
    csv_data_id?: BigIntNullableFilter<"data_sources"> | bigint | number | null
    api_connection_id?: IntNullableFilter<"data_sources"> | number | null
    row_count?: IntNullableFilter<"data_sources"> | number | null
    column_count?: IntNullableFilter<"data_sources"> | number | null
    data_schema?: JsonNullableFilter<"data_sources">
    last_updated?: DateTimeNullableFilter<"data_sources"> | Date | string | null
    cache_key?: StringNullableFilter<"data_sources"> | string | null
    partition_info?: JsonNullableFilter<"data_sources">
    index_info?: JsonNullableFilter<"data_sources">
    avg_query_time_ms?: FloatNullableFilter<"data_sources"> | number | null
    total_queries?: IntNullableFilter<"data_sources"> | number | null
    last_accessed?: DateTimeNullableFilter<"data_sources"> | Date | string | null
    data_quality_score?: FloatNullableFilter<"data_sources"> | number | null
    null_percentage?: FloatNullableFilter<"data_sources"> | number | null
    duplicate_count?: IntNullableFilter<"data_sources"> | number | null
    api_connection?: XOR<Api_connectionsNullableScalarRelationFilter, api_connectionsWhereInput> | null
    csv_data?: XOR<CsvdataNullableScalarRelationFilter, csvdataWhereInput> | null
    database_connection?: XOR<Database_connectionsNullableScalarRelationFilter, database_connectionsWhereInput> | null
    user?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    analytics_events?: Analytics_eventsListRelationFilter
  }

  export type data_sourcesOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    source_name?: SortOrderInput | SortOrder
    source_type?: SortOrderInput | SortOrder
    database_name?: SortOrderInput | SortOrder
    table_name?: SortOrderInput | SortOrder
    database_connection_id?: SortOrderInput | SortOrder
    csv_data_id?: SortOrderInput | SortOrder
    api_connection_id?: SortOrderInput | SortOrder
    row_count?: SortOrderInput | SortOrder
    column_count?: SortOrderInput | SortOrder
    data_schema?: SortOrderInput | SortOrder
    last_updated?: SortOrderInput | SortOrder
    cache_key?: SortOrderInput | SortOrder
    partition_info?: SortOrderInput | SortOrder
    index_info?: SortOrderInput | SortOrder
    avg_query_time_ms?: SortOrderInput | SortOrder
    total_queries?: SortOrderInput | SortOrder
    last_accessed?: SortOrderInput | SortOrder
    data_quality_score?: SortOrderInput | SortOrder
    null_percentage?: SortOrderInput | SortOrder
    duplicate_count?: SortOrderInput | SortOrder
    api_connection?: api_connectionsOrderByWithRelationInput
    csv_data?: csvdataOrderByWithRelationInput
    database_connection?: database_connectionsOrderByWithRelationInput
    user?: usersOrderByWithRelationInput
    analytics_events?: analytics_eventsOrderByRelationAggregateInput
  }

  export type data_sourcesWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: data_sourcesWhereInput | data_sourcesWhereInput[]
    OR?: data_sourcesWhereInput[]
    NOT?: data_sourcesWhereInput | data_sourcesWhereInput[]
    user_id?: StringNullableFilter<"data_sources"> | string | null
    source_name?: StringNullableFilter<"data_sources"> | string | null
    source_type?: StringNullableFilter<"data_sources"> | string | null
    database_name?: StringNullableFilter<"data_sources"> | string | null
    table_name?: StringNullableFilter<"data_sources"> | string | null
    database_connection_id?: IntNullableFilter<"data_sources"> | number | null
    csv_data_id?: BigIntNullableFilter<"data_sources"> | bigint | number | null
    api_connection_id?: IntNullableFilter<"data_sources"> | number | null
    row_count?: IntNullableFilter<"data_sources"> | number | null
    column_count?: IntNullableFilter<"data_sources"> | number | null
    data_schema?: JsonNullableFilter<"data_sources">
    last_updated?: DateTimeNullableFilter<"data_sources"> | Date | string | null
    cache_key?: StringNullableFilter<"data_sources"> | string | null
    partition_info?: JsonNullableFilter<"data_sources">
    index_info?: JsonNullableFilter<"data_sources">
    avg_query_time_ms?: FloatNullableFilter<"data_sources"> | number | null
    total_queries?: IntNullableFilter<"data_sources"> | number | null
    last_accessed?: DateTimeNullableFilter<"data_sources"> | Date | string | null
    data_quality_score?: FloatNullableFilter<"data_sources"> | number | null
    null_percentage?: FloatNullableFilter<"data_sources"> | number | null
    duplicate_count?: IntNullableFilter<"data_sources"> | number | null
    api_connection?: XOR<Api_connectionsNullableScalarRelationFilter, api_connectionsWhereInput> | null
    csv_data?: XOR<CsvdataNullableScalarRelationFilter, csvdataWhereInput> | null
    database_connection?: XOR<Database_connectionsNullableScalarRelationFilter, database_connectionsWhereInput> | null
    user?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    analytics_events?: Analytics_eventsListRelationFilter
  }, "id">

  export type data_sourcesOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    source_name?: SortOrderInput | SortOrder
    source_type?: SortOrderInput | SortOrder
    database_name?: SortOrderInput | SortOrder
    table_name?: SortOrderInput | SortOrder
    database_connection_id?: SortOrderInput | SortOrder
    csv_data_id?: SortOrderInput | SortOrder
    api_connection_id?: SortOrderInput | SortOrder
    row_count?: SortOrderInput | SortOrder
    column_count?: SortOrderInput | SortOrder
    data_schema?: SortOrderInput | SortOrder
    last_updated?: SortOrderInput | SortOrder
    cache_key?: SortOrderInput | SortOrder
    partition_info?: SortOrderInput | SortOrder
    index_info?: SortOrderInput | SortOrder
    avg_query_time_ms?: SortOrderInput | SortOrder
    total_queries?: SortOrderInput | SortOrder
    last_accessed?: SortOrderInput | SortOrder
    data_quality_score?: SortOrderInput | SortOrder
    null_percentage?: SortOrderInput | SortOrder
    duplicate_count?: SortOrderInput | SortOrder
    _count?: data_sourcesCountOrderByAggregateInput
    _avg?: data_sourcesAvgOrderByAggregateInput
    _max?: data_sourcesMaxOrderByAggregateInput
    _min?: data_sourcesMinOrderByAggregateInput
    _sum?: data_sourcesSumOrderByAggregateInput
  }

  export type data_sourcesScalarWhereWithAggregatesInput = {
    AND?: data_sourcesScalarWhereWithAggregatesInput | data_sourcesScalarWhereWithAggregatesInput[]
    OR?: data_sourcesScalarWhereWithAggregatesInput[]
    NOT?: data_sourcesScalarWhereWithAggregatesInput | data_sourcesScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"data_sources"> | bigint | number
    user_id?: StringNullableWithAggregatesFilter<"data_sources"> | string | null
    source_name?: StringNullableWithAggregatesFilter<"data_sources"> | string | null
    source_type?: StringNullableWithAggregatesFilter<"data_sources"> | string | null
    database_name?: StringNullableWithAggregatesFilter<"data_sources"> | string | null
    table_name?: StringNullableWithAggregatesFilter<"data_sources"> | string | null
    database_connection_id?: IntNullableWithAggregatesFilter<"data_sources"> | number | null
    csv_data_id?: BigIntNullableWithAggregatesFilter<"data_sources"> | bigint | number | null
    api_connection_id?: IntNullableWithAggregatesFilter<"data_sources"> | number | null
    row_count?: IntNullableWithAggregatesFilter<"data_sources"> | number | null
    column_count?: IntNullableWithAggregatesFilter<"data_sources"> | number | null
    data_schema?: JsonNullableWithAggregatesFilter<"data_sources">
    last_updated?: DateTimeNullableWithAggregatesFilter<"data_sources"> | Date | string | null
    cache_key?: StringNullableWithAggregatesFilter<"data_sources"> | string | null
    partition_info?: JsonNullableWithAggregatesFilter<"data_sources">
    index_info?: JsonNullableWithAggregatesFilter<"data_sources">
    avg_query_time_ms?: FloatNullableWithAggregatesFilter<"data_sources"> | number | null
    total_queries?: IntNullableWithAggregatesFilter<"data_sources"> | number | null
    last_accessed?: DateTimeNullableWithAggregatesFilter<"data_sources"> | Date | string | null
    data_quality_score?: FloatNullableWithAggregatesFilter<"data_sources"> | number | null
    null_percentage?: FloatNullableWithAggregatesFilter<"data_sources"> | number | null
    duplicate_count?: IntNullableWithAggregatesFilter<"data_sources"> | number | null
  }

  export type users_storageWhereInput = {
    AND?: users_storageWhereInput | users_storageWhereInput[]
    OR?: users_storageWhereInput[]
    NOT?: users_storageWhereInput | users_storageWhereInput[]
    id?: BigIntFilter<"users_storage"> | bigint | number
    user_id?: StringFilter<"users_storage"> | string
    bucket_name?: StringNullableFilter<"users_storage"> | string | null
    createdat?: DateTimeNullableFilter<"users_storage"> | Date | string | null
    updatedat?: DateTimeNullableFilter<"users_storage"> | Date | string | null
  }

  export type users_storageOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    bucket_name?: SortOrderInput | SortOrder
    createdat?: SortOrderInput | SortOrder
    updatedat?: SortOrderInput | SortOrder
  }

  export type users_storageWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: users_storageWhereInput | users_storageWhereInput[]
    OR?: users_storageWhereInput[]
    NOT?: users_storageWhereInput | users_storageWhereInput[]
    user_id?: StringFilter<"users_storage"> | string
    bucket_name?: StringNullableFilter<"users_storage"> | string | null
    createdat?: DateTimeNullableFilter<"users_storage"> | Date | string | null
    updatedat?: DateTimeNullableFilter<"users_storage"> | Date | string | null
  }, "id">

  export type users_storageOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    bucket_name?: SortOrderInput | SortOrder
    createdat?: SortOrderInput | SortOrder
    updatedat?: SortOrderInput | SortOrder
    _count?: users_storageCountOrderByAggregateInput
    _avg?: users_storageAvgOrderByAggregateInput
    _max?: users_storageMaxOrderByAggregateInput
    _min?: users_storageMinOrderByAggregateInput
    _sum?: users_storageSumOrderByAggregateInput
  }

  export type users_storageScalarWhereWithAggregatesInput = {
    AND?: users_storageScalarWhereWithAggregatesInput | users_storageScalarWhereWithAggregatesInput[]
    OR?: users_storageScalarWhereWithAggregatesInput[]
    NOT?: users_storageScalarWhereWithAggregatesInput | users_storageScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"users_storage"> | bigint | number
    user_id?: StringWithAggregatesFilter<"users_storage"> | string
    bucket_name?: StringNullableWithAggregatesFilter<"users_storage"> | string | null
    createdat?: DateTimeNullableWithAggregatesFilter<"users_storage"> | Date | string | null
    updatedat?: DateTimeNullableWithAggregatesFilter<"users_storage"> | Date | string | null
  }

  export type analytics_eventsWhereInput = {
    AND?: analytics_eventsWhereInput | analytics_eventsWhereInput[]
    OR?: analytics_eventsWhereInput[]
    NOT?: analytics_eventsWhereInput | analytics_eventsWhereInput[]
    id?: BigIntFilter<"analytics_events"> | bigint | number
    data_source_id?: BigIntFilter<"analytics_events"> | bigint | number
    event_type?: StringFilter<"analytics_events"> | string
    event_metadata?: JsonFilter<"analytics_events">
    timestamp?: DateTimeFilter<"analytics_events"> | Date | string
    user_id?: StringNullableFilter<"analytics_events"> | string | null
    session_id?: StringNullableFilter<"analytics_events"> | string | null
    ip_address?: StringNullableFilter<"analytics_events"> | string | null
    data_source?: XOR<Data_sourcesScalarRelationFilter, data_sourcesWhereInput>
    user?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type analytics_eventsOrderByWithRelationInput = {
    id?: SortOrder
    data_source_id?: SortOrder
    event_type?: SortOrder
    event_metadata?: SortOrder
    timestamp?: SortOrder
    user_id?: SortOrderInput | SortOrder
    session_id?: SortOrderInput | SortOrder
    ip_address?: SortOrderInput | SortOrder
    data_source?: data_sourcesOrderByWithRelationInput
    user?: usersOrderByWithRelationInput
  }

  export type analytics_eventsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: analytics_eventsWhereInput | analytics_eventsWhereInput[]
    OR?: analytics_eventsWhereInput[]
    NOT?: analytics_eventsWhereInput | analytics_eventsWhereInput[]
    data_source_id?: BigIntFilter<"analytics_events"> | bigint | number
    event_type?: StringFilter<"analytics_events"> | string
    event_metadata?: JsonFilter<"analytics_events">
    timestamp?: DateTimeFilter<"analytics_events"> | Date | string
    user_id?: StringNullableFilter<"analytics_events"> | string | null
    session_id?: StringNullableFilter<"analytics_events"> | string | null
    ip_address?: StringNullableFilter<"analytics_events"> | string | null
    data_source?: XOR<Data_sourcesScalarRelationFilter, data_sourcesWhereInput>
    user?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "id">

  export type analytics_eventsOrderByWithAggregationInput = {
    id?: SortOrder
    data_source_id?: SortOrder
    event_type?: SortOrder
    event_metadata?: SortOrder
    timestamp?: SortOrder
    user_id?: SortOrderInput | SortOrder
    session_id?: SortOrderInput | SortOrder
    ip_address?: SortOrderInput | SortOrder
    _count?: analytics_eventsCountOrderByAggregateInput
    _avg?: analytics_eventsAvgOrderByAggregateInput
    _max?: analytics_eventsMaxOrderByAggregateInput
    _min?: analytics_eventsMinOrderByAggregateInput
    _sum?: analytics_eventsSumOrderByAggregateInput
  }

  export type analytics_eventsScalarWhereWithAggregatesInput = {
    AND?: analytics_eventsScalarWhereWithAggregatesInput | analytics_eventsScalarWhereWithAggregatesInput[]
    OR?: analytics_eventsScalarWhereWithAggregatesInput[]
    NOT?: analytics_eventsScalarWhereWithAggregatesInput | analytics_eventsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"analytics_events"> | bigint | number
    data_source_id?: BigIntWithAggregatesFilter<"analytics_events"> | bigint | number
    event_type?: StringWithAggregatesFilter<"analytics_events"> | string
    event_metadata?: JsonWithAggregatesFilter<"analytics_events">
    timestamp?: DateTimeWithAggregatesFilter<"analytics_events"> | Date | string
    user_id?: StringNullableWithAggregatesFilter<"analytics_events"> | string | null
    session_id?: StringNullableWithAggregatesFilter<"analytics_events"> | string | null
    ip_address?: StringNullableWithAggregatesFilter<"analytics_events"> | string | null
  }

  export type csvdataWhereInput = {
    AND?: csvdataWhereInput | csvdataWhereInput[]
    OR?: csvdataWhereInput[]
    NOT?: csvdataWhereInput | csvdataWhereInput[]
    id?: BigIntFilter<"csvdata"> | bigint | number
    user_id?: StringNullableFilter<"csvdata"> | string | null
    bucket_name?: StringNullableFilter<"csvdata"> | string | null
    file_name?: StringNullableFilter<"csvdata"> | string | null
    selectedfields?: StringNullableListFilter<"csvdata">
    createdat?: DateTimeNullableFilter<"csvdata"> | Date | string | null
    updatedat?: DateTimeNullableFilter<"csvdata"> | Date | string | null
    connection_name?: StringNullableFilter<"csvdata"> | string | null
    file_size_bytes?: BigIntNullableFilter<"csvdata"> | bigint | number | null
    row_count?: IntNullableFilter<"csvdata"> | number | null
    column_count?: IntNullableFilter<"csvdata"> | number | null
    data_schema?: JsonNullableFilter<"csvdata">
    processing_status?: StringNullableFilter<"csvdata"> | string | null
    error_message?: StringNullableFilter<"csvdata"> | string | null
    checksum?: StringNullableFilter<"csvdata"> | string | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    data_sources?: Data_sourcesListRelationFilter
  }

  export type csvdataOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    bucket_name?: SortOrderInput | SortOrder
    file_name?: SortOrderInput | SortOrder
    selectedfields?: SortOrder
    createdat?: SortOrderInput | SortOrder
    updatedat?: SortOrderInput | SortOrder
    connection_name?: SortOrderInput | SortOrder
    file_size_bytes?: SortOrderInput | SortOrder
    row_count?: SortOrderInput | SortOrder
    column_count?: SortOrderInput | SortOrder
    data_schema?: SortOrderInput | SortOrder
    processing_status?: SortOrderInput | SortOrder
    error_message?: SortOrderInput | SortOrder
    checksum?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
    data_sources?: data_sourcesOrderByRelationAggregateInput
  }

  export type csvdataWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: csvdataWhereInput | csvdataWhereInput[]
    OR?: csvdataWhereInput[]
    NOT?: csvdataWhereInput | csvdataWhereInput[]
    user_id?: StringNullableFilter<"csvdata"> | string | null
    bucket_name?: StringNullableFilter<"csvdata"> | string | null
    file_name?: StringNullableFilter<"csvdata"> | string | null
    selectedfields?: StringNullableListFilter<"csvdata">
    createdat?: DateTimeNullableFilter<"csvdata"> | Date | string | null
    updatedat?: DateTimeNullableFilter<"csvdata"> | Date | string | null
    connection_name?: StringNullableFilter<"csvdata"> | string | null
    file_size_bytes?: BigIntNullableFilter<"csvdata"> | bigint | number | null
    row_count?: IntNullableFilter<"csvdata"> | number | null
    column_count?: IntNullableFilter<"csvdata"> | number | null
    data_schema?: JsonNullableFilter<"csvdata">
    processing_status?: StringNullableFilter<"csvdata"> | string | null
    error_message?: StringNullableFilter<"csvdata"> | string | null
    checksum?: StringNullableFilter<"csvdata"> | string | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    data_sources?: Data_sourcesListRelationFilter
  }, "id">

  export type csvdataOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    bucket_name?: SortOrderInput | SortOrder
    file_name?: SortOrderInput | SortOrder
    selectedfields?: SortOrder
    createdat?: SortOrderInput | SortOrder
    updatedat?: SortOrderInput | SortOrder
    connection_name?: SortOrderInput | SortOrder
    file_size_bytes?: SortOrderInput | SortOrder
    row_count?: SortOrderInput | SortOrder
    column_count?: SortOrderInput | SortOrder
    data_schema?: SortOrderInput | SortOrder
    processing_status?: SortOrderInput | SortOrder
    error_message?: SortOrderInput | SortOrder
    checksum?: SortOrderInput | SortOrder
    _count?: csvdataCountOrderByAggregateInput
    _avg?: csvdataAvgOrderByAggregateInput
    _max?: csvdataMaxOrderByAggregateInput
    _min?: csvdataMinOrderByAggregateInput
    _sum?: csvdataSumOrderByAggregateInput
  }

  export type csvdataScalarWhereWithAggregatesInput = {
    AND?: csvdataScalarWhereWithAggregatesInput | csvdataScalarWhereWithAggregatesInput[]
    OR?: csvdataScalarWhereWithAggregatesInput[]
    NOT?: csvdataScalarWhereWithAggregatesInput | csvdataScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"csvdata"> | bigint | number
    user_id?: StringNullableWithAggregatesFilter<"csvdata"> | string | null
    bucket_name?: StringNullableWithAggregatesFilter<"csvdata"> | string | null
    file_name?: StringNullableWithAggregatesFilter<"csvdata"> | string | null
    selectedfields?: StringNullableListFilter<"csvdata">
    createdat?: DateTimeNullableWithAggregatesFilter<"csvdata"> | Date | string | null
    updatedat?: DateTimeNullableWithAggregatesFilter<"csvdata"> | Date | string | null
    connection_name?: StringNullableWithAggregatesFilter<"csvdata"> | string | null
    file_size_bytes?: BigIntNullableWithAggregatesFilter<"csvdata"> | bigint | number | null
    row_count?: IntNullableWithAggregatesFilter<"csvdata"> | number | null
    column_count?: IntNullableWithAggregatesFilter<"csvdata"> | number | null
    data_schema?: JsonNullableWithAggregatesFilter<"csvdata">
    processing_status?: StringNullableWithAggregatesFilter<"csvdata"> | string | null
    error_message?: StringNullableWithAggregatesFilter<"csvdata"> | string | null
    checksum?: StringNullableWithAggregatesFilter<"csvdata"> | string | null
  }

  export type usersCreateInput = {
    user_id: string
    attributes: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    csvdata?: csvdataCreateNestedManyWithoutUsersInput
    data_sources?: data_sourcesCreateNestedManyWithoutUserInput
    connections?: database_connectionsCreateNestedManyWithoutUserInput
    datasets?: datasetsCreateNestedManyWithoutUserInput
    analytics_events?: analytics_eventsCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    user_id: string
    attributes: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    csvdata?: csvdataUncheckedCreateNestedManyWithoutUsersInput
    data_sources?: data_sourcesUncheckedCreateNestedManyWithoutUserInput
    connections?: database_connectionsUncheckedCreateNestedManyWithoutUserInput
    datasets?: datasetsUncheckedCreateNestedManyWithoutUserInput
    analytics_events?: analytics_eventsUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    attributes?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    csvdata?: csvdataUpdateManyWithoutUsersNestedInput
    data_sources?: data_sourcesUpdateManyWithoutUserNestedInput
    connections?: database_connectionsUpdateManyWithoutUserNestedInput
    datasets?: datasetsUpdateManyWithoutUserNestedInput
    analytics_events?: analytics_eventsUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    attributes?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    csvdata?: csvdataUncheckedUpdateManyWithoutUsersNestedInput
    data_sources?: data_sourcesUncheckedUpdateManyWithoutUserNestedInput
    connections?: database_connectionsUncheckedUpdateManyWithoutUserNestedInput
    datasets?: datasetsUncheckedUpdateManyWithoutUserNestedInput
    analytics_events?: analytics_eventsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    user_id: string
    attributes: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type usersUpdateManyMutationInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    attributes?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    attributes?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type api_connectionsCreateInput = {
    connection_name: string
    api_url: string
    api_key?: string | null
    headers?: NullableJsonNullValueInput | InputJsonValue
    user_id: string
    created_at?: Date | string
    updated_at?: Date | string
    table_name?: string | null
    connection?: database_connectionsCreateNestedOneWithoutApi_connectionsInput
    data_sources?: data_sourcesCreateNestedManyWithoutApi_connectionInput
  }

  export type api_connectionsUncheckedCreateInput = {
    id?: number
    connection_name: string
    api_url: string
    api_key?: string | null
    headers?: NullableJsonNullValueInput | InputJsonValue
    user_id: string
    created_at?: Date | string
    updated_at?: Date | string
    database_connection_id?: number | null
    table_name?: string | null
    data_sources?: data_sourcesUncheckedCreateNestedManyWithoutApi_connectionInput
  }

  export type api_connectionsUpdateInput = {
    connection_name?: StringFieldUpdateOperationsInput | string
    api_url?: StringFieldUpdateOperationsInput | string
    api_key?: NullableStringFieldUpdateOperationsInput | string | null
    headers?: NullableJsonNullValueInput | InputJsonValue
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    table_name?: NullableStringFieldUpdateOperationsInput | string | null
    connection?: database_connectionsUpdateOneWithoutApi_connectionsNestedInput
    data_sources?: data_sourcesUpdateManyWithoutApi_connectionNestedInput
  }

  export type api_connectionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    connection_name?: StringFieldUpdateOperationsInput | string
    api_url?: StringFieldUpdateOperationsInput | string
    api_key?: NullableStringFieldUpdateOperationsInput | string | null
    headers?: NullableJsonNullValueInput | InputJsonValue
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    database_connection_id?: NullableIntFieldUpdateOperationsInput | number | null
    table_name?: NullableStringFieldUpdateOperationsInput | string | null
    data_sources?: data_sourcesUncheckedUpdateManyWithoutApi_connectionNestedInput
  }

  export type api_connectionsCreateManyInput = {
    id?: number
    connection_name: string
    api_url: string
    api_key?: string | null
    headers?: NullableJsonNullValueInput | InputJsonValue
    user_id: string
    created_at?: Date | string
    updated_at?: Date | string
    database_connection_id?: number | null
    table_name?: string | null
  }

  export type api_connectionsUpdateManyMutationInput = {
    connection_name?: StringFieldUpdateOperationsInput | string
    api_url?: StringFieldUpdateOperationsInput | string
    api_key?: NullableStringFieldUpdateOperationsInput | string | null
    headers?: NullableJsonNullValueInput | InputJsonValue
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    table_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type api_connectionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    connection_name?: StringFieldUpdateOperationsInput | string
    api_url?: StringFieldUpdateOperationsInput | string
    api_key?: NullableStringFieldUpdateOperationsInput | string | null
    headers?: NullableJsonNullValueInput | InputJsonValue
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    database_connection_id?: NullableIntFieldUpdateOperationsInput | number | null
    table_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type csvDataCreateInput = {
    id?: bigint | number
    user_id: string
    bucket_name?: string | null
    file_name?: string | null
    selectedFields?: csvDataCreateselectedFieldsInput | string[]
    createdat?: Date | string | null
    updatedat?: Date | string | null
    connection_name?: string | null
  }

  export type csvDataUncheckedCreateInput = {
    id?: bigint | number
    user_id: string
    bucket_name?: string | null
    file_name?: string | null
    selectedFields?: csvDataCreateselectedFieldsInput | string[]
    createdat?: Date | string | null
    updatedat?: Date | string | null
    connection_name?: string | null
  }

  export type csvDataUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: StringFieldUpdateOperationsInput | string
    bucket_name?: NullableStringFieldUpdateOperationsInput | string | null
    file_name?: NullableStringFieldUpdateOperationsInput | string | null
    selectedFields?: csvDataUpdateselectedFieldsInput | string[]
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    connection_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type csvDataUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: StringFieldUpdateOperationsInput | string
    bucket_name?: NullableStringFieldUpdateOperationsInput | string | null
    file_name?: NullableStringFieldUpdateOperationsInput | string | null
    selectedFields?: csvDataUpdateselectedFieldsInput | string[]
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    connection_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type csvDataCreateManyInput = {
    id?: bigint | number
    user_id: string
    bucket_name?: string | null
    file_name?: string | null
    selectedFields?: csvDataCreateselectedFieldsInput | string[]
    createdat?: Date | string | null
    updatedat?: Date | string | null
    connection_name?: string | null
  }

  export type csvDataUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: StringFieldUpdateOperationsInput | string
    bucket_name?: NullableStringFieldUpdateOperationsInput | string | null
    file_name?: NullableStringFieldUpdateOperationsInput | string | null
    selectedFields?: csvDataUpdateselectedFieldsInput | string[]
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    connection_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type csvDataUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: StringFieldUpdateOperationsInput | string
    bucket_name?: NullableStringFieldUpdateOperationsInput | string | null
    file_name?: NullableStringFieldUpdateOperationsInput | string | null
    selectedFields?: csvDataUpdateselectedFieldsInput | string[]
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    connection_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type dashboardsCreateInput = {
    name: string
    description?: string | null
    user_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    widget_details?: NullableJsonNullValueInput | InputJsonValue
    layout?: NullableJsonNullValueInput | InputJsonValue
    custom_settings?: NullableJsonNullValueInput | InputJsonValue
    type?: string | null
  }

  export type dashboardsUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    user_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    widget_details?: NullableJsonNullValueInput | InputJsonValue
    layout?: NullableJsonNullValueInput | InputJsonValue
    custom_settings?: NullableJsonNullValueInput | InputJsonValue
    type?: string | null
  }

  export type dashboardsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    widget_details?: NullableJsonNullValueInput | InputJsonValue
    layout?: NullableJsonNullValueInput | InputJsonValue
    custom_settings?: NullableJsonNullValueInput | InputJsonValue
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type dashboardsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    widget_details?: NullableJsonNullValueInput | InputJsonValue
    layout?: NullableJsonNullValueInput | InputJsonValue
    custom_settings?: NullableJsonNullValueInput | InputJsonValue
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type dashboardsCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    user_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    widget_details?: NullableJsonNullValueInput | InputJsonValue
    layout?: NullableJsonNullValueInput | InputJsonValue
    custom_settings?: NullableJsonNullValueInput | InputJsonValue
    type?: string | null
  }

  export type dashboardsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    widget_details?: NullableJsonNullValueInput | InputJsonValue
    layout?: NullableJsonNullValueInput | InputJsonValue
    custom_settings?: NullableJsonNullValueInput | InputJsonValue
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type dashboardsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    widget_details?: NullableJsonNullValueInput | InputJsonValue
    layout?: NullableJsonNullValueInput | InputJsonValue
    custom_settings?: NullableJsonNullValueInput | InputJsonValue
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type database_connectionsCreateInput = {
    connection_name: string
    database_name: string
    database_type: string
    host: string
    port?: number | null
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    api_connections?: api_connectionsCreateNestedManyWithoutConnectionInput
    data_sources?: data_sourcesCreateNestedManyWithoutDatabase_connectionInput
    user: usersCreateNestedOneWithoutConnectionsInput
  }

  export type database_connectionsUncheckedCreateInput = {
    id?: number
    connection_name: string
    database_name: string
    database_type: string
    host: string
    port?: number | null
    username: string
    password: string
    user_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    api_connections?: api_connectionsUncheckedCreateNestedManyWithoutConnectionInput
    data_sources?: data_sourcesUncheckedCreateNestedManyWithoutDatabase_connectionInput
  }

  export type database_connectionsUpdateInput = {
    connection_name?: StringFieldUpdateOperationsInput | string
    database_name?: StringFieldUpdateOperationsInput | string
    database_type?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    port?: NullableIntFieldUpdateOperationsInput | number | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    api_connections?: api_connectionsUpdateManyWithoutConnectionNestedInput
    data_sources?: data_sourcesUpdateManyWithoutDatabase_connectionNestedInput
    user?: usersUpdateOneRequiredWithoutConnectionsNestedInput
  }

  export type database_connectionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    connection_name?: StringFieldUpdateOperationsInput | string
    database_name?: StringFieldUpdateOperationsInput | string
    database_type?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    port?: NullableIntFieldUpdateOperationsInput | number | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    api_connections?: api_connectionsUncheckedUpdateManyWithoutConnectionNestedInput
    data_sources?: data_sourcesUncheckedUpdateManyWithoutDatabase_connectionNestedInput
  }

  export type database_connectionsCreateManyInput = {
    id?: number
    connection_name: string
    database_name: string
    database_type: string
    host: string
    port?: number | null
    username: string
    password: string
    user_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type database_connectionsUpdateManyMutationInput = {
    connection_name?: StringFieldUpdateOperationsInput | string
    database_name?: StringFieldUpdateOperationsInput | string
    database_type?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    port?: NullableIntFieldUpdateOperationsInput | number | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type database_connectionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    connection_name?: StringFieldUpdateOperationsInput | string
    database_name?: StringFieldUpdateOperationsInput | string
    database_type?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    port?: NullableIntFieldUpdateOperationsInput | number | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type datasetsCreateInput = {
    dataset_name: string
    dataset_description?: string | null
    sql_query: string
    connection_id?: number | null
    visualization_type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    selectedField?: string | null
    x_axis?: string | null
    y_axis?: string | null
    issample?: boolean | null
    is_stacked?: boolean | null
    api_id?: number | null
    csv_id?: number | null
    filters?: NullableJsonNullValueInput | InputJsonValue
    table_name?: string | null
    selectedAggregate?: string | null
    selectedGroupByValues?: datasetsCreateselectedGroupByValuesInput | string[]
    selectedDateBy?: string | null
    user: usersCreateNestedOneWithoutDatasetsInput
  }

  export type datasetsUncheckedCreateInput = {
    id?: number
    dataset_name: string
    dataset_description?: string | null
    sql_query: string
    connection_id?: number | null
    user_id: string
    visualization_type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    selectedField?: string | null
    x_axis?: string | null
    y_axis?: string | null
    issample?: boolean | null
    is_stacked?: boolean | null
    api_id?: number | null
    csv_id?: number | null
    filters?: NullableJsonNullValueInput | InputJsonValue
    table_name?: string | null
    selectedAggregate?: string | null
    selectedGroupByValues?: datasetsCreateselectedGroupByValuesInput | string[]
    selectedDateBy?: string | null
  }

  export type datasetsUpdateInput = {
    dataset_name?: StringFieldUpdateOperationsInput | string
    dataset_description?: NullableStringFieldUpdateOperationsInput | string | null
    sql_query?: StringFieldUpdateOperationsInput | string
    connection_id?: NullableIntFieldUpdateOperationsInput | number | null
    visualization_type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    selectedField?: NullableStringFieldUpdateOperationsInput | string | null
    x_axis?: NullableStringFieldUpdateOperationsInput | string | null
    y_axis?: NullableStringFieldUpdateOperationsInput | string | null
    issample?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_stacked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    api_id?: NullableIntFieldUpdateOperationsInput | number | null
    csv_id?: NullableIntFieldUpdateOperationsInput | number | null
    filters?: NullableJsonNullValueInput | InputJsonValue
    table_name?: NullableStringFieldUpdateOperationsInput | string | null
    selectedAggregate?: NullableStringFieldUpdateOperationsInput | string | null
    selectedGroupByValues?: datasetsUpdateselectedGroupByValuesInput | string[]
    selectedDateBy?: NullableStringFieldUpdateOperationsInput | string | null
    user?: usersUpdateOneRequiredWithoutDatasetsNestedInput
  }

  export type datasetsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataset_name?: StringFieldUpdateOperationsInput | string
    dataset_description?: NullableStringFieldUpdateOperationsInput | string | null
    sql_query?: StringFieldUpdateOperationsInput | string
    connection_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: StringFieldUpdateOperationsInput | string
    visualization_type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    selectedField?: NullableStringFieldUpdateOperationsInput | string | null
    x_axis?: NullableStringFieldUpdateOperationsInput | string | null
    y_axis?: NullableStringFieldUpdateOperationsInput | string | null
    issample?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_stacked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    api_id?: NullableIntFieldUpdateOperationsInput | number | null
    csv_id?: NullableIntFieldUpdateOperationsInput | number | null
    filters?: NullableJsonNullValueInput | InputJsonValue
    table_name?: NullableStringFieldUpdateOperationsInput | string | null
    selectedAggregate?: NullableStringFieldUpdateOperationsInput | string | null
    selectedGroupByValues?: datasetsUpdateselectedGroupByValuesInput | string[]
    selectedDateBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type datasetsCreateManyInput = {
    id?: number
    dataset_name: string
    dataset_description?: string | null
    sql_query: string
    connection_id?: number | null
    user_id: string
    visualization_type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    selectedField?: string | null
    x_axis?: string | null
    y_axis?: string | null
    issample?: boolean | null
    is_stacked?: boolean | null
    api_id?: number | null
    csv_id?: number | null
    filters?: NullableJsonNullValueInput | InputJsonValue
    table_name?: string | null
    selectedAggregate?: string | null
    selectedGroupByValues?: datasetsCreateselectedGroupByValuesInput | string[]
    selectedDateBy?: string | null
  }

  export type datasetsUpdateManyMutationInput = {
    dataset_name?: StringFieldUpdateOperationsInput | string
    dataset_description?: NullableStringFieldUpdateOperationsInput | string | null
    sql_query?: StringFieldUpdateOperationsInput | string
    connection_id?: NullableIntFieldUpdateOperationsInput | number | null
    visualization_type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    selectedField?: NullableStringFieldUpdateOperationsInput | string | null
    x_axis?: NullableStringFieldUpdateOperationsInput | string | null
    y_axis?: NullableStringFieldUpdateOperationsInput | string | null
    issample?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_stacked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    api_id?: NullableIntFieldUpdateOperationsInput | number | null
    csv_id?: NullableIntFieldUpdateOperationsInput | number | null
    filters?: NullableJsonNullValueInput | InputJsonValue
    table_name?: NullableStringFieldUpdateOperationsInput | string | null
    selectedAggregate?: NullableStringFieldUpdateOperationsInput | string | null
    selectedGroupByValues?: datasetsUpdateselectedGroupByValuesInput | string[]
    selectedDateBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type datasetsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataset_name?: StringFieldUpdateOperationsInput | string
    dataset_description?: NullableStringFieldUpdateOperationsInput | string | null
    sql_query?: StringFieldUpdateOperationsInput | string
    connection_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: StringFieldUpdateOperationsInput | string
    visualization_type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    selectedField?: NullableStringFieldUpdateOperationsInput | string | null
    x_axis?: NullableStringFieldUpdateOperationsInput | string | null
    y_axis?: NullableStringFieldUpdateOperationsInput | string | null
    issample?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_stacked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    api_id?: NullableIntFieldUpdateOperationsInput | number | null
    csv_id?: NullableIntFieldUpdateOperationsInput | number | null
    filters?: NullableJsonNullValueInput | InputJsonValue
    table_name?: NullableStringFieldUpdateOperationsInput | string | null
    selectedAggregate?: NullableStringFieldUpdateOperationsInput | string | null
    selectedGroupByValues?: datasetsUpdateselectedGroupByValuesInput | string[]
    selectedDateBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type data_sourcesCreateInput = {
    id?: bigint | number
    source_name?: string | null
    source_type?: string | null
    database_name?: string | null
    table_name?: string | null
    row_count?: number | null
    column_count?: number | null
    data_schema?: NullableJsonNullValueInput | InputJsonValue
    last_updated?: Date | string | null
    cache_key?: string | null
    partition_info?: NullableJsonNullValueInput | InputJsonValue
    index_info?: NullableJsonNullValueInput | InputJsonValue
    avg_query_time_ms?: number | null
    total_queries?: number | null
    last_accessed?: Date | string | null
    data_quality_score?: number | null
    null_percentage?: number | null
    duplicate_count?: number | null
    api_connection?: api_connectionsCreateNestedOneWithoutData_sourcesInput
    csv_data?: csvdataCreateNestedOneWithoutData_sourcesInput
    database_connection?: database_connectionsCreateNestedOneWithoutData_sourcesInput
    user?: usersCreateNestedOneWithoutData_sourcesInput
    analytics_events?: analytics_eventsCreateNestedManyWithoutData_sourceInput
  }

  export type data_sourcesUncheckedCreateInput = {
    id?: bigint | number
    user_id?: string | null
    source_name?: string | null
    source_type?: string | null
    database_name?: string | null
    table_name?: string | null
    database_connection_id?: number | null
    csv_data_id?: bigint | number | null
    api_connection_id?: number | null
    row_count?: number | null
    column_count?: number | null
    data_schema?: NullableJsonNullValueInput | InputJsonValue
    last_updated?: Date | string | null
    cache_key?: string | null
    partition_info?: NullableJsonNullValueInput | InputJsonValue
    index_info?: NullableJsonNullValueInput | InputJsonValue
    avg_query_time_ms?: number | null
    total_queries?: number | null
    last_accessed?: Date | string | null
    data_quality_score?: number | null
    null_percentage?: number | null
    duplicate_count?: number | null
    analytics_events?: analytics_eventsUncheckedCreateNestedManyWithoutData_sourceInput
  }

  export type data_sourcesUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    source_name?: NullableStringFieldUpdateOperationsInput | string | null
    source_type?: NullableStringFieldUpdateOperationsInput | string | null
    database_name?: NullableStringFieldUpdateOperationsInput | string | null
    table_name?: NullableStringFieldUpdateOperationsInput | string | null
    row_count?: NullableIntFieldUpdateOperationsInput | number | null
    column_count?: NullableIntFieldUpdateOperationsInput | number | null
    data_schema?: NullableJsonNullValueInput | InputJsonValue
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cache_key?: NullableStringFieldUpdateOperationsInput | string | null
    partition_info?: NullableJsonNullValueInput | InputJsonValue
    index_info?: NullableJsonNullValueInput | InputJsonValue
    avg_query_time_ms?: NullableFloatFieldUpdateOperationsInput | number | null
    total_queries?: NullableIntFieldUpdateOperationsInput | number | null
    last_accessed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_quality_score?: NullableFloatFieldUpdateOperationsInput | number | null
    null_percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    duplicate_count?: NullableIntFieldUpdateOperationsInput | number | null
    api_connection?: api_connectionsUpdateOneWithoutData_sourcesNestedInput
    csv_data?: csvdataUpdateOneWithoutData_sourcesNestedInput
    database_connection?: database_connectionsUpdateOneWithoutData_sourcesNestedInput
    user?: usersUpdateOneWithoutData_sourcesNestedInput
    analytics_events?: analytics_eventsUpdateManyWithoutData_sourceNestedInput
  }

  export type data_sourcesUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    source_name?: NullableStringFieldUpdateOperationsInput | string | null
    source_type?: NullableStringFieldUpdateOperationsInput | string | null
    database_name?: NullableStringFieldUpdateOperationsInput | string | null
    table_name?: NullableStringFieldUpdateOperationsInput | string | null
    database_connection_id?: NullableIntFieldUpdateOperationsInput | number | null
    csv_data_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    api_connection_id?: NullableIntFieldUpdateOperationsInput | number | null
    row_count?: NullableIntFieldUpdateOperationsInput | number | null
    column_count?: NullableIntFieldUpdateOperationsInput | number | null
    data_schema?: NullableJsonNullValueInput | InputJsonValue
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cache_key?: NullableStringFieldUpdateOperationsInput | string | null
    partition_info?: NullableJsonNullValueInput | InputJsonValue
    index_info?: NullableJsonNullValueInput | InputJsonValue
    avg_query_time_ms?: NullableFloatFieldUpdateOperationsInput | number | null
    total_queries?: NullableIntFieldUpdateOperationsInput | number | null
    last_accessed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_quality_score?: NullableFloatFieldUpdateOperationsInput | number | null
    null_percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    duplicate_count?: NullableIntFieldUpdateOperationsInput | number | null
    analytics_events?: analytics_eventsUncheckedUpdateManyWithoutData_sourceNestedInput
  }

  export type data_sourcesCreateManyInput = {
    id?: bigint | number
    user_id?: string | null
    source_name?: string | null
    source_type?: string | null
    database_name?: string | null
    table_name?: string | null
    database_connection_id?: number | null
    csv_data_id?: bigint | number | null
    api_connection_id?: number | null
    row_count?: number | null
    column_count?: number | null
    data_schema?: NullableJsonNullValueInput | InputJsonValue
    last_updated?: Date | string | null
    cache_key?: string | null
    partition_info?: NullableJsonNullValueInput | InputJsonValue
    index_info?: NullableJsonNullValueInput | InputJsonValue
    avg_query_time_ms?: number | null
    total_queries?: number | null
    last_accessed?: Date | string | null
    data_quality_score?: number | null
    null_percentage?: number | null
    duplicate_count?: number | null
  }

  export type data_sourcesUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    source_name?: NullableStringFieldUpdateOperationsInput | string | null
    source_type?: NullableStringFieldUpdateOperationsInput | string | null
    database_name?: NullableStringFieldUpdateOperationsInput | string | null
    table_name?: NullableStringFieldUpdateOperationsInput | string | null
    row_count?: NullableIntFieldUpdateOperationsInput | number | null
    column_count?: NullableIntFieldUpdateOperationsInput | number | null
    data_schema?: NullableJsonNullValueInput | InputJsonValue
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cache_key?: NullableStringFieldUpdateOperationsInput | string | null
    partition_info?: NullableJsonNullValueInput | InputJsonValue
    index_info?: NullableJsonNullValueInput | InputJsonValue
    avg_query_time_ms?: NullableFloatFieldUpdateOperationsInput | number | null
    total_queries?: NullableIntFieldUpdateOperationsInput | number | null
    last_accessed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_quality_score?: NullableFloatFieldUpdateOperationsInput | number | null
    null_percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    duplicate_count?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type data_sourcesUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    source_name?: NullableStringFieldUpdateOperationsInput | string | null
    source_type?: NullableStringFieldUpdateOperationsInput | string | null
    database_name?: NullableStringFieldUpdateOperationsInput | string | null
    table_name?: NullableStringFieldUpdateOperationsInput | string | null
    database_connection_id?: NullableIntFieldUpdateOperationsInput | number | null
    csv_data_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    api_connection_id?: NullableIntFieldUpdateOperationsInput | number | null
    row_count?: NullableIntFieldUpdateOperationsInput | number | null
    column_count?: NullableIntFieldUpdateOperationsInput | number | null
    data_schema?: NullableJsonNullValueInput | InputJsonValue
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cache_key?: NullableStringFieldUpdateOperationsInput | string | null
    partition_info?: NullableJsonNullValueInput | InputJsonValue
    index_info?: NullableJsonNullValueInput | InputJsonValue
    avg_query_time_ms?: NullableFloatFieldUpdateOperationsInput | number | null
    total_queries?: NullableIntFieldUpdateOperationsInput | number | null
    last_accessed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_quality_score?: NullableFloatFieldUpdateOperationsInput | number | null
    null_percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    duplicate_count?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type users_storageCreateInput = {
    id?: bigint | number
    user_id: string
    bucket_name?: string | null
    createdat?: Date | string | null
    updatedat?: Date | string | null
  }

  export type users_storageUncheckedCreateInput = {
    id?: bigint | number
    user_id: string
    bucket_name?: string | null
    createdat?: Date | string | null
    updatedat?: Date | string | null
  }

  export type users_storageUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: StringFieldUpdateOperationsInput | string
    bucket_name?: NullableStringFieldUpdateOperationsInput | string | null
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type users_storageUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: StringFieldUpdateOperationsInput | string
    bucket_name?: NullableStringFieldUpdateOperationsInput | string | null
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type users_storageCreateManyInput = {
    id?: bigint | number
    user_id: string
    bucket_name?: string | null
    createdat?: Date | string | null
    updatedat?: Date | string | null
  }

  export type users_storageUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: StringFieldUpdateOperationsInput | string
    bucket_name?: NullableStringFieldUpdateOperationsInput | string | null
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type users_storageUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: StringFieldUpdateOperationsInput | string
    bucket_name?: NullableStringFieldUpdateOperationsInput | string | null
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type analytics_eventsCreateInput = {
    id?: bigint | number
    event_type: string
    event_metadata?: JsonNullValueInput | InputJsonValue
    timestamp?: Date | string
    session_id?: string | null
    ip_address?: string | null
    data_source: data_sourcesCreateNestedOneWithoutAnalytics_eventsInput
    user?: usersCreateNestedOneWithoutAnalytics_eventsInput
  }

  export type analytics_eventsUncheckedCreateInput = {
    id?: bigint | number
    data_source_id: bigint | number
    event_type: string
    event_metadata?: JsonNullValueInput | InputJsonValue
    timestamp?: Date | string
    user_id?: string | null
    session_id?: string | null
    ip_address?: string | null
  }

  export type analytics_eventsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    event_type?: StringFieldUpdateOperationsInput | string
    event_metadata?: JsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    session_id?: NullableStringFieldUpdateOperationsInput | string | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    data_source?: data_sourcesUpdateOneRequiredWithoutAnalytics_eventsNestedInput
    user?: usersUpdateOneWithoutAnalytics_eventsNestedInput
  }

  export type analytics_eventsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    data_source_id?: BigIntFieldUpdateOperationsInput | bigint | number
    event_type?: StringFieldUpdateOperationsInput | string
    event_metadata?: JsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    session_id?: NullableStringFieldUpdateOperationsInput | string | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type analytics_eventsCreateManyInput = {
    id?: bigint | number
    data_source_id: bigint | number
    event_type: string
    event_metadata?: JsonNullValueInput | InputJsonValue
    timestamp?: Date | string
    user_id?: string | null
    session_id?: string | null
    ip_address?: string | null
  }

  export type analytics_eventsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    event_type?: StringFieldUpdateOperationsInput | string
    event_metadata?: JsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    session_id?: NullableStringFieldUpdateOperationsInput | string | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type analytics_eventsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    data_source_id?: BigIntFieldUpdateOperationsInput | bigint | number
    event_type?: StringFieldUpdateOperationsInput | string
    event_metadata?: JsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    session_id?: NullableStringFieldUpdateOperationsInput | string | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type csvdataCreateInput = {
    id?: bigint | number
    bucket_name?: string | null
    file_name?: string | null
    selectedfields?: csvdataCreateselectedfieldsInput | string[]
    createdat?: Date | string | null
    updatedat?: Date | string | null
    connection_name?: string | null
    file_size_bytes?: bigint | number | null
    row_count?: number | null
    column_count?: number | null
    data_schema?: NullableJsonNullValueInput | InputJsonValue
    processing_status?: string | null
    error_message?: string | null
    checksum?: string | null
    users?: usersCreateNestedOneWithoutCsvdataInput
    data_sources?: data_sourcesCreateNestedManyWithoutCsv_dataInput
  }

  export type csvdataUncheckedCreateInput = {
    id?: bigint | number
    user_id?: string | null
    bucket_name?: string | null
    file_name?: string | null
    selectedfields?: csvdataCreateselectedfieldsInput | string[]
    createdat?: Date | string | null
    updatedat?: Date | string | null
    connection_name?: string | null
    file_size_bytes?: bigint | number | null
    row_count?: number | null
    column_count?: number | null
    data_schema?: NullableJsonNullValueInput | InputJsonValue
    processing_status?: string | null
    error_message?: string | null
    checksum?: string | null
    data_sources?: data_sourcesUncheckedCreateNestedManyWithoutCsv_dataInput
  }

  export type csvdataUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    bucket_name?: NullableStringFieldUpdateOperationsInput | string | null
    file_name?: NullableStringFieldUpdateOperationsInput | string | null
    selectedfields?: csvdataUpdateselectedfieldsInput | string[]
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    connection_name?: NullableStringFieldUpdateOperationsInput | string | null
    file_size_bytes?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    row_count?: NullableIntFieldUpdateOperationsInput | number | null
    column_count?: NullableIntFieldUpdateOperationsInput | number | null
    data_schema?: NullableJsonNullValueInput | InputJsonValue
    processing_status?: NullableStringFieldUpdateOperationsInput | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    users?: usersUpdateOneWithoutCsvdataNestedInput
    data_sources?: data_sourcesUpdateManyWithoutCsv_dataNestedInput
  }

  export type csvdataUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    bucket_name?: NullableStringFieldUpdateOperationsInput | string | null
    file_name?: NullableStringFieldUpdateOperationsInput | string | null
    selectedfields?: csvdataUpdateselectedfieldsInput | string[]
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    connection_name?: NullableStringFieldUpdateOperationsInput | string | null
    file_size_bytes?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    row_count?: NullableIntFieldUpdateOperationsInput | number | null
    column_count?: NullableIntFieldUpdateOperationsInput | number | null
    data_schema?: NullableJsonNullValueInput | InputJsonValue
    processing_status?: NullableStringFieldUpdateOperationsInput | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    data_sources?: data_sourcesUncheckedUpdateManyWithoutCsv_dataNestedInput
  }

  export type csvdataCreateManyInput = {
    id?: bigint | number
    user_id?: string | null
    bucket_name?: string | null
    file_name?: string | null
    selectedfields?: csvdataCreateselectedfieldsInput | string[]
    createdat?: Date | string | null
    updatedat?: Date | string | null
    connection_name?: string | null
    file_size_bytes?: bigint | number | null
    row_count?: number | null
    column_count?: number | null
    data_schema?: NullableJsonNullValueInput | InputJsonValue
    processing_status?: string | null
    error_message?: string | null
    checksum?: string | null
  }

  export type csvdataUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    bucket_name?: NullableStringFieldUpdateOperationsInput | string | null
    file_name?: NullableStringFieldUpdateOperationsInput | string | null
    selectedfields?: csvdataUpdateselectedfieldsInput | string[]
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    connection_name?: NullableStringFieldUpdateOperationsInput | string | null
    file_size_bytes?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    row_count?: NullableIntFieldUpdateOperationsInput | number | null
    column_count?: NullableIntFieldUpdateOperationsInput | number | null
    data_schema?: NullableJsonNullValueInput | InputJsonValue
    processing_status?: NullableStringFieldUpdateOperationsInput | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type csvdataUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    bucket_name?: NullableStringFieldUpdateOperationsInput | string | null
    file_name?: NullableStringFieldUpdateOperationsInput | string | null
    selectedfields?: csvdataUpdateselectedfieldsInput | string[]
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    connection_name?: NullableStringFieldUpdateOperationsInput | string | null
    file_size_bytes?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    row_count?: NullableIntFieldUpdateOperationsInput | number | null
    column_count?: NullableIntFieldUpdateOperationsInput | number | null
    data_schema?: NullableJsonNullValueInput | InputJsonValue
    processing_status?: NullableStringFieldUpdateOperationsInput | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
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
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type CsvdataListRelationFilter = {
    every?: csvdataWhereInput
    some?: csvdataWhereInput
    none?: csvdataWhereInput
  }

  export type Data_sourcesListRelationFilter = {
    every?: data_sourcesWhereInput
    some?: data_sourcesWhereInput
    none?: data_sourcesWhereInput
  }

  export type Database_connectionsListRelationFilter = {
    every?: database_connectionsWhereInput
    some?: database_connectionsWhereInput
    none?: database_connectionsWhereInput
  }

  export type DatasetsListRelationFilter = {
    every?: datasetsWhereInput
    some?: datasetsWhereInput
    none?: datasetsWhereInput
  }

  export type Analytics_eventsListRelationFilter = {
    every?: analytics_eventsWhereInput
    some?: analytics_eventsWhereInput
    none?: analytics_eventsWhereInput
  }

  export type csvdataOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type data_sourcesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type database_connectionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type datasetsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type analytics_eventsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    attributes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
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
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type Database_connectionsNullableScalarRelationFilter = {
    is?: database_connectionsWhereInput | null
    isNot?: database_connectionsWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type api_connectionsCountOrderByAggregateInput = {
    id?: SortOrder
    connection_name?: SortOrder
    api_url?: SortOrder
    api_key?: SortOrder
    headers?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    database_connection_id?: SortOrder
    table_name?: SortOrder
  }

  export type api_connectionsAvgOrderByAggregateInput = {
    id?: SortOrder
    database_connection_id?: SortOrder
  }

  export type api_connectionsMaxOrderByAggregateInput = {
    id?: SortOrder
    connection_name?: SortOrder
    api_url?: SortOrder
    api_key?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    database_connection_id?: SortOrder
    table_name?: SortOrder
  }

  export type api_connectionsMinOrderByAggregateInput = {
    id?: SortOrder
    connection_name?: SortOrder
    api_url?: SortOrder
    api_key?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    database_connection_id?: SortOrder
    table_name?: SortOrder
  }

  export type api_connectionsSumOrderByAggregateInput = {
    id?: SortOrder
    database_connection_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type csvDataCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    bucket_name?: SortOrder
    file_name?: SortOrder
    selectedFields?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
    connection_name?: SortOrder
  }

  export type csvDataAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type csvDataMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    bucket_name?: SortOrder
    file_name?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
    connection_name?: SortOrder
  }

  export type csvDataMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    bucket_name?: SortOrder
    file_name?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
    connection_name?: SortOrder
  }

  export type csvDataSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type dashboardsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    widget_details?: SortOrder
    layout?: SortOrder
    custom_settings?: SortOrder
    type?: SortOrder
  }

  export type dashboardsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type dashboardsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    type?: SortOrder
  }

  export type dashboardsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    type?: SortOrder
  }

  export type dashboardsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Api_connectionsListRelationFilter = {
    every?: api_connectionsWhereInput
    some?: api_connectionsWhereInput
    none?: api_connectionsWhereInput
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type api_connectionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type database_connectionsCountOrderByAggregateInput = {
    id?: SortOrder
    connection_name?: SortOrder
    database_name?: SortOrder
    database_type?: SortOrder
    host?: SortOrder
    port?: SortOrder
    username?: SortOrder
    password?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type database_connectionsAvgOrderByAggregateInput = {
    id?: SortOrder
    port?: SortOrder
  }

  export type database_connectionsMaxOrderByAggregateInput = {
    id?: SortOrder
    connection_name?: SortOrder
    database_name?: SortOrder
    database_type?: SortOrder
    host?: SortOrder
    port?: SortOrder
    username?: SortOrder
    password?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type database_connectionsMinOrderByAggregateInput = {
    id?: SortOrder
    connection_name?: SortOrder
    database_name?: SortOrder
    database_type?: SortOrder
    host?: SortOrder
    port?: SortOrder
    username?: SortOrder
    password?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type database_connectionsSumOrderByAggregateInput = {
    id?: SortOrder
    port?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type datasetsCountOrderByAggregateInput = {
    id?: SortOrder
    dataset_name?: SortOrder
    dataset_description?: SortOrder
    sql_query?: SortOrder
    connection_id?: SortOrder
    user_id?: SortOrder
    visualization_type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    selectedField?: SortOrder
    x_axis?: SortOrder
    y_axis?: SortOrder
    issample?: SortOrder
    is_stacked?: SortOrder
    api_id?: SortOrder
    csv_id?: SortOrder
    filters?: SortOrder
    table_name?: SortOrder
    selectedAggregate?: SortOrder
    selectedGroupByValues?: SortOrder
    selectedDateBy?: SortOrder
  }

  export type datasetsAvgOrderByAggregateInput = {
    id?: SortOrder
    connection_id?: SortOrder
    api_id?: SortOrder
    csv_id?: SortOrder
  }

  export type datasetsMaxOrderByAggregateInput = {
    id?: SortOrder
    dataset_name?: SortOrder
    dataset_description?: SortOrder
    sql_query?: SortOrder
    connection_id?: SortOrder
    user_id?: SortOrder
    visualization_type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    selectedField?: SortOrder
    x_axis?: SortOrder
    y_axis?: SortOrder
    issample?: SortOrder
    is_stacked?: SortOrder
    api_id?: SortOrder
    csv_id?: SortOrder
    table_name?: SortOrder
    selectedAggregate?: SortOrder
    selectedDateBy?: SortOrder
  }

  export type datasetsMinOrderByAggregateInput = {
    id?: SortOrder
    dataset_name?: SortOrder
    dataset_description?: SortOrder
    sql_query?: SortOrder
    connection_id?: SortOrder
    user_id?: SortOrder
    visualization_type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    selectedField?: SortOrder
    x_axis?: SortOrder
    y_axis?: SortOrder
    issample?: SortOrder
    is_stacked?: SortOrder
    api_id?: SortOrder
    csv_id?: SortOrder
    table_name?: SortOrder
    selectedAggregate?: SortOrder
    selectedDateBy?: SortOrder
  }

  export type datasetsSumOrderByAggregateInput = {
    id?: SortOrder
    connection_id?: SortOrder
    api_id?: SortOrder
    csv_id?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type Api_connectionsNullableScalarRelationFilter = {
    is?: api_connectionsWhereInput | null
    isNot?: api_connectionsWhereInput | null
  }

  export type CsvdataNullableScalarRelationFilter = {
    is?: csvdataWhereInput | null
    isNot?: csvdataWhereInput | null
  }

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type data_sourcesCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    source_name?: SortOrder
    source_type?: SortOrder
    database_name?: SortOrder
    table_name?: SortOrder
    database_connection_id?: SortOrder
    csv_data_id?: SortOrder
    api_connection_id?: SortOrder
    row_count?: SortOrder
    column_count?: SortOrder
    data_schema?: SortOrder
    last_updated?: SortOrder
    cache_key?: SortOrder
    partition_info?: SortOrder
    index_info?: SortOrder
    avg_query_time_ms?: SortOrder
    total_queries?: SortOrder
    last_accessed?: SortOrder
    data_quality_score?: SortOrder
    null_percentage?: SortOrder
    duplicate_count?: SortOrder
  }

  export type data_sourcesAvgOrderByAggregateInput = {
    id?: SortOrder
    database_connection_id?: SortOrder
    csv_data_id?: SortOrder
    api_connection_id?: SortOrder
    row_count?: SortOrder
    column_count?: SortOrder
    avg_query_time_ms?: SortOrder
    total_queries?: SortOrder
    data_quality_score?: SortOrder
    null_percentage?: SortOrder
    duplicate_count?: SortOrder
  }

  export type data_sourcesMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    source_name?: SortOrder
    source_type?: SortOrder
    database_name?: SortOrder
    table_name?: SortOrder
    database_connection_id?: SortOrder
    csv_data_id?: SortOrder
    api_connection_id?: SortOrder
    row_count?: SortOrder
    column_count?: SortOrder
    last_updated?: SortOrder
    cache_key?: SortOrder
    avg_query_time_ms?: SortOrder
    total_queries?: SortOrder
    last_accessed?: SortOrder
    data_quality_score?: SortOrder
    null_percentage?: SortOrder
    duplicate_count?: SortOrder
  }

  export type data_sourcesMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    source_name?: SortOrder
    source_type?: SortOrder
    database_name?: SortOrder
    table_name?: SortOrder
    database_connection_id?: SortOrder
    csv_data_id?: SortOrder
    api_connection_id?: SortOrder
    row_count?: SortOrder
    column_count?: SortOrder
    last_updated?: SortOrder
    cache_key?: SortOrder
    avg_query_time_ms?: SortOrder
    total_queries?: SortOrder
    last_accessed?: SortOrder
    data_quality_score?: SortOrder
    null_percentage?: SortOrder
    duplicate_count?: SortOrder
  }

  export type data_sourcesSumOrderByAggregateInput = {
    id?: SortOrder
    database_connection_id?: SortOrder
    csv_data_id?: SortOrder
    api_connection_id?: SortOrder
    row_count?: SortOrder
    column_count?: SortOrder
    avg_query_time_ms?: SortOrder
    total_queries?: SortOrder
    data_quality_score?: SortOrder
    null_percentage?: SortOrder
    duplicate_count?: SortOrder
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type users_storageCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    bucket_name?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
  }

  export type users_storageAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type users_storageMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    bucket_name?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
  }

  export type users_storageMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    bucket_name?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
  }

  export type users_storageSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Data_sourcesScalarRelationFilter = {
    is?: data_sourcesWhereInput
    isNot?: data_sourcesWhereInput
  }

  export type analytics_eventsCountOrderByAggregateInput = {
    id?: SortOrder
    data_source_id?: SortOrder
    event_type?: SortOrder
    event_metadata?: SortOrder
    timestamp?: SortOrder
    user_id?: SortOrder
    session_id?: SortOrder
    ip_address?: SortOrder
  }

  export type analytics_eventsAvgOrderByAggregateInput = {
    id?: SortOrder
    data_source_id?: SortOrder
  }

  export type analytics_eventsMaxOrderByAggregateInput = {
    id?: SortOrder
    data_source_id?: SortOrder
    event_type?: SortOrder
    timestamp?: SortOrder
    user_id?: SortOrder
    session_id?: SortOrder
    ip_address?: SortOrder
  }

  export type analytics_eventsMinOrderByAggregateInput = {
    id?: SortOrder
    data_source_id?: SortOrder
    event_type?: SortOrder
    timestamp?: SortOrder
    user_id?: SortOrder
    session_id?: SortOrder
    ip_address?: SortOrder
  }

  export type analytics_eventsSumOrderByAggregateInput = {
    id?: SortOrder
    data_source_id?: SortOrder
  }

  export type csvdataCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    bucket_name?: SortOrder
    file_name?: SortOrder
    selectedfields?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
    connection_name?: SortOrder
    file_size_bytes?: SortOrder
    row_count?: SortOrder
    column_count?: SortOrder
    data_schema?: SortOrder
    processing_status?: SortOrder
    error_message?: SortOrder
    checksum?: SortOrder
  }

  export type csvdataAvgOrderByAggregateInput = {
    id?: SortOrder
    file_size_bytes?: SortOrder
    row_count?: SortOrder
    column_count?: SortOrder
  }

  export type csvdataMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    bucket_name?: SortOrder
    file_name?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
    connection_name?: SortOrder
    file_size_bytes?: SortOrder
    row_count?: SortOrder
    column_count?: SortOrder
    processing_status?: SortOrder
    error_message?: SortOrder
    checksum?: SortOrder
  }

  export type csvdataMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    bucket_name?: SortOrder
    file_name?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
    connection_name?: SortOrder
    file_size_bytes?: SortOrder
    row_count?: SortOrder
    column_count?: SortOrder
    processing_status?: SortOrder
    error_message?: SortOrder
    checksum?: SortOrder
  }

  export type csvdataSumOrderByAggregateInput = {
    id?: SortOrder
    file_size_bytes?: SortOrder
    row_count?: SortOrder
    column_count?: SortOrder
  }

  export type csvdataCreateNestedManyWithoutUsersInput = {
    create?: XOR<csvdataCreateWithoutUsersInput, csvdataUncheckedCreateWithoutUsersInput> | csvdataCreateWithoutUsersInput[] | csvdataUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: csvdataCreateOrConnectWithoutUsersInput | csvdataCreateOrConnectWithoutUsersInput[]
    createMany?: csvdataCreateManyUsersInputEnvelope
    connect?: csvdataWhereUniqueInput | csvdataWhereUniqueInput[]
  }

  export type data_sourcesCreateNestedManyWithoutUserInput = {
    create?: XOR<data_sourcesCreateWithoutUserInput, data_sourcesUncheckedCreateWithoutUserInput> | data_sourcesCreateWithoutUserInput[] | data_sourcesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: data_sourcesCreateOrConnectWithoutUserInput | data_sourcesCreateOrConnectWithoutUserInput[]
    createMany?: data_sourcesCreateManyUserInputEnvelope
    connect?: data_sourcesWhereUniqueInput | data_sourcesWhereUniqueInput[]
  }

  export type database_connectionsCreateNestedManyWithoutUserInput = {
    create?: XOR<database_connectionsCreateWithoutUserInput, database_connectionsUncheckedCreateWithoutUserInput> | database_connectionsCreateWithoutUserInput[] | database_connectionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: database_connectionsCreateOrConnectWithoutUserInput | database_connectionsCreateOrConnectWithoutUserInput[]
    createMany?: database_connectionsCreateManyUserInputEnvelope
    connect?: database_connectionsWhereUniqueInput | database_connectionsWhereUniqueInput[]
  }

  export type datasetsCreateNestedManyWithoutUserInput = {
    create?: XOR<datasetsCreateWithoutUserInput, datasetsUncheckedCreateWithoutUserInput> | datasetsCreateWithoutUserInput[] | datasetsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: datasetsCreateOrConnectWithoutUserInput | datasetsCreateOrConnectWithoutUserInput[]
    createMany?: datasetsCreateManyUserInputEnvelope
    connect?: datasetsWhereUniqueInput | datasetsWhereUniqueInput[]
  }

  export type analytics_eventsCreateNestedManyWithoutUserInput = {
    create?: XOR<analytics_eventsCreateWithoutUserInput, analytics_eventsUncheckedCreateWithoutUserInput> | analytics_eventsCreateWithoutUserInput[] | analytics_eventsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: analytics_eventsCreateOrConnectWithoutUserInput | analytics_eventsCreateOrConnectWithoutUserInput[]
    createMany?: analytics_eventsCreateManyUserInputEnvelope
    connect?: analytics_eventsWhereUniqueInput | analytics_eventsWhereUniqueInput[]
  }

  export type csvdataUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<csvdataCreateWithoutUsersInput, csvdataUncheckedCreateWithoutUsersInput> | csvdataCreateWithoutUsersInput[] | csvdataUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: csvdataCreateOrConnectWithoutUsersInput | csvdataCreateOrConnectWithoutUsersInput[]
    createMany?: csvdataCreateManyUsersInputEnvelope
    connect?: csvdataWhereUniqueInput | csvdataWhereUniqueInput[]
  }

  export type data_sourcesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<data_sourcesCreateWithoutUserInput, data_sourcesUncheckedCreateWithoutUserInput> | data_sourcesCreateWithoutUserInput[] | data_sourcesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: data_sourcesCreateOrConnectWithoutUserInput | data_sourcesCreateOrConnectWithoutUserInput[]
    createMany?: data_sourcesCreateManyUserInputEnvelope
    connect?: data_sourcesWhereUniqueInput | data_sourcesWhereUniqueInput[]
  }

  export type database_connectionsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<database_connectionsCreateWithoutUserInput, database_connectionsUncheckedCreateWithoutUserInput> | database_connectionsCreateWithoutUserInput[] | database_connectionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: database_connectionsCreateOrConnectWithoutUserInput | database_connectionsCreateOrConnectWithoutUserInput[]
    createMany?: database_connectionsCreateManyUserInputEnvelope
    connect?: database_connectionsWhereUniqueInput | database_connectionsWhereUniqueInput[]
  }

  export type datasetsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<datasetsCreateWithoutUserInput, datasetsUncheckedCreateWithoutUserInput> | datasetsCreateWithoutUserInput[] | datasetsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: datasetsCreateOrConnectWithoutUserInput | datasetsCreateOrConnectWithoutUserInput[]
    createMany?: datasetsCreateManyUserInputEnvelope
    connect?: datasetsWhereUniqueInput | datasetsWhereUniqueInput[]
  }

  export type analytics_eventsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<analytics_eventsCreateWithoutUserInput, analytics_eventsUncheckedCreateWithoutUserInput> | analytics_eventsCreateWithoutUserInput[] | analytics_eventsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: analytics_eventsCreateOrConnectWithoutUserInput | analytics_eventsCreateOrConnectWithoutUserInput[]
    createMany?: analytics_eventsCreateManyUserInputEnvelope
    connect?: analytics_eventsWhereUniqueInput | analytics_eventsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type csvdataUpdateManyWithoutUsersNestedInput = {
    create?: XOR<csvdataCreateWithoutUsersInput, csvdataUncheckedCreateWithoutUsersInput> | csvdataCreateWithoutUsersInput[] | csvdataUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: csvdataCreateOrConnectWithoutUsersInput | csvdataCreateOrConnectWithoutUsersInput[]
    upsert?: csvdataUpsertWithWhereUniqueWithoutUsersInput | csvdataUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: csvdataCreateManyUsersInputEnvelope
    set?: csvdataWhereUniqueInput | csvdataWhereUniqueInput[]
    disconnect?: csvdataWhereUniqueInput | csvdataWhereUniqueInput[]
    delete?: csvdataWhereUniqueInput | csvdataWhereUniqueInput[]
    connect?: csvdataWhereUniqueInput | csvdataWhereUniqueInput[]
    update?: csvdataUpdateWithWhereUniqueWithoutUsersInput | csvdataUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: csvdataUpdateManyWithWhereWithoutUsersInput | csvdataUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: csvdataScalarWhereInput | csvdataScalarWhereInput[]
  }

  export type data_sourcesUpdateManyWithoutUserNestedInput = {
    create?: XOR<data_sourcesCreateWithoutUserInput, data_sourcesUncheckedCreateWithoutUserInput> | data_sourcesCreateWithoutUserInput[] | data_sourcesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: data_sourcesCreateOrConnectWithoutUserInput | data_sourcesCreateOrConnectWithoutUserInput[]
    upsert?: data_sourcesUpsertWithWhereUniqueWithoutUserInput | data_sourcesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: data_sourcesCreateManyUserInputEnvelope
    set?: data_sourcesWhereUniqueInput | data_sourcesWhereUniqueInput[]
    disconnect?: data_sourcesWhereUniqueInput | data_sourcesWhereUniqueInput[]
    delete?: data_sourcesWhereUniqueInput | data_sourcesWhereUniqueInput[]
    connect?: data_sourcesWhereUniqueInput | data_sourcesWhereUniqueInput[]
    update?: data_sourcesUpdateWithWhereUniqueWithoutUserInput | data_sourcesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: data_sourcesUpdateManyWithWhereWithoutUserInput | data_sourcesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: data_sourcesScalarWhereInput | data_sourcesScalarWhereInput[]
  }

  export type database_connectionsUpdateManyWithoutUserNestedInput = {
    create?: XOR<database_connectionsCreateWithoutUserInput, database_connectionsUncheckedCreateWithoutUserInput> | database_connectionsCreateWithoutUserInput[] | database_connectionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: database_connectionsCreateOrConnectWithoutUserInput | database_connectionsCreateOrConnectWithoutUserInput[]
    upsert?: database_connectionsUpsertWithWhereUniqueWithoutUserInput | database_connectionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: database_connectionsCreateManyUserInputEnvelope
    set?: database_connectionsWhereUniqueInput | database_connectionsWhereUniqueInput[]
    disconnect?: database_connectionsWhereUniqueInput | database_connectionsWhereUniqueInput[]
    delete?: database_connectionsWhereUniqueInput | database_connectionsWhereUniqueInput[]
    connect?: database_connectionsWhereUniqueInput | database_connectionsWhereUniqueInput[]
    update?: database_connectionsUpdateWithWhereUniqueWithoutUserInput | database_connectionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: database_connectionsUpdateManyWithWhereWithoutUserInput | database_connectionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: database_connectionsScalarWhereInput | database_connectionsScalarWhereInput[]
  }

  export type datasetsUpdateManyWithoutUserNestedInput = {
    create?: XOR<datasetsCreateWithoutUserInput, datasetsUncheckedCreateWithoutUserInput> | datasetsCreateWithoutUserInput[] | datasetsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: datasetsCreateOrConnectWithoutUserInput | datasetsCreateOrConnectWithoutUserInput[]
    upsert?: datasetsUpsertWithWhereUniqueWithoutUserInput | datasetsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: datasetsCreateManyUserInputEnvelope
    set?: datasetsWhereUniqueInput | datasetsWhereUniqueInput[]
    disconnect?: datasetsWhereUniqueInput | datasetsWhereUniqueInput[]
    delete?: datasetsWhereUniqueInput | datasetsWhereUniqueInput[]
    connect?: datasetsWhereUniqueInput | datasetsWhereUniqueInput[]
    update?: datasetsUpdateWithWhereUniqueWithoutUserInput | datasetsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: datasetsUpdateManyWithWhereWithoutUserInput | datasetsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: datasetsScalarWhereInput | datasetsScalarWhereInput[]
  }

  export type analytics_eventsUpdateManyWithoutUserNestedInput = {
    create?: XOR<analytics_eventsCreateWithoutUserInput, analytics_eventsUncheckedCreateWithoutUserInput> | analytics_eventsCreateWithoutUserInput[] | analytics_eventsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: analytics_eventsCreateOrConnectWithoutUserInput | analytics_eventsCreateOrConnectWithoutUserInput[]
    upsert?: analytics_eventsUpsertWithWhereUniqueWithoutUserInput | analytics_eventsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: analytics_eventsCreateManyUserInputEnvelope
    set?: analytics_eventsWhereUniqueInput | analytics_eventsWhereUniqueInput[]
    disconnect?: analytics_eventsWhereUniqueInput | analytics_eventsWhereUniqueInput[]
    delete?: analytics_eventsWhereUniqueInput | analytics_eventsWhereUniqueInput[]
    connect?: analytics_eventsWhereUniqueInput | analytics_eventsWhereUniqueInput[]
    update?: analytics_eventsUpdateWithWhereUniqueWithoutUserInput | analytics_eventsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: analytics_eventsUpdateManyWithWhereWithoutUserInput | analytics_eventsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: analytics_eventsScalarWhereInput | analytics_eventsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type csvdataUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<csvdataCreateWithoutUsersInput, csvdataUncheckedCreateWithoutUsersInput> | csvdataCreateWithoutUsersInput[] | csvdataUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: csvdataCreateOrConnectWithoutUsersInput | csvdataCreateOrConnectWithoutUsersInput[]
    upsert?: csvdataUpsertWithWhereUniqueWithoutUsersInput | csvdataUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: csvdataCreateManyUsersInputEnvelope
    set?: csvdataWhereUniqueInput | csvdataWhereUniqueInput[]
    disconnect?: csvdataWhereUniqueInput | csvdataWhereUniqueInput[]
    delete?: csvdataWhereUniqueInput | csvdataWhereUniqueInput[]
    connect?: csvdataWhereUniqueInput | csvdataWhereUniqueInput[]
    update?: csvdataUpdateWithWhereUniqueWithoutUsersInput | csvdataUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: csvdataUpdateManyWithWhereWithoutUsersInput | csvdataUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: csvdataScalarWhereInput | csvdataScalarWhereInput[]
  }

  export type data_sourcesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<data_sourcesCreateWithoutUserInput, data_sourcesUncheckedCreateWithoutUserInput> | data_sourcesCreateWithoutUserInput[] | data_sourcesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: data_sourcesCreateOrConnectWithoutUserInput | data_sourcesCreateOrConnectWithoutUserInput[]
    upsert?: data_sourcesUpsertWithWhereUniqueWithoutUserInput | data_sourcesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: data_sourcesCreateManyUserInputEnvelope
    set?: data_sourcesWhereUniqueInput | data_sourcesWhereUniqueInput[]
    disconnect?: data_sourcesWhereUniqueInput | data_sourcesWhereUniqueInput[]
    delete?: data_sourcesWhereUniqueInput | data_sourcesWhereUniqueInput[]
    connect?: data_sourcesWhereUniqueInput | data_sourcesWhereUniqueInput[]
    update?: data_sourcesUpdateWithWhereUniqueWithoutUserInput | data_sourcesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: data_sourcesUpdateManyWithWhereWithoutUserInput | data_sourcesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: data_sourcesScalarWhereInput | data_sourcesScalarWhereInput[]
  }

  export type database_connectionsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<database_connectionsCreateWithoutUserInput, database_connectionsUncheckedCreateWithoutUserInput> | database_connectionsCreateWithoutUserInput[] | database_connectionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: database_connectionsCreateOrConnectWithoutUserInput | database_connectionsCreateOrConnectWithoutUserInput[]
    upsert?: database_connectionsUpsertWithWhereUniqueWithoutUserInput | database_connectionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: database_connectionsCreateManyUserInputEnvelope
    set?: database_connectionsWhereUniqueInput | database_connectionsWhereUniqueInput[]
    disconnect?: database_connectionsWhereUniqueInput | database_connectionsWhereUniqueInput[]
    delete?: database_connectionsWhereUniqueInput | database_connectionsWhereUniqueInput[]
    connect?: database_connectionsWhereUniqueInput | database_connectionsWhereUniqueInput[]
    update?: database_connectionsUpdateWithWhereUniqueWithoutUserInput | database_connectionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: database_connectionsUpdateManyWithWhereWithoutUserInput | database_connectionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: database_connectionsScalarWhereInput | database_connectionsScalarWhereInput[]
  }

  export type datasetsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<datasetsCreateWithoutUserInput, datasetsUncheckedCreateWithoutUserInput> | datasetsCreateWithoutUserInput[] | datasetsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: datasetsCreateOrConnectWithoutUserInput | datasetsCreateOrConnectWithoutUserInput[]
    upsert?: datasetsUpsertWithWhereUniqueWithoutUserInput | datasetsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: datasetsCreateManyUserInputEnvelope
    set?: datasetsWhereUniqueInput | datasetsWhereUniqueInput[]
    disconnect?: datasetsWhereUniqueInput | datasetsWhereUniqueInput[]
    delete?: datasetsWhereUniqueInput | datasetsWhereUniqueInput[]
    connect?: datasetsWhereUniqueInput | datasetsWhereUniqueInput[]
    update?: datasetsUpdateWithWhereUniqueWithoutUserInput | datasetsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: datasetsUpdateManyWithWhereWithoutUserInput | datasetsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: datasetsScalarWhereInput | datasetsScalarWhereInput[]
  }

  export type analytics_eventsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<analytics_eventsCreateWithoutUserInput, analytics_eventsUncheckedCreateWithoutUserInput> | analytics_eventsCreateWithoutUserInput[] | analytics_eventsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: analytics_eventsCreateOrConnectWithoutUserInput | analytics_eventsCreateOrConnectWithoutUserInput[]
    upsert?: analytics_eventsUpsertWithWhereUniqueWithoutUserInput | analytics_eventsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: analytics_eventsCreateManyUserInputEnvelope
    set?: analytics_eventsWhereUniqueInput | analytics_eventsWhereUniqueInput[]
    disconnect?: analytics_eventsWhereUniqueInput | analytics_eventsWhereUniqueInput[]
    delete?: analytics_eventsWhereUniqueInput | analytics_eventsWhereUniqueInput[]
    connect?: analytics_eventsWhereUniqueInput | analytics_eventsWhereUniqueInput[]
    update?: analytics_eventsUpdateWithWhereUniqueWithoutUserInput | analytics_eventsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: analytics_eventsUpdateManyWithWhereWithoutUserInput | analytics_eventsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: analytics_eventsScalarWhereInput | analytics_eventsScalarWhereInput[]
  }

  export type database_connectionsCreateNestedOneWithoutApi_connectionsInput = {
    create?: XOR<database_connectionsCreateWithoutApi_connectionsInput, database_connectionsUncheckedCreateWithoutApi_connectionsInput>
    connectOrCreate?: database_connectionsCreateOrConnectWithoutApi_connectionsInput
    connect?: database_connectionsWhereUniqueInput
  }

  export type data_sourcesCreateNestedManyWithoutApi_connectionInput = {
    create?: XOR<data_sourcesCreateWithoutApi_connectionInput, data_sourcesUncheckedCreateWithoutApi_connectionInput> | data_sourcesCreateWithoutApi_connectionInput[] | data_sourcesUncheckedCreateWithoutApi_connectionInput[]
    connectOrCreate?: data_sourcesCreateOrConnectWithoutApi_connectionInput | data_sourcesCreateOrConnectWithoutApi_connectionInput[]
    createMany?: data_sourcesCreateManyApi_connectionInputEnvelope
    connect?: data_sourcesWhereUniqueInput | data_sourcesWhereUniqueInput[]
  }

  export type data_sourcesUncheckedCreateNestedManyWithoutApi_connectionInput = {
    create?: XOR<data_sourcesCreateWithoutApi_connectionInput, data_sourcesUncheckedCreateWithoutApi_connectionInput> | data_sourcesCreateWithoutApi_connectionInput[] | data_sourcesUncheckedCreateWithoutApi_connectionInput[]
    connectOrCreate?: data_sourcesCreateOrConnectWithoutApi_connectionInput | data_sourcesCreateOrConnectWithoutApi_connectionInput[]
    createMany?: data_sourcesCreateManyApi_connectionInputEnvelope
    connect?: data_sourcesWhereUniqueInput | data_sourcesWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type database_connectionsUpdateOneWithoutApi_connectionsNestedInput = {
    create?: XOR<database_connectionsCreateWithoutApi_connectionsInput, database_connectionsUncheckedCreateWithoutApi_connectionsInput>
    connectOrCreate?: database_connectionsCreateOrConnectWithoutApi_connectionsInput
    upsert?: database_connectionsUpsertWithoutApi_connectionsInput
    disconnect?: database_connectionsWhereInput | boolean
    delete?: database_connectionsWhereInput | boolean
    connect?: database_connectionsWhereUniqueInput
    update?: XOR<XOR<database_connectionsUpdateToOneWithWhereWithoutApi_connectionsInput, database_connectionsUpdateWithoutApi_connectionsInput>, database_connectionsUncheckedUpdateWithoutApi_connectionsInput>
  }

  export type data_sourcesUpdateManyWithoutApi_connectionNestedInput = {
    create?: XOR<data_sourcesCreateWithoutApi_connectionInput, data_sourcesUncheckedCreateWithoutApi_connectionInput> | data_sourcesCreateWithoutApi_connectionInput[] | data_sourcesUncheckedCreateWithoutApi_connectionInput[]
    connectOrCreate?: data_sourcesCreateOrConnectWithoutApi_connectionInput | data_sourcesCreateOrConnectWithoutApi_connectionInput[]
    upsert?: data_sourcesUpsertWithWhereUniqueWithoutApi_connectionInput | data_sourcesUpsertWithWhereUniqueWithoutApi_connectionInput[]
    createMany?: data_sourcesCreateManyApi_connectionInputEnvelope
    set?: data_sourcesWhereUniqueInput | data_sourcesWhereUniqueInput[]
    disconnect?: data_sourcesWhereUniqueInput | data_sourcesWhereUniqueInput[]
    delete?: data_sourcesWhereUniqueInput | data_sourcesWhereUniqueInput[]
    connect?: data_sourcesWhereUniqueInput | data_sourcesWhereUniqueInput[]
    update?: data_sourcesUpdateWithWhereUniqueWithoutApi_connectionInput | data_sourcesUpdateWithWhereUniqueWithoutApi_connectionInput[]
    updateMany?: data_sourcesUpdateManyWithWhereWithoutApi_connectionInput | data_sourcesUpdateManyWithWhereWithoutApi_connectionInput[]
    deleteMany?: data_sourcesScalarWhereInput | data_sourcesScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type data_sourcesUncheckedUpdateManyWithoutApi_connectionNestedInput = {
    create?: XOR<data_sourcesCreateWithoutApi_connectionInput, data_sourcesUncheckedCreateWithoutApi_connectionInput> | data_sourcesCreateWithoutApi_connectionInput[] | data_sourcesUncheckedCreateWithoutApi_connectionInput[]
    connectOrCreate?: data_sourcesCreateOrConnectWithoutApi_connectionInput | data_sourcesCreateOrConnectWithoutApi_connectionInput[]
    upsert?: data_sourcesUpsertWithWhereUniqueWithoutApi_connectionInput | data_sourcesUpsertWithWhereUniqueWithoutApi_connectionInput[]
    createMany?: data_sourcesCreateManyApi_connectionInputEnvelope
    set?: data_sourcesWhereUniqueInput | data_sourcesWhereUniqueInput[]
    disconnect?: data_sourcesWhereUniqueInput | data_sourcesWhereUniqueInput[]
    delete?: data_sourcesWhereUniqueInput | data_sourcesWhereUniqueInput[]
    connect?: data_sourcesWhereUniqueInput | data_sourcesWhereUniqueInput[]
    update?: data_sourcesUpdateWithWhereUniqueWithoutApi_connectionInput | data_sourcesUpdateWithWhereUniqueWithoutApi_connectionInput[]
    updateMany?: data_sourcesUpdateManyWithWhereWithoutApi_connectionInput | data_sourcesUpdateManyWithWhereWithoutApi_connectionInput[]
    deleteMany?: data_sourcesScalarWhereInput | data_sourcesScalarWhereInput[]
  }

  export type csvDataCreateselectedFieldsInput = {
    set: string[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type csvDataUpdateselectedFieldsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type api_connectionsCreateNestedManyWithoutConnectionInput = {
    create?: XOR<api_connectionsCreateWithoutConnectionInput, api_connectionsUncheckedCreateWithoutConnectionInput> | api_connectionsCreateWithoutConnectionInput[] | api_connectionsUncheckedCreateWithoutConnectionInput[]
    connectOrCreate?: api_connectionsCreateOrConnectWithoutConnectionInput | api_connectionsCreateOrConnectWithoutConnectionInput[]
    createMany?: api_connectionsCreateManyConnectionInputEnvelope
    connect?: api_connectionsWhereUniqueInput | api_connectionsWhereUniqueInput[]
  }

  export type data_sourcesCreateNestedManyWithoutDatabase_connectionInput = {
    create?: XOR<data_sourcesCreateWithoutDatabase_connectionInput, data_sourcesUncheckedCreateWithoutDatabase_connectionInput> | data_sourcesCreateWithoutDatabase_connectionInput[] | data_sourcesUncheckedCreateWithoutDatabase_connectionInput[]
    connectOrCreate?: data_sourcesCreateOrConnectWithoutDatabase_connectionInput | data_sourcesCreateOrConnectWithoutDatabase_connectionInput[]
    createMany?: data_sourcesCreateManyDatabase_connectionInputEnvelope
    connect?: data_sourcesWhereUniqueInput | data_sourcesWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutConnectionsInput = {
    create?: XOR<usersCreateWithoutConnectionsInput, usersUncheckedCreateWithoutConnectionsInput>
    connectOrCreate?: usersCreateOrConnectWithoutConnectionsInput
    connect?: usersWhereUniqueInput
  }

  export type api_connectionsUncheckedCreateNestedManyWithoutConnectionInput = {
    create?: XOR<api_connectionsCreateWithoutConnectionInput, api_connectionsUncheckedCreateWithoutConnectionInput> | api_connectionsCreateWithoutConnectionInput[] | api_connectionsUncheckedCreateWithoutConnectionInput[]
    connectOrCreate?: api_connectionsCreateOrConnectWithoutConnectionInput | api_connectionsCreateOrConnectWithoutConnectionInput[]
    createMany?: api_connectionsCreateManyConnectionInputEnvelope
    connect?: api_connectionsWhereUniqueInput | api_connectionsWhereUniqueInput[]
  }

  export type data_sourcesUncheckedCreateNestedManyWithoutDatabase_connectionInput = {
    create?: XOR<data_sourcesCreateWithoutDatabase_connectionInput, data_sourcesUncheckedCreateWithoutDatabase_connectionInput> | data_sourcesCreateWithoutDatabase_connectionInput[] | data_sourcesUncheckedCreateWithoutDatabase_connectionInput[]
    connectOrCreate?: data_sourcesCreateOrConnectWithoutDatabase_connectionInput | data_sourcesCreateOrConnectWithoutDatabase_connectionInput[]
    createMany?: data_sourcesCreateManyDatabase_connectionInputEnvelope
    connect?: data_sourcesWhereUniqueInput | data_sourcesWhereUniqueInput[]
  }

  export type api_connectionsUpdateManyWithoutConnectionNestedInput = {
    create?: XOR<api_connectionsCreateWithoutConnectionInput, api_connectionsUncheckedCreateWithoutConnectionInput> | api_connectionsCreateWithoutConnectionInput[] | api_connectionsUncheckedCreateWithoutConnectionInput[]
    connectOrCreate?: api_connectionsCreateOrConnectWithoutConnectionInput | api_connectionsCreateOrConnectWithoutConnectionInput[]
    upsert?: api_connectionsUpsertWithWhereUniqueWithoutConnectionInput | api_connectionsUpsertWithWhereUniqueWithoutConnectionInput[]
    createMany?: api_connectionsCreateManyConnectionInputEnvelope
    set?: api_connectionsWhereUniqueInput | api_connectionsWhereUniqueInput[]
    disconnect?: api_connectionsWhereUniqueInput | api_connectionsWhereUniqueInput[]
    delete?: api_connectionsWhereUniqueInput | api_connectionsWhereUniqueInput[]
    connect?: api_connectionsWhereUniqueInput | api_connectionsWhereUniqueInput[]
    update?: api_connectionsUpdateWithWhereUniqueWithoutConnectionInput | api_connectionsUpdateWithWhereUniqueWithoutConnectionInput[]
    updateMany?: api_connectionsUpdateManyWithWhereWithoutConnectionInput | api_connectionsUpdateManyWithWhereWithoutConnectionInput[]
    deleteMany?: api_connectionsScalarWhereInput | api_connectionsScalarWhereInput[]
  }

  export type data_sourcesUpdateManyWithoutDatabase_connectionNestedInput = {
    create?: XOR<data_sourcesCreateWithoutDatabase_connectionInput, data_sourcesUncheckedCreateWithoutDatabase_connectionInput> | data_sourcesCreateWithoutDatabase_connectionInput[] | data_sourcesUncheckedCreateWithoutDatabase_connectionInput[]
    connectOrCreate?: data_sourcesCreateOrConnectWithoutDatabase_connectionInput | data_sourcesCreateOrConnectWithoutDatabase_connectionInput[]
    upsert?: data_sourcesUpsertWithWhereUniqueWithoutDatabase_connectionInput | data_sourcesUpsertWithWhereUniqueWithoutDatabase_connectionInput[]
    createMany?: data_sourcesCreateManyDatabase_connectionInputEnvelope
    set?: data_sourcesWhereUniqueInput | data_sourcesWhereUniqueInput[]
    disconnect?: data_sourcesWhereUniqueInput | data_sourcesWhereUniqueInput[]
    delete?: data_sourcesWhereUniqueInput | data_sourcesWhereUniqueInput[]
    connect?: data_sourcesWhereUniqueInput | data_sourcesWhereUniqueInput[]
    update?: data_sourcesUpdateWithWhereUniqueWithoutDatabase_connectionInput | data_sourcesUpdateWithWhereUniqueWithoutDatabase_connectionInput[]
    updateMany?: data_sourcesUpdateManyWithWhereWithoutDatabase_connectionInput | data_sourcesUpdateManyWithWhereWithoutDatabase_connectionInput[]
    deleteMany?: data_sourcesScalarWhereInput | data_sourcesScalarWhereInput[]
  }

  export type usersUpdateOneRequiredWithoutConnectionsNestedInput = {
    create?: XOR<usersCreateWithoutConnectionsInput, usersUncheckedCreateWithoutConnectionsInput>
    connectOrCreate?: usersCreateOrConnectWithoutConnectionsInput
    upsert?: usersUpsertWithoutConnectionsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutConnectionsInput, usersUpdateWithoutConnectionsInput>, usersUncheckedUpdateWithoutConnectionsInput>
  }

  export type api_connectionsUncheckedUpdateManyWithoutConnectionNestedInput = {
    create?: XOR<api_connectionsCreateWithoutConnectionInput, api_connectionsUncheckedCreateWithoutConnectionInput> | api_connectionsCreateWithoutConnectionInput[] | api_connectionsUncheckedCreateWithoutConnectionInput[]
    connectOrCreate?: api_connectionsCreateOrConnectWithoutConnectionInput | api_connectionsCreateOrConnectWithoutConnectionInput[]
    upsert?: api_connectionsUpsertWithWhereUniqueWithoutConnectionInput | api_connectionsUpsertWithWhereUniqueWithoutConnectionInput[]
    createMany?: api_connectionsCreateManyConnectionInputEnvelope
    set?: api_connectionsWhereUniqueInput | api_connectionsWhereUniqueInput[]
    disconnect?: api_connectionsWhereUniqueInput | api_connectionsWhereUniqueInput[]
    delete?: api_connectionsWhereUniqueInput | api_connectionsWhereUniqueInput[]
    connect?: api_connectionsWhereUniqueInput | api_connectionsWhereUniqueInput[]
    update?: api_connectionsUpdateWithWhereUniqueWithoutConnectionInput | api_connectionsUpdateWithWhereUniqueWithoutConnectionInput[]
    updateMany?: api_connectionsUpdateManyWithWhereWithoutConnectionInput | api_connectionsUpdateManyWithWhereWithoutConnectionInput[]
    deleteMany?: api_connectionsScalarWhereInput | api_connectionsScalarWhereInput[]
  }

  export type data_sourcesUncheckedUpdateManyWithoutDatabase_connectionNestedInput = {
    create?: XOR<data_sourcesCreateWithoutDatabase_connectionInput, data_sourcesUncheckedCreateWithoutDatabase_connectionInput> | data_sourcesCreateWithoutDatabase_connectionInput[] | data_sourcesUncheckedCreateWithoutDatabase_connectionInput[]
    connectOrCreate?: data_sourcesCreateOrConnectWithoutDatabase_connectionInput | data_sourcesCreateOrConnectWithoutDatabase_connectionInput[]
    upsert?: data_sourcesUpsertWithWhereUniqueWithoutDatabase_connectionInput | data_sourcesUpsertWithWhereUniqueWithoutDatabase_connectionInput[]
    createMany?: data_sourcesCreateManyDatabase_connectionInputEnvelope
    set?: data_sourcesWhereUniqueInput | data_sourcesWhereUniqueInput[]
    disconnect?: data_sourcesWhereUniqueInput | data_sourcesWhereUniqueInput[]
    delete?: data_sourcesWhereUniqueInput | data_sourcesWhereUniqueInput[]
    connect?: data_sourcesWhereUniqueInput | data_sourcesWhereUniqueInput[]
    update?: data_sourcesUpdateWithWhereUniqueWithoutDatabase_connectionInput | data_sourcesUpdateWithWhereUniqueWithoutDatabase_connectionInput[]
    updateMany?: data_sourcesUpdateManyWithWhereWithoutDatabase_connectionInput | data_sourcesUpdateManyWithWhereWithoutDatabase_connectionInput[]
    deleteMany?: data_sourcesScalarWhereInput | data_sourcesScalarWhereInput[]
  }

  export type datasetsCreateselectedGroupByValuesInput = {
    set: string[]
  }

  export type usersCreateNestedOneWithoutDatasetsInput = {
    create?: XOR<usersCreateWithoutDatasetsInput, usersUncheckedCreateWithoutDatasetsInput>
    connectOrCreate?: usersCreateOrConnectWithoutDatasetsInput
    connect?: usersWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type datasetsUpdateselectedGroupByValuesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type usersUpdateOneRequiredWithoutDatasetsNestedInput = {
    create?: XOR<usersCreateWithoutDatasetsInput, usersUncheckedCreateWithoutDatasetsInput>
    connectOrCreate?: usersCreateOrConnectWithoutDatasetsInput
    upsert?: usersUpsertWithoutDatasetsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutDatasetsInput, usersUpdateWithoutDatasetsInput>, usersUncheckedUpdateWithoutDatasetsInput>
  }

  export type api_connectionsCreateNestedOneWithoutData_sourcesInput = {
    create?: XOR<api_connectionsCreateWithoutData_sourcesInput, api_connectionsUncheckedCreateWithoutData_sourcesInput>
    connectOrCreate?: api_connectionsCreateOrConnectWithoutData_sourcesInput
    connect?: api_connectionsWhereUniqueInput
  }

  export type csvdataCreateNestedOneWithoutData_sourcesInput = {
    create?: XOR<csvdataCreateWithoutData_sourcesInput, csvdataUncheckedCreateWithoutData_sourcesInput>
    connectOrCreate?: csvdataCreateOrConnectWithoutData_sourcesInput
    connect?: csvdataWhereUniqueInput
  }

  export type database_connectionsCreateNestedOneWithoutData_sourcesInput = {
    create?: XOR<database_connectionsCreateWithoutData_sourcesInput, database_connectionsUncheckedCreateWithoutData_sourcesInput>
    connectOrCreate?: database_connectionsCreateOrConnectWithoutData_sourcesInput
    connect?: database_connectionsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutData_sourcesInput = {
    create?: XOR<usersCreateWithoutData_sourcesInput, usersUncheckedCreateWithoutData_sourcesInput>
    connectOrCreate?: usersCreateOrConnectWithoutData_sourcesInput
    connect?: usersWhereUniqueInput
  }

  export type analytics_eventsCreateNestedManyWithoutData_sourceInput = {
    create?: XOR<analytics_eventsCreateWithoutData_sourceInput, analytics_eventsUncheckedCreateWithoutData_sourceInput> | analytics_eventsCreateWithoutData_sourceInput[] | analytics_eventsUncheckedCreateWithoutData_sourceInput[]
    connectOrCreate?: analytics_eventsCreateOrConnectWithoutData_sourceInput | analytics_eventsCreateOrConnectWithoutData_sourceInput[]
    createMany?: analytics_eventsCreateManyData_sourceInputEnvelope
    connect?: analytics_eventsWhereUniqueInput | analytics_eventsWhereUniqueInput[]
  }

  export type analytics_eventsUncheckedCreateNestedManyWithoutData_sourceInput = {
    create?: XOR<analytics_eventsCreateWithoutData_sourceInput, analytics_eventsUncheckedCreateWithoutData_sourceInput> | analytics_eventsCreateWithoutData_sourceInput[] | analytics_eventsUncheckedCreateWithoutData_sourceInput[]
    connectOrCreate?: analytics_eventsCreateOrConnectWithoutData_sourceInput | analytics_eventsCreateOrConnectWithoutData_sourceInput[]
    createMany?: analytics_eventsCreateManyData_sourceInputEnvelope
    connect?: analytics_eventsWhereUniqueInput | analytics_eventsWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type api_connectionsUpdateOneWithoutData_sourcesNestedInput = {
    create?: XOR<api_connectionsCreateWithoutData_sourcesInput, api_connectionsUncheckedCreateWithoutData_sourcesInput>
    connectOrCreate?: api_connectionsCreateOrConnectWithoutData_sourcesInput
    upsert?: api_connectionsUpsertWithoutData_sourcesInput
    disconnect?: api_connectionsWhereInput | boolean
    delete?: api_connectionsWhereInput | boolean
    connect?: api_connectionsWhereUniqueInput
    update?: XOR<XOR<api_connectionsUpdateToOneWithWhereWithoutData_sourcesInput, api_connectionsUpdateWithoutData_sourcesInput>, api_connectionsUncheckedUpdateWithoutData_sourcesInput>
  }

  export type csvdataUpdateOneWithoutData_sourcesNestedInput = {
    create?: XOR<csvdataCreateWithoutData_sourcesInput, csvdataUncheckedCreateWithoutData_sourcesInput>
    connectOrCreate?: csvdataCreateOrConnectWithoutData_sourcesInput
    upsert?: csvdataUpsertWithoutData_sourcesInput
    disconnect?: csvdataWhereInput | boolean
    delete?: csvdataWhereInput | boolean
    connect?: csvdataWhereUniqueInput
    update?: XOR<XOR<csvdataUpdateToOneWithWhereWithoutData_sourcesInput, csvdataUpdateWithoutData_sourcesInput>, csvdataUncheckedUpdateWithoutData_sourcesInput>
  }

  export type database_connectionsUpdateOneWithoutData_sourcesNestedInput = {
    create?: XOR<database_connectionsCreateWithoutData_sourcesInput, database_connectionsUncheckedCreateWithoutData_sourcesInput>
    connectOrCreate?: database_connectionsCreateOrConnectWithoutData_sourcesInput
    upsert?: database_connectionsUpsertWithoutData_sourcesInput
    disconnect?: database_connectionsWhereInput | boolean
    delete?: database_connectionsWhereInput | boolean
    connect?: database_connectionsWhereUniqueInput
    update?: XOR<XOR<database_connectionsUpdateToOneWithWhereWithoutData_sourcesInput, database_connectionsUpdateWithoutData_sourcesInput>, database_connectionsUncheckedUpdateWithoutData_sourcesInput>
  }

  export type usersUpdateOneWithoutData_sourcesNestedInput = {
    create?: XOR<usersCreateWithoutData_sourcesInput, usersUncheckedCreateWithoutData_sourcesInput>
    connectOrCreate?: usersCreateOrConnectWithoutData_sourcesInput
    upsert?: usersUpsertWithoutData_sourcesInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutData_sourcesInput, usersUpdateWithoutData_sourcesInput>, usersUncheckedUpdateWithoutData_sourcesInput>
  }

  export type analytics_eventsUpdateManyWithoutData_sourceNestedInput = {
    create?: XOR<analytics_eventsCreateWithoutData_sourceInput, analytics_eventsUncheckedCreateWithoutData_sourceInput> | analytics_eventsCreateWithoutData_sourceInput[] | analytics_eventsUncheckedCreateWithoutData_sourceInput[]
    connectOrCreate?: analytics_eventsCreateOrConnectWithoutData_sourceInput | analytics_eventsCreateOrConnectWithoutData_sourceInput[]
    upsert?: analytics_eventsUpsertWithWhereUniqueWithoutData_sourceInput | analytics_eventsUpsertWithWhereUniqueWithoutData_sourceInput[]
    createMany?: analytics_eventsCreateManyData_sourceInputEnvelope
    set?: analytics_eventsWhereUniqueInput | analytics_eventsWhereUniqueInput[]
    disconnect?: analytics_eventsWhereUniqueInput | analytics_eventsWhereUniqueInput[]
    delete?: analytics_eventsWhereUniqueInput | analytics_eventsWhereUniqueInput[]
    connect?: analytics_eventsWhereUniqueInput | analytics_eventsWhereUniqueInput[]
    update?: analytics_eventsUpdateWithWhereUniqueWithoutData_sourceInput | analytics_eventsUpdateWithWhereUniqueWithoutData_sourceInput[]
    updateMany?: analytics_eventsUpdateManyWithWhereWithoutData_sourceInput | analytics_eventsUpdateManyWithWhereWithoutData_sourceInput[]
    deleteMany?: analytics_eventsScalarWhereInput | analytics_eventsScalarWhereInput[]
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type analytics_eventsUncheckedUpdateManyWithoutData_sourceNestedInput = {
    create?: XOR<analytics_eventsCreateWithoutData_sourceInput, analytics_eventsUncheckedCreateWithoutData_sourceInput> | analytics_eventsCreateWithoutData_sourceInput[] | analytics_eventsUncheckedCreateWithoutData_sourceInput[]
    connectOrCreate?: analytics_eventsCreateOrConnectWithoutData_sourceInput | analytics_eventsCreateOrConnectWithoutData_sourceInput[]
    upsert?: analytics_eventsUpsertWithWhereUniqueWithoutData_sourceInput | analytics_eventsUpsertWithWhereUniqueWithoutData_sourceInput[]
    createMany?: analytics_eventsCreateManyData_sourceInputEnvelope
    set?: analytics_eventsWhereUniqueInput | analytics_eventsWhereUniqueInput[]
    disconnect?: analytics_eventsWhereUniqueInput | analytics_eventsWhereUniqueInput[]
    delete?: analytics_eventsWhereUniqueInput | analytics_eventsWhereUniqueInput[]
    connect?: analytics_eventsWhereUniqueInput | analytics_eventsWhereUniqueInput[]
    update?: analytics_eventsUpdateWithWhereUniqueWithoutData_sourceInput | analytics_eventsUpdateWithWhereUniqueWithoutData_sourceInput[]
    updateMany?: analytics_eventsUpdateManyWithWhereWithoutData_sourceInput | analytics_eventsUpdateManyWithWhereWithoutData_sourceInput[]
    deleteMany?: analytics_eventsScalarWhereInput | analytics_eventsScalarWhereInput[]
  }

  export type data_sourcesCreateNestedOneWithoutAnalytics_eventsInput = {
    create?: XOR<data_sourcesCreateWithoutAnalytics_eventsInput, data_sourcesUncheckedCreateWithoutAnalytics_eventsInput>
    connectOrCreate?: data_sourcesCreateOrConnectWithoutAnalytics_eventsInput
    connect?: data_sourcesWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutAnalytics_eventsInput = {
    create?: XOR<usersCreateWithoutAnalytics_eventsInput, usersUncheckedCreateWithoutAnalytics_eventsInput>
    connectOrCreate?: usersCreateOrConnectWithoutAnalytics_eventsInput
    connect?: usersWhereUniqueInput
  }

  export type data_sourcesUpdateOneRequiredWithoutAnalytics_eventsNestedInput = {
    create?: XOR<data_sourcesCreateWithoutAnalytics_eventsInput, data_sourcesUncheckedCreateWithoutAnalytics_eventsInput>
    connectOrCreate?: data_sourcesCreateOrConnectWithoutAnalytics_eventsInput
    upsert?: data_sourcesUpsertWithoutAnalytics_eventsInput
    connect?: data_sourcesWhereUniqueInput
    update?: XOR<XOR<data_sourcesUpdateToOneWithWhereWithoutAnalytics_eventsInput, data_sourcesUpdateWithoutAnalytics_eventsInput>, data_sourcesUncheckedUpdateWithoutAnalytics_eventsInput>
  }

  export type usersUpdateOneWithoutAnalytics_eventsNestedInput = {
    create?: XOR<usersCreateWithoutAnalytics_eventsInput, usersUncheckedCreateWithoutAnalytics_eventsInput>
    connectOrCreate?: usersCreateOrConnectWithoutAnalytics_eventsInput
    upsert?: usersUpsertWithoutAnalytics_eventsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutAnalytics_eventsInput, usersUpdateWithoutAnalytics_eventsInput>, usersUncheckedUpdateWithoutAnalytics_eventsInput>
  }

  export type csvdataCreateselectedfieldsInput = {
    set: string[]
  }

  export type usersCreateNestedOneWithoutCsvdataInput = {
    create?: XOR<usersCreateWithoutCsvdataInput, usersUncheckedCreateWithoutCsvdataInput>
    connectOrCreate?: usersCreateOrConnectWithoutCsvdataInput
    connect?: usersWhereUniqueInput
  }

  export type data_sourcesCreateNestedManyWithoutCsv_dataInput = {
    create?: XOR<data_sourcesCreateWithoutCsv_dataInput, data_sourcesUncheckedCreateWithoutCsv_dataInput> | data_sourcesCreateWithoutCsv_dataInput[] | data_sourcesUncheckedCreateWithoutCsv_dataInput[]
    connectOrCreate?: data_sourcesCreateOrConnectWithoutCsv_dataInput | data_sourcesCreateOrConnectWithoutCsv_dataInput[]
    createMany?: data_sourcesCreateManyCsv_dataInputEnvelope
    connect?: data_sourcesWhereUniqueInput | data_sourcesWhereUniqueInput[]
  }

  export type data_sourcesUncheckedCreateNestedManyWithoutCsv_dataInput = {
    create?: XOR<data_sourcesCreateWithoutCsv_dataInput, data_sourcesUncheckedCreateWithoutCsv_dataInput> | data_sourcesCreateWithoutCsv_dataInput[] | data_sourcesUncheckedCreateWithoutCsv_dataInput[]
    connectOrCreate?: data_sourcesCreateOrConnectWithoutCsv_dataInput | data_sourcesCreateOrConnectWithoutCsv_dataInput[]
    createMany?: data_sourcesCreateManyCsv_dataInputEnvelope
    connect?: data_sourcesWhereUniqueInput | data_sourcesWhereUniqueInput[]
  }

  export type csvdataUpdateselectedfieldsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type usersUpdateOneWithoutCsvdataNestedInput = {
    create?: XOR<usersCreateWithoutCsvdataInput, usersUncheckedCreateWithoutCsvdataInput>
    connectOrCreate?: usersCreateOrConnectWithoutCsvdataInput
    upsert?: usersUpsertWithoutCsvdataInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutCsvdataInput, usersUpdateWithoutCsvdataInput>, usersUncheckedUpdateWithoutCsvdataInput>
  }

  export type data_sourcesUpdateManyWithoutCsv_dataNestedInput = {
    create?: XOR<data_sourcesCreateWithoutCsv_dataInput, data_sourcesUncheckedCreateWithoutCsv_dataInput> | data_sourcesCreateWithoutCsv_dataInput[] | data_sourcesUncheckedCreateWithoutCsv_dataInput[]
    connectOrCreate?: data_sourcesCreateOrConnectWithoutCsv_dataInput | data_sourcesCreateOrConnectWithoutCsv_dataInput[]
    upsert?: data_sourcesUpsertWithWhereUniqueWithoutCsv_dataInput | data_sourcesUpsertWithWhereUniqueWithoutCsv_dataInput[]
    createMany?: data_sourcesCreateManyCsv_dataInputEnvelope
    set?: data_sourcesWhereUniqueInput | data_sourcesWhereUniqueInput[]
    disconnect?: data_sourcesWhereUniqueInput | data_sourcesWhereUniqueInput[]
    delete?: data_sourcesWhereUniqueInput | data_sourcesWhereUniqueInput[]
    connect?: data_sourcesWhereUniqueInput | data_sourcesWhereUniqueInput[]
    update?: data_sourcesUpdateWithWhereUniqueWithoutCsv_dataInput | data_sourcesUpdateWithWhereUniqueWithoutCsv_dataInput[]
    updateMany?: data_sourcesUpdateManyWithWhereWithoutCsv_dataInput | data_sourcesUpdateManyWithWhereWithoutCsv_dataInput[]
    deleteMany?: data_sourcesScalarWhereInput | data_sourcesScalarWhereInput[]
  }

  export type data_sourcesUncheckedUpdateManyWithoutCsv_dataNestedInput = {
    create?: XOR<data_sourcesCreateWithoutCsv_dataInput, data_sourcesUncheckedCreateWithoutCsv_dataInput> | data_sourcesCreateWithoutCsv_dataInput[] | data_sourcesUncheckedCreateWithoutCsv_dataInput[]
    connectOrCreate?: data_sourcesCreateOrConnectWithoutCsv_dataInput | data_sourcesCreateOrConnectWithoutCsv_dataInput[]
    upsert?: data_sourcesUpsertWithWhereUniqueWithoutCsv_dataInput | data_sourcesUpsertWithWhereUniqueWithoutCsv_dataInput[]
    createMany?: data_sourcesCreateManyCsv_dataInputEnvelope
    set?: data_sourcesWhereUniqueInput | data_sourcesWhereUniqueInput[]
    disconnect?: data_sourcesWhereUniqueInput | data_sourcesWhereUniqueInput[]
    delete?: data_sourcesWhereUniqueInput | data_sourcesWhereUniqueInput[]
    connect?: data_sourcesWhereUniqueInput | data_sourcesWhereUniqueInput[]
    update?: data_sourcesUpdateWithWhereUniqueWithoutCsv_dataInput | data_sourcesUpdateWithWhereUniqueWithoutCsv_dataInput[]
    updateMany?: data_sourcesUpdateManyWithWhereWithoutCsv_dataInput | data_sourcesUpdateManyWithWhereWithoutCsv_dataInput[]
    deleteMany?: data_sourcesScalarWhereInput | data_sourcesScalarWhereInput[]
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
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type csvdataCreateWithoutUsersInput = {
    id?: bigint | number
    bucket_name?: string | null
    file_name?: string | null
    selectedfields?: csvdataCreateselectedfieldsInput | string[]
    createdat?: Date | string | null
    updatedat?: Date | string | null
    connection_name?: string | null
    file_size_bytes?: bigint | number | null
    row_count?: number | null
    column_count?: number | null
    data_schema?: NullableJsonNullValueInput | InputJsonValue
    processing_status?: string | null
    error_message?: string | null
    checksum?: string | null
    data_sources?: data_sourcesCreateNestedManyWithoutCsv_dataInput
  }

  export type csvdataUncheckedCreateWithoutUsersInput = {
    id?: bigint | number
    bucket_name?: string | null
    file_name?: string | null
    selectedfields?: csvdataCreateselectedfieldsInput | string[]
    createdat?: Date | string | null
    updatedat?: Date | string | null
    connection_name?: string | null
    file_size_bytes?: bigint | number | null
    row_count?: number | null
    column_count?: number | null
    data_schema?: NullableJsonNullValueInput | InputJsonValue
    processing_status?: string | null
    error_message?: string | null
    checksum?: string | null
    data_sources?: data_sourcesUncheckedCreateNestedManyWithoutCsv_dataInput
  }

  export type csvdataCreateOrConnectWithoutUsersInput = {
    where: csvdataWhereUniqueInput
    create: XOR<csvdataCreateWithoutUsersInput, csvdataUncheckedCreateWithoutUsersInput>
  }

  export type csvdataCreateManyUsersInputEnvelope = {
    data: csvdataCreateManyUsersInput | csvdataCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type data_sourcesCreateWithoutUserInput = {
    id?: bigint | number
    source_name?: string | null
    source_type?: string | null
    database_name?: string | null
    table_name?: string | null
    row_count?: number | null
    column_count?: number | null
    data_schema?: NullableJsonNullValueInput | InputJsonValue
    last_updated?: Date | string | null
    cache_key?: string | null
    partition_info?: NullableJsonNullValueInput | InputJsonValue
    index_info?: NullableJsonNullValueInput | InputJsonValue
    avg_query_time_ms?: number | null
    total_queries?: number | null
    last_accessed?: Date | string | null
    data_quality_score?: number | null
    null_percentage?: number | null
    duplicate_count?: number | null
    api_connection?: api_connectionsCreateNestedOneWithoutData_sourcesInput
    csv_data?: csvdataCreateNestedOneWithoutData_sourcesInput
    database_connection?: database_connectionsCreateNestedOneWithoutData_sourcesInput
    analytics_events?: analytics_eventsCreateNestedManyWithoutData_sourceInput
  }

  export type data_sourcesUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    source_name?: string | null
    source_type?: string | null
    database_name?: string | null
    table_name?: string | null
    database_connection_id?: number | null
    csv_data_id?: bigint | number | null
    api_connection_id?: number | null
    row_count?: number | null
    column_count?: number | null
    data_schema?: NullableJsonNullValueInput | InputJsonValue
    last_updated?: Date | string | null
    cache_key?: string | null
    partition_info?: NullableJsonNullValueInput | InputJsonValue
    index_info?: NullableJsonNullValueInput | InputJsonValue
    avg_query_time_ms?: number | null
    total_queries?: number | null
    last_accessed?: Date | string | null
    data_quality_score?: number | null
    null_percentage?: number | null
    duplicate_count?: number | null
    analytics_events?: analytics_eventsUncheckedCreateNestedManyWithoutData_sourceInput
  }

  export type data_sourcesCreateOrConnectWithoutUserInput = {
    where: data_sourcesWhereUniqueInput
    create: XOR<data_sourcesCreateWithoutUserInput, data_sourcesUncheckedCreateWithoutUserInput>
  }

  export type data_sourcesCreateManyUserInputEnvelope = {
    data: data_sourcesCreateManyUserInput | data_sourcesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type database_connectionsCreateWithoutUserInput = {
    connection_name: string
    database_name: string
    database_type: string
    host: string
    port?: number | null
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    api_connections?: api_connectionsCreateNestedManyWithoutConnectionInput
    data_sources?: data_sourcesCreateNestedManyWithoutDatabase_connectionInput
  }

  export type database_connectionsUncheckedCreateWithoutUserInput = {
    id?: number
    connection_name: string
    database_name: string
    database_type: string
    host: string
    port?: number | null
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    api_connections?: api_connectionsUncheckedCreateNestedManyWithoutConnectionInput
    data_sources?: data_sourcesUncheckedCreateNestedManyWithoutDatabase_connectionInput
  }

  export type database_connectionsCreateOrConnectWithoutUserInput = {
    where: database_connectionsWhereUniqueInput
    create: XOR<database_connectionsCreateWithoutUserInput, database_connectionsUncheckedCreateWithoutUserInput>
  }

  export type database_connectionsCreateManyUserInputEnvelope = {
    data: database_connectionsCreateManyUserInput | database_connectionsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type datasetsCreateWithoutUserInput = {
    dataset_name: string
    dataset_description?: string | null
    sql_query: string
    connection_id?: number | null
    visualization_type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    selectedField?: string | null
    x_axis?: string | null
    y_axis?: string | null
    issample?: boolean | null
    is_stacked?: boolean | null
    api_id?: number | null
    csv_id?: number | null
    filters?: NullableJsonNullValueInput | InputJsonValue
    table_name?: string | null
    selectedAggregate?: string | null
    selectedGroupByValues?: datasetsCreateselectedGroupByValuesInput | string[]
    selectedDateBy?: string | null
  }

  export type datasetsUncheckedCreateWithoutUserInput = {
    id?: number
    dataset_name: string
    dataset_description?: string | null
    sql_query: string
    connection_id?: number | null
    visualization_type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    selectedField?: string | null
    x_axis?: string | null
    y_axis?: string | null
    issample?: boolean | null
    is_stacked?: boolean | null
    api_id?: number | null
    csv_id?: number | null
    filters?: NullableJsonNullValueInput | InputJsonValue
    table_name?: string | null
    selectedAggregate?: string | null
    selectedGroupByValues?: datasetsCreateselectedGroupByValuesInput | string[]
    selectedDateBy?: string | null
  }

  export type datasetsCreateOrConnectWithoutUserInput = {
    where: datasetsWhereUniqueInput
    create: XOR<datasetsCreateWithoutUserInput, datasetsUncheckedCreateWithoutUserInput>
  }

  export type datasetsCreateManyUserInputEnvelope = {
    data: datasetsCreateManyUserInput | datasetsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type analytics_eventsCreateWithoutUserInput = {
    id?: bigint | number
    event_type: string
    event_metadata?: JsonNullValueInput | InputJsonValue
    timestamp?: Date | string
    session_id?: string | null
    ip_address?: string | null
    data_source: data_sourcesCreateNestedOneWithoutAnalytics_eventsInput
  }

  export type analytics_eventsUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    data_source_id: bigint | number
    event_type: string
    event_metadata?: JsonNullValueInput | InputJsonValue
    timestamp?: Date | string
    session_id?: string | null
    ip_address?: string | null
  }

  export type analytics_eventsCreateOrConnectWithoutUserInput = {
    where: analytics_eventsWhereUniqueInput
    create: XOR<analytics_eventsCreateWithoutUserInput, analytics_eventsUncheckedCreateWithoutUserInput>
  }

  export type analytics_eventsCreateManyUserInputEnvelope = {
    data: analytics_eventsCreateManyUserInput | analytics_eventsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type csvdataUpsertWithWhereUniqueWithoutUsersInput = {
    where: csvdataWhereUniqueInput
    update: XOR<csvdataUpdateWithoutUsersInput, csvdataUncheckedUpdateWithoutUsersInput>
    create: XOR<csvdataCreateWithoutUsersInput, csvdataUncheckedCreateWithoutUsersInput>
  }

  export type csvdataUpdateWithWhereUniqueWithoutUsersInput = {
    where: csvdataWhereUniqueInput
    data: XOR<csvdataUpdateWithoutUsersInput, csvdataUncheckedUpdateWithoutUsersInput>
  }

  export type csvdataUpdateManyWithWhereWithoutUsersInput = {
    where: csvdataScalarWhereInput
    data: XOR<csvdataUpdateManyMutationInput, csvdataUncheckedUpdateManyWithoutUsersInput>
  }

  export type csvdataScalarWhereInput = {
    AND?: csvdataScalarWhereInput | csvdataScalarWhereInput[]
    OR?: csvdataScalarWhereInput[]
    NOT?: csvdataScalarWhereInput | csvdataScalarWhereInput[]
    id?: BigIntFilter<"csvdata"> | bigint | number
    user_id?: StringNullableFilter<"csvdata"> | string | null
    bucket_name?: StringNullableFilter<"csvdata"> | string | null
    file_name?: StringNullableFilter<"csvdata"> | string | null
    selectedfields?: StringNullableListFilter<"csvdata">
    createdat?: DateTimeNullableFilter<"csvdata"> | Date | string | null
    updatedat?: DateTimeNullableFilter<"csvdata"> | Date | string | null
    connection_name?: StringNullableFilter<"csvdata"> | string | null
    file_size_bytes?: BigIntNullableFilter<"csvdata"> | bigint | number | null
    row_count?: IntNullableFilter<"csvdata"> | number | null
    column_count?: IntNullableFilter<"csvdata"> | number | null
    data_schema?: JsonNullableFilter<"csvdata">
    processing_status?: StringNullableFilter<"csvdata"> | string | null
    error_message?: StringNullableFilter<"csvdata"> | string | null
    checksum?: StringNullableFilter<"csvdata"> | string | null
  }

  export type data_sourcesUpsertWithWhereUniqueWithoutUserInput = {
    where: data_sourcesWhereUniqueInput
    update: XOR<data_sourcesUpdateWithoutUserInput, data_sourcesUncheckedUpdateWithoutUserInput>
    create: XOR<data_sourcesCreateWithoutUserInput, data_sourcesUncheckedCreateWithoutUserInput>
  }

  export type data_sourcesUpdateWithWhereUniqueWithoutUserInput = {
    where: data_sourcesWhereUniqueInput
    data: XOR<data_sourcesUpdateWithoutUserInput, data_sourcesUncheckedUpdateWithoutUserInput>
  }

  export type data_sourcesUpdateManyWithWhereWithoutUserInput = {
    where: data_sourcesScalarWhereInput
    data: XOR<data_sourcesUpdateManyMutationInput, data_sourcesUncheckedUpdateManyWithoutUserInput>
  }

  export type data_sourcesScalarWhereInput = {
    AND?: data_sourcesScalarWhereInput | data_sourcesScalarWhereInput[]
    OR?: data_sourcesScalarWhereInput[]
    NOT?: data_sourcesScalarWhereInput | data_sourcesScalarWhereInput[]
    id?: BigIntFilter<"data_sources"> | bigint | number
    user_id?: StringNullableFilter<"data_sources"> | string | null
    source_name?: StringNullableFilter<"data_sources"> | string | null
    source_type?: StringNullableFilter<"data_sources"> | string | null
    database_name?: StringNullableFilter<"data_sources"> | string | null
    table_name?: StringNullableFilter<"data_sources"> | string | null
    database_connection_id?: IntNullableFilter<"data_sources"> | number | null
    csv_data_id?: BigIntNullableFilter<"data_sources"> | bigint | number | null
    api_connection_id?: IntNullableFilter<"data_sources"> | number | null
    row_count?: IntNullableFilter<"data_sources"> | number | null
    column_count?: IntNullableFilter<"data_sources"> | number | null
    data_schema?: JsonNullableFilter<"data_sources">
    last_updated?: DateTimeNullableFilter<"data_sources"> | Date | string | null
    cache_key?: StringNullableFilter<"data_sources"> | string | null
    partition_info?: JsonNullableFilter<"data_sources">
    index_info?: JsonNullableFilter<"data_sources">
    avg_query_time_ms?: FloatNullableFilter<"data_sources"> | number | null
    total_queries?: IntNullableFilter<"data_sources"> | number | null
    last_accessed?: DateTimeNullableFilter<"data_sources"> | Date | string | null
    data_quality_score?: FloatNullableFilter<"data_sources"> | number | null
    null_percentage?: FloatNullableFilter<"data_sources"> | number | null
    duplicate_count?: IntNullableFilter<"data_sources"> | number | null
  }

  export type database_connectionsUpsertWithWhereUniqueWithoutUserInput = {
    where: database_connectionsWhereUniqueInput
    update: XOR<database_connectionsUpdateWithoutUserInput, database_connectionsUncheckedUpdateWithoutUserInput>
    create: XOR<database_connectionsCreateWithoutUserInput, database_connectionsUncheckedCreateWithoutUserInput>
  }

  export type database_connectionsUpdateWithWhereUniqueWithoutUserInput = {
    where: database_connectionsWhereUniqueInput
    data: XOR<database_connectionsUpdateWithoutUserInput, database_connectionsUncheckedUpdateWithoutUserInput>
  }

  export type database_connectionsUpdateManyWithWhereWithoutUserInput = {
    where: database_connectionsScalarWhereInput
    data: XOR<database_connectionsUpdateManyMutationInput, database_connectionsUncheckedUpdateManyWithoutUserInput>
  }

  export type database_connectionsScalarWhereInput = {
    AND?: database_connectionsScalarWhereInput | database_connectionsScalarWhereInput[]
    OR?: database_connectionsScalarWhereInput[]
    NOT?: database_connectionsScalarWhereInput | database_connectionsScalarWhereInput[]
    id?: IntFilter<"database_connections"> | number
    connection_name?: StringFilter<"database_connections"> | string
    database_name?: StringFilter<"database_connections"> | string
    database_type?: StringFilter<"database_connections"> | string
    host?: StringFilter<"database_connections"> | string
    port?: IntNullableFilter<"database_connections"> | number | null
    username?: StringFilter<"database_connections"> | string
    password?: StringFilter<"database_connections"> | string
    user_id?: StringFilter<"database_connections"> | string
    createdAt?: DateTimeFilter<"database_connections"> | Date | string
    updatedAt?: DateTimeFilter<"database_connections"> | Date | string
  }

  export type datasetsUpsertWithWhereUniqueWithoutUserInput = {
    where: datasetsWhereUniqueInput
    update: XOR<datasetsUpdateWithoutUserInput, datasetsUncheckedUpdateWithoutUserInput>
    create: XOR<datasetsCreateWithoutUserInput, datasetsUncheckedCreateWithoutUserInput>
  }

  export type datasetsUpdateWithWhereUniqueWithoutUserInput = {
    where: datasetsWhereUniqueInput
    data: XOR<datasetsUpdateWithoutUserInput, datasetsUncheckedUpdateWithoutUserInput>
  }

  export type datasetsUpdateManyWithWhereWithoutUserInput = {
    where: datasetsScalarWhereInput
    data: XOR<datasetsUpdateManyMutationInput, datasetsUncheckedUpdateManyWithoutUserInput>
  }

  export type datasetsScalarWhereInput = {
    AND?: datasetsScalarWhereInput | datasetsScalarWhereInput[]
    OR?: datasetsScalarWhereInput[]
    NOT?: datasetsScalarWhereInput | datasetsScalarWhereInput[]
    id?: IntFilter<"datasets"> | number
    dataset_name?: StringFilter<"datasets"> | string
    dataset_description?: StringNullableFilter<"datasets"> | string | null
    sql_query?: StringFilter<"datasets"> | string
    connection_id?: IntNullableFilter<"datasets"> | number | null
    user_id?: StringFilter<"datasets"> | string
    visualization_type?: StringFilter<"datasets"> | string
    createdAt?: DateTimeFilter<"datasets"> | Date | string
    updatedAt?: DateTimeFilter<"datasets"> | Date | string
    selectedField?: StringNullableFilter<"datasets"> | string | null
    x_axis?: StringNullableFilter<"datasets"> | string | null
    y_axis?: StringNullableFilter<"datasets"> | string | null
    issample?: BoolNullableFilter<"datasets"> | boolean | null
    is_stacked?: BoolNullableFilter<"datasets"> | boolean | null
    api_id?: IntNullableFilter<"datasets"> | number | null
    csv_id?: IntNullableFilter<"datasets"> | number | null
    filters?: JsonNullableFilter<"datasets">
    table_name?: StringNullableFilter<"datasets"> | string | null
    selectedAggregate?: StringNullableFilter<"datasets"> | string | null
    selectedGroupByValues?: StringNullableListFilter<"datasets">
    selectedDateBy?: StringNullableFilter<"datasets"> | string | null
  }

  export type analytics_eventsUpsertWithWhereUniqueWithoutUserInput = {
    where: analytics_eventsWhereUniqueInput
    update: XOR<analytics_eventsUpdateWithoutUserInput, analytics_eventsUncheckedUpdateWithoutUserInput>
    create: XOR<analytics_eventsCreateWithoutUserInput, analytics_eventsUncheckedCreateWithoutUserInput>
  }

  export type analytics_eventsUpdateWithWhereUniqueWithoutUserInput = {
    where: analytics_eventsWhereUniqueInput
    data: XOR<analytics_eventsUpdateWithoutUserInput, analytics_eventsUncheckedUpdateWithoutUserInput>
  }

  export type analytics_eventsUpdateManyWithWhereWithoutUserInput = {
    where: analytics_eventsScalarWhereInput
    data: XOR<analytics_eventsUpdateManyMutationInput, analytics_eventsUncheckedUpdateManyWithoutUserInput>
  }

  export type analytics_eventsScalarWhereInput = {
    AND?: analytics_eventsScalarWhereInput | analytics_eventsScalarWhereInput[]
    OR?: analytics_eventsScalarWhereInput[]
    NOT?: analytics_eventsScalarWhereInput | analytics_eventsScalarWhereInput[]
    id?: BigIntFilter<"analytics_events"> | bigint | number
    data_source_id?: BigIntFilter<"analytics_events"> | bigint | number
    event_type?: StringFilter<"analytics_events"> | string
    event_metadata?: JsonFilter<"analytics_events">
    timestamp?: DateTimeFilter<"analytics_events"> | Date | string
    user_id?: StringNullableFilter<"analytics_events"> | string | null
    session_id?: StringNullableFilter<"analytics_events"> | string | null
    ip_address?: StringNullableFilter<"analytics_events"> | string | null
  }

  export type database_connectionsCreateWithoutApi_connectionsInput = {
    connection_name: string
    database_name: string
    database_type: string
    host: string
    port?: number | null
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    data_sources?: data_sourcesCreateNestedManyWithoutDatabase_connectionInput
    user: usersCreateNestedOneWithoutConnectionsInput
  }

  export type database_connectionsUncheckedCreateWithoutApi_connectionsInput = {
    id?: number
    connection_name: string
    database_name: string
    database_type: string
    host: string
    port?: number | null
    username: string
    password: string
    user_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    data_sources?: data_sourcesUncheckedCreateNestedManyWithoutDatabase_connectionInput
  }

  export type database_connectionsCreateOrConnectWithoutApi_connectionsInput = {
    where: database_connectionsWhereUniqueInput
    create: XOR<database_connectionsCreateWithoutApi_connectionsInput, database_connectionsUncheckedCreateWithoutApi_connectionsInput>
  }

  export type data_sourcesCreateWithoutApi_connectionInput = {
    id?: bigint | number
    source_name?: string | null
    source_type?: string | null
    database_name?: string | null
    table_name?: string | null
    row_count?: number | null
    column_count?: number | null
    data_schema?: NullableJsonNullValueInput | InputJsonValue
    last_updated?: Date | string | null
    cache_key?: string | null
    partition_info?: NullableJsonNullValueInput | InputJsonValue
    index_info?: NullableJsonNullValueInput | InputJsonValue
    avg_query_time_ms?: number | null
    total_queries?: number | null
    last_accessed?: Date | string | null
    data_quality_score?: number | null
    null_percentage?: number | null
    duplicate_count?: number | null
    csv_data?: csvdataCreateNestedOneWithoutData_sourcesInput
    database_connection?: database_connectionsCreateNestedOneWithoutData_sourcesInput
    user?: usersCreateNestedOneWithoutData_sourcesInput
    analytics_events?: analytics_eventsCreateNestedManyWithoutData_sourceInput
  }

  export type data_sourcesUncheckedCreateWithoutApi_connectionInput = {
    id?: bigint | number
    user_id?: string | null
    source_name?: string | null
    source_type?: string | null
    database_name?: string | null
    table_name?: string | null
    database_connection_id?: number | null
    csv_data_id?: bigint | number | null
    row_count?: number | null
    column_count?: number | null
    data_schema?: NullableJsonNullValueInput | InputJsonValue
    last_updated?: Date | string | null
    cache_key?: string | null
    partition_info?: NullableJsonNullValueInput | InputJsonValue
    index_info?: NullableJsonNullValueInput | InputJsonValue
    avg_query_time_ms?: number | null
    total_queries?: number | null
    last_accessed?: Date | string | null
    data_quality_score?: number | null
    null_percentage?: number | null
    duplicate_count?: number | null
    analytics_events?: analytics_eventsUncheckedCreateNestedManyWithoutData_sourceInput
  }

  export type data_sourcesCreateOrConnectWithoutApi_connectionInput = {
    where: data_sourcesWhereUniqueInput
    create: XOR<data_sourcesCreateWithoutApi_connectionInput, data_sourcesUncheckedCreateWithoutApi_connectionInput>
  }

  export type data_sourcesCreateManyApi_connectionInputEnvelope = {
    data: data_sourcesCreateManyApi_connectionInput | data_sourcesCreateManyApi_connectionInput[]
    skipDuplicates?: boolean
  }

  export type database_connectionsUpsertWithoutApi_connectionsInput = {
    update: XOR<database_connectionsUpdateWithoutApi_connectionsInput, database_connectionsUncheckedUpdateWithoutApi_connectionsInput>
    create: XOR<database_connectionsCreateWithoutApi_connectionsInput, database_connectionsUncheckedCreateWithoutApi_connectionsInput>
    where?: database_connectionsWhereInput
  }

  export type database_connectionsUpdateToOneWithWhereWithoutApi_connectionsInput = {
    where?: database_connectionsWhereInput
    data: XOR<database_connectionsUpdateWithoutApi_connectionsInput, database_connectionsUncheckedUpdateWithoutApi_connectionsInput>
  }

  export type database_connectionsUpdateWithoutApi_connectionsInput = {
    connection_name?: StringFieldUpdateOperationsInput | string
    database_name?: StringFieldUpdateOperationsInput | string
    database_type?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    port?: NullableIntFieldUpdateOperationsInput | number | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    data_sources?: data_sourcesUpdateManyWithoutDatabase_connectionNestedInput
    user?: usersUpdateOneRequiredWithoutConnectionsNestedInput
  }

  export type database_connectionsUncheckedUpdateWithoutApi_connectionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    connection_name?: StringFieldUpdateOperationsInput | string
    database_name?: StringFieldUpdateOperationsInput | string
    database_type?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    port?: NullableIntFieldUpdateOperationsInput | number | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    data_sources?: data_sourcesUncheckedUpdateManyWithoutDatabase_connectionNestedInput
  }

  export type data_sourcesUpsertWithWhereUniqueWithoutApi_connectionInput = {
    where: data_sourcesWhereUniqueInput
    update: XOR<data_sourcesUpdateWithoutApi_connectionInput, data_sourcesUncheckedUpdateWithoutApi_connectionInput>
    create: XOR<data_sourcesCreateWithoutApi_connectionInput, data_sourcesUncheckedCreateWithoutApi_connectionInput>
  }

  export type data_sourcesUpdateWithWhereUniqueWithoutApi_connectionInput = {
    where: data_sourcesWhereUniqueInput
    data: XOR<data_sourcesUpdateWithoutApi_connectionInput, data_sourcesUncheckedUpdateWithoutApi_connectionInput>
  }

  export type data_sourcesUpdateManyWithWhereWithoutApi_connectionInput = {
    where: data_sourcesScalarWhereInput
    data: XOR<data_sourcesUpdateManyMutationInput, data_sourcesUncheckedUpdateManyWithoutApi_connectionInput>
  }

  export type api_connectionsCreateWithoutConnectionInput = {
    connection_name: string
    api_url: string
    api_key?: string | null
    headers?: NullableJsonNullValueInput | InputJsonValue
    user_id: string
    created_at?: Date | string
    updated_at?: Date | string
    table_name?: string | null
    data_sources?: data_sourcesCreateNestedManyWithoutApi_connectionInput
  }

  export type api_connectionsUncheckedCreateWithoutConnectionInput = {
    id?: number
    connection_name: string
    api_url: string
    api_key?: string | null
    headers?: NullableJsonNullValueInput | InputJsonValue
    user_id: string
    created_at?: Date | string
    updated_at?: Date | string
    table_name?: string | null
    data_sources?: data_sourcesUncheckedCreateNestedManyWithoutApi_connectionInput
  }

  export type api_connectionsCreateOrConnectWithoutConnectionInput = {
    where: api_connectionsWhereUniqueInput
    create: XOR<api_connectionsCreateWithoutConnectionInput, api_connectionsUncheckedCreateWithoutConnectionInput>
  }

  export type api_connectionsCreateManyConnectionInputEnvelope = {
    data: api_connectionsCreateManyConnectionInput | api_connectionsCreateManyConnectionInput[]
    skipDuplicates?: boolean
  }

  export type data_sourcesCreateWithoutDatabase_connectionInput = {
    id?: bigint | number
    source_name?: string | null
    source_type?: string | null
    database_name?: string | null
    table_name?: string | null
    row_count?: number | null
    column_count?: number | null
    data_schema?: NullableJsonNullValueInput | InputJsonValue
    last_updated?: Date | string | null
    cache_key?: string | null
    partition_info?: NullableJsonNullValueInput | InputJsonValue
    index_info?: NullableJsonNullValueInput | InputJsonValue
    avg_query_time_ms?: number | null
    total_queries?: number | null
    last_accessed?: Date | string | null
    data_quality_score?: number | null
    null_percentage?: number | null
    duplicate_count?: number | null
    api_connection?: api_connectionsCreateNestedOneWithoutData_sourcesInput
    csv_data?: csvdataCreateNestedOneWithoutData_sourcesInput
    user?: usersCreateNestedOneWithoutData_sourcesInput
    analytics_events?: analytics_eventsCreateNestedManyWithoutData_sourceInput
  }

  export type data_sourcesUncheckedCreateWithoutDatabase_connectionInput = {
    id?: bigint | number
    user_id?: string | null
    source_name?: string | null
    source_type?: string | null
    database_name?: string | null
    table_name?: string | null
    csv_data_id?: bigint | number | null
    api_connection_id?: number | null
    row_count?: number | null
    column_count?: number | null
    data_schema?: NullableJsonNullValueInput | InputJsonValue
    last_updated?: Date | string | null
    cache_key?: string | null
    partition_info?: NullableJsonNullValueInput | InputJsonValue
    index_info?: NullableJsonNullValueInput | InputJsonValue
    avg_query_time_ms?: number | null
    total_queries?: number | null
    last_accessed?: Date | string | null
    data_quality_score?: number | null
    null_percentage?: number | null
    duplicate_count?: number | null
    analytics_events?: analytics_eventsUncheckedCreateNestedManyWithoutData_sourceInput
  }

  export type data_sourcesCreateOrConnectWithoutDatabase_connectionInput = {
    where: data_sourcesWhereUniqueInput
    create: XOR<data_sourcesCreateWithoutDatabase_connectionInput, data_sourcesUncheckedCreateWithoutDatabase_connectionInput>
  }

  export type data_sourcesCreateManyDatabase_connectionInputEnvelope = {
    data: data_sourcesCreateManyDatabase_connectionInput | data_sourcesCreateManyDatabase_connectionInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutConnectionsInput = {
    user_id: string
    attributes: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    csvdata?: csvdataCreateNestedManyWithoutUsersInput
    data_sources?: data_sourcesCreateNestedManyWithoutUserInput
    datasets?: datasetsCreateNestedManyWithoutUserInput
    analytics_events?: analytics_eventsCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutConnectionsInput = {
    id?: number
    user_id: string
    attributes: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    csvdata?: csvdataUncheckedCreateNestedManyWithoutUsersInput
    data_sources?: data_sourcesUncheckedCreateNestedManyWithoutUserInput
    datasets?: datasetsUncheckedCreateNestedManyWithoutUserInput
    analytics_events?: analytics_eventsUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutConnectionsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutConnectionsInput, usersUncheckedCreateWithoutConnectionsInput>
  }

  export type api_connectionsUpsertWithWhereUniqueWithoutConnectionInput = {
    where: api_connectionsWhereUniqueInput
    update: XOR<api_connectionsUpdateWithoutConnectionInput, api_connectionsUncheckedUpdateWithoutConnectionInput>
    create: XOR<api_connectionsCreateWithoutConnectionInput, api_connectionsUncheckedCreateWithoutConnectionInput>
  }

  export type api_connectionsUpdateWithWhereUniqueWithoutConnectionInput = {
    where: api_connectionsWhereUniqueInput
    data: XOR<api_connectionsUpdateWithoutConnectionInput, api_connectionsUncheckedUpdateWithoutConnectionInput>
  }

  export type api_connectionsUpdateManyWithWhereWithoutConnectionInput = {
    where: api_connectionsScalarWhereInput
    data: XOR<api_connectionsUpdateManyMutationInput, api_connectionsUncheckedUpdateManyWithoutConnectionInput>
  }

  export type api_connectionsScalarWhereInput = {
    AND?: api_connectionsScalarWhereInput | api_connectionsScalarWhereInput[]
    OR?: api_connectionsScalarWhereInput[]
    NOT?: api_connectionsScalarWhereInput | api_connectionsScalarWhereInput[]
    id?: IntFilter<"api_connections"> | number
    connection_name?: StringFilter<"api_connections"> | string
    api_url?: StringFilter<"api_connections"> | string
    api_key?: StringNullableFilter<"api_connections"> | string | null
    headers?: JsonNullableFilter<"api_connections">
    user_id?: StringFilter<"api_connections"> | string
    created_at?: DateTimeFilter<"api_connections"> | Date | string
    updated_at?: DateTimeFilter<"api_connections"> | Date | string
    database_connection_id?: IntNullableFilter<"api_connections"> | number | null
    table_name?: StringNullableFilter<"api_connections"> | string | null
  }

  export type data_sourcesUpsertWithWhereUniqueWithoutDatabase_connectionInput = {
    where: data_sourcesWhereUniqueInput
    update: XOR<data_sourcesUpdateWithoutDatabase_connectionInput, data_sourcesUncheckedUpdateWithoutDatabase_connectionInput>
    create: XOR<data_sourcesCreateWithoutDatabase_connectionInput, data_sourcesUncheckedCreateWithoutDatabase_connectionInput>
  }

  export type data_sourcesUpdateWithWhereUniqueWithoutDatabase_connectionInput = {
    where: data_sourcesWhereUniqueInput
    data: XOR<data_sourcesUpdateWithoutDatabase_connectionInput, data_sourcesUncheckedUpdateWithoutDatabase_connectionInput>
  }

  export type data_sourcesUpdateManyWithWhereWithoutDatabase_connectionInput = {
    where: data_sourcesScalarWhereInput
    data: XOR<data_sourcesUpdateManyMutationInput, data_sourcesUncheckedUpdateManyWithoutDatabase_connectionInput>
  }

  export type usersUpsertWithoutConnectionsInput = {
    update: XOR<usersUpdateWithoutConnectionsInput, usersUncheckedUpdateWithoutConnectionsInput>
    create: XOR<usersCreateWithoutConnectionsInput, usersUncheckedCreateWithoutConnectionsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutConnectionsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutConnectionsInput, usersUncheckedUpdateWithoutConnectionsInput>
  }

  export type usersUpdateWithoutConnectionsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    attributes?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    csvdata?: csvdataUpdateManyWithoutUsersNestedInput
    data_sources?: data_sourcesUpdateManyWithoutUserNestedInput
    datasets?: datasetsUpdateManyWithoutUserNestedInput
    analytics_events?: analytics_eventsUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutConnectionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    attributes?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    csvdata?: csvdataUncheckedUpdateManyWithoutUsersNestedInput
    data_sources?: data_sourcesUncheckedUpdateManyWithoutUserNestedInput
    datasets?: datasetsUncheckedUpdateManyWithoutUserNestedInput
    analytics_events?: analytics_eventsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateWithoutDatasetsInput = {
    user_id: string
    attributes: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    csvdata?: csvdataCreateNestedManyWithoutUsersInput
    data_sources?: data_sourcesCreateNestedManyWithoutUserInput
    connections?: database_connectionsCreateNestedManyWithoutUserInput
    analytics_events?: analytics_eventsCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutDatasetsInput = {
    id?: number
    user_id: string
    attributes: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    csvdata?: csvdataUncheckedCreateNestedManyWithoutUsersInput
    data_sources?: data_sourcesUncheckedCreateNestedManyWithoutUserInput
    connections?: database_connectionsUncheckedCreateNestedManyWithoutUserInput
    analytics_events?: analytics_eventsUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutDatasetsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutDatasetsInput, usersUncheckedCreateWithoutDatasetsInput>
  }

  export type usersUpsertWithoutDatasetsInput = {
    update: XOR<usersUpdateWithoutDatasetsInput, usersUncheckedUpdateWithoutDatasetsInput>
    create: XOR<usersCreateWithoutDatasetsInput, usersUncheckedCreateWithoutDatasetsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutDatasetsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutDatasetsInput, usersUncheckedUpdateWithoutDatasetsInput>
  }

  export type usersUpdateWithoutDatasetsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    attributes?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    csvdata?: csvdataUpdateManyWithoutUsersNestedInput
    data_sources?: data_sourcesUpdateManyWithoutUserNestedInput
    connections?: database_connectionsUpdateManyWithoutUserNestedInput
    analytics_events?: analytics_eventsUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutDatasetsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    attributes?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    csvdata?: csvdataUncheckedUpdateManyWithoutUsersNestedInput
    data_sources?: data_sourcesUncheckedUpdateManyWithoutUserNestedInput
    connections?: database_connectionsUncheckedUpdateManyWithoutUserNestedInput
    analytics_events?: analytics_eventsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type api_connectionsCreateWithoutData_sourcesInput = {
    connection_name: string
    api_url: string
    api_key?: string | null
    headers?: NullableJsonNullValueInput | InputJsonValue
    user_id: string
    created_at?: Date | string
    updated_at?: Date | string
    table_name?: string | null
    connection?: database_connectionsCreateNestedOneWithoutApi_connectionsInput
  }

  export type api_connectionsUncheckedCreateWithoutData_sourcesInput = {
    id?: number
    connection_name: string
    api_url: string
    api_key?: string | null
    headers?: NullableJsonNullValueInput | InputJsonValue
    user_id: string
    created_at?: Date | string
    updated_at?: Date | string
    database_connection_id?: number | null
    table_name?: string | null
  }

  export type api_connectionsCreateOrConnectWithoutData_sourcesInput = {
    where: api_connectionsWhereUniqueInput
    create: XOR<api_connectionsCreateWithoutData_sourcesInput, api_connectionsUncheckedCreateWithoutData_sourcesInput>
  }

  export type csvdataCreateWithoutData_sourcesInput = {
    id?: bigint | number
    bucket_name?: string | null
    file_name?: string | null
    selectedfields?: csvdataCreateselectedfieldsInput | string[]
    createdat?: Date | string | null
    updatedat?: Date | string | null
    connection_name?: string | null
    file_size_bytes?: bigint | number | null
    row_count?: number | null
    column_count?: number | null
    data_schema?: NullableJsonNullValueInput | InputJsonValue
    processing_status?: string | null
    error_message?: string | null
    checksum?: string | null
    users?: usersCreateNestedOneWithoutCsvdataInput
  }

  export type csvdataUncheckedCreateWithoutData_sourcesInput = {
    id?: bigint | number
    user_id?: string | null
    bucket_name?: string | null
    file_name?: string | null
    selectedfields?: csvdataCreateselectedfieldsInput | string[]
    createdat?: Date | string | null
    updatedat?: Date | string | null
    connection_name?: string | null
    file_size_bytes?: bigint | number | null
    row_count?: number | null
    column_count?: number | null
    data_schema?: NullableJsonNullValueInput | InputJsonValue
    processing_status?: string | null
    error_message?: string | null
    checksum?: string | null
  }

  export type csvdataCreateOrConnectWithoutData_sourcesInput = {
    where: csvdataWhereUniqueInput
    create: XOR<csvdataCreateWithoutData_sourcesInput, csvdataUncheckedCreateWithoutData_sourcesInput>
  }

  export type database_connectionsCreateWithoutData_sourcesInput = {
    connection_name: string
    database_name: string
    database_type: string
    host: string
    port?: number | null
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    api_connections?: api_connectionsCreateNestedManyWithoutConnectionInput
    user: usersCreateNestedOneWithoutConnectionsInput
  }

  export type database_connectionsUncheckedCreateWithoutData_sourcesInput = {
    id?: number
    connection_name: string
    database_name: string
    database_type: string
    host: string
    port?: number | null
    username: string
    password: string
    user_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    api_connections?: api_connectionsUncheckedCreateNestedManyWithoutConnectionInput
  }

  export type database_connectionsCreateOrConnectWithoutData_sourcesInput = {
    where: database_connectionsWhereUniqueInput
    create: XOR<database_connectionsCreateWithoutData_sourcesInput, database_connectionsUncheckedCreateWithoutData_sourcesInput>
  }

  export type usersCreateWithoutData_sourcesInput = {
    user_id: string
    attributes: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    csvdata?: csvdataCreateNestedManyWithoutUsersInput
    connections?: database_connectionsCreateNestedManyWithoutUserInput
    datasets?: datasetsCreateNestedManyWithoutUserInput
    analytics_events?: analytics_eventsCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutData_sourcesInput = {
    id?: number
    user_id: string
    attributes: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    csvdata?: csvdataUncheckedCreateNestedManyWithoutUsersInput
    connections?: database_connectionsUncheckedCreateNestedManyWithoutUserInput
    datasets?: datasetsUncheckedCreateNestedManyWithoutUserInput
    analytics_events?: analytics_eventsUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutData_sourcesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutData_sourcesInput, usersUncheckedCreateWithoutData_sourcesInput>
  }

  export type analytics_eventsCreateWithoutData_sourceInput = {
    id?: bigint | number
    event_type: string
    event_metadata?: JsonNullValueInput | InputJsonValue
    timestamp?: Date | string
    session_id?: string | null
    ip_address?: string | null
    user?: usersCreateNestedOneWithoutAnalytics_eventsInput
  }

  export type analytics_eventsUncheckedCreateWithoutData_sourceInput = {
    id?: bigint | number
    event_type: string
    event_metadata?: JsonNullValueInput | InputJsonValue
    timestamp?: Date | string
    user_id?: string | null
    session_id?: string | null
    ip_address?: string | null
  }

  export type analytics_eventsCreateOrConnectWithoutData_sourceInput = {
    where: analytics_eventsWhereUniqueInput
    create: XOR<analytics_eventsCreateWithoutData_sourceInput, analytics_eventsUncheckedCreateWithoutData_sourceInput>
  }

  export type analytics_eventsCreateManyData_sourceInputEnvelope = {
    data: analytics_eventsCreateManyData_sourceInput | analytics_eventsCreateManyData_sourceInput[]
    skipDuplicates?: boolean
  }

  export type api_connectionsUpsertWithoutData_sourcesInput = {
    update: XOR<api_connectionsUpdateWithoutData_sourcesInput, api_connectionsUncheckedUpdateWithoutData_sourcesInput>
    create: XOR<api_connectionsCreateWithoutData_sourcesInput, api_connectionsUncheckedCreateWithoutData_sourcesInput>
    where?: api_connectionsWhereInput
  }

  export type api_connectionsUpdateToOneWithWhereWithoutData_sourcesInput = {
    where?: api_connectionsWhereInput
    data: XOR<api_connectionsUpdateWithoutData_sourcesInput, api_connectionsUncheckedUpdateWithoutData_sourcesInput>
  }

  export type api_connectionsUpdateWithoutData_sourcesInput = {
    connection_name?: StringFieldUpdateOperationsInput | string
    api_url?: StringFieldUpdateOperationsInput | string
    api_key?: NullableStringFieldUpdateOperationsInput | string | null
    headers?: NullableJsonNullValueInput | InputJsonValue
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    table_name?: NullableStringFieldUpdateOperationsInput | string | null
    connection?: database_connectionsUpdateOneWithoutApi_connectionsNestedInput
  }

  export type api_connectionsUncheckedUpdateWithoutData_sourcesInput = {
    id?: IntFieldUpdateOperationsInput | number
    connection_name?: StringFieldUpdateOperationsInput | string
    api_url?: StringFieldUpdateOperationsInput | string
    api_key?: NullableStringFieldUpdateOperationsInput | string | null
    headers?: NullableJsonNullValueInput | InputJsonValue
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    database_connection_id?: NullableIntFieldUpdateOperationsInput | number | null
    table_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type csvdataUpsertWithoutData_sourcesInput = {
    update: XOR<csvdataUpdateWithoutData_sourcesInput, csvdataUncheckedUpdateWithoutData_sourcesInput>
    create: XOR<csvdataCreateWithoutData_sourcesInput, csvdataUncheckedCreateWithoutData_sourcesInput>
    where?: csvdataWhereInput
  }

  export type csvdataUpdateToOneWithWhereWithoutData_sourcesInput = {
    where?: csvdataWhereInput
    data: XOR<csvdataUpdateWithoutData_sourcesInput, csvdataUncheckedUpdateWithoutData_sourcesInput>
  }

  export type csvdataUpdateWithoutData_sourcesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    bucket_name?: NullableStringFieldUpdateOperationsInput | string | null
    file_name?: NullableStringFieldUpdateOperationsInput | string | null
    selectedfields?: csvdataUpdateselectedfieldsInput | string[]
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    connection_name?: NullableStringFieldUpdateOperationsInput | string | null
    file_size_bytes?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    row_count?: NullableIntFieldUpdateOperationsInput | number | null
    column_count?: NullableIntFieldUpdateOperationsInput | number | null
    data_schema?: NullableJsonNullValueInput | InputJsonValue
    processing_status?: NullableStringFieldUpdateOperationsInput | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    users?: usersUpdateOneWithoutCsvdataNestedInput
  }

  export type csvdataUncheckedUpdateWithoutData_sourcesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    bucket_name?: NullableStringFieldUpdateOperationsInput | string | null
    file_name?: NullableStringFieldUpdateOperationsInput | string | null
    selectedfields?: csvdataUpdateselectedfieldsInput | string[]
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    connection_name?: NullableStringFieldUpdateOperationsInput | string | null
    file_size_bytes?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    row_count?: NullableIntFieldUpdateOperationsInput | number | null
    column_count?: NullableIntFieldUpdateOperationsInput | number | null
    data_schema?: NullableJsonNullValueInput | InputJsonValue
    processing_status?: NullableStringFieldUpdateOperationsInput | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type database_connectionsUpsertWithoutData_sourcesInput = {
    update: XOR<database_connectionsUpdateWithoutData_sourcesInput, database_connectionsUncheckedUpdateWithoutData_sourcesInput>
    create: XOR<database_connectionsCreateWithoutData_sourcesInput, database_connectionsUncheckedCreateWithoutData_sourcesInput>
    where?: database_connectionsWhereInput
  }

  export type database_connectionsUpdateToOneWithWhereWithoutData_sourcesInput = {
    where?: database_connectionsWhereInput
    data: XOR<database_connectionsUpdateWithoutData_sourcesInput, database_connectionsUncheckedUpdateWithoutData_sourcesInput>
  }

  export type database_connectionsUpdateWithoutData_sourcesInput = {
    connection_name?: StringFieldUpdateOperationsInput | string
    database_name?: StringFieldUpdateOperationsInput | string
    database_type?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    port?: NullableIntFieldUpdateOperationsInput | number | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    api_connections?: api_connectionsUpdateManyWithoutConnectionNestedInput
    user?: usersUpdateOneRequiredWithoutConnectionsNestedInput
  }

  export type database_connectionsUncheckedUpdateWithoutData_sourcesInput = {
    id?: IntFieldUpdateOperationsInput | number
    connection_name?: StringFieldUpdateOperationsInput | string
    database_name?: StringFieldUpdateOperationsInput | string
    database_type?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    port?: NullableIntFieldUpdateOperationsInput | number | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    api_connections?: api_connectionsUncheckedUpdateManyWithoutConnectionNestedInput
  }

  export type usersUpsertWithoutData_sourcesInput = {
    update: XOR<usersUpdateWithoutData_sourcesInput, usersUncheckedUpdateWithoutData_sourcesInput>
    create: XOR<usersCreateWithoutData_sourcesInput, usersUncheckedCreateWithoutData_sourcesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutData_sourcesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutData_sourcesInput, usersUncheckedUpdateWithoutData_sourcesInput>
  }

  export type usersUpdateWithoutData_sourcesInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    attributes?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    csvdata?: csvdataUpdateManyWithoutUsersNestedInput
    connections?: database_connectionsUpdateManyWithoutUserNestedInput
    datasets?: datasetsUpdateManyWithoutUserNestedInput
    analytics_events?: analytics_eventsUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutData_sourcesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    attributes?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    csvdata?: csvdataUncheckedUpdateManyWithoutUsersNestedInput
    connections?: database_connectionsUncheckedUpdateManyWithoutUserNestedInput
    datasets?: datasetsUncheckedUpdateManyWithoutUserNestedInput
    analytics_events?: analytics_eventsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type analytics_eventsUpsertWithWhereUniqueWithoutData_sourceInput = {
    where: analytics_eventsWhereUniqueInput
    update: XOR<analytics_eventsUpdateWithoutData_sourceInput, analytics_eventsUncheckedUpdateWithoutData_sourceInput>
    create: XOR<analytics_eventsCreateWithoutData_sourceInput, analytics_eventsUncheckedCreateWithoutData_sourceInput>
  }

  export type analytics_eventsUpdateWithWhereUniqueWithoutData_sourceInput = {
    where: analytics_eventsWhereUniqueInput
    data: XOR<analytics_eventsUpdateWithoutData_sourceInput, analytics_eventsUncheckedUpdateWithoutData_sourceInput>
  }

  export type analytics_eventsUpdateManyWithWhereWithoutData_sourceInput = {
    where: analytics_eventsScalarWhereInput
    data: XOR<analytics_eventsUpdateManyMutationInput, analytics_eventsUncheckedUpdateManyWithoutData_sourceInput>
  }

  export type data_sourcesCreateWithoutAnalytics_eventsInput = {
    id?: bigint | number
    source_name?: string | null
    source_type?: string | null
    database_name?: string | null
    table_name?: string | null
    row_count?: number | null
    column_count?: number | null
    data_schema?: NullableJsonNullValueInput | InputJsonValue
    last_updated?: Date | string | null
    cache_key?: string | null
    partition_info?: NullableJsonNullValueInput | InputJsonValue
    index_info?: NullableJsonNullValueInput | InputJsonValue
    avg_query_time_ms?: number | null
    total_queries?: number | null
    last_accessed?: Date | string | null
    data_quality_score?: number | null
    null_percentage?: number | null
    duplicate_count?: number | null
    api_connection?: api_connectionsCreateNestedOneWithoutData_sourcesInput
    csv_data?: csvdataCreateNestedOneWithoutData_sourcesInput
    database_connection?: database_connectionsCreateNestedOneWithoutData_sourcesInput
    user?: usersCreateNestedOneWithoutData_sourcesInput
  }

  export type data_sourcesUncheckedCreateWithoutAnalytics_eventsInput = {
    id?: bigint | number
    user_id?: string | null
    source_name?: string | null
    source_type?: string | null
    database_name?: string | null
    table_name?: string | null
    database_connection_id?: number | null
    csv_data_id?: bigint | number | null
    api_connection_id?: number | null
    row_count?: number | null
    column_count?: number | null
    data_schema?: NullableJsonNullValueInput | InputJsonValue
    last_updated?: Date | string | null
    cache_key?: string | null
    partition_info?: NullableJsonNullValueInput | InputJsonValue
    index_info?: NullableJsonNullValueInput | InputJsonValue
    avg_query_time_ms?: number | null
    total_queries?: number | null
    last_accessed?: Date | string | null
    data_quality_score?: number | null
    null_percentage?: number | null
    duplicate_count?: number | null
  }

  export type data_sourcesCreateOrConnectWithoutAnalytics_eventsInput = {
    where: data_sourcesWhereUniqueInput
    create: XOR<data_sourcesCreateWithoutAnalytics_eventsInput, data_sourcesUncheckedCreateWithoutAnalytics_eventsInput>
  }

  export type usersCreateWithoutAnalytics_eventsInput = {
    user_id: string
    attributes: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    csvdata?: csvdataCreateNestedManyWithoutUsersInput
    data_sources?: data_sourcesCreateNestedManyWithoutUserInput
    connections?: database_connectionsCreateNestedManyWithoutUserInput
    datasets?: datasetsCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutAnalytics_eventsInput = {
    id?: number
    user_id: string
    attributes: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    csvdata?: csvdataUncheckedCreateNestedManyWithoutUsersInput
    data_sources?: data_sourcesUncheckedCreateNestedManyWithoutUserInput
    connections?: database_connectionsUncheckedCreateNestedManyWithoutUserInput
    datasets?: datasetsUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutAnalytics_eventsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutAnalytics_eventsInput, usersUncheckedCreateWithoutAnalytics_eventsInput>
  }

  export type data_sourcesUpsertWithoutAnalytics_eventsInput = {
    update: XOR<data_sourcesUpdateWithoutAnalytics_eventsInput, data_sourcesUncheckedUpdateWithoutAnalytics_eventsInput>
    create: XOR<data_sourcesCreateWithoutAnalytics_eventsInput, data_sourcesUncheckedCreateWithoutAnalytics_eventsInput>
    where?: data_sourcesWhereInput
  }

  export type data_sourcesUpdateToOneWithWhereWithoutAnalytics_eventsInput = {
    where?: data_sourcesWhereInput
    data: XOR<data_sourcesUpdateWithoutAnalytics_eventsInput, data_sourcesUncheckedUpdateWithoutAnalytics_eventsInput>
  }

  export type data_sourcesUpdateWithoutAnalytics_eventsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    source_name?: NullableStringFieldUpdateOperationsInput | string | null
    source_type?: NullableStringFieldUpdateOperationsInput | string | null
    database_name?: NullableStringFieldUpdateOperationsInput | string | null
    table_name?: NullableStringFieldUpdateOperationsInput | string | null
    row_count?: NullableIntFieldUpdateOperationsInput | number | null
    column_count?: NullableIntFieldUpdateOperationsInput | number | null
    data_schema?: NullableJsonNullValueInput | InputJsonValue
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cache_key?: NullableStringFieldUpdateOperationsInput | string | null
    partition_info?: NullableJsonNullValueInput | InputJsonValue
    index_info?: NullableJsonNullValueInput | InputJsonValue
    avg_query_time_ms?: NullableFloatFieldUpdateOperationsInput | number | null
    total_queries?: NullableIntFieldUpdateOperationsInput | number | null
    last_accessed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_quality_score?: NullableFloatFieldUpdateOperationsInput | number | null
    null_percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    duplicate_count?: NullableIntFieldUpdateOperationsInput | number | null
    api_connection?: api_connectionsUpdateOneWithoutData_sourcesNestedInput
    csv_data?: csvdataUpdateOneWithoutData_sourcesNestedInput
    database_connection?: database_connectionsUpdateOneWithoutData_sourcesNestedInput
    user?: usersUpdateOneWithoutData_sourcesNestedInput
  }

  export type data_sourcesUncheckedUpdateWithoutAnalytics_eventsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    source_name?: NullableStringFieldUpdateOperationsInput | string | null
    source_type?: NullableStringFieldUpdateOperationsInput | string | null
    database_name?: NullableStringFieldUpdateOperationsInput | string | null
    table_name?: NullableStringFieldUpdateOperationsInput | string | null
    database_connection_id?: NullableIntFieldUpdateOperationsInput | number | null
    csv_data_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    api_connection_id?: NullableIntFieldUpdateOperationsInput | number | null
    row_count?: NullableIntFieldUpdateOperationsInput | number | null
    column_count?: NullableIntFieldUpdateOperationsInput | number | null
    data_schema?: NullableJsonNullValueInput | InputJsonValue
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cache_key?: NullableStringFieldUpdateOperationsInput | string | null
    partition_info?: NullableJsonNullValueInput | InputJsonValue
    index_info?: NullableJsonNullValueInput | InputJsonValue
    avg_query_time_ms?: NullableFloatFieldUpdateOperationsInput | number | null
    total_queries?: NullableIntFieldUpdateOperationsInput | number | null
    last_accessed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_quality_score?: NullableFloatFieldUpdateOperationsInput | number | null
    null_percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    duplicate_count?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type usersUpsertWithoutAnalytics_eventsInput = {
    update: XOR<usersUpdateWithoutAnalytics_eventsInput, usersUncheckedUpdateWithoutAnalytics_eventsInput>
    create: XOR<usersCreateWithoutAnalytics_eventsInput, usersUncheckedCreateWithoutAnalytics_eventsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutAnalytics_eventsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutAnalytics_eventsInput, usersUncheckedUpdateWithoutAnalytics_eventsInput>
  }

  export type usersUpdateWithoutAnalytics_eventsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    attributes?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    csvdata?: csvdataUpdateManyWithoutUsersNestedInput
    data_sources?: data_sourcesUpdateManyWithoutUserNestedInput
    connections?: database_connectionsUpdateManyWithoutUserNestedInput
    datasets?: datasetsUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutAnalytics_eventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    attributes?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    csvdata?: csvdataUncheckedUpdateManyWithoutUsersNestedInput
    data_sources?: data_sourcesUncheckedUpdateManyWithoutUserNestedInput
    connections?: database_connectionsUncheckedUpdateManyWithoutUserNestedInput
    datasets?: datasetsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateWithoutCsvdataInput = {
    user_id: string
    attributes: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    data_sources?: data_sourcesCreateNestedManyWithoutUserInput
    connections?: database_connectionsCreateNestedManyWithoutUserInput
    datasets?: datasetsCreateNestedManyWithoutUserInput
    analytics_events?: analytics_eventsCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutCsvdataInput = {
    id?: number
    user_id: string
    attributes: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    data_sources?: data_sourcesUncheckedCreateNestedManyWithoutUserInput
    connections?: database_connectionsUncheckedCreateNestedManyWithoutUserInput
    datasets?: datasetsUncheckedCreateNestedManyWithoutUserInput
    analytics_events?: analytics_eventsUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutCsvdataInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutCsvdataInput, usersUncheckedCreateWithoutCsvdataInput>
  }

  export type data_sourcesCreateWithoutCsv_dataInput = {
    id?: bigint | number
    source_name?: string | null
    source_type?: string | null
    database_name?: string | null
    table_name?: string | null
    row_count?: number | null
    column_count?: number | null
    data_schema?: NullableJsonNullValueInput | InputJsonValue
    last_updated?: Date | string | null
    cache_key?: string | null
    partition_info?: NullableJsonNullValueInput | InputJsonValue
    index_info?: NullableJsonNullValueInput | InputJsonValue
    avg_query_time_ms?: number | null
    total_queries?: number | null
    last_accessed?: Date | string | null
    data_quality_score?: number | null
    null_percentage?: number | null
    duplicate_count?: number | null
    api_connection?: api_connectionsCreateNestedOneWithoutData_sourcesInput
    database_connection?: database_connectionsCreateNestedOneWithoutData_sourcesInput
    user?: usersCreateNestedOneWithoutData_sourcesInput
    analytics_events?: analytics_eventsCreateNestedManyWithoutData_sourceInput
  }

  export type data_sourcesUncheckedCreateWithoutCsv_dataInput = {
    id?: bigint | number
    user_id?: string | null
    source_name?: string | null
    source_type?: string | null
    database_name?: string | null
    table_name?: string | null
    database_connection_id?: number | null
    api_connection_id?: number | null
    row_count?: number | null
    column_count?: number | null
    data_schema?: NullableJsonNullValueInput | InputJsonValue
    last_updated?: Date | string | null
    cache_key?: string | null
    partition_info?: NullableJsonNullValueInput | InputJsonValue
    index_info?: NullableJsonNullValueInput | InputJsonValue
    avg_query_time_ms?: number | null
    total_queries?: number | null
    last_accessed?: Date | string | null
    data_quality_score?: number | null
    null_percentage?: number | null
    duplicate_count?: number | null
    analytics_events?: analytics_eventsUncheckedCreateNestedManyWithoutData_sourceInput
  }

  export type data_sourcesCreateOrConnectWithoutCsv_dataInput = {
    where: data_sourcesWhereUniqueInput
    create: XOR<data_sourcesCreateWithoutCsv_dataInput, data_sourcesUncheckedCreateWithoutCsv_dataInput>
  }

  export type data_sourcesCreateManyCsv_dataInputEnvelope = {
    data: data_sourcesCreateManyCsv_dataInput | data_sourcesCreateManyCsv_dataInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutCsvdataInput = {
    update: XOR<usersUpdateWithoutCsvdataInput, usersUncheckedUpdateWithoutCsvdataInput>
    create: XOR<usersCreateWithoutCsvdataInput, usersUncheckedCreateWithoutCsvdataInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutCsvdataInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutCsvdataInput, usersUncheckedUpdateWithoutCsvdataInput>
  }

  export type usersUpdateWithoutCsvdataInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    attributes?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    data_sources?: data_sourcesUpdateManyWithoutUserNestedInput
    connections?: database_connectionsUpdateManyWithoutUserNestedInput
    datasets?: datasetsUpdateManyWithoutUserNestedInput
    analytics_events?: analytics_eventsUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutCsvdataInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    attributes?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    data_sources?: data_sourcesUncheckedUpdateManyWithoutUserNestedInput
    connections?: database_connectionsUncheckedUpdateManyWithoutUserNestedInput
    datasets?: datasetsUncheckedUpdateManyWithoutUserNestedInput
    analytics_events?: analytics_eventsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type data_sourcesUpsertWithWhereUniqueWithoutCsv_dataInput = {
    where: data_sourcesWhereUniqueInput
    update: XOR<data_sourcesUpdateWithoutCsv_dataInput, data_sourcesUncheckedUpdateWithoutCsv_dataInput>
    create: XOR<data_sourcesCreateWithoutCsv_dataInput, data_sourcesUncheckedCreateWithoutCsv_dataInput>
  }

  export type data_sourcesUpdateWithWhereUniqueWithoutCsv_dataInput = {
    where: data_sourcesWhereUniqueInput
    data: XOR<data_sourcesUpdateWithoutCsv_dataInput, data_sourcesUncheckedUpdateWithoutCsv_dataInput>
  }

  export type data_sourcesUpdateManyWithWhereWithoutCsv_dataInput = {
    where: data_sourcesScalarWhereInput
    data: XOR<data_sourcesUpdateManyMutationInput, data_sourcesUncheckedUpdateManyWithoutCsv_dataInput>
  }

  export type csvdataCreateManyUsersInput = {
    id?: bigint | number
    bucket_name?: string | null
    file_name?: string | null
    selectedfields?: csvdataCreateselectedfieldsInput | string[]
    createdat?: Date | string | null
    updatedat?: Date | string | null
    connection_name?: string | null
    file_size_bytes?: bigint | number | null
    row_count?: number | null
    column_count?: number | null
    data_schema?: NullableJsonNullValueInput | InputJsonValue
    processing_status?: string | null
    error_message?: string | null
    checksum?: string | null
  }

  export type data_sourcesCreateManyUserInput = {
    id?: bigint | number
    source_name?: string | null
    source_type?: string | null
    database_name?: string | null
    table_name?: string | null
    database_connection_id?: number | null
    csv_data_id?: bigint | number | null
    api_connection_id?: number | null
    row_count?: number | null
    column_count?: number | null
    data_schema?: NullableJsonNullValueInput | InputJsonValue
    last_updated?: Date | string | null
    cache_key?: string | null
    partition_info?: NullableJsonNullValueInput | InputJsonValue
    index_info?: NullableJsonNullValueInput | InputJsonValue
    avg_query_time_ms?: number | null
    total_queries?: number | null
    last_accessed?: Date | string | null
    data_quality_score?: number | null
    null_percentage?: number | null
    duplicate_count?: number | null
  }

  export type database_connectionsCreateManyUserInput = {
    id?: number
    connection_name: string
    database_name: string
    database_type: string
    host: string
    port?: number | null
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type datasetsCreateManyUserInput = {
    id?: number
    dataset_name: string
    dataset_description?: string | null
    sql_query: string
    connection_id?: number | null
    visualization_type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    selectedField?: string | null
    x_axis?: string | null
    y_axis?: string | null
    issample?: boolean | null
    is_stacked?: boolean | null
    api_id?: number | null
    csv_id?: number | null
    filters?: NullableJsonNullValueInput | InputJsonValue
    table_name?: string | null
    selectedAggregate?: string | null
    selectedGroupByValues?: datasetsCreateselectedGroupByValuesInput | string[]
    selectedDateBy?: string | null
  }

  export type analytics_eventsCreateManyUserInput = {
    id?: bigint | number
    data_source_id: bigint | number
    event_type: string
    event_metadata?: JsonNullValueInput | InputJsonValue
    timestamp?: Date | string
    session_id?: string | null
    ip_address?: string | null
  }

  export type csvdataUpdateWithoutUsersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    bucket_name?: NullableStringFieldUpdateOperationsInput | string | null
    file_name?: NullableStringFieldUpdateOperationsInput | string | null
    selectedfields?: csvdataUpdateselectedfieldsInput | string[]
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    connection_name?: NullableStringFieldUpdateOperationsInput | string | null
    file_size_bytes?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    row_count?: NullableIntFieldUpdateOperationsInput | number | null
    column_count?: NullableIntFieldUpdateOperationsInput | number | null
    data_schema?: NullableJsonNullValueInput | InputJsonValue
    processing_status?: NullableStringFieldUpdateOperationsInput | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    data_sources?: data_sourcesUpdateManyWithoutCsv_dataNestedInput
  }

  export type csvdataUncheckedUpdateWithoutUsersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    bucket_name?: NullableStringFieldUpdateOperationsInput | string | null
    file_name?: NullableStringFieldUpdateOperationsInput | string | null
    selectedfields?: csvdataUpdateselectedfieldsInput | string[]
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    connection_name?: NullableStringFieldUpdateOperationsInput | string | null
    file_size_bytes?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    row_count?: NullableIntFieldUpdateOperationsInput | number | null
    column_count?: NullableIntFieldUpdateOperationsInput | number | null
    data_schema?: NullableJsonNullValueInput | InputJsonValue
    processing_status?: NullableStringFieldUpdateOperationsInput | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    data_sources?: data_sourcesUncheckedUpdateManyWithoutCsv_dataNestedInput
  }

  export type csvdataUncheckedUpdateManyWithoutUsersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    bucket_name?: NullableStringFieldUpdateOperationsInput | string | null
    file_name?: NullableStringFieldUpdateOperationsInput | string | null
    selectedfields?: csvdataUpdateselectedfieldsInput | string[]
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    connection_name?: NullableStringFieldUpdateOperationsInput | string | null
    file_size_bytes?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    row_count?: NullableIntFieldUpdateOperationsInput | number | null
    column_count?: NullableIntFieldUpdateOperationsInput | number | null
    data_schema?: NullableJsonNullValueInput | InputJsonValue
    processing_status?: NullableStringFieldUpdateOperationsInput | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type data_sourcesUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    source_name?: NullableStringFieldUpdateOperationsInput | string | null
    source_type?: NullableStringFieldUpdateOperationsInput | string | null
    database_name?: NullableStringFieldUpdateOperationsInput | string | null
    table_name?: NullableStringFieldUpdateOperationsInput | string | null
    row_count?: NullableIntFieldUpdateOperationsInput | number | null
    column_count?: NullableIntFieldUpdateOperationsInput | number | null
    data_schema?: NullableJsonNullValueInput | InputJsonValue
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cache_key?: NullableStringFieldUpdateOperationsInput | string | null
    partition_info?: NullableJsonNullValueInput | InputJsonValue
    index_info?: NullableJsonNullValueInput | InputJsonValue
    avg_query_time_ms?: NullableFloatFieldUpdateOperationsInput | number | null
    total_queries?: NullableIntFieldUpdateOperationsInput | number | null
    last_accessed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_quality_score?: NullableFloatFieldUpdateOperationsInput | number | null
    null_percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    duplicate_count?: NullableIntFieldUpdateOperationsInput | number | null
    api_connection?: api_connectionsUpdateOneWithoutData_sourcesNestedInput
    csv_data?: csvdataUpdateOneWithoutData_sourcesNestedInput
    database_connection?: database_connectionsUpdateOneWithoutData_sourcesNestedInput
    analytics_events?: analytics_eventsUpdateManyWithoutData_sourceNestedInput
  }

  export type data_sourcesUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    source_name?: NullableStringFieldUpdateOperationsInput | string | null
    source_type?: NullableStringFieldUpdateOperationsInput | string | null
    database_name?: NullableStringFieldUpdateOperationsInput | string | null
    table_name?: NullableStringFieldUpdateOperationsInput | string | null
    database_connection_id?: NullableIntFieldUpdateOperationsInput | number | null
    csv_data_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    api_connection_id?: NullableIntFieldUpdateOperationsInput | number | null
    row_count?: NullableIntFieldUpdateOperationsInput | number | null
    column_count?: NullableIntFieldUpdateOperationsInput | number | null
    data_schema?: NullableJsonNullValueInput | InputJsonValue
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cache_key?: NullableStringFieldUpdateOperationsInput | string | null
    partition_info?: NullableJsonNullValueInput | InputJsonValue
    index_info?: NullableJsonNullValueInput | InputJsonValue
    avg_query_time_ms?: NullableFloatFieldUpdateOperationsInput | number | null
    total_queries?: NullableIntFieldUpdateOperationsInput | number | null
    last_accessed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_quality_score?: NullableFloatFieldUpdateOperationsInput | number | null
    null_percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    duplicate_count?: NullableIntFieldUpdateOperationsInput | number | null
    analytics_events?: analytics_eventsUncheckedUpdateManyWithoutData_sourceNestedInput
  }

  export type data_sourcesUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    source_name?: NullableStringFieldUpdateOperationsInput | string | null
    source_type?: NullableStringFieldUpdateOperationsInput | string | null
    database_name?: NullableStringFieldUpdateOperationsInput | string | null
    table_name?: NullableStringFieldUpdateOperationsInput | string | null
    database_connection_id?: NullableIntFieldUpdateOperationsInput | number | null
    csv_data_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    api_connection_id?: NullableIntFieldUpdateOperationsInput | number | null
    row_count?: NullableIntFieldUpdateOperationsInput | number | null
    column_count?: NullableIntFieldUpdateOperationsInput | number | null
    data_schema?: NullableJsonNullValueInput | InputJsonValue
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cache_key?: NullableStringFieldUpdateOperationsInput | string | null
    partition_info?: NullableJsonNullValueInput | InputJsonValue
    index_info?: NullableJsonNullValueInput | InputJsonValue
    avg_query_time_ms?: NullableFloatFieldUpdateOperationsInput | number | null
    total_queries?: NullableIntFieldUpdateOperationsInput | number | null
    last_accessed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_quality_score?: NullableFloatFieldUpdateOperationsInput | number | null
    null_percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    duplicate_count?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type database_connectionsUpdateWithoutUserInput = {
    connection_name?: StringFieldUpdateOperationsInput | string
    database_name?: StringFieldUpdateOperationsInput | string
    database_type?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    port?: NullableIntFieldUpdateOperationsInput | number | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    api_connections?: api_connectionsUpdateManyWithoutConnectionNestedInput
    data_sources?: data_sourcesUpdateManyWithoutDatabase_connectionNestedInput
  }

  export type database_connectionsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    connection_name?: StringFieldUpdateOperationsInput | string
    database_name?: StringFieldUpdateOperationsInput | string
    database_type?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    port?: NullableIntFieldUpdateOperationsInput | number | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    api_connections?: api_connectionsUncheckedUpdateManyWithoutConnectionNestedInput
    data_sources?: data_sourcesUncheckedUpdateManyWithoutDatabase_connectionNestedInput
  }

  export type database_connectionsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    connection_name?: StringFieldUpdateOperationsInput | string
    database_name?: StringFieldUpdateOperationsInput | string
    database_type?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    port?: NullableIntFieldUpdateOperationsInput | number | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type datasetsUpdateWithoutUserInput = {
    dataset_name?: StringFieldUpdateOperationsInput | string
    dataset_description?: NullableStringFieldUpdateOperationsInput | string | null
    sql_query?: StringFieldUpdateOperationsInput | string
    connection_id?: NullableIntFieldUpdateOperationsInput | number | null
    visualization_type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    selectedField?: NullableStringFieldUpdateOperationsInput | string | null
    x_axis?: NullableStringFieldUpdateOperationsInput | string | null
    y_axis?: NullableStringFieldUpdateOperationsInput | string | null
    issample?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_stacked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    api_id?: NullableIntFieldUpdateOperationsInput | number | null
    csv_id?: NullableIntFieldUpdateOperationsInput | number | null
    filters?: NullableJsonNullValueInput | InputJsonValue
    table_name?: NullableStringFieldUpdateOperationsInput | string | null
    selectedAggregate?: NullableStringFieldUpdateOperationsInput | string | null
    selectedGroupByValues?: datasetsUpdateselectedGroupByValuesInput | string[]
    selectedDateBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type datasetsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataset_name?: StringFieldUpdateOperationsInput | string
    dataset_description?: NullableStringFieldUpdateOperationsInput | string | null
    sql_query?: StringFieldUpdateOperationsInput | string
    connection_id?: NullableIntFieldUpdateOperationsInput | number | null
    visualization_type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    selectedField?: NullableStringFieldUpdateOperationsInput | string | null
    x_axis?: NullableStringFieldUpdateOperationsInput | string | null
    y_axis?: NullableStringFieldUpdateOperationsInput | string | null
    issample?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_stacked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    api_id?: NullableIntFieldUpdateOperationsInput | number | null
    csv_id?: NullableIntFieldUpdateOperationsInput | number | null
    filters?: NullableJsonNullValueInput | InputJsonValue
    table_name?: NullableStringFieldUpdateOperationsInput | string | null
    selectedAggregate?: NullableStringFieldUpdateOperationsInput | string | null
    selectedGroupByValues?: datasetsUpdateselectedGroupByValuesInput | string[]
    selectedDateBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type datasetsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataset_name?: StringFieldUpdateOperationsInput | string
    dataset_description?: NullableStringFieldUpdateOperationsInput | string | null
    sql_query?: StringFieldUpdateOperationsInput | string
    connection_id?: NullableIntFieldUpdateOperationsInput | number | null
    visualization_type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    selectedField?: NullableStringFieldUpdateOperationsInput | string | null
    x_axis?: NullableStringFieldUpdateOperationsInput | string | null
    y_axis?: NullableStringFieldUpdateOperationsInput | string | null
    issample?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_stacked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    api_id?: NullableIntFieldUpdateOperationsInput | number | null
    csv_id?: NullableIntFieldUpdateOperationsInput | number | null
    filters?: NullableJsonNullValueInput | InputJsonValue
    table_name?: NullableStringFieldUpdateOperationsInput | string | null
    selectedAggregate?: NullableStringFieldUpdateOperationsInput | string | null
    selectedGroupByValues?: datasetsUpdateselectedGroupByValuesInput | string[]
    selectedDateBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type analytics_eventsUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    event_type?: StringFieldUpdateOperationsInput | string
    event_metadata?: JsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    session_id?: NullableStringFieldUpdateOperationsInput | string | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    data_source?: data_sourcesUpdateOneRequiredWithoutAnalytics_eventsNestedInput
  }

  export type analytics_eventsUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    data_source_id?: BigIntFieldUpdateOperationsInput | bigint | number
    event_type?: StringFieldUpdateOperationsInput | string
    event_metadata?: JsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    session_id?: NullableStringFieldUpdateOperationsInput | string | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type analytics_eventsUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    data_source_id?: BigIntFieldUpdateOperationsInput | bigint | number
    event_type?: StringFieldUpdateOperationsInput | string
    event_metadata?: JsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    session_id?: NullableStringFieldUpdateOperationsInput | string | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type data_sourcesCreateManyApi_connectionInput = {
    id?: bigint | number
    user_id?: string | null
    source_name?: string | null
    source_type?: string | null
    database_name?: string | null
    table_name?: string | null
    database_connection_id?: number | null
    csv_data_id?: bigint | number | null
    row_count?: number | null
    column_count?: number | null
    data_schema?: NullableJsonNullValueInput | InputJsonValue
    last_updated?: Date | string | null
    cache_key?: string | null
    partition_info?: NullableJsonNullValueInput | InputJsonValue
    index_info?: NullableJsonNullValueInput | InputJsonValue
    avg_query_time_ms?: number | null
    total_queries?: number | null
    last_accessed?: Date | string | null
    data_quality_score?: number | null
    null_percentage?: number | null
    duplicate_count?: number | null
  }

  export type data_sourcesUpdateWithoutApi_connectionInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    source_name?: NullableStringFieldUpdateOperationsInput | string | null
    source_type?: NullableStringFieldUpdateOperationsInput | string | null
    database_name?: NullableStringFieldUpdateOperationsInput | string | null
    table_name?: NullableStringFieldUpdateOperationsInput | string | null
    row_count?: NullableIntFieldUpdateOperationsInput | number | null
    column_count?: NullableIntFieldUpdateOperationsInput | number | null
    data_schema?: NullableJsonNullValueInput | InputJsonValue
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cache_key?: NullableStringFieldUpdateOperationsInput | string | null
    partition_info?: NullableJsonNullValueInput | InputJsonValue
    index_info?: NullableJsonNullValueInput | InputJsonValue
    avg_query_time_ms?: NullableFloatFieldUpdateOperationsInput | number | null
    total_queries?: NullableIntFieldUpdateOperationsInput | number | null
    last_accessed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_quality_score?: NullableFloatFieldUpdateOperationsInput | number | null
    null_percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    duplicate_count?: NullableIntFieldUpdateOperationsInput | number | null
    csv_data?: csvdataUpdateOneWithoutData_sourcesNestedInput
    database_connection?: database_connectionsUpdateOneWithoutData_sourcesNestedInput
    user?: usersUpdateOneWithoutData_sourcesNestedInput
    analytics_events?: analytics_eventsUpdateManyWithoutData_sourceNestedInput
  }

  export type data_sourcesUncheckedUpdateWithoutApi_connectionInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    source_name?: NullableStringFieldUpdateOperationsInput | string | null
    source_type?: NullableStringFieldUpdateOperationsInput | string | null
    database_name?: NullableStringFieldUpdateOperationsInput | string | null
    table_name?: NullableStringFieldUpdateOperationsInput | string | null
    database_connection_id?: NullableIntFieldUpdateOperationsInput | number | null
    csv_data_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    row_count?: NullableIntFieldUpdateOperationsInput | number | null
    column_count?: NullableIntFieldUpdateOperationsInput | number | null
    data_schema?: NullableJsonNullValueInput | InputJsonValue
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cache_key?: NullableStringFieldUpdateOperationsInput | string | null
    partition_info?: NullableJsonNullValueInput | InputJsonValue
    index_info?: NullableJsonNullValueInput | InputJsonValue
    avg_query_time_ms?: NullableFloatFieldUpdateOperationsInput | number | null
    total_queries?: NullableIntFieldUpdateOperationsInput | number | null
    last_accessed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_quality_score?: NullableFloatFieldUpdateOperationsInput | number | null
    null_percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    duplicate_count?: NullableIntFieldUpdateOperationsInput | number | null
    analytics_events?: analytics_eventsUncheckedUpdateManyWithoutData_sourceNestedInput
  }

  export type data_sourcesUncheckedUpdateManyWithoutApi_connectionInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    source_name?: NullableStringFieldUpdateOperationsInput | string | null
    source_type?: NullableStringFieldUpdateOperationsInput | string | null
    database_name?: NullableStringFieldUpdateOperationsInput | string | null
    table_name?: NullableStringFieldUpdateOperationsInput | string | null
    database_connection_id?: NullableIntFieldUpdateOperationsInput | number | null
    csv_data_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    row_count?: NullableIntFieldUpdateOperationsInput | number | null
    column_count?: NullableIntFieldUpdateOperationsInput | number | null
    data_schema?: NullableJsonNullValueInput | InputJsonValue
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cache_key?: NullableStringFieldUpdateOperationsInput | string | null
    partition_info?: NullableJsonNullValueInput | InputJsonValue
    index_info?: NullableJsonNullValueInput | InputJsonValue
    avg_query_time_ms?: NullableFloatFieldUpdateOperationsInput | number | null
    total_queries?: NullableIntFieldUpdateOperationsInput | number | null
    last_accessed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_quality_score?: NullableFloatFieldUpdateOperationsInput | number | null
    null_percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    duplicate_count?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type api_connectionsCreateManyConnectionInput = {
    id?: number
    connection_name: string
    api_url: string
    api_key?: string | null
    headers?: NullableJsonNullValueInput | InputJsonValue
    user_id: string
    created_at?: Date | string
    updated_at?: Date | string
    table_name?: string | null
  }

  export type data_sourcesCreateManyDatabase_connectionInput = {
    id?: bigint | number
    user_id?: string | null
    source_name?: string | null
    source_type?: string | null
    database_name?: string | null
    table_name?: string | null
    csv_data_id?: bigint | number | null
    api_connection_id?: number | null
    row_count?: number | null
    column_count?: number | null
    data_schema?: NullableJsonNullValueInput | InputJsonValue
    last_updated?: Date | string | null
    cache_key?: string | null
    partition_info?: NullableJsonNullValueInput | InputJsonValue
    index_info?: NullableJsonNullValueInput | InputJsonValue
    avg_query_time_ms?: number | null
    total_queries?: number | null
    last_accessed?: Date | string | null
    data_quality_score?: number | null
    null_percentage?: number | null
    duplicate_count?: number | null
  }

  export type api_connectionsUpdateWithoutConnectionInput = {
    connection_name?: StringFieldUpdateOperationsInput | string
    api_url?: StringFieldUpdateOperationsInput | string
    api_key?: NullableStringFieldUpdateOperationsInput | string | null
    headers?: NullableJsonNullValueInput | InputJsonValue
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    table_name?: NullableStringFieldUpdateOperationsInput | string | null
    data_sources?: data_sourcesUpdateManyWithoutApi_connectionNestedInput
  }

  export type api_connectionsUncheckedUpdateWithoutConnectionInput = {
    id?: IntFieldUpdateOperationsInput | number
    connection_name?: StringFieldUpdateOperationsInput | string
    api_url?: StringFieldUpdateOperationsInput | string
    api_key?: NullableStringFieldUpdateOperationsInput | string | null
    headers?: NullableJsonNullValueInput | InputJsonValue
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    table_name?: NullableStringFieldUpdateOperationsInput | string | null
    data_sources?: data_sourcesUncheckedUpdateManyWithoutApi_connectionNestedInput
  }

  export type api_connectionsUncheckedUpdateManyWithoutConnectionInput = {
    id?: IntFieldUpdateOperationsInput | number
    connection_name?: StringFieldUpdateOperationsInput | string
    api_url?: StringFieldUpdateOperationsInput | string
    api_key?: NullableStringFieldUpdateOperationsInput | string | null
    headers?: NullableJsonNullValueInput | InputJsonValue
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    table_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type data_sourcesUpdateWithoutDatabase_connectionInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    source_name?: NullableStringFieldUpdateOperationsInput | string | null
    source_type?: NullableStringFieldUpdateOperationsInput | string | null
    database_name?: NullableStringFieldUpdateOperationsInput | string | null
    table_name?: NullableStringFieldUpdateOperationsInput | string | null
    row_count?: NullableIntFieldUpdateOperationsInput | number | null
    column_count?: NullableIntFieldUpdateOperationsInput | number | null
    data_schema?: NullableJsonNullValueInput | InputJsonValue
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cache_key?: NullableStringFieldUpdateOperationsInput | string | null
    partition_info?: NullableJsonNullValueInput | InputJsonValue
    index_info?: NullableJsonNullValueInput | InputJsonValue
    avg_query_time_ms?: NullableFloatFieldUpdateOperationsInput | number | null
    total_queries?: NullableIntFieldUpdateOperationsInput | number | null
    last_accessed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_quality_score?: NullableFloatFieldUpdateOperationsInput | number | null
    null_percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    duplicate_count?: NullableIntFieldUpdateOperationsInput | number | null
    api_connection?: api_connectionsUpdateOneWithoutData_sourcesNestedInput
    csv_data?: csvdataUpdateOneWithoutData_sourcesNestedInput
    user?: usersUpdateOneWithoutData_sourcesNestedInput
    analytics_events?: analytics_eventsUpdateManyWithoutData_sourceNestedInput
  }

  export type data_sourcesUncheckedUpdateWithoutDatabase_connectionInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    source_name?: NullableStringFieldUpdateOperationsInput | string | null
    source_type?: NullableStringFieldUpdateOperationsInput | string | null
    database_name?: NullableStringFieldUpdateOperationsInput | string | null
    table_name?: NullableStringFieldUpdateOperationsInput | string | null
    csv_data_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    api_connection_id?: NullableIntFieldUpdateOperationsInput | number | null
    row_count?: NullableIntFieldUpdateOperationsInput | number | null
    column_count?: NullableIntFieldUpdateOperationsInput | number | null
    data_schema?: NullableJsonNullValueInput | InputJsonValue
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cache_key?: NullableStringFieldUpdateOperationsInput | string | null
    partition_info?: NullableJsonNullValueInput | InputJsonValue
    index_info?: NullableJsonNullValueInput | InputJsonValue
    avg_query_time_ms?: NullableFloatFieldUpdateOperationsInput | number | null
    total_queries?: NullableIntFieldUpdateOperationsInput | number | null
    last_accessed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_quality_score?: NullableFloatFieldUpdateOperationsInput | number | null
    null_percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    duplicate_count?: NullableIntFieldUpdateOperationsInput | number | null
    analytics_events?: analytics_eventsUncheckedUpdateManyWithoutData_sourceNestedInput
  }

  export type data_sourcesUncheckedUpdateManyWithoutDatabase_connectionInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    source_name?: NullableStringFieldUpdateOperationsInput | string | null
    source_type?: NullableStringFieldUpdateOperationsInput | string | null
    database_name?: NullableStringFieldUpdateOperationsInput | string | null
    table_name?: NullableStringFieldUpdateOperationsInput | string | null
    csv_data_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    api_connection_id?: NullableIntFieldUpdateOperationsInput | number | null
    row_count?: NullableIntFieldUpdateOperationsInput | number | null
    column_count?: NullableIntFieldUpdateOperationsInput | number | null
    data_schema?: NullableJsonNullValueInput | InputJsonValue
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cache_key?: NullableStringFieldUpdateOperationsInput | string | null
    partition_info?: NullableJsonNullValueInput | InputJsonValue
    index_info?: NullableJsonNullValueInput | InputJsonValue
    avg_query_time_ms?: NullableFloatFieldUpdateOperationsInput | number | null
    total_queries?: NullableIntFieldUpdateOperationsInput | number | null
    last_accessed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_quality_score?: NullableFloatFieldUpdateOperationsInput | number | null
    null_percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    duplicate_count?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type analytics_eventsCreateManyData_sourceInput = {
    id?: bigint | number
    event_type: string
    event_metadata?: JsonNullValueInput | InputJsonValue
    timestamp?: Date | string
    user_id?: string | null
    session_id?: string | null
    ip_address?: string | null
  }

  export type analytics_eventsUpdateWithoutData_sourceInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    event_type?: StringFieldUpdateOperationsInput | string
    event_metadata?: JsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    session_id?: NullableStringFieldUpdateOperationsInput | string | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user?: usersUpdateOneWithoutAnalytics_eventsNestedInput
  }

  export type analytics_eventsUncheckedUpdateWithoutData_sourceInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    event_type?: StringFieldUpdateOperationsInput | string
    event_metadata?: JsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    session_id?: NullableStringFieldUpdateOperationsInput | string | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type analytics_eventsUncheckedUpdateManyWithoutData_sourceInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    event_type?: StringFieldUpdateOperationsInput | string
    event_metadata?: JsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    session_id?: NullableStringFieldUpdateOperationsInput | string | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type data_sourcesCreateManyCsv_dataInput = {
    id?: bigint | number
    user_id?: string | null
    source_name?: string | null
    source_type?: string | null
    database_name?: string | null
    table_name?: string | null
    database_connection_id?: number | null
    api_connection_id?: number | null
    row_count?: number | null
    column_count?: number | null
    data_schema?: NullableJsonNullValueInput | InputJsonValue
    last_updated?: Date | string | null
    cache_key?: string | null
    partition_info?: NullableJsonNullValueInput | InputJsonValue
    index_info?: NullableJsonNullValueInput | InputJsonValue
    avg_query_time_ms?: number | null
    total_queries?: number | null
    last_accessed?: Date | string | null
    data_quality_score?: number | null
    null_percentage?: number | null
    duplicate_count?: number | null
  }

  export type data_sourcesUpdateWithoutCsv_dataInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    source_name?: NullableStringFieldUpdateOperationsInput | string | null
    source_type?: NullableStringFieldUpdateOperationsInput | string | null
    database_name?: NullableStringFieldUpdateOperationsInput | string | null
    table_name?: NullableStringFieldUpdateOperationsInput | string | null
    row_count?: NullableIntFieldUpdateOperationsInput | number | null
    column_count?: NullableIntFieldUpdateOperationsInput | number | null
    data_schema?: NullableJsonNullValueInput | InputJsonValue
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cache_key?: NullableStringFieldUpdateOperationsInput | string | null
    partition_info?: NullableJsonNullValueInput | InputJsonValue
    index_info?: NullableJsonNullValueInput | InputJsonValue
    avg_query_time_ms?: NullableFloatFieldUpdateOperationsInput | number | null
    total_queries?: NullableIntFieldUpdateOperationsInput | number | null
    last_accessed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_quality_score?: NullableFloatFieldUpdateOperationsInput | number | null
    null_percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    duplicate_count?: NullableIntFieldUpdateOperationsInput | number | null
    api_connection?: api_connectionsUpdateOneWithoutData_sourcesNestedInput
    database_connection?: database_connectionsUpdateOneWithoutData_sourcesNestedInput
    user?: usersUpdateOneWithoutData_sourcesNestedInput
    analytics_events?: analytics_eventsUpdateManyWithoutData_sourceNestedInput
  }

  export type data_sourcesUncheckedUpdateWithoutCsv_dataInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    source_name?: NullableStringFieldUpdateOperationsInput | string | null
    source_type?: NullableStringFieldUpdateOperationsInput | string | null
    database_name?: NullableStringFieldUpdateOperationsInput | string | null
    table_name?: NullableStringFieldUpdateOperationsInput | string | null
    database_connection_id?: NullableIntFieldUpdateOperationsInput | number | null
    api_connection_id?: NullableIntFieldUpdateOperationsInput | number | null
    row_count?: NullableIntFieldUpdateOperationsInput | number | null
    column_count?: NullableIntFieldUpdateOperationsInput | number | null
    data_schema?: NullableJsonNullValueInput | InputJsonValue
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cache_key?: NullableStringFieldUpdateOperationsInput | string | null
    partition_info?: NullableJsonNullValueInput | InputJsonValue
    index_info?: NullableJsonNullValueInput | InputJsonValue
    avg_query_time_ms?: NullableFloatFieldUpdateOperationsInput | number | null
    total_queries?: NullableIntFieldUpdateOperationsInput | number | null
    last_accessed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_quality_score?: NullableFloatFieldUpdateOperationsInput | number | null
    null_percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    duplicate_count?: NullableIntFieldUpdateOperationsInput | number | null
    analytics_events?: analytics_eventsUncheckedUpdateManyWithoutData_sourceNestedInput
  }

  export type data_sourcesUncheckedUpdateManyWithoutCsv_dataInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    source_name?: NullableStringFieldUpdateOperationsInput | string | null
    source_type?: NullableStringFieldUpdateOperationsInput | string | null
    database_name?: NullableStringFieldUpdateOperationsInput | string | null
    table_name?: NullableStringFieldUpdateOperationsInput | string | null
    database_connection_id?: NullableIntFieldUpdateOperationsInput | number | null
    api_connection_id?: NullableIntFieldUpdateOperationsInput | number | null
    row_count?: NullableIntFieldUpdateOperationsInput | number | null
    column_count?: NullableIntFieldUpdateOperationsInput | number | null
    data_schema?: NullableJsonNullValueInput | InputJsonValue
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cache_key?: NullableStringFieldUpdateOperationsInput | string | null
    partition_info?: NullableJsonNullValueInput | InputJsonValue
    index_info?: NullableJsonNullValueInput | InputJsonValue
    avg_query_time_ms?: NullableFloatFieldUpdateOperationsInput | number | null
    total_queries?: NullableIntFieldUpdateOperationsInput | number | null
    last_accessed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_quality_score?: NullableFloatFieldUpdateOperationsInput | number | null
    null_percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    duplicate_count?: NullableIntFieldUpdateOperationsInput | number | null
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