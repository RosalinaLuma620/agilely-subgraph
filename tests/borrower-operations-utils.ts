import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  AGLStakingAddressChanged,
  CollSurplusPoolAddressChanged,
  GasPoolAddressChanged,
  Initialized,
  OwnershipTransferred,
  SortedTrovesAddressChanged,
  StabilityPoolManagerAddressChanged,
  TroveCreated,
  TroveManagerAddressChanged,
  TroveUpdated,
  TroveUpdated1,
  USDABorrowingFeePaid,
  USDATokenAddressChanged,
  VaultParametersBaseChanged
} from "../generated/BorrowerOperations/BorrowerOperations"

export function createAGLStakingAddressChangedEvent(
  _aglStakingAddress: Address
): AGLStakingAddressChanged {
  let aglStakingAddressChangedEvent = changetype<AGLStakingAddressChanged>(
    newMockEvent()
  )

  aglStakingAddressChangedEvent.parameters = new Array()

  aglStakingAddressChangedEvent.parameters.push(
    new ethereum.EventParam(
      "_aglStakingAddress",
      ethereum.Value.fromAddress(_aglStakingAddress)
    )
  )

  return aglStakingAddressChangedEvent
}

export function createCollSurplusPoolAddressChangedEvent(
  _collSurplusPoolAddress: Address
): CollSurplusPoolAddressChanged {
  let collSurplusPoolAddressChangedEvent = changetype<
    CollSurplusPoolAddressChanged
  >(newMockEvent())

  collSurplusPoolAddressChangedEvent.parameters = new Array()

  collSurplusPoolAddressChangedEvent.parameters.push(
    new ethereum.EventParam(
      "_collSurplusPoolAddress",
      ethereum.Value.fromAddress(_collSurplusPoolAddress)
    )
  )

  return collSurplusPoolAddressChangedEvent
}

export function createGasPoolAddressChangedEvent(
  _gasPoolAddress: Address
): GasPoolAddressChanged {
  let gasPoolAddressChangedEvent = changetype<GasPoolAddressChanged>(
    newMockEvent()
  )

  gasPoolAddressChangedEvent.parameters = new Array()

  gasPoolAddressChangedEvent.parameters.push(
    new ethereum.EventParam(
      "_gasPoolAddress",
      ethereum.Value.fromAddress(_gasPoolAddress)
    )
  )

  return gasPoolAddressChangedEvent
}

export function createInitializedEvent(version: i32): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(version))
    )
  )

  return initializedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createSortedTrovesAddressChangedEvent(
  _sortedTrovesAddress: Address
): SortedTrovesAddressChanged {
  let sortedTrovesAddressChangedEvent = changetype<SortedTrovesAddressChanged>(
    newMockEvent()
  )

  sortedTrovesAddressChangedEvent.parameters = new Array()

  sortedTrovesAddressChangedEvent.parameters.push(
    new ethereum.EventParam(
      "_sortedTrovesAddress",
      ethereum.Value.fromAddress(_sortedTrovesAddress)
    )
  )

  return sortedTrovesAddressChangedEvent
}

export function createStabilityPoolManagerAddressChangedEvent(
  _stabilityPoolAddress: Address
): StabilityPoolManagerAddressChanged {
  let stabilityPoolManagerAddressChangedEvent = changetype<
    StabilityPoolManagerAddressChanged
  >(newMockEvent())

  stabilityPoolManagerAddressChangedEvent.parameters = new Array()

  stabilityPoolManagerAddressChangedEvent.parameters.push(
    new ethereum.EventParam(
      "_stabilityPoolAddress",
      ethereum.Value.fromAddress(_stabilityPoolAddress)
    )
  )

  return stabilityPoolManagerAddressChangedEvent
}

export function createTroveCreatedEvent(
  _asset: Address,
  _borrower: Address,
  arrayIndex: BigInt
): TroveCreated {
  let troveCreatedEvent = changetype<TroveCreated>(newMockEvent())

  troveCreatedEvent.parameters = new Array()

  troveCreatedEvent.parameters.push(
    new ethereum.EventParam("_asset", ethereum.Value.fromAddress(_asset))
  )
  troveCreatedEvent.parameters.push(
    new ethereum.EventParam("_borrower", ethereum.Value.fromAddress(_borrower))
  )
  troveCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "arrayIndex",
      ethereum.Value.fromUnsignedBigInt(arrayIndex)
    )
  )

  return troveCreatedEvent
}

export function createTroveManagerAddressChangedEvent(
  _newTroveManagerAddress: Address
): TroveManagerAddressChanged {
  let troveManagerAddressChangedEvent = changetype<TroveManagerAddressChanged>(
    newMockEvent()
  )

  troveManagerAddressChangedEvent.parameters = new Array()

  troveManagerAddressChangedEvent.parameters.push(
    new ethereum.EventParam(
      "_newTroveManagerAddress",
      ethereum.Value.fromAddress(_newTroveManagerAddress)
    )
  )

  return troveManagerAddressChangedEvent
}

export function createTroveUpdatedEvent(
  _asset: Address,
  _borrower: Address,
  _debt: BigInt,
  _coll: BigInt,
  stake: BigInt,
  operation: i32
): TroveUpdated {
  let troveUpdatedEvent = changetype<TroveUpdated>(newMockEvent())

  troveUpdatedEvent.parameters = new Array()

  troveUpdatedEvent.parameters.push(
    new ethereum.EventParam("_asset", ethereum.Value.fromAddress(_asset))
  )
  troveUpdatedEvent.parameters.push(
    new ethereum.EventParam("_borrower", ethereum.Value.fromAddress(_borrower))
  )
  troveUpdatedEvent.parameters.push(
    new ethereum.EventParam("_debt", ethereum.Value.fromUnsignedBigInt(_debt))
  )
  troveUpdatedEvent.parameters.push(
    new ethereum.EventParam("_coll", ethereum.Value.fromUnsignedBigInt(_coll))
  )
  troveUpdatedEvent.parameters.push(
    new ethereum.EventParam("stake", ethereum.Value.fromUnsignedBigInt(stake))
  )
  troveUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "operation",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(operation))
    )
  )

  return troveUpdatedEvent
}

export function createTroveUpdated1Event(
  _asset: Address,
  _borrower: Address,
  _debt: BigInt,
  _coll: BigInt,
  stake: BigInt,
  operation: i32
): TroveUpdated1 {
  let troveUpdated1Event = changetype<TroveUpdated1>(newMockEvent())

  troveUpdated1Event.parameters = new Array()

  troveUpdated1Event.parameters.push(
    new ethereum.EventParam("_asset", ethereum.Value.fromAddress(_asset))
  )
  troveUpdated1Event.parameters.push(
    new ethereum.EventParam("_borrower", ethereum.Value.fromAddress(_borrower))
  )
  troveUpdated1Event.parameters.push(
    new ethereum.EventParam("_debt", ethereum.Value.fromUnsignedBigInt(_debt))
  )
  troveUpdated1Event.parameters.push(
    new ethereum.EventParam("_coll", ethereum.Value.fromUnsignedBigInt(_coll))
  )
  troveUpdated1Event.parameters.push(
    new ethereum.EventParam("stake", ethereum.Value.fromUnsignedBigInt(stake))
  )
  troveUpdated1Event.parameters.push(
    new ethereum.EventParam(
      "operation",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(operation))
    )
  )

  return troveUpdated1Event
}

export function createUSDABorrowingFeePaidEvent(
  _asset: Address,
  _borrower: Address,
  _USDAFee: BigInt
): USDABorrowingFeePaid {
  let usdaBorrowingFeePaidEvent = changetype<USDABorrowingFeePaid>(
    newMockEvent()
  )

  usdaBorrowingFeePaidEvent.parameters = new Array()

  usdaBorrowingFeePaidEvent.parameters.push(
    new ethereum.EventParam("_asset", ethereum.Value.fromAddress(_asset))
  )
  usdaBorrowingFeePaidEvent.parameters.push(
    new ethereum.EventParam("_borrower", ethereum.Value.fromAddress(_borrower))
  )
  usdaBorrowingFeePaidEvent.parameters.push(
    new ethereum.EventParam(
      "_USDAFee",
      ethereum.Value.fromUnsignedBigInt(_USDAFee)
    )
  )

  return usdaBorrowingFeePaidEvent
}

export function createUSDATokenAddressChangedEvent(
  _usdaTokenAddress: Address
): USDATokenAddressChanged {
  let usdaTokenAddressChangedEvent = changetype<USDATokenAddressChanged>(
    newMockEvent()
  )

  usdaTokenAddressChangedEvent.parameters = new Array()

  usdaTokenAddressChangedEvent.parameters.push(
    new ethereum.EventParam(
      "_usdaTokenAddress",
      ethereum.Value.fromAddress(_usdaTokenAddress)
    )
  )

  return usdaTokenAddressChangedEvent
}

export function createVaultParametersBaseChangedEvent(
  newAddress: Address
): VaultParametersBaseChanged {
  let vaultParametersBaseChangedEvent = changetype<VaultParametersBaseChanged>(
    newMockEvent()
  )

  vaultParametersBaseChangedEvent.parameters = new Array()

  vaultParametersBaseChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newAddress",
      ethereum.Value.fromAddress(newAddress)
    )
  )

  return vaultParametersBaseChangedEvent
}
