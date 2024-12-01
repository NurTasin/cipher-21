
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model NotificationTokens
 * 
 */
export type NotificationTokens = $Result.DefaultSelection<Prisma.$NotificationTokensPayload>
/**
 * Model Notice
 * 
 */
export type Notice = $Result.DefaultSelection<Prisma.$NoticePayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model Fund
 * 
 */
export type Fund = $Result.DefaultSelection<Prisma.$FundPayload>
/**
 * Model FundEntry
 * 
 */
export type FundEntry = $Result.DefaultSelection<Prisma.$FundEntryPayload>
/**
 * Model IndependentFund
 * 
 */
export type IndependentFund = $Result.DefaultSelection<Prisma.$IndependentFundPayload>
/**
 * Model AdminActivity
 * 
 */
export type AdminActivity = $Result.DefaultSelection<Prisma.$AdminActivityPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserGender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE'
};

export type UserGender = (typeof UserGender)[keyof typeof UserGender]


export const UserRoles: {
  ADMIN: 'ADMIN',
  STUDENT: 'STUDENT',
  TEACHER: 'TEACHER'
};

export type UserRoles = (typeof UserRoles)[keyof typeof UserRoles]


export const EntryType: {
  DEPOSIT: 'DEPOSIT',
  WITHDRAW: 'WITHDRAW'
};

export type EntryType = (typeof EntryType)[keyof typeof EntryType]

}

export type UserGender = $Enums.UserGender

export const UserGender: typeof $Enums.UserGender

export type UserRoles = $Enums.UserRoles

export const UserRoles: typeof $Enums.UserRoles

export type EntryType = $Enums.EntryType

export const EntryType: typeof $Enums.EntryType

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.notificationTokens`: Exposes CRUD operations for the **NotificationTokens** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NotificationTokens
    * const notificationTokens = await prisma.notificationTokens.findMany()
    * ```
    */
  get notificationTokens(): Prisma.NotificationTokensDelegate<ExtArgs>;

  /**
   * `prisma.notice`: Exposes CRUD operations for the **Notice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notices
    * const notices = await prisma.notice.findMany()
    * ```
    */
  get notice(): Prisma.NoticeDelegate<ExtArgs>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs>;

  /**
   * `prisma.fund`: Exposes CRUD operations for the **Fund** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Funds
    * const funds = await prisma.fund.findMany()
    * ```
    */
  get fund(): Prisma.FundDelegate<ExtArgs>;

  /**
   * `prisma.fundEntry`: Exposes CRUD operations for the **FundEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FundEntries
    * const fundEntries = await prisma.fundEntry.findMany()
    * ```
    */
  get fundEntry(): Prisma.FundEntryDelegate<ExtArgs>;

  /**
   * `prisma.independentFund`: Exposes CRUD operations for the **IndependentFund** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IndependentFunds
    * const independentFunds = await prisma.independentFund.findMany()
    * ```
    */
  get independentFund(): Prisma.IndependentFundDelegate<ExtArgs>;

  /**
   * `prisma.adminActivity`: Exposes CRUD operations for the **AdminActivity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminActivities
    * const adminActivities = await prisma.adminActivity.findMany()
    * ```
    */
  get adminActivity(): Prisma.AdminActivityDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    User: 'User',
    NotificationTokens: 'NotificationTokens',
    Notice: 'Notice',
    Notification: 'Notification',
    Fund: 'Fund',
    FundEntry: 'FundEntry',
    IndependentFund: 'IndependentFund',
    AdminActivity: 'AdminActivity'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "notificationTokens" | "notice" | "notification" | "fund" | "fundEntry" | "independentFund" | "adminActivity"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      NotificationTokens: {
        payload: Prisma.$NotificationTokensPayload<ExtArgs>
        fields: Prisma.NotificationTokensFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationTokensFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationTokensPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationTokensFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationTokensPayload>
          }
          findFirst: {
            args: Prisma.NotificationTokensFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationTokensPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationTokensFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationTokensPayload>
          }
          findMany: {
            args: Prisma.NotificationTokensFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationTokensPayload>[]
          }
          create: {
            args: Prisma.NotificationTokensCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationTokensPayload>
          }
          createMany: {
            args: Prisma.NotificationTokensCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NotificationTokensDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationTokensPayload>
          }
          update: {
            args: Prisma.NotificationTokensUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationTokensPayload>
          }
          deleteMany: {
            args: Prisma.NotificationTokensDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationTokensUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotificationTokensUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationTokensPayload>
          }
          aggregate: {
            args: Prisma.NotificationTokensAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotificationTokens>
          }
          groupBy: {
            args: Prisma.NotificationTokensGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationTokensGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationTokensCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationTokensCountAggregateOutputType> | number
          }
        }
      }
      Notice: {
        payload: Prisma.$NoticePayload<ExtArgs>
        fields: Prisma.NoticeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NoticeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NoticeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload>
          }
          findFirst: {
            args: Prisma.NoticeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NoticeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload>
          }
          findMany: {
            args: Prisma.NoticeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload>[]
          }
          create: {
            args: Prisma.NoticeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload>
          }
          createMany: {
            args: Prisma.NoticeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NoticeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload>
          }
          update: {
            args: Prisma.NoticeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload>
          }
          deleteMany: {
            args: Prisma.NoticeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NoticeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NoticeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload>
          }
          aggregate: {
            args: Prisma.NoticeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotice>
          }
          groupBy: {
            args: Prisma.NoticeGroupByArgs<ExtArgs>
            result: $Utils.Optional<NoticeGroupByOutputType>[]
          }
          count: {
            args: Prisma.NoticeCountArgs<ExtArgs>
            result: $Utils.Optional<NoticeCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      Fund: {
        payload: Prisma.$FundPayload<ExtArgs>
        fields: Prisma.FundFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FundFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FundFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundPayload>
          }
          findFirst: {
            args: Prisma.FundFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FundFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundPayload>
          }
          findMany: {
            args: Prisma.FundFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundPayload>[]
          }
          create: {
            args: Prisma.FundCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundPayload>
          }
          createMany: {
            args: Prisma.FundCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FundDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundPayload>
          }
          update: {
            args: Prisma.FundUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundPayload>
          }
          deleteMany: {
            args: Prisma.FundDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FundUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FundUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundPayload>
          }
          aggregate: {
            args: Prisma.FundAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFund>
          }
          groupBy: {
            args: Prisma.FundGroupByArgs<ExtArgs>
            result: $Utils.Optional<FundGroupByOutputType>[]
          }
          count: {
            args: Prisma.FundCountArgs<ExtArgs>
            result: $Utils.Optional<FundCountAggregateOutputType> | number
          }
        }
      }
      FundEntry: {
        payload: Prisma.$FundEntryPayload<ExtArgs>
        fields: Prisma.FundEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FundEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FundEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundEntryPayload>
          }
          findFirst: {
            args: Prisma.FundEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FundEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundEntryPayload>
          }
          findMany: {
            args: Prisma.FundEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundEntryPayload>[]
          }
          create: {
            args: Prisma.FundEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundEntryPayload>
          }
          createMany: {
            args: Prisma.FundEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FundEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundEntryPayload>
          }
          update: {
            args: Prisma.FundEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundEntryPayload>
          }
          deleteMany: {
            args: Prisma.FundEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FundEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FundEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundEntryPayload>
          }
          aggregate: {
            args: Prisma.FundEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFundEntry>
          }
          groupBy: {
            args: Prisma.FundEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<FundEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.FundEntryCountArgs<ExtArgs>
            result: $Utils.Optional<FundEntryCountAggregateOutputType> | number
          }
        }
      }
      IndependentFund: {
        payload: Prisma.$IndependentFundPayload<ExtArgs>
        fields: Prisma.IndependentFundFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IndependentFundFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndependentFundPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IndependentFundFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndependentFundPayload>
          }
          findFirst: {
            args: Prisma.IndependentFundFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndependentFundPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IndependentFundFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndependentFundPayload>
          }
          findMany: {
            args: Prisma.IndependentFundFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndependentFundPayload>[]
          }
          create: {
            args: Prisma.IndependentFundCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndependentFundPayload>
          }
          createMany: {
            args: Prisma.IndependentFundCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.IndependentFundDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndependentFundPayload>
          }
          update: {
            args: Prisma.IndependentFundUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndependentFundPayload>
          }
          deleteMany: {
            args: Prisma.IndependentFundDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IndependentFundUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.IndependentFundUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndependentFundPayload>
          }
          aggregate: {
            args: Prisma.IndependentFundAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIndependentFund>
          }
          groupBy: {
            args: Prisma.IndependentFundGroupByArgs<ExtArgs>
            result: $Utils.Optional<IndependentFundGroupByOutputType>[]
          }
          count: {
            args: Prisma.IndependentFundCountArgs<ExtArgs>
            result: $Utils.Optional<IndependentFundCountAggregateOutputType> | number
          }
        }
      }
      AdminActivity: {
        payload: Prisma.$AdminActivityPayload<ExtArgs>
        fields: Prisma.AdminActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminActivityPayload>
          }
          findFirst: {
            args: Prisma.AdminActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminActivityPayload>
          }
          findMany: {
            args: Prisma.AdminActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminActivityPayload>[]
          }
          create: {
            args: Prisma.AdminActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminActivityPayload>
          }
          createMany: {
            args: Prisma.AdminActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AdminActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminActivityPayload>
          }
          update: {
            args: Prisma.AdminActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminActivityPayload>
          }
          deleteMany: {
            args: Prisma.AdminActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminActivityPayload>
          }
          aggregate: {
            args: Prisma.AdminActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdminActivity>
          }
          groupBy: {
            args: Prisma.AdminActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminActivityCountArgs<ExtArgs>
            result: $Utils.Optional<AdminActivityCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Notice: number
    Notification: number
    FundEntry: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Notice?: boolean | UserCountOutputTypeCountNoticeArgs
    Notification?: boolean | UserCountOutputTypeCountNotificationArgs
    FundEntry?: boolean | UserCountOutputTypeCountFundEntryArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNoticeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoticeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFundEntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FundEntryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    gender: $Enums.UserGender | null
    password: string | null
    role: $Enums.UserRoles | null
    instituteId: string | null
    profile_pic: string | null
    home_district: string | null
    whatsapp: string | null
    facebook: string | null
    instagram: string | null
    linkedin: string | null
    codeforces: string | null
    github: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    gender: $Enums.UserGender | null
    password: string | null
    role: $Enums.UserRoles | null
    instituteId: string | null
    profile_pic: string | null
    home_district: string | null
    whatsapp: string | null
    facebook: string | null
    instagram: string | null
    linkedin: string | null
    codeforces: string | null
    github: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    gender: number
    password: number
    role: number
    instituteId: number
    profile_pic: number
    home_district: number
    whatsapp: number
    facebook: number
    instagram: number
    linkedin: number
    codeforces: number
    github: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    gender?: true
    password?: true
    role?: true
    instituteId?: true
    profile_pic?: true
    home_district?: true
    whatsapp?: true
    facebook?: true
    instagram?: true
    linkedin?: true
    codeforces?: true
    github?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    gender?: true
    password?: true
    role?: true
    instituteId?: true
    profile_pic?: true
    home_district?: true
    whatsapp?: true
    facebook?: true
    instagram?: true
    linkedin?: true
    codeforces?: true
    github?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    gender?: true
    password?: true
    role?: true
    instituteId?: true
    profile_pic?: true
    home_district?: true
    whatsapp?: true
    facebook?: true
    instagram?: true
    linkedin?: true
    codeforces?: true
    github?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string
    phone: string | null
    gender: $Enums.UserGender | null
    password: string
    role: $Enums.UserRoles
    instituteId: string | null
    profile_pic: string | null
    home_district: string | null
    whatsapp: string | null
    facebook: string | null
    instagram: string | null
    linkedin: string | null
    codeforces: string | null
    github: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    gender?: boolean
    password?: boolean
    role?: boolean
    instituteId?: boolean
    profile_pic?: boolean
    home_district?: boolean
    whatsapp?: boolean
    facebook?: boolean
    instagram?: boolean
    linkedin?: boolean
    codeforces?: boolean
    github?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Notice?: boolean | User$NoticeArgs<ExtArgs>
    Notification?: boolean | User$NotificationArgs<ExtArgs>
    FundEntry?: boolean | User$FundEntryArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>


  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    gender?: boolean
    password?: boolean
    role?: boolean
    instituteId?: boolean
    profile_pic?: boolean
    home_district?: boolean
    whatsapp?: boolean
    facebook?: boolean
    instagram?: boolean
    linkedin?: boolean
    codeforces?: boolean
    github?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Notice?: boolean | User$NoticeArgs<ExtArgs>
    Notification?: boolean | User$NotificationArgs<ExtArgs>
    FundEntry?: boolean | User$FundEntryArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Notice: Prisma.$NoticePayload<ExtArgs>[]
      Notification: Prisma.$NotificationPayload<ExtArgs>[]
      FundEntry: Prisma.$FundEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string
      phone: string | null
      gender: $Enums.UserGender | null
      password: string
      role: $Enums.UserRoles
      instituteId: string | null
      profile_pic: string | null
      home_district: string | null
      whatsapp: string | null
      facebook: string | null
      instagram: string | null
      linkedin: string | null
      codeforces: string | null
      github: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Notice<T extends User$NoticeArgs<ExtArgs> = {}>(args?: Subset<T, User$NoticeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "findMany"> | Null>
    Notification<T extends User$NotificationArgs<ExtArgs> = {}>(args?: Subset<T, User$NotificationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany"> | Null>
    FundEntry<T extends User$FundEntryArgs<ExtArgs> = {}>(args?: Subset<T, User$FundEntryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FundEntryPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly gender: FieldRef<"User", 'UserGender'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRoles'>
    readonly instituteId: FieldRef<"User", 'String'>
    readonly profile_pic: FieldRef<"User", 'String'>
    readonly home_district: FieldRef<"User", 'String'>
    readonly whatsapp: FieldRef<"User", 'String'>
    readonly facebook: FieldRef<"User", 'String'>
    readonly instagram: FieldRef<"User", 'String'>
    readonly linkedin: FieldRef<"User", 'String'>
    readonly codeforces: FieldRef<"User", 'String'>
    readonly github: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.Notice
   */
  export type User$NoticeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null
    where?: NoticeWhereInput
    orderBy?: NoticeOrderByWithRelationInput | NoticeOrderByWithRelationInput[]
    cursor?: NoticeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NoticeScalarFieldEnum | NoticeScalarFieldEnum[]
  }

  /**
   * User.Notification
   */
  export type User$NotificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User.FundEntry
   */
  export type User$FundEntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundEntry
     */
    select?: FundEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundEntryInclude<ExtArgs> | null
    where?: FundEntryWhereInput
    orderBy?: FundEntryOrderByWithRelationInput | FundEntryOrderByWithRelationInput[]
    cursor?: FundEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FundEntryScalarFieldEnum | FundEntryScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model NotificationTokens
   */

  export type AggregateNotificationTokens = {
    _count: NotificationTokensCountAggregateOutputType | null
    _avg: NotificationTokensAvgAggregateOutputType | null
    _sum: NotificationTokensSumAggregateOutputType | null
    _min: NotificationTokensMinAggregateOutputType | null
    _max: NotificationTokensMaxAggregateOutputType | null
  }

  export type NotificationTokensAvgAggregateOutputType = {
    id: number | null
  }

  export type NotificationTokensSumAggregateOutputType = {
    id: number | null
  }

  export type NotificationTokensMinAggregateOutputType = {
    id: number | null
    userId: string | null
    deviceDetails: string | null
    token: string | null
    createdAt: Date | null
  }

  export type NotificationTokensMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    deviceDetails: string | null
    token: string | null
    createdAt: Date | null
  }

  export type NotificationTokensCountAggregateOutputType = {
    id: number
    userId: number
    deviceDetails: number
    token: number
    createdAt: number
    _all: number
  }


  export type NotificationTokensAvgAggregateInputType = {
    id?: true
  }

  export type NotificationTokensSumAggregateInputType = {
    id?: true
  }

  export type NotificationTokensMinAggregateInputType = {
    id?: true
    userId?: true
    deviceDetails?: true
    token?: true
    createdAt?: true
  }

  export type NotificationTokensMaxAggregateInputType = {
    id?: true
    userId?: true
    deviceDetails?: true
    token?: true
    createdAt?: true
  }

  export type NotificationTokensCountAggregateInputType = {
    id?: true
    userId?: true
    deviceDetails?: true
    token?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationTokensAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationTokens to aggregate.
     */
    where?: NotificationTokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationTokens to fetch.
     */
    orderBy?: NotificationTokensOrderByWithRelationInput | NotificationTokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationTokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NotificationTokens
    **/
    _count?: true | NotificationTokensCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationTokensAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationTokensSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationTokensMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationTokensMaxAggregateInputType
  }

  export type GetNotificationTokensAggregateType<T extends NotificationTokensAggregateArgs> = {
        [P in keyof T & keyof AggregateNotificationTokens]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotificationTokens[P]>
      : GetScalarType<T[P], AggregateNotificationTokens[P]>
  }




  export type NotificationTokensGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationTokensWhereInput
    orderBy?: NotificationTokensOrderByWithAggregationInput | NotificationTokensOrderByWithAggregationInput[]
    by: NotificationTokensScalarFieldEnum[] | NotificationTokensScalarFieldEnum
    having?: NotificationTokensScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationTokensCountAggregateInputType | true
    _avg?: NotificationTokensAvgAggregateInputType
    _sum?: NotificationTokensSumAggregateInputType
    _min?: NotificationTokensMinAggregateInputType
    _max?: NotificationTokensMaxAggregateInputType
  }

  export type NotificationTokensGroupByOutputType = {
    id: number
    userId: string | null
    deviceDetails: string
    token: string
    createdAt: Date
    _count: NotificationTokensCountAggregateOutputType | null
    _avg: NotificationTokensAvgAggregateOutputType | null
    _sum: NotificationTokensSumAggregateOutputType | null
    _min: NotificationTokensMinAggregateOutputType | null
    _max: NotificationTokensMaxAggregateOutputType | null
  }

  type GetNotificationTokensGroupByPayload<T extends NotificationTokensGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationTokensGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationTokensGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationTokensGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationTokensGroupByOutputType[P]>
        }
      >
    >


  export type NotificationTokensSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    deviceDetails?: boolean
    token?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["notificationTokens"]>


  export type NotificationTokensSelectScalar = {
    id?: boolean
    userId?: boolean
    deviceDetails?: boolean
    token?: boolean
    createdAt?: boolean
  }


  export type $NotificationTokensPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NotificationTokens"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string | null
      deviceDetails: string
      token: string
      createdAt: Date
    }, ExtArgs["result"]["notificationTokens"]>
    composites: {}
  }

  type NotificationTokensGetPayload<S extends boolean | null | undefined | NotificationTokensDefaultArgs> = $Result.GetResult<Prisma.$NotificationTokensPayload, S>

  type NotificationTokensCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NotificationTokensFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NotificationTokensCountAggregateInputType | true
    }

  export interface NotificationTokensDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NotificationTokens'], meta: { name: 'NotificationTokens' } }
    /**
     * Find zero or one NotificationTokens that matches the filter.
     * @param {NotificationTokensFindUniqueArgs} args - Arguments to find a NotificationTokens
     * @example
     * // Get one NotificationTokens
     * const notificationTokens = await prisma.notificationTokens.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationTokensFindUniqueArgs>(args: SelectSubset<T, NotificationTokensFindUniqueArgs<ExtArgs>>): Prisma__NotificationTokensClient<$Result.GetResult<Prisma.$NotificationTokensPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one NotificationTokens that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {NotificationTokensFindUniqueOrThrowArgs} args - Arguments to find a NotificationTokens
     * @example
     * // Get one NotificationTokens
     * const notificationTokens = await prisma.notificationTokens.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationTokensFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationTokensFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationTokensClient<$Result.GetResult<Prisma.$NotificationTokensPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first NotificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationTokensFindFirstArgs} args - Arguments to find a NotificationTokens
     * @example
     * // Get one NotificationTokens
     * const notificationTokens = await prisma.notificationTokens.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationTokensFindFirstArgs>(args?: SelectSubset<T, NotificationTokensFindFirstArgs<ExtArgs>>): Prisma__NotificationTokensClient<$Result.GetResult<Prisma.$NotificationTokensPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first NotificationTokens that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationTokensFindFirstOrThrowArgs} args - Arguments to find a NotificationTokens
     * @example
     * // Get one NotificationTokens
     * const notificationTokens = await prisma.notificationTokens.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationTokensFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationTokensFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationTokensClient<$Result.GetResult<Prisma.$NotificationTokensPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more NotificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationTokensFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NotificationTokens
     * const notificationTokens = await prisma.notificationTokens.findMany()
     * 
     * // Get first 10 NotificationTokens
     * const notificationTokens = await prisma.notificationTokens.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationTokensWithIdOnly = await prisma.notificationTokens.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationTokensFindManyArgs>(args?: SelectSubset<T, NotificationTokensFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationTokensPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a NotificationTokens.
     * @param {NotificationTokensCreateArgs} args - Arguments to create a NotificationTokens.
     * @example
     * // Create one NotificationTokens
     * const NotificationTokens = await prisma.notificationTokens.create({
     *   data: {
     *     // ... data to create a NotificationTokens
     *   }
     * })
     * 
     */
    create<T extends NotificationTokensCreateArgs>(args: SelectSubset<T, NotificationTokensCreateArgs<ExtArgs>>): Prisma__NotificationTokensClient<$Result.GetResult<Prisma.$NotificationTokensPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many NotificationTokens.
     * @param {NotificationTokensCreateManyArgs} args - Arguments to create many NotificationTokens.
     * @example
     * // Create many NotificationTokens
     * const notificationTokens = await prisma.notificationTokens.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationTokensCreateManyArgs>(args?: SelectSubset<T, NotificationTokensCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a NotificationTokens.
     * @param {NotificationTokensDeleteArgs} args - Arguments to delete one NotificationTokens.
     * @example
     * // Delete one NotificationTokens
     * const NotificationTokens = await prisma.notificationTokens.delete({
     *   where: {
     *     // ... filter to delete one NotificationTokens
     *   }
     * })
     * 
     */
    delete<T extends NotificationTokensDeleteArgs>(args: SelectSubset<T, NotificationTokensDeleteArgs<ExtArgs>>): Prisma__NotificationTokensClient<$Result.GetResult<Prisma.$NotificationTokensPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one NotificationTokens.
     * @param {NotificationTokensUpdateArgs} args - Arguments to update one NotificationTokens.
     * @example
     * // Update one NotificationTokens
     * const notificationTokens = await prisma.notificationTokens.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationTokensUpdateArgs>(args: SelectSubset<T, NotificationTokensUpdateArgs<ExtArgs>>): Prisma__NotificationTokensClient<$Result.GetResult<Prisma.$NotificationTokensPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more NotificationTokens.
     * @param {NotificationTokensDeleteManyArgs} args - Arguments to filter NotificationTokens to delete.
     * @example
     * // Delete a few NotificationTokens
     * const { count } = await prisma.notificationTokens.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationTokensDeleteManyArgs>(args?: SelectSubset<T, NotificationTokensDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationTokensUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NotificationTokens
     * const notificationTokens = await prisma.notificationTokens.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationTokensUpdateManyArgs>(args: SelectSubset<T, NotificationTokensUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one NotificationTokens.
     * @param {NotificationTokensUpsertArgs} args - Arguments to update or create a NotificationTokens.
     * @example
     * // Update or create a NotificationTokens
     * const notificationTokens = await prisma.notificationTokens.upsert({
     *   create: {
     *     // ... data to create a NotificationTokens
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NotificationTokens we want to update
     *   }
     * })
     */
    upsert<T extends NotificationTokensUpsertArgs>(args: SelectSubset<T, NotificationTokensUpsertArgs<ExtArgs>>): Prisma__NotificationTokensClient<$Result.GetResult<Prisma.$NotificationTokensPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of NotificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationTokensCountArgs} args - Arguments to filter NotificationTokens to count.
     * @example
     * // Count the number of NotificationTokens
     * const count = await prisma.notificationTokens.count({
     *   where: {
     *     // ... the filter for the NotificationTokens we want to count
     *   }
     * })
    **/
    count<T extends NotificationTokensCountArgs>(
      args?: Subset<T, NotificationTokensCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationTokensCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NotificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationTokensAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationTokensAggregateArgs>(args: Subset<T, NotificationTokensAggregateArgs>): Prisma.PrismaPromise<GetNotificationTokensAggregateType<T>>

    /**
     * Group by NotificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationTokensGroupByArgs} args - Group by arguments.
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
      T extends NotificationTokensGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationTokensGroupByArgs['orderBy'] }
        : { orderBy?: NotificationTokensGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationTokensGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationTokensGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NotificationTokens model
   */
  readonly fields: NotificationTokensFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NotificationTokens.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationTokensClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the NotificationTokens model
   */ 
  interface NotificationTokensFieldRefs {
    readonly id: FieldRef<"NotificationTokens", 'Int'>
    readonly userId: FieldRef<"NotificationTokens", 'String'>
    readonly deviceDetails: FieldRef<"NotificationTokens", 'String'>
    readonly token: FieldRef<"NotificationTokens", 'String'>
    readonly createdAt: FieldRef<"NotificationTokens", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NotificationTokens findUnique
   */
  export type NotificationTokensFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationTokens
     */
    select?: NotificationTokensSelect<ExtArgs> | null
    /**
     * Filter, which NotificationTokens to fetch.
     */
    where: NotificationTokensWhereUniqueInput
  }

  /**
   * NotificationTokens findUniqueOrThrow
   */
  export type NotificationTokensFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationTokens
     */
    select?: NotificationTokensSelect<ExtArgs> | null
    /**
     * Filter, which NotificationTokens to fetch.
     */
    where: NotificationTokensWhereUniqueInput
  }

  /**
   * NotificationTokens findFirst
   */
  export type NotificationTokensFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationTokens
     */
    select?: NotificationTokensSelect<ExtArgs> | null
    /**
     * Filter, which NotificationTokens to fetch.
     */
    where?: NotificationTokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationTokens to fetch.
     */
    orderBy?: NotificationTokensOrderByWithRelationInput | NotificationTokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationTokens.
     */
    cursor?: NotificationTokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationTokens.
     */
    distinct?: NotificationTokensScalarFieldEnum | NotificationTokensScalarFieldEnum[]
  }

  /**
   * NotificationTokens findFirstOrThrow
   */
  export type NotificationTokensFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationTokens
     */
    select?: NotificationTokensSelect<ExtArgs> | null
    /**
     * Filter, which NotificationTokens to fetch.
     */
    where?: NotificationTokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationTokens to fetch.
     */
    orderBy?: NotificationTokensOrderByWithRelationInput | NotificationTokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationTokens.
     */
    cursor?: NotificationTokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationTokens.
     */
    distinct?: NotificationTokensScalarFieldEnum | NotificationTokensScalarFieldEnum[]
  }

  /**
   * NotificationTokens findMany
   */
  export type NotificationTokensFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationTokens
     */
    select?: NotificationTokensSelect<ExtArgs> | null
    /**
     * Filter, which NotificationTokens to fetch.
     */
    where?: NotificationTokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationTokens to fetch.
     */
    orderBy?: NotificationTokensOrderByWithRelationInput | NotificationTokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NotificationTokens.
     */
    cursor?: NotificationTokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationTokens.
     */
    skip?: number
    distinct?: NotificationTokensScalarFieldEnum | NotificationTokensScalarFieldEnum[]
  }

  /**
   * NotificationTokens create
   */
  export type NotificationTokensCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationTokens
     */
    select?: NotificationTokensSelect<ExtArgs> | null
    /**
     * The data needed to create a NotificationTokens.
     */
    data: XOR<NotificationTokensCreateInput, NotificationTokensUncheckedCreateInput>
  }

  /**
   * NotificationTokens createMany
   */
  export type NotificationTokensCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NotificationTokens.
     */
    data: NotificationTokensCreateManyInput | NotificationTokensCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NotificationTokens update
   */
  export type NotificationTokensUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationTokens
     */
    select?: NotificationTokensSelect<ExtArgs> | null
    /**
     * The data needed to update a NotificationTokens.
     */
    data: XOR<NotificationTokensUpdateInput, NotificationTokensUncheckedUpdateInput>
    /**
     * Choose, which NotificationTokens to update.
     */
    where: NotificationTokensWhereUniqueInput
  }

  /**
   * NotificationTokens updateMany
   */
  export type NotificationTokensUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NotificationTokens.
     */
    data: XOR<NotificationTokensUpdateManyMutationInput, NotificationTokensUncheckedUpdateManyInput>
    /**
     * Filter which NotificationTokens to update
     */
    where?: NotificationTokensWhereInput
  }

  /**
   * NotificationTokens upsert
   */
  export type NotificationTokensUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationTokens
     */
    select?: NotificationTokensSelect<ExtArgs> | null
    /**
     * The filter to search for the NotificationTokens to update in case it exists.
     */
    where: NotificationTokensWhereUniqueInput
    /**
     * In case the NotificationTokens found by the `where` argument doesn't exist, create a new NotificationTokens with this data.
     */
    create: XOR<NotificationTokensCreateInput, NotificationTokensUncheckedCreateInput>
    /**
     * In case the NotificationTokens was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationTokensUpdateInput, NotificationTokensUncheckedUpdateInput>
  }

  /**
   * NotificationTokens delete
   */
  export type NotificationTokensDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationTokens
     */
    select?: NotificationTokensSelect<ExtArgs> | null
    /**
     * Filter which NotificationTokens to delete.
     */
    where: NotificationTokensWhereUniqueInput
  }

  /**
   * NotificationTokens deleteMany
   */
  export type NotificationTokensDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationTokens to delete
     */
    where?: NotificationTokensWhereInput
  }

  /**
   * NotificationTokens without action
   */
  export type NotificationTokensDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationTokens
     */
    select?: NotificationTokensSelect<ExtArgs> | null
  }


  /**
   * Model Notice
   */

  export type AggregateNotice = {
    _count: NoticeCountAggregateOutputType | null
    _avg: NoticeAvgAggregateOutputType | null
    _sum: NoticeSumAggregateOutputType | null
    _min: NoticeMinAggregateOutputType | null
    _max: NoticeMaxAggregateOutputType | null
  }

  export type NoticeAvgAggregateOutputType = {
    id: number | null
  }

  export type NoticeSumAggregateOutputType = {
    id: number | null
  }

  export type NoticeMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    icon: string | null
    creator_id: string | null
    created_at: Date | null
  }

  export type NoticeMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    icon: string | null
    creator_id: string | null
    created_at: Date | null
  }

  export type NoticeCountAggregateOutputType = {
    id: number
    title: number
    description: number
    icon: number
    creator_id: number
    created_at: number
    _all: number
  }


  export type NoticeAvgAggregateInputType = {
    id?: true
  }

  export type NoticeSumAggregateInputType = {
    id?: true
  }

  export type NoticeMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    icon?: true
    creator_id?: true
    created_at?: true
  }

  export type NoticeMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    icon?: true
    creator_id?: true
    created_at?: true
  }

  export type NoticeCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    icon?: true
    creator_id?: true
    created_at?: true
    _all?: true
  }

  export type NoticeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notice to aggregate.
     */
    where?: NoticeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notices to fetch.
     */
    orderBy?: NoticeOrderByWithRelationInput | NoticeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NoticeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notices
    **/
    _count?: true | NoticeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NoticeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NoticeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NoticeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NoticeMaxAggregateInputType
  }

  export type GetNoticeAggregateType<T extends NoticeAggregateArgs> = {
        [P in keyof T & keyof AggregateNotice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotice[P]>
      : GetScalarType<T[P], AggregateNotice[P]>
  }




  export type NoticeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoticeWhereInput
    orderBy?: NoticeOrderByWithAggregationInput | NoticeOrderByWithAggregationInput[]
    by: NoticeScalarFieldEnum[] | NoticeScalarFieldEnum
    having?: NoticeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NoticeCountAggregateInputType | true
    _avg?: NoticeAvgAggregateInputType
    _sum?: NoticeSumAggregateInputType
    _min?: NoticeMinAggregateInputType
    _max?: NoticeMaxAggregateInputType
  }

  export type NoticeGroupByOutputType = {
    id: number
    title: string
    description: string
    icon: string
    creator_id: string
    created_at: Date
    _count: NoticeCountAggregateOutputType | null
    _avg: NoticeAvgAggregateOutputType | null
    _sum: NoticeSumAggregateOutputType | null
    _min: NoticeMinAggregateOutputType | null
    _max: NoticeMaxAggregateOutputType | null
  }

  type GetNoticeGroupByPayload<T extends NoticeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NoticeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NoticeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NoticeGroupByOutputType[P]>
            : GetScalarType<T[P], NoticeGroupByOutputType[P]>
        }
      >
    >


  export type NoticeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    icon?: boolean
    creator_id?: boolean
    created_at?: boolean
    created_by?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notice"]>


  export type NoticeSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    icon?: boolean
    creator_id?: boolean
    created_at?: boolean
  }

  export type NoticeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_by?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NoticePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notice"
    objects: {
      created_by: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      icon: string
      creator_id: string
      created_at: Date
    }, ExtArgs["result"]["notice"]>
    composites: {}
  }

  type NoticeGetPayload<S extends boolean | null | undefined | NoticeDefaultArgs> = $Result.GetResult<Prisma.$NoticePayload, S>

  type NoticeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NoticeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NoticeCountAggregateInputType | true
    }

  export interface NoticeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notice'], meta: { name: 'Notice' } }
    /**
     * Find zero or one Notice that matches the filter.
     * @param {NoticeFindUniqueArgs} args - Arguments to find a Notice
     * @example
     * // Get one Notice
     * const notice = await prisma.notice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NoticeFindUniqueArgs>(args: SelectSubset<T, NoticeFindUniqueArgs<ExtArgs>>): Prisma__NoticeClient<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Notice that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {NoticeFindUniqueOrThrowArgs} args - Arguments to find a Notice
     * @example
     * // Get one Notice
     * const notice = await prisma.notice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NoticeFindUniqueOrThrowArgs>(args: SelectSubset<T, NoticeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NoticeClient<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Notice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeFindFirstArgs} args - Arguments to find a Notice
     * @example
     * // Get one Notice
     * const notice = await prisma.notice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NoticeFindFirstArgs>(args?: SelectSubset<T, NoticeFindFirstArgs<ExtArgs>>): Prisma__NoticeClient<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Notice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeFindFirstOrThrowArgs} args - Arguments to find a Notice
     * @example
     * // Get one Notice
     * const notice = await prisma.notice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NoticeFindFirstOrThrowArgs>(args?: SelectSubset<T, NoticeFindFirstOrThrowArgs<ExtArgs>>): Prisma__NoticeClient<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Notices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notices
     * const notices = await prisma.notice.findMany()
     * 
     * // Get first 10 Notices
     * const notices = await prisma.notice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const noticeWithIdOnly = await prisma.notice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NoticeFindManyArgs>(args?: SelectSubset<T, NoticeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Notice.
     * @param {NoticeCreateArgs} args - Arguments to create a Notice.
     * @example
     * // Create one Notice
     * const Notice = await prisma.notice.create({
     *   data: {
     *     // ... data to create a Notice
     *   }
     * })
     * 
     */
    create<T extends NoticeCreateArgs>(args: SelectSubset<T, NoticeCreateArgs<ExtArgs>>): Prisma__NoticeClient<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Notices.
     * @param {NoticeCreateManyArgs} args - Arguments to create many Notices.
     * @example
     * // Create many Notices
     * const notice = await prisma.notice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NoticeCreateManyArgs>(args?: SelectSubset<T, NoticeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Notice.
     * @param {NoticeDeleteArgs} args - Arguments to delete one Notice.
     * @example
     * // Delete one Notice
     * const Notice = await prisma.notice.delete({
     *   where: {
     *     // ... filter to delete one Notice
     *   }
     * })
     * 
     */
    delete<T extends NoticeDeleteArgs>(args: SelectSubset<T, NoticeDeleteArgs<ExtArgs>>): Prisma__NoticeClient<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Notice.
     * @param {NoticeUpdateArgs} args - Arguments to update one Notice.
     * @example
     * // Update one Notice
     * const notice = await prisma.notice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NoticeUpdateArgs>(args: SelectSubset<T, NoticeUpdateArgs<ExtArgs>>): Prisma__NoticeClient<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Notices.
     * @param {NoticeDeleteManyArgs} args - Arguments to filter Notices to delete.
     * @example
     * // Delete a few Notices
     * const { count } = await prisma.notice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NoticeDeleteManyArgs>(args?: SelectSubset<T, NoticeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notices
     * const notice = await prisma.notice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NoticeUpdateManyArgs>(args: SelectSubset<T, NoticeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notice.
     * @param {NoticeUpsertArgs} args - Arguments to update or create a Notice.
     * @example
     * // Update or create a Notice
     * const notice = await prisma.notice.upsert({
     *   create: {
     *     // ... data to create a Notice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notice we want to update
     *   }
     * })
     */
    upsert<T extends NoticeUpsertArgs>(args: SelectSubset<T, NoticeUpsertArgs<ExtArgs>>): Prisma__NoticeClient<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Notices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeCountArgs} args - Arguments to filter Notices to count.
     * @example
     * // Count the number of Notices
     * const count = await prisma.notice.count({
     *   where: {
     *     // ... the filter for the Notices we want to count
     *   }
     * })
    **/
    count<T extends NoticeCountArgs>(
      args?: Subset<T, NoticeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NoticeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NoticeAggregateArgs>(args: Subset<T, NoticeAggregateArgs>): Prisma.PrismaPromise<GetNoticeAggregateType<T>>

    /**
     * Group by Notice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeGroupByArgs} args - Group by arguments.
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
      T extends NoticeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NoticeGroupByArgs['orderBy'] }
        : { orderBy?: NoticeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NoticeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNoticeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notice model
   */
  readonly fields: NoticeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NoticeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    created_by<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Notice model
   */ 
  interface NoticeFieldRefs {
    readonly id: FieldRef<"Notice", 'Int'>
    readonly title: FieldRef<"Notice", 'String'>
    readonly description: FieldRef<"Notice", 'String'>
    readonly icon: FieldRef<"Notice", 'String'>
    readonly creator_id: FieldRef<"Notice", 'String'>
    readonly created_at: FieldRef<"Notice", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notice findUnique
   */
  export type NoticeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null
    /**
     * Filter, which Notice to fetch.
     */
    where: NoticeWhereUniqueInput
  }

  /**
   * Notice findUniqueOrThrow
   */
  export type NoticeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null
    /**
     * Filter, which Notice to fetch.
     */
    where: NoticeWhereUniqueInput
  }

  /**
   * Notice findFirst
   */
  export type NoticeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null
    /**
     * Filter, which Notice to fetch.
     */
    where?: NoticeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notices to fetch.
     */
    orderBy?: NoticeOrderByWithRelationInput | NoticeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notices.
     */
    cursor?: NoticeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notices.
     */
    distinct?: NoticeScalarFieldEnum | NoticeScalarFieldEnum[]
  }

  /**
   * Notice findFirstOrThrow
   */
  export type NoticeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null
    /**
     * Filter, which Notice to fetch.
     */
    where?: NoticeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notices to fetch.
     */
    orderBy?: NoticeOrderByWithRelationInput | NoticeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notices.
     */
    cursor?: NoticeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notices.
     */
    distinct?: NoticeScalarFieldEnum | NoticeScalarFieldEnum[]
  }

  /**
   * Notice findMany
   */
  export type NoticeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null
    /**
     * Filter, which Notices to fetch.
     */
    where?: NoticeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notices to fetch.
     */
    orderBy?: NoticeOrderByWithRelationInput | NoticeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notices.
     */
    cursor?: NoticeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notices.
     */
    skip?: number
    distinct?: NoticeScalarFieldEnum | NoticeScalarFieldEnum[]
  }

  /**
   * Notice create
   */
  export type NoticeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null
    /**
     * The data needed to create a Notice.
     */
    data: XOR<NoticeCreateInput, NoticeUncheckedCreateInput>
  }

  /**
   * Notice createMany
   */
  export type NoticeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notices.
     */
    data: NoticeCreateManyInput | NoticeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notice update
   */
  export type NoticeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null
    /**
     * The data needed to update a Notice.
     */
    data: XOR<NoticeUpdateInput, NoticeUncheckedUpdateInput>
    /**
     * Choose, which Notice to update.
     */
    where: NoticeWhereUniqueInput
  }

  /**
   * Notice updateMany
   */
  export type NoticeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notices.
     */
    data: XOR<NoticeUpdateManyMutationInput, NoticeUncheckedUpdateManyInput>
    /**
     * Filter which Notices to update
     */
    where?: NoticeWhereInput
  }

  /**
   * Notice upsert
   */
  export type NoticeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null
    /**
     * The filter to search for the Notice to update in case it exists.
     */
    where: NoticeWhereUniqueInput
    /**
     * In case the Notice found by the `where` argument doesn't exist, create a new Notice with this data.
     */
    create: XOR<NoticeCreateInput, NoticeUncheckedCreateInput>
    /**
     * In case the Notice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NoticeUpdateInput, NoticeUncheckedUpdateInput>
  }

  /**
   * Notice delete
   */
  export type NoticeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null
    /**
     * Filter which Notice to delete.
     */
    where: NoticeWhereUniqueInput
  }

  /**
   * Notice deleteMany
   */
  export type NoticeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notices to delete
     */
    where?: NoticeWhereInput
  }

  /**
   * Notice without action
   */
  export type NoticeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationAvgAggregateOutputType = {
    id: number | null
  }

  export type NotificationSumAggregateOutputType = {
    id: number | null
  }

  export type NotificationMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    creator_id: string | null
    created_at: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    creator_id: string | null
    created_at: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    title: number
    description: number
    creator_id: number
    created_at: number
    _all: number
  }


  export type NotificationAvgAggregateInputType = {
    id?: true
  }

  export type NotificationSumAggregateInputType = {
    id?: true
  }

  export type NotificationMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    creator_id?: true
    created_at?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    creator_id?: true
    created_at?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    creator_id?: true
    created_at?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _avg?: NotificationAvgAggregateInputType
    _sum?: NotificationSumAggregateInputType
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: number
    title: string
    description: string
    creator_id: string
    created_at: Date
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    creator_id?: boolean
    created_at?: boolean
    created_by?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>


  export type NotificationSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    creator_id?: boolean
    created_at?: boolean
  }

  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_by?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      created_by: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      creator_id: string
      created_at: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
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
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    created_by<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Notification model
   */ 
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'Int'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly description: FieldRef<"Notification", 'String'>
    readonly creator_id: FieldRef<"Notification", 'String'>
    readonly created_at: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model Fund
   */

  export type AggregateFund = {
    _count: FundCountAggregateOutputType | null
    _avg: FundAvgAggregateOutputType | null
    _sum: FundSumAggregateOutputType | null
    _min: FundMinAggregateOutputType | null
    _max: FundMaxAggregateOutputType | null
  }

  export type FundAvgAggregateOutputType = {
    id: number | null
  }

  export type FundSumAggregateOutputType = {
    id: number | null
  }

  export type FundMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    creator_id: string | null
    created_at: Date | null
  }

  export type FundMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    creator_id: string | null
    created_at: Date | null
  }

  export type FundCountAggregateOutputType = {
    id: number
    name: number
    description: number
    creator_id: number
    created_at: number
    _all: number
  }


  export type FundAvgAggregateInputType = {
    id?: true
  }

  export type FundSumAggregateInputType = {
    id?: true
  }

  export type FundMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    creator_id?: true
    created_at?: true
  }

  export type FundMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    creator_id?: true
    created_at?: true
  }

  export type FundCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    creator_id?: true
    created_at?: true
    _all?: true
  }

  export type FundAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fund to aggregate.
     */
    where?: FundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funds to fetch.
     */
    orderBy?: FundOrderByWithRelationInput | FundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Funds
    **/
    _count?: true | FundCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FundAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FundSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FundMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FundMaxAggregateInputType
  }

  export type GetFundAggregateType<T extends FundAggregateArgs> = {
        [P in keyof T & keyof AggregateFund]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFund[P]>
      : GetScalarType<T[P], AggregateFund[P]>
  }




  export type FundGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FundWhereInput
    orderBy?: FundOrderByWithAggregationInput | FundOrderByWithAggregationInput[]
    by: FundScalarFieldEnum[] | FundScalarFieldEnum
    having?: FundScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FundCountAggregateInputType | true
    _avg?: FundAvgAggregateInputType
    _sum?: FundSumAggregateInputType
    _min?: FundMinAggregateInputType
    _max?: FundMaxAggregateInputType
  }

  export type FundGroupByOutputType = {
    id: number
    name: string
    description: string
    creator_id: string
    created_at: Date
    _count: FundCountAggregateOutputType | null
    _avg: FundAvgAggregateOutputType | null
    _sum: FundSumAggregateOutputType | null
    _min: FundMinAggregateOutputType | null
    _max: FundMaxAggregateOutputType | null
  }

  type GetFundGroupByPayload<T extends FundGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FundGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FundGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FundGroupByOutputType[P]>
            : GetScalarType<T[P], FundGroupByOutputType[P]>
        }
      >
    >


  export type FundSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    creator_id?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["fund"]>


  export type FundSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    creator_id?: boolean
    created_at?: boolean
  }


  export type $FundPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fund"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      creator_id: string
      created_at: Date
    }, ExtArgs["result"]["fund"]>
    composites: {}
  }

  type FundGetPayload<S extends boolean | null | undefined | FundDefaultArgs> = $Result.GetResult<Prisma.$FundPayload, S>

  type FundCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FundFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FundCountAggregateInputType | true
    }

  export interface FundDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fund'], meta: { name: 'Fund' } }
    /**
     * Find zero or one Fund that matches the filter.
     * @param {FundFindUniqueArgs} args - Arguments to find a Fund
     * @example
     * // Get one Fund
     * const fund = await prisma.fund.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FundFindUniqueArgs>(args: SelectSubset<T, FundFindUniqueArgs<ExtArgs>>): Prisma__FundClient<$Result.GetResult<Prisma.$FundPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Fund that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FundFindUniqueOrThrowArgs} args - Arguments to find a Fund
     * @example
     * // Get one Fund
     * const fund = await prisma.fund.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FundFindUniqueOrThrowArgs>(args: SelectSubset<T, FundFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FundClient<$Result.GetResult<Prisma.$FundPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Fund that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundFindFirstArgs} args - Arguments to find a Fund
     * @example
     * // Get one Fund
     * const fund = await prisma.fund.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FundFindFirstArgs>(args?: SelectSubset<T, FundFindFirstArgs<ExtArgs>>): Prisma__FundClient<$Result.GetResult<Prisma.$FundPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Fund that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundFindFirstOrThrowArgs} args - Arguments to find a Fund
     * @example
     * // Get one Fund
     * const fund = await prisma.fund.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FundFindFirstOrThrowArgs>(args?: SelectSubset<T, FundFindFirstOrThrowArgs<ExtArgs>>): Prisma__FundClient<$Result.GetResult<Prisma.$FundPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Funds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Funds
     * const funds = await prisma.fund.findMany()
     * 
     * // Get first 10 Funds
     * const funds = await prisma.fund.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fundWithIdOnly = await prisma.fund.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FundFindManyArgs>(args?: SelectSubset<T, FundFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FundPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Fund.
     * @param {FundCreateArgs} args - Arguments to create a Fund.
     * @example
     * // Create one Fund
     * const Fund = await prisma.fund.create({
     *   data: {
     *     // ... data to create a Fund
     *   }
     * })
     * 
     */
    create<T extends FundCreateArgs>(args: SelectSubset<T, FundCreateArgs<ExtArgs>>): Prisma__FundClient<$Result.GetResult<Prisma.$FundPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Funds.
     * @param {FundCreateManyArgs} args - Arguments to create many Funds.
     * @example
     * // Create many Funds
     * const fund = await prisma.fund.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FundCreateManyArgs>(args?: SelectSubset<T, FundCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Fund.
     * @param {FundDeleteArgs} args - Arguments to delete one Fund.
     * @example
     * // Delete one Fund
     * const Fund = await prisma.fund.delete({
     *   where: {
     *     // ... filter to delete one Fund
     *   }
     * })
     * 
     */
    delete<T extends FundDeleteArgs>(args: SelectSubset<T, FundDeleteArgs<ExtArgs>>): Prisma__FundClient<$Result.GetResult<Prisma.$FundPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Fund.
     * @param {FundUpdateArgs} args - Arguments to update one Fund.
     * @example
     * // Update one Fund
     * const fund = await prisma.fund.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FundUpdateArgs>(args: SelectSubset<T, FundUpdateArgs<ExtArgs>>): Prisma__FundClient<$Result.GetResult<Prisma.$FundPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Funds.
     * @param {FundDeleteManyArgs} args - Arguments to filter Funds to delete.
     * @example
     * // Delete a few Funds
     * const { count } = await prisma.fund.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FundDeleteManyArgs>(args?: SelectSubset<T, FundDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Funds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Funds
     * const fund = await prisma.fund.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FundUpdateManyArgs>(args: SelectSubset<T, FundUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Fund.
     * @param {FundUpsertArgs} args - Arguments to update or create a Fund.
     * @example
     * // Update or create a Fund
     * const fund = await prisma.fund.upsert({
     *   create: {
     *     // ... data to create a Fund
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fund we want to update
     *   }
     * })
     */
    upsert<T extends FundUpsertArgs>(args: SelectSubset<T, FundUpsertArgs<ExtArgs>>): Prisma__FundClient<$Result.GetResult<Prisma.$FundPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Funds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundCountArgs} args - Arguments to filter Funds to count.
     * @example
     * // Count the number of Funds
     * const count = await prisma.fund.count({
     *   where: {
     *     // ... the filter for the Funds we want to count
     *   }
     * })
    **/
    count<T extends FundCountArgs>(
      args?: Subset<T, FundCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FundCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fund.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FundAggregateArgs>(args: Subset<T, FundAggregateArgs>): Prisma.PrismaPromise<GetFundAggregateType<T>>

    /**
     * Group by Fund.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundGroupByArgs} args - Group by arguments.
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
      T extends FundGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FundGroupByArgs['orderBy'] }
        : { orderBy?: FundGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FundGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFundGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fund model
   */
  readonly fields: FundFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fund.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FundClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Fund model
   */ 
  interface FundFieldRefs {
    readonly id: FieldRef<"Fund", 'Int'>
    readonly name: FieldRef<"Fund", 'String'>
    readonly description: FieldRef<"Fund", 'String'>
    readonly creator_id: FieldRef<"Fund", 'String'>
    readonly created_at: FieldRef<"Fund", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Fund findUnique
   */
  export type FundFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fund
     */
    select?: FundSelect<ExtArgs> | null
    /**
     * Filter, which Fund to fetch.
     */
    where: FundWhereUniqueInput
  }

  /**
   * Fund findUniqueOrThrow
   */
  export type FundFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fund
     */
    select?: FundSelect<ExtArgs> | null
    /**
     * Filter, which Fund to fetch.
     */
    where: FundWhereUniqueInput
  }

  /**
   * Fund findFirst
   */
  export type FundFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fund
     */
    select?: FundSelect<ExtArgs> | null
    /**
     * Filter, which Fund to fetch.
     */
    where?: FundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funds to fetch.
     */
    orderBy?: FundOrderByWithRelationInput | FundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Funds.
     */
    cursor?: FundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Funds.
     */
    distinct?: FundScalarFieldEnum | FundScalarFieldEnum[]
  }

  /**
   * Fund findFirstOrThrow
   */
  export type FundFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fund
     */
    select?: FundSelect<ExtArgs> | null
    /**
     * Filter, which Fund to fetch.
     */
    where?: FundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funds to fetch.
     */
    orderBy?: FundOrderByWithRelationInput | FundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Funds.
     */
    cursor?: FundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Funds.
     */
    distinct?: FundScalarFieldEnum | FundScalarFieldEnum[]
  }

  /**
   * Fund findMany
   */
  export type FundFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fund
     */
    select?: FundSelect<ExtArgs> | null
    /**
     * Filter, which Funds to fetch.
     */
    where?: FundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funds to fetch.
     */
    orderBy?: FundOrderByWithRelationInput | FundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Funds.
     */
    cursor?: FundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funds.
     */
    skip?: number
    distinct?: FundScalarFieldEnum | FundScalarFieldEnum[]
  }

  /**
   * Fund create
   */
  export type FundCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fund
     */
    select?: FundSelect<ExtArgs> | null
    /**
     * The data needed to create a Fund.
     */
    data: XOR<FundCreateInput, FundUncheckedCreateInput>
  }

  /**
   * Fund createMany
   */
  export type FundCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Funds.
     */
    data: FundCreateManyInput | FundCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fund update
   */
  export type FundUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fund
     */
    select?: FundSelect<ExtArgs> | null
    /**
     * The data needed to update a Fund.
     */
    data: XOR<FundUpdateInput, FundUncheckedUpdateInput>
    /**
     * Choose, which Fund to update.
     */
    where: FundWhereUniqueInput
  }

  /**
   * Fund updateMany
   */
  export type FundUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Funds.
     */
    data: XOR<FundUpdateManyMutationInput, FundUncheckedUpdateManyInput>
    /**
     * Filter which Funds to update
     */
    where?: FundWhereInput
  }

  /**
   * Fund upsert
   */
  export type FundUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fund
     */
    select?: FundSelect<ExtArgs> | null
    /**
     * The filter to search for the Fund to update in case it exists.
     */
    where: FundWhereUniqueInput
    /**
     * In case the Fund found by the `where` argument doesn't exist, create a new Fund with this data.
     */
    create: XOR<FundCreateInput, FundUncheckedCreateInput>
    /**
     * In case the Fund was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FundUpdateInput, FundUncheckedUpdateInput>
  }

  /**
   * Fund delete
   */
  export type FundDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fund
     */
    select?: FundSelect<ExtArgs> | null
    /**
     * Filter which Fund to delete.
     */
    where: FundWhereUniqueInput
  }

  /**
   * Fund deleteMany
   */
  export type FundDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Funds to delete
     */
    where?: FundWhereInput
  }

  /**
   * Fund without action
   */
  export type FundDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fund
     */
    select?: FundSelect<ExtArgs> | null
  }


  /**
   * Model FundEntry
   */

  export type AggregateFundEntry = {
    _count: FundEntryCountAggregateOutputType | null
    _avg: FundEntryAvgAggregateOutputType | null
    _sum: FundEntrySumAggregateOutputType | null
    _min: FundEntryMinAggregateOutputType | null
    _max: FundEntryMaxAggregateOutputType | null
  }

  export type FundEntryAvgAggregateOutputType = {
    id: number | null
    fund_id: number | null
    funded_amount: number | null
  }

  export type FundEntrySumAggregateOutputType = {
    id: number | null
    fund_id: number | null
    funded_amount: number | null
  }

  export type FundEntryMinAggregateOutputType = {
    id: number | null
    fund_id: number | null
    funded_amount: number | null
    user_id: string | null
    created_at: Date | null
  }

  export type FundEntryMaxAggregateOutputType = {
    id: number | null
    fund_id: number | null
    funded_amount: number | null
    user_id: string | null
    created_at: Date | null
  }

  export type FundEntryCountAggregateOutputType = {
    id: number
    fund_id: number
    funded_amount: number
    user_id: number
    created_at: number
    _all: number
  }


  export type FundEntryAvgAggregateInputType = {
    id?: true
    fund_id?: true
    funded_amount?: true
  }

  export type FundEntrySumAggregateInputType = {
    id?: true
    fund_id?: true
    funded_amount?: true
  }

  export type FundEntryMinAggregateInputType = {
    id?: true
    fund_id?: true
    funded_amount?: true
    user_id?: true
    created_at?: true
  }

  export type FundEntryMaxAggregateInputType = {
    id?: true
    fund_id?: true
    funded_amount?: true
    user_id?: true
    created_at?: true
  }

  export type FundEntryCountAggregateInputType = {
    id?: true
    fund_id?: true
    funded_amount?: true
    user_id?: true
    created_at?: true
    _all?: true
  }

  export type FundEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FundEntry to aggregate.
     */
    where?: FundEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FundEntries to fetch.
     */
    orderBy?: FundEntryOrderByWithRelationInput | FundEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FundEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FundEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FundEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FundEntries
    **/
    _count?: true | FundEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FundEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FundEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FundEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FundEntryMaxAggregateInputType
  }

  export type GetFundEntryAggregateType<T extends FundEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateFundEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFundEntry[P]>
      : GetScalarType<T[P], AggregateFundEntry[P]>
  }




  export type FundEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FundEntryWhereInput
    orderBy?: FundEntryOrderByWithAggregationInput | FundEntryOrderByWithAggregationInput[]
    by: FundEntryScalarFieldEnum[] | FundEntryScalarFieldEnum
    having?: FundEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FundEntryCountAggregateInputType | true
    _avg?: FundEntryAvgAggregateInputType
    _sum?: FundEntrySumAggregateInputType
    _min?: FundEntryMinAggregateInputType
    _max?: FundEntryMaxAggregateInputType
  }

  export type FundEntryGroupByOutputType = {
    id: number
    fund_id: number
    funded_amount: number
    user_id: string
    created_at: Date
    _count: FundEntryCountAggregateOutputType | null
    _avg: FundEntryAvgAggregateOutputType | null
    _sum: FundEntrySumAggregateOutputType | null
    _min: FundEntryMinAggregateOutputType | null
    _max: FundEntryMaxAggregateOutputType | null
  }

  type GetFundEntryGroupByPayload<T extends FundEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FundEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FundEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FundEntryGroupByOutputType[P]>
            : GetScalarType<T[P], FundEntryGroupByOutputType[P]>
        }
      >
    >


  export type FundEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fund_id?: boolean
    funded_amount?: boolean
    user_id?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fundEntry"]>


  export type FundEntrySelectScalar = {
    id?: boolean
    fund_id?: boolean
    funded_amount?: boolean
    user_id?: boolean
    created_at?: boolean
  }

  export type FundEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FundEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FundEntry"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fund_id: number
      funded_amount: number
      user_id: string
      created_at: Date
    }, ExtArgs["result"]["fundEntry"]>
    composites: {}
  }

  type FundEntryGetPayload<S extends boolean | null | undefined | FundEntryDefaultArgs> = $Result.GetResult<Prisma.$FundEntryPayload, S>

  type FundEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FundEntryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FundEntryCountAggregateInputType | true
    }

  export interface FundEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FundEntry'], meta: { name: 'FundEntry' } }
    /**
     * Find zero or one FundEntry that matches the filter.
     * @param {FundEntryFindUniqueArgs} args - Arguments to find a FundEntry
     * @example
     * // Get one FundEntry
     * const fundEntry = await prisma.fundEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FundEntryFindUniqueArgs>(args: SelectSubset<T, FundEntryFindUniqueArgs<ExtArgs>>): Prisma__FundEntryClient<$Result.GetResult<Prisma.$FundEntryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one FundEntry that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FundEntryFindUniqueOrThrowArgs} args - Arguments to find a FundEntry
     * @example
     * // Get one FundEntry
     * const fundEntry = await prisma.fundEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FundEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, FundEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FundEntryClient<$Result.GetResult<Prisma.$FundEntryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first FundEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundEntryFindFirstArgs} args - Arguments to find a FundEntry
     * @example
     * // Get one FundEntry
     * const fundEntry = await prisma.fundEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FundEntryFindFirstArgs>(args?: SelectSubset<T, FundEntryFindFirstArgs<ExtArgs>>): Prisma__FundEntryClient<$Result.GetResult<Prisma.$FundEntryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first FundEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundEntryFindFirstOrThrowArgs} args - Arguments to find a FundEntry
     * @example
     * // Get one FundEntry
     * const fundEntry = await prisma.fundEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FundEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, FundEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__FundEntryClient<$Result.GetResult<Prisma.$FundEntryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more FundEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FundEntries
     * const fundEntries = await prisma.fundEntry.findMany()
     * 
     * // Get first 10 FundEntries
     * const fundEntries = await prisma.fundEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fundEntryWithIdOnly = await prisma.fundEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FundEntryFindManyArgs>(args?: SelectSubset<T, FundEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FundEntryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a FundEntry.
     * @param {FundEntryCreateArgs} args - Arguments to create a FundEntry.
     * @example
     * // Create one FundEntry
     * const FundEntry = await prisma.fundEntry.create({
     *   data: {
     *     // ... data to create a FundEntry
     *   }
     * })
     * 
     */
    create<T extends FundEntryCreateArgs>(args: SelectSubset<T, FundEntryCreateArgs<ExtArgs>>): Prisma__FundEntryClient<$Result.GetResult<Prisma.$FundEntryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many FundEntries.
     * @param {FundEntryCreateManyArgs} args - Arguments to create many FundEntries.
     * @example
     * // Create many FundEntries
     * const fundEntry = await prisma.fundEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FundEntryCreateManyArgs>(args?: SelectSubset<T, FundEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FundEntry.
     * @param {FundEntryDeleteArgs} args - Arguments to delete one FundEntry.
     * @example
     * // Delete one FundEntry
     * const FundEntry = await prisma.fundEntry.delete({
     *   where: {
     *     // ... filter to delete one FundEntry
     *   }
     * })
     * 
     */
    delete<T extends FundEntryDeleteArgs>(args: SelectSubset<T, FundEntryDeleteArgs<ExtArgs>>): Prisma__FundEntryClient<$Result.GetResult<Prisma.$FundEntryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one FundEntry.
     * @param {FundEntryUpdateArgs} args - Arguments to update one FundEntry.
     * @example
     * // Update one FundEntry
     * const fundEntry = await prisma.fundEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FundEntryUpdateArgs>(args: SelectSubset<T, FundEntryUpdateArgs<ExtArgs>>): Prisma__FundEntryClient<$Result.GetResult<Prisma.$FundEntryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more FundEntries.
     * @param {FundEntryDeleteManyArgs} args - Arguments to filter FundEntries to delete.
     * @example
     * // Delete a few FundEntries
     * const { count } = await prisma.fundEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FundEntryDeleteManyArgs>(args?: SelectSubset<T, FundEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FundEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FundEntries
     * const fundEntry = await prisma.fundEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FundEntryUpdateManyArgs>(args: SelectSubset<T, FundEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FundEntry.
     * @param {FundEntryUpsertArgs} args - Arguments to update or create a FundEntry.
     * @example
     * // Update or create a FundEntry
     * const fundEntry = await prisma.fundEntry.upsert({
     *   create: {
     *     // ... data to create a FundEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FundEntry we want to update
     *   }
     * })
     */
    upsert<T extends FundEntryUpsertArgs>(args: SelectSubset<T, FundEntryUpsertArgs<ExtArgs>>): Prisma__FundEntryClient<$Result.GetResult<Prisma.$FundEntryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of FundEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundEntryCountArgs} args - Arguments to filter FundEntries to count.
     * @example
     * // Count the number of FundEntries
     * const count = await prisma.fundEntry.count({
     *   where: {
     *     // ... the filter for the FundEntries we want to count
     *   }
     * })
    **/
    count<T extends FundEntryCountArgs>(
      args?: Subset<T, FundEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FundEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FundEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FundEntryAggregateArgs>(args: Subset<T, FundEntryAggregateArgs>): Prisma.PrismaPromise<GetFundEntryAggregateType<T>>

    /**
     * Group by FundEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundEntryGroupByArgs} args - Group by arguments.
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
      T extends FundEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FundEntryGroupByArgs['orderBy'] }
        : { orderBy?: FundEntryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FundEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFundEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FundEntry model
   */
  readonly fields: FundEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FundEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FundEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the FundEntry model
   */ 
  interface FundEntryFieldRefs {
    readonly id: FieldRef<"FundEntry", 'Int'>
    readonly fund_id: FieldRef<"FundEntry", 'Int'>
    readonly funded_amount: FieldRef<"FundEntry", 'Float'>
    readonly user_id: FieldRef<"FundEntry", 'String'>
    readonly created_at: FieldRef<"FundEntry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FundEntry findUnique
   */
  export type FundEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundEntry
     */
    select?: FundEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundEntryInclude<ExtArgs> | null
    /**
     * Filter, which FundEntry to fetch.
     */
    where: FundEntryWhereUniqueInput
  }

  /**
   * FundEntry findUniqueOrThrow
   */
  export type FundEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundEntry
     */
    select?: FundEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundEntryInclude<ExtArgs> | null
    /**
     * Filter, which FundEntry to fetch.
     */
    where: FundEntryWhereUniqueInput
  }

  /**
   * FundEntry findFirst
   */
  export type FundEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundEntry
     */
    select?: FundEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundEntryInclude<ExtArgs> | null
    /**
     * Filter, which FundEntry to fetch.
     */
    where?: FundEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FundEntries to fetch.
     */
    orderBy?: FundEntryOrderByWithRelationInput | FundEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FundEntries.
     */
    cursor?: FundEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FundEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FundEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FundEntries.
     */
    distinct?: FundEntryScalarFieldEnum | FundEntryScalarFieldEnum[]
  }

  /**
   * FundEntry findFirstOrThrow
   */
  export type FundEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundEntry
     */
    select?: FundEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundEntryInclude<ExtArgs> | null
    /**
     * Filter, which FundEntry to fetch.
     */
    where?: FundEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FundEntries to fetch.
     */
    orderBy?: FundEntryOrderByWithRelationInput | FundEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FundEntries.
     */
    cursor?: FundEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FundEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FundEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FundEntries.
     */
    distinct?: FundEntryScalarFieldEnum | FundEntryScalarFieldEnum[]
  }

  /**
   * FundEntry findMany
   */
  export type FundEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundEntry
     */
    select?: FundEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundEntryInclude<ExtArgs> | null
    /**
     * Filter, which FundEntries to fetch.
     */
    where?: FundEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FundEntries to fetch.
     */
    orderBy?: FundEntryOrderByWithRelationInput | FundEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FundEntries.
     */
    cursor?: FundEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FundEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FundEntries.
     */
    skip?: number
    distinct?: FundEntryScalarFieldEnum | FundEntryScalarFieldEnum[]
  }

  /**
   * FundEntry create
   */
  export type FundEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundEntry
     */
    select?: FundEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a FundEntry.
     */
    data: XOR<FundEntryCreateInput, FundEntryUncheckedCreateInput>
  }

  /**
   * FundEntry createMany
   */
  export type FundEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FundEntries.
     */
    data: FundEntryCreateManyInput | FundEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FundEntry update
   */
  export type FundEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundEntry
     */
    select?: FundEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a FundEntry.
     */
    data: XOR<FundEntryUpdateInput, FundEntryUncheckedUpdateInput>
    /**
     * Choose, which FundEntry to update.
     */
    where: FundEntryWhereUniqueInput
  }

  /**
   * FundEntry updateMany
   */
  export type FundEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FundEntries.
     */
    data: XOR<FundEntryUpdateManyMutationInput, FundEntryUncheckedUpdateManyInput>
    /**
     * Filter which FundEntries to update
     */
    where?: FundEntryWhereInput
  }

  /**
   * FundEntry upsert
   */
  export type FundEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundEntry
     */
    select?: FundEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the FundEntry to update in case it exists.
     */
    where: FundEntryWhereUniqueInput
    /**
     * In case the FundEntry found by the `where` argument doesn't exist, create a new FundEntry with this data.
     */
    create: XOR<FundEntryCreateInput, FundEntryUncheckedCreateInput>
    /**
     * In case the FundEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FundEntryUpdateInput, FundEntryUncheckedUpdateInput>
  }

  /**
   * FundEntry delete
   */
  export type FundEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundEntry
     */
    select?: FundEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundEntryInclude<ExtArgs> | null
    /**
     * Filter which FundEntry to delete.
     */
    where: FundEntryWhereUniqueInput
  }

  /**
   * FundEntry deleteMany
   */
  export type FundEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FundEntries to delete
     */
    where?: FundEntryWhereInput
  }

  /**
   * FundEntry without action
   */
  export type FundEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundEntry
     */
    select?: FundEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundEntryInclude<ExtArgs> | null
  }


  /**
   * Model IndependentFund
   */

  export type AggregateIndependentFund = {
    _count: IndependentFundCountAggregateOutputType | null
    _avg: IndependentFundAvgAggregateOutputType | null
    _sum: IndependentFundSumAggregateOutputType | null
    _min: IndependentFundMinAggregateOutputType | null
    _max: IndependentFundMaxAggregateOutputType | null
  }

  export type IndependentFundAvgAggregateOutputType = {
    id: number | null
    amount: number | null
  }

  export type IndependentFundSumAggregateOutputType = {
    id: number | null
    amount: number | null
  }

  export type IndependentFundMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    amount: number | null
    type: $Enums.EntryType | null
    creator_id: string | null
    created_at: Date | null
  }

  export type IndependentFundMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    amount: number | null
    type: $Enums.EntryType | null
    creator_id: string | null
    created_at: Date | null
  }

  export type IndependentFundCountAggregateOutputType = {
    id: number
    name: number
    description: number
    amount: number
    type: number
    creator_id: number
    created_at: number
    _all: number
  }


  export type IndependentFundAvgAggregateInputType = {
    id?: true
    amount?: true
  }

  export type IndependentFundSumAggregateInputType = {
    id?: true
    amount?: true
  }

  export type IndependentFundMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    amount?: true
    type?: true
    creator_id?: true
    created_at?: true
  }

  export type IndependentFundMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    amount?: true
    type?: true
    creator_id?: true
    created_at?: true
  }

  export type IndependentFundCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    amount?: true
    type?: true
    creator_id?: true
    created_at?: true
    _all?: true
  }

  export type IndependentFundAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IndependentFund to aggregate.
     */
    where?: IndependentFundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndependentFunds to fetch.
     */
    orderBy?: IndependentFundOrderByWithRelationInput | IndependentFundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IndependentFundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndependentFunds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndependentFunds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IndependentFunds
    **/
    _count?: true | IndependentFundCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IndependentFundAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IndependentFundSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IndependentFundMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IndependentFundMaxAggregateInputType
  }

  export type GetIndependentFundAggregateType<T extends IndependentFundAggregateArgs> = {
        [P in keyof T & keyof AggregateIndependentFund]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIndependentFund[P]>
      : GetScalarType<T[P], AggregateIndependentFund[P]>
  }




  export type IndependentFundGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IndependentFundWhereInput
    orderBy?: IndependentFundOrderByWithAggregationInput | IndependentFundOrderByWithAggregationInput[]
    by: IndependentFundScalarFieldEnum[] | IndependentFundScalarFieldEnum
    having?: IndependentFundScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IndependentFundCountAggregateInputType | true
    _avg?: IndependentFundAvgAggregateInputType
    _sum?: IndependentFundSumAggregateInputType
    _min?: IndependentFundMinAggregateInputType
    _max?: IndependentFundMaxAggregateInputType
  }

  export type IndependentFundGroupByOutputType = {
    id: number
    name: string
    description: string
    amount: number
    type: $Enums.EntryType
    creator_id: string
    created_at: Date
    _count: IndependentFundCountAggregateOutputType | null
    _avg: IndependentFundAvgAggregateOutputType | null
    _sum: IndependentFundSumAggregateOutputType | null
    _min: IndependentFundMinAggregateOutputType | null
    _max: IndependentFundMaxAggregateOutputType | null
  }

  type GetIndependentFundGroupByPayload<T extends IndependentFundGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IndependentFundGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IndependentFundGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IndependentFundGroupByOutputType[P]>
            : GetScalarType<T[P], IndependentFundGroupByOutputType[P]>
        }
      >
    >


  export type IndependentFundSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    amount?: boolean
    type?: boolean
    creator_id?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["independentFund"]>


  export type IndependentFundSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    amount?: boolean
    type?: boolean
    creator_id?: boolean
    created_at?: boolean
  }


  export type $IndependentFundPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IndependentFund"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      amount: number
      type: $Enums.EntryType
      creator_id: string
      created_at: Date
    }, ExtArgs["result"]["independentFund"]>
    composites: {}
  }

  type IndependentFundGetPayload<S extends boolean | null | undefined | IndependentFundDefaultArgs> = $Result.GetResult<Prisma.$IndependentFundPayload, S>

  type IndependentFundCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<IndependentFundFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: IndependentFundCountAggregateInputType | true
    }

  export interface IndependentFundDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IndependentFund'], meta: { name: 'IndependentFund' } }
    /**
     * Find zero or one IndependentFund that matches the filter.
     * @param {IndependentFundFindUniqueArgs} args - Arguments to find a IndependentFund
     * @example
     * // Get one IndependentFund
     * const independentFund = await prisma.independentFund.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IndependentFundFindUniqueArgs>(args: SelectSubset<T, IndependentFundFindUniqueArgs<ExtArgs>>): Prisma__IndependentFundClient<$Result.GetResult<Prisma.$IndependentFundPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one IndependentFund that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {IndependentFundFindUniqueOrThrowArgs} args - Arguments to find a IndependentFund
     * @example
     * // Get one IndependentFund
     * const independentFund = await prisma.independentFund.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IndependentFundFindUniqueOrThrowArgs>(args: SelectSubset<T, IndependentFundFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IndependentFundClient<$Result.GetResult<Prisma.$IndependentFundPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first IndependentFund that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndependentFundFindFirstArgs} args - Arguments to find a IndependentFund
     * @example
     * // Get one IndependentFund
     * const independentFund = await prisma.independentFund.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IndependentFundFindFirstArgs>(args?: SelectSubset<T, IndependentFundFindFirstArgs<ExtArgs>>): Prisma__IndependentFundClient<$Result.GetResult<Prisma.$IndependentFundPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first IndependentFund that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndependentFundFindFirstOrThrowArgs} args - Arguments to find a IndependentFund
     * @example
     * // Get one IndependentFund
     * const independentFund = await prisma.independentFund.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IndependentFundFindFirstOrThrowArgs>(args?: SelectSubset<T, IndependentFundFindFirstOrThrowArgs<ExtArgs>>): Prisma__IndependentFundClient<$Result.GetResult<Prisma.$IndependentFundPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more IndependentFunds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndependentFundFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IndependentFunds
     * const independentFunds = await prisma.independentFund.findMany()
     * 
     * // Get first 10 IndependentFunds
     * const independentFunds = await prisma.independentFund.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const independentFundWithIdOnly = await prisma.independentFund.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IndependentFundFindManyArgs>(args?: SelectSubset<T, IndependentFundFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndependentFundPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a IndependentFund.
     * @param {IndependentFundCreateArgs} args - Arguments to create a IndependentFund.
     * @example
     * // Create one IndependentFund
     * const IndependentFund = await prisma.independentFund.create({
     *   data: {
     *     // ... data to create a IndependentFund
     *   }
     * })
     * 
     */
    create<T extends IndependentFundCreateArgs>(args: SelectSubset<T, IndependentFundCreateArgs<ExtArgs>>): Prisma__IndependentFundClient<$Result.GetResult<Prisma.$IndependentFundPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many IndependentFunds.
     * @param {IndependentFundCreateManyArgs} args - Arguments to create many IndependentFunds.
     * @example
     * // Create many IndependentFunds
     * const independentFund = await prisma.independentFund.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IndependentFundCreateManyArgs>(args?: SelectSubset<T, IndependentFundCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a IndependentFund.
     * @param {IndependentFundDeleteArgs} args - Arguments to delete one IndependentFund.
     * @example
     * // Delete one IndependentFund
     * const IndependentFund = await prisma.independentFund.delete({
     *   where: {
     *     // ... filter to delete one IndependentFund
     *   }
     * })
     * 
     */
    delete<T extends IndependentFundDeleteArgs>(args: SelectSubset<T, IndependentFundDeleteArgs<ExtArgs>>): Prisma__IndependentFundClient<$Result.GetResult<Prisma.$IndependentFundPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one IndependentFund.
     * @param {IndependentFundUpdateArgs} args - Arguments to update one IndependentFund.
     * @example
     * // Update one IndependentFund
     * const independentFund = await prisma.independentFund.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IndependentFundUpdateArgs>(args: SelectSubset<T, IndependentFundUpdateArgs<ExtArgs>>): Prisma__IndependentFundClient<$Result.GetResult<Prisma.$IndependentFundPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more IndependentFunds.
     * @param {IndependentFundDeleteManyArgs} args - Arguments to filter IndependentFunds to delete.
     * @example
     * // Delete a few IndependentFunds
     * const { count } = await prisma.independentFund.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IndependentFundDeleteManyArgs>(args?: SelectSubset<T, IndependentFundDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IndependentFunds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndependentFundUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IndependentFunds
     * const independentFund = await prisma.independentFund.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IndependentFundUpdateManyArgs>(args: SelectSubset<T, IndependentFundUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one IndependentFund.
     * @param {IndependentFundUpsertArgs} args - Arguments to update or create a IndependentFund.
     * @example
     * // Update or create a IndependentFund
     * const independentFund = await prisma.independentFund.upsert({
     *   create: {
     *     // ... data to create a IndependentFund
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IndependentFund we want to update
     *   }
     * })
     */
    upsert<T extends IndependentFundUpsertArgs>(args: SelectSubset<T, IndependentFundUpsertArgs<ExtArgs>>): Prisma__IndependentFundClient<$Result.GetResult<Prisma.$IndependentFundPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of IndependentFunds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndependentFundCountArgs} args - Arguments to filter IndependentFunds to count.
     * @example
     * // Count the number of IndependentFunds
     * const count = await prisma.independentFund.count({
     *   where: {
     *     // ... the filter for the IndependentFunds we want to count
     *   }
     * })
    **/
    count<T extends IndependentFundCountArgs>(
      args?: Subset<T, IndependentFundCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IndependentFundCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IndependentFund.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndependentFundAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IndependentFundAggregateArgs>(args: Subset<T, IndependentFundAggregateArgs>): Prisma.PrismaPromise<GetIndependentFundAggregateType<T>>

    /**
     * Group by IndependentFund.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndependentFundGroupByArgs} args - Group by arguments.
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
      T extends IndependentFundGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IndependentFundGroupByArgs['orderBy'] }
        : { orderBy?: IndependentFundGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IndependentFundGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIndependentFundGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IndependentFund model
   */
  readonly fields: IndependentFundFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IndependentFund.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IndependentFundClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the IndependentFund model
   */ 
  interface IndependentFundFieldRefs {
    readonly id: FieldRef<"IndependentFund", 'Int'>
    readonly name: FieldRef<"IndependentFund", 'String'>
    readonly description: FieldRef<"IndependentFund", 'String'>
    readonly amount: FieldRef<"IndependentFund", 'Float'>
    readonly type: FieldRef<"IndependentFund", 'EntryType'>
    readonly creator_id: FieldRef<"IndependentFund", 'String'>
    readonly created_at: FieldRef<"IndependentFund", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * IndependentFund findUnique
   */
  export type IndependentFundFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndependentFund
     */
    select?: IndependentFundSelect<ExtArgs> | null
    /**
     * Filter, which IndependentFund to fetch.
     */
    where: IndependentFundWhereUniqueInput
  }

  /**
   * IndependentFund findUniqueOrThrow
   */
  export type IndependentFundFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndependentFund
     */
    select?: IndependentFundSelect<ExtArgs> | null
    /**
     * Filter, which IndependentFund to fetch.
     */
    where: IndependentFundWhereUniqueInput
  }

  /**
   * IndependentFund findFirst
   */
  export type IndependentFundFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndependentFund
     */
    select?: IndependentFundSelect<ExtArgs> | null
    /**
     * Filter, which IndependentFund to fetch.
     */
    where?: IndependentFundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndependentFunds to fetch.
     */
    orderBy?: IndependentFundOrderByWithRelationInput | IndependentFundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IndependentFunds.
     */
    cursor?: IndependentFundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndependentFunds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndependentFunds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IndependentFunds.
     */
    distinct?: IndependentFundScalarFieldEnum | IndependentFundScalarFieldEnum[]
  }

  /**
   * IndependentFund findFirstOrThrow
   */
  export type IndependentFundFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndependentFund
     */
    select?: IndependentFundSelect<ExtArgs> | null
    /**
     * Filter, which IndependentFund to fetch.
     */
    where?: IndependentFundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndependentFunds to fetch.
     */
    orderBy?: IndependentFundOrderByWithRelationInput | IndependentFundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IndependentFunds.
     */
    cursor?: IndependentFundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndependentFunds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndependentFunds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IndependentFunds.
     */
    distinct?: IndependentFundScalarFieldEnum | IndependentFundScalarFieldEnum[]
  }

  /**
   * IndependentFund findMany
   */
  export type IndependentFundFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndependentFund
     */
    select?: IndependentFundSelect<ExtArgs> | null
    /**
     * Filter, which IndependentFunds to fetch.
     */
    where?: IndependentFundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndependentFunds to fetch.
     */
    orderBy?: IndependentFundOrderByWithRelationInput | IndependentFundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IndependentFunds.
     */
    cursor?: IndependentFundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndependentFunds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndependentFunds.
     */
    skip?: number
    distinct?: IndependentFundScalarFieldEnum | IndependentFundScalarFieldEnum[]
  }

  /**
   * IndependentFund create
   */
  export type IndependentFundCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndependentFund
     */
    select?: IndependentFundSelect<ExtArgs> | null
    /**
     * The data needed to create a IndependentFund.
     */
    data: XOR<IndependentFundCreateInput, IndependentFundUncheckedCreateInput>
  }

  /**
   * IndependentFund createMany
   */
  export type IndependentFundCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IndependentFunds.
     */
    data: IndependentFundCreateManyInput | IndependentFundCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IndependentFund update
   */
  export type IndependentFundUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndependentFund
     */
    select?: IndependentFundSelect<ExtArgs> | null
    /**
     * The data needed to update a IndependentFund.
     */
    data: XOR<IndependentFundUpdateInput, IndependentFundUncheckedUpdateInput>
    /**
     * Choose, which IndependentFund to update.
     */
    where: IndependentFundWhereUniqueInput
  }

  /**
   * IndependentFund updateMany
   */
  export type IndependentFundUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IndependentFunds.
     */
    data: XOR<IndependentFundUpdateManyMutationInput, IndependentFundUncheckedUpdateManyInput>
    /**
     * Filter which IndependentFunds to update
     */
    where?: IndependentFundWhereInput
  }

  /**
   * IndependentFund upsert
   */
  export type IndependentFundUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndependentFund
     */
    select?: IndependentFundSelect<ExtArgs> | null
    /**
     * The filter to search for the IndependentFund to update in case it exists.
     */
    where: IndependentFundWhereUniqueInput
    /**
     * In case the IndependentFund found by the `where` argument doesn't exist, create a new IndependentFund with this data.
     */
    create: XOR<IndependentFundCreateInput, IndependentFundUncheckedCreateInput>
    /**
     * In case the IndependentFund was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IndependentFundUpdateInput, IndependentFundUncheckedUpdateInput>
  }

  /**
   * IndependentFund delete
   */
  export type IndependentFundDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndependentFund
     */
    select?: IndependentFundSelect<ExtArgs> | null
    /**
     * Filter which IndependentFund to delete.
     */
    where: IndependentFundWhereUniqueInput
  }

  /**
   * IndependentFund deleteMany
   */
  export type IndependentFundDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IndependentFunds to delete
     */
    where?: IndependentFundWhereInput
  }

  /**
   * IndependentFund without action
   */
  export type IndependentFundDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndependentFund
     */
    select?: IndependentFundSelect<ExtArgs> | null
  }


  /**
   * Model AdminActivity
   */

  export type AggregateAdminActivity = {
    _count: AdminActivityCountAggregateOutputType | null
    _avg: AdminActivityAvgAggregateOutputType | null
    _sum: AdminActivitySumAggregateOutputType | null
    _min: AdminActivityMinAggregateOutputType | null
    _max: AdminActivityMaxAggregateOutputType | null
  }

  export type AdminActivityAvgAggregateOutputType = {
    id: number | null
  }

  export type AdminActivitySumAggregateOutputType = {
    id: number | null
  }

  export type AdminActivityMinAggregateOutputType = {
    id: number | null
    title: string | null
    creator_id: string | null
    created_at: Date | null
  }

  export type AdminActivityMaxAggregateOutputType = {
    id: number | null
    title: string | null
    creator_id: string | null
    created_at: Date | null
  }

  export type AdminActivityCountAggregateOutputType = {
    id: number
    title: number
    creator_id: number
    created_at: number
    _all: number
  }


  export type AdminActivityAvgAggregateInputType = {
    id?: true
  }

  export type AdminActivitySumAggregateInputType = {
    id?: true
  }

  export type AdminActivityMinAggregateInputType = {
    id?: true
    title?: true
    creator_id?: true
    created_at?: true
  }

  export type AdminActivityMaxAggregateInputType = {
    id?: true
    title?: true
    creator_id?: true
    created_at?: true
  }

  export type AdminActivityCountAggregateInputType = {
    id?: true
    title?: true
    creator_id?: true
    created_at?: true
    _all?: true
  }

  export type AdminActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminActivity to aggregate.
     */
    where?: AdminActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminActivities to fetch.
     */
    orderBy?: AdminActivityOrderByWithRelationInput | AdminActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminActivities
    **/
    _count?: true | AdminActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminActivityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminActivitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminActivityMaxAggregateInputType
  }

  export type GetAdminActivityAggregateType<T extends AdminActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminActivity[P]>
      : GetScalarType<T[P], AggregateAdminActivity[P]>
  }




  export type AdminActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminActivityWhereInput
    orderBy?: AdminActivityOrderByWithAggregationInput | AdminActivityOrderByWithAggregationInput[]
    by: AdminActivityScalarFieldEnum[] | AdminActivityScalarFieldEnum
    having?: AdminActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminActivityCountAggregateInputType | true
    _avg?: AdminActivityAvgAggregateInputType
    _sum?: AdminActivitySumAggregateInputType
    _min?: AdminActivityMinAggregateInputType
    _max?: AdminActivityMaxAggregateInputType
  }

  export type AdminActivityGroupByOutputType = {
    id: number
    title: string
    creator_id: string
    created_at: Date
    _count: AdminActivityCountAggregateOutputType | null
    _avg: AdminActivityAvgAggregateOutputType | null
    _sum: AdminActivitySumAggregateOutputType | null
    _min: AdminActivityMinAggregateOutputType | null
    _max: AdminActivityMaxAggregateOutputType | null
  }

  type GetAdminActivityGroupByPayload<T extends AdminActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminActivityGroupByOutputType[P]>
            : GetScalarType<T[P], AdminActivityGroupByOutputType[P]>
        }
      >
    >


  export type AdminActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    creator_id?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["adminActivity"]>


  export type AdminActivitySelectScalar = {
    id?: boolean
    title?: boolean
    creator_id?: boolean
    created_at?: boolean
  }


  export type $AdminActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminActivity"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      creator_id: string
      created_at: Date
    }, ExtArgs["result"]["adminActivity"]>
    composites: {}
  }

  type AdminActivityGetPayload<S extends boolean | null | undefined | AdminActivityDefaultArgs> = $Result.GetResult<Prisma.$AdminActivityPayload, S>

  type AdminActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AdminActivityFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AdminActivityCountAggregateInputType | true
    }

  export interface AdminActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminActivity'], meta: { name: 'AdminActivity' } }
    /**
     * Find zero or one AdminActivity that matches the filter.
     * @param {AdminActivityFindUniqueArgs} args - Arguments to find a AdminActivity
     * @example
     * // Get one AdminActivity
     * const adminActivity = await prisma.adminActivity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminActivityFindUniqueArgs>(args: SelectSubset<T, AdminActivityFindUniqueArgs<ExtArgs>>): Prisma__AdminActivityClient<$Result.GetResult<Prisma.$AdminActivityPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AdminActivity that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AdminActivityFindUniqueOrThrowArgs} args - Arguments to find a AdminActivity
     * @example
     * // Get one AdminActivity
     * const adminActivity = await prisma.adminActivity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminActivityClient<$Result.GetResult<Prisma.$AdminActivityPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AdminActivity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminActivityFindFirstArgs} args - Arguments to find a AdminActivity
     * @example
     * // Get one AdminActivity
     * const adminActivity = await prisma.adminActivity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminActivityFindFirstArgs>(args?: SelectSubset<T, AdminActivityFindFirstArgs<ExtArgs>>): Prisma__AdminActivityClient<$Result.GetResult<Prisma.$AdminActivityPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AdminActivity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminActivityFindFirstOrThrowArgs} args - Arguments to find a AdminActivity
     * @example
     * // Get one AdminActivity
     * const adminActivity = await prisma.adminActivity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminActivityClient<$Result.GetResult<Prisma.$AdminActivityPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AdminActivities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminActivities
     * const adminActivities = await prisma.adminActivity.findMany()
     * 
     * // Get first 10 AdminActivities
     * const adminActivities = await prisma.adminActivity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminActivityWithIdOnly = await prisma.adminActivity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminActivityFindManyArgs>(args?: SelectSubset<T, AdminActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminActivityPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AdminActivity.
     * @param {AdminActivityCreateArgs} args - Arguments to create a AdminActivity.
     * @example
     * // Create one AdminActivity
     * const AdminActivity = await prisma.adminActivity.create({
     *   data: {
     *     // ... data to create a AdminActivity
     *   }
     * })
     * 
     */
    create<T extends AdminActivityCreateArgs>(args: SelectSubset<T, AdminActivityCreateArgs<ExtArgs>>): Prisma__AdminActivityClient<$Result.GetResult<Prisma.$AdminActivityPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AdminActivities.
     * @param {AdminActivityCreateManyArgs} args - Arguments to create many AdminActivities.
     * @example
     * // Create many AdminActivities
     * const adminActivity = await prisma.adminActivity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminActivityCreateManyArgs>(args?: SelectSubset<T, AdminActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AdminActivity.
     * @param {AdminActivityDeleteArgs} args - Arguments to delete one AdminActivity.
     * @example
     * // Delete one AdminActivity
     * const AdminActivity = await prisma.adminActivity.delete({
     *   where: {
     *     // ... filter to delete one AdminActivity
     *   }
     * })
     * 
     */
    delete<T extends AdminActivityDeleteArgs>(args: SelectSubset<T, AdminActivityDeleteArgs<ExtArgs>>): Prisma__AdminActivityClient<$Result.GetResult<Prisma.$AdminActivityPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AdminActivity.
     * @param {AdminActivityUpdateArgs} args - Arguments to update one AdminActivity.
     * @example
     * // Update one AdminActivity
     * const adminActivity = await prisma.adminActivity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminActivityUpdateArgs>(args: SelectSubset<T, AdminActivityUpdateArgs<ExtArgs>>): Prisma__AdminActivityClient<$Result.GetResult<Prisma.$AdminActivityPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AdminActivities.
     * @param {AdminActivityDeleteManyArgs} args - Arguments to filter AdminActivities to delete.
     * @example
     * // Delete a few AdminActivities
     * const { count } = await prisma.adminActivity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminActivityDeleteManyArgs>(args?: SelectSubset<T, AdminActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminActivities
     * const adminActivity = await prisma.adminActivity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminActivityUpdateManyArgs>(args: SelectSubset<T, AdminActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AdminActivity.
     * @param {AdminActivityUpsertArgs} args - Arguments to update or create a AdminActivity.
     * @example
     * // Update or create a AdminActivity
     * const adminActivity = await prisma.adminActivity.upsert({
     *   create: {
     *     // ... data to create a AdminActivity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminActivity we want to update
     *   }
     * })
     */
    upsert<T extends AdminActivityUpsertArgs>(args: SelectSubset<T, AdminActivityUpsertArgs<ExtArgs>>): Prisma__AdminActivityClient<$Result.GetResult<Prisma.$AdminActivityPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AdminActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminActivityCountArgs} args - Arguments to filter AdminActivities to count.
     * @example
     * // Count the number of AdminActivities
     * const count = await prisma.adminActivity.count({
     *   where: {
     *     // ... the filter for the AdminActivities we want to count
     *   }
     * })
    **/
    count<T extends AdminActivityCountArgs>(
      args?: Subset<T, AdminActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminActivityAggregateArgs>(args: Subset<T, AdminActivityAggregateArgs>): Prisma.PrismaPromise<GetAdminActivityAggregateType<T>>

    /**
     * Group by AdminActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminActivityGroupByArgs} args - Group by arguments.
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
      T extends AdminActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminActivityGroupByArgs['orderBy'] }
        : { orderBy?: AdminActivityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminActivity model
   */
  readonly fields: AdminActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminActivity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AdminActivity model
   */ 
  interface AdminActivityFieldRefs {
    readonly id: FieldRef<"AdminActivity", 'Int'>
    readonly title: FieldRef<"AdminActivity", 'String'>
    readonly creator_id: FieldRef<"AdminActivity", 'String'>
    readonly created_at: FieldRef<"AdminActivity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdminActivity findUnique
   */
  export type AdminActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminActivity
     */
    select?: AdminActivitySelect<ExtArgs> | null
    /**
     * Filter, which AdminActivity to fetch.
     */
    where: AdminActivityWhereUniqueInput
  }

  /**
   * AdminActivity findUniqueOrThrow
   */
  export type AdminActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminActivity
     */
    select?: AdminActivitySelect<ExtArgs> | null
    /**
     * Filter, which AdminActivity to fetch.
     */
    where: AdminActivityWhereUniqueInput
  }

  /**
   * AdminActivity findFirst
   */
  export type AdminActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminActivity
     */
    select?: AdminActivitySelect<ExtArgs> | null
    /**
     * Filter, which AdminActivity to fetch.
     */
    where?: AdminActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminActivities to fetch.
     */
    orderBy?: AdminActivityOrderByWithRelationInput | AdminActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminActivities.
     */
    cursor?: AdminActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminActivities.
     */
    distinct?: AdminActivityScalarFieldEnum | AdminActivityScalarFieldEnum[]
  }

  /**
   * AdminActivity findFirstOrThrow
   */
  export type AdminActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminActivity
     */
    select?: AdminActivitySelect<ExtArgs> | null
    /**
     * Filter, which AdminActivity to fetch.
     */
    where?: AdminActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminActivities to fetch.
     */
    orderBy?: AdminActivityOrderByWithRelationInput | AdminActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminActivities.
     */
    cursor?: AdminActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminActivities.
     */
    distinct?: AdminActivityScalarFieldEnum | AdminActivityScalarFieldEnum[]
  }

  /**
   * AdminActivity findMany
   */
  export type AdminActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminActivity
     */
    select?: AdminActivitySelect<ExtArgs> | null
    /**
     * Filter, which AdminActivities to fetch.
     */
    where?: AdminActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminActivities to fetch.
     */
    orderBy?: AdminActivityOrderByWithRelationInput | AdminActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminActivities.
     */
    cursor?: AdminActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminActivities.
     */
    skip?: number
    distinct?: AdminActivityScalarFieldEnum | AdminActivityScalarFieldEnum[]
  }

  /**
   * AdminActivity create
   */
  export type AdminActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminActivity
     */
    select?: AdminActivitySelect<ExtArgs> | null
    /**
     * The data needed to create a AdminActivity.
     */
    data: XOR<AdminActivityCreateInput, AdminActivityUncheckedCreateInput>
  }

  /**
   * AdminActivity createMany
   */
  export type AdminActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminActivities.
     */
    data: AdminActivityCreateManyInput | AdminActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminActivity update
   */
  export type AdminActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminActivity
     */
    select?: AdminActivitySelect<ExtArgs> | null
    /**
     * The data needed to update a AdminActivity.
     */
    data: XOR<AdminActivityUpdateInput, AdminActivityUncheckedUpdateInput>
    /**
     * Choose, which AdminActivity to update.
     */
    where: AdminActivityWhereUniqueInput
  }

  /**
   * AdminActivity updateMany
   */
  export type AdminActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminActivities.
     */
    data: XOR<AdminActivityUpdateManyMutationInput, AdminActivityUncheckedUpdateManyInput>
    /**
     * Filter which AdminActivities to update
     */
    where?: AdminActivityWhereInput
  }

  /**
   * AdminActivity upsert
   */
  export type AdminActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminActivity
     */
    select?: AdminActivitySelect<ExtArgs> | null
    /**
     * The filter to search for the AdminActivity to update in case it exists.
     */
    where: AdminActivityWhereUniqueInput
    /**
     * In case the AdminActivity found by the `where` argument doesn't exist, create a new AdminActivity with this data.
     */
    create: XOR<AdminActivityCreateInput, AdminActivityUncheckedCreateInput>
    /**
     * In case the AdminActivity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminActivityUpdateInput, AdminActivityUncheckedUpdateInput>
  }

  /**
   * AdminActivity delete
   */
  export type AdminActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminActivity
     */
    select?: AdminActivitySelect<ExtArgs> | null
    /**
     * Filter which AdminActivity to delete.
     */
    where: AdminActivityWhereUniqueInput
  }

  /**
   * AdminActivity deleteMany
   */
  export type AdminActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminActivities to delete
     */
    where?: AdminActivityWhereInput
  }

  /**
   * AdminActivity without action
   */
  export type AdminActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminActivity
     */
    select?: AdminActivitySelect<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    gender: 'gender',
    password: 'password',
    role: 'role',
    instituteId: 'instituteId',
    profile_pic: 'profile_pic',
    home_district: 'home_district',
    whatsapp: 'whatsapp',
    facebook: 'facebook',
    instagram: 'instagram',
    linkedin: 'linkedin',
    codeforces: 'codeforces',
    github: 'github',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const NotificationTokensScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    deviceDetails: 'deviceDetails',
    token: 'token',
    createdAt: 'createdAt'
  };

  export type NotificationTokensScalarFieldEnum = (typeof NotificationTokensScalarFieldEnum)[keyof typeof NotificationTokensScalarFieldEnum]


  export const NoticeScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    icon: 'icon',
    creator_id: 'creator_id',
    created_at: 'created_at'
  };

  export type NoticeScalarFieldEnum = (typeof NoticeScalarFieldEnum)[keyof typeof NoticeScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    creator_id: 'creator_id',
    created_at: 'created_at'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const FundScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    creator_id: 'creator_id',
    created_at: 'created_at'
  };

  export type FundScalarFieldEnum = (typeof FundScalarFieldEnum)[keyof typeof FundScalarFieldEnum]


  export const FundEntryScalarFieldEnum: {
    id: 'id',
    fund_id: 'fund_id',
    funded_amount: 'funded_amount',
    user_id: 'user_id',
    created_at: 'created_at'
  };

  export type FundEntryScalarFieldEnum = (typeof FundEntryScalarFieldEnum)[keyof typeof FundEntryScalarFieldEnum]


  export const IndependentFundScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    amount: 'amount',
    type: 'type',
    creator_id: 'creator_id',
    created_at: 'created_at'
  };

  export type IndependentFundScalarFieldEnum = (typeof IndependentFundScalarFieldEnum)[keyof typeof IndependentFundScalarFieldEnum]


  export const AdminActivityScalarFieldEnum: {
    id: 'id',
    title: 'title',
    creator_id: 'creator_id',
    created_at: 'created_at'
  };

  export type AdminActivityScalarFieldEnum = (typeof AdminActivityScalarFieldEnum)[keyof typeof AdminActivityScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'UserGender'
   */
  export type EnumUserGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserGender'>
    


  /**
   * Reference to a field of type 'UserRoles'
   */
  export type EnumUserRolesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRoles'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'EntryType'
   */
  export type EnumEntryTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EntryType'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    gender?: EnumUserGenderNullableFilter<"User"> | $Enums.UserGender | null
    password?: StringFilter<"User"> | string
    role?: EnumUserRolesFilter<"User"> | $Enums.UserRoles
    instituteId?: StringNullableFilter<"User"> | string | null
    profile_pic?: StringNullableFilter<"User"> | string | null
    home_district?: StringNullableFilter<"User"> | string | null
    whatsapp?: StringNullableFilter<"User"> | string | null
    facebook?: StringNullableFilter<"User"> | string | null
    instagram?: StringNullableFilter<"User"> | string | null
    linkedin?: StringNullableFilter<"User"> | string | null
    codeforces?: StringNullableFilter<"User"> | string | null
    github?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    Notice?: NoticeListRelationFilter
    Notification?: NotificationListRelationFilter
    FundEntry?: FundEntryListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    password?: SortOrder
    role?: SortOrder
    instituteId?: SortOrderInput | SortOrder
    profile_pic?: SortOrderInput | SortOrder
    home_district?: SortOrderInput | SortOrder
    whatsapp?: SortOrderInput | SortOrder
    facebook?: SortOrderInput | SortOrder
    instagram?: SortOrderInput | SortOrder
    linkedin?: SortOrderInput | SortOrder
    codeforces?: SortOrderInput | SortOrder
    github?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Notice?: NoticeOrderByRelationAggregateInput
    Notification?: NotificationOrderByRelationAggregateInput
    FundEntry?: FundEntryOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    instituteId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    gender?: EnumUserGenderNullableFilter<"User"> | $Enums.UserGender | null
    password?: StringFilter<"User"> | string
    role?: EnumUserRolesFilter<"User"> | $Enums.UserRoles
    profile_pic?: StringNullableFilter<"User"> | string | null
    home_district?: StringNullableFilter<"User"> | string | null
    whatsapp?: StringNullableFilter<"User"> | string | null
    facebook?: StringNullableFilter<"User"> | string | null
    instagram?: StringNullableFilter<"User"> | string | null
    linkedin?: StringNullableFilter<"User"> | string | null
    codeforces?: StringNullableFilter<"User"> | string | null
    github?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    Notice?: NoticeListRelationFilter
    Notification?: NotificationListRelationFilter
    FundEntry?: FundEntryListRelationFilter
  }, "id" | "email" | "instituteId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    password?: SortOrder
    role?: SortOrder
    instituteId?: SortOrderInput | SortOrder
    profile_pic?: SortOrderInput | SortOrder
    home_district?: SortOrderInput | SortOrder
    whatsapp?: SortOrderInput | SortOrder
    facebook?: SortOrderInput | SortOrder
    instagram?: SortOrderInput | SortOrder
    linkedin?: SortOrderInput | SortOrder
    codeforces?: SortOrderInput | SortOrder
    github?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    gender?: EnumUserGenderNullableWithAggregatesFilter<"User"> | $Enums.UserGender | null
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRolesWithAggregatesFilter<"User"> | $Enums.UserRoles
    instituteId?: StringNullableWithAggregatesFilter<"User"> | string | null
    profile_pic?: StringNullableWithAggregatesFilter<"User"> | string | null
    home_district?: StringNullableWithAggregatesFilter<"User"> | string | null
    whatsapp?: StringNullableWithAggregatesFilter<"User"> | string | null
    facebook?: StringNullableWithAggregatesFilter<"User"> | string | null
    instagram?: StringNullableWithAggregatesFilter<"User"> | string | null
    linkedin?: StringNullableWithAggregatesFilter<"User"> | string | null
    codeforces?: StringNullableWithAggregatesFilter<"User"> | string | null
    github?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type NotificationTokensWhereInput = {
    AND?: NotificationTokensWhereInput | NotificationTokensWhereInput[]
    OR?: NotificationTokensWhereInput[]
    NOT?: NotificationTokensWhereInput | NotificationTokensWhereInput[]
    id?: IntFilter<"NotificationTokens"> | number
    userId?: StringNullableFilter<"NotificationTokens"> | string | null
    deviceDetails?: StringFilter<"NotificationTokens"> | string
    token?: StringFilter<"NotificationTokens"> | string
    createdAt?: DateTimeFilter<"NotificationTokens"> | Date | string
  }

  export type NotificationTokensOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    deviceDetails?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationTokensWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NotificationTokensWhereInput | NotificationTokensWhereInput[]
    OR?: NotificationTokensWhereInput[]
    NOT?: NotificationTokensWhereInput | NotificationTokensWhereInput[]
    userId?: StringNullableFilter<"NotificationTokens"> | string | null
    deviceDetails?: StringFilter<"NotificationTokens"> | string
    token?: StringFilter<"NotificationTokens"> | string
    createdAt?: DateTimeFilter<"NotificationTokens"> | Date | string
  }, "id">

  export type NotificationTokensOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    deviceDetails?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    _count?: NotificationTokensCountOrderByAggregateInput
    _avg?: NotificationTokensAvgOrderByAggregateInput
    _max?: NotificationTokensMaxOrderByAggregateInput
    _min?: NotificationTokensMinOrderByAggregateInput
    _sum?: NotificationTokensSumOrderByAggregateInput
  }

  export type NotificationTokensScalarWhereWithAggregatesInput = {
    AND?: NotificationTokensScalarWhereWithAggregatesInput | NotificationTokensScalarWhereWithAggregatesInput[]
    OR?: NotificationTokensScalarWhereWithAggregatesInput[]
    NOT?: NotificationTokensScalarWhereWithAggregatesInput | NotificationTokensScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"NotificationTokens"> | number
    userId?: StringNullableWithAggregatesFilter<"NotificationTokens"> | string | null
    deviceDetails?: StringWithAggregatesFilter<"NotificationTokens"> | string
    token?: StringWithAggregatesFilter<"NotificationTokens"> | string
    createdAt?: DateTimeWithAggregatesFilter<"NotificationTokens"> | Date | string
  }

  export type NoticeWhereInput = {
    AND?: NoticeWhereInput | NoticeWhereInput[]
    OR?: NoticeWhereInput[]
    NOT?: NoticeWhereInput | NoticeWhereInput[]
    id?: IntFilter<"Notice"> | number
    title?: StringFilter<"Notice"> | string
    description?: StringFilter<"Notice"> | string
    icon?: StringFilter<"Notice"> | string
    creator_id?: StringFilter<"Notice"> | string
    created_at?: DateTimeFilter<"Notice"> | Date | string
    created_by?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type NoticeOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    creator_id?: SortOrder
    created_at?: SortOrder
    created_by?: UserOrderByWithRelationInput
  }

  export type NoticeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NoticeWhereInput | NoticeWhereInput[]
    OR?: NoticeWhereInput[]
    NOT?: NoticeWhereInput | NoticeWhereInput[]
    title?: StringFilter<"Notice"> | string
    description?: StringFilter<"Notice"> | string
    icon?: StringFilter<"Notice"> | string
    creator_id?: StringFilter<"Notice"> | string
    created_at?: DateTimeFilter<"Notice"> | Date | string
    created_by?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type NoticeOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    creator_id?: SortOrder
    created_at?: SortOrder
    _count?: NoticeCountOrderByAggregateInput
    _avg?: NoticeAvgOrderByAggregateInput
    _max?: NoticeMaxOrderByAggregateInput
    _min?: NoticeMinOrderByAggregateInput
    _sum?: NoticeSumOrderByAggregateInput
  }

  export type NoticeScalarWhereWithAggregatesInput = {
    AND?: NoticeScalarWhereWithAggregatesInput | NoticeScalarWhereWithAggregatesInput[]
    OR?: NoticeScalarWhereWithAggregatesInput[]
    NOT?: NoticeScalarWhereWithAggregatesInput | NoticeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Notice"> | number
    title?: StringWithAggregatesFilter<"Notice"> | string
    description?: StringWithAggregatesFilter<"Notice"> | string
    icon?: StringWithAggregatesFilter<"Notice"> | string
    creator_id?: StringWithAggregatesFilter<"Notice"> | string
    created_at?: DateTimeWithAggregatesFilter<"Notice"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: IntFilter<"Notification"> | number
    title?: StringFilter<"Notification"> | string
    description?: StringFilter<"Notification"> | string
    creator_id?: StringFilter<"Notification"> | string
    created_at?: DateTimeFilter<"Notification"> | Date | string
    created_by?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    creator_id?: SortOrder
    created_at?: SortOrder
    created_by?: UserOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    title?: StringFilter<"Notification"> | string
    description?: StringFilter<"Notification"> | string
    creator_id?: StringFilter<"Notification"> | string
    created_at?: DateTimeFilter<"Notification"> | Date | string
    created_by?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    creator_id?: SortOrder
    created_at?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _avg?: NotificationAvgOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
    _sum?: NotificationSumOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Notification"> | number
    title?: StringWithAggregatesFilter<"Notification"> | string
    description?: StringWithAggregatesFilter<"Notification"> | string
    creator_id?: StringWithAggregatesFilter<"Notification"> | string
    created_at?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type FundWhereInput = {
    AND?: FundWhereInput | FundWhereInput[]
    OR?: FundWhereInput[]
    NOT?: FundWhereInput | FundWhereInput[]
    id?: IntFilter<"Fund"> | number
    name?: StringFilter<"Fund"> | string
    description?: StringFilter<"Fund"> | string
    creator_id?: StringFilter<"Fund"> | string
    created_at?: DateTimeFilter<"Fund"> | Date | string
  }

  export type FundOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    creator_id?: SortOrder
    created_at?: SortOrder
  }

  export type FundWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FundWhereInput | FundWhereInput[]
    OR?: FundWhereInput[]
    NOT?: FundWhereInput | FundWhereInput[]
    name?: StringFilter<"Fund"> | string
    description?: StringFilter<"Fund"> | string
    creator_id?: StringFilter<"Fund"> | string
    created_at?: DateTimeFilter<"Fund"> | Date | string
  }, "id">

  export type FundOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    creator_id?: SortOrder
    created_at?: SortOrder
    _count?: FundCountOrderByAggregateInput
    _avg?: FundAvgOrderByAggregateInput
    _max?: FundMaxOrderByAggregateInput
    _min?: FundMinOrderByAggregateInput
    _sum?: FundSumOrderByAggregateInput
  }

  export type FundScalarWhereWithAggregatesInput = {
    AND?: FundScalarWhereWithAggregatesInput | FundScalarWhereWithAggregatesInput[]
    OR?: FundScalarWhereWithAggregatesInput[]
    NOT?: FundScalarWhereWithAggregatesInput | FundScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Fund"> | number
    name?: StringWithAggregatesFilter<"Fund"> | string
    description?: StringWithAggregatesFilter<"Fund"> | string
    creator_id?: StringWithAggregatesFilter<"Fund"> | string
    created_at?: DateTimeWithAggregatesFilter<"Fund"> | Date | string
  }

  export type FundEntryWhereInput = {
    AND?: FundEntryWhereInput | FundEntryWhereInput[]
    OR?: FundEntryWhereInput[]
    NOT?: FundEntryWhereInput | FundEntryWhereInput[]
    id?: IntFilter<"FundEntry"> | number
    fund_id?: IntFilter<"FundEntry"> | number
    funded_amount?: FloatFilter<"FundEntry"> | number
    user_id?: StringFilter<"FundEntry"> | string
    created_at?: DateTimeFilter<"FundEntry"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type FundEntryOrderByWithRelationInput = {
    id?: SortOrder
    fund_id?: SortOrder
    funded_amount?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type FundEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    fund_id?: number
    AND?: FundEntryWhereInput | FundEntryWhereInput[]
    OR?: FundEntryWhereInput[]
    NOT?: FundEntryWhereInput | FundEntryWhereInput[]
    funded_amount?: FloatFilter<"FundEntry"> | number
    user_id?: StringFilter<"FundEntry"> | string
    created_at?: DateTimeFilter<"FundEntry"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "fund_id">

  export type FundEntryOrderByWithAggregationInput = {
    id?: SortOrder
    fund_id?: SortOrder
    funded_amount?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    _count?: FundEntryCountOrderByAggregateInput
    _avg?: FundEntryAvgOrderByAggregateInput
    _max?: FundEntryMaxOrderByAggregateInput
    _min?: FundEntryMinOrderByAggregateInput
    _sum?: FundEntrySumOrderByAggregateInput
  }

  export type FundEntryScalarWhereWithAggregatesInput = {
    AND?: FundEntryScalarWhereWithAggregatesInput | FundEntryScalarWhereWithAggregatesInput[]
    OR?: FundEntryScalarWhereWithAggregatesInput[]
    NOT?: FundEntryScalarWhereWithAggregatesInput | FundEntryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FundEntry"> | number
    fund_id?: IntWithAggregatesFilter<"FundEntry"> | number
    funded_amount?: FloatWithAggregatesFilter<"FundEntry"> | number
    user_id?: StringWithAggregatesFilter<"FundEntry"> | string
    created_at?: DateTimeWithAggregatesFilter<"FundEntry"> | Date | string
  }

  export type IndependentFundWhereInput = {
    AND?: IndependentFundWhereInput | IndependentFundWhereInput[]
    OR?: IndependentFundWhereInput[]
    NOT?: IndependentFundWhereInput | IndependentFundWhereInput[]
    id?: IntFilter<"IndependentFund"> | number
    name?: StringFilter<"IndependentFund"> | string
    description?: StringFilter<"IndependentFund"> | string
    amount?: FloatFilter<"IndependentFund"> | number
    type?: EnumEntryTypeFilter<"IndependentFund"> | $Enums.EntryType
    creator_id?: StringFilter<"IndependentFund"> | string
    created_at?: DateTimeFilter<"IndependentFund"> | Date | string
  }

  export type IndependentFundOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    creator_id?: SortOrder
    created_at?: SortOrder
  }

  export type IndependentFundWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: IndependentFundWhereInput | IndependentFundWhereInput[]
    OR?: IndependentFundWhereInput[]
    NOT?: IndependentFundWhereInput | IndependentFundWhereInput[]
    name?: StringFilter<"IndependentFund"> | string
    description?: StringFilter<"IndependentFund"> | string
    amount?: FloatFilter<"IndependentFund"> | number
    type?: EnumEntryTypeFilter<"IndependentFund"> | $Enums.EntryType
    creator_id?: StringFilter<"IndependentFund"> | string
    created_at?: DateTimeFilter<"IndependentFund"> | Date | string
  }, "id">

  export type IndependentFundOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    creator_id?: SortOrder
    created_at?: SortOrder
    _count?: IndependentFundCountOrderByAggregateInput
    _avg?: IndependentFundAvgOrderByAggregateInput
    _max?: IndependentFundMaxOrderByAggregateInput
    _min?: IndependentFundMinOrderByAggregateInput
    _sum?: IndependentFundSumOrderByAggregateInput
  }

  export type IndependentFundScalarWhereWithAggregatesInput = {
    AND?: IndependentFundScalarWhereWithAggregatesInput | IndependentFundScalarWhereWithAggregatesInput[]
    OR?: IndependentFundScalarWhereWithAggregatesInput[]
    NOT?: IndependentFundScalarWhereWithAggregatesInput | IndependentFundScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"IndependentFund"> | number
    name?: StringWithAggregatesFilter<"IndependentFund"> | string
    description?: StringWithAggregatesFilter<"IndependentFund"> | string
    amount?: FloatWithAggregatesFilter<"IndependentFund"> | number
    type?: EnumEntryTypeWithAggregatesFilter<"IndependentFund"> | $Enums.EntryType
    creator_id?: StringWithAggregatesFilter<"IndependentFund"> | string
    created_at?: DateTimeWithAggregatesFilter<"IndependentFund"> | Date | string
  }

  export type AdminActivityWhereInput = {
    AND?: AdminActivityWhereInput | AdminActivityWhereInput[]
    OR?: AdminActivityWhereInput[]
    NOT?: AdminActivityWhereInput | AdminActivityWhereInput[]
    id?: IntFilter<"AdminActivity"> | number
    title?: StringFilter<"AdminActivity"> | string
    creator_id?: StringFilter<"AdminActivity"> | string
    created_at?: DateTimeFilter<"AdminActivity"> | Date | string
  }

  export type AdminActivityOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    creator_id?: SortOrder
    created_at?: SortOrder
  }

  export type AdminActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AdminActivityWhereInput | AdminActivityWhereInput[]
    OR?: AdminActivityWhereInput[]
    NOT?: AdminActivityWhereInput | AdminActivityWhereInput[]
    title?: StringFilter<"AdminActivity"> | string
    creator_id?: StringFilter<"AdminActivity"> | string
    created_at?: DateTimeFilter<"AdminActivity"> | Date | string
  }, "id">

  export type AdminActivityOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    creator_id?: SortOrder
    created_at?: SortOrder
    _count?: AdminActivityCountOrderByAggregateInput
    _avg?: AdminActivityAvgOrderByAggregateInput
    _max?: AdminActivityMaxOrderByAggregateInput
    _min?: AdminActivityMinOrderByAggregateInput
    _sum?: AdminActivitySumOrderByAggregateInput
  }

  export type AdminActivityScalarWhereWithAggregatesInput = {
    AND?: AdminActivityScalarWhereWithAggregatesInput | AdminActivityScalarWhereWithAggregatesInput[]
    OR?: AdminActivityScalarWhereWithAggregatesInput[]
    NOT?: AdminActivityScalarWhereWithAggregatesInput | AdminActivityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AdminActivity"> | number
    title?: StringWithAggregatesFilter<"AdminActivity"> | string
    creator_id?: StringWithAggregatesFilter<"AdminActivity"> | string
    created_at?: DateTimeWithAggregatesFilter<"AdminActivity"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email: string
    phone?: string | null
    gender?: $Enums.UserGender | null
    password: string
    role?: $Enums.UserRoles
    instituteId?: string | null
    profile_pic?: string | null
    home_district?: string | null
    whatsapp?: string | null
    facebook?: string | null
    instagram?: string | null
    linkedin?: string | null
    codeforces?: string | null
    github?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Notice?: NoticeCreateNestedManyWithoutCreated_byInput
    Notification?: NotificationCreateNestedManyWithoutCreated_byInput
    FundEntry?: FundEntryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email: string
    phone?: string | null
    gender?: $Enums.UserGender | null
    password: string
    role?: $Enums.UserRoles
    instituteId?: string | null
    profile_pic?: string | null
    home_district?: string | null
    whatsapp?: string | null
    facebook?: string | null
    instagram?: string | null
    linkedin?: string | null
    codeforces?: string | null
    github?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Notice?: NoticeUncheckedCreateNestedManyWithoutCreated_byInput
    Notification?: NotificationUncheckedCreateNestedManyWithoutCreated_byInput
    FundEntry?: FundEntryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumUserGenderFieldUpdateOperationsInput | $Enums.UserGender | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles
    instituteId?: NullableStringFieldUpdateOperationsInput | string | null
    profile_pic?: NullableStringFieldUpdateOperationsInput | string | null
    home_district?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    codeforces?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Notice?: NoticeUpdateManyWithoutCreated_byNestedInput
    Notification?: NotificationUpdateManyWithoutCreated_byNestedInput
    FundEntry?: FundEntryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumUserGenderFieldUpdateOperationsInput | $Enums.UserGender | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles
    instituteId?: NullableStringFieldUpdateOperationsInput | string | null
    profile_pic?: NullableStringFieldUpdateOperationsInput | string | null
    home_district?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    codeforces?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Notice?: NoticeUncheckedUpdateManyWithoutCreated_byNestedInput
    Notification?: NotificationUncheckedUpdateManyWithoutCreated_byNestedInput
    FundEntry?: FundEntryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email: string
    phone?: string | null
    gender?: $Enums.UserGender | null
    password: string
    role?: $Enums.UserRoles
    instituteId?: string | null
    profile_pic?: string | null
    home_district?: string | null
    whatsapp?: string | null
    facebook?: string | null
    instagram?: string | null
    linkedin?: string | null
    codeforces?: string | null
    github?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumUserGenderFieldUpdateOperationsInput | $Enums.UserGender | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles
    instituteId?: NullableStringFieldUpdateOperationsInput | string | null
    profile_pic?: NullableStringFieldUpdateOperationsInput | string | null
    home_district?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    codeforces?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumUserGenderFieldUpdateOperationsInput | $Enums.UserGender | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles
    instituteId?: NullableStringFieldUpdateOperationsInput | string | null
    profile_pic?: NullableStringFieldUpdateOperationsInput | string | null
    home_district?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    codeforces?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationTokensCreateInput = {
    userId?: string | null
    deviceDetails?: string
    token: string
    createdAt?: Date | string
  }

  export type NotificationTokensUncheckedCreateInput = {
    id?: number
    userId?: string | null
    deviceDetails?: string
    token: string
    createdAt?: Date | string
  }

  export type NotificationTokensUpdateInput = {
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    deviceDetails?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationTokensUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    deviceDetails?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationTokensCreateManyInput = {
    id?: number
    userId?: string | null
    deviceDetails?: string
    token: string
    createdAt?: Date | string
  }

  export type NotificationTokensUpdateManyMutationInput = {
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    deviceDetails?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationTokensUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    deviceDetails?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoticeCreateInput = {
    title: string
    description: string
    icon: string
    created_at?: Date | string
    created_by: UserCreateNestedOneWithoutNoticeInput
  }

  export type NoticeUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    icon: string
    creator_id: string
    created_at?: Date | string
  }

  export type NoticeUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: UserUpdateOneRequiredWithoutNoticeNestedInput
  }

  export type NoticeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    creator_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoticeCreateManyInput = {
    id?: number
    title: string
    description: string
    icon: string
    creator_id: string
    created_at?: Date | string
  }

  export type NoticeUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoticeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    creator_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    title: string
    description: string
    created_at?: Date | string
    created_by: UserCreateNestedOneWithoutNotificationInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    creator_id: string
    created_at?: Date | string
  }

  export type NotificationUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: UserUpdateOneRequiredWithoutNotificationNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    creator_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: number
    title: string
    description: string
    creator_id: string
    created_at?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    creator_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FundCreateInput = {
    name: string
    description: string
    creator_id: string
    created_at?: Date | string
  }

  export type FundUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    creator_id: string
    created_at?: Date | string
  }

  export type FundUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    creator_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FundUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    creator_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FundCreateManyInput = {
    id?: number
    name: string
    description: string
    creator_id: string
    created_at?: Date | string
  }

  export type FundUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    creator_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FundUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    creator_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FundEntryCreateInput = {
    fund_id: number
    funded_amount: number
    created_at?: Date | string
    user: UserCreateNestedOneWithoutFundEntryInput
  }

  export type FundEntryUncheckedCreateInput = {
    id?: number
    fund_id: number
    funded_amount: number
    user_id: string
    created_at?: Date | string
  }

  export type FundEntryUpdateInput = {
    fund_id?: IntFieldUpdateOperationsInput | number
    funded_amount?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFundEntryNestedInput
  }

  export type FundEntryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fund_id?: IntFieldUpdateOperationsInput | number
    funded_amount?: FloatFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FundEntryCreateManyInput = {
    id?: number
    fund_id: number
    funded_amount: number
    user_id: string
    created_at?: Date | string
  }

  export type FundEntryUpdateManyMutationInput = {
    fund_id?: IntFieldUpdateOperationsInput | number
    funded_amount?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FundEntryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fund_id?: IntFieldUpdateOperationsInput | number
    funded_amount?: FloatFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IndependentFundCreateInput = {
    name: string
    description: string
    amount: number
    type: $Enums.EntryType
    creator_id: string
    created_at?: Date | string
  }

  export type IndependentFundUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    amount: number
    type: $Enums.EntryType
    creator_id: string
    created_at?: Date | string
  }

  export type IndependentFundUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: EnumEntryTypeFieldUpdateOperationsInput | $Enums.EntryType
    creator_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IndependentFundUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: EnumEntryTypeFieldUpdateOperationsInput | $Enums.EntryType
    creator_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IndependentFundCreateManyInput = {
    id?: number
    name: string
    description: string
    amount: number
    type: $Enums.EntryType
    creator_id: string
    created_at?: Date | string
  }

  export type IndependentFundUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: EnumEntryTypeFieldUpdateOperationsInput | $Enums.EntryType
    creator_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IndependentFundUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: EnumEntryTypeFieldUpdateOperationsInput | $Enums.EntryType
    creator_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminActivityCreateInput = {
    title: string
    creator_id: string
    created_at?: Date | string
  }

  export type AdminActivityUncheckedCreateInput = {
    id?: number
    title: string
    creator_id: string
    created_at?: Date | string
  }

  export type AdminActivityUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    creator_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminActivityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    creator_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminActivityCreateManyInput = {
    id?: number
    title: string
    creator_id: string
    created_at?: Date | string
  }

  export type AdminActivityUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    creator_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminActivityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    creator_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.UserGender | EnumUserGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.UserGender[] | null
    notIn?: $Enums.UserGender[] | null
    not?: NestedEnumUserGenderNullableFilter<$PrismaModel> | $Enums.UserGender | null
  }

  export type EnumUserRolesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRoles | EnumUserRolesFieldRefInput<$PrismaModel>
    in?: $Enums.UserRoles[]
    notIn?: $Enums.UserRoles[]
    not?: NestedEnumUserRolesFilter<$PrismaModel> | $Enums.UserRoles
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NoticeListRelationFilter = {
    every?: NoticeWhereInput
    some?: NoticeWhereInput
    none?: NoticeWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type FundEntryListRelationFilter = {
    every?: FundEntryWhereInput
    some?: FundEntryWhereInput
    none?: FundEntryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type NoticeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FundEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    gender?: SortOrder
    password?: SortOrder
    role?: SortOrder
    instituteId?: SortOrder
    profile_pic?: SortOrder
    home_district?: SortOrder
    whatsapp?: SortOrder
    facebook?: SortOrder
    instagram?: SortOrder
    linkedin?: SortOrder
    codeforces?: SortOrder
    github?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    gender?: SortOrder
    password?: SortOrder
    role?: SortOrder
    instituteId?: SortOrder
    profile_pic?: SortOrder
    home_district?: SortOrder
    whatsapp?: SortOrder
    facebook?: SortOrder
    instagram?: SortOrder
    linkedin?: SortOrder
    codeforces?: SortOrder
    github?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    gender?: SortOrder
    password?: SortOrder
    role?: SortOrder
    instituteId?: SortOrder
    profile_pic?: SortOrder
    home_district?: SortOrder
    whatsapp?: SortOrder
    facebook?: SortOrder
    instagram?: SortOrder
    linkedin?: SortOrder
    codeforces?: SortOrder
    github?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type EnumUserGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserGender | EnumUserGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.UserGender[] | null
    notIn?: $Enums.UserGender[] | null
    not?: NestedEnumUserGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.UserGender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumUserGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumUserGenderNullableFilter<$PrismaModel>
  }

  export type EnumUserRolesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRoles | EnumUserRolesFieldRefInput<$PrismaModel>
    in?: $Enums.UserRoles[]
    notIn?: $Enums.UserRoles[]
    not?: NestedEnumUserRolesWithAggregatesFilter<$PrismaModel> | $Enums.UserRoles
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRolesFilter<$PrismaModel>
    _max?: NestedEnumUserRolesFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NotificationTokensCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    deviceDetails?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationTokensAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NotificationTokensMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    deviceDetails?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationTokensMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    deviceDetails?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationTokensSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type NoticeCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    creator_id?: SortOrder
    created_at?: SortOrder
  }

  export type NoticeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NoticeMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    creator_id?: SortOrder
    created_at?: SortOrder
  }

  export type NoticeMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    creator_id?: SortOrder
    created_at?: SortOrder
  }

  export type NoticeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    creator_id?: SortOrder
    created_at?: SortOrder
  }

  export type NotificationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    creator_id?: SortOrder
    created_at?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    creator_id?: SortOrder
    created_at?: SortOrder
  }

  export type NotificationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FundCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    creator_id?: SortOrder
    created_at?: SortOrder
  }

  export type FundAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FundMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    creator_id?: SortOrder
    created_at?: SortOrder
  }

  export type FundMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    creator_id?: SortOrder
    created_at?: SortOrder
  }

  export type FundSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FundEntryCountOrderByAggregateInput = {
    id?: SortOrder
    fund_id?: SortOrder
    funded_amount?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
  }

  export type FundEntryAvgOrderByAggregateInput = {
    id?: SortOrder
    fund_id?: SortOrder
    funded_amount?: SortOrder
  }

  export type FundEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    fund_id?: SortOrder
    funded_amount?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
  }

  export type FundEntryMinOrderByAggregateInput = {
    id?: SortOrder
    fund_id?: SortOrder
    funded_amount?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
  }

  export type FundEntrySumOrderByAggregateInput = {
    id?: SortOrder
    fund_id?: SortOrder
    funded_amount?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type EnumEntryTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EntryType | EnumEntryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EntryType[]
    notIn?: $Enums.EntryType[]
    not?: NestedEnumEntryTypeFilter<$PrismaModel> | $Enums.EntryType
  }

  export type IndependentFundCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    creator_id?: SortOrder
    created_at?: SortOrder
  }

  export type IndependentFundAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
  }

  export type IndependentFundMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    creator_id?: SortOrder
    created_at?: SortOrder
  }

  export type IndependentFundMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    creator_id?: SortOrder
    created_at?: SortOrder
  }

  export type IndependentFundSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
  }

  export type EnumEntryTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EntryType | EnumEntryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EntryType[]
    notIn?: $Enums.EntryType[]
    not?: NestedEnumEntryTypeWithAggregatesFilter<$PrismaModel> | $Enums.EntryType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEntryTypeFilter<$PrismaModel>
    _max?: NestedEnumEntryTypeFilter<$PrismaModel>
  }

  export type AdminActivityCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    creator_id?: SortOrder
    created_at?: SortOrder
  }

  export type AdminActivityAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdminActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    creator_id?: SortOrder
    created_at?: SortOrder
  }

  export type AdminActivityMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    creator_id?: SortOrder
    created_at?: SortOrder
  }

  export type AdminActivitySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NoticeCreateNestedManyWithoutCreated_byInput = {
    create?: XOR<NoticeCreateWithoutCreated_byInput, NoticeUncheckedCreateWithoutCreated_byInput> | NoticeCreateWithoutCreated_byInput[] | NoticeUncheckedCreateWithoutCreated_byInput[]
    connectOrCreate?: NoticeCreateOrConnectWithoutCreated_byInput | NoticeCreateOrConnectWithoutCreated_byInput[]
    createMany?: NoticeCreateManyCreated_byInputEnvelope
    connect?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutCreated_byInput = {
    create?: XOR<NotificationCreateWithoutCreated_byInput, NotificationUncheckedCreateWithoutCreated_byInput> | NotificationCreateWithoutCreated_byInput[] | NotificationUncheckedCreateWithoutCreated_byInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutCreated_byInput | NotificationCreateOrConnectWithoutCreated_byInput[]
    createMany?: NotificationCreateManyCreated_byInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type FundEntryCreateNestedManyWithoutUserInput = {
    create?: XOR<FundEntryCreateWithoutUserInput, FundEntryUncheckedCreateWithoutUserInput> | FundEntryCreateWithoutUserInput[] | FundEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FundEntryCreateOrConnectWithoutUserInput | FundEntryCreateOrConnectWithoutUserInput[]
    createMany?: FundEntryCreateManyUserInputEnvelope
    connect?: FundEntryWhereUniqueInput | FundEntryWhereUniqueInput[]
  }

  export type NoticeUncheckedCreateNestedManyWithoutCreated_byInput = {
    create?: XOR<NoticeCreateWithoutCreated_byInput, NoticeUncheckedCreateWithoutCreated_byInput> | NoticeCreateWithoutCreated_byInput[] | NoticeUncheckedCreateWithoutCreated_byInput[]
    connectOrCreate?: NoticeCreateOrConnectWithoutCreated_byInput | NoticeCreateOrConnectWithoutCreated_byInput[]
    createMany?: NoticeCreateManyCreated_byInputEnvelope
    connect?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutCreated_byInput = {
    create?: XOR<NotificationCreateWithoutCreated_byInput, NotificationUncheckedCreateWithoutCreated_byInput> | NotificationCreateWithoutCreated_byInput[] | NotificationUncheckedCreateWithoutCreated_byInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutCreated_byInput | NotificationCreateOrConnectWithoutCreated_byInput[]
    createMany?: NotificationCreateManyCreated_byInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type FundEntryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FundEntryCreateWithoutUserInput, FundEntryUncheckedCreateWithoutUserInput> | FundEntryCreateWithoutUserInput[] | FundEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FundEntryCreateOrConnectWithoutUserInput | FundEntryCreateOrConnectWithoutUserInput[]
    createMany?: FundEntryCreateManyUserInputEnvelope
    connect?: FundEntryWhereUniqueInput | FundEntryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableEnumUserGenderFieldUpdateOperationsInput = {
    set?: $Enums.UserGender | null
  }

  export type EnumUserRolesFieldUpdateOperationsInput = {
    set?: $Enums.UserRoles
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NoticeUpdateManyWithoutCreated_byNestedInput = {
    create?: XOR<NoticeCreateWithoutCreated_byInput, NoticeUncheckedCreateWithoutCreated_byInput> | NoticeCreateWithoutCreated_byInput[] | NoticeUncheckedCreateWithoutCreated_byInput[]
    connectOrCreate?: NoticeCreateOrConnectWithoutCreated_byInput | NoticeCreateOrConnectWithoutCreated_byInput[]
    upsert?: NoticeUpsertWithWhereUniqueWithoutCreated_byInput | NoticeUpsertWithWhereUniqueWithoutCreated_byInput[]
    createMany?: NoticeCreateManyCreated_byInputEnvelope
    set?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[]
    disconnect?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[]
    delete?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[]
    connect?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[]
    update?: NoticeUpdateWithWhereUniqueWithoutCreated_byInput | NoticeUpdateWithWhereUniqueWithoutCreated_byInput[]
    updateMany?: NoticeUpdateManyWithWhereWithoutCreated_byInput | NoticeUpdateManyWithWhereWithoutCreated_byInput[]
    deleteMany?: NoticeScalarWhereInput | NoticeScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutCreated_byNestedInput = {
    create?: XOR<NotificationCreateWithoutCreated_byInput, NotificationUncheckedCreateWithoutCreated_byInput> | NotificationCreateWithoutCreated_byInput[] | NotificationUncheckedCreateWithoutCreated_byInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutCreated_byInput | NotificationCreateOrConnectWithoutCreated_byInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutCreated_byInput | NotificationUpsertWithWhereUniqueWithoutCreated_byInput[]
    createMany?: NotificationCreateManyCreated_byInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutCreated_byInput | NotificationUpdateWithWhereUniqueWithoutCreated_byInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutCreated_byInput | NotificationUpdateManyWithWhereWithoutCreated_byInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type FundEntryUpdateManyWithoutUserNestedInput = {
    create?: XOR<FundEntryCreateWithoutUserInput, FundEntryUncheckedCreateWithoutUserInput> | FundEntryCreateWithoutUserInput[] | FundEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FundEntryCreateOrConnectWithoutUserInput | FundEntryCreateOrConnectWithoutUserInput[]
    upsert?: FundEntryUpsertWithWhereUniqueWithoutUserInput | FundEntryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FundEntryCreateManyUserInputEnvelope
    set?: FundEntryWhereUniqueInput | FundEntryWhereUniqueInput[]
    disconnect?: FundEntryWhereUniqueInput | FundEntryWhereUniqueInput[]
    delete?: FundEntryWhereUniqueInput | FundEntryWhereUniqueInput[]
    connect?: FundEntryWhereUniqueInput | FundEntryWhereUniqueInput[]
    update?: FundEntryUpdateWithWhereUniqueWithoutUserInput | FundEntryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FundEntryUpdateManyWithWhereWithoutUserInput | FundEntryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FundEntryScalarWhereInput | FundEntryScalarWhereInput[]
  }

  export type NoticeUncheckedUpdateManyWithoutCreated_byNestedInput = {
    create?: XOR<NoticeCreateWithoutCreated_byInput, NoticeUncheckedCreateWithoutCreated_byInput> | NoticeCreateWithoutCreated_byInput[] | NoticeUncheckedCreateWithoutCreated_byInput[]
    connectOrCreate?: NoticeCreateOrConnectWithoutCreated_byInput | NoticeCreateOrConnectWithoutCreated_byInput[]
    upsert?: NoticeUpsertWithWhereUniqueWithoutCreated_byInput | NoticeUpsertWithWhereUniqueWithoutCreated_byInput[]
    createMany?: NoticeCreateManyCreated_byInputEnvelope
    set?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[]
    disconnect?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[]
    delete?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[]
    connect?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[]
    update?: NoticeUpdateWithWhereUniqueWithoutCreated_byInput | NoticeUpdateWithWhereUniqueWithoutCreated_byInput[]
    updateMany?: NoticeUpdateManyWithWhereWithoutCreated_byInput | NoticeUpdateManyWithWhereWithoutCreated_byInput[]
    deleteMany?: NoticeScalarWhereInput | NoticeScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutCreated_byNestedInput = {
    create?: XOR<NotificationCreateWithoutCreated_byInput, NotificationUncheckedCreateWithoutCreated_byInput> | NotificationCreateWithoutCreated_byInput[] | NotificationUncheckedCreateWithoutCreated_byInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutCreated_byInput | NotificationCreateOrConnectWithoutCreated_byInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutCreated_byInput | NotificationUpsertWithWhereUniqueWithoutCreated_byInput[]
    createMany?: NotificationCreateManyCreated_byInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutCreated_byInput | NotificationUpdateWithWhereUniqueWithoutCreated_byInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutCreated_byInput | NotificationUpdateManyWithWhereWithoutCreated_byInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type FundEntryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FundEntryCreateWithoutUserInput, FundEntryUncheckedCreateWithoutUserInput> | FundEntryCreateWithoutUserInput[] | FundEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FundEntryCreateOrConnectWithoutUserInput | FundEntryCreateOrConnectWithoutUserInput[]
    upsert?: FundEntryUpsertWithWhereUniqueWithoutUserInput | FundEntryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FundEntryCreateManyUserInputEnvelope
    set?: FundEntryWhereUniqueInput | FundEntryWhereUniqueInput[]
    disconnect?: FundEntryWhereUniqueInput | FundEntryWhereUniqueInput[]
    delete?: FundEntryWhereUniqueInput | FundEntryWhereUniqueInput[]
    connect?: FundEntryWhereUniqueInput | FundEntryWhereUniqueInput[]
    update?: FundEntryUpdateWithWhereUniqueWithoutUserInput | FundEntryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FundEntryUpdateManyWithWhereWithoutUserInput | FundEntryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FundEntryScalarWhereInput | FundEntryScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedOneWithoutNoticeInput = {
    create?: XOR<UserCreateWithoutNoticeInput, UserUncheckedCreateWithoutNoticeInput>
    connectOrCreate?: UserCreateOrConnectWithoutNoticeInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNoticeNestedInput = {
    create?: XOR<UserCreateWithoutNoticeInput, UserUncheckedCreateWithoutNoticeInput>
    connectOrCreate?: UserCreateOrConnectWithoutNoticeInput
    upsert?: UserUpsertWithoutNoticeInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNoticeInput, UserUpdateWithoutNoticeInput>, UserUncheckedUpdateWithoutNoticeInput>
  }

  export type UserCreateNestedOneWithoutNotificationInput = {
    create?: XOR<UserCreateWithoutNotificationInput, UserUncheckedCreateWithoutNotificationInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNotificationNestedInput = {
    create?: XOR<UserCreateWithoutNotificationInput, UserUncheckedCreateWithoutNotificationInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationInput
    upsert?: UserUpsertWithoutNotificationInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationInput, UserUpdateWithoutNotificationInput>, UserUncheckedUpdateWithoutNotificationInput>
  }

  export type UserCreateNestedOneWithoutFundEntryInput = {
    create?: XOR<UserCreateWithoutFundEntryInput, UserUncheckedCreateWithoutFundEntryInput>
    connectOrCreate?: UserCreateOrConnectWithoutFundEntryInput
    connect?: UserWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutFundEntryNestedInput = {
    create?: XOR<UserCreateWithoutFundEntryInput, UserUncheckedCreateWithoutFundEntryInput>
    connectOrCreate?: UserCreateOrConnectWithoutFundEntryInput
    upsert?: UserUpsertWithoutFundEntryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFundEntryInput, UserUpdateWithoutFundEntryInput>, UserUncheckedUpdateWithoutFundEntryInput>
  }

  export type EnumEntryTypeFieldUpdateOperationsInput = {
    set?: $Enums.EntryType
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.UserGender | EnumUserGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.UserGender[] | null
    notIn?: $Enums.UserGender[] | null
    not?: NestedEnumUserGenderNullableFilter<$PrismaModel> | $Enums.UserGender | null
  }

  export type NestedEnumUserRolesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRoles | EnumUserRolesFieldRefInput<$PrismaModel>
    in?: $Enums.UserRoles[]
    notIn?: $Enums.UserRoles[]
    not?: NestedEnumUserRolesFilter<$PrismaModel> | $Enums.UserRoles
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserGender | EnumUserGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.UserGender[] | null
    notIn?: $Enums.UserGender[] | null
    not?: NestedEnumUserGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.UserGender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumUserGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumUserGenderNullableFilter<$PrismaModel>
  }

  export type NestedEnumUserRolesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRoles | EnumUserRolesFieldRefInput<$PrismaModel>
    in?: $Enums.UserRoles[]
    notIn?: $Enums.UserRoles[]
    not?: NestedEnumUserRolesWithAggregatesFilter<$PrismaModel> | $Enums.UserRoles
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRolesFilter<$PrismaModel>
    _max?: NestedEnumUserRolesFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedEnumEntryTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EntryType | EnumEntryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EntryType[]
    notIn?: $Enums.EntryType[]
    not?: NestedEnumEntryTypeFilter<$PrismaModel> | $Enums.EntryType
  }

  export type NestedEnumEntryTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EntryType | EnumEntryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EntryType[]
    notIn?: $Enums.EntryType[]
    not?: NestedEnumEntryTypeWithAggregatesFilter<$PrismaModel> | $Enums.EntryType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEntryTypeFilter<$PrismaModel>
    _max?: NestedEnumEntryTypeFilter<$PrismaModel>
  }

  export type NoticeCreateWithoutCreated_byInput = {
    title: string
    description: string
    icon: string
    created_at?: Date | string
  }

  export type NoticeUncheckedCreateWithoutCreated_byInput = {
    id?: number
    title: string
    description: string
    icon: string
    created_at?: Date | string
  }

  export type NoticeCreateOrConnectWithoutCreated_byInput = {
    where: NoticeWhereUniqueInput
    create: XOR<NoticeCreateWithoutCreated_byInput, NoticeUncheckedCreateWithoutCreated_byInput>
  }

  export type NoticeCreateManyCreated_byInputEnvelope = {
    data: NoticeCreateManyCreated_byInput | NoticeCreateManyCreated_byInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutCreated_byInput = {
    title: string
    description: string
    created_at?: Date | string
  }

  export type NotificationUncheckedCreateWithoutCreated_byInput = {
    id?: number
    title: string
    description: string
    created_at?: Date | string
  }

  export type NotificationCreateOrConnectWithoutCreated_byInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutCreated_byInput, NotificationUncheckedCreateWithoutCreated_byInput>
  }

  export type NotificationCreateManyCreated_byInputEnvelope = {
    data: NotificationCreateManyCreated_byInput | NotificationCreateManyCreated_byInput[]
    skipDuplicates?: boolean
  }

  export type FundEntryCreateWithoutUserInput = {
    fund_id: number
    funded_amount: number
    created_at?: Date | string
  }

  export type FundEntryUncheckedCreateWithoutUserInput = {
    id?: number
    fund_id: number
    funded_amount: number
    created_at?: Date | string
  }

  export type FundEntryCreateOrConnectWithoutUserInput = {
    where: FundEntryWhereUniqueInput
    create: XOR<FundEntryCreateWithoutUserInput, FundEntryUncheckedCreateWithoutUserInput>
  }

  export type FundEntryCreateManyUserInputEnvelope = {
    data: FundEntryCreateManyUserInput | FundEntryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NoticeUpsertWithWhereUniqueWithoutCreated_byInput = {
    where: NoticeWhereUniqueInput
    update: XOR<NoticeUpdateWithoutCreated_byInput, NoticeUncheckedUpdateWithoutCreated_byInput>
    create: XOR<NoticeCreateWithoutCreated_byInput, NoticeUncheckedCreateWithoutCreated_byInput>
  }

  export type NoticeUpdateWithWhereUniqueWithoutCreated_byInput = {
    where: NoticeWhereUniqueInput
    data: XOR<NoticeUpdateWithoutCreated_byInput, NoticeUncheckedUpdateWithoutCreated_byInput>
  }

  export type NoticeUpdateManyWithWhereWithoutCreated_byInput = {
    where: NoticeScalarWhereInput
    data: XOR<NoticeUpdateManyMutationInput, NoticeUncheckedUpdateManyWithoutCreated_byInput>
  }

  export type NoticeScalarWhereInput = {
    AND?: NoticeScalarWhereInput | NoticeScalarWhereInput[]
    OR?: NoticeScalarWhereInput[]
    NOT?: NoticeScalarWhereInput | NoticeScalarWhereInput[]
    id?: IntFilter<"Notice"> | number
    title?: StringFilter<"Notice"> | string
    description?: StringFilter<"Notice"> | string
    icon?: StringFilter<"Notice"> | string
    creator_id?: StringFilter<"Notice"> | string
    created_at?: DateTimeFilter<"Notice"> | Date | string
  }

  export type NotificationUpsertWithWhereUniqueWithoutCreated_byInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutCreated_byInput, NotificationUncheckedUpdateWithoutCreated_byInput>
    create: XOR<NotificationCreateWithoutCreated_byInput, NotificationUncheckedCreateWithoutCreated_byInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutCreated_byInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutCreated_byInput, NotificationUncheckedUpdateWithoutCreated_byInput>
  }

  export type NotificationUpdateManyWithWhereWithoutCreated_byInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutCreated_byInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: IntFilter<"Notification"> | number
    title?: StringFilter<"Notification"> | string
    description?: StringFilter<"Notification"> | string
    creator_id?: StringFilter<"Notification"> | string
    created_at?: DateTimeFilter<"Notification"> | Date | string
  }

  export type FundEntryUpsertWithWhereUniqueWithoutUserInput = {
    where: FundEntryWhereUniqueInput
    update: XOR<FundEntryUpdateWithoutUserInput, FundEntryUncheckedUpdateWithoutUserInput>
    create: XOR<FundEntryCreateWithoutUserInput, FundEntryUncheckedCreateWithoutUserInput>
  }

  export type FundEntryUpdateWithWhereUniqueWithoutUserInput = {
    where: FundEntryWhereUniqueInput
    data: XOR<FundEntryUpdateWithoutUserInput, FundEntryUncheckedUpdateWithoutUserInput>
  }

  export type FundEntryUpdateManyWithWhereWithoutUserInput = {
    where: FundEntryScalarWhereInput
    data: XOR<FundEntryUpdateManyMutationInput, FundEntryUncheckedUpdateManyWithoutUserInput>
  }

  export type FundEntryScalarWhereInput = {
    AND?: FundEntryScalarWhereInput | FundEntryScalarWhereInput[]
    OR?: FundEntryScalarWhereInput[]
    NOT?: FundEntryScalarWhereInput | FundEntryScalarWhereInput[]
    id?: IntFilter<"FundEntry"> | number
    fund_id?: IntFilter<"FundEntry"> | number
    funded_amount?: FloatFilter<"FundEntry"> | number
    user_id?: StringFilter<"FundEntry"> | string
    created_at?: DateTimeFilter<"FundEntry"> | Date | string
  }

  export type UserCreateWithoutNoticeInput = {
    id?: string
    name?: string | null
    email: string
    phone?: string | null
    gender?: $Enums.UserGender | null
    password: string
    role?: $Enums.UserRoles
    instituteId?: string | null
    profile_pic?: string | null
    home_district?: string | null
    whatsapp?: string | null
    facebook?: string | null
    instagram?: string | null
    linkedin?: string | null
    codeforces?: string | null
    github?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Notification?: NotificationCreateNestedManyWithoutCreated_byInput
    FundEntry?: FundEntryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNoticeInput = {
    id?: string
    name?: string | null
    email: string
    phone?: string | null
    gender?: $Enums.UserGender | null
    password: string
    role?: $Enums.UserRoles
    instituteId?: string | null
    profile_pic?: string | null
    home_district?: string | null
    whatsapp?: string | null
    facebook?: string | null
    instagram?: string | null
    linkedin?: string | null
    codeforces?: string | null
    github?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Notification?: NotificationUncheckedCreateNestedManyWithoutCreated_byInput
    FundEntry?: FundEntryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNoticeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNoticeInput, UserUncheckedCreateWithoutNoticeInput>
  }

  export type UserUpsertWithoutNoticeInput = {
    update: XOR<UserUpdateWithoutNoticeInput, UserUncheckedUpdateWithoutNoticeInput>
    create: XOR<UserCreateWithoutNoticeInput, UserUncheckedCreateWithoutNoticeInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNoticeInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNoticeInput, UserUncheckedUpdateWithoutNoticeInput>
  }

  export type UserUpdateWithoutNoticeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumUserGenderFieldUpdateOperationsInput | $Enums.UserGender | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles
    instituteId?: NullableStringFieldUpdateOperationsInput | string | null
    profile_pic?: NullableStringFieldUpdateOperationsInput | string | null
    home_district?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    codeforces?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Notification?: NotificationUpdateManyWithoutCreated_byNestedInput
    FundEntry?: FundEntryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNoticeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumUserGenderFieldUpdateOperationsInput | $Enums.UserGender | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles
    instituteId?: NullableStringFieldUpdateOperationsInput | string | null
    profile_pic?: NullableStringFieldUpdateOperationsInput | string | null
    home_district?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    codeforces?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Notification?: NotificationUncheckedUpdateManyWithoutCreated_byNestedInput
    FundEntry?: FundEntryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutNotificationInput = {
    id?: string
    name?: string | null
    email: string
    phone?: string | null
    gender?: $Enums.UserGender | null
    password: string
    role?: $Enums.UserRoles
    instituteId?: string | null
    profile_pic?: string | null
    home_district?: string | null
    whatsapp?: string | null
    facebook?: string | null
    instagram?: string | null
    linkedin?: string | null
    codeforces?: string | null
    github?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Notice?: NoticeCreateNestedManyWithoutCreated_byInput
    FundEntry?: FundEntryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationInput = {
    id?: string
    name?: string | null
    email: string
    phone?: string | null
    gender?: $Enums.UserGender | null
    password: string
    role?: $Enums.UserRoles
    instituteId?: string | null
    profile_pic?: string | null
    home_district?: string | null
    whatsapp?: string | null
    facebook?: string | null
    instagram?: string | null
    linkedin?: string | null
    codeforces?: string | null
    github?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Notice?: NoticeUncheckedCreateNestedManyWithoutCreated_byInput
    FundEntry?: FundEntryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationInput, UserUncheckedCreateWithoutNotificationInput>
  }

  export type UserUpsertWithoutNotificationInput = {
    update: XOR<UserUpdateWithoutNotificationInput, UserUncheckedUpdateWithoutNotificationInput>
    create: XOR<UserCreateWithoutNotificationInput, UserUncheckedCreateWithoutNotificationInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationInput, UserUncheckedUpdateWithoutNotificationInput>
  }

  export type UserUpdateWithoutNotificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumUserGenderFieldUpdateOperationsInput | $Enums.UserGender | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles
    instituteId?: NullableStringFieldUpdateOperationsInput | string | null
    profile_pic?: NullableStringFieldUpdateOperationsInput | string | null
    home_district?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    codeforces?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Notice?: NoticeUpdateManyWithoutCreated_byNestedInput
    FundEntry?: FundEntryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumUserGenderFieldUpdateOperationsInput | $Enums.UserGender | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles
    instituteId?: NullableStringFieldUpdateOperationsInput | string | null
    profile_pic?: NullableStringFieldUpdateOperationsInput | string | null
    home_district?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    codeforces?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Notice?: NoticeUncheckedUpdateManyWithoutCreated_byNestedInput
    FundEntry?: FundEntryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutFundEntryInput = {
    id?: string
    name?: string | null
    email: string
    phone?: string | null
    gender?: $Enums.UserGender | null
    password: string
    role?: $Enums.UserRoles
    instituteId?: string | null
    profile_pic?: string | null
    home_district?: string | null
    whatsapp?: string | null
    facebook?: string | null
    instagram?: string | null
    linkedin?: string | null
    codeforces?: string | null
    github?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Notice?: NoticeCreateNestedManyWithoutCreated_byInput
    Notification?: NotificationCreateNestedManyWithoutCreated_byInput
  }

  export type UserUncheckedCreateWithoutFundEntryInput = {
    id?: string
    name?: string | null
    email: string
    phone?: string | null
    gender?: $Enums.UserGender | null
    password: string
    role?: $Enums.UserRoles
    instituteId?: string | null
    profile_pic?: string | null
    home_district?: string | null
    whatsapp?: string | null
    facebook?: string | null
    instagram?: string | null
    linkedin?: string | null
    codeforces?: string | null
    github?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Notice?: NoticeUncheckedCreateNestedManyWithoutCreated_byInput
    Notification?: NotificationUncheckedCreateNestedManyWithoutCreated_byInput
  }

  export type UserCreateOrConnectWithoutFundEntryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFundEntryInput, UserUncheckedCreateWithoutFundEntryInput>
  }

  export type UserUpsertWithoutFundEntryInput = {
    update: XOR<UserUpdateWithoutFundEntryInput, UserUncheckedUpdateWithoutFundEntryInput>
    create: XOR<UserCreateWithoutFundEntryInput, UserUncheckedCreateWithoutFundEntryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFundEntryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFundEntryInput, UserUncheckedUpdateWithoutFundEntryInput>
  }

  export type UserUpdateWithoutFundEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumUserGenderFieldUpdateOperationsInput | $Enums.UserGender | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles
    instituteId?: NullableStringFieldUpdateOperationsInput | string | null
    profile_pic?: NullableStringFieldUpdateOperationsInput | string | null
    home_district?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    codeforces?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Notice?: NoticeUpdateManyWithoutCreated_byNestedInput
    Notification?: NotificationUpdateManyWithoutCreated_byNestedInput
  }

  export type UserUncheckedUpdateWithoutFundEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumUserGenderFieldUpdateOperationsInput | $Enums.UserGender | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles
    instituteId?: NullableStringFieldUpdateOperationsInput | string | null
    profile_pic?: NullableStringFieldUpdateOperationsInput | string | null
    home_district?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    codeforces?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Notice?: NoticeUncheckedUpdateManyWithoutCreated_byNestedInput
    Notification?: NotificationUncheckedUpdateManyWithoutCreated_byNestedInput
  }

  export type NoticeCreateManyCreated_byInput = {
    id?: number
    title: string
    description: string
    icon: string
    created_at?: Date | string
  }

  export type NotificationCreateManyCreated_byInput = {
    id?: number
    title: string
    description: string
    created_at?: Date | string
  }

  export type FundEntryCreateManyUserInput = {
    id?: number
    fund_id: number
    funded_amount: number
    created_at?: Date | string
  }

  export type NoticeUpdateWithoutCreated_byInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoticeUncheckedUpdateWithoutCreated_byInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoticeUncheckedUpdateManyWithoutCreated_byInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutCreated_byInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateWithoutCreated_byInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutCreated_byInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FundEntryUpdateWithoutUserInput = {
    fund_id?: IntFieldUpdateOperationsInput | number
    funded_amount?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FundEntryUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    fund_id?: IntFieldUpdateOperationsInput | number
    funded_amount?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FundEntryUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    fund_id?: IntFieldUpdateOperationsInput | number
    funded_amount?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NotificationTokensDefaultArgs instead
     */
    export type NotificationTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NotificationTokensDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NoticeDefaultArgs instead
     */
    export type NoticeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NoticeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NotificationDefaultArgs instead
     */
    export type NotificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NotificationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FundDefaultArgs instead
     */
    export type FundArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FundDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FundEntryDefaultArgs instead
     */
    export type FundEntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FundEntryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use IndependentFundDefaultArgs instead
     */
    export type IndependentFundArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = IndependentFundDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdminActivityDefaultArgs instead
     */
    export type AdminActivityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdminActivityDefaultArgs<ExtArgs>

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