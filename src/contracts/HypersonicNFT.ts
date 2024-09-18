import { 
  Cell,
  Slice, 
  Address, 
  Builder, 
  beginCell, 
  // ComputeError, 
  // TupleItem, 
  TupleReader, 
  // Dictionary, 
  contractAddress, 
  ContractProvider, 
  Sender, 
  Contract, 
  ContractABI, 
  ABIType,
  ABIGetter,
  ABIReceiver,
  TupleBuilder,
  // DictionaryValue
} from '@ton/core';

export type StateInit = {
  $$type: 'StateInit';
  code: Cell;
  data: Cell;
}

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
  return { $$type: 'StateInit' as const, code: _code, data: _data };
}

// function loadTupleStateInit(source: TupleReader) {
//   let _code = source.readCell();
//   let _data = source.readCell();
//   return { $$type: 'StateInit' as const, code: _code, data: _data };
// }

function loadGetterTupleStateInit(source: TupleReader) {
  let _code = source.readCell();
  let _data = source.readCell();
  return { $$type: 'StateInit' as const, code: _code, data: _data };
}

// function storeTupleStateInit(source: StateInit) {
//   let builder = new TupleBuilder();
//   builder.writeCell(source.code);
//   builder.writeCell(source.data);
//   return builder.build();
// }

// function dictValueParserStateInit(): DictionaryValue<StateInit> {
//   return {
//       serialize: (src, builder) => {
//           builder.storeRef(beginCell().store(storeStateInit(src)).endCell());
//       },
//       parse: (src) => {
//           return loadStateInit(src.loadRef().beginParse());
//       }
//   }
// }

export type Context = {
  $$type: 'Context';
  bounced: boolean;
  sender: Address;
  value: bigint;
  raw: Slice;
}

export function storeContext(src: Context) {
  return (builder: Builder) => {
      let b_0 = builder;
      b_0.storeBit(src.bounced);
      b_0.storeAddress(src.sender);
      b_0.storeInt(src.value, 257);
      b_0.storeRef(src.raw.asCell());
  };
}

export function loadContext(slice: Slice) {
  let sc_0 = slice;
  let _bounced = sc_0.loadBit();
  let _sender = sc_0.loadAddress();
  let _value = sc_0.loadIntBig(257);
  let _raw = sc_0.loadRef().asSlice();
  return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

// function loadTupleContext(source: TupleReader) {
//   let _bounced = source.readBoolean();
//   let _sender = source.readAddress();
//   let _value = source.readBigNumber();
//   let _raw = source.readCell().asSlice();
//   return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
// }

// function loadGetterTupleContext(source: TupleReader) {
//   let _bounced = source.readBoolean();
//   let _sender = source.readAddress();
//   let _value = source.readBigNumber();
//   let _raw = source.readCell().asSlice();
//   return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
// }

// function storeTupleContext(source: Context) {
//   let builder = new TupleBuilder();
//   builder.writeBoolean(source.bounced);
//   builder.writeAddress(source.sender);
//   builder.writeNumber(source.value);
//   builder.writeSlice(source.raw.asCell());
//   return builder.build();
// }

// function dictValueParserContext(): DictionaryValue<Context> {
//   return {
//       serialize: (src, builder) => {
//           builder.storeRef(beginCell().store(storeContext(src)).endCell());
//       },
//       parse: (src) => {
//           return loadContext(src.loadRef().beginParse());
//       }
//   }
// }

export type SendParameters = {
  $$type: 'SendParameters';
  bounce: boolean;
  to: Address;
  value: bigint;
  mode: bigint;
  body: Cell | null;
  code: Cell | null;
  data: Cell | null;
}

export function storeSendParameters(src: SendParameters) {
  return (builder: Builder) => {
      let b_0 = builder;
      b_0.storeBit(src.bounce);
      b_0.storeAddress(src.to);
      b_0.storeInt(src.value, 257);
      b_0.storeInt(src.mode, 257);
      if (src.body !== null && src.body !== undefined) { b_0.storeBit(true).storeRef(src.body); } else { b_0.storeBit(false); }
      if (src.code !== null && src.code !== undefined) { b_0.storeBit(true).storeRef(src.code); } else { b_0.storeBit(false); }
      if (src.data !== null && src.data !== undefined) { b_0.storeBit(true).storeRef(src.data); } else { b_0.storeBit(false); }
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
  return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

// function loadTupleSendParameters(source: TupleReader) {
//   let _bounce = source.readBoolean();
//   let _to = source.readAddress();
//   let _value = source.readBigNumber();
//   let _mode = source.readBigNumber();
//   let _body = source.readCellOpt();
//   let _code = source.readCellOpt();
//   let _data = source.readCellOpt();
//   return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
// }

// function loadGetterTupleSendParameters(source: TupleReader) {
//   let _bounce = source.readBoolean();
//   let _to = source.readAddress();
//   let _value = source.readBigNumber();
//   let _mode = source.readBigNumber();
//   let _body = source.readCellOpt();
//   let _code = source.readCellOpt();
//   let _data = source.readCellOpt();
//   return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
// }

// function storeTupleSendParameters(source: SendParameters) {
//   let builder = new TupleBuilder();
//   builder.writeBoolean(source.bounce);
//   builder.writeAddress(source.to);
//   builder.writeNumber(source.value);
//   builder.writeNumber(source.mode);
//   builder.writeCell(source.body);
//   builder.writeCell(source.code);
//   builder.writeCell(source.data);
//   return builder.build();
// }

// function dictValueParserSendParameters(): DictionaryValue<SendParameters> {
//   return {
//       serialize: (src, builder) => {
//           builder.storeRef(beginCell().store(storeSendParameters(src)).endCell());
//       },
//       parse: (src) => {
//           return loadSendParameters(src.loadRef().beginParse());
//       }
//   }
// }

export type Deploy = {
  $$type: 'Deploy';
  queryId: bigint;
}

export function storeDeploy(src: Deploy) {
  return (builder: Builder) => {
      let b_0 = builder;
      b_0.storeUint(2490013878, 32);
      b_0.storeUint(src.queryId, 64);
  };
}

export function loadDeploy(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 2490013878) { throw Error('Invalid prefix'); }
  let _queryId = sc_0.loadUintBig(64);
  return { $$type: 'Deploy' as const, queryId: _queryId };
}

// function loadTupleDeploy(source: TupleReader) {
//   let _queryId = source.readBigNumber();
//   return { $$type: 'Deploy' as const, queryId: _queryId };
// }

// function loadGetterTupleDeploy(source: TupleReader) {
//   let _queryId = source.readBigNumber();
//   return { $$type: 'Deploy' as const, queryId: _queryId };
// }

// function storeTupleDeploy(source: Deploy) {
//   let builder = new TupleBuilder();
//   builder.writeNumber(source.queryId);
//   return builder.build();
// }

// function dictValueParserDeploy(): DictionaryValue<Deploy> {
//   return {
//       serialize: (src, builder) => {
//           builder.storeRef(beginCell().store(storeDeploy(src)).endCell());
//       },
//       parse: (src) => {
//           return loadDeploy(src.loadRef().beginParse());
//       }
//   }
// }

export type DeployOk = {
  $$type: 'DeployOk';
  queryId: bigint;
}

export function storeDeployOk(src: DeployOk) {
  return (builder: Builder) => {
      let b_0 = builder;
      b_0.storeUint(2952335191, 32);
      b_0.storeUint(src.queryId, 64);
  };
}

export function loadDeployOk(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 2952335191) { throw Error('Invalid prefix'); }
  let _queryId = sc_0.loadUintBig(64);
  return { $$type: 'DeployOk' as const, queryId: _queryId };
}

// function loadTupleDeployOk(source: TupleReader) {
//   let _queryId = source.readBigNumber();
//   return { $$type: 'DeployOk' as const, queryId: _queryId };
// }

// function loadGetterTupleDeployOk(source: TupleReader) {
//   let _queryId = source.readBigNumber();
//   return { $$type: 'DeployOk' as const, queryId: _queryId };
// }

// function storeTupleDeployOk(source: DeployOk) {
//   let builder = new TupleBuilder();
//   builder.writeNumber(source.queryId);
//   return builder.build();
// }

// function dictValueParserDeployOk(): DictionaryValue<DeployOk> {
//   return {
//       serialize: (src, builder) => {
//           builder.storeRef(beginCell().store(storeDeployOk(src)).endCell());
//       },
//       parse: (src) => {
//           return loadDeployOk(src.loadRef().beginParse());
//       }
//   }
// }

export type FactoryDeploy = {
  $$type: 'FactoryDeploy';
  queryId: bigint;
  cashback: Address;
}

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
  if (sc_0.loadUint(32) !== 1829761339) { throw Error('Invalid prefix'); }
  let _queryId = sc_0.loadUintBig(64);
  let _cashback = sc_0.loadAddress();
  return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

// function loadTupleFactoryDeploy(source: TupleReader) {
//   let _queryId = source.readBigNumber();
//   let _cashback = source.readAddress();
//   return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
// }

// function loadGetterTupleFactoryDeploy(source: TupleReader) {
//   let _queryId = source.readBigNumber();
//   let _cashback = source.readAddress();
//   return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
// }

// function storeTupleFactoryDeploy(source: FactoryDeploy) {
//   let builder = new TupleBuilder();
//   builder.writeNumber(source.queryId);
//   builder.writeAddress(source.cashback);
//   return builder.build();
// }

// function dictValueParserFactoryDeploy(): DictionaryValue<FactoryDeploy> {
//   return {
//       serialize: (src, builder) => {
//           builder.storeRef(beginCell().store(storeFactoryDeploy(src)).endCell());
//       },
//       parse: (src) => {
//           return loadFactoryDeploy(src.loadRef().beginParse());
//       }
//   }
// }

export type ChangeOwner = {
  $$type: 'ChangeOwner';
  queryId: bigint;
  newOwner: Address;
}

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
  if (sc_0.loadUint(32) !== 2174598809) { throw Error('Invalid prefix'); }
  let _queryId = sc_0.loadUintBig(64);
  let _newOwner = sc_0.loadAddress();
  return { $$type: 'ChangeOwner' as const, queryId: _queryId, newOwner: _newOwner };
}

// function loadTupleChangeOwner(source: TupleReader) {
//   let _queryId = source.readBigNumber();
//   let _newOwner = source.readAddress();
//   return { $$type: 'ChangeOwner' as const, queryId: _queryId, newOwner: _newOwner };
// }

// function loadGetterTupleChangeOwner(source: TupleReader) {
//   let _queryId = source.readBigNumber();
//   let _newOwner = source.readAddress();
//   return { $$type: 'ChangeOwner' as const, queryId: _queryId, newOwner: _newOwner };
// }

// function storeTupleChangeOwner(source: ChangeOwner) {
//   let builder = new TupleBuilder();
//   builder.writeNumber(source.queryId);
//   builder.writeAddress(source.newOwner);
//   return builder.build();
// }

// function dictValueParserChangeOwner(): DictionaryValue<ChangeOwner> {
//   return {
//       serialize: (src, builder) => {
//           builder.storeRef(beginCell().store(storeChangeOwner(src)).endCell());
//       },
//       parse: (src) => {
//           return loadChangeOwner(src.loadRef().beginParse());
//       }
//   }
// }

export type ChangeOwnerOk = {
  $$type: 'ChangeOwnerOk';
  queryId: bigint;
  newOwner: Address;
}

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
  if (sc_0.loadUint(32) !== 846932810) { throw Error('Invalid prefix'); }
  let _queryId = sc_0.loadUintBig(64);
  let _newOwner = sc_0.loadAddress();
  return { $$type: 'ChangeOwnerOk' as const, queryId: _queryId, newOwner: _newOwner };
}

// function loadTupleChangeOwnerOk(source: TupleReader) {
//   let _queryId = source.readBigNumber();
//   let _newOwner = source.readAddress();
//   return { $$type: 'ChangeOwnerOk' as const, queryId: _queryId, newOwner: _newOwner };
// }

// function loadGetterTupleChangeOwnerOk(source: TupleReader) {
//   let _queryId = source.readBigNumber();
//   let _newOwner = source.readAddress();
//   return { $$type: 'ChangeOwnerOk' as const, queryId: _queryId, newOwner: _newOwner };
// }

// function storeTupleChangeOwnerOk(source: ChangeOwnerOk) {
//   let builder = new TupleBuilder();
//   builder.writeNumber(source.queryId);
//   builder.writeAddress(source.newOwner);
//   return builder.build();
// }

// function dictValueParserChangeOwnerOk(): DictionaryValue<ChangeOwnerOk> {
//   return {
//       serialize: (src, builder) => {
//           builder.storeRef(beginCell().store(storeChangeOwnerOk(src)).endCell());
//       },
//       parse: (src) => {
//           return loadChangeOwnerOk(src.loadRef().beginParse());
//       }
//   }
// }

export type LogEventMintRecord = {
  $$type: 'LogEventMintRecord';
  minter: Address;
  item_id: bigint;
  generate_number: bigint;
}

export function storeLogEventMintRecord(src: LogEventMintRecord) {
  return (builder: Builder) => {
      let b_0 = builder;
      b_0.storeUint(2743565669, 32);
      b_0.storeAddress(src.minter);
      b_0.storeInt(src.item_id, 257);
      b_0.storeInt(src.generate_number, 257);
  };
}

export function loadLogEventMintRecord(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 2743565669) { throw Error('Invalid prefix'); }
  let _minter = sc_0.loadAddress();
  let _item_id = sc_0.loadIntBig(257);
  let _generate_number = sc_0.loadIntBig(257);
  return { $$type: 'LogEventMintRecord' as const, minter: _minter, item_id: _item_id, generate_number: _generate_number };
}

// function loadTupleLogEventMintRecord(source: TupleReader) {
//   let _minter = source.readAddress();
//   let _item_id = source.readBigNumber();
//   let _generate_number = source.readBigNumber();
//   return { $$type: 'LogEventMintRecord' as const, minter: _minter, item_id: _item_id, generate_number: _generate_number };
// }

// function loadGetterTupleLogEventMintRecord(source: TupleReader) {
//   let _minter = source.readAddress();
//   let _item_id = source.readBigNumber();
//   let _generate_number = source.readBigNumber();
//   return { $$type: 'LogEventMintRecord' as const, minter: _minter, item_id: _item_id, generate_number: _generate_number };
// }

// function storeTupleLogEventMintRecord(source: LogEventMintRecord) {
//   let builder = new TupleBuilder();
//   builder.writeAddress(source.minter);
//   builder.writeNumber(source.item_id);
//   builder.writeNumber(source.generate_number);
//   return builder.build();
// }

// function dictValueParserLogEventMintRecord(): DictionaryValue<LogEventMintRecord> {
//   return {
//       serialize: (src, builder) => {
//           builder.storeRef(beginCell().store(storeLogEventMintRecord(src)).endCell());
//       },
//       parse: (src) => {
//           return loadLogEventMintRecord(src.loadRef().beginParse());
//       }
//   }
// }

export type GetRoyaltyParams = {
  $$type: 'GetRoyaltyParams';
  query_id: bigint;
}

export function storeGetRoyaltyParams(src: GetRoyaltyParams) {
  return (builder: Builder) => {
      let b_0 = builder;
      b_0.storeUint(1765620048, 32);
      b_0.storeUint(src.query_id, 64);
  };
}

export function loadGetRoyaltyParams(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 1765620048) { throw Error('Invalid prefix'); }
  let _query_id = sc_0.loadUintBig(64);
  return { $$type: 'GetRoyaltyParams' as const, query_id: _query_id };
}

// function loadTupleGetRoyaltyParams(source: TupleReader) {
//   let _query_id = source.readBigNumber();
//   return { $$type: 'GetRoyaltyParams' as const, query_id: _query_id };
// }

// function loadGetterTupleGetRoyaltyParams(source: TupleReader) {
//   let _query_id = source.readBigNumber();
//   return { $$type: 'GetRoyaltyParams' as const, query_id: _query_id };
// }

// function storeTupleGetRoyaltyParams(source: GetRoyaltyParams) {
//   let builder = new TupleBuilder();
//   builder.writeNumber(source.query_id);
//   return builder.build();
// }

// function dictValueParserGetRoyaltyParams(): DictionaryValue<GetRoyaltyParams> {
//   return {
//       serialize: (src, builder) => {
//           builder.storeRef(beginCell().store(storeGetRoyaltyParams(src)).endCell());
//       },
//       parse: (src) => {
//           return loadGetRoyaltyParams(src.loadRef().beginParse());
//       }
//   }
// }

export type ReportRoyaltyParams = {
  $$type: 'ReportRoyaltyParams';
  query_id: bigint;
  numerator: bigint;
  denominator: bigint;
  destination: Address;
}

export function storeReportRoyaltyParams(src: ReportRoyaltyParams) {
  return (builder: Builder) => {
      let b_0 = builder;
      b_0.storeUint(2831876269, 32);
      b_0.storeUint(src.query_id, 64);
      b_0.storeUint(src.numerator, 16);
      b_0.storeUint(src.denominator, 16);
      b_0.storeAddress(src.destination);
  };
}

export function loadReportRoyaltyParams(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 2831876269) { throw Error('Invalid prefix'); }
  let _query_id = sc_0.loadUintBig(64);
  let _numerator = sc_0.loadUintBig(16);
  let _denominator = sc_0.loadUintBig(16);
  let _destination = sc_0.loadAddress();
  return { $$type: 'ReportRoyaltyParams' as const, query_id: _query_id, numerator: _numerator, denominator: _denominator, destination: _destination };
}

// function loadTupleReportRoyaltyParams(source: TupleReader) {
//   let _query_id = source.readBigNumber();
//   let _numerator = source.readBigNumber();
//   let _denominator = source.readBigNumber();
//   let _destination = source.readAddress();
//   return { $$type: 'ReportRoyaltyParams' as const, query_id: _query_id, numerator: _numerator, denominator: _denominator, destination: _destination };
// }

// function loadGetterTupleReportRoyaltyParams(source: TupleReader) {
//   let _query_id = source.readBigNumber();
//   let _numerator = source.readBigNumber();
//   let _denominator = source.readBigNumber();
//   let _destination = source.readAddress();
//   return { $$type: 'ReportRoyaltyParams' as const, query_id: _query_id, numerator: _numerator, denominator: _denominator, destination: _destination };
// }

// function storeTupleReportRoyaltyParams(source: ReportRoyaltyParams) {
//   let builder = new TupleBuilder();
//   builder.writeNumber(source.query_id);
//   builder.writeNumber(source.numerator);
//   builder.writeNumber(source.denominator);
//   builder.writeAddress(source.destination);
//   return builder.build();
// }

// function dictValueParserReportRoyaltyParams(): DictionaryValue<ReportRoyaltyParams> {
//   return {
//       serialize: (src, builder) => {
//           builder.storeRef(beginCell().store(storeReportRoyaltyParams(src)).endCell());
//       },
//       parse: (src) => {
//           return loadReportRoyaltyParams(src.loadRef().beginParse());
//       }
//   }
// }

export type UpdateCollectionContent = {
  $$type: 'UpdateCollectionContent';
  query_id: bigint;
  new_content: Cell;
  numerator: bigint;
  denominator: bigint;
  destination: Address;
}

export function storeUpdateCollectionContent(src: UpdateCollectionContent) {
  return (builder: Builder) => {
      let b_0 = builder;
      b_0.storeUint(4071324482, 32);
      b_0.storeUint(src.query_id, 64);
      b_0.storeRef(src.new_content);
      b_0.storeUint(src.numerator, 16);
      b_0.storeUint(src.denominator, 16);
      b_0.storeAddress(src.destination);
  };
}

export function loadUpdateCollectionContent(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 4071324482) { throw Error('Invalid prefix'); }
  let _query_id = sc_0.loadUintBig(64);
  let _new_content = sc_0.loadRef();
  let _numerator = sc_0.loadUintBig(16);
  let _denominator = sc_0.loadUintBig(16);
  let _destination = sc_0.loadAddress();
  return { $$type: 'UpdateCollectionContent' as const, query_id: _query_id, new_content: _new_content, numerator: _numerator, denominator: _denominator, destination: _destination };
}

// function loadTupleUpdateCollectionContent(source: TupleReader) {
//   let _query_id = source.readBigNumber();
//   let _new_content = source.readCell();
//   let _numerator = source.readBigNumber();
//   let _denominator = source.readBigNumber();
//   let _destination = source.readAddress();
//   return { $$type: 'UpdateCollectionContent' as const, query_id: _query_id, new_content: _new_content, numerator: _numerator, denominator: _denominator, destination: _destination };
// }

// function loadGetterTupleUpdateCollectionContent(source: TupleReader) {
//   let _query_id = source.readBigNumber();
//   let _new_content = source.readCell();
//   let _numerator = source.readBigNumber();
//   let _denominator = source.readBigNumber();
//   let _destination = source.readAddress();
//   return { $$type: 'UpdateCollectionContent' as const, query_id: _query_id, new_content: _new_content, numerator: _numerator, denominator: _denominator, destination: _destination };
// }

// function storeTupleUpdateCollectionContent(source: UpdateCollectionContent) {
//   let builder = new TupleBuilder();
//   builder.writeNumber(source.query_id);
//   builder.writeCell(source.new_content);
//   builder.writeNumber(source.numerator);
//   builder.writeNumber(source.denominator);
//   builder.writeAddress(source.destination);
//   return builder.build();
// }

// function dictValueParserUpdateCollectionContent(): DictionaryValue<UpdateCollectionContent> {
//   return {
//       serialize: (src, builder) => {
//           builder.storeRef(beginCell().store(storeUpdateCollectionContent(src)).endCell());
//       },
//       parse: (src) => {
//           return loadUpdateCollectionContent(src.loadRef().beginParse());
//       }
//   }
// }

export type CollectionData = {
  $$type: 'CollectionData';
  next_item_index: bigint;
  collection_content: Cell;
  owner_address: Address;
}

export function storeCollectionData(src: CollectionData) {
  return (builder: Builder) => {
      let b_0 = builder;
      b_0.storeInt(src.next_item_index, 257);
      b_0.storeRef(src.collection_content);
      b_0.storeAddress(src.owner_address);
  };
}

export function loadCollectionData(slice: Slice) {
  let sc_0 = slice;
  let _next_item_index = sc_0.loadIntBig(257);
  let _collection_content = sc_0.loadRef();
  let _owner_address = sc_0.loadAddress();
  return { $$type: 'CollectionData' as const, next_item_index: _next_item_index, collection_content: _collection_content, owner_address: _owner_address };
}

// function loadTupleCollectionData(source: TupleReader) {
//   let _next_item_index = source.readBigNumber();
//   let _collection_content = source.readCell();
//   let _owner_address = source.readAddress();
//   return { $$type: 'CollectionData' as const, next_item_index: _next_item_index, collection_content: _collection_content, owner_address: _owner_address };
// }

function loadGetterTupleCollectionData(source: TupleReader) {
  let _next_item_index = source.readBigNumber();
  let _collection_content = source.readCell();
  let _owner_address = source.readAddress();
  return { $$type: 'CollectionData' as const, next_item_index: _next_item_index, collection_content: _collection_content, owner_address: _owner_address };
}

// function storeTupleCollectionData(source: CollectionData) {
//   let builder = new TupleBuilder();
//   builder.writeNumber(source.next_item_index);
//   builder.writeCell(source.collection_content);
//   builder.writeAddress(source.owner_address);
//   return builder.build();
// }

// function dictValueParserCollectionData(): DictionaryValue<CollectionData> {
//   return {
//       serialize: (src, builder) => {
//           builder.storeRef(beginCell().store(storeCollectionData(src)).endCell());
//       },
//       parse: (src) => {
//           return loadCollectionData(src.loadRef().beginParse());
//       }
//   }
// }

export type RoyaltyParams = {
  $$type: 'RoyaltyParams';
  numerator: bigint;
  denominator: bigint;
  destination: Address;
}

export function storeRoyaltyParams(src: RoyaltyParams) {
  return (builder: Builder) => {
      let b_0 = builder;
      b_0.storeInt(src.numerator, 257);
      b_0.storeInt(src.denominator, 257);
      b_0.storeAddress(src.destination);
  };
}

export function loadRoyaltyParams(slice: Slice) {
  let sc_0 = slice;
  let _numerator = sc_0.loadIntBig(257);
  let _denominator = sc_0.loadIntBig(257);
  let _destination = sc_0.loadAddress();
  return { $$type: 'RoyaltyParams' as const, numerator: _numerator, denominator: _denominator, destination: _destination };
}

// function loadTupleRoyaltyParams(source: TupleReader) {
//   let _numerator = source.readBigNumber();
//   let _denominator = source.readBigNumber();
//   let _destination = source.readAddress();
//   return { $$type: 'RoyaltyParams' as const, numerator: _numerator, denominator: _denominator, destination: _destination };
// }

function loadGetterTupleRoyaltyParams(source: TupleReader) {
  let _numerator = source.readBigNumber();
  let _denominator = source.readBigNumber();
  let _destination = source.readAddress();
  return { $$type: 'RoyaltyParams' as const, numerator: _numerator, denominator: _denominator, destination: _destination };
}

// function storeTupleRoyaltyParams(source: RoyaltyParams) {
//   let builder = new TupleBuilder();
//   builder.writeNumber(source.numerator);
//   builder.writeNumber(source.denominator);
//   builder.writeAddress(source.destination);
//   return builder.build();
// }

// function dictValueParserRoyaltyParams(): DictionaryValue<RoyaltyParams> {
//   return {
//       serialize: (src, builder) => {
//           builder.storeRef(beginCell().store(storeRoyaltyParams(src)).endCell());
//       },
//       parse: (src) => {
//           return loadRoyaltyParams(src.loadRef().beginParse());
//       }
//   }
// }

export type Transfer = {
  $$type: 'Transfer';
  query_id: bigint;
  new_owner: Address;
  response_destination: Address | null;
  custom_payload: Cell | null;
  forward_amount: bigint;
  forward_payload: Slice;
}

export function storeTransfer(src: Transfer) {
  return (builder: Builder) => {
      let b_0 = builder;
      b_0.storeUint(1607220500, 32);
      b_0.storeUint(src.query_id, 64);
      b_0.storeAddress(src.new_owner);
      b_0.storeAddress(src.response_destination);
      if (src.custom_payload !== null && src.custom_payload !== undefined) { b_0.storeBit(true).storeRef(src.custom_payload); } else { b_0.storeBit(false); }
      b_0.storeCoins(src.forward_amount);
      b_0.storeBuilder(src.forward_payload.asBuilder());
  };
}

export function loadTransfer(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 1607220500) { throw Error('Invalid prefix'); }
  let _query_id = sc_0.loadUintBig(64);
  let _new_owner = sc_0.loadAddress();
  let _response_destination = sc_0.loadMaybeAddress();
  let _custom_payload = sc_0.loadBit() ? sc_0.loadRef() : null;
  let _forward_amount = sc_0.loadCoins();
  let _forward_payload = sc_0;
  return { $$type: 'Transfer' as const, query_id: _query_id, new_owner: _new_owner, response_destination: _response_destination, custom_payload: _custom_payload, forward_amount: _forward_amount, forward_payload: _forward_payload };
}

// function loadTupleTransfer(source: TupleReader) {
//   let _query_id = source.readBigNumber();
//   let _new_owner = source.readAddress();
//   let _response_destination = source.readAddressOpt();
//   let _custom_payload = source.readCellOpt();
//   let _forward_amount = source.readBigNumber();
//   let _forward_payload = source.readCell().asSlice();
//   return { $$type: 'Transfer' as const, query_id: _query_id, new_owner: _new_owner, response_destination: _response_destination, custom_payload: _custom_payload, forward_amount: _forward_amount, forward_payload: _forward_payload };
// }

// function loadGetterTupleTransfer(source: TupleReader) {
//   let _query_id = source.readBigNumber();
//   let _new_owner = source.readAddress();
//   let _response_destination = source.readAddressOpt();
//   let _custom_payload = source.readCellOpt();
//   let _forward_amount = source.readBigNumber();
//   let _forward_payload = source.readCell().asSlice();
//   return { $$type: 'Transfer' as const, query_id: _query_id, new_owner: _new_owner, response_destination: _response_destination, custom_payload: _custom_payload, forward_amount: _forward_amount, forward_payload: _forward_payload };
// }

// function storeTupleTransfer(source: Transfer) {
//   let builder = new TupleBuilder();
//   builder.writeNumber(source.query_id);
//   builder.writeAddress(source.new_owner);
//   builder.writeAddress(source.response_destination);
//   builder.writeCell(source.custom_payload);
//   builder.writeNumber(source.forward_amount);
//   builder.writeSlice(source.forward_payload.asCell());
//   return builder.build();
// }

// function dictValueParserTransfer(): DictionaryValue<Transfer> {
//   return {
//       serialize: (src, builder) => {
//           builder.storeRef(beginCell().store(storeTransfer(src)).endCell());
//       },
//       parse: (src) => {
//           return loadTransfer(src.loadRef().beginParse());
//       }
//   }
// }

export type OwnershipAssigned = {
  $$type: 'OwnershipAssigned';
  query_id: bigint;
  prev_owner: Address;
  forward_payload: Slice;
}

export function storeOwnershipAssigned(src: OwnershipAssigned) {
  return (builder: Builder) => {
      let b_0 = builder;
      b_0.storeUint(85167505, 32);
      b_0.storeUint(src.query_id, 64);
      b_0.storeAddress(src.prev_owner);
      b_0.storeBuilder(src.forward_payload.asBuilder());
  };
}

export function loadOwnershipAssigned(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 85167505) { throw Error('Invalid prefix'); }
  let _query_id = sc_0.loadUintBig(64);
  let _prev_owner = sc_0.loadAddress();
  let _forward_payload = sc_0;
  return { $$type: 'OwnershipAssigned' as const, query_id: _query_id, prev_owner: _prev_owner, forward_payload: _forward_payload };
}

// function loadTupleOwnershipAssigned(source: TupleReader) {
//   let _query_id = source.readBigNumber();
//   let _prev_owner = source.readAddress();
//   let _forward_payload = source.readCell().asSlice();
//   return { $$type: 'OwnershipAssigned' as const, query_id: _query_id, prev_owner: _prev_owner, forward_payload: _forward_payload };
// }

// function loadGetterTupleOwnershipAssigned(source: TupleReader) {
//   let _query_id = source.readBigNumber();
//   let _prev_owner = source.readAddress();
//   let _forward_payload = source.readCell().asSlice();
//   return { $$type: 'OwnershipAssigned' as const, query_id: _query_id, prev_owner: _prev_owner, forward_payload: _forward_payload };
// }

// function storeTupleOwnershipAssigned(source: OwnershipAssigned) {
//   let builder = new TupleBuilder();
//   builder.writeNumber(source.query_id);
//   builder.writeAddress(source.prev_owner);
//   builder.writeSlice(source.forward_payload.asCell());
//   return builder.build();
// }

// function dictValueParserOwnershipAssigned(): DictionaryValue<OwnershipAssigned> {
//   return {
//       serialize: (src, builder) => {
//           builder.storeRef(beginCell().store(storeOwnershipAssigned(src)).endCell());
//       },
//       parse: (src) => {
//           return loadOwnershipAssigned(src.loadRef().beginParse());
//       }
//   }
// }

export type Excesses = {
  $$type: 'Excesses';
  query_id: bigint;
}

export function storeExcesses(src: Excesses) {
  return (builder: Builder) => {
      let b_0 = builder;
      b_0.storeUint(3576854235, 32);
      b_0.storeUint(src.query_id, 64);
  };
}

export function loadExcesses(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 3576854235) { throw Error('Invalid prefix'); }
  let _query_id = sc_0.loadUintBig(64);
  return { $$type: 'Excesses' as const, query_id: _query_id };
}

// function loadTupleExcesses(source: TupleReader) {
//   let _query_id = source.readBigNumber();
//   return { $$type: 'Excesses' as const, query_id: _query_id };
// }

// function loadGetterTupleExcesses(source: TupleReader) {
//   let _query_id = source.readBigNumber();
//   return { $$type: 'Excesses' as const, query_id: _query_id };
// }

// function storeTupleExcesses(source: Excesses) {
//   let builder = new TupleBuilder();
//   builder.writeNumber(source.query_id);
//   return builder.build();
// }

// function dictValueParserExcesses(): DictionaryValue<Excesses> {
//   return {
//       serialize: (src, builder) => {
//           builder.storeRef(beginCell().store(storeExcesses(src)).endCell());
//       },
//       parse: (src) => {
//           return loadExcesses(src.loadRef().beginParse());
//       }
//   }
// }

export type GetStaticData = {
  $$type: 'GetStaticData';
  query_id: bigint;
}

export function storeGetStaticData(src: GetStaticData) {
  return (builder: Builder) => {
      let b_0 = builder;
      b_0.storeUint(801842850, 32);
      b_0.storeUint(src.query_id, 64);
  };
}

export function loadGetStaticData(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 801842850) { throw Error('Invalid prefix'); }
  let _query_id = sc_0.loadUintBig(64);
  return { $$type: 'GetStaticData' as const, query_id: _query_id };
}

// function loadTupleGetStaticData(source: TupleReader) {
//   let _query_id = source.readBigNumber();
//   return { $$type: 'GetStaticData' as const, query_id: _query_id };
// }

// function loadGetterTupleGetStaticData(source: TupleReader) {
//   let _query_id = source.readBigNumber();
//   return { $$type: 'GetStaticData' as const, query_id: _query_id };
// }

// function storeTupleGetStaticData(source: GetStaticData) {
//   let builder = new TupleBuilder();
//   builder.writeNumber(source.query_id);
//   return builder.build();
// }

// function dictValueParserGetStaticData(): DictionaryValue<GetStaticData> {
//   return {
//       serialize: (src, builder) => {
//           builder.storeRef(beginCell().store(storeGetStaticData(src)).endCell());
//       },
//       parse: (src) => {
//           return loadGetStaticData(src.loadRef().beginParse());
//       }
//   }
// }

export type ReportStaticData = {
  $$type: 'ReportStaticData';
  query_id: bigint;
  index_id: bigint;
  collection: Address;
}

export function storeReportStaticData(src: ReportStaticData) {
  return (builder: Builder) => {
      let b_0 = builder;
      b_0.storeUint(2339837749, 32);
      b_0.storeUint(src.query_id, 64);
      b_0.storeInt(src.index_id, 257);
      b_0.storeAddress(src.collection);
  };
}

export function loadReportStaticData(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 2339837749) { throw Error('Invalid prefix'); }
  let _query_id = sc_0.loadUintBig(64);
  let _index_id = sc_0.loadIntBig(257);
  let _collection = sc_0.loadAddress();
  return { $$type: 'ReportStaticData' as const, query_id: _query_id, index_id: _index_id, collection: _collection };
}

// function loadTupleReportStaticData(source: TupleReader) {
//   let _query_id = source.readBigNumber();
//   let _index_id = source.readBigNumber();
//   let _collection = source.readAddress();
//   return { $$type: 'ReportStaticData' as const, query_id: _query_id, index_id: _index_id, collection: _collection };
// }

// function loadGetterTupleReportStaticData(source: TupleReader) {
//   let _query_id = source.readBigNumber();
//   let _index_id = source.readBigNumber();
//   let _collection = source.readAddress();
//   return { $$type: 'ReportStaticData' as const, query_id: _query_id, index_id: _index_id, collection: _collection };
// }

// function storeTupleReportStaticData(source: ReportStaticData) {
//   let builder = new TupleBuilder();
//   builder.writeNumber(source.query_id);
//   builder.writeNumber(source.index_id);
//   builder.writeAddress(source.collection);
//   return builder.build();
// }

// function dictValueParserReportStaticData(): DictionaryValue<ReportStaticData> {
//   return {
//       serialize: (src, builder) => {
//           builder.storeRef(beginCell().store(storeReportStaticData(src)).endCell());
//       },
//       parse: (src) => {
//           return loadReportStaticData(src.loadRef().beginParse());
//       }
//   }
// }

export type MultiMint = {
  $$type: 'MultiMint';
  amount: bigint | null;
}

export function storeMultiMint(src: MultiMint) {
  return (builder: Builder) => {
      let b_0 = builder;
      b_0.storeUint(3314563906, 32);
      if (src.amount !== null && src.amount !== undefined) { b_0.storeBit(true).storeInt(src.amount, 257); } else { b_0.storeBit(false); }
  };
}

export function loadMultiMint(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 3314563906) { throw Error('Invalid prefix'); }
  let _amount = sc_0.loadBit() ? sc_0.loadIntBig(257) : null;
  return { $$type: 'MultiMint' as const, amount: _amount };
}

// function loadTupleMultiMint(source: TupleReader) {
//   let _amount = source.readBigNumberOpt();
//   return { $$type: 'MultiMint' as const, amount: _amount };
// }

// function loadGetterTupleMultiMint(source: TupleReader) {
//   let _amount = source.readBigNumberOpt();
//   return { $$type: 'MultiMint' as const, amount: _amount };
// }

// function storeTupleMultiMint(source: MultiMint) {
//   let builder = new TupleBuilder();
//   builder.writeNumber(source.amount);
//   return builder.build();
// }

// function dictValueParserMultiMint(): DictionaryValue<MultiMint> {
//   return {
//       serialize: (src, builder) => {
//           builder.storeRef(beginCell().store(storeMultiMint(src)).endCell());
//       },
//       parse: (src) => {
//           return loadMultiMint(src.loadRef().beginParse());
//       }
//   }
// }

export type Burn = {
  $$type: 'Burn';
  zeroAddress: Address;
}

export function storeBurn(src: Burn) {
  return (builder: Builder) => {
      let b_0 = builder;
      b_0.storeUint(3787039962, 32);
      b_0.storeAddress(src.zeroAddress);
  };
}

export function loadBurn(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 3787039962) { throw Error('Invalid prefix'); }
  let _zeroAddress = sc_0.loadAddress();
  return { $$type: 'Burn' as const, zeroAddress: _zeroAddress };
}

// function loadTupleBurn(source: TupleReader) {
//   let _zeroAddress = source.readAddress();
//   return { $$type: 'Burn' as const, zeroAddress: _zeroAddress };
// }

// function loadGetterTupleBurn(source: TupleReader) {
//   let _zeroAddress = source.readAddress();
//   return { $$type: 'Burn' as const, zeroAddress: _zeroAddress };
// }

// function storeTupleBurn(source: Burn) {
//   let builder = new TupleBuilder();
//   builder.writeAddress(source.zeroAddress);
//   return builder.build();
// }

// function dictValueParserBurn(): DictionaryValue<Burn> {
//   return {
//       serialize: (src, builder) => {
//           builder.storeRef(beginCell().store(storeBurn(src)).endCell());
//       },
//       parse: (src) => {
//           return loadBurn(src.loadRef().beginParse());
//       }
//   }
// }

export type UpdateNFTContent = {
  $$type: 'UpdateNFTContent';
  new_content: Cell;
}

export function storeUpdateNFTContent(src: UpdateNFTContent) {
  return (builder: Builder) => {
      let b_0 = builder;
      b_0.storeUint(1947013321, 32);
      b_0.storeRef(src.new_content);
  };
}

export function loadUpdateNFTContent(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 1947013321) { throw Error('Invalid prefix'); }
  let _new_content = sc_0.loadRef();
  return { $$type: 'UpdateNFTContent' as const, new_content: _new_content };
}

// function loadTupleUpdateNFTContent(source: TupleReader) {
//   let _new_content = source.readCell();
//   return { $$type: 'UpdateNFTContent' as const, new_content: _new_content };
// }

// function loadGetterTupleUpdateNFTContent(source: TupleReader) {
//   let _new_content = source.readCell();
//   return { $$type: 'UpdateNFTContent' as const, new_content: _new_content };
// }

// function storeTupleUpdateNFTContent(source: UpdateNFTContent) {
//   let builder = new TupleBuilder();
//   builder.writeCell(source.new_content);
//   return builder.build();
// }

// function dictValueParserUpdateNFTContent(): DictionaryValue<UpdateNFTContent> {
//   return {
//       serialize: (src, builder) => {
//           builder.storeRef(beginCell().store(storeUpdateNFTContent(src)).endCell());
//       },
//       parse: (src) => {
//           return loadUpdateNFTContent(src.loadRef().beginParse());
//       }
//   }
// }

export type InitialTransfer = {
  $$type: 'InitialTransfer';
  newOwner: Address;
  amount: bigint | null;
}

export function storeInitialTransfer(src: InitialTransfer) {
  return (builder: Builder) => {
      let b_0 = builder;
      b_0.storeUint(3770801142, 32);
      b_0.storeAddress(src.newOwner);
      if (src.amount !== null && src.amount !== undefined) { b_0.storeBit(true).storeInt(src.amount, 257); } else { b_0.storeBit(false); }
  };
}

export function loadInitialTransfer(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 3770801142) { throw Error('Invalid prefix'); }
  let _newOwner = sc_0.loadAddress();
  let _amount = sc_0.loadBit() ? sc_0.loadIntBig(257) : null;
  return { $$type: 'InitialTransfer' as const, newOwner: _newOwner, amount: _amount };
}

// function loadTupleInitialTransfer(source: TupleReader) {
//   let _newOwner = source.readAddress();
//   let _amount = source.readBigNumberOpt();
//   return { $$type: 'InitialTransfer' as const, newOwner: _newOwner, amount: _amount };
// }

// function loadGetterTupleInitialTransfer(source: TupleReader) {
//   let _newOwner = source.readAddress();
//   let _amount = source.readBigNumberOpt();
//   return { $$type: 'InitialTransfer' as const, newOwner: _newOwner, amount: _amount };
// }

// function storeTupleInitialTransfer(source: InitialTransfer) {
//   let builder = new TupleBuilder();
//   builder.writeAddress(source.newOwner);
//   builder.writeNumber(source.amount);
//   return builder.build();
// }

// function dictValueParserInitialTransfer(): DictionaryValue<InitialTransfer> {
//   return {
//       serialize: (src, builder) => {
//           builder.storeRef(beginCell().store(storeInitialTransfer(src)).endCell());
//       },
//       parse: (src) => {
//           return loadInitialTransfer(src.loadRef().beginParse());
//       }
//   }
// }

export type GetNftData = {
  $$type: 'GetNftData';
  is_initialized: boolean;
  index: bigint;
  collection_address: Address;
  owner_address: Address;
  individual_content: Cell;
}

export function storeGetNftData(src: GetNftData) {
  return (builder: Builder) => {
      let b_0 = builder;
      b_0.storeBit(src.is_initialized);
      b_0.storeInt(src.index, 257);
      b_0.storeAddress(src.collection_address);
      b_0.storeAddress(src.owner_address);
      b_0.storeRef(src.individual_content);
  };
}

export function loadGetNftData(slice: Slice) {
  let sc_0 = slice;
  let _is_initialized = sc_0.loadBit();
  let _index = sc_0.loadIntBig(257);
  let _collection_address = sc_0.loadAddress();
  let _owner_address = sc_0.loadAddress();
  let _individual_content = sc_0.loadRef();
  return { $$type: 'GetNftData' as const, is_initialized: _is_initialized, index: _index, collection_address: _collection_address, owner_address: _owner_address, individual_content: _individual_content };
}

// function loadTupleGetNftData(source: TupleReader) {
//   let _is_initialized = source.readBoolean();
//   let _index = source.readBigNumber();
//   let _collection_address = source.readAddress();
//   let _owner_address = source.readAddress();
//   let _individual_content = source.readCell();
//   return { $$type: 'GetNftData' as const, is_initialized: _is_initialized, index: _index, collection_address: _collection_address, owner_address: _owner_address, individual_content: _individual_content };
// }

// function loadGetterTupleGetNftData(source: TupleReader) {
//   let _is_initialized = source.readBoolean();
//   let _index = source.readBigNumber();
//   let _collection_address = source.readAddress();
//   let _owner_address = source.readAddress();
//   let _individual_content = source.readCell();
//   return { $$type: 'GetNftData' as const, is_initialized: _is_initialized, index: _index, collection_address: _collection_address, owner_address: _owner_address, individual_content: _individual_content };
// }

// function storeTupleGetNftData(source: GetNftData) {
//   let builder = new TupleBuilder();
//   builder.writeBoolean(source.is_initialized);
//   builder.writeNumber(source.index);
//   builder.writeAddress(source.collection_address);
//   builder.writeAddress(source.owner_address);
//   builder.writeCell(source.individual_content);
//   return builder.build();
// }

// function dictValueParserGetNftData(): DictionaryValue<GetNftData> {
//   return {
//       serialize: (src, builder) => {
//           builder.storeRef(beginCell().store(storeGetNftData(src)).endCell());
//       },
//       parse: (src) => {
//           return loadGetNftData(src.loadRef().beginParse());
//       }
//   }
// }

export type NftCollection$Data = {
  $$type: 'NftCollection$Data';
  owner: Address;
  stopped: boolean;
  next_item_index: bigint;
  transfer_item_index: bigint;
  royalty_params: RoyaltyParams;
  collection_content: Cell;
  nft_content: Cell;
}

export function storeNftCollection$Data(src: NftCollection$Data) {
  return (builder: Builder) => {
      let b_0 = builder;
      b_0.storeAddress(src.owner);
      b_0.storeBit(src.stopped);
      b_0.storeUint(src.next_item_index, 32);
      b_0.storeUint(src.transfer_item_index, 32);
      let b_1 = new Builder();
      b_1.store(storeRoyaltyParams(src.royalty_params));
      b_1.storeRef(src.collection_content);
      b_1.storeRef(src.nft_content);
      b_0.storeRef(b_1.endCell());
  };
}

export function loadNftCollection$Data(slice: Slice) {
  let sc_0 = slice;
  let _owner = sc_0.loadAddress();
  let _stopped = sc_0.loadBit();
  let _next_item_index = sc_0.loadUintBig(32);
  let _transfer_item_index = sc_0.loadUintBig(32);
  let sc_1 = sc_0.loadRef().beginParse();
  let _royalty_params = loadRoyaltyParams(sc_1);
  let _collection_content = sc_1.loadRef();
  let _nft_content = sc_1.loadRef();
  return { $$type: 'NftCollection$Data' as const, owner: _owner, stopped: _stopped, next_item_index: _next_item_index, transfer_item_index: _transfer_item_index, royalty_params: _royalty_params, collection_content: _collection_content, nft_content: _nft_content };
}

// function loadTupleNftCollection$Data(source: TupleReader) {
//   let _owner = source.readAddress();
//   let _stopped = source.readBoolean();
//   let _next_item_index = source.readBigNumber();
//   let _transfer_item_index = source.readBigNumber();
//   const _royalty_params = loadTupleRoyaltyParams(source);
//   let _collection_content = source.readCell();
//   let _nft_content = source.readCell();
//   return { $$type: 'NftCollection$Data' as const, owner: _owner, stopped: _stopped, next_item_index: _next_item_index, transfer_item_index: _transfer_item_index, royalty_params: _royalty_params, collection_content: _collection_content, nft_content: _nft_content };
// }

// function loadGetterTupleNftCollection$Data(source: TupleReader) {
//   let _owner = source.readAddress();
//   let _stopped = source.readBoolean();
//   let _next_item_index = source.readBigNumber();
//   let _transfer_item_index = source.readBigNumber();
//   const _royalty_params = loadGetterTupleRoyaltyParams(source);
//   let _collection_content = source.readCell();
//   let _nft_content = source.readCell();
//   return { $$type: 'NftCollection$Data' as const, owner: _owner, stopped: _stopped, next_item_index: _next_item_index, transfer_item_index: _transfer_item_index, royalty_params: _royalty_params, collection_content: _collection_content, nft_content: _nft_content };
// }

// function storeTupleNftCollection$Data(source: NftCollection$Data) {
//   let builder = new TupleBuilder();
//   builder.writeAddress(source.owner);
//   builder.writeBoolean(source.stopped);
//   builder.writeNumber(source.next_item_index);
//   builder.writeNumber(source.transfer_item_index);
//   builder.writeTuple(storeTupleRoyaltyParams(source.royalty_params));
//   builder.writeCell(source.collection_content);
//   builder.writeCell(source.nft_content);
//   return builder.build();
// }

// function dictValueParserNftCollection$Data(): DictionaryValue<NftCollection$Data> {
//   return {
//       serialize: (src, builder) => {
//           builder.storeRef(beginCell().store(storeNftCollection$Data(src)).endCell());
//       },
//       parse: (src) => {
//           return loadNftCollection$Data(src.loadRef().beginParse());
//       }
//   }
// }

export type NftItem$Data = {
  $$type: 'NftItem$Data';
  collection_address: Address;
  item_index: bigint;
  is_initialized: boolean;
  is_burned: boolean;
  owner: Address;
  stopped: boolean;
  individual_content: Cell | null;
}

export function storeNftItem$Data(src: NftItem$Data) {
  return (builder: Builder) => {
      let b_0 = builder;
      b_0.storeAddress(src.collection_address);
      b_0.storeInt(src.item_index, 257);
      b_0.storeBit(src.is_initialized);
      b_0.storeBit(src.is_burned);
      b_0.storeAddress(src.owner);
      b_0.storeBit(src.stopped);
      if (src.individual_content !== null && src.individual_content !== undefined) { b_0.storeBit(true).storeRef(src.individual_content); } else { b_0.storeBit(false); }
  };
}

export function loadNftItem$Data(slice: Slice) {
  let sc_0 = slice;
  let _collection_address = sc_0.loadAddress();
  let _item_index = sc_0.loadIntBig(257);
  let _is_initialized = sc_0.loadBit();
  let _is_burned = sc_0.loadBit();
  let _owner = sc_0.loadAddress();
  let _stopped = sc_0.loadBit();
  let _individual_content = sc_0.loadBit() ? sc_0.loadRef() : null;
  return { $$type: 'NftItem$Data' as const, collection_address: _collection_address, item_index: _item_index, is_initialized: _is_initialized, is_burned: _is_burned, owner: _owner, stopped: _stopped, individual_content: _individual_content };
}

// function loadTupleNftItem$Data(source: TupleReader) {
//   let _collection_address = source.readAddress();
//   let _item_index = source.readBigNumber();
//   let _is_initialized = source.readBoolean();
//   let _is_burned = source.readBoolean();
//   let _owner = source.readAddress();
//   let _stopped = source.readBoolean();
//   let _individual_content = source.readCellOpt();
//   return { $$type: 'NftItem$Data' as const, collection_address: _collection_address, item_index: _item_index, is_initialized: _is_initialized, is_burned: _is_burned, owner: _owner, stopped: _stopped, individual_content: _individual_content };
// }

// function loadGetterTupleNftItem$Data(source: TupleReader) {
//   let _collection_address = source.readAddress();
//   let _item_index = source.readBigNumber();
//   let _is_initialized = source.readBoolean();
//   let _is_burned = source.readBoolean();
//   let _owner = source.readAddress();
//   let _stopped = source.readBoolean();
//   let _individual_content = source.readCellOpt();
//   return { $$type: 'NftItem$Data' as const, collection_address: _collection_address, item_index: _item_index, is_initialized: _is_initialized, is_burned: _is_burned, owner: _owner, stopped: _stopped, individual_content: _individual_content };
// }

// function storeTupleNftItem$Data(source: NftItem$Data) {
//   let builder = new TupleBuilder();
//   builder.writeAddress(source.collection_address);
//   builder.writeNumber(source.item_index);
//   builder.writeBoolean(source.is_initialized);
//   builder.writeBoolean(source.is_burned);
//   builder.writeAddress(source.owner);
//   builder.writeBoolean(source.stopped);
//   builder.writeCell(source.individual_content);
//   return builder.build();
// }

// function dictValueParserNftItem$Data(): DictionaryValue<NftItem$Data> {
//   return {
//       serialize: (src, builder) => {
//           builder.storeRef(beginCell().store(storeNftItem$Data(src)).endCell());
//       },
//       parse: (src) => {
//           return loadNftItem$Data(src.loadRef().beginParse());
//       }
//   }
// }

type NftCollection_init_args = {
  $$type: 'NftCollection_init_args';
  owner_address: Address;
  collection_content: Cell;
  nft_content: Cell;
  royalty_params: RoyaltyParams;
}

function initNftCollection_init_args(src: NftCollection_init_args) {
  return (builder: Builder) => {
      let b_0 = builder;
      b_0.storeAddress(src.owner_address);
      b_0.storeRef(src.collection_content);
      let b_1 = new Builder();
      b_1.storeRef(src.nft_content);
      b_1.store(storeRoyaltyParams(src.royalty_params));
      b_0.storeRef(b_1.endCell());
  };
}

async function NftCollection_init(owner_address: Address, collection_content: Cell, nft_content: Cell, royalty_params: RoyaltyParams) {
  const __code = Cell.fromBase64('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');
  const __system = Cell.fromBase64('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');
  let builder = beginCell();
  builder.storeRef(__system);
  builder.storeUint(0, 1);
  initNftCollection_init_args({ $$type: 'NftCollection_init_args', owner_address, collection_content, nft_content, royalty_params })(builder);
  const __data = builder.endCell();
  return { code: __code, data: __data };
}

const NftCollection_errors: { [key: number]: { message: string } } = {
  2: { message: `Stack underflow` },
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
  1951: { message: `initialized transfer need from collection` },
  11051: { message: `insufficient Balance` },
  11903: { message: `NFT is already burned` },
  20722: { message: `non-equential NFTs` },
  27499: { message: `initialized tx need from collection` },
  30149: { message: `Only owner can burn the NFT` },
  35645: { message: `NFT is burned` },
  40368: { message: `Contract stopped` },
  49280: { message: `not owner` },
  49469: { message: `not from collection` },
  53296: { message: `Contract not stopped` },
  62742: { message: `non-sequential NFTs` },
}

const NftCollection_types: ABIType[] = [
  {"name":"StateInit","header":null,"fields":[{"name":"code","type":{"kind":"simple","type":"cell","optional":false}},{"name":"data","type":{"kind":"simple","type":"cell","optional":false}}]},
  {"name":"Context","header":null,"fields":[{"name":"bounced","type":{"kind":"simple","type":"bool","optional":false}},{"name":"sender","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"raw","type":{"kind":"simple","type":"slice","optional":false}}]},
  {"name":"SendParameters","header":null,"fields":[{"name":"bounce","type":{"kind":"simple","type":"bool","optional":false}},{"name":"to","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"mode","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"body","type":{"kind":"simple","type":"cell","optional":true}},{"name":"code","type":{"kind":"simple","type":"cell","optional":true}},{"name":"data","type":{"kind":"simple","type":"cell","optional":true}}]},
  {"name":"Deploy","header":2490013878,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
  {"name":"DeployOk","header":2952335191,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
  {"name":"FactoryDeploy","header":1829761339,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"cashback","type":{"kind":"simple","type":"address","optional":false}}]},
  {"name":"ChangeOwner","header":2174598809,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"newOwner","type":{"kind":"simple","type":"address","optional":false}}]},
  {"name":"ChangeOwnerOk","header":846932810,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"newOwner","type":{"kind":"simple","type":"address","optional":false}}]},
  {"name":"LogEventMintRecord","header":2743565669,"fields":[{"name":"minter","type":{"kind":"simple","type":"address","optional":false}},{"name":"item_id","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"generate_number","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
  {"name":"GetRoyaltyParams","header":1765620048,"fields":[{"name":"query_id","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
  {"name":"ReportRoyaltyParams","header":2831876269,"fields":[{"name":"query_id","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"numerator","type":{"kind":"simple","type":"uint","optional":false,"format":16}},{"name":"denominator","type":{"kind":"simple","type":"uint","optional":false,"format":16}},{"name":"destination","type":{"kind":"simple","type":"address","optional":false}}]},
  {"name":"UpdateCollectionContent","header":4071324482,"fields":[{"name":"query_id","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"new_content","type":{"kind":"simple","type":"cell","optional":false}},{"name":"numerator","type":{"kind":"simple","type":"uint","optional":false,"format":16}},{"name":"denominator","type":{"kind":"simple","type":"uint","optional":false,"format":16}},{"name":"destination","type":{"kind":"simple","type":"address","optional":false}}]},
  {"name":"CollectionData","header":null,"fields":[{"name":"next_item_index","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"collection_content","type":{"kind":"simple","type":"cell","optional":false}},{"name":"owner_address","type":{"kind":"simple","type":"address","optional":false}}]},
  {"name":"RoyaltyParams","header":null,"fields":[{"name":"numerator","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"denominator","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"destination","type":{"kind":"simple","type":"address","optional":false}}]},
  {"name":"Transfer","header":1607220500,"fields":[{"name":"query_id","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"new_owner","type":{"kind":"simple","type":"address","optional":false}},{"name":"response_destination","type":{"kind":"simple","type":"address","optional":true}},{"name":"custom_payload","type":{"kind":"simple","type":"cell","optional":true}},{"name":"forward_amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"forward_payload","type":{"kind":"simple","type":"slice","optional":false,"format":"remainder"}}]},
  {"name":"OwnershipAssigned","header":85167505,"fields":[{"name":"query_id","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"prev_owner","type":{"kind":"simple","type":"address","optional":false}},{"name":"forward_payload","type":{"kind":"simple","type":"slice","optional":false,"format":"remainder"}}]},
  {"name":"Excesses","header":3576854235,"fields":[{"name":"query_id","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
  {"name":"GetStaticData","header":801842850,"fields":[{"name":"query_id","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
  {"name":"ReportStaticData","header":2339837749,"fields":[{"name":"query_id","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"index_id","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"collection","type":{"kind":"simple","type":"address","optional":false}}]},
  {"name":"MultiMint","header":3314563906,"fields":[{"name":"amount","type":{"kind":"simple","type":"int","optional":true,"format":257}}]},
  {"name":"Burn","header":3787039962,"fields":[{"name":"zeroAddress","type":{"kind":"simple","type":"address","optional":false}}]},
  {"name":"UpdateNFTContent","header":1947013321,"fields":[{"name":"new_content","type":{"kind":"simple","type":"cell","optional":false}}]},
  {"name":"InitialTransfer","header":3770801142,"fields":[{"name":"newOwner","type":{"kind":"simple","type":"address","optional":false}},{"name":"amount","type":{"kind":"simple","type":"int","optional":true,"format":257}}]},
  {"name":"GetNftData","header":null,"fields":[{"name":"is_initialized","type":{"kind":"simple","type":"bool","optional":false}},{"name":"index","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"collection_address","type":{"kind":"simple","type":"address","optional":false}},{"name":"owner_address","type":{"kind":"simple","type":"address","optional":false}},{"name":"individual_content","type":{"kind":"simple","type":"cell","optional":false}}]},
  {"name":"NftCollection$Data","header":null,"fields":[{"name":"owner","type":{"kind":"simple","type":"address","optional":false}},{"name":"stopped","type":{"kind":"simple","type":"bool","optional":false}},{"name":"next_item_index","type":{"kind":"simple","type":"uint","optional":false,"format":32}},{"name":"transfer_item_index","type":{"kind":"simple","type":"uint","optional":false,"format":32}},{"name":"royalty_params","type":{"kind":"simple","type":"RoyaltyParams","optional":false}},{"name":"collection_content","type":{"kind":"simple","type":"cell","optional":false}},{"name":"nft_content","type":{"kind":"simple","type":"cell","optional":false}}]},
  {"name":"NftItem$Data","header":null,"fields":[{"name":"collection_address","type":{"kind":"simple","type":"address","optional":false}},{"name":"item_index","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"is_initialized","type":{"kind":"simple","type":"bool","optional":false}},{"name":"is_burned","type":{"kind":"simple","type":"bool","optional":false}},{"name":"owner","type":{"kind":"simple","type":"address","optional":false}},{"name":"stopped","type":{"kind":"simple","type":"bool","optional":false}},{"name":"individual_content","type":{"kind":"simple","type":"cell","optional":true}}]},
]

const NftCollection_getters: ABIGetter[] = [
  {"name":"get_collection_data","arguments":[],"returnType":{"kind":"simple","type":"CollectionData","optional":false}},
  {"name":"get_nft_address_by_index","arguments":[{"name":"item_index","type":{"kind":"simple","type":"int","optional":false,"format":257}}],"returnType":{"kind":"simple","type":"address","optional":true}},
  {"name":"getNftItemInit","arguments":[{"name":"item_index","type":{"kind":"simple","type":"int","optional":false,"format":257}}],"returnType":{"kind":"simple","type":"StateInit","optional":false}},
  {"name":"get_nft_content","arguments":[{"name":"index","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"individual_content","type":{"kind":"simple","type":"cell","optional":false}}],"returnType":{"kind":"simple","type":"cell","optional":false}},
  {"name":"royalty_params","arguments":[],"returnType":{"kind":"simple","type":"RoyaltyParams","optional":false}},
  {"name":"get_transfer_item_index","arguments":[],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
  {"name":"stopped","arguments":[],"returnType":{"kind":"simple","type":"bool","optional":false}},
  {"name":"owner","arguments":[],"returnType":{"kind":"simple","type":"address","optional":false}},
]

export const NftCollection_getterMapping: { [key: string]: string } = {
  'get_collection_data': 'getGetCollectionData',
  'get_nft_address_by_index': 'getGetNftAddressByIndex',
  'getNftItemInit': 'getGetNftItemInit',
  'get_nft_content': 'getGetNftContent',
  'royalty_params': 'getRoyaltyParams',
  'get_transfer_item_index': 'getGetTransferItemIndex',
  'stopped': 'getStopped',
  'owner': 'getOwner',
}

const NftCollection_receivers: ABIReceiver[] = [
  {"receiver":"internal","message":{"kind":"empty"}},
  {"receiver":"internal","message":{"kind":"text","text":"InitFee"}},
  {"receiver":"internal","message":{"kind":"text","text":"Mint"}},
  {"receiver":"internal","message":{"kind":"typed","type":"MultiMint"}},
  {"receiver":"internal","message":{"kind":"typed","type":"InitialTransfer"}},
  {"receiver":"internal","message":{"kind":"typed","type":"GetRoyaltyParams"}},
  {"receiver":"internal","message":{"kind":"typed","type":"UpdateCollectionContent"}},
  {"receiver":"internal","message":{"kind":"typed","type":"UpdateNFTContent"}},
  {"receiver":"internal","message":{"kind":"text","text":"withDraw"}},
  {"receiver":"internal","message":{"kind":"typed","type":"Deploy"}},
  {"receiver":"internal","message":{"kind":"text","text":"Resume"}},
  {"receiver":"internal","message":{"kind":"text","text":"Stop"}},
  {"receiver":"internal","message":{"kind":"typed","type":"ChangeOwner"}},
]

export class NftCollection implements Contract {
  
  static async init(owner_address: Address, collection_content: Cell, nft_content: Cell, royalty_params: RoyaltyParams) {
      return await NftCollection_init(owner_address, collection_content, nft_content, royalty_params);
  }
  
  static async fromInit(owner_address: Address, collection_content: Cell, nft_content: Cell, royalty_params: RoyaltyParams) {
      const init = await NftCollection_init(owner_address, collection_content, nft_content, royalty_params);
      const address = contractAddress(0, init);
      return new NftCollection(address, init);
  }
  
  static fromAddress(address: Address) {
      return new NftCollection(address);
  }
  
  readonly address: Address; 
  readonly init?: { code: Cell, data: Cell };
  readonly abi: ContractABI = {
      types:  NftCollection_types,
      getters: NftCollection_getters,
      receivers: NftCollection_receivers,
      errors: NftCollection_errors,
  };
  
  private constructor(address: Address, init?: { code: Cell, data: Cell }) {
      this.address = address;
      this.init = init;
  }
  
  async send(provider: ContractProvider, via: Sender, args: { value: bigint, bounce?: boolean| null | undefined }, message: null | 'InitFee' | 'Mint' | MultiMint | InitialTransfer | GetRoyaltyParams | UpdateCollectionContent | UpdateNFTContent | 'withDraw' | Deploy | 'Resume' | 'Stop' | ChangeOwner) {
      
      let body: Cell | null = null;
      if (message === null) {
          body = new Cell();
      }
      if (message === 'InitFee') {
          body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
      }
      if (message === 'Mint') {
          body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
      }
      if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'MultiMint') {
          body = beginCell().store(storeMultiMint(message)).endCell();
      }
      if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'InitialTransfer') {
          body = beginCell().store(storeInitialTransfer(message)).endCell();
      }
      if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'GetRoyaltyParams') {
          body = beginCell().store(storeGetRoyaltyParams(message)).endCell();
      }
      if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'UpdateCollectionContent') {
          body = beginCell().store(storeUpdateCollectionContent(message)).endCell();
      }
      if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'UpdateNFTContent') {
          body = beginCell().store(storeUpdateNFTContent(message)).endCell();
      }
      if (message === 'withDraw') {
          body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
      }
      if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Deploy') {
          body = beginCell().store(storeDeploy(message)).endCell();
      }
      if (message === 'Resume') {
          body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
      }
      if (message === 'Stop') {
          body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
      }
      if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'ChangeOwner') {
          body = beginCell().store(storeChangeOwner(message)).endCell();
      }
      if (body === null) { throw new Error('Invalid message type'); }
      
      await provider.internal(via, { ...args, body: body });
      
  }
  
  async getGetCollectionData(provider: ContractProvider) {
      let builder = new TupleBuilder();
      let source = (await provider.get('get_collection_data', builder.build())).stack;
      const result = loadGetterTupleCollectionData(source);
      return result;
  }
  
  async getGetNftAddressByIndex(provider: ContractProvider, item_index: bigint) {
      let builder = new TupleBuilder();
      builder.writeNumber(item_index);
      let source = (await provider.get('get_nft_address_by_index', builder.build())).stack;
      let result = source.readAddressOpt();
      return result;
  }
  
  async getGetNftItemInit(provider: ContractProvider, item_index: bigint) {
      let builder = new TupleBuilder();
      builder.writeNumber(item_index);
      let source = (await provider.get('getNftItemInit', builder.build())).stack;
      const result = loadGetterTupleStateInit(source);
      return result;
  }
  
  async getGetNftContent(provider: ContractProvider, index: bigint, individual_content: Cell) {
      let builder = new TupleBuilder();
      builder.writeNumber(index);
      builder.writeCell(individual_content);
      let source = (await provider.get('get_nft_content', builder.build())).stack;
      let result = source.readCell();
      return result;
  }
  
  async getRoyaltyParams(provider: ContractProvider) {
      let builder = new TupleBuilder();
      let source = (await provider.get('royalty_params', builder.build())).stack;
      const result = loadGetterTupleRoyaltyParams(source);
      return result;
  }
  
  async getGetTransferItemIndex(provider: ContractProvider) {
      let builder = new TupleBuilder();
      let source = (await provider.get('get_transfer_item_index', builder.build())).stack;
      let result = source.readBigNumber();
      return result;
  }
  
  async getStopped(provider: ContractProvider) {
      let builder = new TupleBuilder();
      let source = (await provider.get('stopped', builder.build())).stack;
      let result = source.readBoolean();
      return result;
  }
  
  async getOwner(provider: ContractProvider) {
      let builder = new TupleBuilder();
      let source = (await provider.get('owner', builder.build())).stack;
      let result = source.readAddress();
      return result;
  }
  
}