// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class AGLStakingAddressChanged extends ethereum.Event {
  get params(): AGLStakingAddressChanged__Params {
    return new AGLStakingAddressChanged__Params(this);
  }
}

export class AGLStakingAddressChanged__Params {
  _event: AGLStakingAddressChanged;

  constructor(event: AGLStakingAddressChanged) {
    this._event = event;
  }

  get _aglStakingAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class CollSurplusPoolAddressChanged extends ethereum.Event {
  get params(): CollSurplusPoolAddressChanged__Params {
    return new CollSurplusPoolAddressChanged__Params(this);
  }
}

export class CollSurplusPoolAddressChanged__Params {
  _event: CollSurplusPoolAddressChanged;

  constructor(event: CollSurplusPoolAddressChanged) {
    this._event = event;
  }

  get _collSurplusPoolAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class GasPoolAddressChanged extends ethereum.Event {
  get params(): GasPoolAddressChanged__Params {
    return new GasPoolAddressChanged__Params(this);
  }
}

export class GasPoolAddressChanged__Params {
  _event: GasPoolAddressChanged;

  constructor(event: GasPoolAddressChanged) {
    this._event = event;
  }

  get _gasPoolAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Initialized extends ethereum.Event {
  get params(): Initialized__Params {
    return new Initialized__Params(this);
  }
}

export class Initialized__Params {
  _event: Initialized;

  constructor(event: Initialized) {
    this._event = event;
  }

  get version(): i32 {
    return this._event.parameters[0].value.toI32();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class SortedTrovesAddressChanged extends ethereum.Event {
  get params(): SortedTrovesAddressChanged__Params {
    return new SortedTrovesAddressChanged__Params(this);
  }
}

export class SortedTrovesAddressChanged__Params {
  _event: SortedTrovesAddressChanged;

  constructor(event: SortedTrovesAddressChanged) {
    this._event = event;
  }

  get _sortedTrovesAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class StabilityPoolManagerAddressChanged extends ethereum.Event {
  get params(): StabilityPoolManagerAddressChanged__Params {
    return new StabilityPoolManagerAddressChanged__Params(this);
  }
}

export class StabilityPoolManagerAddressChanged__Params {
  _event: StabilityPoolManagerAddressChanged;

  constructor(event: StabilityPoolManagerAddressChanged) {
    this._event = event;
  }

  get _stabilityPoolAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class TroveCreated extends ethereum.Event {
  get params(): TroveCreated__Params {
    return new TroveCreated__Params(this);
  }
}

export class TroveCreated__Params {
  _event: TroveCreated;

  constructor(event: TroveCreated) {
    this._event = event;
  }

  get _asset(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _borrower(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get arrayIndex(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class TroveManagerAddressChanged extends ethereum.Event {
  get params(): TroveManagerAddressChanged__Params {
    return new TroveManagerAddressChanged__Params(this);
  }
}

export class TroveManagerAddressChanged__Params {
  _event: TroveManagerAddressChanged;

  constructor(event: TroveManagerAddressChanged) {
    this._event = event;
  }

  get _newTroveManagerAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class TroveUpdated extends ethereum.Event {
  get params(): TroveUpdated__Params {
    return new TroveUpdated__Params(this);
  }
}

export class TroveUpdated__Params {
  _event: TroveUpdated;

  constructor(event: TroveUpdated) {
    this._event = event;
  }

  get _asset(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _borrower(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _debt(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get _coll(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get stake(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get operation(): i32 {
    return this._event.parameters[5].value.toI32();
  }
}

export class TroveUpdated1 extends ethereum.Event {
  get params(): TroveUpdated1__Params {
    return new TroveUpdated1__Params(this);
  }
}

export class TroveUpdated1__Params {
  _event: TroveUpdated1;

  constructor(event: TroveUpdated1) {
    this._event = event;
  }

  get _asset(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _borrower(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _debt(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get _coll(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get stake(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get operation(): i32 {
    return this._event.parameters[5].value.toI32();
  }
}

export class USDABorrowingFeePaid extends ethereum.Event {
  get params(): USDABorrowingFeePaid__Params {
    return new USDABorrowingFeePaid__Params(this);
  }
}

export class USDABorrowingFeePaid__Params {
  _event: USDABorrowingFeePaid;

  constructor(event: USDABorrowingFeePaid) {
    this._event = event;
  }

  get _asset(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _borrower(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _USDAFee(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class USDATokenAddressChanged extends ethereum.Event {
  get params(): USDATokenAddressChanged__Params {
    return new USDATokenAddressChanged__Params(this);
  }
}

export class USDATokenAddressChanged__Params {
  _event: USDATokenAddressChanged;

  constructor(event: USDATokenAddressChanged) {
    this._event = event;
  }

  get _usdaTokenAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class VaultParametersBaseChanged extends ethereum.Event {
  get params(): VaultParametersBaseChanged__Params {
    return new VaultParametersBaseChanged__Params(this);
  }
}

export class VaultParametersBaseChanged__Params {
  _event: VaultParametersBaseChanged;

  constructor(event: VaultParametersBaseChanged) {
    this._event = event;
  }

  get newAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class BorrowerOperations extends ethereum.SmartContract {
  static bind(address: Address): BorrowerOperations {
    return new BorrowerOperations("BorrowerOperations", address);
  }

  AGLStaking(): Address {
    let result = super.call("AGLStaking", "AGLStaking():(address)", []);

    return result[0].toAddress();
  }

  try_AGLStaking(): ethereum.CallResult<Address> {
    let result = super.tryCall("AGLStaking", "AGLStaking():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  AGLStakingAddress(): Address {
    let result = super.call(
      "AGLStakingAddress",
      "AGLStakingAddress():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_AGLStakingAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "AGLStakingAddress",
      "AGLStakingAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  DECIMAL_PRECISION(): BigInt {
    let result = super.call(
      "DECIMAL_PRECISION",
      "DECIMAL_PRECISION():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_DECIMAL_PRECISION(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "DECIMAL_PRECISION",
      "DECIMAL_PRECISION():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  ETH_REF_ADDRESS(): Address {
    let result = super.call(
      "ETH_REF_ADDRESS",
      "ETH_REF_ADDRESS():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_ETH_REF_ADDRESS(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "ETH_REF_ADDRESS",
      "ETH_REF_ADDRESS():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  NAME(): string {
    let result = super.call("NAME", "NAME():(string)", []);

    return result[0].toString();
  }

  try_NAME(): ethereum.CallResult<string> {
    let result = super.tryCall("NAME", "NAME():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  WETH(): Address {
    let result = super.call("WETH", "WETH():(address)", []);

    return result[0].toAddress();
  }

  try_WETH(): ethereum.CallResult<Address> {
    let result = super.tryCall("WETH", "WETH():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  aglParams(): Address {
    let result = super.call("aglParams", "aglParams():(address)", []);

    return result[0].toAddress();
  }

  try_aglParams(): ethereum.CallResult<Address> {
    let result = super.tryCall("aglParams", "aglParams():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  dexTrader(): Address {
    let result = super.call("dexTrader", "dexTrader():(address)", []);

    return result[0].toAddress();
  }

  try_dexTrader(): ethereum.CallResult<Address> {
    let result = super.tryCall("dexTrader", "dexTrader():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getCompositeDebt(_asset: Address, _debt: BigInt): BigInt {
    let result = super.call(
      "getCompositeDebt",
      "getCompositeDebt(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(_asset),
        ethereum.Value.fromUnsignedBigInt(_debt)
      ]
    );

    return result[0].toBigInt();
  }

  try_getCompositeDebt(
    _asset: Address,
    _debt: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getCompositeDebt",
      "getCompositeDebt(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(_asset),
        ethereum.Value.fromUnsignedBigInt(_debt)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getEntireSystemColl(_asset: Address): BigInt {
    let result = super.call(
      "getEntireSystemColl",
      "getEntireSystemColl(address):(uint256)",
      [ethereum.Value.fromAddress(_asset)]
    );

    return result[0].toBigInt();
  }

  try_getEntireSystemColl(_asset: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getEntireSystemColl",
      "getEntireSystemColl(address):(uint256)",
      [ethereum.Value.fromAddress(_asset)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getEntireSystemDebt(_asset: Address): BigInt {
    let result = super.call(
      "getEntireSystemDebt",
      "getEntireSystemDebt(address):(uint256)",
      [ethereum.Value.fromAddress(_asset)]
    );

    return result[0].toBigInt();
  }

  try_getEntireSystemDebt(_asset: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getEntireSystemDebt",
      "getEntireSystemDebt(address):(uint256)",
      [ethereum.Value.fromAddress(_asset)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  interestManager(): Address {
    let result = super.call(
      "interestManager",
      "interestManager():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_interestManager(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "interestManager",
      "interestManager():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  isInitialized(): boolean {
    let result = super.call("isInitialized", "isInitialized():(bool)", []);

    return result[0].toBoolean();
  }

  try_isInitialized(): ethereum.CallResult<boolean> {
    let result = super.tryCall("isInitialized", "isInitialized():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  sortedTroves(): Address {
    let result = super.call("sortedTroves", "sortedTroves():(address)", []);

    return result[0].toAddress();
  }

  try_sortedTroves(): ethereum.CallResult<Address> {
    let result = super.tryCall("sortedTroves", "sortedTroves():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  troveManager(): Address {
    let result = super.call("troveManager", "troveManager():(address)", []);

    return result[0].toAddress();
  }

  try_troveManager(): ethereum.CallResult<Address> {
    let result = super.tryCall("troveManager", "troveManager():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  usdaToken(): Address {
    let result = super.call("usdaToken", "usdaToken():(address)", []);

    return result[0].toAddress();
  }

  try_usdaToken(): ethereum.CallResult<Address> {
    let result = super.tryCall("usdaToken", "usdaToken():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class AdjustTroveCall extends ethereum.Call {
  get inputs(): AdjustTroveCall__Inputs {
    return new AdjustTroveCall__Inputs(this);
  }

  get outputs(): AdjustTroveCall__Outputs {
    return new AdjustTroveCall__Outputs(this);
  }
}

export class AdjustTroveCall__Inputs {
  _call: AdjustTroveCall;

  constructor(call: AdjustTroveCall) {
    this._call = call;
  }

  get _asset(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _assetSent(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _maxFeePercentage(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _collWithdrawal(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _USDAChange(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get _isDebtIncrease(): boolean {
    return this._call.inputValues[5].value.toBoolean();
  }

  get _upperHint(): Address {
    return this._call.inputValues[6].value.toAddress();
  }

  get _lowerHint(): Address {
    return this._call.inputValues[7].value.toAddress();
  }
}

export class AdjustTroveCall__Outputs {
  _call: AdjustTroveCall;

  constructor(call: AdjustTroveCall) {
    this._call = call;
  }
}

export class BurnCall extends ethereum.Call {
  get inputs(): BurnCall__Inputs {
    return new BurnCall__Inputs(this);
  }

  get outputs(): BurnCall__Outputs {
    return new BurnCall__Outputs(this);
  }
}

export class BurnCall__Inputs {
  _call: BurnCall;

  constructor(call: BurnCall) {
    this._call = call;
  }

  get _from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class BurnCall__Outputs {
  _call: BurnCall;

  constructor(call: BurnCall) {
    this._call = call;
  }
}

export class ClaimCollateralCall extends ethereum.Call {
  get inputs(): ClaimCollateralCall__Inputs {
    return new ClaimCollateralCall__Inputs(this);
  }

  get outputs(): ClaimCollateralCall__Outputs {
    return new ClaimCollateralCall__Outputs(this);
  }
}

export class ClaimCollateralCall__Inputs {
  _call: ClaimCollateralCall;

  constructor(call: ClaimCollateralCall) {
    this._call = call;
  }

  get _asset(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ClaimCollateralCall__Outputs {
  _call: ClaimCollateralCall;

  constructor(call: ClaimCollateralCall) {
    this._call = call;
  }
}

export class ClaimCollateralsCall extends ethereum.Call {
  get inputs(): ClaimCollateralsCall__Inputs {
    return new ClaimCollateralsCall__Inputs(this);
  }

  get outputs(): ClaimCollateralsCall__Outputs {
    return new ClaimCollateralsCall__Outputs(this);
  }
}

export class ClaimCollateralsCall__Inputs {
  _call: ClaimCollateralsCall;

  constructor(call: ClaimCollateralsCall) {
    this._call = call;
  }

  get _assets(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }
}

export class ClaimCollateralsCall__Outputs {
  _call: ClaimCollateralsCall;

  constructor(call: ClaimCollateralsCall) {
    this._call = call;
  }
}

export class CloseTroveCall extends ethereum.Call {
  get inputs(): CloseTroveCall__Inputs {
    return new CloseTroveCall__Inputs(this);
  }

  get outputs(): CloseTroveCall__Outputs {
    return new CloseTroveCall__Outputs(this);
  }
}

export class CloseTroveCall__Inputs {
  _call: CloseTroveCall;

  constructor(call: CloseTroveCall) {
    this._call = call;
  }

  get _asset(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class CloseTroveCall__Outputs {
  _call: CloseTroveCall;

  constructor(call: CloseTroveCall) {
    this._call = call;
  }
}

export class CloseTroveWithDexTraderCall extends ethereum.Call {
  get inputs(): CloseTroveWithDexTraderCall__Inputs {
    return new CloseTroveWithDexTraderCall__Inputs(this);
  }

  get outputs(): CloseTroveWithDexTraderCall__Outputs {
    return new CloseTroveWithDexTraderCall__Outputs(this);
  }
}

export class CloseTroveWithDexTraderCall__Inputs {
  _call: CloseTroveWithDexTraderCall;

  constructor(call: CloseTroveWithDexTraderCall) {
    this._call = call;
  }

  get _asset(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _amountIn(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _manualExchange(): Array<
    CloseTroveWithDexTraderCall_manualExchangeStruct
  > {
    return this._call.inputValues[2].value.toTupleArray<
      CloseTroveWithDexTraderCall_manualExchangeStruct
    >();
  }
}

export class CloseTroveWithDexTraderCall__Outputs {
  _call: CloseTroveWithDexTraderCall;

  constructor(call: CloseTroveWithDexTraderCall) {
    this._call = call;
  }
}

export class CloseTroveWithDexTraderCall_manualExchangeStruct extends ethereum.Tuple {
  get traderSelector(): Bytes {
    return this[0].toBytes();
  }

  get tokenInOut(): Array<Address> {
    return this[1].toAddressArray();
  }

  get data(): Bytes {
    return this[2].toBytes();
  }
}

export class MintCall extends ethereum.Call {
  get inputs(): MintCall__Inputs {
    return new MintCall__Inputs(this);
  }

  get outputs(): MintCall__Outputs {
    return new MintCall__Outputs(this);
  }
}

export class MintCall__Inputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }

  get _to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class MintCall__Outputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }
}

export class MoveETHGainToTroveCall extends ethereum.Call {
  get inputs(): MoveETHGainToTroveCall__Inputs {
    return new MoveETHGainToTroveCall__Inputs(this);
  }

  get outputs(): MoveETHGainToTroveCall__Outputs {
    return new MoveETHGainToTroveCall__Outputs(this);
  }
}

export class MoveETHGainToTroveCall__Inputs {
  _call: MoveETHGainToTroveCall;

  constructor(call: MoveETHGainToTroveCall) {
    this._call = call;
  }

  get _asset(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _amountMoved(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _borrower(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _upperHint(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get _lowerHint(): Address {
    return this._call.inputValues[4].value.toAddress();
  }
}

export class MoveETHGainToTroveCall__Outputs {
  _call: MoveETHGainToTroveCall;

  constructor(call: MoveETHGainToTroveCall) {
    this._call = call;
  }
}

export class OpenTroveCall extends ethereum.Call {
  get inputs(): OpenTroveCall__Inputs {
    return new OpenTroveCall__Inputs(this);
  }

  get outputs(): OpenTroveCall__Outputs {
    return new OpenTroveCall__Outputs(this);
  }
}

export class OpenTroveCall__Inputs {
  _call: OpenTroveCall;

  constructor(call: OpenTroveCall) {
    this._call = call;
  }

  get _asset(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenAmount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _maxFeePercentage(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _AGLmount(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _upperHint(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get _lowerHint(): Address {
    return this._call.inputValues[5].value.toAddress();
  }
}

export class OpenTroveCall__Outputs {
  _call: OpenTroveCall;

  constructor(call: OpenTroveCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetAGLParametersCall extends ethereum.Call {
  get inputs(): SetAGLParametersCall__Inputs {
    return new SetAGLParametersCall__Inputs(this);
  }

  get outputs(): SetAGLParametersCall__Outputs {
    return new SetAGLParametersCall__Outputs(this);
  }
}

export class SetAGLParametersCall__Inputs {
  _call: SetAGLParametersCall;

  constructor(call: SetAGLParametersCall) {
    this._call = call;
  }

  get _vaultParams(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetAGLParametersCall__Outputs {
  _call: SetAGLParametersCall;

  constructor(call: SetAGLParametersCall) {
    this._call = call;
  }
}

export class SetAGLccessCall extends ethereum.Call {
  get inputs(): SetAGLccessCall__Inputs {
    return new SetAGLccessCall__Inputs(this);
  }

  get outputs(): SetAGLccessCall__Outputs {
    return new SetAGLccessCall__Outputs(this);
  }
}

export class SetAGLccessCall__Inputs {
  _call: SetAGLccessCall;

  constructor(call: SetAGLccessCall) {
    this._call = call;
  }

  get _of(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _enable(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetAGLccessCall__Outputs {
  _call: SetAGLccessCall;

  constructor(call: SetAGLccessCall) {
    this._call = call;
  }
}

export class SetAddressesCall extends ethereum.Call {
  get inputs(): SetAddressesCall__Inputs {
    return new SetAddressesCall__Inputs(this);
  }

  get outputs(): SetAddressesCall__Outputs {
    return new SetAddressesCall__Outputs(this);
  }
}

export class SetAddressesCall__Inputs {
  _call: SetAddressesCall;

  constructor(call: SetAddressesCall) {
    this._call = call;
  }

  get _troveManagerAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _stabilityPoolManagerAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _gasPoolAddress(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _collSurplusPoolAddress(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get _sortedTrovesAddress(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get _usdaTokenAddress(): Address {
    return this._call.inputValues[5].value.toAddress();
  }

  get _aglStakingAddress(): Address {
    return this._call.inputValues[6].value.toAddress();
  }

  get _aglParameters(): Address {
    return this._call.inputValues[7].value.toAddress();
  }
}

export class SetAddressesCall__Outputs {
  _call: SetAddressesCall;

  constructor(call: SetAddressesCall) {
    this._call = call;
  }
}

export class SetDexTraderCall extends ethereum.Call {
  get inputs(): SetDexTraderCall__Inputs {
    return new SetDexTraderCall__Inputs(this);
  }

  get outputs(): SetDexTraderCall__Outputs {
    return new SetDexTraderCall__Outputs(this);
  }
}

export class SetDexTraderCall__Inputs {
  _call: SetDexTraderCall;

  constructor(call: SetDexTraderCall) {
    this._call = call;
  }

  get _dexTrader(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetDexTraderCall__Outputs {
  _call: SetDexTraderCall;

  constructor(call: SetDexTraderCall) {
    this._call = call;
  }
}

export class SetInterestManagerCall extends ethereum.Call {
  get inputs(): SetInterestManagerCall__Inputs {
    return new SetInterestManagerCall__Inputs(this);
  }

  get outputs(): SetInterestManagerCall__Outputs {
    return new SetInterestManagerCall__Outputs(this);
  }
}

export class SetInterestManagerCall__Inputs {
  _call: SetInterestManagerCall;

  constructor(call: SetInterestManagerCall) {
    this._call = call;
  }

  get _interestManager(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetInterestManagerCall__Outputs {
  _call: SetInterestManagerCall;

  constructor(call: SetInterestManagerCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}