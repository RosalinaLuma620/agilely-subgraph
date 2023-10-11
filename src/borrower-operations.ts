import { Bytes } from "@graphprotocol/graph-ts"
import {
  AGLStakingAddressChanged as AGLStakingAddressChangedEvent,
  CollSurplusPoolAddressChanged as CollSurplusPoolAddressChangedEvent,
  GasPoolAddressChanged as GasPoolAddressChangedEvent,
  Initialized as InitializedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  SortedTrovesAddressChanged as SortedTrovesAddressChangedEvent,
  TroveCreated as TroveCreatedEvent,
  TroveManagerAddressChanged as TroveManagerAddressChangedEvent,
  TroveUpdated as TroveUpdatedEvent,
} from "../generated/BorrowerOperations/BorrowerOperations"
import {
  TroveCreated,
  TroveUpdated,
} from "../generated/schema"

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
