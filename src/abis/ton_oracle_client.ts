import {
  Cell,
  Slice,
  Address,
  Builder,
  beginCell,
  ComputeError,
  TupleItem,
  TupleReader,
  Dictionary,
  contractAddress,
  ContractProvider,
  Sender,
  Contract,
  ContractABI,
  ABIType,
  ABIGetter,
  ABIReceiver,
  TupleBuilder,
  DictionaryValue,
} from "@ton/core";

export type StateInit = {
  $$type: "StateInit";
  code: Cell;
  data: Cell;
};

export function storeStateInit(src: StateInit) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeRef(src.code);
    b_0.storeRef(src.data);
  };
}

export function loadStateInit(slice: Slice) {
  let sc_0 = slice;
  let _code = sc_0.loadRef();
  let _data = sc_0.loadRef();
  return { $$type: "StateInit" as const, code: _code, data: _data };
}

function loadTupleStateInit(source: TupleReader) {
  let _code = source.readCell();
  let _data = source.readCell();
  return { $$type: "StateInit" as const, code: _code, data: _data };
}

function storeTupleStateInit(source: StateInit) {
  let builder = new TupleBuilder();
  builder.writeCell(source.code);
  builder.writeCell(source.data);
  return builder.build();
}

function dictValueParserStateInit(): DictionaryValue<StateInit> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeStateInit(src)).endCell());
    },
    parse: (src) => {
      return loadStateInit(src.loadRef().beginParse());
    },
  };
}

export type Context = {
  $$type: "Context";
  bounced: boolean;
  sender: Address;
  value: bigint;
  raw: Cell;
};

export function storeContext(src: Context) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeBit(src.bounced);
    b_0.storeAddress(src.sender);
    b_0.storeInt(src.value, 257);
    b_0.storeRef(src.raw);
  };
}

export function loadContext(slice: Slice) {
  let sc_0 = slice;
  let _bounced = sc_0.loadBit();
  let _sender = sc_0.loadAddress();
  let _value = sc_0.loadIntBig(257);
  let _raw = sc_0.loadRef();
  return {
    $$type: "Context" as const,
    bounced: _bounced,
    sender: _sender,
    value: _value,
    raw: _raw,
  };
}

function loadTupleContext(source: TupleReader) {
  let _bounced = source.readBoolean();
  let _sender = source.readAddress();
  let _value = source.readBigNumber();
  let _raw = source.readCell();
  return {
    $$type: "Context" as const,
    bounced: _bounced,
    sender: _sender,
    value: _value,
    raw: _raw,
  };
}

function storeTupleContext(source: Context) {
  let builder = new TupleBuilder();
  builder.writeBoolean(source.bounced);
  builder.writeAddress(source.sender);
  builder.writeNumber(source.value);
  builder.writeSlice(source.raw);
  return builder.build();
}

function dictValueParserContext(): DictionaryValue<Context> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeContext(src)).endCell());
    },
    parse: (src) => {
      return loadContext(src.loadRef().beginParse());
    },
  };
}

export type SendParameters = {
  $$type: "SendParameters";
  bounce: boolean;
  to: Address;
  value: bigint;
  mode: bigint;
  body: Cell | null;
  code: Cell | null;
  data: Cell | null;
};

export function storeSendParameters(src: SendParameters) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeBit(src.bounce);
    b_0.storeAddress(src.to);
    b_0.storeInt(src.value, 257);
    b_0.storeInt(src.mode, 257);
    if (src.body !== null && src.body !== undefined) {
      b_0.storeBit(true).storeRef(src.body);
    } else {
      b_0.storeBit(false);
    }
    if (src.code !== null && src.code !== undefined) {
      b_0.storeBit(true).storeRef(src.code);
    } else {
      b_0.storeBit(false);
    }
    if (src.data !== null && src.data !== undefined) {
      b_0.storeBit(true).storeRef(src.data);
    } else {
      b_0.storeBit(false);
    }
  };
}

export function loadSendParameters(slice: Slice) {
  let sc_0 = slice;
  let _bounce = sc_0.loadBit();
  let _to = sc_0.loadAddress();
  let _value = sc_0.loadIntBig(257);
  let _mode = sc_0.loadIntBig(257);
  let _body = sc_0.loadBit() ? sc_0.loadRef() : null;
  let _code = sc_0.loadBit() ? sc_0.loadRef() : null;
  let _data = sc_0.loadBit() ? sc_0.loadRef() : null;
  return {
    $$type: "SendParameters" as const,
    bounce: _bounce,
    to: _to,
    value: _value,
    mode: _mode,
    body: _body,
    code: _code,
    data: _data,
  };
}

function loadTupleSendParameters(source: TupleReader) {
  let _bounce = source.readBoolean();
  let _to = source.readAddress();
  let _value = source.readBigNumber();
  let _mode = source.readBigNumber();
  let _body = source.readCellOpt();
  let _code = source.readCellOpt();
  let _data = source.readCellOpt();
  return {
    $$type: "SendParameters" as const,
    bounce: _bounce,
    to: _to,
    value: _value,
    mode: _mode,
    body: _body,
    code: _code,
    data: _data,
  };
}

function storeTupleSendParameters(source: SendParameters) {
  let builder = new TupleBuilder();
  builder.writeBoolean(source.bounce);
  builder.writeAddress(source.to);
  builder.writeNumber(source.value);
  builder.writeNumber(source.mode);
  builder.writeCell(source.body);
  builder.writeCell(source.code);
  builder.writeCell(source.data);
  return builder.build();
}

function dictValueParserSendParameters(): DictionaryValue<SendParameters> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeSendParameters(src)).endCell());
    },
    parse: (src) => {
      return loadSendParameters(src.loadRef().beginParse());
    },
  };
}

export type Deploy = {
  $$type: "Deploy";
  queryId: bigint;
};

export function storeDeploy(src: Deploy) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(2490013878, 32);
    b_0.storeUint(src.queryId, 64);
  };
}

export function loadDeploy(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 2490013878) {
    throw Error("Invalid prefix");
  }
  let _queryId = sc_0.loadUintBig(64);
  return { $$type: "Deploy" as const, queryId: _queryId };
}

function loadTupleDeploy(source: TupleReader) {
  let _queryId = source.readBigNumber();
  return { $$type: "Deploy" as const, queryId: _queryId };
}

function storeTupleDeploy(source: Deploy) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.queryId);
  return builder.build();
}

function dictValueParserDeploy(): DictionaryValue<Deploy> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeDeploy(src)).endCell());
    },
    parse: (src) => {
      return loadDeploy(src.loadRef().beginParse());
    },
  };
}

export type DeployOk = {
  $$type: "DeployOk";
  queryId: bigint;
};

export function storeDeployOk(src: DeployOk) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(2952335191, 32);
    b_0.storeUint(src.queryId, 64);
  };
}

export function loadDeployOk(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 2952335191) {
    throw Error("Invalid prefix");
  }
  let _queryId = sc_0.loadUintBig(64);
  return { $$type: "DeployOk" as const, queryId: _queryId };
}

function loadTupleDeployOk(source: TupleReader) {
  let _queryId = source.readBigNumber();
  return { $$type: "DeployOk" as const, queryId: _queryId };
}

function storeTupleDeployOk(source: DeployOk) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.queryId);
  return builder.build();
}

function dictValueParserDeployOk(): DictionaryValue<DeployOk> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeDeployOk(src)).endCell());
    },
    parse: (src) => {
      return loadDeployOk(src.loadRef().beginParse());
    },
  };
}

export type FactoryDeploy = {
  $$type: "FactoryDeploy";
  queryId: bigint;
  cashback: Address;
};

export function storeFactoryDeploy(src: FactoryDeploy) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(1829761339, 32);
    b_0.storeUint(src.queryId, 64);
    b_0.storeAddress(src.cashback);
  };
}

export function loadFactoryDeploy(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 1829761339) {
    throw Error("Invalid prefix");
  }
  let _queryId = sc_0.loadUintBig(64);
  let _cashback = sc_0.loadAddress();
  return {
    $$type: "FactoryDeploy" as const,
    queryId: _queryId,
    cashback: _cashback,
  };
}

function loadTupleFactoryDeploy(source: TupleReader) {
  let _queryId = source.readBigNumber();
  let _cashback = source.readAddress();
  return {
    $$type: "FactoryDeploy" as const,
    queryId: _queryId,
    cashback: _cashback,
  };
}

function storeTupleFactoryDeploy(source: FactoryDeploy) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.queryId);
  builder.writeAddress(source.cashback);
  return builder.build();
}

function dictValueParserFactoryDeploy(): DictionaryValue<FactoryDeploy> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeFactoryDeploy(src)).endCell());
    },
    parse: (src) => {
      return loadFactoryDeploy(src.loadRef().beginParse());
    },
  };
}

export type ChangeOwner = {
  $$type: "ChangeOwner";
  queryId: bigint;
  newOwner: Address;
};

export function storeChangeOwner(src: ChangeOwner) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(2174598809, 32);
    b_0.storeUint(src.queryId, 64);
    b_0.storeAddress(src.newOwner);
  };
}

export function loadChangeOwner(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 2174598809) {
    throw Error("Invalid prefix");
  }
  let _queryId = sc_0.loadUintBig(64);
  let _newOwner = sc_0.loadAddress();
  return {
    $$type: "ChangeOwner" as const,
    queryId: _queryId,
    newOwner: _newOwner,
  };
}

function loadTupleChangeOwner(source: TupleReader) {
  let _queryId = source.readBigNumber();
  let _newOwner = source.readAddress();
  return {
    $$type: "ChangeOwner" as const,
    queryId: _queryId,
    newOwner: _newOwner,
  };
}

function storeTupleChangeOwner(source: ChangeOwner) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.queryId);
  builder.writeAddress(source.newOwner);
  return builder.build();
}

function dictValueParserChangeOwner(): DictionaryValue<ChangeOwner> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeChangeOwner(src)).endCell());
    },
    parse: (src) => {
      return loadChangeOwner(src.loadRef().beginParse());
    },
  };
}

export type ChangeOwnerOk = {
  $$type: "ChangeOwnerOk";
  queryId: bigint;
  newOwner: Address;
};

export function storeChangeOwnerOk(src: ChangeOwnerOk) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(846932810, 32);
    b_0.storeUint(src.queryId, 64);
    b_0.storeAddress(src.newOwner);
  };
}

export function loadChangeOwnerOk(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 846932810) {
    throw Error("Invalid prefix");
  }
  let _queryId = sc_0.loadUintBig(64);
  let _newOwner = sc_0.loadAddress();
  return {
    $$type: "ChangeOwnerOk" as const,
    queryId: _queryId,
    newOwner: _newOwner,
  };
}

function loadTupleChangeOwnerOk(source: TupleReader) {
  let _queryId = source.readBigNumber();
  let _newOwner = source.readAddress();
  return {
    $$type: "ChangeOwnerOk" as const,
    queryId: _queryId,
    newOwner: _newOwner,
  };
}

function storeTupleChangeOwnerOk(source: ChangeOwnerOk) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.queryId);
  builder.writeAddress(source.newOwner);
  return builder.build();
}

function dictValueParserChangeOwnerOk(): DictionaryValue<ChangeOwnerOk> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeChangeOwnerOk(src)).endCell());
    },
    parse: (src) => {
      return loadChangeOwnerOk(src.loadRef().beginParse());
    },
  };
}

export type UpdatePrice = {
  $$type: "UpdatePrice";
  ticker: bigint;
  price_info: PriceInfo;
};

export function storeUpdatePrice(src: UpdatePrice) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(829862689, 32);
    b_0.storeInt(src.ticker, 257);
    b_0.store(storePriceInfo(src.price_info));
  };
}

export function loadUpdatePrice(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 829862689) {
    throw Error("Invalid prefix");
  }
  let _ticker = sc_0.loadIntBig(257);
  let _price_info = loadPriceInfo(sc_0);
  return {
    $$type: "UpdatePrice" as const,
    ticker: _ticker,
    price_info: _price_info,
  };
}

function loadTupleUpdatePrice(source: TupleReader) {
  let _ticker = source.readBigNumber();
  const _price_info = loadTuplePriceInfo(source.readTuple());
  return {
    $$type: "UpdatePrice" as const,
    ticker: _ticker,
    price_info: _price_info,
  };
}

function storeTupleUpdatePrice(source: UpdatePrice) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.ticker);
  builder.writeTuple(storeTuplePriceInfo(source.price_info));
  return builder.build();
}

function dictValueParserUpdatePrice(): DictionaryValue<UpdatePrice> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeUpdatePrice(src)).endCell());
    },
    parse: (src) => {
      return loadUpdatePrice(src.loadRef().beginParse());
    },
  };
}

export type PriceInfo = {
  $$type: "PriceInfo";
  price: bigint;
  symbol: string;
};

export function storePriceInfo(src: PriceInfo) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeCoins(src.price);
    b_0.storeStringRefTail(src.symbol);
  };
}

export function loadPriceInfo(slice: Slice) {
  let sc_0 = slice;
  let _price = sc_0.loadCoins();
  let _symbol = sc_0.loadStringRefTail();
  return { $$type: "PriceInfo" as const, price: _price, symbol: _symbol };
}

function loadTuplePriceInfo(source: TupleReader) {
  let _price = source.readBigNumber();
  let _symbol = source.readString();
  return { $$type: "PriceInfo" as const, price: _price, symbol: _symbol };
}

function storeTuplePriceInfo(source: PriceInfo) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.price);
  builder.writeString(source.symbol);
  return builder.build();
}

function dictValueParserPriceInfo(): DictionaryValue<PriceInfo> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storePriceInfo(src)).endCell());
    },
    parse: (src) => {
      return loadPriceInfo(src.loadRef().beginParse());
    },
  };
}

export type QueryPrice = {
  $$type: "QueryPrice";
  from_ticker: bigint;
  to_ticker: bigint;
  carry_forward: Cell | null;
};

export function storeQueryPrice(src: QueryPrice) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(3062051732, 32);
    b_0.storeInt(src.from_ticker, 257);
    b_0.storeInt(src.to_ticker, 257);
    if (src.carry_forward !== null && src.carry_forward !== undefined) {
      b_0.storeBit(true).storeRef(src.carry_forward);
    } else {
      b_0.storeBit(false);
    }
  };
}

export function loadQueryPrice(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 3062051732) {
    throw Error("Invalid prefix");
  }
  let _from_ticker = sc_0.loadIntBig(257);
  let _to_ticker = sc_0.loadIntBig(257);
  let _carry_forward = sc_0.loadBit() ? sc_0.loadRef() : null;
  return {
    $$type: "QueryPrice" as const,
    from_ticker: _from_ticker,
    to_ticker: _to_ticker,
    carry_forward: _carry_forward,
  };
}

function loadTupleQueryPrice(source: TupleReader) {
  let _from_ticker = source.readBigNumber();
  let _to_ticker = source.readBigNumber();
  let _carry_forward = source.readCellOpt();
  return {
    $$type: "QueryPrice" as const,
    from_ticker: _from_ticker,
    to_ticker: _to_ticker,
    carry_forward: _carry_forward,
  };
}

function storeTupleQueryPrice(source: QueryPrice) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.from_ticker);
  builder.writeNumber(source.to_ticker);
  builder.writeSlice(source.carry_forward);
  return builder.build();
}

function dictValueParserQueryPrice(): DictionaryValue<QueryPrice> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeQueryPrice(src)).endCell());
    },
    parse: (src) => {
      return loadQueryPrice(src.loadRef().beginParse());
    },
  };
}

export type ReplyFromOracle = {
  $$type: "ReplyFromOracle";
  from_price_info: PriceInfo;
  to_price_info: PriceInfo;
  carry_forward: Cell | null;
};

export function storeReplyFromOracle(src: ReplyFromOracle) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(465494203, 32);
    b_0.store(storePriceInfo(src.from_price_info));
    b_0.store(storePriceInfo(src.to_price_info));
    if (src.carry_forward !== null && src.carry_forward !== undefined) {
      b_0.storeBit(true).storeRef(src.carry_forward);
    } else {
      b_0.storeBit(false);
    }
  };
}

export function loadReplyFromOracle(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 465494203) {
    throw Error("Invalid prefix");
  }
  let _from_price_info = loadPriceInfo(sc_0);
  let _to_price_info = loadPriceInfo(sc_0);
  let _carry_forward = sc_0.loadBit() ? sc_0.loadRef() : null;
  return {
    $$type: "ReplyFromOracle" as const,
    from_price_info: _from_price_info,
    to_price_info: _to_price_info,
    carry_forward: _carry_forward,
  };
}

function loadTupleReplyFromOracle(source: TupleReader) {
  const _from_price_info = loadTuplePriceInfo(source.readTuple());
  const _to_price_info = loadTuplePriceInfo(source.readTuple());
  let _carry_forward = source.readCellOpt();
  return {
    $$type: "ReplyFromOracle" as const,
    from_price_info: _from_price_info,
    to_price_info: _to_price_info,
    carry_forward: _carry_forward,
  };
}

function storeTupleReplyFromOracle(source: ReplyFromOracle) {
  let builder = new TupleBuilder();
  builder.writeTuple(storeTuplePriceInfo(source.from_price_info));
  builder.writeTuple(storeTuplePriceInfo(source.to_price_info));
  builder.writeSlice(source.carry_forward);
  return builder.build();
}

function dictValueParserReplyFromOracle(): DictionaryValue<ReplyFromOracle> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeReplyFromOracle(src)).endCell());
    },
    parse: (src) => {
      return loadReplyFromOracle(src.loadRef().beginParse());
    },
  };
}

type Oracle_init_args = {
  $$type: "Oracle_init_args";
  init_price_fee: Dictionary<bigint, PriceInfo>;
  owner: Address;
};

function initOracle_init_args(src: Oracle_init_args) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeDict(
      src.init_price_fee,
      Dictionary.Keys.BigInt(257),
      dictValueParserPriceInfo(),
    );
    b_0.storeAddress(src.owner);
  };
}

async function Oracle_init(
  init_price_fee: Dictionary<bigint, PriceInfo>,
  owner: Address,
) {
  const __code = Cell.fromBase64(
    "te6ccgECGgEABLUAART/APSkE/S88sgLAQIBYgIDAtTQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxa2zzy4ILI+EMBzH8BygBZWSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFvQAye1UFQQCASAODwTsAZIwf+BwIddJwh+VMCDXCx/eIIIQMXazIbqOxTDTHwGCEDF2syG68uCBgQEB1wD6ANQB0BIQI2wTUEPbPASBAQEEyFlZ+gLIWM8WyQHMyRRDMCBulTBZ9FowlEEz9BXif+AgghC2gzOUuuMCIIIQlGqYtrrjAgoFBgcBUjDTHwGCELaDM5S68uCBgQEB1wCBAQHXANIAAZPUAdCRbeJDMGwT2zx/CAFQMNMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8n4QgFwbds8fwsC9IIQgZ2+mbqPbtMfAYIQgZ2+mbry4IHTP/pAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgSbBJa2zwxUSHIWYIQMnsrSlADyx/LPwEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxbJEvhCAX9t2zx/4DBwCgsByoEBAVREFFn0DW+hkjBt3yBukjBtm9D6ANQB0BJsEm8C4oIAxnghbrPy9IEBAVREE1n0DW+hkjBt3yBukjBtm9D6ANQB0BJsEm8C4oF3liFus/L0ASBu8tCAbyICIG7y0IBvIkEECQGCyFVAghAbvuC7UAbLH0BDWfoCyFjPFskBzAJZ+gLIWM8WyQHMIW6zm38BygDIWM8WyQHMlHAyygDiyfhCAX9t2zwLABL4QlIgxwXy4IQBOm1tIm6zmVsgbvLQgG8iAZEy4hAkcAMEgEJQI9s8DAHKyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlAD+gJwAcpoI26zkX+TJG6z4pczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wANAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAhG+KO7Z5tnjYQwVEAIBIBESAAIhAgFuExQCAUgYGQIRr/Xtnm2eNhDAFRYA3a3owTgudh6ullc9j0J2HOslQo2zQThO6xqWlbI+WZFp15b++LEcwTgQKuANwDOxymcsHVcjktlhwThOy6ctWadluZ0HSzbKM3RSQTh5c7/V80L0FnItVoVdgtilQTggZzq084r86ShYDrC3EyPZQAHI7UTQ1AH4Y9IAAY4l+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiAH0BFlsEuD4KNcLCoMJuvLgifQE+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiBIC0QHbPBcAAiAAAgEAEbCvu1E0NIAAYAB1sm7jQ1aXBmczovL1FtUGhyTHh3eGZFVVV2SnBUVG5ueDJndnlOdkhRaWdDZlhHWXZNc3h6Skxpc0OCA=",
  );
  const __system = Cell.fromBase64(
    "te6cckECHAEABL8AAQHAAQEFoNIfAgEU/wD0pBP0vPLICwMCAWIPBAIBIA0FAgEgCQYCAUgIBwB1sm7jQ1aXBmczovL1FtUGhyTHh3eGZFVVV2SnBUVG5ueDJndnlOdkhRaWdDZlhHWXZNc3h6Skxpc0OCAAEbCvu1E0NIAAYAIBbgsKAN2t6ME4LnYerpZXPY9CdhzrJUKNs0E4TusalpWyPlmRadeW/vixHME4ECrgDcAzscpnLB1XI5LZYcE4TsunLVmnZbmdB0s2yjN0UkE4eXO/1fNC9BZyLVaFXYLYpUE4IGc6tPOK/OkoWA6wtxMj2UACEa/17Z5tnjYQwBoMAAIgAhG+KO7Z5tnjYQwaDgACIQLU0AHQ0wMBcbCjAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhUUFMDbwT4YQL4Yts8Wts88uCCyPhDAcx/AcoAWVkg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxb0AMntVBoQBOwBkjB/4HAh10nCH5UwINcLH94gghAxdrMhuo7FMNMfAYIQMXazIbry4IGBAQHXAPoA1AHQEhAjbBNQQ9s8BIEBAQTIWVn6AshYzxbJAczJFEMwIG6VMFn0WjCUQTP0FeJ/4CCCELaDM5S64wIgghCUapi2uuMCGRMSEQL0ghCBnb6Zuo9u0x8BghCBnb6ZuvLggdM/+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiBJsElrbPDFRIchZghAyeytKUAPLH8s/ASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFskS+EIBf23bPH/gMHAZFgFQMNMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8n4QgFwbds8fxYBUjDTHwGCELaDM5S68uCBgQEB1wCBAQHXANIAAZPUAdCRbeJDMGwT2zx/FAHKgQEBVEQUWfQNb6GSMG3fIG6SMG2b0PoA1AHQEmwSbwLiggDGeCFus/L0gQEBVEQTWfQNb6GSMG3fIG6SMG2b0PoA1AHQEmwSbwLigXeWIW6z8vQBIG7y0IBvIgIgbvLQgG8iQQQVAYLIVUCCEBu+4LtQBssfQENZ+gLIWM8WyQHMAln6AshYzxbJAcwhbrObfwHKAMhYzxbJAcyUcDLKAOLJ+EIBf23bPBYBOm1tIm6zmVsgbvLQgG8iAZEy4hAkcAMEgEJQI9s8FwHKyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlAD+gJwAcpoI26zkX+TJG6z4pczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAYAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMABL4QlIgxwXy4IQByO1E0NQB+GPSAAGOJfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgB9ARZbBLg+CjXCwqDCbry4In0BPpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgSAtEB2zwbAAIBAMShxw==",
  );
  let builder = beginCell();
  builder.storeRef(__system);
  builder.storeUint(0, 1);
  initOracle_init_args({ $$type: "Oracle_init_args", init_price_fee, owner })(
    builder,
  );
  const __data = builder.endCell();
  return { code: __code, data: __data };
}

const Oracle_errors: { [key: number]: { message: string } } = {
  2: { message: `Stack undeflow` },
  3: { message: `Stack overflow` },
  4: { message: `Integer overflow` },
  5: { message: `Integer out of expected range` },
  6: { message: `Invalid opcode` },
  7: { message: `Type check error` },
  8: { message: `Cell overflow` },
  9: { message: `Cell underflow` },
  10: { message: `Dictionary error` },
  13: { message: `Out of gas error` },
  32: { message: `Method ID not found` },
  34: { message: `Action is invalid or not supported` },
  37: { message: `Not enough TON` },
  38: { message: `Not enough extra-currencies` },
  128: { message: `Null reference exception` },
  129: { message: `Invalid serialization prefix` },
  130: { message: `Invalid incoming message` },
  131: { message: `Constraints error` },
  132: { message: `Access denied` },
  133: { message: `Contract stopped` },
  134: { message: `Invalid argument` },
  135: { message: `Code of a contract was not found` },
  136: { message: `Invalid address` },
  137: { message: `Masterchain support is not enabled for this contract` },
  30614: { message: `No Data for _to_ ticker id` },
  50808: { message: `No Data for _from_ ticker id` },
};

const Oracle_types: ABIType[] = [
  {
    name: "StateInit",
    header: null,
    fields: [
      { name: "code", type: { kind: "simple", type: "cell", optional: false } },
      { name: "data", type: { kind: "simple", type: "cell", optional: false } },
    ],
  },
  {
    name: "Context",
    header: null,
    fields: [
      {
        name: "bounced",
        type: { kind: "simple", type: "bool", optional: false },
      },
      {
        name: "sender",
        type: { kind: "simple", type: "address", optional: false },
      },
      {
        name: "value",
        type: { kind: "simple", type: "int", optional: false, format: 257 },
      },
      { name: "raw", type: { kind: "simple", type: "slice", optional: false } },
    ],
  },
  {
    name: "SendParameters",
    header: null,
    fields: [
      {
        name: "bounce",
        type: { kind: "simple", type: "bool", optional: false },
      },
      {
        name: "to",
        type: { kind: "simple", type: "address", optional: false },
      },
      {
        name: "value",
        type: { kind: "simple", type: "int", optional: false, format: 257 },
      },
      {
        name: "mode",
        type: { kind: "simple", type: "int", optional: false, format: 257 },
      },
      { name: "body", type: { kind: "simple", type: "cell", optional: true } },
      { name: "code", type: { kind: "simple", type: "cell", optional: true } },
      { name: "data", type: { kind: "simple", type: "cell", optional: true } },
    ],
  },
  {
    name: "Deploy",
    header: 2490013878,
    fields: [
      {
        name: "queryId",
        type: { kind: "simple", type: "uint", optional: false, format: 64 },
      },
    ],
  },
  {
    name: "DeployOk",
    header: 2952335191,
    fields: [
      {
        name: "queryId",
        type: { kind: "simple", type: "uint", optional: false, format: 64 },
      },
    ],
  },
  {
    name: "FactoryDeploy",
    header: 1829761339,
    fields: [
      {
        name: "queryId",
        type: { kind: "simple", type: "uint", optional: false, format: 64 },
      },
      {
        name: "cashback",
        type: { kind: "simple", type: "address", optional: false },
      },
    ],
  },
  {
    name: "ChangeOwner",
    header: 2174598809,
    fields: [
      {
        name: "queryId",
        type: { kind: "simple", type: "uint", optional: false, format: 64 },
      },
      {
        name: "newOwner",
        type: { kind: "simple", type: "address", optional: false },
      },
    ],
  },
  {
    name: "ChangeOwnerOk",
    header: 846932810,
    fields: [
      {
        name: "queryId",
        type: { kind: "simple", type: "uint", optional: false, format: 64 },
      },
      {
        name: "newOwner",
        type: { kind: "simple", type: "address", optional: false },
      },
    ],
  },
  {
    name: "UpdatePrice",
    header: 829862689,
    fields: [
      {
        name: "ticker",
        type: { kind: "simple", type: "int", optional: false, format: 257 },
      },
      {
        name: "price_info",
        type: { kind: "simple", type: "PriceInfo", optional: false },
      },
    ],
  },
  {
    name: "PriceInfo",
    header: null,
    fields: [
      {
        name: "price",
        type: {
          kind: "simple",
          type: "uint",
          optional: false,
          format: "coins",
        },
      },
      {
        name: "symbol",
        type: { kind: "simple", type: "string", optional: false },
      },
    ],
  },
  {
    name: "QueryPrice",
    header: 3062051732,
    fields: [
      {
        name: "from_ticker",
        type: { kind: "simple", type: "int", optional: false, format: 257 },
      },
      {
        name: "to_ticker",
        type: { kind: "simple", type: "int", optional: false, format: 257 },
      },
      {
        name: "carry_forward",
        type: { kind: "simple", type: "slice", optional: true },
      },
    ],
  },
  {
    name: "ReplyFromOracle",
    header: 465494203,
    fields: [
      {
        name: "from_price_info",
        type: { kind: "simple", type: "PriceInfo", optional: false },
      },
      {
        name: "to_price_info",
        type: { kind: "simple", type: "PriceInfo", optional: false },
      },
      {
        name: "carry_forward",
        type: { kind: "simple", type: "slice", optional: true },
      },
    ],
  },
];

const Oracle_getters: ABIGetter[] = [
  {
    name: "price_feed",
    arguments: [],
    returnType: {
      kind: "dict",
      key: "int",
      value: "PriceInfo",
      valueFormat: "ref",
    },
  },
  {
    name: "owner",
    arguments: [],
    returnType: { kind: "simple", type: "address", optional: false },
  },
];

const Oracle_receivers: ABIReceiver[] = [
  { receiver: "internal", message: { kind: "typed", type: "UpdatePrice" } },
  { receiver: "internal", message: { kind: "typed", type: "QueryPrice" } },
  { receiver: "internal", message: { kind: "typed", type: "Deploy" } },
  { receiver: "internal", message: { kind: "typed", type: "ChangeOwner" } },
];

export class Oracle implements Contract {
  static async init(
    init_price_fee: Dictionary<bigint, PriceInfo>,
    owner: Address,
  ) {
    return await Oracle_init(init_price_fee, owner);
  }

  static async fromInit(
    init_price_fee: Dictionary<bigint, PriceInfo>,
    owner: Address,
  ) {
    const init = await Oracle_init(init_price_fee, owner);
    const address = contractAddress(0, init);
    return new Oracle(address, init);
  }

  static fromAddress(address: Address) {
    return new Oracle(address);
  }

  readonly address: Address;
  readonly init?: { code: Cell; data: Cell };
  readonly abi: ContractABI = {
    types: Oracle_types,
    getters: Oracle_getters,
    receivers: Oracle_receivers,
    errors: Oracle_errors,
  };

  private constructor(address: Address, init?: { code: Cell; data: Cell }) {
    this.address = address;
    this.init = init;
  }

  async send(
    provider: ContractProvider,
    via: Sender,
    args: { value: bigint; bounce?: boolean | null | undefined },
    message: UpdatePrice | QueryPrice | Deploy | ChangeOwner,
  ) {
    let body: Cell | null = null;
    if (
      message &&
      typeof message === "object" &&
      !(message instanceof Slice) &&
      message.$$type === "UpdatePrice"
    ) {
      body = beginCell().store(storeUpdatePrice(message)).endCell();
    }
    if (
      message &&
      typeof message === "object" &&
      !(message instanceof Slice) &&
      message.$$type === "QueryPrice"
    ) {
      body = beginCell().store(storeQueryPrice(message)).endCell();
    }
    if (
      message &&
      typeof message === "object" &&
      !(message instanceof Slice) &&
      message.$$type === "Deploy"
    ) {
      body = beginCell().store(storeDeploy(message)).endCell();
    }
    if (
      message &&
      typeof message === "object" &&
      !(message instanceof Slice) &&
      message.$$type === "ChangeOwner"
    ) {
      body = beginCell().store(storeChangeOwner(message)).endCell();
    }
    if (body === null) {
      throw new Error("Invalid message type");
    }

    await provider.internal(via, { ...args, body: body });
  }

  async getPriceFeed(provider: ContractProvider) {
    let builder = new TupleBuilder();
    let source = (await provider.get("price_feed", builder.build())).stack;
    let result = Dictionary.loadDirect(
      Dictionary.Keys.BigInt(257),
      dictValueParserPriceInfo(),
      source.readCellOpt(),
    );
    return result;
  }

  async getOwner(provider: ContractProvider) {
    let builder = new TupleBuilder();
    let source = (await provider.get("owner", builder.build())).stack;
    let result = source.readAddress();
    return result;
  }
}
