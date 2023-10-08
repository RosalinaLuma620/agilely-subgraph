import {
  AGLStakingAddressChanged as AGLStakingAddressChangedEvent,
  CollSurplusPoolAddressChanged as CollSurplusPoolAddressChangedEvent,
  GasPoolAddressChanged as GasPoolAddressChangedEvent,
  Initialized as InitializedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  SortedTrovesAddressChanged as SortedTrovesAddressChangedEvent,
  StabilityPoolManagerAddressChanged as StabilityPoolManagerAddressChangedEvent,
  TroveCreated as TroveCreatedEvent,
  TroveManagerAddressChanged as TroveManagerAddressChangedEvent,
  TroveUpdated as TroveUpdatedEvent,
  TroveUpdated1 as TroveUpdated1Event,
  USDABorrowingFeePaid as USDABorrowingFeePaidEvent,
  USDATokenAddressChanged as USDATokenAddressChangedEvent,
  VaultParametersBaseChanged as VaultParametersBaseChangedEvent
} from "../generated/BorrowerOperations/BorrowerOperations"
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
} from "../generated/schema"

export function handleAGLStakingAddressChanged(
  event: AGLStakingAddressChangedEvent
): void {
  let entity = new AGLStakingAddressChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._aglStakingAddress = event.params._aglStakingAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCollSurplusPoolAddressChanged(
  event: CollSurplusPoolAddressChangedEvent
): void {
  let entity = new CollSurplusPoolAddressChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._collSurplusPoolAddress = event.params._collSurplusPoolAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleGasPoolAddressChanged(
  event: GasPoolAddressChangedEvent
): void {
  let entity = new GasPoolAddressChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._gasPoolAddress = event.params._gasPoolAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.version = event.params.version

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSortedTrovesAddressChanged(
  event: SortedTrovesAddressChangedEvent
): void {
  let entity = new SortedTrovesAddressChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._sortedTrovesAddress = event.params._sortedTrovesAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleStabilityPoolManagerAddressChanged(
  event: StabilityPoolManagerAddressChangedEvent
): void {
  let entity = new StabilityPoolManagerAddressChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._stabilityPoolAddress = event.params._stabilityPoolAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTroveCreated(event: TroveCreatedEvent): void {
  let entity = new TroveCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._asset = event.params._asset
  entity._borrower = event.params._borrower
  entity.arrayIndex = event.params.arrayIndex

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTroveManagerAddressChanged(
  event: TroveManagerAddressChangedEvent
): void {
  let entity = new TroveManagerAddressChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._newTroveManagerAddress = event.params._newTroveManagerAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTroveUpdated(event: TroveUpdatedEvent): void {
  let entity = new TroveUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._asset = event.params._asset
  entity._borrower = event.params._borrower
  entity._debt = event.params._debt
  entity._coll = event.params._coll
  entity.stake = event.params.stake
  entity.operation = event.params.operation

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTroveUpdated1(event: TroveUpdated1Event): void {
  let entity = new TroveUpdated1(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._asset = event.params._asset
  entity._borrower = event.params._borrower
  entity._debt = event.params._debt
  entity._coll = event.params._coll
  entity.stake = event.params.stake
  entity.operation = event.params.operation

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUSDABorrowingFeePaid(
  event: USDABorrowingFeePaidEvent
): void {
  let entity = new USDABorrowingFeePaid(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._asset = event.params._asset
  entity._borrower = event.params._borrower
  entity._USDAFee = event.params._USDAFee

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUSDATokenAddressChanged(
  event: USDATokenAddressChangedEvent
): void {
  let entity = new USDATokenAddressChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._usdaTokenAddress = event.params._usdaTokenAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleVaultParametersBaseChanged(
  event: VaultParametersBaseChangedEvent
): void {
  let entity = new VaultParametersBaseChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newAddress = event.params.newAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
